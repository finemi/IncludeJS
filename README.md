# IncludeJS
前端文件包含插件，类似于使用JSP的“<jsp:include page="..." />”命令。
### 开始使用
引入jquery和jquery.include.js
```html
<script src="jquery.min.js"></script>
<script src="jquery.include.min.js"></script>
```
### 例子
* 在当前文档位置引入"header.html"的内容
```js
include('header.html');
```
* 在当前文档位置引入"header.html"中id为"header"的元素（空格+jQuery选择器）
```js
include('index.html #header');
```
* 将"content.html"中的所有".list"元素**加载到"#wrap"元素内**
```js
$('#wrap').include('content.html .list');
```
* 用"content.html"中的所有".list"元素**替换"#wrap"元素**
```js
$('#wrap').include('content.html .list',1);
```
