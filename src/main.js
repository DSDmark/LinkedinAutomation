import fetchUserUrn from "./controllers/fetchUserUrn.js"
import createLinkedInPost from "./controllers/createPost.js"
import imageUpload from "./controllers/imageUpload.js";
import generatMemes from "./controllers/generatMemes.js";

const startUp = async () => {
  try {

    let URN;

    if (!URN) URN = await fetchUserUrn();

    const memesData = await generatMemes();

    let img_Urn = await imageUpload(URN);

    if (URN && img_Urn) createLinkedInPost(URN, img_Urn, memesData);

  } catch (err) {

    console.log(err);
  }

}

startUp();

