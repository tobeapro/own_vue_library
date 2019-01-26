<template>
    <transition name="fade">
        <div v-if="visible"
            :class="['vk-message',type?'vk-message--'+msgClass:'']"
            @mouseenter="clearTimer"
            @mouseleave="startTimer">
            <div class="vk-message-content">
                {{message}}
            </div>
        </div>
    </transition>
</template>

<script>
    const typeMap = {
        info:'info',
        primary:'primary',
        success:'success',
        warning:'warning',
        danger:'danger'
    }
    export default {
      name:'vk-message',
      data(){
          return {
              visible:false,
              type:'info',
              message:'这是消息提示',
              timer:null,
              duration:3000
          }
      },
      computed:{
          msgClass(){
            return this.type&&typeMap[this.type]
          }
      },
      mounted(){
          this.startTimer()
      },
      methods: {
          clearTimer(){
              this.timer&&window.clearTimeout(this.timer)
          },
          startTimer(){
              this.timer = setTimeout(()=>{
                this.visible = false
                this.$nextTick(()=>{
                    this.removeElement()
                })
            },this.duration)
          },
          removeElement(){
              this.$el.parentNode.removeChild(this.$el)
          }
      }
    }
</script>

<style lang="scss">
@import "../index.scss";
.vk-message-wrap{
    position: fixed;
    top:10%;
    left:50%;
    transform: translateX(-50%);
    .vk-message{
        margin-bottom:10px;
        min-width:200px;
        padding:6px 20px;
        font-size:14px;
        line-height:24px;
        background:#fff;
        border-radius: 2px;
    }
    .vk-message--info{
        color:$infoColor;
        box-shadow:0 0 4px 2px $infoColor;
    }
    .vk-message--primary{
        color:$primaryColor;
        box-shadow:0 0 4px 2px $primaryColor;
    }
    .vk-message--success{
        color:$successColor;
        box-shadow:0 0 4px 2px $successColor;
    }
    .vk-message--danger{
        color:$dangerColor;
        box-shadow:0 0 4px 2px $dangerColor;
    }
    .vk-message--warning{
        color:$warningColor;
        box-shadow:0 0 4px 2px $warningColor;
    }
}
</style>