import LinkedinApis from "../services/apisRequest.js"

const createLinkedInPost = async (userUrn, img_urn) => {
  try {
    const postText = 'testing . 😑';

    const postContent = {
      "author": `urn:li:person:${userUrn}`,
      "lifecycleState": "PUBLISHED",
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": postText,
          },
          "shareMediaCategory": "IMAGE",
          "media": [
            {
              "status": "READY",
              "description": {
                "text": "AutoScrpting ",
              }, "media": `urn:li:digitalmediaAsset:D4D22AQENoXsrqGsplQ`
            }
          ]
        }
      },
      "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "CONNECTIONS"
      }
    }

    const res = await LinkedinApis.createPost(postContent);
    console.log('LinkedIn post created successfully:', res.data);
  } catch (error) {
    console.error('Error creating LinkedIn post:', error);
  }
}

export default createLinkedInPost;
