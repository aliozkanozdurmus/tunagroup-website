import https from 'https';
import fs from 'fs';
import path from 'path';

const API_KEY = 'p5Cv572M2b7OT9wTGrSudLxvzvmIUYtSmmvMpJKOgk4dkCTrqbjlBdEh';

const imagesToDownload = [
  { query: 'medical technology laboratory', filename: 'hero-medical.jpg', orientation: 'landscape' },
  { query: 'industrial manufacturing factory', filename: 'hero-industrial.jpg', orientation: 'landscape' },
  { query: 'medical surgery hospital', filename: 'about-medical.jpg', orientation: 'landscape' },
  { query: 'corporate business team', filename: 'about-corporate.jpg', orientation: 'landscape' },
  { query: 'medical laboratory research', filename: 'stats-1.jpg', orientation: 'landscape' },
  { query: 'surgical operation hospital', filename: 'stats-2.jpg', orientation: 'landscape' },
  { query: 'medical team doctors', filename: 'stats-3.jpg', orientation: 'landscape' },
  { query: 'industrial production line', filename: 'stats-4.jpg', orientation: 'landscape' },
];

async function searchPexels(query, orientation = 'landscape') {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=5&size=large`;
    
    const options = {
      headers: {
        'Authorization': API_KEY
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'pexels');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Starting Pexels image download...\n');

  for (const image of imagesToDownload) {
    console.log(`Searching for: "${image.query}"...`);
    
    try {
      const results = await searchPexels(image.query, image.orientation);
      
      if (results.photos && results.photos.length > 0) {
        const photo = results.photos[0]; // Get the first result
        const imageUrl = photo.src.large2x || photo.src.large || photo.src.original;
        const filepath = path.join(outputDir, image.filename);
        
        console.log(`  Found: ${photo.photographer}'s photo`);
        console.log(`  Downloading to: ${filepath}`);
        
        await downloadImage(imageUrl, filepath);
        console.log(`  ✓ Downloaded successfully!\n`);
        
        // Save attribution info
        const attribution = {
          filename: image.filename,
          photographer: photo.photographer,
          photographerUrl: photo.photographer_url,
          pexelsUrl: photo.url,
          query: image.query
        };
        
        const attributionPath = path.join(outputDir, 'attributions.json');
        let attributions = [];
        if (fs.existsSync(attributionPath)) {
          attributions = JSON.parse(fs.readFileSync(attributionPath, 'utf-8'));
        }
        attributions.push(attribution);
        fs.writeFileSync(attributionPath, JSON.stringify(attributions, null, 2));
        
      } else {
        console.log(`  ✗ No results found for "${image.query}"\n`);
      }
      
      // Wait a bit between requests to be nice to the API
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
    }
  }

  console.log('Done!');
}

main();