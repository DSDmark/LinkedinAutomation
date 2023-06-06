import LinkedinApis from "../services/apisRequest.js"

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
    const res = await LinkedinApis.imgUploader(r.data.value.uploadMechanism["com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"].uploadUrl, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWtbvVbR0XEy-OdcpW6iM6hkIxNpodMNGro2Vsg7yNuokAjSJx1BEXFBaZ09_4wzN_x8&usqp=CAU");

    return image_urn, res;

  } catch (error) {
    console.error('Error uploadImg:', error);
  }
}

export default imageUpload;

