<template>
  <div>
    <vk-button @click="get">Get</vk-button>
    <vk-button @click="postJSON">postJSON</vk-button>
    <vk-button @click="postForm">postForm</vk-button>
    <vk-button @click="postXML">postXML</vk-button>
    <div class="demo">
      <input type="file" @change="changeFile">
      <vk-button type="primary" @click="postFile">上传</vk-button>
    </div>
  </div>
</template>

<script>
const BASE_URL = "http://localhost:2000";
export default {
  name: "http",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    get() {
      this.$http
        .get(BASE_URL + "/get/test")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    postJSON() {
      this.$http
        .postJSON(BASE_URL + "/postJSON/test", { a: 1, b: 2 })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    postForm() {
      this.$http
        .postForm(BASE_URL + "/postForm/test", { a: 3, b: 4 })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeFile(e) {
      this.file = e.target.files[0];
    },
    postFile() {
      if (!this.file) {
        return alert("请选择上传的文件");
      }
      this.$http
        .postFile(BASE_URL + "/postFile/test", { file: this.file })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    postXML() {
      this.$http
        .postXML(BASE_URL + "/postXML/test")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>