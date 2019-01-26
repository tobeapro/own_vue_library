<template>
    <div>
        <div class="demo">
            <vk-button @click="infoMsg">提示消息</vk-button>   
            <vk-button type="primary"  @click="primaryMsg">提示消息</vk-button>
            <vk-button type="success" @click="successMsg">提示消息</vk-button>
            <vk-button type="warning" @click="warningMsg">提示消息</vk-button>
            <vk-button type="danger" @click="dangerMsg">提示消息</vk-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'message',
        methods: {
            infoMsg(){
                this.$message({
                    type:'info',
                    message:'这是条默认消息'
                })
            },
            primaryMsg(){
                this.$message({
                    type:'primary',
                    message:'这是条常规消息'
                })
            },
            successMsg(){
                this.$message({
                    type:'success',
                    message:'这是条成功消息'
                })
            },
            warningMsg(){
                this.$message({
                    type:'warning',
                    message:'这是条警告消息'
                })
            },
            dangerMsg(){
                this.$message({
                    type:'danger',
                    message:'这是条错误消息'
                })
            }
        }
    }
</script>

<style scoped>
.demo{
    padding:10px;
}
</style>