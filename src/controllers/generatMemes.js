import MemesApis from "../services/memesApis.js"
import axios from "axios";
import fs from "fs"

const generateMemes = async () => {
  let memesData;
  try {

    memesData = await MemesApis.getMemes();

    const dir = "./assets"
    const imagePath = `${dir}/memes-image.png`;

    // cheching if image directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const res = await MemesApis.downloadImg(memesData.data.url);
    res.data.pipe(fs.createWriteStream(imagePath));
    console.log(res)

    return memesData.data;
  } catch (error) {
    memesData = await MemesApis.getMemes();

    console.error('Error during fetching memes:', error);
  }
}

export default generateMemes;

// ================ response data ================
//  data: {
//     postLink: 'https://redd.it/1477t4o',
//     subreddit: 'memes',
//     title: 'Bezos addressing the CEO Convention attendees',
//     url: 'https://i.redd.it/p4bwcdssvg5b1.jpg',
//     nsfw: false,
//     spoiler: false,
//     author: 'BigClitMcphee',
//     ups: 1570,
//     preview: [
//       'https://preview.redd.it/p4bwcdssvg5b1.jpg?width=108&crop=smart&au
// to=webp&v=enabled&s=1c31acf93af757aa98584df698deebebac51a92a',
//       'https://preview.redd.it/p4bwcdssvg5b1.jpg?width=216&crop=smart&au
// to=webp&v=enabled&s=1641b4a077a39f02ca676ca2a68607f846eb4b22',
//       'https://preview.redd.it/p4bwcdssvg5b1.jpg?width=320&crop=smart&au
// to=webp&v=enabled&s=c592a03748d4a50e86399169a514d6d1bd7f9ec9'
//     ]
//   }
// }

