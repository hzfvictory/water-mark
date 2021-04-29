(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.waterMark = factory());
}(this, (function () { 'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.12'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue; // export native or passed

      out = own ? target[key] : source[key]; // prevent global pollution for namespaces

      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global) // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0:
                return new C();

              case 1:
                return new C(a);

              case 2:
                return new C(a, b);
            }

            return new C(a, b, c);
          }

          return C.apply(this, arguments);
        };

        F[PROTOTYPE] = C[PROTOTYPE];
        return F; // make static versions for prototype methods
      }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  }; // type bitmap


  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var $parseInt = _global.parseInt;
  var $trim = _stringTrim.trim;
  var hex = /^[-+]?0[xX]/;

  var _parseInt$2 = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;

  _export(_export.G + _export.F * (parseInt != _parseInt$2), {
    parseInt: _parseInt$2
  });

  var _parseInt$1 = _core.parseInt;

  var _parseInt = _parseInt$1;

  let waterMarkDOM, observer;

  const isObj = (opt, type, params) => {
    let _is = typeof opt !== type;

    if (_is) console.error(`${params} 只支持object，当前是 ${typeof opt}!`);
    return _is;
  };

  const createWaterMark = (waterMarkName, canvasOpt = {}, warpperEle = 'main', warStyle = {}) => {
    if (isObj(canvasOpt, 'object', 'canvasOpt')) return;
    if (isObj(warStyle, 'object', 'warStyle')) return; // 停止监控

    observer && observer.disconnect();
    if (waterMarkDOM) waterMarkDOM.remove();
    if (!waterMarkName) return;

    let getIdEle = ele => document.getElementById(ele);

    let clientWidth = document.body.clientWidth || document.body.offsetWidth;

    let width = _parseInt(clientWidth, 10);

    let canvasWidth = width / _parseInt(width / 200);

    let fontFamily = window.getComputedStyle(document.body)["font-family"]; // canvas

    let canvas = document.createElement('canvas');
    canvas.width = (canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.width) || canvasWidth; // 每个水印的宽高

    canvas.height = (canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.height) || 150;
    let ctx = canvas.getContext('2d');
    ctx.font = `${(canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.fontSize) || '16px'} ${(canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.fontFamily) || fontFamily}`;
    ctx.fillStyle = (canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.fillStyle) || 'rgba(8, 8, 8, 0.08)';
    ctx.rotate((canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.rotate) || -0.29);
    ctx.fillText(waterMarkName, (canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.fillX) || 0, (canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.fillY) || 80); // 将图片转为 dataURL(base64)

    const imgWebp = canvas.toDataURL('image/webp');
    const imgType = imgWebp.indexOf('data:image/webp') === 0;
    let src = imgWebp;
    if (canvasOpt !== null && canvasOpt !== void 0 && canvasOpt.imgType) src = canvas.toDataURL(canvasOpt === null || canvasOpt === void 0 ? void 0 : canvasOpt.imgType);
    if (!imgType) src = canvas.toDataURL('image/png'); // 添加dom 、样式

    const fragment = document.createDocumentFragment();
    waterMarkDOM = document.createElement('div');
    waterMarkDOM.id = 'water-mark';
    console.log(warStyle); // 防止有其他行内样式丢失

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
  `; // 开发者自定义

    for (let type in warStyle) {
      waterMarkDOM.style[type] = warStyle[type];
    }

    let main = getIdEle(warpperEle);
    fragment.appendChild(waterMarkDOM);

    if (!getIdEle(waterMarkDOM.id)) {
      main ? main.appendChild(fragment) : console.error('水印加载失败');
    }

    const resetDom = targetNode => {
      targetNode.remove();
      createWaterMark(waterMarkName, canvasOpt, warpperEle, warStyle);
    }; // 禁止修改水印节点


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
      var _iterator = _createForOfIteratorHelper(mutationList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          let mutation = _step.value;

          // 遍历当前 dom 是否编辑了 主要针对是 attr 的修改  、  优化性能 只针对 water-mark 的 dom 监控 针对当前dom的内部信息
          if (mutation.oldValue === 'water-mark' || mutation.target.id === 'water-mark') {
            resetDom(targetNode);
            break;
          } // 防止直接干掉当前 dom


          var _iterator2 = _createForOfIteratorHelper(mutation.removedNodes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              let item = _step2.value;

              if (item.id === 'water-mark') {
                resetDom(targetNode);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }; // 创建 MutationObserver 实例


    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    observer = new MutationObserver(mutationCallback); // 开始监控目标节点

    observer.observe(main, config);
  };

  return createWaterMark;

})));
