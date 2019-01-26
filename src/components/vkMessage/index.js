import Vue from 'vue';
import Message from './index.vue';
let messageNode = Vue.extend(Message);
let instance = null
Vue.prototype.$message = function(options){
    options = options||{}
    if(typeof options === 'string'){
        options = {
            message: options
        }
    }
    instance = new messageNode({data:options});
    instance = instance.$mount();
    let wrapEle = document.querySelector('.vk-message-wrap');
    if(wrapEle){
        wrapEle.appendChild(instance.$el)
    }else{
        wrapEle = document.createElement('div')
        wrapEle.className = 'vk-message-wrap'
        document.body.appendChild(wrapEle)
        wrapEle.appendChild(instance.$el)
    }
    // document.body.appendChild(instance.$el)
    instance.visible = true 
}
export default Message