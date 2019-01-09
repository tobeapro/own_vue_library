/*
  @author: tobepro;
  @email: 471091127@qq.com;
  @remark: 通常我们会约定返回值满足某个条件时为请求得到的期望返回值，这里我使用返回值对象中的result字段作为判断，形如 { result:1 } 的对象
*/

export default {
    install(Vue, { axios, qs }){
        function http() {
            // GET请求
            this.get = function(url,wc=true) {
                return new Promise((resolve,reject)=>{
                    axios({
                        method: 'get',
                        url,
                        withCredentials: wc
                    }).then(res=>{
                        if(res.data&&res.data.result === 1){
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
            this.postJSON = function(url,data={}, wc=true) {
                return new Promise((resolve, reject) => {
                  axios({
                    method: 'post',
                    url,
                    data,
                    withCredentials: wc,
                    headers: {
                      'Content-Type': 'application/json' 
                    }
                  }).then(res => {
                    if(res.data&&res.data.result === 1){
                      return resolve(res.data)
                    }else{
                     return reject(res)
                    }
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
                    withCredentials: wc,
                    headers: { 
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  }).then(res => {
                    if(res.data&&res.data.result === 1){
                      return resolve(res.data)
                    }else{
                     return reject(res)
                    }
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
                    withCredentials: wc,
                  }).then(res => {
                    if(res.data&&res.data.result === 1){
                      return resolve(res.data)
                    }else{
                     return reject(res)
                    }
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
                    withCredentials: wc,
                    headers: { 
                      'Content-Type': 'text/xml'
                    }
                  }).then(res => {
                    if(res.data&&res.data.result === 1){
                      return resolve(res.data)
                    }else{
                     return reject(res)
                    }
                  }).catch(err => {
                    return reject(err)
                  })
                })
            }
        }
        Vue.prototype.$http = new http()
    }
}