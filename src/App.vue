<template>
  <div id="app">
    <button @click="get">Get</button>
    <button @click="postJSON">post</button>
  </div>
</template>

<script>
const BASE_URL = 'http://localhost:2000'
export default {
  name: 'app',
  methods: {
  	get(){
  		this.$http.get(BASE_URL+'/get/test').then(res=>{
  			console.log(res)
  		}).catch(err=>{
  			console.log(err)
  		})
  	},
  	postJSON(){
  		this.$http.postJSON(BASE_URL+'/post/test',{a:1,b:2}).then(res=>{
  			console.log(res)
  		}).catch(err=>{
  			console.log(err)
  		})
  	}
  }
}
</script>

<style>

</style>