import path from "path";
import LinkedinApis from "../services/linkedinApis.js"
import fs from "fs"

const imageUpload = async (userUrn) => {
  try {
    const uploadRegister = {
      "registerUploadRequest": {
        "owner": `urn:li:person:${userUrn}`,
        "recipes": [
          "urn:li:digitalmediaRecipe:feedshare-image"
        ],
        "serviceRelationships": [
          {
            "identifier": "urn:li:userGeneratedContent",
            "relationshipType": "OWNER"
          }
        ],
        "supportedUploadMechanism": [
          "SYNCHRONOUS_UPLOAD"
        ]
      }
    }

    const r = await LinkedinApis.imgRegistor(uploadRegister);
    const image_urn = r.data.value.asset.split(":").pop();

    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    const imagePath = path.join(__dirname, "../../assets", "memes-image.png")
    const image = fs.readFileSync(imagePath);

    const uploadUrl = r?.data.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'].uploadUrl

    const res = await LinkedinApis.imgUploader(uploadUrl, image);

    console.log(res)
    return image_urn
  } catch (error) {
    console.error('Error uploadImg:', error);
  }
}

export default imageUpload;

