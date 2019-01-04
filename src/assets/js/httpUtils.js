/*
  @author: tobepro;
  @email: 471091127@qq.com;
*/

export default {
    install(Vue, { axios, qs }){
        function http() {
            // GET请求
            this.get = function(url,data,wc=true) {
                return new Promise((resolve,reject)=>{
                    axios({
                        method: 'get',
                        url,
                        withCredentials: wc,
                        headers: {
                          'content-type': 'application/x-www-form-urlencode;'
                        }
                    }).then(res=>{
                        if(res.data){
                          return resolve(res.data)
                        }else{
                         return reject(res)
                        }
                    }).catch(err=>{
                       return reject(err)
                    })
                })              
            }
            // json格式提交
            this.postJSON = function(url,data={},wc=true) {
                return new Promise((resolve, reject) => {
                  axios({
                    method: 'post',
                    url,
                    data,
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                  }).then(res => {
                    return resolve(res)
                  }).catch(err => {
                    return reject(err)
                  })
                })
            }
            // form表单
            this.postForm = function(url,data={},wc=true) {
                return new Promise((resolve, reject) => {
                  axios({
                    method: 'post',
                    url,
                    data:qs.stringify(data),
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                  }).then(res => {
                    return resolve(res)
                  }).catch(err => {
                    return reject(err)
                  })
                })
            }
            // 文件传输
            this.postFile = function(url,data={},wc=true) {
                let formData = new FormData()
                for(let key in data){
                    formData.append(key,data[key])
                }
                return new Promise((resolve, reject) => {
                  axios({
                    method: 'post',
                    url,
                    data: formData,
                    withCredentials: true,
                  }).then(res => {
                    return resolve(res)
                  }).catch(err => {
                    return reject(err)
                  })
                })
            }
            // XML
            this.postXML = function(url,data={},wc=true) {
                return new Promise((resolve, reject) => {
                  axios({
                    method: 'post',
                    url,
                    data,
                    withCredentials: true,
                    headers: { 'Content-Type': 'text/xml' }
                  }).then(res => {
                    return resolve(res)
                  }).catch(err => {
                    return reject(err)
                  })
                })
            }
        }
        Vue.prototype.$http = new http()
    }
}