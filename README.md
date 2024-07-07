<p align="center">
    <a href="https://www.form-create.com">
        <img width="300" alt="FormCreate" src="https://static.form-create.com/file/img/info-logo2.png">
    </a>
</p>
## 二次开发说明

在1.1.2版本的基础上增加了如下特性：

1. 增加表字段属性，控件支持选择绑定字段
2. radio、checkbox、select 支持选择数据字典

**[帮助文档](https://view.form-create.com/) | [在线演示](https://form-create.com/designer?fr=github) | [FormCreate 文档](https://form-create.com/v2/guide/) | [🌈Vue3版本](https://github.com/xaboy/form-create-designer/tree/next)**

**FcDesigner 是基于 [@form-create/element-ui](https://github.com/xaboy/form-create) 实现的表单设计器组件。可以通过拖拽的方式快速创建表单，提高开发者对表单的开发效率，节省开发者的时间。**

## 特点
- 使用JSON数据生成表单
- 支持扩展自定义组件
- 内置33个常用的表单组件和布局组件
- 提供丰富的表单操作API
- 支持子表单和分组
- 支持事件配置
- 支持表格布局
- 支持表单验证

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！本项目还在不断开发完善中,如有任何建议或问题[请在这里提出](https://github.com/xaboy/form-create-designer/issues/new)

> 本项目QQ讨论群[629709230](https://jq.qq.com/?_wv=1027&k=F1FlEFIV)


![demo1](https://static.form-create.com/file/img/open-designer.jpg)

## 安装

```shell
npm install @form-create/designer
```

## 引入

**CDN:**

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import element -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- import form-create/element -->
<script src="//unpkg.com/@form-create/element-ui/dist/form-create.min.js"></script>
<!-- import form-create/designer -->
<script src="//unpkg.com/@form-create/designer/dist/index.min.js"></script>
```

**NodeJs:**

请自行导入`ElementUI`并挂载

```js
import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'

Vue.use(formCreate)
Vue.use(FcDesigner)
```

## 使用

```html
<fc-designer ref="designer"/>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present xaboy
