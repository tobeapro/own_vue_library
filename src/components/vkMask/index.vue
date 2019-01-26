<template>
    <div class="vk-mask" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'vk-mask',
        methods:{
            handleClick(evt){
                this.$emit('click',evt)
            }
        }
    }
</script>

<style lang="scss">
.vk-mask{
    position:fixed;
    z-index:2000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,.2);
    overflow: auto;
}
</style>