import linkedinReq from "../config/http.config.js"

class LinkedinApisServices {

  getUrn() {
    return linkedinReq.get("/me");
  }
  createPost(postContent) {
    return linkedinReq.post("/ugcPosts", postContent)
  }
  imgRegistor(registerUpload) {
    return linkedinReq.post("/assets?action=registerUpload", registerUpload);
  }
  imgUploader(baseurl, img) {
    return linkedinReq.put(baseurl, img, { headers: { "Content-Type": "application/octet-stream" } });
  }
}

export default new LinkedinApisServices();
