## watermark-webp

### 介绍

常用于数据后台，可有效防止信息外泄，方便追踪

### 安装

```javascript
yarn add watermark-webp
```

### 使用

esm/框架 使用

```html
<div id="war"></div>

<script type="module">
  import waterMark from "watermark-webp"
  waterMark('水印  3557', null, 'war', {left: '10px'})
</script>
```

script直接引入方式
```html
<div id="war"></div>

<script src="https://cdn.jsdelivr.net/gh/hzfvictory/cdn@master/water-mark/index.js"></script>
<script>
  waterMark('水印  3557', null, 'war', {left: '10px'},)
</script>
</script>
```

<a href="https://tva1.sinaimg.cn/large/008i3skNly1gq0p32mtydj30ip09rdfy.jpg" target="_blank" rel="noopener noreferrer"><img src="https://tva1.sinaimg.cn/large/008i3skNly1gq0p32mtydj30ip09rdfy.jpg" alt='图片加载失败'></a>

### 预览效果

[https://hzfvictory.github.io/water-mark](https://hzfvictory.github.io/water-mark/example/)

### 使用注意事项

1. 为了防止开发者肆意修改dom已达到修改水印的目的，插件使用的 MutationObserver 异步实时监控修改dom,

MutationObserver 在 IE 中最低要就是 IE11，如果你的网站不需要支持IE或者只支持到 IE11，那么你可以放心的使用 MutationObserver，否则你可能需要用到上面提到的 MutationEvent 事件，当然如果你的网站还要支持IE8及以下版本，那么你只能和 Mutation 说拜拜了

![](https://segmentfault.com/img/bV1NUJ?w=1257&h=325)

2. 框架类的项目 ，防止加载不到要添加的 dom,应在 dom 加载完成后的周期函数，执行水印方法。
3. 建议挂载到外层的 dom 上，这样直接删除最外层 dom 话，内容被删除水印也没有留下的必要。


### Attributes



| 参数          | 说明           | 类型           | 可选值     | 默认值                                       |
| :------------ | :------------- | :------------- | :--------- | :------------------------------------------- |
| waterMarkName | 水印文字       | String\|Number | -          | -                                            |
| canvasOpt     | canvas的参数   | Object         | -          | 详情下面                                     |
| warpperEle    | 盛放的容器(id) | String         | -          | main                                         |
| warStyle      | 当前容器的样式 | Object         | 可自行添加 | {width: ’100%‘, height: '100%' , .........'} |

#### canvasOpt

| 参数       | 说明               | 默认值              |
| :--------- | :----------------- | :------------------ |
| width      | canvas宽           | ≈200px              |
| height     | canvas长           | 150px               |
| fontSize   | canvas文字大小     | 16px                |
| fontFamily | canvas文字类型     | 默认取当前body的    |
| fillStyle  | canvas文字颜色     | rgba(8, 8, 8, 0.08) |
| rotate     | 文字旋转           | -0.29               |
| fillX      | x轴                | 0                   |
| fillY      | y轴                | 80                  |
| imgType    | canvas转图片的类型 | image/webp          |

`imgType`默认是`image/webp` 对比其他图片格式体积小、质量高、解码加载速度快，如果当前浏览器不支持 `image/webp` 格式自动转换为 `image/png`,不推荐使用其他格式（部分带有背景色，遮挡页面内容）
