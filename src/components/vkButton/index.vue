<template>
    <button class="vk-button" :class="['vk-button--'+type,'vk-button--'+size]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        name:'vk-button',
        props:{
            type:{
                type:String,
                default:'default'
            },
            size:{
                type:String,
                default:''
            }
        }
    }
</script>
<style lang="scss">
@import "../index.scss";
.vk-button{
    padding:6px 16px;
    font-size:14px;
    line-height:20px;
    text-align:center;
    color:$defaultColor; 
    background:#fff;
    border:1px solid $defaultColor;
    border-radius: 4px;
    &+.vk-button{
        margin-left:10px;
    }
    &.vk-button--small{
        padding:4px 12px;
        font-size:12px
    }
    &.vk-button--large{
        padding:8px 16px;
        font-size:16px;
    }
}
.vk-button--default:hover{
    color:$defaultActiveColor;
    border-color:$defaultActiveColor;  
}
.vk-button--primary{
    color:#fff;
    background:$primaryColor;
    border-color:$primaryColor;
    &:hover{
    background:$primaryActiveColor;
    border-color:$primaryActiveColor;
    }
}
.vk-button--warning{
    color:#fff;
    background:$warningColor;
    border-color:$warningColor;
    &:hover{
    background:$warningActiveColor;
    border-color:$warningActiveColor;
    }
}
.vk-button--danger{
    color:#fff;
    background:$dangerColor;
    border-color:$dangerColor;
    &:hover{
    background:$dangerActiveColor;
    border-color:$dangerActiveColor;
    }
}
</style>
