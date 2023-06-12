import { memesReq } from "../config/http.config.js"

class MemesApis {
  getMemes() {
    return memesReq.get();
  }
  downloadImg(baseurl) {
    return memesReq.get(baseurl, { responseType: 'stream' })
  }
}
;
export default new MemesApis();
