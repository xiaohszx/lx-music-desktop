import { httpFatch } from '../../request'
import { headers, timeout } from '../options'

const api_temp = {
  getMusicUrl(songInfo, type) {
    const requestObj = httpFatch(`http://tm.tempmusic.tk/url/kw/${songInfo.songmid}/${type}`, {
      method: 'get',
      headers,
      timeout,
    })
    requestObj.promise = requestObj.promise.then(({ body }) => {
      return body.code === 0 ? Promise.resolve({ type, url: body.data }) : Promise.reject(new Error(body.msg))
    })
    return requestObj
  },
}

export default api_temp
