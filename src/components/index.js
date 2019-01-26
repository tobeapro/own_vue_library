import vkButton from './vkButton';
import vkMask from './vkMask';
import vkDialog from './vkDialog';
import './vkMessage';
export default {
    install(Vue) {
        Vue.component('vk-button',vkButton);
        Vue.component('vk-mask',vkMask);
        Vue.component('vk-dialog',vkDialog);
    }
}