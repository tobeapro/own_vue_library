## VUE封装常用组件和工具类
- 小结

 目前工作主要使用`Vue`进行开发，日常引用各种第三方库和插件都是`import`导入和`Vue.use`挂载一梭子搞定。空时间呢，对`Vue`封装组件对一些简单的总结。
 
> 说到封装组件呢，我们应该知道每个`Vue`组件都是一个实例对象，然后我们需要去了解`Vue`提供的一些全局api
#### [Vue-api](https://cn.vuejs.org/v2/api/) 
 
- 项目启动
```
yarn install // 安装依赖
yarn serve  // 启动预览
```

- 项目目录
##### 源文件在`components`文件夹，事例文件在`views`文件夹下

- 主要内容
1. Button
2. [Message](./src/docs/message.md)
3. [Dialog](./src/docs/dialog.md)
4. [Http请求](./src/docs/http.md)
