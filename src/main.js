import fetchUserUrn from "./controllers/fetchUserUrn.js"
import createLinkedInPost from "./controllers/createPost.js"
import imageUpload from "./controllers/imageUpload.js";

const newPost = async () => {
  let URN;

  if (!URN) URN = await fetchUserUrn();

  let img_Urn = await imageUpload(URN);

  if (URN && img_Urn) createLinkedInPost(URN, img_Urn);
}
newPost();
// setInterval(() => createPost, 1440000);


