let waterMarkDOM, observer;
const isObj = (opt, type, params) => {
  let _is = typeof opt !== type;
  if (_is) console.error(`${params} 只支持object，当前是 ${typeof opt}!`);
  return _is;
};

const createWaterMark = (waterMarkName, canvasOpt = {}, warpperEle = 'main', warStyle = {}) => {
  if (isObj(canvasOpt, 'object', 'canvasOpt')) return;
  if (isObj(warStyle, 'object', 'warStyle')) return;

  // 停止监控
  observer && observer.disconnect();
  if (waterMarkDOM) waterMarkDOM.remove();

  if (!waterMarkName) return;
  let getIdEle = (ele) => document.getElementById(ele);
  let clientWidth = document.body.clientWidth || document.body.offsetWidth;
  let width = window.parseInt(clientWidth, 10);
  let canvasWidth = width / window.parseInt(width / 200);
  let fontFamily = window.getComputedStyle(document.body)["font-family"];

  // canvas
  let canvas = document.createElement('canvas');
  canvas.width = canvasOpt?.width || canvasWidth; // 每个水印的宽高
  canvas.height = canvasOpt?.height || 150;
  let ctx = canvas.getContext('2d');
  ctx.font = `${canvasOpt?.fontSize || '16px'} ${canvasOpt?.fontFamily || fontFamily}`;
  ctx.fillStyle = 'rgba(8, 8, 8, 0.08)';
  ctx.rotate(canvasOpt?.rotate || -0.29);
  ctx.fillText(waterMarkName, canvasOpt?.fillX || 0, canvasOpt?.fillY || 80);

  // 将图片转为 dataURL(base64)
  let src = canvas.toDataURL(canvasOpt?.imgType || 'image/webp');

  // 添加dom 、样式
  const fragment = document.createDocumentFragment();
  waterMarkDOM = document.createElement('div');
  waterMarkDOM.id = 'water-mark';

  console.log(warStyle);

  // 防止有其他行内样式丢失
  waterMarkDOM.style.cssText += `
        ;width: 100%;
        height: 100%;
        top:0;
        left:0;
        position: fixed;
        overflow: hidden;
        z-index: 9999;
        pointer-events: none;
        background-repeat: repeat, repeat;
        background-position: ${canvas.width / 1.5}px ${canvas.height / 1.4}px;
        background-image: url("${src}");
  `;

  // 开发者自定义
  for (let type in warStyle) {
    waterMarkDOM.style[type] = warStyle[type];

  }

  let main = getIdEle(warpperEle);
  fragment.appendChild(waterMarkDOM);
  if (!getIdEle(waterMarkDOM.id)) {
    main ? main.appendChild(fragment) : console.error('水印加载失败');
  }

  const resetDom = (targetNode) => {
    targetNode.remove();
    createWaterMark(waterMarkName, canvasOpt, warpperEle, warStyle);
  };

  // 禁止修改水印节点
  let targetNode = getIdEle('water-mark');
  let config = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  };

  const mutationCallback = mutationList => {
    for (let mutation of mutationList) {
      // 遍历当前 dom 是否编辑了 主要针对是 attr 的修改  、  优化性能 只针对 water-mark 的 dom 监控 针对当前dom的内部信息
      if (mutation.oldValue === 'water-mark' || mutation.target.id === 'water-mark') {
        resetDom(targetNode);
        break;
      }
      // 防止直接干掉当前 dom
      for (let item of mutation.removedNodes) {
        if (item.id === 'water-mark') {
          resetDom(targetNode);
          break
        }
      }
    }
  };

  // 创建 MutationObserver 实例
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  observer = new MutationObserver(mutationCallback);
  // 开始监控目标节点
  observer.observe(main, config);
};

export default createWaterMark;
