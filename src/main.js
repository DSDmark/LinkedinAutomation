import fetchUserUrn from "./controllers/fetchUserUrn.js"
import createLinkedInPost from "./controllers/createPost.js"
import imageUpload from "./controllers/imageUpload.js";

const newPost = async () => {
  let URN;
  if (!URN) URN = await fetchUserUrn();
  // createLinkedInPost(URN);
  let res = await imageUpload(URN);
  console.log(res)
}
newPost();
// setInterval(() => createPost, 1440000);

