import http from "../config/http.config.js"

class LinkedinApisServices {
  baseUrl = process.env.BASE_URL;

  createPost(postContent) {
    return http.post(this.baseUrl + "ugcPosts", postContent)
  }
  getUrn() {
    return http.get(this.baseUrl + "me");
  }
  imgRegistor(registerUpload) {
    return http.post(this.baseUrl + "assets?action=registerUpload", registerUpload);
  }
  imgUploader(baseurl, img) {
    return http.put(baseurl, img, { headers: { ContentType: "image/jpeg" }, });
  }
}

export default new LinkedinApisServices();
