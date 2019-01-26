<template>
    <div>
        <div class="demo">
             <vk-button type="primary" @click="dialogVisible=true">打开对话框</vk-button>
        </div>
        <vk-dialog :visible.sync="dialogVisible"  title="标题" width="400px">
            <div>这是内容</div>
            <template slot="footer">
                <vk-button @click="dialogVisible=false" size="small">取消</vk-button>
                <vk-button type="primary" @click="confirmClick" size="small">确定</vk-button>
            </template>
        </vk-dialog>
    </div>
</template>

<script>
    export default {
        name:'dialog',
        data(){
            return {
                dialogVisible:false
            }
        },
        methods: {
            confirmClick(){
                this.dialogVisible = false
                this.$message({
                    type:'success',
                    message:'你确认啦'
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