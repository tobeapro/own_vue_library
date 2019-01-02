export default {
    install(Vue, { axios, qs }){
        function http() {
            this.get = function(url,data,wc=true) {
                return new Promise((resolve,reject)=>{
                    axios.get(url).then(res=>{
                        if(res.data){
                          return  resolve(res.data)
                        }else{
                            reject(res)
                        }
                    }).catch(err=>{
                       return reject(err)
                    })
                })              
            }
            this.postJSON = function(url,data={},wc=true) {
                return new Promise((resolve,reject)=>{
                    axios({
                        method: 'post',
                        url,
                        withCredentials: wc,
                        headers:{
                            'content-type':'application/x-www-form-urlencode; charset=utf-8',                          
                        },
                        data:qs.stringify(data)
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
        }
        Vue.prototype.$http = new http()
    }
}