<template>
    <div>
        <div class="demo">
            <vk-button size="small">default</vk-button>
            <vk-button type="primary" size="small">primary</vk-button>
            <vk-button type="success" size="small">success</vk-button>
            <vk-button type="warning" size="small">warning</vk-button>
            <vk-button type="danger" size="small">danger</vk-button>
        </div>
        <div class="demo">
            <vk-button>default</vk-button>
            <vk-button type="primary">primary</vk-button>
            <vk-button type="success">success</vk-button>
            <vk-button type="warning">warning</vk-button>
            <vk-button type="danger">danger</vk-button>
        </div>
        <div class="demo">
            <vk-button size="large">default</vk-button>
            <vk-button type="primary" size="large">primary</vk-button>
            <vk-button type="success" size="large">success</vk-button>
            <vk-button type="warning" size="large">warning</vk-button>
            <vk-button type="danger" size="large">danger</vk-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'button',
    }
</script>
<style soped>
.demo{
    padding:10px;
}
</style>