import LinkedinApis from "../services/apisRequest.js"

const createLinkedInPost = async (userUrn, img_urn) => {
  try {
    const postText = 'testing 123😑';

    const postContent = {
      author: `urn:li:person:${userUrn}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: postText,
          },
          shareMediaCategory: 'NONE',
        },
        "media": [
          {
            "status": "READY",
            "description": {
              "text": "AutoScript testing 123 T_T"
            }, "media": `urn:li:digitalmediaAsset:${img_urn}`
          }
        ]
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'CONNECTIONS',
      },
    }
    const res = await LinkedinApis.createPost(postContent);
    console.log('LinkedIn post created successfully:', res.data);
  } catch (error) {
    console.error('Error creating LinkedIn post:', error);
  }
}

export default createLinkedInPost;
