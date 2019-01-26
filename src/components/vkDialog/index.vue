<template>  
    <transition name="fade">
        <div class="vk-mask" v-if="visible" @click="close">   
            <div class="vk-dialog-wrap"  @click="handleClick" :style="{width:width}">             
                <div class="vk-dialog-header">
                    <div>{{title}}</div>
                    <div class="close-icon" @click="close">
                        x
                    </div>
                </div>
                <div class="vk-dialog-body">
                    <slot></slot>               
                </div>
                <div class="vk-dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>   
        </div>
    </transition>
</template>

<script>
    export default {
        name:'vk-dialog',
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            width:{
                type:String,
                default:'30%'
            },
            title:{
                type:String
            }
        },
        methods:{
            close(){
                if(this.visible){
                   this.$emit('update:visible',false)
                }
            },
            handleClick(evt){
                evt.stopPropagation()
            }
        }
    }
</script>

<style lang="scss">
@import "../index.scss";
.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to {
  margin-top:-30px;
  opacity: 0;
}
.vk-dialog-wrap{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width:30%;
    text-align: center;
    background:#fff;
}
.vk-dialog-header{
    height:40px;
    font-size:16px;
    line-height:40px;
    color:#fff;
    background:$primaryColor;
    .close-icon{
        top:0;
        right:10px;
        position:absolute;
        padding:0 6px;
        color:#eee;
        cursor: pointer;
        &:hover{
            color:#fff;
        }
    }
}
.vk-dialog-body{
    padding: 20px;
}
.vk-dialog-footer{
    padding:10px 20px;
}
</style>