import https from 'https';
import fs from 'fs';
import path from 'path';

const API_KEY = 'p5Cv572M2b7OT9wTGrSudLxvzvmIUYtSmmvMpJKOgk4dkCTrqbjlBdEh';

// Replacement images with different search queries
const imagesToReplace = [
  { query: 'modern factory automation robots', filename: 'hero-industrial.jpg', orientation: 'landscape' },
  { query: 'professional business meeting office', filename: 'about-corporate.jpg', orientation: 'landscape' },
  { query: 'packaging manufacturing warehouse', filename: 'stats-4.jpg', orientation: 'landscape' },
];

async function searchPexels(query, orientation = 'landscape', page = 1) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=10&page=${page}&size=large`;
    
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

  console.log('Replacing images with better alternatives...\n');

  for (const image of imagesToReplace) {
    console.log(`Searching for: "${image.query}"...`);
    
    try {
      const results = await searchPexels(image.query, image.orientation);
      
      if (results.photos && results.photos.length > 0) {
        // Pick a different photo (not the first one) for variety
        const photoIndex = Math.min(2, results.photos.length - 1);
        const photo = results.photos[photoIndex];
        const imageUrl = photo.src.large2x || photo.src.large || photo.src.original;
        const filepath = path.join(outputDir, image.filename);
        
        console.log(`  Found: ${photo.photographer}'s photo (ID: ${photo.id})`);
        console.log(`  Replacing: ${filepath}`);
        
        await downloadImage(imageUrl, filepath);
        console.log(`  ✓ Replaced successfully!\n`);
        
      } else {
        console.log(`  ✗ No results found for "${image.query}"\n`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
    }
  }

  console.log('Done replacing images!');
}

main();