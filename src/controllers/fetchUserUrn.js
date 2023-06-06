import LinkedinApis from "../services/apisRequest.js";

// fetching urn 
const fetchUserUrn = async () => {
  try {
    let res = await LinkedinApis.getUrn();
    return res.data.id;
  } catch (error) {
    console.error('Error fetching user URN:', error.data);
  }
}

export default fetchUserUrn;


