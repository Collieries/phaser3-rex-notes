(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexlineprogresscanvas = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }

  // copy from Phaser.GameObjects.Text

  var Utils = Phaser.Renderer.WebGL.Utils;
  var WebGLRenderer = function WebGLRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateTexture();
      src.dirty = false;
    }
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    var frame = src.frame;
    var width = frame.width;
    var height = frame.height;
    var getTint = Utils.getTintAppendFloatAlpha;
    var pipeline = renderer.pipelines.set(src.pipeline, src);
    var textureUnit = pipeline.setTexture2D(frame.glTexture, src);
    renderer.pipelines.preBatch(src);
    pipeline.batchTexture(src, frame.glTexture, width, height, src.x, src.y, width / src.resolution, height / src.resolution, src.scaleX, src.scaleY, src.rotation, src.flipX, src.flipY, src.scrollFactorX, src.scrollFactorY, src.displayOriginX, src.displayOriginY, 0, 0, width, height, getTint(src.tintTopLeft, camera.alpha * src._alphaTL), getTint(src.tintTopRight, camera.alpha * src._alphaTR), getTint(src.tintBottomLeft, camera.alpha * src._alphaBL), getTint(src.tintBottomRight, camera.alpha * src._alphaBR), src.tintFill, 0, 0, camera, parentMatrix, false, textureUnit);
    renderer.pipelines.postBatch(src);
  };

  // copy from Phaser.GameObjects.Text

  var CanvasRenderer = function CanvasRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateTexture();
      src.dirty = false;
    }
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    renderer.batchSprite(src, src.frame, camera, parentMatrix);
  };

  var Render = {
    renderWebGL: WebGLRenderer,
    renderCanvas: CanvasRenderer
  };

  var Color = Phaser.Display.Color;
  var CanvasMethods = {
    clear: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dirty = true;
      return this;
    },
    fill: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.dirty = true;
      return this;
    },
    drawFrame: function drawFrame(key, frame, x, y, width, height) {
      var textureFrame = this.scene.sys.textures.getFrame(key, frame);
      if (!textureFrame) {
        return this;
      }
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = 0;
      }
      if (width === undefined) {
        width = textureFrame.cutWidth;
      }
      if (height === undefined) {
        height = textureFrame.cutHeight;
      }
      this.context.drawImage(textureFrame.source.image, textureFrame.cutX, textureFrame.cutY, textureFrame.cutWidth, textureFrame.cutHeight, x, y, width, height);
      this.dirty = true;
      return this;
    },
    getDataURL: function getDataURL(type, encoderOptions) {
      return this.canvas.toDataURL(type, encoderOptions);
    },
    getPixel: function getPixel(x, y, out) {
      if (out === undefined) {
        out = new Color();
      }
      var rgb = this.context.getImageData(x, y, 1, 1);
      out.setTo(rgb.data[0], rgb.data[1], rgb.data[2], rgb.data[3]);
      return out;
    },
    setPixel: function setPixel(x, y, r, g, b, a) {
      if (typeof r !== 'number') {
        var color = r;
        r = color.red;
        g = color.green;
        b = color.blue;
        a = color.alpha;
      }
      if (a === undefined) {
        a = r !== 0 || g !== 0 || b !== 0 ? 255 : 0;
      }
      var imgData = this.context.createImageData(1, 1);
      imgData.data[0] = r;
      imgData.data[1] = g;
      imgData.data[2] = b;
      imgData.data[3] = a;
      this.context.putImageData(imgData, x, y);
      this.dirty = true;
      return this;
    }
  };

  var CopyCanvasToTexture = function CopyCanvasToTexture(scene, srcCanvas, key, x, y, width, height) {
    var textures = scene.sys.textures;
    var renderer = scene.renderer;
    if (x === undefined) {
      x = 0;
    }
    if (y === undefined) {
      y = 0;
    }
    if (width === undefined) {
      width = srcCanvas.width;
    }
    if (height === undefined) {
      height = srcCanvas.height;
    }
    var texture;
    if (textures.exists(key)) {
      texture = textures.get(key);
    } else {
      texture = textures.createCanvas(key, width, height);
    }
    var destCanvas = texture.getSourceImage();
    if (destCanvas.width !== width) {
      destCanvas.width = width;
    }
    if (destCanvas.height !== height) {
      destCanvas.height = height;
    }
    var destCtx = destCanvas.getContext('2d');
    destCtx.clearRect(0, 0, width, height);
    destCtx.drawImage(srcCanvas, x, y, width, height);
    if (renderer.gl && texture) {
      renderer.canvasToTexture(destCanvas, texture.source[0].glTexture, true, 0);
    }
  };

  var TextureMethods = {
    updateTexture: function updateTexture(callback, scope) {
      if (callback) {
        if (scope) {
          callback.call(scope, this.canvas, this.context);
        } else {
          callback(this.canvas, this.context);
        }
      }
      if (this.canvas.width !== this.frame.width || this.canvas.height !== this.frame.height) {
        this.frame.setSize(this.canvas.width, this.canvas.height);
      }
      if (this.renderer.gl) {
        this.frame.source.glTexture = this.renderer.canvasToTexture(this.canvas, this.frame.source.glTexture, true);
        this.frame.glTexture = this.frame.source.glTexture;
      }
      this.dirty = false;
      var input = this.input;
      if (input && !input.customHitArea) {
        input.hitArea.width = this.width;
        input.hitArea.height = this.height;
      }
      return this;
    },
    generateTexture: function generateTexture(key, x, y, width, height) {
      var srcCanvas = this.canvas;
      if (width === undefined) {
        width = srcCanvas.width;
      } else {
        width *= this.resolution;
      }
      if (height === undefined) {
        height = srcCanvas.height;
      } else {
        height *= this.resolution;
      }
      CopyCanvasToTexture(this.scene, srcCanvas, key, x, y, width, height);
      return this;
    },
    loadTexture: function loadTexture(key, frame) {
      var textureFrame = this.scene.sys.textures.getFrame(key, frame);
      if (!textureFrame) {
        return this;
      }
      if (this.width !== textureFrame.cutWidth || this.height !== textureFrame.cutHeight) {
        this.setSize(textureFrame.cutWidth, textureFrame.cutHeight);
      } else {
        this.clear();
      }
      this.drawFrame(key, frame);
      this.dirty = true;
      return this;
    }
  };

  var CanvasPool = Phaser.Display.Canvas.CanvasPool;
  var GameObject = Phaser.GameObjects.GameObject;
  var Canvas = /*#__PURE__*/function (_GameObject) {
    _inherits(Canvas, _GameObject);
    var _super = _createSuper(Canvas);
    function Canvas(scene, x, y, width, height) {
      var _this;
      _classCallCheck(this, Canvas);
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = 0;
      }
      if (width === undefined) {
        width = 1;
      }
      if (height === undefined) {
        height = 1;
      }
      _this = _super.call(this, scene, 'rexCanvas');
      _this.renderer = scene.sys.game.renderer;
      _this.resolution = 1;
      _this._width = width;
      _this._height = height;
      width = Math.max(Math.ceil(width * _this.resolution), 1);
      height = Math.max(Math.ceil(height * _this.resolution), 1);
      _this.canvas = CanvasPool.create(_assertThisInitialized(_this), width, height);
      _this.context = _this.canvas.getContext('2d');
      _this.dirty = false;
      _this.setPosition(x, y);
      _this.setOrigin(0.5, 0.5);
      _this.initPipeline();
      _this._crop = _this.resetCropObject();

      //  Create a Texture for this Text object
      _this.texture = scene.sys.textures.addCanvas(null, _this.canvas, true);

      //  Get the frame
      _this.frame = _this.texture.get();

      //  Set the resolution
      _this.frame.source.resolution = _this.resolution;
      if (_this.renderer && _this.renderer.gl) {
        //  Clear the default 1x1 glTexture, as we override it later
        _this.renderer.deleteTexture(_this.frame.source.glTexture);
        _this.frame.source.glTexture = null;
      }
      _this.dirty = true;
      return _this;
    }
    _createClass(Canvas, [{
      key: "preDestroy",
      value: function preDestroy() {
        CanvasPool.remove(this.canvas);
        this.texture.destroy();
        this.canvas = null;
        this.context = null;
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        this.setSize(value, this._height);
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        this.setSize(this._width, value);
      }
    }, {
      key: "setCanvasSize",
      value: function setCanvasSize(width, height) {
        if (this._width === width && this._height === height) {
          return this;
        }
        this._width = width;
        this._height = height;
        this.updateDisplayOrigin();
        width = Math.max(Math.ceil(width * this.resolution), 1);
        height = Math.max(Math.ceil(height * this.resolution), 1);
        this.canvas.width = width;
        this.canvas.height = height;
        this.frame.setSize(width, height);
        this.dirty = true;
        return this;
      }

      // setSize might be override
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.setCanvasSize(width, height);
        return this;
      }
    }, {
      key: "displayWidth",
      get: function get() {
        return this.scaleX * this._width;
      },
      set: function set(value) {
        this.scaleX = value / this._width;
      }
    }, {
      key: "displayHeight",
      get: function get() {
        return this.scaleY * this._height;
      },
      set: function set(value) {
        this.scaleY = value / this._height;
      }
    }, {
      key: "setDisplaySize",
      value: function setDisplaySize(width, height) {
        this.displayWidth = width;
        this.displayHeight = height;
        return this;
      }
    }, {
      key: "getCanvas",
      value: function getCanvas(readOnly) {
        if (!readOnly) {
          this.dirty = true;
        }
        return this.canvas;
      }
    }, {
      key: "getContext",
      value: function getContext(readOnly) {
        if (!readOnly) {
          this.dirty = true;
        }
        return this.context;
      }
    }, {
      key: "needRedraw",
      value: function needRedraw() {
        this.dirty = true;
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }]);
    return Canvas;
  }(GameObject);
  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Canvas, [Components.Alpha, Components.BlendMode, Components.Crop, Components.Depth, Components.Flip,
  // Components.FX,  // Open for 3.60
  Components.GetBounds, Components.Mask, Components.Origin, Components.Pipeline, Components.ScrollFactor, Components.Tint, Components.Transform, Components.Visible, Render, CanvasMethods, TextureMethods]);

  var Linear$1 = Phaser.Math.Linear;
  var Percent$1 = Phaser.Math.Percent;
  var ProgressValueMethods = {
    setValue: function setValue(value, min, max) {
      if (value === undefined || value === null) {
        return this;
      }
      if (min !== undefined) {
        value = Percent$1(value, min, max);
      }
      this.value = value;
      return this;
    },
    addValue: function addValue(inc, min, max) {
      if (min !== undefined) {
        inc = Percent$1(inc, min, max);
      }
      this.value += inc;
      return this;
    },
    getValue: function getValue(min, max) {
      var value = this.value;
      if (min !== undefined) {
        value = Linear$1(min, max, value);
      }
      return value;
    }
  };

  var EventEmitterMethods = {
    setEventEmitter: function setEventEmitter(eventEmitter, EventEmitterClass) {
      if (EventEmitterClass === undefined) {
        EventEmitterClass = Phaser.Events.EventEmitter; // Use built-in EventEmitter class by default
      }

      this._privateEE = eventEmitter === true || eventEmitter === undefined;
      this._eventEmitter = this._privateEE ? new EventEmitterClass() : eventEmitter;
      return this;
    },
    destroyEventEmitter: function destroyEventEmitter() {
      if (this._eventEmitter && this._privateEE) {
        this._eventEmitter.shutdown();
      }
      return this;
    },
    getEventEmitter: function getEventEmitter() {
      return this._eventEmitter;
    },
    on: function on() {
      if (this._eventEmitter) {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    once: function once() {
      if (this._eventEmitter) {
        this._eventEmitter.once.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    off: function off() {
      if (this._eventEmitter) {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    emit: function emit(event) {
      if (this._eventEmitter && event) {
        this._eventEmitter.emit.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    addListener: function addListener() {
      if (this._eventEmitter) {
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeListener: function removeListener() {
      if (this._eventEmitter) {
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeAllListeners: function removeAllListeners() {
      if (this._eventEmitter) {
        this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    listenerCount: function listenerCount() {
      if (this._eventEmitter) {
        return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
      }
      return 0;
    },
    listeners: function listeners() {
      if (this._eventEmitter) {
        return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
      }
      return [];
    },
    eventNames: function eventNames() {
      if (this._eventEmitter) {
        return this._eventEmitter.eventNames.apply(this._eventEmitter, arguments);
      }
      return [];
    }
  };

  var SceneClass = Phaser.Scene;
  var IsSceneObject = function IsSceneObject(object) {
    return object instanceof SceneClass;
  };

  var GetSceneObject = function GetSceneObject(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsSceneObject(object)) {
      // object = scene
      return object;
    } else if (object.scene && IsSceneObject(object.scene)) {
      // object = game object
      return object.scene;
    } else if (object.parent && object.parent.scene && IsSceneObject(object.parent.scene)) {
      // parent = bob object
      return object.parent.scene;
    } else {
      return null;
    }
  };

  var GameClass = Phaser.Game;
  var IsGame = function IsGame(object) {
    return object instanceof GameClass;
  };

  var GetGame = function GetGame(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsGame(object)) {
      return object;
    } else if (IsGame(object.game)) {
      return object.game;
    } else if (IsSceneObject(object)) {
      // object = scene object
      return object.sys.game;
    } else if (IsSceneObject(object.scene)) {
      // object = game object
      return object.scene.sys.game;
    }
  };

  var GetValue$7 = Phaser.Utils.Objects.GetValue;
  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase(parent, config) {
      _classCallCheck(this, ComponentBase);
      this.setParent(parent); // gameObject, scene, or game

      this.isShutdown = false;

      // Event emitter, default is private event emitter
      this.setEventEmitter(GetValue$7(config, 'eventEmitter', true));

      // Register callback of parent destroy event, also see `shutdown` method
      if (this.parent) {
        if (this.parent === this.scene) {
          // parent is a scene
          this.scene.sys.events.once('shutdown', this.onEnvDestroy, this);
        } else if (this.parent === this.game) {
          // parent is game
          this.game.events.once('shutdown', this.onEnvDestroy, this);
        } else if (this.parent.once) {
          // parent is game object or something else
          this.parent.once('destroy', this.onParentDestroy, this);
        }

        // bob object does not have event emitter
      }
    }
    _createClass(ComponentBase, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // parent might not be shutdown yet
        if (this.parent) {
          if (this.parent === this.scene) {
            // parent is a scene
            this.scene.sys.events.off('shutdown', this.onEnvDestroy, this);
          } else if (this.parent === this.game) {
            // parent is game
            this.game.events.off('shutdown', this.onEnvDestroy, this);
          } else if (this.parent.once) {
            // parent is game object or something else
            this.parent.off('destroy', this.onParentDestroy, this);
          }

          // bob object does not have event emitter
        }

        this.destroyEventEmitter();
        this.parent = undefined;
        this.scene = undefined;
        this.game = undefined;
        this.isShutdown = true;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        this.shutdown(fromScene);
      }
    }, {
      key: "onEnvDestroy",
      value: function onEnvDestroy() {
        this.destroy(true);
      }
    }, {
      key: "onParentDestroy",
      value: function onParentDestroy(parent, fromScene) {
        this.destroy(fromScene);
      }
    }, {
      key: "setParent",
      value: function setParent(parent) {
        this.parent = parent; // gameObject, scene, or game

        this.scene = GetSceneObject(parent);
        this.game = GetGame(parent);
        return this;
      }
    }]);
    return ComponentBase;
  }();
  Object.assign(ComponentBase.prototype, EventEmitterMethods);

  var GetValue$6 = Phaser.Utils.Objects.GetValue;
  var TickTask = /*#__PURE__*/function (_ComponentBase) {
    _inherits(TickTask, _ComponentBase);
    var _super = _createSuper(TickTask);
    function TickTask(parent, config) {
      var _this;
      _classCallCheck(this, TickTask);
      _this = _super.call(this, parent, config);
      _this._isRunning = false;
      _this.isPaused = false;
      _this.tickingState = false;
      _this.setTickingMode(GetValue$6(config, 'tickingMode', 1));
      // boot() later
      return _this;
    }

    // override
    _createClass(TickTask, [{
      key: "boot",
      value: function boot() {
        if (this.tickingMode === 2 && !this.tickingState) {
          this.startTicking();
        }
      }

      // override
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        this.stop();
        if (this.tickingState) {
          this.stopTicking();
        }
        _get(_getPrototypeOf(TickTask.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "setTickingMode",
      value: function setTickingMode(mode) {
        if (typeof mode === 'string') {
          mode = TICKINGMODE[mode];
        }
        this.tickingMode = mode;
      }

      // override
    }, {
      key: "startTicking",
      value: function startTicking() {
        this.tickingState = true;
      }

      // override
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        this.tickingState = false;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this._isRunning;
      },
      set: function set(value) {
        if (this._isRunning === value) {
          return;
        }
        this._isRunning = value;
        if (this.tickingMode === 1 && value != this.tickingState) {
          if (value) {
            this.startTicking();
          } else {
            this.stopTicking();
          }
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.isPaused = false;
        this.isRunning = true;
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        // Only can ba paused in running state
        if (this.isRunning) {
          this.isPaused = true;
          this.isRunning = false;
        }
        return this;
      }
    }, {
      key: "resume",
      value: function resume() {
        // Only can ba resumed in paused state (paused from running state)
        if (this.isPaused) {
          this.isRunning = true;
        }
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isPaused = false;
        this.isRunning = false;
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.isPaused = false;
        this.isRunning = false;
        this.emit('complete', this.parent, this);
      }
    }]);
    return TickTask;
  }(ComponentBase);
  var TICKINGMODE = {
    'no': 0,
    'lazy': 1,
    'always': 2
  };

  var GetValue$5 = Phaser.Utils.Objects.GetValue;
  var SceneUpdateTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(SceneUpdateTickTask, _TickTask);
    var _super = _createSuper(SceneUpdateTickTask);
    function SceneUpdateTickTask(parent, config) {
      var _this;
      _classCallCheck(this, SceneUpdateTickTask);
      _this = _super.call(this, parent, config);

      // scene update : update, preupdate, postupdate, prerender, render
      // game update : step, poststep, 

      // If this.scene is not available, use game's 'step' event
      var defaultEventName = _this.scene ? 'update' : 'step';
      _this.tickEventName = GetValue$5(config, 'tickEventName', defaultEventName);
      _this.isSceneTicker = !IsGameUpdateEvent(_this.tickEventName);
      return _this;
    }
    _createClass(SceneUpdateTickTask, [{
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "startTicking", this).call(this);
        if (this.isSceneTicker) {
          this.scene.sys.events.on(this.tickEventName, this.update, this);
        } else {
          this.game.events.on(this.tickEventName, this.update, this);
        }
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "stopTicking", this).call(this);
        if (this.isSceneTicker && this.scene) {
          // Scene might be destoryed
          this.scene.sys.events.off(this.tickEventName, this.update, this);
        } else if (this.game) {
          this.game.events.off(this.tickEventName, this.update, this);
        }
      }

      // update(time, delta) {
      //     
      // }
    }]);
    return SceneUpdateTickTask;
  }(TickTask);
  var IsGameUpdateEvent = function IsGameUpdateEvent(eventName) {
    return eventName === 'step' || eventName === 'poststep';
  };

  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var Clamp$1 = Phaser.Math.Clamp;
  var Timer = /*#__PURE__*/function () {
    function Timer(config) {
      _classCallCheck(this, Timer);
      this.resetFromJSON(config);
    }
    _createClass(Timer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.state = GetValue$4(o, 'state', IDLE);
        this.timeScale = GetValue$4(o, 'timeScale', 1);
        this.delay = GetValue$4(o, 'delay', 0);
        this.repeat = GetValue$4(o, 'repeat', 0);
        this.repeatCounter = GetValue$4(o, 'repeatCounter', 0);
        this.repeatDelay = GetValue$4(o, 'repeatDelay', 0);
        this.duration = GetValue$4(o, 'duration', 0);
        this.nowTime = GetValue$4(o, 'nowTime', 0);
        this.justRestart = GetValue$4(o, 'justRestart', false);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          state: this.state,
          timeScale: this.timeScale,
          delay: this.delay,
          repeat: this.repeat,
          repeatCounter: this.repeatCounter,
          repeatDelay: this.repeatDelay,
          duration: this.duration,
          nowTime: this.nowTime,
          justRestart: this.justRestart
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setTimeScale",
      value: function setTimeScale(timeScale) {
        this.timeScale = timeScale;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(delay) {
        if (delay === undefined) {
          delay = 0;
        }
        this.delay = delay;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      }
    }, {
      key: "setRepeatInfinity",
      value: function setRepeatInfinity() {
        this.repeat = -1;
        return this;
      }
    }, {
      key: "setRepeatDelay",
      value: function setRepeatDelay(repeatDelay) {
        this.repeatDelay = repeatDelay;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        this.nowTime = this.delay > 0 ? -this.delay : 0;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.repeatCounter = 0;
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.state = IDLE;
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (this.state === IDLE || this.state === DONE || delta === 0 || this.timeScale === 0) {
          return;
        }
        this.nowTime += delta * this.timeScale;
        this.justRestart = false;
        if (this.nowTime >= this.duration) {
          if (this.repeat === -1 || this.repeatCounter < this.repeat) {
            this.repeatCounter++;
            this.justRestart = true;
            this.nowTime -= this.duration;
            if (this.repeatDelay > 0) {
              this.nowTime -= this.repeatDelay;
              this.state = REPEATDELAY;
            }
          } else {
            this.nowTime = this.duration;
            this.state = DONE;
          }
        } else if (this.nowTime >= 0) {
          this.state = COUNTDOWN;
        }
      }
    }, {
      key: "t",
      get: function get() {
        var t;
        switch (this.state) {
          case IDLE:
          case DELAY:
          case REPEATDELAY:
            t = 0;
            break;
          case COUNTDOWN:
            t = this.nowTime / this.duration;
            break;
          case DONE:
            t = 1;
            break;
        }
        return Clamp$1(t, 0, 1);
      },
      set: function set(value) {
        value = Clamp$1(value, -1, 1);
        if (value < 0) {
          this.state = DELAY;
          this.nowTime = -this.delay * value;
        } else {
          this.state = COUNTDOWN;
          this.nowTime = this.duration * value;
          if (value === 1 && this.repeat !== 0) {
            this.repeatCounter++;
          }
        }
      }
    }, {
      key: "setT",
      value: function setT(t) {
        this.t = t;
        return this;
      }
    }, {
      key: "isIdle",
      get: function get() {
        return this.state === IDLE;
      }
    }, {
      key: "isDelay",
      get: function get() {
        return this.state === DELAY;
      }
    }, {
      key: "isCountDown",
      get: function get() {
        return this.state === COUNTDOWN;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this.state === DELAY || this.state === COUNTDOWN;
      }
    }, {
      key: "isDone",
      get: function get() {
        return this.state === DONE;
      }
    }, {
      key: "isOddIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 1;
      }
    }, {
      key: "isEvenIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 0;
      }
    }]);
    return Timer;
  }();
  var IDLE = 0;
  var DELAY = 1;
  var COUNTDOWN = 2;
  var REPEATDELAY = 3;
  var DONE = -1;

  var TimerTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(TimerTickTask, _TickTask);
    var _super = _createSuper(TimerTickTask);
    function TimerTickTask(parent, config) {
      var _this;
      _classCallCheck(this, TimerTickTask);
      _this = _super.call(this, parent, config);
      _this.timer = new Timer();
      // boot() later 
      return _this;
    }

    // override
    _createClass(TimerTickTask, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        _get(_getPrototypeOf(TimerTickTask.prototype), "shutdown", this).call(this, fromScene);
        this.timer.destroy();
        this.timer = undefined;
      }
    }, {
      key: "start",
      value: function start() {
        this.timer.start();
        _get(_getPrototypeOf(TimerTickTask.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.timer.stop();
        _get(_getPrototypeOf(TimerTickTask.prototype), "stop", this).call(this);
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.timer.stop();
        _get(_getPrototypeOf(TimerTickTask.prototype), "complete", this).call(this);
        return this;
      }
    }]);
    return TimerTickTask;
  }(SceneUpdateTickTask);

  var GetValue$3 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var GetEaseFunction = Phaser.Tweens.Builders.GetEaseFunction;
  var EaseValueTaskBase = /*#__PURE__*/function (_TimerTask) {
    _inherits(EaseValueTaskBase, _TimerTask);
    var _super = _createSuper(EaseValueTaskBase);
    function EaseValueTaskBase() {
      _classCallCheck(this, EaseValueTaskBase);
      return _super.apply(this, arguments);
    }
    _createClass(EaseValueTaskBase, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.timer.resetFromJSON(GetValue$3(o, 'timer'));
        this.setEnable(GetValue$3(o, 'enable', true));
        this.setTarget(GetValue$3(o, 'target', this.parent));
        this.setDelay(GetAdvancedValue(o, 'delay', 0));
        this.setDuration(GetAdvancedValue(o, 'duration', 1000));
        this.setEase(GetValue$3(o, 'ease', 'Linear'));
        this.setRepeat(GetValue$3(o, 'repeat', 0));
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e == undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setTarget",
      value: function setTarget(target) {
        if (target === undefined) {
          target = this.parent;
        }
        this.target = target;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(time) {
        this.delay = time;
        // Assign `this.timer.setRepeat(repeat)` manually
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(time) {
        this.duration = time;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        // Assign `this.timer.setRepeat(repeat)` manually
        return this;
      }
    }, {
      key: "setRepeatDelay",
      value: function setRepeatDelay(repeatDelay) {
        this.repeatDelay = repeatDelay;
        // Assign `this.timer.setRepeatDelay(repeatDelay)` manually
        return this;
      }
    }, {
      key: "setEase",
      value: function setEase(ease) {
        if (ease === undefined) {
          ease = 'Linear';
        }
        this.ease = ease;
        this.easeFn = GetEaseFunction(ease);
        return this;
      }

      // Override
    }, {
      key: "start",
      value: function start() {
        // Ignore start if timer is running, i.e. in DELAY, o RUN state
        if (this.timer.isRunning) {
          return this;
        }
        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "restart",
      value: function restart() {
        this.timer.stop();
        this.start.apply(this, arguments);
        return this;
      }
    }, {
      key: "stop",
      value: function stop(toEnd) {
        if (toEnd === undefined) {
          toEnd = false;
        }
        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "stop", this).call(this);
        if (toEnd) {
          this.timer.setT(1);
          this.updateGameObject(this.target, this.timer);
          this.complete();
        }
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (!this.isRunning || !this.enable || !this.parent.active) {
          return this;
        }
        var target = this.target,
          timer = this.timer;
        timer.update(time, delta);

        // isDelay, isCountDown, isDone
        if (!timer.isDelay) {
          this.updateGameObject(target, timer);
        }
        this.emit('update', target, this);
        if (timer.isDone) {
          this.complete();
        }
        return this;
      }

      // Override
    }, {
      key: "updateGameObject",
      value: function updateGameObject(target, timer) {}
    }]);
    return EaseValueTaskBase;
  }(TimerTickTask);

  var GetValue$2 = Phaser.Utils.Objects.GetValue;
  var Linear = Phaser.Math.Linear;
  var EaseValueTask = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseValueTask, _EaseValueTaskBase);
    var _super = _createSuper(EaseValueTask);
    function EaseValueTask(gameObject, config) {
      var _this;
      _classCallCheck(this, EaseValueTask);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON();
      _this.boot();
      return _this;
    }
    _createClass(EaseValueTask, [{
      key: "start",
      value: function start(config) {
        if (this.timer.isRunning) {
          return this;
        }
        var target = this.target;
        this.propertyKey = GetValue$2(config, 'key', 'value');
        var currentValue = target[this.propertyKey];
        this.fromValue = GetValue$2(config, 'from', currentValue);
        this.toValue = GetValue$2(config, 'to', currentValue);
        this.setEase(GetValue$2(config, 'ease', this.ease));
        this.setDuration(GetValue$2(config, 'duration', this.duration));
        this.setRepeat(GetValue$2(config, 'repeat', 0));
        this.setDelay(GetValue$2(config, 'delay', 0));
        this.setRepeatDelay(GetValue$2(config, 'repeatDelay', 0));
        this.timer.setDuration(this.duration).setRepeat(this.repeat).setDelay(this.delay).setRepeatDelay(this.repeatDelay);
        target[this.propertyKey] = this.fromValue;
        _get(_getPrototypeOf(EaseValueTask.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(target, timer) {
        var t = timer.t;
        t = this.easeFn(t);
        target[this.propertyKey] = Linear(this.fromValue, this.toValue, t);
      }
    }]);
    return EaseValueTask;
  }(EaseValueTaskBase);

  var Percent = Phaser.Math.Percent;
  var SetEaseValuePropName = function SetEaseValuePropName(name) {
    this.easeValuePropName = name;
    return this;
  };
  var SetEaseValueDuration = function SetEaseValueDuration(duration) {
    this.easeValueDuration = duration;
    return this;
  };
  var SetEaseValueFunction = function SetEaseValueFunction(ease) {
    this.easeFunction = ease;
    return this;
  };
  var StopEaseValue = function StopEaseValue() {
    if (this.easeValueTask) {
      this.easeValueTask.stop();
    }
    return this;
  };
  var EaseValueTo = function EaseValueTo(value, min, max) {
    if (value === undefined || value === null) {
      return this;
    }
    if (min !== undefined) {
      value = Percent(value, min, max);
    }
    if (this.easeValueTask === undefined) {
      this.easeValueTask = new EaseValueTask(this, {
        eventEmitter: null
      });
    }
    this.easeValueTask.restart({
      key: this.easeValuePropName,
      to: value,
      duration: this.easeValueDuration,
      ease: this.easeFunction
    });
    return this;
  };
  var EaseValueRepeat = function EaseValueRepeat(from, to, repeat, repeatDelay) {
    if (repeat === undefined) {
      repeat = -1;
    }
    if (repeatDelay === undefined) {
      repeatDelay = 0;
    }
    if (this.easeValueTask === undefined) {
      this.easeValueTask = new EaseValueTask(this, {
        eventEmitter: null
      });
    }
    this.easeValueTask.restart({
      key: this.easeValuePropName,
      from: from,
      to: to,
      duration: this.easeValueDuration,
      ease: this.easeFunction,
      repeat: repeat,
      repeatDelay: repeatDelay
    });
    return this;
  };
  var EaseValueMethods = {
    setEaseValuePropName: SetEaseValuePropName,
    setEaseValueDuration: SetEaseValueDuration,
    setEaseValueFunction: SetEaseValueFunction,
    stopEaseValue: StopEaseValue,
    easeValueTo: EaseValueTo,
    easeValueRepeat: EaseValueRepeat
  };

  var GetValue$1 = Phaser.Utils.Objects.GetValue;
  var Clamp = Phaser.Math.Clamp;
  function ProgressBase (BaseClass) {
    var ProgressBase = /*#__PURE__*/function (_BaseClass) {
      _inherits(ProgressBase, _BaseClass);
      var _super = _createSuper(ProgressBase);
      function ProgressBase() {
        _classCallCheck(this, ProgressBase);
        return _super.apply(this, arguments);
      }
      _createClass(ProgressBase, [{
        key: "bootProgressBase",
        value: function bootProgressBase(config) {
          this.eventEmitter = GetValue$1(config, 'eventEmitter', this);
          var callback = GetValue$1(config, 'valuechangeCallback', null);
          if (callback !== null) {
            var scope = GetValue$1(config, 'valuechangeCallbackScope', undefined);
            this.eventEmitter.on('valuechange', callback, scope);
          }
          this.setEaseValuePropName('value').setEaseValueDuration(GetValue$1(config, 'easeValue.duration', 0)).setEaseValueFunction(GetValue$1(config, 'easeValue.ease', 'Linear'));
          return this;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          value = Clamp(value, 0, 1);
          var oldValue = this._value;
          var valueChanged = oldValue != value;
          this.dirty = this.dirty || valueChanged;
          this._value = value;
          if (valueChanged) {
            this.eventEmitter.emit('valuechange', this._value, oldValue, this.eventEmitter);
          }
        }
      }]);
      return ProgressBase;
    }(BaseClass);
    Object.assign(ProgressBase.prototype, ProgressValueMethods, EaseValueMethods);
    return ProgressBase;
  }

  var Pad = Phaser.Utils.String.Pad;
  var GetStyle = function GetStyle(style, canvas, context) {
    if (style == null) {
      return style;
    }
    switch (_typeof(style)) {
      case 'string':
        return style;
      case 'number':
        return "#".concat(Pad(Math.floor(style).toString(16), 6, '0', 1));
      case 'function':
        return style(canvas, context);
      case 'object':
        if (style.hasOwnProperty('r')) {
          if (style.hasOwnProperty('a')) {
            // rgba
            return "rgba(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ",").concat(style.a, ")");
          } else {
            // rgb
            return "rgb(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ")");
          }
        } else if (style.hasOwnProperty('h')) {
          if (style.hasOwnProperty('a')) {
            // hsla
            return "hsla(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ",").concat(style.a, ")");
          } else {
            // hsl
            return "hsl(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ")");
          }
        } else {
          return style; // Not a valid input
        }

      default:
        return style;
    }
  };

  var DrawPolygon = function DrawPolygon(canvas, context, points, fillStyle, strokeStyle, lineWidth, lineJoin) {
    if (lineJoin === undefined) {
      lineJoin = 'round';
    }
    context.beginPath();
    context.lineJoin = lineJoin;
    var point = points[0];
    context.moveTo(point.x, point.y);
    for (var i = 1, cnt = points.length; i < cnt; i++) {
      point = points[i];
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    if (fillStyle != null) {
      context.fillStyle = fillStyle;
      context.fill();
    }
    if (strokeStyle != null) {
      context.strokeStyle = strokeStyle;
      context.lineWidth = lineWidth;
      context.stroke();
    }
  };

  var DrawContent = function DrawContent() {
    var skewX = this.skewX;
    var width = this.width - Math.abs(skewX);
    var height = this.height;
    var canvas = this.canvas,
      context = this.context;

    // Has track
    if (this.trackColor || this.trackStrokeColor) {
      BuildPolygon(0, 0,
      // x0, y0
      width, height,
      // x1, y1
      skewX,
      // skewX
      this.trackPoints);
    }

    // Has bar
    var barX0, barX1;
    if (this.barColor) {
      if (!this.rtl) {
        barX0 = 0;
        barX1 = width * this.value;
      } else {
        barX0 = width * (1 - this.value);
        barX1 = width;
      }
      BuildPolygon(barX0, 0,
      // x0, y0
      barX1, height,
      // x1, y1
      skewX,
      // skewX
      this.barPoints);
    }
    if (this.trackColor) {
      context.save();
      DrawPolygon(canvas, context, this.trackPoints, this.trackColor);
      context.restore();
    }
    if (this.barColor) {
      context.save();
      var style;
      if (this.barColor2) {
        var grd;
        if (this.isHorizontalGradient) {
          var helfHeight = height / 2;
          grd = context.createLinearGradient(barX0, helfHeight, barX1, helfHeight);
        } else {
          var helfWidth = width / 2;
          grd = context.createLinearGradient(helfWidth, 0, helfWidth, height);
        }
        grd.addColorStop(0, this.rtl ? this.barColor : this.barColor2);
        grd.addColorStop(1, this.rtl ? this.barColor2 : this.barColor);
        style = grd;
      } else {
        style = this.barColor;
      }
      DrawPolygon(canvas, context, this.barPoints, style);
      context.restore();
    }
    if (this.trackStrokeColor && this.trackStrokeThickness > 0) {
      context.save();
      DrawPolygon(canvas, context, this.trackPoints, undefined, this.trackStrokeColor, this.trackStrokeThickness);
      context.restore();
    }
  };
  var BuildPolygon = function BuildPolygon(x0, y0, x1, y1, skewX, out) {
    if (out === undefined) {
      out = [];
    }
    out.length = 4;
    for (var i = 0; i < 4; i++) {
      if (!out[i]) {
        out[i] = {};
      }
    }
    var p;
    if (skewX >= 0) {
      p = out[0];
      p.x = x0 + skewX;
      p.y = y0;
      p = out[1];
      p.x = x1 + skewX;
      p.y = y0;
      p = out[2];
      p.x = x1;
      p.y = y1;
      p = out[3];
      p.x = x0;
      p.y = y1;
    } else {
      p = out[0];
      p.x = x0;
      p.y = y0;
      p = out[1];
      p.x = x1;
      p.y = y0;
      p = out[2];
      p.x = x1 - skewX;
      p.y = y1;
      p = out[3];
      p.x = x0 - skewX;
      p.y = y1;
    }
    return out;
  };

  var GetValue = Phaser.Utils.Objects.GetValue;
  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var LineProgress = /*#__PURE__*/function (_ProgressBase) {
    _inherits(LineProgress, _ProgressBase);
    var _super = _createSuper(LineProgress);
    function LineProgress(scene, x, y, width, height, barColor, value, config) {
      var _this;
      _classCallCheck(this, LineProgress);
      if (IsPlainObject(x)) {
        config = x;
        x = GetValue(config, 'x', 0);
        y = GetValue(config, 'y', 0);
        width = GetValue(config, 'width', 2);
        height = GetValue(config, 'height', 2);
        barColor = GetValue(config, 'barColor', undefined);
        value = GetValue(config, 'value', 0);
      } else if (IsPlainObject(width)) {
        config = width;
        width = GetValue(config, 'width', 2);
        height = GetValue(config, 'height', 2);
        barColor = GetValue(config, 'barColor', undefined);
        value = GetValue(config, 'value', 0);
      } else if (IsPlainObject(barColor)) {
        config = barColor;
        barColor = GetValue(config, 'barColor', undefined);
        value = GetValue(config, 'value', 0);
      }
      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexLineProgressCanvas';
      _this.trackPoints = [];
      _this.barPoints = [];
      _this.bootProgressBase(config);
      _this.setTrackColor(GetValue(config, 'trackColor', undefined));
      _this.setBarColor(barColor, GetValue(config, 'barColor2', undefined), GetValue(config, 'isHorizontalGradient', undefined));
      _this.setTrackStroke(GetValue(config, 'trackStrokeThickness', 2), GetValue(config, 'trackStrokeColor', undefined));
      _this.setSkewX(GetValue(config, 'skewX', 0));
      _this.setRTL(GetValue(config, 'rtl', false));
      _this.setValue(value);
      return _this;
    }
    _createClass(LineProgress, [{
      key: "trackColor",
      get: function get() {
        return this._trackColor;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.dirty = this.dirty || this._trackColor != value;
        this._trackColor = value;
      }
    }, {
      key: "setTrackColor",
      value: function setTrackColor(color) {
        this.trackColor = color;
        return this;
      }
    }, {
      key: "trackStrokeColor",
      get: function get() {
        return this._trackStrokeColor;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.dirty = this.dirty || this._trackStrokeColor != value;
        this._trackStrokeColor = value;
      }
    }, {
      key: "trackStrokeThickness",
      get: function get() {
        return this._trackStrokeThickness;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._trackStrokeThickness != value;
        this._trackStrokeThickness = value;
      }
    }, {
      key: "setTrackStroke",
      value: function setTrackStroke(lineWidth, color) {
        this.trackStrokeThickness = lineWidth;
        this.trackStrokeColor = color;
        return this;
      }
    }, {
      key: "barColor",
      get: function get() {
        return this._barColor;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.dirty = this.dirty || this._barColor != value;
        this._barColor = value;
      }
    }, {
      key: "barColor2",
      get: function get() {
        return this._barColor2;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.dirty = this.dirty || this._barColor2 != value;
        this._barColor2 = value;
      }
    }, {
      key: "isHorizontalGradient",
      get: function get() {
        return this._isHorizontalGradient;
      },
      set: function set(value) {
        this.dirty |= this._isHorizontalGradient != value;
        this._isHorizontalGradient = value;
      }
    }, {
      key: "setBarColor",
      value: function setBarColor(color, color2, isHorizontalGradient) {
        if (isHorizontalGradient === undefined) {
          isHorizontalGradient = true;
        }
        this.barColor = color;
        this.barColor2 = color2;
        this.isHorizontalGradient = isHorizontalGradient;
        return this;
      }
    }, {
      key: "skewX",
      get: function get() {
        return this._skewX;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._skewX != value;
        this._skewX = value;
      }
    }, {
      key: "setSkewX",
      value: function setSkewX(value) {
        this.skewX = value;
        return this;
      }
    }, {
      key: "rtl",
      get: function get() {
        return this._rtl;
      },
      set: function set(value) {
        value = !!value;
        this.dirty = this.dirty || this._rtl != value;
        this._rtl = value;
      }
    }, {
      key: "setRTL",
      value: function setRTL(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.rtl = enable;
        return this;
      }
    }, {
      key: "updateTexture",
      value: function updateTexture() {
        this.clear();
        DrawContent.call(this);
        _get(_getPrototypeOf(LineProgress.prototype), "updateTexture", this).call(this);
        return this;
      }
    }]);
    return LineProgress;
  }(ProgressBase(Canvas));

  return LineProgress;

}));
