import LinkedinApis from "../services/apisRequest.js"

const createLinkedInPost = async (userUrn) => {
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
