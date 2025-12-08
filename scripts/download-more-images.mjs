import https from 'https';
import fs from 'fs';
import path from 'path';

const API_KEY = 'p5Cv572M2b7OT9wTGrSudLxvzvmIUYtSmmvMpJKOgk4dkCTrqbjlBdEh';

// Additional images for richer content
const imagesToDownload = [
  { query: 'medical device manufacturing', filename: 'gallery-1.jpg', orientation: 'landscape' },
  { query: 'clean room laboratory', filename: 'gallery-2.jpg', orientation: 'landscape' },
  { query: 'healthcare professionals team', filename: 'gallery-3.jpg', orientation: 'landscape' },
  { query: 'quality control inspection', filename: 'gallery-4.jpg', orientation: 'landscape' },
  { query: 'modern warehouse logistics', filename: 'gallery-5.jpg', orientation: 'landscape' },
  { query: 'corporate office meeting', filename: 'gallery-6.jpg', orientation: 'landscape' },
  { query: 'pharmaceutical production', filename: 'vision-bg.jpg', orientation: 'landscape' },
  { query: 'sustainable packaging eco', filename: 'values-bg.jpg', orientation: 'landscape' },
];

async function searchPexels(query, orientation = 'landscape', page = 1) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=5&page=${page}&size=large`;
    
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
    
    const downloadWithRedirect = (downloadUrl) => {
      https.get(downloadUrl, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          downloadWithRedirect(response.headers.location);
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
    };
    
    downloadWithRedirect(url);
  });
}

async function main() {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'pexels');

  console.log('Downloading additional images...\n');

  for (const image of imagesToDownload) {
    console.log(`Searching for: "${image.query}"...`);
    
    try {
      const results = await searchPexels(image.query, image.orientation);
      
      if (results.photos && results.photos.length > 0) {
        const photo = results.photos[0];
        const imageUrl = photo.src.large2x || photo.src.large || photo.src.original;
        const filepath = path.join(outputDir, image.filename);
        
        console.log(`  Found: ${photo.photographer}'s photo`);
        console.log(`  Downloading to: ${filepath}`);
        
        await downloadImage(imageUrl, filepath);
        console.log(`  ✓ Downloaded successfully!\n`);
        
      } else {
        console.log(`  ✗ No results found for "${image.query}"\n`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
    }
  }

  console.log('Done downloading additional images!');
}

main();