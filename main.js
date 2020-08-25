/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/App.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/App.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.box {\r\n  background-color: rgba(0,0,0,0.3);\r\n  color: white;\r\n  margin: 6px;\r\n  /* width: 120px; */\r\n  border: 1px solid white;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.box-title {\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  padding: 3px;\r\n  background-color: rgba(0,0,0,0.5);\r\n  color: white;\r\n}\r\n\r\n\r\n.rule {\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meta { padding: 0px; background-color: rgba(0,0,0,0.5) }\r\n\r\n.inventory {\r\n  width: 140px;\r\n}", "",{"version":3,"sources":["webpack://src/ui/App.css"],"names":[],"mappings":";AACA;EACE,iCAAiC;EACjC,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;EACjC,YAAY;AACd;;;AAGA;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,cAAc;AAChB;;AAEA,QAAQ,YAAY,EAAE,kCAAkC;;AAExD;EACE,YAAY;AACd","sourcesContent":["\r\n.box {\r\n  background-color: rgba(0,0,0,0.3);\r\n  color: white;\r\n  margin: 6px;\r\n  /* width: 120px; */\r\n  border: 1px solid white;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.box-title {\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  padding: 3px;\r\n  background-color: rgba(0,0,0,0.5);\r\n  color: white;\r\n}\r\n\r\n\r\n.rule {\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meta { padding: 0px; background-color: rgba(0,0,0,0.5) }\r\n\r\n.inventory {\r\n  width: 140px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const world_1 = __webpack_require__(/*! ./models/world */ "./src/models/world.ts");
const Hud_1 = __webpack_require__(/*! ./ui/Hud */ "./src/ui/Hud.ts");
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
class Game extends excalibur_1.Engine {
    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: excalibur_1.DisplayMode.FullScreen,
            canvasElementId: 'game',
        });
        this.world = world_1.World.gen();
        this.hud = new Hud_1.Hud();
    }
    start(loader) {
        return super.start(loader);
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/GameStateProvider.ts":
/*!**********************************!*\
  !*** ./src/GameStateProvider.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateProvider = void 0;
const reactn_1 = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
const INITIAL_UI_STATE = {
    message: '',
    inspect: false,
    inventory: {},
    constructing: null
};
exports.GameStateProvider = reactn_1.createProvider(INITIAL_UI_STATE);


/***/ }),

/***/ "./src/actors/cursor/cursor.ts":
/*!*************************************!*\
  !*** ./src/actors/cursor/cursor.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const resources_1 = __webpack_require__(/*! ../../resources */ "./src/resources.ts");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
const GameStateProvider_1 = __webpack_require__(/*! ../../GameStateProvider */ "./src/GameStateProvider.ts");
class PluckedStructure extends excalibur_1.Actor {
    constructor() {
        super({
            width: constants_1.OVERWORLD_CELL_SIZE,
            height: constants_1.OVERWORLD_CELL_SIZE,
        });
    }
    onInitialize() {
        // this.addDrawing(Resources.Sword)
        // this.anchor = new Vector(0,0) //16,16)
        this.anchor = new excalibur_1.Vector(0.5, 0.5);
        // this.addDrawing(SpriteSheets.Structure.getSprite(5))
    }
}
class Cursor extends excalibur_1.Actor {
    constructor() {
        super({
            width: constants_1.OVERWORLD_CELL_SIZE,
            height: constants_1.OVERWORLD_CELL_SIZE,
            // color: Color.Black,
            opacity: 0.1,
        });
        this.hoverWorldPos = [-1, -1];
        this.ticks = 0;
    }
    onInitialize() {
        // this.addDrawing(Resources.Sword)
        // this.anchor = new Vector(0,0) //16,16)
        this.anchor = new excalibur_1.Vector(0.5, 0.5);
        this.pluckedStructure = new PluckedStructure();
        this.pluckedStructure.addDrawing('wall', resources_1.SpriteSheets.Structure.getSprite(5));
        this.pluckedStructure.addDrawing('door', resources_1.SpriteSheets.Structure.getSprite(16));
        this.pluckedStructure.addDrawing('floor', resources_1.SpriteSheets.Structure.getSprite(0));
        this.pluckedStructure.visible = false;
        this.add(this.pluckedStructure);
    }
    onPreUpdate(engine) {
        this.ticks++;
        let { constructing } = GameStateProvider_1.GameStateProvider.getGlobal();
        if (constructing) {
            this.pluckedStructure.visible = true;
            if (constructing === 'Wood Wall') {
                this.pluckedStructure.setDrawing('wall');
                this.pluckedStructure.anchor = new excalibur_1.Vector(0.5, 0.5);
                // this.anchor = new Vector(0.5,0.5)
            }
            else if (constructing === 'Wood Floor') {
                this.pluckedStructure.setDrawing('floor');
                this.pluckedStructure.anchor = new excalibur_1.Vector(0, 0);
                // this.anchor = new Vector(0,0)
            }
            else if (constructing === 'Wood Door') {
                this.pluckedStructure.setDrawing('door');
                this.pluckedStructure.anchor = new excalibur_1.Vector(0.5, 0.5);
                // this.anchor = new Vector(0.5,0.5)
            }
            else {
                console.warn("Don't know how to build: " + constructing);
            }
        }
        else {
            this.pluckedStructure.visible = false;
        }
        // if (this.ticks % 3 === 0) {
        if (engine.input.pointers.primary.lastWorldPos) {
            let { x, y } = engine.input.pointers.primary.lastWorldPos;
            this.hoverWorldPos = [
                Math.round(x / constants_1.OVERWORLD_CELL_SIZE),
                Math.round(y / constants_1.OVERWORLD_CELL_SIZE),
            ];
            let [cellX, cellY] = this.hoverWorldPos;
            this.pos = new excalibur_1.Vector(cellX * constants_1.OVERWORLD_CELL_SIZE, cellY * constants_1.OVERWORLD_CELL_SIZE);
            let terrain = engine.world.describeTerrain(cellX, cellY);
            let item = engine.world.describeObject(cellX, cellY);
            engine.hud.setHoverMessage([item, terrain].join(' -- '));
            if (engine.world.isPositionClear(cellX, cellY)) {
                this.color = excalibur_1.Color.Black;
            }
            else {
                this.color = excalibur_1.Color.Red;
            }
        }
        // }
    }
}
exports.Cursor = Cursor;


/***/ }),

/***/ "./src/actors/player/player.ts":
/*!*************************************!*\
  !*** ./src/actors/player/player.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const ex = __importStar(__webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js"));
const resources_1 = __webpack_require__(/*! ../../resources */ "./src/resources.ts");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const direction_1 = __webpack_require__(/*! ../../models/direction */ "./src/models/direction.ts");
class Player extends excalibur_1.Actor {
    constructor() {
        super({
            width: constants_1.OVERWORLD_CELL_SIZE,
            height: constants_1.OVERWORLD_CELL_SIZE,
            color: new ex.Color(255, 255, 255)
        });
        this.worldPosition = [0, 0];
        this.moving = null;
        this.facing = null;
        this.walkSpeed = 350;
        this.facingAnims = {
            [constants_1.WEST]: constants_1.PEASANT_FACE_LEFT,
            [constants_1.EAST]: constants_1.PEASANT_FACE_RIGHT,
            [constants_1.NORTH]: constants_1.PEASANT_FACE_UP,
            [constants_1.SOUTH]: constants_1.PEASANT_FACE_DOWN,
        };
        this.anchor = new excalibur_1.Vector(0.5, 0.75); //0.5)
    }
    onInitialize(game) {
        const walkRight = resources_1.SpriteSheets.Peasant.getAnimationBetween(game, 0, 4, 125);
        const walkDown = resources_1.SpriteSheets.Peasant.getAnimationBetween(game, 4, 8, 125);
        const walkLeft = resources_1.SpriteSheets.Peasant.getAnimationBetween(game, 8, 12, 125);
        const walkUp = resources_1.SpriteSheets.Peasant.getAnimationBetween(game, 12, 16, 125);
        const idle = resources_1.SpriteSheets.Peasant.getSprite(4);
        const faceRight = resources_1.SpriteSheets.Peasant.getSprite(0);
        const faceLeft = resources_1.SpriteSheets.Peasant.getSprite(8);
        const faceUp = resources_1.SpriteSheets.Peasant.getSprite(12);
        this.addDrawing(constants_1.PEASANT_WALK_RIGHT, walkRight);
        this.addDrawing(constants_1.PEASANT_WALK_DOWN, walkDown);
        this.addDrawing(constants_1.PEASANT_WALK_LEFT, walkLeft);
        this.addDrawing(constants_1.PEASANT_WALK_UP, walkUp);
        this.addDrawing(constants_1.PEASANT_FACE_RIGHT, faceRight);
        this.addDrawing(constants_1.PEASANT_FACE_LEFT, faceLeft);
        this.addDrawing(constants_1.PEASANT_FACE_UP, faceUp);
        this.addDrawing(constants_1.PEASANT_FACE_DOWN, idle);
        this.addDrawing(constants_1.PEASANT_IDLE, idle);
        this._game = game;
        this.idle();
    }
    canMove(direction) {
        let [x, y] = direction_1.adjustPosition(this.worldPosition, direction);
        return this._game.world.isPositionClear(x, y);
    }
    move(direction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.moving) {
                if (this.canMove(direction)) {
                    this.setMoving(direction);
                    let target = direction_1.adjustPosition(this.worldPosition, direction);
                    yield this.actions.moveTo(target[0] * constants_1.OVERWORLD_CELL_SIZE, target[1] * constants_1.OVERWORLD_CELL_SIZE, this.walkSpeed).asPromise();
                    this.worldPosition = target;
                    this.moving = null;
                }
                else {
                    // not moving, but can't move this direction -- face it
                    this.setFacing(direction);
                }
            }
            else {
                // console.log("Cannot move player -- already moving")
            }
        });
    }
    // swimFacingAnims = {
    // }
    setFacing(direction) {
        this.facing = direction;
        let [x, y] = this.worldPosition;
        if (this._game.world.terrain.at(x, y) == constants_1.WATER) {
            this.setDrawing(this.facingAnims[direction]);
        }
        else {
            this.setDrawing(this.facingAnims[direction]);
        }
    }
    setMoving(direction) {
        this.moving = direction;
        // this.face(direction)
        this.facing = direction;
        if (direction === constants_1.NORTH) {
            this.setDrawing(constants_1.PEASANT_WALK_UP);
        }
        else if (direction === constants_1.WEST) {
            this.setDrawing(constants_1.PEASANT_WALK_LEFT);
        }
        else if (direction === constants_1.SOUTH) {
            this.setDrawing(constants_1.PEASANT_WALK_DOWN);
        }
        else if (direction === constants_1.EAST) {
            this.setDrawing(constants_1.PEASANT_WALK_RIGHT);
        }
    }
    idle() {
        this.facing = constants_1.SOUTH;
        // if (this._game.load)
        this.setDrawing(constants_1.PEASANT_IDLE);
    }
    get swimming() {
        let [x, y] = this.worldPosition;
        return this._game.world.terrain.at(x, y) == constants_1.WATER;
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/actors/progress.ts":
/*!********************************!*\
  !*** ./src/actors/progress.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
const resources_1 = __webpack_require__(/*! ../resources */ "./src/resources.ts");
class ProgressBar extends excalibur_1.Actor {
    constructor() {
        super({
            // pos: new Vector(0,0),
            width: constants_1.OVERWORLD_CELL_SIZE,
            height: constants_1.OVERWORLD_CELL_SIZE,
            color: new excalibur_1.Color(255, 255, 255),
            anchor: new excalibur_1.Vector(0.5, 0.5)
        });
    }
    onInitialize(engine) {
        this.addDrawing('progress', resources_1.SpriteSheets.Progress.getAnimationForAll(engine, (constants_1.PROGRESS_INTERVAL / constants_1.PROGRESS_ANIM_LENGTH) + 10 // milliseconds per frame...
        ));
        this.setDrawing('progress');
        // this.visible = false
    }
}
exports.ProgressBar = ProgressBar;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SOUTHWEST = exports.SOUTHEAST = exports.NORTHWEST = exports.NORTHEAST = exports.EAST = exports.WEST = exports.SOUTH = exports.NORTH = exports.PROGRESS_ANIM_LENGTH = exports.PROGRESS_INTERVAL = exports.WOODEN_DOOR_OPEN_CONNECTIONS = exports.WOODEN_DOOR_CLOSED_CONNECTIONS = exports.WOODEN_WALL_CONNECTIONS = exports.WOODEN_DOOR_OPEN = exports.WOODEN_DOOR_CLOSED = exports.WOODEN_WALL = exports.FIRE = exports.WELL = exports.EGGPLANT = exports.BLUEBERRY = exports.PLUM = exports.GRAPES = exports.APPLES = exports.CORN = exports.STRAWBERRY = exports.BANANA = exports.NOTHING = exports.TREE_GRASS_INTERFACE = exports.WATER_GRASS_INTERFACE = exports.WOODEN_FLOOR = exports.TREES = exports.WATER = exports.GRASS = exports.PEASANT_IDLE = exports.PEASANT_FACE_UP = exports.PEASANT_FACE_DOWN = exports.PEASANT_FACE_LEFT = exports.PEASANT_FACE_RIGHT = exports.PEASANT_WALK_UP = exports.PEASANT_WALK_DOWN = exports.PEASANT_WALK_LEFT = exports.PEASANT_WALK_RIGHT = exports.OVERWORLD_CELL_SIZE = exports.OVERWORLD = void 0;
// scenes
exports.OVERWORLD = 'overworld';
exports.OVERWORLD_CELL_SIZE = 64;
// anims
exports.PEASANT_WALK_RIGHT = 'peasant/walk_right';
exports.PEASANT_WALK_LEFT = 'peasant/walk_left';
exports.PEASANT_WALK_DOWN = 'peasant/walk_down';
exports.PEASANT_WALK_UP = 'peasant/walk_up';
exports.PEASANT_FACE_RIGHT = 'peasant/face_right';
exports.PEASANT_FACE_LEFT = 'peasant/face_left';
exports.PEASANT_FACE_DOWN = 'peasant/face_down';
exports.PEASANT_FACE_UP = 'peasant/face_up';
exports.PEASANT_IDLE = 'peasant/idle';
// terrain
exports.GRASS = 0;
exports.WATER = 1;
exports.TREES = 3;
// floors
exports.WOODEN_FLOOR = 0;
// export const MOUNTAIN = 2;
const ALL_GRASS = [0, 3, 4, 5, 20, 44];
const ALL_WATER = [1, 2, 17];
// pretty terrain
// [self] [east] [south] [southeast]
exports.WATER_GRASS_INTERFACE = [
    ALL_WATER,
    [11],
    [13],
    [25],
    [27],
    [18],
    [14],
    [26],
    [29],
    [15],
    [21],
    [24],
    [28],
    [10],
    [8],
    ALL_GRASS // 1111 -- all grass
];
// [self] [east] [south] [southeast]
exports.TREE_GRASS_INTERFACE = [
    [41],
    [35],
    [37],
    [36],
    [51],
    [43],
    [38],
    [50],
    [53],
    [39],
    [45],
    [48],
    [52],
    [34],
    [32],
    ALL_GRASS // 1111 -- all grass
];
// things (fruit for now..)
exports.NOTHING = -1;
exports.BANANA = 0;
exports.STRAWBERRY = 1;
exports.CORN = 2;
exports.APPLES = 3;
exports.GRAPES = 4;
exports.PLUM = 5;
exports.BLUEBERRY = 6;
exports.EGGPLANT = 7;
// items / constructed objects
exports.WELL = 0;
exports.FIRE = 1;
// structures
exports.WOODEN_WALL = 1;
exports.WOODEN_DOOR_CLOSED = 2;
exports.WOODEN_DOOR_OPEN = 3;
exports.WOODEN_WALL_CONNECTIONS = [
    // north east south west
    5,
    5,
    10,
    15,
    5,
    5,
    11,
    9,
    14,
    3,
    10,
    12,
    7,
    6,
    13,
    8,
];
// const WOODEN_DOOR_CLOSED_NORTH_SOUTH = 20
exports.WOODEN_DOOR_CLOSED_CONNECTIONS = [
    // north east south west
    16,
    16,
    20,
    -1,
    16,
    16,
    -1,
    -1,
    20,
    -1,
    20,
    -1,
    -1,
    -1,
    -1,
    -1,
];
exports.WOODEN_DOOR_OPEN_CONNECTIONS = [
    // north east south west
    17,
    17,
    21,
    -1,
    17,
    17,
    -1,
    -1,
    21,
    -1,
    21,
    -1,
    -1,
    -1,
    -1,
    -1,
];
// duration of interaction progress (millis)
exports.PROGRESS_INTERVAL = 500;
// # of cells in progress anim
exports.PROGRESS_ANIM_LENGTH = 24;
// directions
exports.NORTH = 'north';
exports.SOUTH = 'south';
exports.WEST = 'west';
exports.EAST = 'east';
exports.NORTHEAST = 'northeast';
exports.NORTHWEST = 'northwest';
exports.SOUTHEAST = 'southeast';
exports.SOUTHWEST = 'southwest';


/***/ }),

/***/ "./src/images/floors.png":
/*!*******************************!*\
  !*** ./src/images/floors.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "941f88b9813257252f3afb0ff87f92f0.png";

/***/ }),

/***/ "./src/images/fruit.png":
/*!******************************!*\
  !*** ./src/images/fruit.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f23b2cbb54039481f6074ec4abf7f263.png";

/***/ }),

/***/ "./src/images/peasant.png":
/*!********************************!*\
  !*** ./src/images/peasant.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5cb8fe2877aca428c5340c6645142486.png";

/***/ }),

/***/ "./src/images/progress.png":
/*!*********************************!*\
  !*** ./src/images/progress.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f3b25ec826d8b264de758a4b6ca1594.png";

/***/ }),

/***/ "./src/images/structure.png":
/*!**********************************!*\
  !*** ./src/images/structure.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "307b411f769f466067530da56ee37fd0.png";

/***/ }),

/***/ "./src/images/sword.png":
/*!******************************!*\
  !*** ./src/images/sword.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "94754f62e0ae4d23d386e246f5e0cb6e.png";

/***/ }),

/***/ "./src/images/terrain-deep.png":
/*!*************************************!*\
  !*** ./src/images/terrain-deep.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dbb34f1671dfa174120d639bdade3ae4.png";

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex = __importStar(__webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js"));
const play_1 = __webpack_require__(/*! ./scenes/level-one/play */ "./src/scenes/level-one/play.ts");
const resources_1 = __webpack_require__(/*! ./resources */ "./src/resources.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const reactn_1 = __importDefault(__webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const GameStateProvider_1 = __webpack_require__(/*! ./GameStateProvider */ "./src/GameStateProvider.ts");
const App_1 = __webpack_require__(/*! ./ui/App */ "./src/ui/App.tsx");
react_dom_1.default.render(reactn_1.default.createElement(GameStateProvider_1.GameStateProvider, null,
    reactn_1.default.createElement(App_1.App, null)), document.getElementById("index"));
console.log("CREATE GAME...");
const game = new Game_1.Game();
const overworld = new play_1.Play(game);
game.add(constants_1.OVERWORLD, overworld);
let loader = new ex.Loader();
loader.suppressPlayButton = true;
for (let key in resources_1.Resources) {
    loader.addResource(resources_1.Resources[key]);
}
console.log("load game");
game.start(loader).then(() => {
    console.log("start game");
    game.goToScene(constants_1.OVERWORLD);
});


/***/ }),

/***/ "./src/models/Cartogram.ts":
/*!*********************************!*\
  !*** ./src/models/Cartogram.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartogram = void 0;
const rand_1 = __webpack_require__(/*! ../util/rand */ "./src/util/rand.ts");
const mode_1 = __webpack_require__(/*! ../util/mode */ "./src/util/mode.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
const times_1 = __webpack_require__(/*! ../util/times */ "./src/util/times.ts");
class Cartogram {
    // private cells: number[][] = [];
    constructor(name, dims, cells = []) {
        this.name = name;
        this.dims = dims;
        this.cells = cells;
        this.eachPosition((x, y) => this.set(x, y, -1));
    }
    distributeRoughGrainedValues(valueDistribution, grain = 16) {
        this.eachPosition((x, y) => {
            if (x % grain === 0 && y % grain === 0) {
                let val = rand_1.pick(...valueDistribution);
                for (let dx = 0; dx < grain; dx++) {
                    for (let dy = 0; dy < grain; dy++) {
                        let targetX = x + dx;
                        let targetY = y + dy;
                        this.cells[targetY] = this.cells[targetY] || [];
                        this.cells[targetY][targetX] = val;
                    }
                }
                // } else {
                // this.cells[y][x] = this.cells[Math.floor(y/grain)][Math.floor(x/grain)] //pick(...valueDistribution)
            }
            // let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true
            // if (placeHere) {
            // }
        }, (y) => this.cells[y] = this.cells[y] || []);
    }
    distributeValues(valueDistribution, shouldPlace) {
        let hasPlacementRestrictions = !!shouldPlace;
        console.log("Build map", this.name);
        this.eachPosition((x, y) => {
            let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true;
            if (placeHere) {
                this.cells[y][x] = rand_1.pick(...valueDistribution);
            }
        }, (y) => this.cells[y] = []);
    }
    distributeWithin(source, value, sourceRate, valueRate) {
        let places = [];
        // throw new Error("Method not implemented.");
        this.eachPosition((x, y) => {
            if (this.at(x, y) == source) {
                if (this.neighbors(x, y).every(val => val == source)) {
                    places.push([x, y]);
                    // this.set(x,y, pick(value, source))
                }
            }
        });
        let distribution = [...times_1.times(valueRate, value), ...times_1.times(sourceRate, source)];
        places.forEach(([x, y]) => {
            this.set(x, y, rand_1.pick(...distribution));
        });
    }
    copy(newName) {
        let newCells = []; //this.cells.slice()
        this.eachPosition((x, y) => {
            newCells[y][x] = this.at(x, y);
        }, (y) => newCells[y] = []);
        // for ()
        let newMap = new Cartogram(newName, this.dims, newCells);
        // this.eachPosition((x, y) => 
        //   newMap.set(x,y,this.at(x,y))
        //   // let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true
        // )
        return newMap;
    }
    at(x, y) { return this.cells[y] && this.cells[y][x]; }
    set(x, y, value) {
        this.cells[y] = this.cells[y] || [];
        this.cells[y][x] = value;
        // throw new Error("Method not implemented.");
    }
    smooth(rounds = 3) {
        for (let i = 0; i < rounds; i++) {
            let newCells = [];
            this.eachPosition((x, y) => {
                let originalValue = this.at(x, y);
                let neighbors = this.neighbors(x, y);
                let modalValue = mode_1.mode(originalValue, ...neighbors);
                newCells[y][x] = rand_1.pick(...times_1.times(13, modalValue), ...neighbors, originalValue);
            }, (y) => newCells[y] = []);
            this.cells = newCells;
        }
    }
    eachPosition(eachCellCallback, eachRowCallback) {
        for (let y = 0; y < this.dims.height; y++) {
            eachRowCallback && eachRowCallback(y);
            for (let x = 0; x < this.dims.width; x++) {
                eachCellCallback(x, y);
            }
        }
    }
    // static neighborDirections = { NORTHWEST: 0,  NORTH: 1, NORTHEAST: 2, 
    //                               WEST: 3, EAST: 5,
    //                               SOUTHWEST: 6, SOUTH: 7, SOUTHEAST: 8 }
    // neighborPositions(x: number, y: number): number[] {
    //   return [
    //     [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
    //     [x - 1, y], , [x + 1, y],
    //     [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    //   ]
    //     // .filter(([x, y]) => this.withinBounds(x, y))
    //     .map(([x, y]) => this.cells[y][x])
    // } 
    neighbors(x, y) {
        return [
            [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
            [x - 1, y], , [x + 1, y],
            [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
        ]
            .filter(([x, y]) => this.withinBounds(x, y))
            .map(([x, y]) => this.cells[y][x]);
    }
    labelledNeighbors(x, y, defaultValue = 0) {
        let self = this.at(x, y);
        return {
            [constants_1.NORTHWEST]: this.at(x - 1, y - 1),
            [constants_1.NORTH]: this.at(x, y - 1),
            [constants_1.NORTHEAST]: this.at(x + 1, y - 1),
            [constants_1.WEST]: this.at(x - 1, y),
            [constants_1.EAST]: this.at(x + 1, y),
            [constants_1.SOUTHWEST]: this.at(x - 1, y + 1),
            [constants_1.SOUTH]: this.at(x, y + 1),
            [constants_1.SOUTHEAST]: this.at(x + 1, y + 1),
        };
        // .filter(([x, y]) => this.withinBounds(x, y))
        // .map(([x, y]) => this.cells[y][x])
    }
    withinBounds(x, y) {
        return x >= 0 && x < this.dims.width && y >= 0 && y < this.dims.height;
    }
}
exports.Cartogram = Cartogram;


/***/ }),

/***/ "./src/models/direction.ts":
/*!*********************************!*\
  !*** ./src/models/direction.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustPosition = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
function adjustPosition(position, direction) {
    let [x, y] = position;
    if (direction === constants_1.NORTH) {
        return [x, y - 1];
    }
    else if (direction === constants_1.WEST) {
        return [x - 1, y];
    }
    else if (direction === constants_1.SOUTH) {
        return [x, y + 1];
    }
    else if (direction === constants_1.EAST) {
        return [x + 1, y];
    }
    else {
        throw new Error("Invalid direction to adjustPosition: " + direction);
    }
}
exports.adjustPosition = adjustPosition;


/***/ }),

/***/ "./src/models/world.ts":
/*!*****************************!*\
  !*** ./src/models/world.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const Cartogram_1 = __webpack_require__(/*! ./Cartogram */ "./src/models/Cartogram.ts");
// import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST, WATER_WITH_GRASS_NORTHWEST, WATER_WITH_GRASS_SOUTHWEST, GRASS_WITH_WATER_SURROUNDING, GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH } from "../constants";
const rand_1 = __webpack_require__(/*! ../util/rand */ "./src/util/rand.ts");
const times_1 = __webpack_require__(/*! ../util/times */ "./src/util/times.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
class World {
    constructor(dims) {
        this.structureDescriptions = {
            [constants_1.WOODEN_WALL]: 'Wooden Wall',
            [constants_1.WOODEN_DOOR_OPEN]: 'Wooden Door (Open)',
            [constants_1.WOODEN_DOOR_CLOSED]: 'Wooden Door (Closed)',
            [constants_1.WOODEN_FLOOR]: 'Wooden Floor'
        };
        this.generateRawTerrain(dims);
        this.prettyTerrain = new Cartogram_1.Cartogram('prettyTerrain', dims); //this.terrain.copy('prettyTerrain')
        this.assemblePrettyTerrain();
        // distribute things
        let thingDistribution = [
            ...times_1.times(10, constants_1.NOTHING),
            ...times_1.times(1, constants_1.BANANA),
            ...times_1.times(2, constants_1.GRAPES),
            ...times_1.times(3, constants_1.APPLES),
            ...times_1.times(1, constants_1.PLUM),
            ...times_1.times(1, constants_1.BLUEBERRY),
            ...times_1.times(2, constants_1.CORN),
            ...times_1.times(3, constants_1.STRAWBERRY),
        ];
        this.things = new Cartogram_1.Cartogram('things', dims);
        this.things.distributeValues(thingDistribution, (x, y) => this.terrain.at(x, y) == constants_1.GRASS &&
            this.terrain.neighbors(x, y).every(cell => cell == constants_1.GRASS));
        this.structure = new Cartogram_1.Cartogram('structure', dims);
        this.prettyStructure = new Cartogram_1.Cartogram('prettyStructure', dims);
        this.floors = new Cartogram_1.Cartogram('floors', dims);
    }
    get width() { return this.terrain.dims.width; }
    get height() { return this.terrain.dims.height; }
    static gen() {
        let world = new World({ width: 256, height: 256 });
        return world;
    }
    describeTerrain(x, y) {
        let terrain = this.terrain.at(x, y);
        if (terrain == constants_1.GRASS) {
            return 'grass';
        }
        else if (terrain == constants_1.WATER) {
            return 'water';
        }
        else if (terrain == constants_1.TREES) {
            return 'forest';
        }
        else {
            return '???';
        }
    }
    describeObject(x, y) {
        let it = this.things.at(x, y);
        if (it == constants_1.NOTHING || it == undefined) {
            return '';
        }
        else if (it == constants_1.BANANA) {
            return 'banana';
        }
        else if (it == constants_1.GRAPES) {
            return 'grapes';
        }
        else if (it == constants_1.BLUEBERRY) {
            return 'blueberry';
        }
        else if (it == constants_1.CORN) {
            return 'corn';
        }
        else if (it == constants_1.STRAWBERRY) {
            return 'strawberry';
        }
        else if (it == constants_1.APPLES) {
            return 'apples';
        }
        else if (it == constants_1.PLUM) {
            return 'plum';
        }
        else {
            return '??? [' + it + ']';
        }
    }
    chopTreeAt(x, y) {
        console.log("chop tree at target: " + x + ", " + y);
        this.terrain.set(x, y, constants_1.GRASS);
        // this.assemblePrettyTerrain()
        this.beautifyTerrainInterfaces(constants_1.TREE_GRASS_INTERFACE, constants_1.TREES, constants_1.GRASS);
        // throw new Error("Method not implemented.");
    }
    beautifyWoodenStructures() {
        let woodIndex = {
            [constants_1.WOODEN_WALL]: constants_1.WOODEN_WALL_CONNECTIONS,
            [constants_1.WOODEN_DOOR_OPEN]: constants_1.WOODEN_DOOR_OPEN_CONNECTIONS,
            [constants_1.WOODEN_DOOR_CLOSED]: constants_1.WOODEN_DOOR_CLOSED_CONNECTIONS,
        };
        let connectingWoodStructures = [constants_1.WOODEN_WALL, constants_1.WOODEN_DOOR_OPEN, constants_1.WOODEN_DOOR_CLOSED];
        this.beautifyStructureInterfaces(woodIndex, connectingWoodStructures);
    }
    build(x, y, structureId) {
        console.log("build structure with id " + structureId);
        console.log("build " + this.structureDescriptions[structureId] + " at " + x + ", " + y);
        // this.structure.set(x,y,structureId)
        if (structureId == constants_1.WOODEN_WALL) {
            this.structure.set(x, y, constants_1.WOODEN_WALL);
            this.beautifyWoodenStructures();
        }
        else if (structureId == constants_1.WOODEN_DOOR_CLOSED) {
            this.structure.set(x, y, constants_1.WOODEN_DOOR_CLOSED);
            // this.beautifyStructureInterfaces(woodIndex, connectingWoodStructures)
            this.beautifyWoodenStructures();
        }
        else if (structureId == constants_1.WOODEN_FLOOR) {
            // need to actually modify terrain...?
            // or maybe a 'floor' level terrain to ensure layering
            console.warn('would build floor...');
            if (this.terrain.at(x + 1, y) == constants_1.GRASS && this.terrain.at(x, y + 1) == constants_1.GRASS && this.terrain.at(x + 1, y + 1) == constants_1.GRASS) {
                this.floors.set(x, y, constants_1.WOODEN_FLOOR);
            }
            // }
        }
    }
    generateRawTerrain(dims) {
        let terrainDistribution = [
            ...times_1.times(18, constants_1.GRASS),
            ...times_1.times(13, constants_1.WATER),
        ];
        this.terrain = new Cartogram_1.Cartogram('terrain', dims);
        // this.terrain.distributeValues(terrainDistribution)
        this.terrain.distributeRoughGrainedValues(terrainDistribution, 8);
        this.terrain.smooth(8);
        this.terrain.distributeWithin(constants_1.GRASS, constants_1.TREES, 21, 15);
    }
    beautifyTerrainInterfaces(indices, terrainOne, terrainTwo) {
        this.prettyTerrain.eachPosition((x, y) => {
            let self = this.terrain.at(x, y);
            let neighbors = this.terrain.labelledNeighbors(x, y);
            let east = neighbors[constants_1.EAST];
            let south = neighbors[constants_1.SOUTH];
            let southeast = neighbors[constants_1.SOUTHEAST];
            let group = [self, east, south, southeast];
            if (group.every(val => val == terrainOne || val == terrainTwo)) {
                let mask = (this.terrain.at(x, y) == terrainOne ? 0 : 1) * 8 +
                    (neighbors[constants_1.EAST] == terrainOne ? 0 : 1) * 4 +
                    (neighbors[constants_1.SOUTH] == terrainOne ? 0 : 1) * 2 +
                    (neighbors[constants_1.SOUTHEAST] == terrainOne ? 0 : 1) * 1;
                this.prettyTerrain.set(x, y, rand_1.pick(...indices[mask]));
            }
        });
    }
    assemblePrettyTerrain() {
        this.beautifyTerrainInterfaces(constants_1.WATER_GRASS_INTERFACE, constants_1.WATER, constants_1.GRASS);
        this.beautifyTerrainInterfaces(constants_1.TREE_GRASS_INTERFACE, constants_1.TREES, constants_1.GRASS);
    }
    beautifyStructureInterfaces(indices, structures) {
        this.prettyStructure.eachPosition((x, y) => {
            let self = this.structure.at(x, y);
            if (structures.includes(self)) { //self == structure) {
                // console.log("beautify structure " + structure + " at " + x + ", " + y)
                let neighbors = this.structure.labelledNeighbors(x, y);
                let north = neighbors[constants_1.NORTH];
                let south = neighbors[constants_1.SOUTH];
                let east = neighbors[constants_1.EAST];
                let west = neighbors[constants_1.WEST];
                let mask = (structures.includes(north) ? 1 : 0) * 8 +
                    (structures.includes(east) ? 1 : 0) * 4 +
                    (structures.includes(south) ? 1 : 0) * 2 +
                    (structures.includes(west) ? 1 : 0) * 1;
                // console.log("connections", { north, south, east, west}, "--->", mask)
                this.prettyStructure.set(x, y, indices[self][mask]);
                if (indices[self][mask] === -1) {
                    console.log("remove structure at " + x + ", " + y);
                    this.structure.set(x, y, -1);
                }
            }
        });
    }
    isTerrainClear(x, y) {
        let terrain = this.terrain.at(x, y);
        return terrain == constants_1.GRASS;
    }
    isPositionPassable(x, y) {
        let building = this.structure.at(x, y);
        return this.isTerrainClear(x, y)
            && (building == constants_1.NOTHING || building == undefined || building == constants_1.WOODEN_DOOR_OPEN);
    }
    // 
    isPositionClear(x, y) {
        return this.isTerrainClear(x, y) && this.isPositionPassable(x, y);
        //let terrain = this.terrain.at(x,y)
        //let thing = this.things.at(x, y)
        //let building = this.structure.at(x,y)
        //let isClear = (terrain == GRASS) // || terrain == TREES)
        //    // && (thing == NOTHING || thing == undefined)
        //    && (building == NOTHING || building == undefined || building == WOODEN_DOOR_OPEN)
        //return isClear
    }
    get randomClearPosition() {
        let matchingPositions = [];
        this.terrain.eachPosition((x, y) => {
            if (this.isPositionClear(x, y)) {
                matchingPositions.push([x, y]);
            }
        });
        return rand_1.pick(...matchingPositions);
    }
}
exports.World = World;


/***/ }),

/***/ "./src/resources.ts":
/*!**************************!*\
  !*** ./src/resources.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteSheets = exports.Resources = void 0;
const ex = __importStar(__webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js"));
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const sword = __webpack_require__(/*! ./images/sword.png */ "./src/images/sword.png");
const fruit = __webpack_require__(/*! ./images/fruit.png */ "./src/images/fruit.png");
const terrain = __webpack_require__(/*! ./images/terrain-deep.png */ "./src/images/terrain-deep.png");
// const terrainSmooth = require('./images/terrain.png');
const peasant = __webpack_require__(/*! ./images/peasant.png */ "./src/images/peasant.png");
const progress = __webpack_require__(/*! ./images/progress.png */ "./src/images/progress.png");
const structure = __webpack_require__(/*! ./images/structure.png */ "./src/images/structure.png");
const floor = __webpack_require__(/*! ./images/floors.png */ "./src/images/floors.png");
let Resources = {
    Sword: new ex.Texture(sword),
    Fruit: new ex.Texture(fruit),
    Terrain: new ex.Texture(terrain),
    Peasant: new ex.Texture(peasant),
    Progress: new ex.Texture(progress),
    Structure: new ex.Texture(structure),
    Floor: new ex.Texture(floor),
};
exports.Resources = Resources;
let sz = constants_1.OVERWORLD_CELL_SIZE;
let SpriteSheets = {
    Fruit: new ex.SpriteSheet(Resources.Fruit, 7, 2, sz, sz),
    Terrain: new ex.SpriteSheet(Resources.Terrain, 8, 8, sz, sz),
    Peasant: new ex.SpriteSheet(Resources.Peasant, 4, 4, sz, sz),
    Progress: new ex.SpriteSheet(Resources.Progress, 17, 1, sz, sz),
    Structure: new ex.SpriteSheet(Resources.Structure, 4, 8, sz, sz),
    Floor: new ex.SpriteSheet(Resources.Floor, 2, 2, sz, sz),
};
exports.SpriteSheets = SpriteSheets;


/***/ }),

/***/ "./src/scenes/level-one/Environs.ts":
/*!******************************************!*\
  !*** ./src/scenes/level-one/Environs.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environs = void 0;
const ex = __importStar(__webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js"));
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
const resources_1 = __webpack_require__(/*! ../../resources */ "./src/resources.ts");
class Environs {
    constructor(game) {
        this.game = game;
        let isOffset = true;
        let terrainMapOrigin = isOffset ? [0, 0]
            : [-constants_1.OVERWORLD_CELL_SIZE / 2, -constants_1.OVERWORLD_CELL_SIZE / 2];
        this.terrainTiles = new ex.TileMap(terrainMapOrigin[0], terrainMapOrigin[1], constants_1.OVERWORLD_CELL_SIZE, constants_1.OVERWORLD_CELL_SIZE, this.game.world.height - 1, this.game.world.width - 1);
        this.terrainTiles.registerSpriteSheet('land', resources_1.SpriteSheets.Terrain);
        this.paveTerrain();
        let thingMapOrigin = [-constants_1.OVERWORLD_CELL_SIZE / 2, -constants_1.OVERWORLD_CELL_SIZE / 2];
        this.thingTiles = new ex.TileMap(thingMapOrigin[0], thingMapOrigin[1], constants_1.OVERWORLD_CELL_SIZE, constants_1.OVERWORLD_CELL_SIZE, this.game.world.height - 1, this.game.world.width - 1);
        this.thingTiles.registerSpriteSheet('fruit', resources_1.SpriteSheets.Fruit);
        this.embedThings();
        let structureMapOrigin = thingMapOrigin;
        this.structureTiles = new ex.TileMap(structureMapOrigin[0], structureMapOrigin[1], constants_1.OVERWORLD_CELL_SIZE, constants_1.OVERWORLD_CELL_SIZE, this.game.world.height - 1, this.game.world.width - 1);
        this.structureTiles.registerSpriteSheet('structure', resources_1.SpriteSheets.Structure);
        let floorMapOrigin = terrainMapOrigin;
        this.floorTiles = new ex.TileMap(floorMapOrigin[0], floorMapOrigin[1], constants_1.OVERWORLD_CELL_SIZE, constants_1.OVERWORLD_CELL_SIZE, this.game.world.height - 1, this.game.world.width - 1);
        this.floorTiles.registerSpriteSheet('floor', resources_1.SpriteSheets.Floor);
    }
    get tilemaps() { return [this.terrainTiles, this.floorTiles, this.thingTiles, this.structureTiles]; }
    get terrainSource() { return this.game.world.prettyTerrain; }
    get structureSource() { return this.game.world.prettyStructure; }
    paveTerrain() {
        console.log("pave terrain...");
        this.game.world.terrain.eachPosition((x, y) => {
            let cell = this.terrainTiles.getCell(x, y);
            if (cell) {
                cell.clearSprites();
                cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)));
            }
        });
    }
    paveTerrainNarrowly(positions) {
        positions.forEach(([x, y]) => {
            let cell = this.terrainTiles.getCell(x, y);
            if (cell) {
                cell.clearSprites();
                cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)));
            }
        });
    }
    embedThings() {
        this.game.world.things.eachPosition((x, y) => {
            let cell = this.thingTiles.getCell(x, y);
            if (cell) {
                let value = this.game.world.things.at(x, y);
                if (value !== constants_1.NOTHING) {
                    let sprite = new ex.TileSprite('fruit', value);
                    cell.pushSprite(sprite);
                }
            }
        });
        // this._game = engine
    }
    assembleFloor() {
        this.game.world.floors.eachPosition((x, y) => {
            let cell = this.floorTiles.getCell(x, y);
            if (cell) {
                let val = this.game.world.floors.at(x, y);
                cell.clearSprites();
                if (val !== constants_1.NOTHING) {
                    let sprite = new ex.TileSprite('floor', this.game.world.floors.at(x, y));
                    cell.pushSprite(sprite);
                }
            }
        });
    }
    assembleStructures() {
        this.game.world.structure.eachPosition((x, y) => {
            let cell = this.structureTiles.getCell(x, y);
            if (cell) {
                let val = this.game.world.structure.at(x, y);
                cell.clearSprites();
                if (val !== constants_1.NOTHING) {
                    let sprite = new ex.TileSprite('structure', this.structureSource.at(x, y));
                    cell.pushSprite(sprite);
                }
            }
        });
    }
}
exports.Environs = Environs;


/***/ }),

/***/ "./src/scenes/level-one/play.ts":
/*!**************************************!*\
  !*** ./src/scenes/level-one/play.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
const cursor_1 = __webpack_require__(/*! ../../actors/cursor/cursor */ "./src/actors/cursor/cursor.ts");
const player_1 = __webpack_require__(/*! ../../actors/player/player */ "./src/actors/player/player.ts");
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
const direction_1 = __webpack_require__(/*! ../../models/direction */ "./src/models/direction.ts");
const progress_1 = __webpack_require__(/*! ../../actors/progress */ "./src/actors/progress.ts");
const Environs_1 = __webpack_require__(/*! ./Environs */ "./src/scenes/level-one/Environs.ts");
const GameStateProvider_1 = __webpack_require__(/*! ../../GameStateProvider */ "./src/GameStateProvider.ts");
class Play extends excalibur_1.Scene {
    constructor() {
        super(...arguments);
        this.interaction = { active: false };
        this.constructionLegend = {
            'Wood Wall': constants_1.WOODEN_WALL,
            'Wood Door': constants_1.WOODEN_DOOR_CLOSED,
            'Wood Floor': constants_1.WOODEN_FLOOR,
        };
        this.lastInteracted = -1;
        this.interactionGate = 250;
    }
    onInitialize(engine) {
        this._game = engine;
        this.environs = new Environs_1.Environs(engine);
    }
    onActivate() {
        this.environs.tilemaps.forEach(map => this.add(map));
        this.cursor = new cursor_1.Cursor();
        this.player = new player_1.Player();
        this.add(this.player);
        this.add(this.cursor);
        let startWorldPos = this._game.world.randomClearPosition;
        this.player.worldPosition = startWorldPos;
        this.player.pos = new excalibur_1.Vector(startWorldPos[0] * constants_1.OVERWORLD_CELL_SIZE, (startWorldPos[1]) * constants_1.OVERWORLD_CELL_SIZE);
        this.camera.addStrategy(new excalibur_1.LockCameraToActorStrategy(this.player));
        this._game.input.pointers.primary.on('down', () => this.buildStructure());
    }
    onPreUpdate() {
        this.camera.pos = this.player.pos;
        this.handlePlayerInput();
        // if (this._game.input.pointers.primary.)
    }
    buildStructure() {
        console.log("would build structure...");
        let { constructing } = GameStateProvider_1.GameStateProvider.getGlobal();
        let [x, y] = this.cursor.hoverWorldPos;
        if (constructing && this._game.world.isTerrainClear(x, y)) { //terrain.at(x,y) == GRASS) {
            let structureId = this.constructionLegend[constructing];
            this._game.world.build(x, y, structureId);
            this.environs.assembleFloor();
            this.environs.assembleStructures();
        }
    }
    handlePlayerInput() {
        if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.Esc)) {
            GameStateProvider_1.GameStateProvider.setGlobal({ constructing: null });
        }
        if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.Q)) {
            this._game.hud.toggleInspect();
            // GameStateProvider.setGlobal({ inspect: !GameStateProvider.getGlobal().inspect })
        }
        if (this.interaction.active) {
            // need to keep holding E or it goes away
            if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.E)) {
                let now = new Date().getTime();
                let elapsed = now - this.interaction.startedAt;
                console.log("interact -- continue", elapsed);
                // this.interaction.percent += 1
                if (elapsed >= constants_1.PROGRESS_INTERVAL) {
                    console.log("interact complete");
                    // this.world.terrain
                    let [x, y] = this.interaction.at;
                    this._game.world.chopTreeAt(x, y);
                    this._game.hud.collect('wood', 5);
                    this.environs.paveTerrainNarrowly([
                        [x, y],
                        [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
                        [x - 1, y], , [x + 1, y],
                        [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
                    ]);
                    this.interaction.active = false;
                    this.remove(this.progressBar);
                }
            }
            else {
                this.interaction.active = false;
                this.remove(this.progressBar);
            }
        }
        else {
            if (!this.player.moving) {
                if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.E)) {
                    this.startInteraction();
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.W)) {
                    this.player.move(constants_1.NORTH).then(() => this.collectItems());
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.A)) {
                    this.player.move(constants_1.WEST).then(() => this.collectItems());
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.S)) {
                    this.player.move(constants_1.SOUTH).then(() => this.collectItems());
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.D)) {
                    this.player.move(constants_1.EAST).then(() => this.collectItems());
                }
                else {
                    if (this.player.facing) {
                        this.player.setFacing(this.player.facing);
                    }
                    else {
                        // this.player.idle()
                    }
                }
            }
        }
    }
    collectItems() {
        // add any items on this cell to the inventory
        let [x, y] = this.player.worldPosition;
        let it = this._game.world.things.at(x, y);
        if (it !== constants_1.NOTHING && it !== undefined) {
            let itemName = this._game.world.describeObject(x, y);
            console.log("collect " + itemName);
            this._game.hud.collect(itemName, 1);
            this._game.world.things.set(x, y, constants_1.NOTHING);
            this.environs.thingTiles.getCell(x, y).clearSprites();
            // and actually remove from tiles?
        }
    }
    startInteraction() {
        let now = new Date().getTime();
        let elapsed = now - this.lastInteracted;
        if (elapsed >= this.interactionGate) {
            let target = direction_1.adjustPosition(this.player.worldPosition, this.player.facing);
            let [x, y] = target;
            if (this._game.world.terrain.at(x, y) == constants_1.TREES) {
                this.startProgressBar(target);
            }
            else if (this._game.world.structure.at(x, y) == constants_1.WOODEN_DOOR_CLOSED) {
                console.log('would open door');
                this._game.world.structure.set(x, y, constants_1.WOODEN_DOOR_OPEN);
                this._game.world.beautifyWoodenStructures();
                this.environs.assembleStructures();
            }
            else if (this._game.world.structure.at(x, y) == constants_1.WOODEN_DOOR_OPEN) {
                console.log('would close door');
                this._game.world.structure.set(x, y, constants_1.WOODEN_DOOR_CLOSED);
                this._game.world.beautifyWoodenStructures();
                this.environs.assembleStructures();
            }
            else {
                console.warn('nothing to interact with!');
            }
            this.lastInteracted = now;
        }
    }
    startProgressBar(target) {
        this.interaction = {
            active: true,
            at: target,
            startedAt: new Date().getTime()
        };
        this.progressBar = new progress_1.ProgressBar();
        this.progressBar.pos = new excalibur_1.Vector(target[0] * constants_1.OVERWORLD_CELL_SIZE, target[1] * constants_1.OVERWORLD_CELL_SIZE);
        this.add(this.progressBar);
    }
}
exports.Play = Play;


/***/ }),

/***/ "./src/ui/App.css":
/*!************************!*\
  !*** ./src/ui/App.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ui/App.tsx":
/*!************************!*\
  !*** ./src/ui/App.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const reactn_1 = __importDefault(__webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js"));
const react_sticky_mouse_tooltip_1 = __importDefault(__webpack_require__(/*! react-sticky-mouse-tooltip */ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js"));
const GameStateProvider_1 = __webpack_require__(/*! ../GameStateProvider */ "./src/GameStateProvider.ts");
__webpack_require__(/*! ./App.css */ "./src/ui/App.css");
const Inventory = ({ items }) => reactn_1.default.createElement("div", { className: "inventory box" },
    reactn_1.default.createElement("div", { className: 'box-title' }, "INVENTORY"),
    reactn_1.default.createElement("div", { className: 'rule' }),
    reactn_1.default.createElement("div", { style: { padding: '3px', width: '95%', display: 'flex', flexDirection: 'column' } }, Object.entries(items).map(([it, count]) => reactn_1.default.createElement("div", { key: it, style: { display: 'flex' } },
        reactn_1.default.createElement("span", { style: { flex: 1 } }, it),
        reactn_1.default.createElement("span", { style: { flex: 1, textAlign: 'right' } },
            "x",
            count)))));
exports.App = () => {
    const [{ message, inspect, inventory, constructing }] = GameStateProvider_1.GameStateProvider.useGlobal();
    return reactn_1.default.createElement("div", null,
        reactn_1.default.createElement("div", { className: "box meta", style: { padding: '3px' } },
            reactn_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "freehold")),
        reactn_1.default.createElement(Inventory, { items: inventory }),
        reactn_1.default.createElement("div", { className: "construction box" },
            reactn_1.default.createElement("div", { className: 'box-title' }, "CONSTRUCTION"),
            reactn_1.default.createElement("div", { className: 'rule' }),
            reactn_1.default.createElement("div", { style: { padding: '3px', width: '95%', display: 'flex', flexDirection: 'column' } }, Object.entries({ 'Wood Wall': '10 wood', 'Wood Floor': '20 wood', 'Wood Door': '5 wood' }).map(([it, reqs]) => reactn_1.default.createElement("div", { key: it, style: { display: 'flex', backgroundColor: constructing === it ? 'gray' : 'rgba(0,0,0,0.3)' }, onClick: (e) => {
                    GameStateProvider_1.GameStateProvider.setGlobal({ constructing: it });
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } },
                reactn_1.default.createElement("span", { style: { flex: 1 } }, it),
                reactn_1.default.createElement("span", { style: { flex: 1, textAlign: 'right' } }, reqs))))),
        reactn_1.default.createElement(react_sticky_mouse_tooltip_1.default, { visible: inspect, offsetX: 20 },
            reactn_1.default.createElement("div", { style: { padding: '6px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid white' } },
                reactn_1.default.createElement("span", { style: { color: 'white' } },
                    "here: ",
                    message))));
};


/***/ }),

/***/ "./src/ui/Hud.ts":
/*!***********************!*\
  !*** ./src/ui/Hud.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hud = void 0;
const GameStateProvider_1 = __webpack_require__(/*! ../GameStateProvider */ "./src/GameStateProvider.ts");
// thin wrapper around game state provider setters..
class Hud {
    constructor() {
        this.lastToggledInspect = -1;
    }
    setHoverMessage(message) {
        if (message !== GameStateProvider_1.GameStateProvider.getGlobal().message) {
            GameStateProvider_1.GameStateProvider.setGlobal({ message });
        }
    }
    toggleInspect() {
        let now = new Date().getTime();
        let elapsed = now - this.lastToggledInspect;
        if (elapsed >= 200) {
            GameStateProvider_1.GameStateProvider.setGlobal({ inspect: !GameStateProvider_1.GameStateProvider.getGlobal().inspect });
            this.lastToggledInspect = now;
        }
    }
    collect(item, count) {
        let { inventory } = GameStateProvider_1.GameStateProvider.getGlobal();
        inventory[item] = inventory[item] || 0;
        inventory[item] += count;
        GameStateProvider_1.GameStateProvider.setGlobal({ inventory });
    }
}
exports.Hud = Hud;


/***/ }),

/***/ "./src/util/mode.ts":
/*!**************************!*\
  !*** ./src/util/mode.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
function mode(...arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 0;
        }
        map[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for (var prop in map) {
        if (map[prop] > greatestFreq) {
            greatestFreq = map[prop];
            mode = prop;
        }
    }
    return mode;
}
exports.mode = mode;


/***/ }),

/***/ "./src/util/rand.ts":
/*!**************************!*\
  !*** ./src/util/rand.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
exports.pick = (...elems) => {
    let index = Math.floor(Math.random() * (elems.length));
    return elems[index];
};


/***/ }),

/***/ "./src/util/times.ts":
/*!***************************!*\
  !*** ./src/util/times.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.times = void 0;
exports.times = (n, value) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(value);
    }
    return arr;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVTdGF0ZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3RvcnMvY3Vyc29yL2N1cnNvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3JzL3BsYXllci9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9ycy9wcm9ncmVzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZmxvb3JzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ZydWl0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BlYXNhbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcHJvZ3Jlc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RydWN0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N3b3JkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3RlcnJhaW4tZGVlcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NhcnRvZ3JhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sZXZlbC1vbmUvRW52aXJvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sZXZlbC1vbmUvcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQXBwLmNzcz8xZDMxIiwid2VicGFjazovLy8uL3NyYy91aS9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy91aS9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbW9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3RpbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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RyxDQUFJLEdBQUcsS0FBVSxFQUFLLEVBQUU7SUFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIWSxhQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDaEQsSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUFFO0lBQy9DLE9BQU8sR0FBRztBQUNaLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogNnB4O1xcclxcbiAgLyogd2lkdGg6IDEyMHB4OyAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ydWxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWV0YSB7IHBhZGRpbmc6IDBweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpIH1cXHJcXG5cXHJcXG4uaW52ZW50b3J5IHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy91aS9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUEsUUFBUSxZQUFZLEVBQUUsa0NBQWtDOztBQUV4RDtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4uYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogNnB4O1xcclxcbiAgLyogd2lkdGg6IDEyMHB4OyAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ydWxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWV0YSB7IHBhZGRpbmc6IDBweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpIH1cXHJcXG5cXHJcXG4uaW52ZW50b3J5IHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi9tb2RlbHMvd29ybGQnO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tICcuL3VpL0h1ZCc7XHJcbmltcG9ydCB7IEVuZ2luZSwgRGlzcGxheU1vZGUgfSBmcm9tICdleGNhbGlidXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUgZXh0ZW5kcyBFbmdpbmUge1xyXG4gIHdvcmxkOiBXb3JsZDtcclxuICBodWQ6IEh1ZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICBkaXNwbGF5TW9kZTogRGlzcGxheU1vZGUuRnVsbFNjcmVlbixcclxuICAgICAgY2FudmFzRWxlbWVudElkOiAnZ2FtZScsXHJcbiAgICB9KTtcclxuICAgIHRoaXMud29ybGQgPSBXb3JsZC5nZW4oKTtcclxuICAgIHRoaXMuaHVkID0gbmV3IEh1ZCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzdGFydChsb2FkZXI6IGV4LkxvYWRlcikge1xyXG4gICAgcmV0dXJuIHN1cGVyLnN0YXJ0KGxvYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0blwiO1xyXG5cclxuY29uc3QgSU5JVElBTF9VSV9TVEFURSA9IHtcclxuICBtZXNzYWdlOiAnJyxcclxuICBpbnNwZWN0OiBmYWxzZSxcclxuICBpbnZlbnRvcnk6IHt9LFxyXG4gIGNvbnN0cnVjdGluZzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZVByb3ZpZGVyID0gY3JlYXRlUHJvdmlkZXIoSU5JVElBTF9VSV9TVEFURSk7XHJcblxyXG4iLCJpbXBvcnQgeyBBY3RvciwgVmVjdG9yLCBDb2xvciB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IE9WRVJXT1JMRF9DRUxMX1NJWkUsIEdSQVNTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vR2FtZVN0YXRlUHJvdmlkZXJcIjtcclxuXHJcbmNsYXNzIFBsdWNrZWRTdHJ1Y3R1cmUgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHdpZHRoOiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBoZWlnaHQ6IE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIC8vIGNvbG9yOiBDb2xvci5CbGFjayxcclxuICAgICAgLy8gb3BhY2l0eTogMC4zLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uSW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIHRoaXMuYWRkRHJhd2luZyhSZXNvdXJjZXMuU3dvcmQpXHJcbiAgICAvLyB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMCwwKSAvLzE2LDE2KVxyXG4gICAgdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAuNSwwLjUpXHJcbiAgICAvLyB0aGlzLmFkZERyYXdpbmcoU3ByaXRlU2hlZXRzLlN0cnVjdHVyZS5nZXRTcHJpdGUoNSkpXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJzb3IgZXh0ZW5kcyBBY3RvciB7XHJcbiAgaG92ZXJXb3JsZFBvczogW251bWJlciwgbnVtYmVyXSA9IFstMSwtMV1cclxuICBwbHVja2VkU3RydWN0dXJlOiBQbHVja2VkU3RydWN0dXJlXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICAvLyBjb2xvcjogQ29sb3IuQmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuMSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoKSB7XHJcbiAgICAvLyB0aGlzLmFkZERyYXdpbmcoUmVzb3VyY2VzLlN3b3JkKVxyXG4gICAgLy8gdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAsMCkgLy8xNiwxNilcclxuXHJcbiAgICB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZSA9IG5ldyBQbHVja2VkU3RydWN0dXJlKClcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS5hZGREcmF3aW5nKCd3YWxsJywgU3ByaXRlU2hlZXRzLlN0cnVjdHVyZS5nZXRTcHJpdGUoNSkpXHJcbiAgICB0aGlzLnBsdWNrZWRTdHJ1Y3R1cmUuYWRkRHJhd2luZygnZG9vcicsIFNwcml0ZVNoZWV0cy5TdHJ1Y3R1cmUuZ2V0U3ByaXRlKDE2KSlcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS5hZGREcmF3aW5nKCdmbG9vcicsIFNwcml0ZVNoZWV0cy5TdHJ1Y3R1cmUuZ2V0U3ByaXRlKDApKVxyXG5cclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS52aXNpYmxlID0gZmFsc2VcclxuICAgIHRoaXMuYWRkKHRoaXMucGx1Y2tlZFN0cnVjdHVyZSlcclxuICB9XHJcblxyXG4gIHRpY2tzID0gMFxyXG4gIG9uUHJlVXBkYXRlKGVuZ2luZTogR2FtZSkge1xyXG4gICAgdGhpcy50aWNrcyArK1xyXG4gICAgbGV0IHsgY29uc3RydWN0aW5nIH0gPSBHYW1lU3RhdGVQcm92aWRlci5nZXRHbG9iYWwoKVxyXG4gICAgaWYgKGNvbnN0cnVjdGluZykge1xyXG4gICAgICB0aGlzLnBsdWNrZWRTdHJ1Y3R1cmUudmlzaWJsZSA9IHRydWVcclxuICAgICAgaWYgKGNvbnN0cnVjdGluZyA9PT0gJ1dvb2QgV2FsbCcpIHtcclxuICAgICAgICB0aGlzLnBsdWNrZWRTdHJ1Y3R1cmUuc2V0RHJhd2luZygnd2FsbCcpXHJcbiAgICAgICAgdGhpcy5wbHVja2VkU3RydWN0dXJlLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgICAgICAvLyB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RpbmcgPT09ICdXb29kIEZsb29yJykge1xyXG4gICAgICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS5zZXREcmF3aW5nKCdmbG9vcicpXHJcbiAgICAgICAgdGhpcy5wbHVja2VkU3RydWN0dXJlLmFuY2hvciA9IG5ldyBWZWN0b3IoMCwwKVxyXG4gICAgICAgIC8vIHRoaXMuYW5jaG9yID0gbmV3IFZlY3RvcigwLDApXHJcbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0aW5nID09PSAnV29vZCBEb29yJykge1xyXG4gICAgICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS5zZXREcmF3aW5nKCdkb29yJylcclxuICAgICAgICB0aGlzLnBsdWNrZWRTdHJ1Y3R1cmUuYW5jaG9yID0gbmV3IFZlY3RvcigwLjUsMC41KVxyXG4gICAgICAgIC8vIHRoaXMuYW5jaG9yID0gbmV3IFZlY3RvcigwLjUsMC41KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRvbid0IGtub3cgaG93IHRvIGJ1aWxkOiBcIiArIGNvbnN0cnVjdGluZylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wbHVja2VkU3RydWN0dXJlLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodGhpcy50aWNrcyAlIDMgPT09IDApIHtcclxuICAgICAgaWYgKGVuZ2luZS5pbnB1dC5wb2ludGVycy5wcmltYXJ5Lmxhc3RXb3JsZFBvcykge1xyXG4gICAgICAgIGxldCB7IHgsIHkgfSA9IGVuZ2luZS5pbnB1dC5wb2ludGVycy5wcmltYXJ5Lmxhc3RXb3JsZFBvc1xyXG4gICAgICAgIHRoaXMuaG92ZXJXb3JsZFBvcyA9IFtcclxuICAgICAgICAgIE1hdGgucm91bmQoeCAvIE9WRVJXT1JMRF9DRUxMX1NJWkUpLFxyXG4gICAgICAgICAgTWF0aC5yb3VuZCh5IC8gT1ZFUldPUkxEX0NFTExfU0laRSksXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBsZXQgW2NlbGxYLCBjZWxsWV0gPSB0aGlzLmhvdmVyV29ybGRQb3NcclxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICBjZWxsWCAqIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgICAgICBjZWxsWSAqIE9WRVJXT1JMRF9DRUxMX1NJWkVcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGxldCB0ZXJyYWluID0gZW5naW5lLndvcmxkLmRlc2NyaWJlVGVycmFpbihjZWxsWCwgY2VsbFkpXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBlbmdpbmUud29ybGQuZGVzY3JpYmVPYmplY3QoY2VsbFgsIGNlbGxZKVxyXG4gICAgICAgIGVuZ2luZS5odWQuc2V0SG92ZXJNZXNzYWdlKFtpdGVtLCB0ZXJyYWluXS5qb2luKCcgLS0gJykpXHJcblxyXG4gICAgICAgIGlmIChlbmdpbmUud29ybGQuaXNQb3NpdGlvbkNsZWFyKGNlbGxYLCBjZWxsWSkpIHtcclxuICAgICAgICAgIHRoaXMuY29sb3IgPSBDb2xvci5CbGFja1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuUmVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59ICIsImltcG9ydCAqIGFzIGV4IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gJy4uLy4uL3Jlc291cmNlcyc7XHJcbmltcG9ydCB7IFBFQVNBTlRfV0FMS19SSUdIVCwgUEVBU0FOVF9XQUxLX0RPV04sIFBFQVNBTlRfV0FMS19MRUZULCBQRUFTQU5UX1dBTEtfVVAsIFBFQVNBTlRfSURMRSwgTk9SVEgsIFdFU1QsIFNPVVRILCBFQVNULCBQRUFTQU5UX0ZBQ0VfTEVGVCwgUEVBU0FOVF9GQUNFX1JJR0hULCBQRUFTQU5UX0ZBQ0VfRE9XTiwgUEVBU0FOVF9GQUNFX1VQLCBPVkVSV09STERfQ0VMTF9TSVpFLCBXQVRFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEVuZ2luZSwgQWN0b3IsIFZlY3RvciB9IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgYWRqdXN0UG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGlyZWN0aW9uJztcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9wb3NpdGlvbic7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi8uLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBY3RvciB7XHJcbiAgX2dhbWU6IEdhbWVcclxuICB3b3JsZFBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uID0gWzAsIDBdIGFzIFdvcmxkUG9zaXRpb25cclxuICBtb3Zpbmc/OiBEaXJlY3Rpb24gPSBudWxsXHJcbiAgZmFjaW5nPzogRGlyZWN0aW9uID0gbnVsbFxyXG4gIHdhbGtTcGVlZDogbnVtYmVyID0gMzUwXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBjb2xvcjogbmV3IGV4LkNvbG9yKDI1NSwgMjU1LCAyNTUpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYW5jaG9yID0gbmV3IFZlY3RvcigwLjUsMC43NSkgLy8wLjUpXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoZ2FtZTogR2FtZSkge1xyXG4gICAgY29uc3Qgd2Fsa1JpZ2h0ID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0QW5pbWF0aW9uQmV0d2VlbihnYW1lLCAwLCA0LCAxMjUpXHJcbiAgICBjb25zdCB3YWxrRG93biA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldEFuaW1hdGlvbkJldHdlZW4oZ2FtZSwgNCwgOCwgMTI1KVxyXG4gICAgY29uc3Qgd2Fsa0xlZnQgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRBbmltYXRpb25CZXR3ZWVuKGdhbWUsIDgsIDEyLCAxMjUpXHJcbiAgICBjb25zdCB3YWxrVXAgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRBbmltYXRpb25CZXR3ZWVuKGdhbWUsIDEyLCAxNiwgMTI1KVxyXG4gICAgY29uc3QgaWRsZSA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSg0KVxyXG4gICAgY29uc3QgZmFjZVJpZ2h0ID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0U3ByaXRlKDApXHJcbiAgICBjb25zdCBmYWNlTGVmdCA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSg4KVxyXG4gICAgY29uc3QgZmFjZVVwID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0U3ByaXRlKDEyKVxyXG5cclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX1dBTEtfUklHSFQsIHdhbGtSaWdodClcclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX1dBTEtfRE9XTiwgd2Fsa0Rvd24pXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9XQUxLX0xFRlQsIHdhbGtMZWZ0KVxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfV0FMS19VUCwgd2Fsa1VwKVxyXG5cclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX0ZBQ0VfUklHSFQsIGZhY2VSaWdodClcclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX0ZBQ0VfTEVGVCwgZmFjZUxlZnQpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX1VQLCBmYWNlVXApXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX0RPV04sIGlkbGUpXHJcblxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfSURMRSwgaWRsZSlcclxuXHJcbiAgICB0aGlzLl9nYW1lID0gZ2FtZVxyXG4gICAgdGhpcy5pZGxlKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuTW92ZShkaXJlY3Rpb246IERpcmVjdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IFt4LHldID0gYWRqdXN0UG9zaXRpb24odGhpcy53b3JsZFBvc2l0aW9uLCBkaXJlY3Rpb24pXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZS53b3JsZC5pc1Bvc2l0aW9uQ2xlYXIoeCx5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICBpZiAodGhpcy5jYW5Nb3ZlKGRpcmVjdGlvbikpIHtcclxuICAgICAgICB0aGlzLnNldE1vdmluZyhkaXJlY3Rpb24pXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGFkanVzdFBvc2l0aW9uKHRoaXMud29ybGRQb3NpdGlvbiwgZGlyZWN0aW9uKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuYWN0aW9ucy5tb3ZlVG8oXHJcbiAgICAgICAgICB0YXJnZXRbMF0gKiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICAgICAgdGFyZ2V0WzFdICogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgICAgIHRoaXMud2Fsa1NwZWVkXHJcbiAgICAgICAgKS5hc1Byb21pc2UoKVxyXG4gICAgICAgIHRoaXMud29ybGRQb3NpdGlvbiA9IHRhcmdldFxyXG4gICAgICAgIHRoaXMubW92aW5nID0gbnVsbFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG5vdCBtb3ZpbmcsIGJ1dCBjYW4ndCBtb3ZlIHRoaXMgZGlyZWN0aW9uIC0tIGZhY2UgaXRcclxuICAgICAgICB0aGlzLnNldEZhY2luZyhkaXJlY3Rpb24pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2Fubm90IG1vdmUgcGxheWVyIC0tIGFscmVhZHkgbW92aW5nXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWNpbmdBbmltcyA9IHtcclxuICAgIFtXRVNUXTogUEVBU0FOVF9GQUNFX0xFRlQsXHJcbiAgICBbRUFTVF06IFBFQVNBTlRfRkFDRV9SSUdIVCxcclxuICAgIFtOT1JUSF06IFBFQVNBTlRfRkFDRV9VUCxcclxuICAgIFtTT1VUSF06IFBFQVNBTlRfRkFDRV9ET1dOLFxyXG4gIH1cclxuXHJcbiAgLy8gc3dpbUZhY2luZ0FuaW1zID0ge1xyXG4gIC8vIH1cclxuXHJcbiAgc2V0RmFjaW5nKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmZhY2luZyA9IGRpcmVjdGlvbjtcclxuICAgIGxldCBbeCx5XSA9IHRoaXMud29ybGRQb3NpdGlvblxyXG4gICAgaWYgKHRoaXMuX2dhbWUud29ybGQudGVycmFpbi5hdCh4LHkpID09IFdBVEVSKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyh0aGlzLmZhY2luZ0FuaW1zW2RpcmVjdGlvbl0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcodGhpcy5mYWNpbmdBbmltc1tkaXJlY3Rpb25dKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TW92aW5nKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLm1vdmluZyA9IGRpcmVjdGlvblxyXG4gICAgLy8gdGhpcy5mYWNlKGRpcmVjdGlvbilcclxuICAgIHRoaXMuZmFjaW5nID0gZGlyZWN0aW9uXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBOT1JUSCkge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcoUEVBU0FOVF9XQUxLX1VQKVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFdFU1QpIHtcclxuICAgICAgdGhpcy5zZXREcmF3aW5nKFBFQVNBTlRfV0FMS19MRUZUKVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFNPVVRIKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX1dBTEtfRE9XTilcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBFQVNUKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX1dBTEtfUklHSFQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZGxlKCkge1xyXG4gICAgdGhpcy5mYWNpbmcgPSBTT1VUSFxyXG4gICAgLy8gaWYgKHRoaXMuX2dhbWUubG9hZClcclxuICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX0lETEUpXHJcbiAgfVxyXG5cclxuICBnZXQgc3dpbW1pbmcoKSB7XHJcbiAgICBsZXQgW3gseV0gPSB0aGlzLndvcmxkUG9zaXRpb25cclxuICAgIHJldHVybiB0aGlzLl9nYW1lLndvcmxkLnRlcnJhaW4uYXQoeCx5KSA9PSBXQVRFUjtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFjdG9yLCBWZWN0b3IsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBPVkVSV09STERfQ0VMTF9TSVpFLCBQUk9HUkVTU19BTklNX0xFTkdUSCwgUFJPR1JFU1NfSU5URVJWQUwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gXCIuLi9yZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIC8vIHBvczogbmV3IFZlY3RvcigwLDApLFxyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSwgLy8qIDIsXHJcbiAgICAgIGhlaWdodDogT1ZFUldPUkxEX0NFTExfU0laRSwgLy8gKiAyLFxyXG4gICAgICBjb2xvcjogbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpLFxyXG4gICAgICBhbmNob3I6IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoZW5naW5lOiBHYW1lKSB7XHJcbiAgICB0aGlzLmFkZERyYXdpbmcoJ3Byb2dyZXNzJywgU3ByaXRlU2hlZXRzLlByb2dyZXNzLmdldEFuaW1hdGlvbkZvckFsbChcclxuICAgICAgZW5naW5lLFxyXG4gICAgICAoUFJPR1JFU1NfSU5URVJWQUwgLyBQUk9HUkVTU19BTklNX0xFTkdUSCkgKyAxMCAvLyBtaWxsaXNlY29uZHMgcGVyIGZyYW1lLi4uXHJcbiAgICApKVxyXG4gICAgdGhpcy5zZXREcmF3aW5nKCdwcm9ncmVzcycpXHJcbiAgICAvLyB0aGlzLnZpc2libGUgPSBmYWxzZVxyXG4gIH1cclxufSIsIlxyXG4vLyBzY2VuZXNcclxuZXhwb3J0IGNvbnN0IE9WRVJXT1JMRCA9ICdvdmVyd29ybGQnXHJcblxyXG5leHBvcnQgY29uc3QgT1ZFUldPUkxEX0NFTExfU0laRSA9IDY0O1xyXG5cclxuLy8gYW5pbXNcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfV0FMS19SSUdIVCA9ICdwZWFzYW50L3dhbGtfcmlnaHQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX1dBTEtfTEVGVCA9ICdwZWFzYW50L3dhbGtfbGVmdCdcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfV0FMS19ET1dOID0gJ3BlYXNhbnQvd2Fsa19kb3duJ1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9XQUxLX1VQID0gJ3BlYXNhbnQvd2Fsa191cCdcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfRkFDRV9SSUdIVCA9ICdwZWFzYW50L2ZhY2VfcmlnaHQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfTEVGVCA9ICAncGVhc2FudC9mYWNlX2xlZnQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfRE9XTiA9ICAncGVhc2FudC9mYWNlX2Rvd24nXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfVVAgPSAgICAncGVhc2FudC9mYWNlX3VwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfSURMRSA9ICdwZWFzYW50L2lkbGUnXHJcblxyXG4vLyB0ZXJyYWluXHJcbmV4cG9ydCBjb25zdCBHUkFTUyA9IDA7XHJcbmV4cG9ydCBjb25zdCBXQVRFUiA9IDE7XHJcbmV4cG9ydCBjb25zdCBUUkVFUyA9IDM7XHJcblxyXG4vLyBmbG9vcnNcclxuZXhwb3J0IGNvbnN0IFdPT0RFTl9GTE9PUiA9IDA7XHJcbi8vIGV4cG9ydCBjb25zdCBNT1VOVEFJTiA9IDI7XHJcblxyXG5jb25zdCBBTExfR1JBU1MgPSBbMCwzLDQsNSwyMCw0NF1cclxuY29uc3QgQUxMX1dBVEVSID0gWzEsMiwxN11cclxuLy8gcHJldHR5IHRlcnJhaW5cclxuICAgICAgICAgIC8vIFtzZWxmXSBbZWFzdF0gW3NvdXRoXSBbc291dGhlYXN0XVxyXG5leHBvcnQgY29uc3QgV0FURVJfR1JBU1NfSU5URVJGQUNFID0gW1xyXG4gICAgICBBTExfV0FURVIsICAvLyAwMDAwIC0tIGFsbCB3YXRlclxyXG4gICAgICBbMTFdLCAvLyAwMDAxIC0tIGdyYXNzIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgWzEzXSwgLy8gMDAxMCAtLSBncmFzcyBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzI1XSwgLy8gMDAxMSAtLSBncmFzcyBvbiBib3R0b20gc2lkZVxyXG4gICAgICBbMjddLCAvLyAwMTAwIC0tIGdyYXNzIGF0IHRvcC1yaWdodCBjb3JuZXJcclxuICAgICAgWzE4XSwgLy8gMDEwMSAtLSBncmFzcyBvbiByaWdodCBzaWRlXHJcbiAgICAgIFsxNF0sIC8vIDAxMTAgLS0gZ3Jhc3Mgdy8gZ2FwIGJvdHRvbS1sZWZ0IHRvIHRvcC1yaWdodFxyXG4gICAgICBbMjZdLCAgLy8gMDExMSAtLSB3YXRlciBhdCB0b3AtbGVmdCBjb3JuZXJcclxuICAgICAgWzI5XSwgLy8gMTAwMCAtLSBncmFzcyBhdCB0b3AtbGVmdFxyXG4gICAgICBbMTVdLCAvLyAxMDAxIC0tIGdyYXNzIHcvIGdhcCB0b3AtbGVmdCB0byBib3R0b20tcmlnaHRcclxuICAgICAgWzIxXSwgLy8gMTAxMCAtLSBncmFzcyBvbiBsZWZ0IHNpZGVcclxuICAgICAgWzI0XSwgLy8gMTAxMSAtLSB3YXRlciBhdCB0b3AtcmlnaHQgY29ybmVyXHJcbiAgICAgIFsyOF0sIC8vIDExMDAgLS0gZ3Jhc3Mgb24gdG9wIHNpZGVcclxuICAgICAgWzEwXSwgLy8gMTEwMSAtLSB3YXRlciBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzhdLCAvLyAxMTEwIC0tIHdhdGVyIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgQUxMX0dSQVNTIC8vIDExMTEgLS0gYWxsIGdyYXNzXHJcbiAgICBdO1xyXG5cclxuICAgICAgLy8gW3NlbGZdIFtlYXN0XSBbc291dGhdIFtzb3V0aGVhc3RdXHJcbmV4cG9ydCBjb25zdCBUUkVFX0dSQVNTX0lOVEVSRkFDRTogbnVtYmVyW11bXSA9IFtcclxuICAgICAgWzQxXSwgICAgIC8vIDAwMDAgLS0gYWxsIHRyZWVcclxuICAgICAgWzM1XSwgICAgIC8vIDAwMDEgLS0gZ3Jhc3MgYXQgYm90dG9tLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbMzddLCAgICAgLy8gMDAxMCAtLSBncmFzcyBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzM2XSwgICAgIC8vIDAwMTEgLS0gZ3Jhc3Mgb24gYm90dG9tIHNpZGVcclxuICAgICAgWzUxXSwgICAgIC8vIDAxMDAgLS0gZ3Jhc3MgYXQgdG9wLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbNDNdLCAgICAgLy8gMDEwMSAtLSBncmFzcyBvbiByaWdodCBzaWRlXHJcbiAgICAgIFszOF0sICAgICAvLyAwMTEwIC0tIGdyYXNzIHcvIGdhcCBib3R0b20tbGVmdCB0byB0b3AtcmlnaHRcclxuICAgICAgWzUwXSwgICAgIC8vIDAxMTEgLS0gdHJlZSBhdCB0b3AtbGVmdCBjb3JuZXJcclxuICAgICAgWzUzXSwgICAgIC8vIDEwMDAgLS0gZ3Jhc3MgYXQgdG9wLWxlZnRcclxuICAgICAgWzM5XSwgICAgIC8vIDEwMDEgLS0gZ3Jhc3Mgdy8gZ2FwIHRvcC1sZWZ0IHRvIGJvdHRvbS1yaWdodFxyXG4gICAgICBbNDVdLCAgICAgLy8gMTAxMCAtLSBncmFzcyBvbiBsZWZ0IHNpZGVcclxuICAgICAgWzQ4XSwgICAgIC8vIDEwMTEgLS0gdHJlZSBhdCB0b3AtcmlnaHQgY29ybmVyXHJcbiAgICAgIFs1Ml0sICAgICAvLyAxMTAwIC0tIGdyYXNzIG9uIHRvcCBzaWRlXHJcbiAgICAgIFszNF0sICAgICAvLyAxMTAxIC0tIHRyZWUgYXQgYm90dG9tLWxlZnQgY29ybmVyXHJcbiAgICAgIFszMl0sICAgICAvLyAxMTEwIC0tIHRyZWUgYXQgYm90dG9tLXJpZ2h0IGNvcm5lclxyXG4gICAgICBBTExfR1JBU1MgLy8gMTExMSAtLSBhbGwgZ3Jhc3NcclxuICAgIF1cclxuXHJcblxyXG4vLyB0aGluZ3MgKGZydWl0IGZvciBub3cuLilcclxuZXhwb3J0IGNvbnN0IE5PVEhJTkcgPSAtMTtcclxuZXhwb3J0IGNvbnN0IEJBTkFOQSA9IDA7XHJcbmV4cG9ydCBjb25zdCBTVFJBV0JFUlJZID0gMTtcclxuZXhwb3J0IGNvbnN0IENPUk4gPSAyO1xyXG5leHBvcnQgY29uc3QgQVBQTEVTID0gMztcclxuZXhwb3J0IGNvbnN0IEdSQVBFUyA9IDQ7XHJcbmV4cG9ydCBjb25zdCBQTFVNID0gNTtcclxuZXhwb3J0IGNvbnN0IEJMVUVCRVJSWSA9IDY7XHJcbmV4cG9ydCBjb25zdCBFR0dQTEFOVCA9IDc7XHJcblxyXG4vLyBpdGVtcyAvIGNvbnN0cnVjdGVkIG9iamVjdHNcclxuZXhwb3J0IGNvbnN0IFdFTEwgPSAwO1xyXG5leHBvcnQgY29uc3QgRklSRSA9IDE7XHJcblxyXG4vLyBzdHJ1Y3R1cmVzXHJcbmV4cG9ydCBjb25zdCBXT09ERU5fV0FMTCA9IDE7XHJcbmV4cG9ydCBjb25zdCBXT09ERU5fRE9PUl9DTE9TRUQgPSAyO1xyXG5leHBvcnQgY29uc3QgV09PREVOX0RPT1JfT1BFTiA9IDM7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdPT0RFTl9XQUxMX0NPTk5FQ1RJT05TID0gW1xyXG4gIC8vIG5vcnRoIGVhc3Qgc291dGggd2VzdFxyXG4gIDUsICAvLyAwMDAwIC0tIG5vIGNvbm5lY3Rpb25zIFxyXG4gIDUsICAvLyAwMDAxIC0tIGNvbm5lY3RlZCB3ZXN0XHJcbiAgMTAsICAvLyAwMDEwIC0tIGNvbm5lY3RlZCBzb3V0aFxyXG4gIDE1LCAvLyAwMDExIC0tIGNvbm5lY3RlZCBzb3V0aCBhbmQgd2VzdFxyXG4gIDUsICAvLyAwMTAwIC0tIGNvbm5lY3RlZCBlYXN0XHJcbiAgNSwgIC8vIDAxMDEgLS0gY29ubmVjdGVkIGVhc3QgYW5kIHdlc3RcclxuICAxMSwgLy8gMDExMCAtLSBjb25uZWN0ZWQgZWFzdCBhbmQgc291dGhcclxuICA5LCAgLy8gMDExMSAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0IGFuZCBzb3V0aFxyXG4gIDE0LCAvLyAxMDAwIC0tIGNvbm5lY3RlZCBub3J0aFxyXG4gIDMsICAvLyAxMDAxIC0tIGNvbm5lY3RlZCBub3J0aCBhbmQgd2VzdFxyXG4gIDEwLCAvLyAxMDEwIC0tIGNvbm5lY3RlZCBub3J0aCBhbmQgc291dGhcclxuICAxMiwgLy8gMTAxMSAtLSBjb25uZWN0ZWQgbm9ydGgsIHNvdXRoIGFuZCB3ZXN0XHJcbiAgNywgIC8vIDExMDAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBlYXN0XHJcbiAgNiwgIC8vIDExMDEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCBhbmQgbm9ydGhcclxuICAxMywgLy8gMTExMCAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGggYW5kIGVhc3RcclxuICA4LCAgLy8gMTExMSAtLSBhbGwgY29ubmVjdGVkXHJcbl1cclxuXHJcbi8vIGNvbnN0IFdPT0RFTl9ET09SX0NMT1NFRF9OT1JUSF9TT1VUSCA9IDIwXHJcbmV4cG9ydCBjb25zdCBXT09ERU5fRE9PUl9DTE9TRURfQ09OTkVDVElPTlMgPSBbXHJcbiAgLy8gbm9ydGggZWFzdCBzb3V0aCB3ZXN0XHJcbiAgMTYsICAvLyAwMDAwIC0tIG5vIGNvbm5lY3Rpb25zIFxyXG4gIDE2LCAgLy8gMDAwMSAtLSBjb25uZWN0ZWQgd2VzdFxyXG4gIDIwLCAgLy8gMDAxMCAtLSBjb25uZWN0ZWQgc291dGhcclxuICAtMSwgLy8gMDAxMSAtLSBjb25uZWN0ZWQgc291dGggYW5kIHdlc3RcclxuICAxNiwgIC8vIDAxMDAgLS0gY29ubmVjdGVkIGVhc3RcclxuICAxNiwgIC8vIDAxMDEgLS0gY29ubmVjdGVkIGVhc3QgYW5kIHdlc3RcclxuICAtMSwgLy8gMDExMCAtLSBjb25uZWN0ZWQgZWFzdCBhbmQgc291dGhcclxuICAtMSwgIC8vIDAxMTEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCBhbmQgc291dGhcclxuICAyMCwgLy8gMTAwMCAtLSBjb25uZWN0ZWQgbm9ydGhcclxuICAtMSwgIC8vIDEwMDEgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCB3ZXN0XHJcbiAgMjAsIC8vIDEwMTAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBzb3V0aFxyXG4gIC0xLCAvLyAxMDExIC0tIGNvbm5lY3RlZCBub3J0aCwgc291dGggYW5kIHdlc3RcclxuICAtMSwgIC8vIDExMDAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBlYXN0XHJcbiAgLTEsICAvLyAxMTAxIC0tIGNvbm5lY3RlZCBlYXN0LXdlc3QgYW5kIG5vcnRoXHJcbiAgLTEsIC8vIDExMTAgLS0gY29ubmVjdGVkIG5vcnRoLXNvdXRoIGFuZCBlYXN0XHJcbiAgLTEsICAvLyAxMTExIC0tIGFsbCBjb25uZWN0ZWRcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFdPT0RFTl9ET09SX09QRU5fQ09OTkVDVElPTlMgPSBbXHJcbiAgLy8gbm9ydGggZWFzdCBzb3V0aCB3ZXN0XHJcbiAgMTcsICAvLyAwMDAwIC0tIG5vIGNvbm5lY3Rpb25zIFxyXG4gIDE3LCAgLy8gMDAwMSAtLSBjb25uZWN0ZWQgd2VzdFxyXG4gIDIxLCAgLy8gMDAxMCAtLSBjb25uZWN0ZWQgc291dGhcclxuICAtMSwgLy8gMDAxMSAtLSBjb25uZWN0ZWQgc291dGggYW5kIHdlc3RcclxuICAxNywgIC8vIDAxMDAgLS0gY29ubmVjdGVkIGVhc3RcclxuICAxNywgIC8vIDAxMDEgLS0gY29ubmVjdGVkIGVhc3QgYW5kIHdlc3RcclxuICAtMSwgLy8gMDExMCAtLSBjb25uZWN0ZWQgZWFzdCBhbmQgc291dGhcclxuICAtMSwgIC8vIDAxMTEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCBhbmQgc291dGhcclxuICAyMSwgLy8gMTAwMCAtLSBjb25uZWN0ZWQgbm9ydGhcclxuICAtMSwgIC8vIDEwMDEgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCB3ZXN0XHJcbiAgMjEsIC8vIDEwMTAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBzb3V0aFxyXG4gIC0xLCAvLyAxMDExIC0tIGNvbm5lY3RlZCBub3J0aCwgc291dGggYW5kIHdlc3RcclxuICAtMSwgIC8vIDExMDAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBlYXN0XHJcbiAgLTEsICAvLyAxMTAxIC0tIGNvbm5lY3RlZCBlYXN0LXdlc3QgYW5kIG5vcnRoXHJcbiAgLTEsIC8vIDExMTAgLS0gY29ubmVjdGVkIG5vcnRoLXNvdXRoIGFuZCBlYXN0XHJcbiAgLTEsICAvLyAxMTExIC0tIGFsbCBjb25uZWN0ZWRcclxuXVxyXG5cclxuXHJcblxyXG4vLyBkdXJhdGlvbiBvZiBpbnRlcmFjdGlvbiBwcm9ncmVzcyAobWlsbGlzKVxyXG5leHBvcnQgY29uc3QgUFJPR1JFU1NfSU5URVJWQUwgPSA1MDBcclxuLy8gIyBvZiBjZWxscyBpbiBwcm9ncmVzcyBhbmltXHJcbmV4cG9ydCBjb25zdCBQUk9HUkVTU19BTklNX0xFTkdUSCA9IDI0XHJcblxyXG4vLyBkaXJlY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBOT1JUSCA9ICdub3J0aCdcclxuZXhwb3J0IGNvbnN0IFNPVVRIID0gJ3NvdXRoJ1xyXG5leHBvcnQgY29uc3QgV0VTVCA9ICd3ZXN0J1xyXG5leHBvcnQgY29uc3QgRUFTVCA9ICdlYXN0J1xyXG5leHBvcnQgY29uc3QgTk9SVEhFQVNUID0gJ25vcnRoZWFzdCdcclxuZXhwb3J0IGNvbnN0IE5PUlRIV0VTVCA9ICdub3J0aHdlc3QnXHJcbmV4cG9ydCBjb25zdCBTT1VUSEVBU1QgPSAnc291dGhlYXN0J1xyXG5leHBvcnQgY29uc3QgU09VVEhXRVNUID0gJ3NvdXRod2VzdCdcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTQxZjg4Yjk4MTMyNTcyNTJmM2FmYjBmZjg3ZjkyZjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjIzYjJjYmI1NDAzOTQ4MWY2MDc0ZWM0YWJmN2YyNjMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWNiOGZlMjg3N2FjYTQyOGM1MzQwYzY2NDUxNDI0ODYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2YzYjI1ZWM4MjZkOGIyNjRkZTc1OGE0YjZjYTE1OTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzA3YjQxMWY3NjlmNDY2MDY3NTMwZGE1NmVlMzdmZDAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTQ3NTRmNjJlMGFlNGQyM2QzODZlMjQ2ZjVlMGNiNmUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGJiMzRmMTY3MWRmYTE3NDEyMGQ2MzliZGFkZTNhZTQucG5nXCI7IiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgUGxheSB9IGZyb20gJy4vc2NlbmVzL2xldmVsLW9uZS9wbGF5JztcclxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBPVkVSV09STEQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3RuJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL0dhbWVTdGF0ZVByb3ZpZGVyJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi91aS9BcHAnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxHYW1lU3RhdGVQcm92aWRlcj48QXBwIC8+PC9HYW1lU3RhdGVQcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpO1xyXG5cclxuY29uc29sZS5sb2coXCJDUkVBVEUgR0FNRS4uLlwiKVxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbmNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBQbGF5KGdhbWUpO1xyXG5nYW1lLmFkZChPVkVSV09STEQsIG92ZXJ3b3JsZCk7XHJcblxyXG5sZXQgbG9hZGVyID0gbmV3IGV4LkxvYWRlcigpO1xyXG5sb2FkZXIuc3VwcHJlc3NQbGF5QnV0dG9uID0gdHJ1ZTtcclxuZm9yIChsZXQga2V5IGluIFJlc291cmNlcykge1xyXG4gIGxvYWRlci5hZGRSZXNvdXJjZShSZXNvdXJjZXNba2V5XSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwibG9hZCBnYW1lXCIpXHJcbmdhbWUuc3RhcnQobG9hZGVyKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInN0YXJ0IGdhbWVcIilcclxuICBnYW1lLmdvVG9TY2VuZShPVkVSV09STEQpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3JhbmRcIjtcclxuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgYXZlcmFnZSB9IGZyb20gXCIuLi91dGlsL2F2ZXJhZ2VcIjtcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCIuLi91dGlsL21vZGVcIjtcclxuaW1wb3J0IHsgU09VVEhFQVNULCBOT1JUSFdFU1QsIE5PUlRILCBOT1JUSEVBU1QsIFdFU1QsIEVBU1QsIFNPVVRIV0VTVCwgU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0b2dyYW0ge1xyXG4gIFxyXG4gIC8vIHByaXZhdGUgY2VsbHM6IG51bWJlcltdW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGltczogRGltZW5zaW9ucywgcHVibGljIGNlbGxzOiBudW1iZXJbXVtdID0gW10pIHtcclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB0aGlzLnNldCh4LHksLTEpKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVJvdWdoR3JhaW5lZFZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIGdyYWluOiBudW1iZXIgPSAxNikge1xyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHggJSBncmFpbiA9PT0gMCAmJiB5ICUgZ3JhaW4gPT09IDApIHtcclxuICAgICAgICBsZXQgdmFsID0gcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgICBmb3IgKGxldCBkeCA9IDA7IGR4IDwgZ3JhaW47IGR4KyspIHtcclxuICAgICAgICAgIGZvciAobGV0IGR5ID0gMDsgZHkgPCBncmFpbjsgZHkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WCA9IHggKyBkeFxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IHkgKyBkeVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldID0gdGhpcy5jZWxsc1t0YXJnZXRZXSB8fCBbXVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldW3RhcmdldFhdID0gdmFsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMuY2VsbHNbeV1beF0gPSB0aGlzLmNlbGxzW01hdGguZmxvb3IoeS9ncmFpbildW01hdGguZmxvb3IoeC9ncmFpbildIC8vcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAgIC8vIGlmIChwbGFjZUhlcmUpIHtcclxuICAgICAgLy8gfVxyXG4gICAgfSwgKHkpID0+IHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIHNob3VsZFBsYWNlPzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICBsZXQgaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID0gISFzaG91bGRQbGFjZVxyXG4gICAgY29uc29sZS5sb2coXCJCdWlsZCBtYXBcIiwgdGhpcy5uYW1lKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IHBsYWNlSGVyZSA9IGhhc1BsYWNlbWVudFJlc3RyaWN0aW9ucyA/IHNob3VsZFBsYWNlKHgsIHkpIDogdHJ1ZVxyXG4gICAgICBpZiAocGxhY2VIZXJlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsc1t5XVt4XSA9IHBpY2soLi4udmFsdWVEaXN0cmlidXRpb24pXHJcbiAgICAgIH1cclxuICAgIH0sICh5KSA9PiB0aGlzLmNlbGxzW3ldID0gW10pXHJcbiAgfVxyXG5cclxuICBkaXN0cmlidXRlV2l0aGluKHNvdXJjZTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBzb3VyY2VSYXRlOiBudW1iZXIsIHZhbHVlUmF0ZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgcGxhY2VzID0gW11cclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHgseSkgPT0gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVpZ2hib3JzKHgsIHkpLmV2ZXJ5KHZhbCA9PiB2YWwgPT0gc291cmNlKSkge1xyXG4gICAgICAgICAgcGxhY2VzLnB1c2goW3gseV0pXHJcbiAgICAgICAgICAvLyB0aGlzLnNldCh4LHksIHBpY2sodmFsdWUsIHNvdXJjZSkpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgZGlzdHJpYnV0aW9uID0gWy4uLnRpbWVzKHZhbHVlUmF0ZSwgdmFsdWUpLCAuLi50aW1lcyhzb3VyY2VSYXRlLCBzb3VyY2UpXVxyXG4gICAgcGxhY2VzLmZvckVhY2goKFt4LHldKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0KHgseSwgcGljayguLi5kaXN0cmlidXRpb24pKVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb3B5KG5ld05hbWU6IHN0cmluZyk6IENhcnRvZ3JhbSB7XHJcbiAgICBsZXQgbmV3Q2VsbHMgPSBbXSAvL3RoaXMuY2VsbHMuc2xpY2UoKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbmV3Q2VsbHNbeV1beF0gPSB0aGlzLmF0KHgsIHkpXHJcbiAgICB9LCAoeSkgPT4gbmV3Q2VsbHNbeV0gPSBbXSlcclxuICAgIC8vIGZvciAoKVxyXG4gICAgbGV0IG5ld01hcCA9IG5ldyBDYXJ0b2dyYW0obmV3TmFtZSwgdGhpcy5kaW1zLCBuZXdDZWxscylcclxuICAgIC8vIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiBcclxuICAgIC8vICAgbmV3TWFwLnNldCh4LHksdGhpcy5hdCh4LHkpKVxyXG4gICAgLy8gICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAvLyApXHJcbiAgICByZXR1cm4gbmV3TWFwO1xyXG4gIH1cclxuXHJcbiAgYXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgcmV0dXJuIHRoaXMuY2VsbHNbeV0gJiYgdGhpcy5jZWxsc1t5XVt4XSB9XHJcblxyXG4gIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5jZWxsc1t5XSA9IHRoaXMuY2VsbHNbeV0gfHwgW11cclxuICAgIHRoaXMuY2VsbHNbeV1beF0gPSB2YWx1ZVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzbW9vdGgocm91bmRzOiBudW1iZXIgPSAzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBuZXdDZWxsczogbnVtYmVyW11bXSA9IFtdXHJcbiAgICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LHkpID0+IHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IHRoaXMuYXQoeCx5KVxyXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSB0aGlzLm5laWdoYm9ycyh4LHkpXHJcbiAgICAgICAgbGV0IG1vZGFsVmFsdWUgPSBtb2RlKG9yaWdpbmFsVmFsdWUsIC4uLm5laWdoYm9ycylcclxuICAgICAgICBuZXdDZWxsc1t5XVt4XSA9IHBpY2soLi4udGltZXMoMTMsIG1vZGFsVmFsdWUpLCAuLi5uZWlnaGJvcnMsIG9yaWdpbmFsVmFsdWUpXHJcbiAgICAgIH0sICh5KSA9PiBuZXdDZWxsc1t5XSA9IFtdKVxyXG4gICAgICB0aGlzLmNlbGxzID0gbmV3Q2VsbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlYWNoUG9zaXRpb24oZWFjaENlbGxDYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkLCBlYWNoUm93Q2FsbGJhY2s/OiAoeTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuZGltcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBlYWNoUm93Q2FsbGJhY2sgJiYgZWFjaFJvd0NhbGxiYWNrKHkpXHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kaW1zLndpZHRoOyB4KyspIHtcclxuICAgICAgICBlYWNoQ2VsbENhbGxiYWNrKHgseSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc3RhdGljIG5laWdoYm9yRGlyZWN0aW9ucyA9IHsgTk9SVEhXRVNUOiAwLCAgTk9SVEg6IDEsIE5PUlRIRUFTVDogMiwgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV0VTVDogMywgRUFTVDogNSxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT1VUSFdFU1Q6IDYsIFNPVVRIOiA3LCBTT1VUSEVBU1Q6IDggfVxyXG4gIC8vIG5laWdoYm9yUG9zaXRpb25zKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gIC8vICAgcmV0dXJuIFtcclxuICAvLyAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gIC8vICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgLy8gICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gIC8vICAgXVxyXG4gIC8vICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gIC8vICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgLy8gfSBcclxuICBuZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgcmV0dXJuIFtcclxuICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gICAgXVxyXG4gICAgICAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBsYWJlbGxlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXMuYXQoeCx5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW05PUlRIV0VTVF06IHRoaXMuYXQoeCAtIDEsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhdOiB0aGlzLmF0KHgsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhFQVNUXTogdGhpcy5hdCh4ICsgMSwgeSAtIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgW0VBU1RdOiB0aGlzLmF0KHggKyAxLCB5KSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbU09VVEhXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSF06IHRoaXMuYXQoeCwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSEVBU1RdOiB0aGlzLmF0KHggKyAxLCB5ICsgMSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZVxyXG4gICAgfVxyXG4gICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAvLyAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgd2l0aGluQm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLmRpbXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmRpbXMuaGVpZ2h0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5PUlRILCBTT1VUSCwgV0VTVCwgRUFTVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSB0eXBlb2YgTk9SVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgU09VVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgV0VTVFxyXG4gICAgICAgICAgICAgICB8IHR5cGVvZiBFQVNUXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0UG9zaXRpb24ocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgbGV0IFt4LHldID0gcG9zaXRpb25cclxuICBpZiAoZGlyZWN0aW9uID09PSBOT1JUSCkge1xyXG4gICAgcmV0dXJuIFt4LCB5LTFdIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gV0VTVCkge1xyXG4gICAgcmV0dXJuIFt4LTEsIHldIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gU09VVEgpIHtcclxuICAgIHJldHVybiBbeCwgeSsxXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IEVBU1QpIHtcclxuICAgIHJldHVybiBbeCsxLCB5XSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlyZWN0aW9uIHRvIGFkanVzdFBvc2l0aW9uOiBcIiArIGRpcmVjdGlvbilcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4vZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBDYXJ0b2dyYW0gfSBmcm9tIFwiLi9DYXJ0b2dyYW1cIjtcclxuLy8gaW1wb3J0IHsgR1JBU1MsIFdBVEVSLCBNT1VOVEFJTiwgTk9USElORywgR1JBUEVTLCBCQU5BTkEsIEFQUExFUywgUExVTSwgQkxVRUJFUlJZLCBTT1VUSCwgTk9SVEgsIFdBVEVSX1dJVEhfR1JBU1NfU09VVEgsIE5PUlRIRUFTVCwgU09VVEhFQVNULCBFQVNULCBXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRILCBXQVRFUl9XSVRIX0dSQVNTX1dFU1QsIFdBVEVSX1dJVEhfR1JBU1NfRUFTVCwgTk9SVEhXRVNULCBTT1VUSFdFU1QsIEdSQVNTX1dJVEhfV0FURVJfU09VVEhXRVNULCBHUkFTU19XSVRIX1dBVEVSX1NPVVRIRUFTVCwgR1JBU1NfV0lUSF9XQVRFUl9OT1JUSEVBU1QsIEdSQVNTX1dJVEhfV0FURVJfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRIRUFTVCwgV0FURVJfV0lUSF9HUkFTU19TT1VUSEVBU1QsIFdBVEVSX1dJVEhfR1JBU1NfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX1NPVVRIV0VTVCwgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElORywgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElOR19CUklER0VfU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9yYW5kXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEdSQVNTLCBXQVRFUiwgTk9SVEgsIEVBU1QsIFNPVVRILCBXRVNULCBOT1RISU5HLCBCQU5BTkEsIEdSQVBFUywgQVBQTEVTLCBQTFVNLCBCTFVFQkVSUlksIFNPVVRIRUFTVCwgVFJFRVMsIFdBVEVSX0dSQVNTX0lOVEVSRkFDRSwgVFJFRV9HUkFTU19JTlRFUkZBQ0UsIENPUk4sIFNUUkFXQkVSUlksIFdPT0RFTl9XQUxMLCBXT09ERU5fV0FMTF9DT05ORUNUSU9OUywgV09PREVOX0ZMT09SLCBXT09ERU5fRE9PUl9DTE9TRUQsIFdPT0RFTl9ET09SX09QRU4sIFdPT0RFTl9ET09SX09QRU5fQ09OTkVDVElPTlMsIFdPT0RFTl9ET09SX0NMT1NFRF9DT05ORUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgdGVycmFpbjogQ2FydG9ncmFtXHJcbiAgdGhpbmdzOiBDYXJ0b2dyYW1cclxuICBmbG9vcnM6IENhcnRvZ3JhbVxyXG4gIHN0cnVjdHVyZTogQ2FydG9ncmFtXHJcblxyXG4gIHByZXR0eVRlcnJhaW46IENhcnRvZ3JhbVxyXG4gIHByZXR0eVN0cnVjdHVyZTogQ2FydG9ncmFtXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpbXM6IERpbWVuc2lvbnMpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVSYXdUZXJyYWluKGRpbXMpXHJcbiAgICB0aGlzLnByZXR0eVRlcnJhaW4gPSBuZXcgQ2FydG9ncmFtKCdwcmV0dHlUZXJyYWluJywgZGltcykgLy90aGlzLnRlcnJhaW4uY29weSgncHJldHR5VGVycmFpbicpXHJcbiAgICB0aGlzLmFzc2VtYmxlUHJldHR5VGVycmFpbigpXHJcblxyXG4gICAgLy8gZGlzdHJpYnV0ZSB0aGluZ3NcclxuICAgIGxldCB0aGluZ0Rpc3RyaWJ1dGlvbiA9IFtcclxuICAgICAgLi4udGltZXMoMTAsIE5PVEhJTkcpLFxyXG4gICAgICAuLi50aW1lcygxLCBCQU5BTkEpLFxyXG4gICAgICAuLi50aW1lcygyLCBHUkFQRVMpLFxyXG4gICAgICAuLi50aW1lcygzLCBBUFBMRVMpLFxyXG4gICAgICAuLi50aW1lcygxLCBQTFVNKSxcclxuICAgICAgLi4udGltZXMoMSwgQkxVRUJFUlJZKSxcclxuICAgICAgLi4udGltZXMoMiwgQ09STiksXHJcbiAgICAgIC4uLnRpbWVzKDMsIFNUUkFXQkVSUlkpLFxyXG4gICAgXVxyXG4gICAgdGhpcy50aGluZ3MgPSBuZXcgQ2FydG9ncmFtKCd0aGluZ3MnLCBkaW1zKVxyXG4gICAgdGhpcy50aGluZ3MuZGlzdHJpYnV0ZVZhbHVlcyhcclxuICAgICAgdGhpbmdEaXN0cmlidXRpb24sXHJcbiAgICAgICh4LHkpID0+IFxyXG4gICAgICB0aGlzLnRlcnJhaW4uYXQoeCx5KSA9PSBHUkFTUyAmJlxyXG4gICAgICAgIHRoaXMudGVycmFpbi5uZWlnaGJvcnMoeCx5KS5ldmVyeShjZWxsID0+IGNlbGwgPT0gR1JBU1MpXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5zdHJ1Y3R1cmUgPSBuZXcgQ2FydG9ncmFtKCdzdHJ1Y3R1cmUnLCBkaW1zKVxyXG4gICAgdGhpcy5wcmV0dHlTdHJ1Y3R1cmUgPSBuZXcgQ2FydG9ncmFtKCdwcmV0dHlTdHJ1Y3R1cmUnLCBkaW1zKVxyXG5cclxuICAgIHRoaXMuZmxvb3JzID0gbmV3IENhcnRvZ3JhbSgnZmxvb3JzJywgZGltcylcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMudGVycmFpbi5kaW1zLndpZHRoIH1cclxuICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy50ZXJyYWluLmRpbXMuaGVpZ2h0IH1cclxuXHJcbiAgc3RhdGljIGdlbigpOiBXb3JsZCB7XHJcbiAgICBsZXQgd29ybGQgPSBuZXcgV29ybGQoeyB3aWR0aDogMjU2LCBoZWlnaHQ6IDI1NiB9KVxyXG4gICAgcmV0dXJuIHdvcmxkXHJcbiAgfVxyXG5cclxuICBkZXNjcmliZVRlcnJhaW4oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlcnJhaW4gPSB0aGlzLnRlcnJhaW4uYXQoeCx5KVxyXG4gICAgaWYgKHRlcnJhaW4gPT0gR1JBU1MpIHtcclxuICAgICAgcmV0dXJuICdncmFzcydcclxuICAgIH0gZWxzZSBpZiAodGVycmFpbiA9PSBXQVRFUikge1xyXG4gICAgICByZXR1cm4gJ3dhdGVyJ1xyXG4gICAgfSBlbHNlIGlmICh0ZXJyYWluID09IFRSRUVTKSB7XHJcbiAgICAgIHJldHVybiAnZm9yZXN0J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICc/Pz8nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXNjcmliZU9iamVjdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgbGV0IGl0ID0gdGhpcy50aGluZ3MuYXQoeCx5KVxyXG4gICAgaWYgKGl0ID09IE5PVEhJTkcgfHwgaXQgPT0gdW5kZWZpbmVkKSB7IHJldHVybiAnJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBCQU5BTkEpIHsgcmV0dXJuICdiYW5hbmEnIH1cclxuICAgIGVsc2UgaWYgKGl0ID09IEdSQVBFUykgeyByZXR1cm4gJ2dyYXBlcycgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQkxVRUJFUlJZKSB7IHJldHVybiAnYmx1ZWJlcnJ5JyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBDT1JOKSB7IHJldHVybiAnY29ybicgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gU1RSQVdCRVJSWSkgeyByZXR1cm4gJ3N0cmF3YmVycnknfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQVBQTEVTKSB7IHJldHVybiAnYXBwbGVzJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBQTFVNKSB7IHJldHVybiAncGx1bScgfVxyXG4gICAgZWxzZSB7IHJldHVybiAnPz8/IFsnICsgaXQgKyAnXSd9XHJcbiAgfVxyXG5cclxuICBjaG9wVHJlZUF0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNob3AgdHJlZSBhdCB0YXJnZXQ6IFwiICsgeCArIFwiLCBcIiArIHkpXHJcbiAgICB0aGlzLnRlcnJhaW4uc2V0KHgseSxHUkFTUylcclxuICAgIC8vIHRoaXMuYXNzZW1ibGVQcmV0dHlUZXJyYWluKClcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhUUkVFX0dSQVNTX0lOVEVSRkFDRSwgVFJFRVMsIEdSQVNTKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBiZWF1dGlmeVdvb2RlblN0cnVjdHVyZXMoKSB7XHJcbiAgICBsZXQgd29vZEluZGV4ID0ge1xyXG4gICAgICAgIFtXT09ERU5fV0FMTF06IFdPT0RFTl9XQUxMX0NPTk5FQ1RJT05TLFxyXG4gICAgICAgIFtXT09ERU5fRE9PUl9PUEVOXTogV09PREVOX0RPT1JfT1BFTl9DT05ORUNUSU9OUyxcclxuICAgICAgICBbV09PREVOX0RPT1JfQ0xPU0VEXTogV09PREVOX0RPT1JfQ0xPU0VEX0NPTk5FQ1RJT05TLFxyXG4gICAgICB9XHJcbiAgICBsZXQgY29ubmVjdGluZ1dvb2RTdHJ1Y3R1cmVzID0gWyBXT09ERU5fV0FMTCwgV09PREVOX0RPT1JfT1BFTiwgV09PREVOX0RPT1JfQ0xPU0VEIF1cclxuICAgIHRoaXMuYmVhdXRpZnlTdHJ1Y3R1cmVJbnRlcmZhY2VzKHdvb2RJbmRleCwgY29ubmVjdGluZ1dvb2RTdHJ1Y3R1cmVzKVxyXG4gIH1cclxuXHJcbiAgc3RydWN0dXJlRGVzY3JpcHRpb25zID0ge1xyXG4gICAgW1dPT0RFTl9XQUxMXTogJ1dvb2RlbiBXYWxsJyxcclxuICAgIFtXT09ERU5fRE9PUl9PUEVOXTogJ1dvb2RlbiBEb29yIChPcGVuKScsXHJcbiAgICBbV09PREVOX0RPT1JfQ0xPU0VEXTogJ1dvb2RlbiBEb29yIChDbG9zZWQpJyxcclxuICAgIFtXT09ERU5fRkxPT1JdOiAnV29vZGVuIEZsb29yJ1xyXG4gIH1cclxuICBidWlsZCh4OiBudW1iZXIsIHk6IG51bWJlciwgc3RydWN0dXJlSWQ6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJidWlsZCBzdHJ1Y3R1cmUgd2l0aCBpZCBcIiArIHN0cnVjdHVyZUlkKVxyXG4gICAgY29uc29sZS5sb2coXCJidWlsZCBcIiArIHRoaXMuc3RydWN0dXJlRGVzY3JpcHRpb25zW3N0cnVjdHVyZUlkXSArIFwiIGF0IFwiICsgeCArIFwiLCBcIiArIHkpXHJcbiAgICAvLyB0aGlzLnN0cnVjdHVyZS5zZXQoeCx5LHN0cnVjdHVyZUlkKVxyXG4gICAgXHJcbiAgICBpZiAoc3RydWN0dXJlSWQgPT0gV09PREVOX1dBTEwpIHtcclxuICAgICAgdGhpcy5zdHJ1Y3R1cmUuc2V0KHgsIHksIFdPT0RFTl9XQUxMKVxyXG4gICAgICB0aGlzLmJlYXV0aWZ5V29vZGVuU3RydWN0dXJlcygpXHJcbiAgICB9IGVsc2UgaWYgKHN0cnVjdHVyZUlkID09IFdPT0RFTl9ET09SX0NMT1NFRCkge1xyXG4gICAgICB0aGlzLnN0cnVjdHVyZS5zZXQoeCwgeSwgV09PREVOX0RPT1JfQ0xPU0VEKVxyXG4gICAgICAvLyB0aGlzLmJlYXV0aWZ5U3RydWN0dXJlSW50ZXJmYWNlcyh3b29kSW5kZXgsIGNvbm5lY3RpbmdXb29kU3RydWN0dXJlcylcclxuICAgICAgdGhpcy5iZWF1dGlmeVdvb2RlblN0cnVjdHVyZXMoKVxyXG4gICAgfSBlbHNlIGlmIChzdHJ1Y3R1cmVJZCA9PSBXT09ERU5fRkxPT1IpIHtcclxuICAgICAgLy8gbmVlZCB0byBhY3R1YWxseSBtb2RpZnkgdGVycmFpbi4uLj9cclxuICAgICAgLy8gb3IgbWF5YmUgYSAnZmxvb3InIGxldmVsIHRlcnJhaW4gdG8gZW5zdXJlIGxheWVyaW5nXHJcbiAgICAgICAgY29uc29sZS53YXJuKCd3b3VsZCBidWlsZCBmbG9vci4uLicpXHJcbiAgICAgIGlmICh0aGlzLnRlcnJhaW4uYXQoeCsxLHkpID09IEdSQVNTICYmIHRoaXMudGVycmFpbi5hdCh4LHkrMSkgPT0gR1JBU1MgJiYgdGhpcy50ZXJyYWluLmF0KHgrMSx5KzEpID09IEdSQVNTKSB7XHJcbiAgICAgICAgdGhpcy5mbG9vcnMuc2V0KHgsIHksIFdPT0RFTl9GTE9PUilcclxuICAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBnZW5lcmF0ZVJhd1RlcnJhaW4oZGltczogRGltZW5zaW9ucykge1xyXG4gICAgbGV0IHRlcnJhaW5EaXN0cmlidXRpb24gPSBbXHJcbiAgICAgIC4uLnRpbWVzKDE4LCBHUkFTUyksIFxyXG4gICAgICAuLi50aW1lcygxMywgV0FURVIpLFxyXG4gICAgICAvLyAuLi50aW1lcygxMSwgTU9VTlRBSU4pXHJcbiAgICBdXHJcbiAgICB0aGlzLnRlcnJhaW4gPSBuZXcgQ2FydG9ncmFtKCd0ZXJyYWluJywgZGltcylcclxuICAgIC8vIHRoaXMudGVycmFpbi5kaXN0cmlidXRlVmFsdWVzKHRlcnJhaW5EaXN0cmlidXRpb24pXHJcbiAgICB0aGlzLnRlcnJhaW4uZGlzdHJpYnV0ZVJvdWdoR3JhaW5lZFZhbHVlcyh0ZXJyYWluRGlzdHJpYnV0aW9uLCA4KVxyXG4gICAgdGhpcy50ZXJyYWluLnNtb290aCg4KVxyXG4gICAgdGhpcy50ZXJyYWluLmRpc3RyaWJ1dGVXaXRoaW4oR1JBU1MsIFRSRUVTLCAyMSwgMTUpXHJcbiAgfVxyXG5cclxuICBiZWF1dGlmeVRlcnJhaW5JbnRlcmZhY2VzKGluZGljZXM6IG51bWJlcltdW10sIHRlcnJhaW5PbmU6IG51bWJlciwgdGVycmFpblR3bzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnByZXR0eVRlcnJhaW4uZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcy50ZXJyYWluLmF0KHgsIHkpXHJcbiAgICAgIGxldCBuZWlnaGJvcnMgPSB0aGlzLnRlcnJhaW4ubGFiZWxsZWROZWlnaGJvcnMoeCwgeSlcclxuICAgICAgbGV0IGVhc3QgPSBuZWlnaGJvcnNbRUFTVF1cclxuICAgICAgbGV0IHNvdXRoID0gbmVpZ2hib3JzW1NPVVRIXVxyXG4gICAgICBsZXQgc291dGhlYXN0ID0gbmVpZ2hib3JzW1NPVVRIRUFTVF1cclxuICAgICAgbGV0IGdyb3VwID0gW3NlbGYsIGVhc3QsIHNvdXRoLCBzb3V0aGVhc3RdXHJcblxyXG4gICAgICBpZiAoZ3JvdXAuZXZlcnkodmFsID0+IHZhbCA9PSB0ZXJyYWluT25lIHx8IHZhbCA9PSB0ZXJyYWluVHdvKSkge1xyXG4gICAgICAgIGxldCBtYXNrID1cclxuICAgICAgICAgICh0aGlzLnRlcnJhaW4uYXQoeCwgeSkgPT0gdGVycmFpbk9uZSA/IDAgOiAxKSAqIDggK1xyXG4gICAgICAgICAgKG5laWdoYm9yc1tFQVNUXSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogNCArXHJcbiAgICAgICAgICAobmVpZ2hib3JzW1NPVVRIXSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogMiArXHJcbiAgICAgICAgICAobmVpZ2hib3JzW1NPVVRIRUFTVF0gPT0gdGVycmFpbk9uZSA/IDAgOiAxKSAqIDFcclxuICAgICAgICB0aGlzLnByZXR0eVRlcnJhaW4uc2V0KHgsIHksIHBpY2soLi4uaW5kaWNlc1ttYXNrXSkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3NlbWJsZVByZXR0eVRlcnJhaW4oKSB7XHJcbiAgICB0aGlzLmJlYXV0aWZ5VGVycmFpbkludGVyZmFjZXMoV0FURVJfR1JBU1NfSU5URVJGQUNFLCBXQVRFUiwgR1JBU1MpXHJcbiAgICB0aGlzLmJlYXV0aWZ5VGVycmFpbkludGVyZmFjZXMoVFJFRV9HUkFTU19JTlRFUkZBQ0UsIFRSRUVTLCBHUkFTUylcclxuICB9XHJcblxyXG4gIGJlYXV0aWZ5U3RydWN0dXJlSW50ZXJmYWNlcyhpbmRpY2VzOiB7IFtrZXk6IG51bWJlcl06IG51bWJlcltdIH0sIHN0cnVjdHVyZXM6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLnByZXR0eVN0cnVjdHVyZS5lYWNoUG9zaXRpb24oKHgseSkgPT4ge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXMuc3RydWN0dXJlLmF0KHgseSlcclxuICAgICAgaWYgKHN0cnVjdHVyZXMuaW5jbHVkZXMoc2VsZikpIHsgLy9zZWxmID09IHN0cnVjdHVyZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmVhdXRpZnkgc3RydWN0dXJlIFwiICsgc3RydWN0dXJlICsgXCIgYXQgXCIgKyB4ICsgXCIsIFwiICsgeSlcclxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gdGhpcy5zdHJ1Y3R1cmUubGFiZWxsZWROZWlnaGJvcnMoeCx5KVxyXG4gICAgICAgIGxldCBub3J0aCA9IG5laWdoYm9yc1tOT1JUSF1cclxuICAgICAgICBsZXQgc291dGggPSBuZWlnaGJvcnNbU09VVEhdXHJcbiAgICAgICAgbGV0IGVhc3QgPSBuZWlnaGJvcnNbRUFTVF1cclxuICAgICAgICBsZXQgd2VzdCA9IG5laWdoYm9yc1tXRVNUXVxyXG5cclxuICAgICAgICBsZXQgbWFzayA9IChzdHJ1Y3R1cmVzLmluY2x1ZGVzKG5vcnRoKSA/IDEgOiAwKSAqIDggK1xyXG4gICAgICAgICAgICAgICAgICAgKHN0cnVjdHVyZXMuaW5jbHVkZXMoZWFzdCkgPyAxIDogMCkgKiA0ICtcclxuICAgICAgICAgICAgICAgICAgIChzdHJ1Y3R1cmVzLmluY2x1ZGVzKHNvdXRoKSA/IDEgOiAwKSAqIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgKHN0cnVjdHVyZXMuaW5jbHVkZXMod2VzdCkgPyAxIDogMCkgKiAxXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb25uZWN0aW9uc1wiLCB7IG5vcnRoLCBzb3V0aCwgZWFzdCwgd2VzdH0sIFwiLS0tPlwiLCBtYXNrKVxyXG4gICAgICAgIHRoaXMucHJldHR5U3RydWN0dXJlLnNldCh4LHksaW5kaWNlc1tzZWxmXVttYXNrXSlcclxuICAgICAgICBpZiAoaW5kaWNlc1tzZWxmXVttYXNrXSA9PT0gLTEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlIHN0cnVjdHVyZSBhdCBcIiArIHggKyBcIiwgXCIgKyB5KVxyXG4gICAgICAgICAgdGhpcy5zdHJ1Y3R1cmUuc2V0KHgseSwtMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpc1RlcnJhaW5DbGVhcih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHRlcnJhaW4gPSB0aGlzLnRlcnJhaW4uYXQoeCx5KVxyXG4gICAgcmV0dXJuIHRlcnJhaW4gPT0gR1JBU1NcclxuICB9XHJcblxyXG4gIGlzUG9zaXRpb25QYXNzYWJsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGJ1aWxkaW5nID0gdGhpcy5zdHJ1Y3R1cmUuYXQoeCx5KVxyXG4gICAgcmV0dXJuIHRoaXMuaXNUZXJyYWluQ2xlYXIoeCx5KVxyXG4gICAgICAgICYmIChidWlsZGluZyA9PSBOT1RISU5HIHx8IGJ1aWxkaW5nID09IHVuZGVmaW5lZCB8fCBidWlsZGluZyA9PSBXT09ERU5fRE9PUl9PUEVOKVxyXG4gIH1cclxuXHJcbiAgLy8gXHJcbiAgaXNQb3NpdGlvbkNsZWFyKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1RlcnJhaW5DbGVhcih4LHkpICYmIHRoaXMuaXNQb3NpdGlvblBhc3NhYmxlKHgseSlcclxuICAgIC8vbGV0IHRlcnJhaW4gPSB0aGlzLnRlcnJhaW4uYXQoeCx5KVxyXG4gICAgLy9sZXQgdGhpbmcgPSB0aGlzLnRoaW5ncy5hdCh4LCB5KVxyXG4gICAgLy9sZXQgYnVpbGRpbmcgPSB0aGlzLnN0cnVjdHVyZS5hdCh4LHkpXHJcbiAgICAvL2xldCBpc0NsZWFyID0gKHRlcnJhaW4gPT0gR1JBU1MpIC8vIHx8IHRlcnJhaW4gPT0gVFJFRVMpXHJcbiAgICAvLyAgICAvLyAmJiAodGhpbmcgPT0gTk9USElORyB8fCB0aGluZyA9PSB1bmRlZmluZWQpXHJcbiAgICAvLyAgICAmJiAoYnVpbGRpbmcgPT0gTk9USElORyB8fCBidWlsZGluZyA9PSB1bmRlZmluZWQgfHwgYnVpbGRpbmcgPT0gV09PREVOX0RPT1JfT1BFTilcclxuXHJcbiAgICAvL3JldHVybiBpc0NsZWFyXHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZG9tQ2xlYXJQb3NpdGlvbigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGxldCBtYXRjaGluZ1Bvc2l0aW9uczogW251bWJlciwgbnVtYmVyXVtdID0gW11cclxuICAgIHRoaXMudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3NpdGlvbkNsZWFyKHgseSkpIHtcclxuICAgICAgICBtYXRjaGluZ1Bvc2l0aW9ucy5wdXNoKFt4LHldKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHBpY2soLi4ubWF0Y2hpbmdQb3NpdGlvbnMpIGFzIFdvcmxkUG9zaXRpb25cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgT1ZFUldPUkxEX0NFTExfU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuY29uc3Qgc3dvcmQgPSByZXF1aXJlKCcuL2ltYWdlcy9zd29yZC5wbmcnKTtcclxuY29uc3QgZnJ1aXQgPSByZXF1aXJlKCcuL2ltYWdlcy9mcnVpdC5wbmcnKTtcclxuY29uc3QgdGVycmFpbiA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4tZGVlcC5wbmcnKTtcclxuLy8gY29uc3QgdGVycmFpblNtb290aCA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4ucG5nJyk7XHJcbmNvbnN0IHBlYXNhbnQgPSByZXF1aXJlKCcuL2ltYWdlcy9wZWFzYW50LnBuZycpO1xyXG5jb25zdCBwcm9ncmVzcyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3Byb2dyZXNzLnBuZycpXHJcbmNvbnN0IHN0cnVjdHVyZSA9IHJlcXVpcmUoJy4vaW1hZ2VzL3N0cnVjdHVyZS5wbmcnKVxyXG5cclxuY29uc3QgZmxvb3IgPSByZXF1aXJlKCcuL2ltYWdlcy9mbG9vcnMucG5nJylcclxuXHJcbmxldCBSZXNvdXJjZXMgPSB7XHJcbiAgU3dvcmQ6IG5ldyBleC5UZXh0dXJlKHN3b3JkKSxcclxuICBGcnVpdDogbmV3IGV4LlRleHR1cmUoZnJ1aXQpLFxyXG4gIFRlcnJhaW46IG5ldyBleC5UZXh0dXJlKHRlcnJhaW4pLFxyXG4gIFBlYXNhbnQ6IG5ldyBleC5UZXh0dXJlKHBlYXNhbnQpLFxyXG4gIFByb2dyZXNzOiBuZXcgZXguVGV4dHVyZShwcm9ncmVzcyksXHJcbiAgU3RydWN0dXJlOiBuZXcgZXguVGV4dHVyZShzdHJ1Y3R1cmUpLFxyXG4gIEZsb29yOiBuZXcgZXguVGV4dHVyZShmbG9vciksXHJcbn1cclxuXHJcbmxldCBzeiA9IE9WRVJXT1JMRF9DRUxMX1NJWkVcclxubGV0IFNwcml0ZVNoZWV0cyA9IHtcclxuICBGcnVpdDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5GcnVpdCwgNywgMiwgc3osIHN6KSxcclxuICBUZXJyYWluOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRlcnJhaW4sIDgsIDgsIHN6LCBzeiksXHJcbiAgUGVhc2FudDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5QZWFzYW50LCA0LCA0LCBzeiwgc3opLFxyXG4gIFByb2dyZXNzOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlByb2dyZXNzLCAxNywgMSwgc3osIHN6KSxcclxuICBTdHJ1Y3R1cmU6IG5ldyBleC5TcHJpdGVTaGVldChSZXNvdXJjZXMuU3RydWN0dXJlLCA0LCA4LCBzeiwgc3opLFxyXG4gIEZsb29yOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLkZsb29yLCAyLCAyLCBzeiwgc3opLFxyXG59XHJcblxyXG5leHBvcnQgeyBSZXNvdXJjZXMsIFNwcml0ZVNoZWV0cyB9XHJcbiIsImltcG9ydCAqIGFzIGV4IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi8uLi9HYW1lJztcclxuaW1wb3J0IHsgTk9USElORywgT1ZFUldPUkxEX0NFTExfU0laRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gJy4uLy4uL3Jlc291cmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW52aXJvbnMge1xyXG4gIHRlcnJhaW5UaWxlczogZXguVGlsZU1hcDtcclxuICB0aGluZ1RpbGVzOiBleC5UaWxlTWFwO1xyXG4gIGZsb29yVGlsZXM6IGV4LlRpbGVNYXA7XHJcbiAgc3RydWN0dXJlVGlsZXM6IGV4LlRpbGVNYXA7XHJcblxyXG4gIGdldCB0aWxlbWFwcygpIHsgcmV0dXJuIFt0aGlzLnRlcnJhaW5UaWxlcywgdGhpcy5mbG9vclRpbGVzLCB0aGlzLnRoaW5nVGlsZXMsIHRoaXMuc3RydWN0dXJlVGlsZXNdOyB9XHJcbiAgZ2V0IHRlcnJhaW5Tb3VyY2UoKSB7IHJldHVybiB0aGlzLmdhbWUud29ybGQucHJldHR5VGVycmFpbjsgfVxyXG4gIGdldCBzdHJ1Y3R1cmVTb3VyY2UoKSB7IHJldHVybiB0aGlzLmdhbWUud29ybGQucHJldHR5U3RydWN0dXJlOyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FtZTogR2FtZSkge1xyXG4gICAgbGV0IGlzT2Zmc2V0ID0gdHJ1ZTtcclxuICAgIGxldCB0ZXJyYWluTWFwT3JpZ2luID0gaXNPZmZzZXQgPyBbMCwgMF1cclxuICAgICAgOiBbLU9WRVJXT1JMRF9DRUxMX1NJWkUgLyAyLCAtT1ZFUldPUkxEX0NFTExfU0laRSAvIDJdO1xyXG4gICAgdGhpcy50ZXJyYWluVGlsZXMgPSBuZXcgZXguVGlsZU1hcChcclxuICAgICAgdGVycmFpbk1hcE9yaWdpblswXSxcclxuICAgICAgdGVycmFpbk1hcE9yaWdpblsxXSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIDEsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDFcclxuICAgICk7XHJcbiAgICB0aGlzLnRlcnJhaW5UaWxlcy5yZWdpc3RlclNwcml0ZVNoZWV0KCdsYW5kJywgU3ByaXRlU2hlZXRzLlRlcnJhaW4pO1xyXG4gICAgdGhpcy5wYXZlVGVycmFpbigpO1xyXG5cclxuICAgIGxldCB0aGluZ01hcE9yaWdpbiA9IFstT1ZFUldPUkxEX0NFTExfU0laRSAvIDIsIC1PVkVSV09STERfQ0VMTF9TSVpFIC8gMl07XHJcbiAgICB0aGlzLnRoaW5nVGlsZXMgPSBuZXcgZXguVGlsZU1hcChcclxuICAgICAgdGhpbmdNYXBPcmlnaW5bMF0sXHJcbiAgICAgIHRoaW5nTWFwT3JpZ2luWzFdLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMVxyXG4gICAgKTtcclxuICAgIHRoaXMudGhpbmdUaWxlcy5yZWdpc3RlclNwcml0ZVNoZWV0KCdmcnVpdCcsIFNwcml0ZVNoZWV0cy5GcnVpdCk7XHJcblxyXG4gICAgdGhpcy5lbWJlZFRoaW5ncygpO1xyXG5cclxuICAgIGxldCBzdHJ1Y3R1cmVNYXBPcmlnaW4gPSB0aGluZ01hcE9yaWdpbjtcclxuICAgIHRoaXMuc3RydWN0dXJlVGlsZXMgPSBuZXcgZXguVGlsZU1hcChcclxuICAgICAgc3RydWN0dXJlTWFwT3JpZ2luWzBdLFxyXG4gICAgICBzdHJ1Y3R1cmVNYXBPcmlnaW5bMV0sXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAxLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQud2lkdGggLSAxKTtcclxuICAgIHRoaXMuc3RydWN0dXJlVGlsZXMucmVnaXN0ZXJTcHJpdGVTaGVldCgnc3RydWN0dXJlJywgU3ByaXRlU2hlZXRzLlN0cnVjdHVyZSk7XHJcblxyXG4gICAgbGV0IGZsb29yTWFwT3JpZ2luID0gdGVycmFpbk1hcE9yaWdpbjtcclxuICAgIHRoaXMuZmxvb3JUaWxlcyA9IG5ldyBleC5UaWxlTWFwKFxyXG4gICAgICBmbG9vck1hcE9yaWdpblswXSxcclxuICAgICAgZmxvb3JNYXBPcmlnaW5bMV0sXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAxLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQud2lkdGggLSAxKTtcclxuICAgIHRoaXMuZmxvb3JUaWxlcy5yZWdpc3RlclNwcml0ZVNoZWV0KCdmbG9vcicsIFNwcml0ZVNoZWV0cy5GbG9vcik7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHBhdmVUZXJyYWluKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXZlIHRlcnJhaW4uLi5cIik7XHJcbiAgICB0aGlzLmdhbWUud29ybGQudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IGNlbGwgPSB0aGlzLnRlcnJhaW5UaWxlcy5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIGNlbGwuY2xlYXJTcHJpdGVzKCk7XHJcbiAgICAgICAgY2VsbC5wdXNoU3ByaXRlKG5ldyBleC5UaWxlU3ByaXRlKCdsYW5kJywgdGhpcy50ZXJyYWluU291cmNlLmF0KHgsIHkpKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGF2ZVRlcnJhaW5OYXJyb3dseShwb3NpdGlvbnM6IFtudW1iZXIsIG51bWJlcl1bXSkge1xyXG4gICAgcG9zaXRpb25zLmZvckVhY2goKFt4LCB5XSkgPT4ge1xyXG4gICAgICBsZXQgY2VsbCA9IHRoaXMudGVycmFpblRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKTtcclxuICAgICAgICBjZWxsLnB1c2hTcHJpdGUobmV3IGV4LlRpbGVTcHJpdGUoJ2xhbmQnLCB0aGlzLnRlcnJhaW5Tb3VyY2UuYXQoeCwgeSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbWJlZFRoaW5ncygpIHtcclxuICAgIHRoaXMuZ2FtZS53b3JsZC50aGluZ3MuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBjZWxsID0gdGhpcy50aGluZ1RpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nYW1lLndvcmxkLnRoaW5ncy5hdCh4LCB5KTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IE5PVEhJTkcpIHtcclxuICAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgZXguVGlsZVNwcml0ZSgnZnJ1aXQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICBjZWxsLnB1c2hTcHJpdGUoc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5fZ2FtZSA9IGVuZ2luZVxyXG4gIH1cclxuXHJcbiAgYXNzZW1ibGVGbG9vcigpIHtcclxuICAgIHRoaXMuZ2FtZS53b3JsZC5mbG9vcnMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBjZWxsID0gdGhpcy5mbG9vclRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuZ2FtZS53b3JsZC5mbG9vcnMuYXQoeCwgeSlcclxuICAgICAgICBjZWxsLmNsZWFyU3ByaXRlcygpXHJcbiAgICAgICAgaWYgKHZhbCAhPT0gTk9USElORykge1xyXG4gICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBleC5UaWxlU3ByaXRlKCdmbG9vcicsIHRoaXMuZ2FtZS53b3JsZC5mbG9vcnMuYXQoeCwgeSkpXHJcbiAgICAgICAgICBjZWxsLnB1c2hTcHJpdGUoc3ByaXRlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzc2VtYmxlU3RydWN0dXJlcygpIHtcclxuICAgIHRoaXMuZ2FtZS53b3JsZC5zdHJ1Y3R1cmUuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBjZWxsID0gdGhpcy5zdHJ1Y3R1cmVUaWxlcy5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmdhbWUud29ybGQuc3RydWN0dXJlLmF0KHgsIHkpXHJcbiAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKVxyXG4gICAgICAgIGlmICh2YWwgIT09IE5PVEhJTkcpIHtcclxuICAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgZXguVGlsZVNwcml0ZSgnc3RydWN0dXJlJywgdGhpcy5zdHJ1Y3R1cmVTb3VyY2UuYXQoeCwgeSkpXHJcbiAgICAgICAgICBjZWxsLnB1c2hTcHJpdGUoc3ByaXRlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uLy4uL0dhbWUnO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tICcuLi8uLi9hY3RvcnMvY3Vyc29yL2N1cnNvcic7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uLy4uL2FjdG9ycy9wbGF5ZXIvcGxheWVyJztcclxuaW1wb3J0IHsgVmVjdG9yLCBJbnB1dCwgTG9ja0NhbWVyYVRvQWN0b3JTdHJhdGVneSwgU2NlbmUgfSBmcm9tICdleGNhbGlidXInO1xyXG5pbXBvcnQgeyBOT1JUSCwgV0VTVCwgU09VVEgsIEVBU1QsIE9WRVJXT1JMRF9DRUxMX1NJWkUsIFRSRUVTLCBTT1VUSEVBU1QsIFBST0dSRVNTX0lOVEVSVkFMLCBHUkFTUywgU1RSQVdCRVJSWSwgTk9USElORywgV09PREVOX1dBTEwsIFdPT0RFTl9GTE9PUiwgV09PREVOX0RPT1JfQ0xPU0VELCBXT09ERU5fRE9PUl9PUEVOIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYWRqdXN0UG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGlyZWN0aW9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi8uLi9hY3RvcnMvcHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBXb3JsZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Bvc2l0aW9uJztcclxuaW1wb3J0IHsgRW52aXJvbnMgfSBmcm9tICcuL0Vudmlyb25zJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9HYW1lU3RhdGVQcm92aWRlcic7XHJcblxyXG50eXBlIEludGVyYWN0aW9uID0geyBhY3RpdmU6IGJvb2xlYW4sIGF0PzogV29ybGRQb3NpdGlvbiwgc3RhcnRlZEF0PzogbnVtYmVyIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5IGV4dGVuZHMgU2NlbmUge1xyXG4gIGVudmlyb25zOiBFbnZpcm9uc1xyXG4gIGN1cnNvcjogQ3Vyc29yXHJcbiAgcGxheWVyOiBQbGF5ZXJcclxuICBfZ2FtZTogR2FtZVxyXG4gIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvbiA9IHsgYWN0aXZlOiBmYWxzZSB9XHJcbiAgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyXHJcblxyXG4gIHB1YmxpYyBvbkluaXRpYWxpemUoZW5naW5lOiBHYW1lKSB7XHJcbiAgICB0aGlzLl9nYW1lID0gZW5naW5lXHJcbiAgICB0aGlzLmVudmlyb25zID0gbmV3IEVudmlyb25zKGVuZ2luZSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5lbnZpcm9ucy50aWxlbWFwcy5mb3JFYWNoKG1hcCA9PiB0aGlzLmFkZChtYXApKVxyXG5cclxuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICB0aGlzLmFkZCh0aGlzLnBsYXllcik7XHJcbiAgICB0aGlzLmFkZCh0aGlzLmN1cnNvcik7XHJcblxyXG4gICAgbGV0IHN0YXJ0V29ybGRQb3MgPSB0aGlzLl9nYW1lLndvcmxkLnJhbmRvbUNsZWFyUG9zaXRpb25cclxuICAgIHRoaXMucGxheWVyLndvcmxkUG9zaXRpb24gPSBzdGFydFdvcmxkUG9zXHJcbiAgICB0aGlzLnBsYXllci5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICBzdGFydFdvcmxkUG9zWzBdICogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgKHN0YXJ0V29ybGRQb3NbMV0pICogT1ZFUldPUkxEX0NFTExfU0laRVxyXG4gICAgKVxyXG4gICAgdGhpcy5jYW1lcmEuYWRkU3RyYXRlZ3kobmV3IExvY2tDYW1lcmFUb0FjdG9yU3RyYXRlZ3kodGhpcy5wbGF5ZXIpKVxyXG4gICAgdGhpcy5fZ2FtZS5pbnB1dC5wb2ludGVycy5wcmltYXJ5Lm9uKCdkb3duJywgKCkgPT4gdGhpcy5idWlsZFN0cnVjdHVyZSgpKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUHJlVXBkYXRlKCkge1xyXG4gICAgdGhpcy5jYW1lcmEucG9zID0gdGhpcy5wbGF5ZXIucG9zXHJcbiAgICB0aGlzLmhhbmRsZVBsYXllcklucHV0KClcclxuICAgIC8vIGlmICh0aGlzLl9nYW1lLmlucHV0LnBvaW50ZXJzLnByaW1hcnkuKVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0aW9uTGVnZW5kID0ge1xyXG4gICAgJ1dvb2QgV2FsbCc6IFdPT0RFTl9XQUxMLFxyXG4gICAgJ1dvb2QgRG9vcic6IFdPT0RFTl9ET09SX0NMT1NFRCxcclxuICAgICdXb29kIEZsb29yJzogV09PREVOX0ZMT09SLFxyXG4gIH1cclxuICBwdWJsaWMgYnVpbGRTdHJ1Y3R1cmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIndvdWxkIGJ1aWxkIHN0cnVjdHVyZS4uLlwiKVxyXG4gICAgbGV0IHsgY29uc3RydWN0aW5nIH0gPSBHYW1lU3RhdGVQcm92aWRlci5nZXRHbG9iYWwoKVxyXG4gICAgbGV0IFt4LHldID0gdGhpcy5jdXJzb3IuaG92ZXJXb3JsZFBvc1xyXG4gICAgaWYgKGNvbnN0cnVjdGluZyAmJiB0aGlzLl9nYW1lLndvcmxkLmlzVGVycmFpbkNsZWFyKHgseSkpIHsgLy90ZXJyYWluLmF0KHgseSkgPT0gR1JBU1MpIHtcclxuICAgICAgbGV0IHN0cnVjdHVyZUlkID0gdGhpcy5jb25zdHJ1Y3Rpb25MZWdlbmRbY29uc3RydWN0aW5nXVxyXG4gICAgICB0aGlzLl9nYW1lLndvcmxkLmJ1aWxkKHgseSwgc3RydWN0dXJlSWQpXHJcbiAgICAgIHRoaXMuZW52aXJvbnMuYXNzZW1ibGVGbG9vcigpXHJcbiAgICAgIHRoaXMuZW52aXJvbnMuYXNzZW1ibGVTdHJ1Y3R1cmVzKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYXllcklucHV0KCkge1xyXG4gICAgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuRXNjKSkge1xyXG4gICAgICBHYW1lU3RhdGVQcm92aWRlci5zZXRHbG9iYWwoeyBjb25zdHJ1Y3Rpbmc6IG51bGwgfSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9nYW1lLmlucHV0LmtleWJvYXJkLmlzSGVsZChJbnB1dC5LZXlzLlEpKSB7XHJcbiAgICAgIHRoaXMuX2dhbWUuaHVkLnRvZ2dsZUluc3BlY3QoKVxyXG4gICAgICAvLyBHYW1lU3RhdGVQcm92aWRlci5zZXRHbG9iYWwoeyBpbnNwZWN0OiAhR2FtZVN0YXRlUHJvdmlkZXIuZ2V0R2xvYmFsKCkuaW5zcGVjdCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSkge1xyXG4gICAgICAvLyBuZWVkIHRvIGtlZXAgaG9sZGluZyBFIG9yIGl0IGdvZXMgYXdheVxyXG4gICAgICBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5FKSkge1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIGxldCBlbGFwc2VkID0gbm93IC0gdGhpcy5pbnRlcmFjdGlvbi5zdGFydGVkQXRcclxuICAgICAgICBjb25zb2xlLmxvZyhcImludGVyYWN0IC0tIGNvbnRpbnVlXCIsIGVsYXBzZWQpXHJcbiAgICAgICAgLy8gdGhpcy5pbnRlcmFjdGlvbi5wZXJjZW50ICs9IDFcclxuICAgICAgICBpZiAoZWxhcHNlZCA+PSBQUk9HUkVTU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcmFjdCBjb21wbGV0ZVwiKVxyXG4gICAgICAgICAgLy8gdGhpcy53b3JsZC50ZXJyYWluXHJcbiAgICAgICAgICBsZXQgW3gseV0gPSB0aGlzLmludGVyYWN0aW9uLmF0XHJcbiAgICAgICAgICB0aGlzLl9nYW1lLndvcmxkLmNob3BUcmVlQXQoeCx5KVxyXG4gICAgICAgICAgdGhpcy5fZ2FtZS5odWQuY29sbGVjdCgnd29vZCcsIDUpXHJcbiAgICAgICAgICB0aGlzLmVudmlyb25zLnBhdmVUZXJyYWluTmFycm93bHkoW1xyXG4gICAgICAgICAgICBbeCx5XSxcclxuICAgICAgICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gICAgICAgICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgICAgICAgICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICB0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnByb2dyZXNzQmFyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5wcm9ncmVzc0JhcilcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnBsYXllci5tb3ZpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5FKSkge1xyXG4gICAgICAgICAgdGhpcy5zdGFydEludGVyYWN0aW9uKClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuVykpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoTk9SVEgpLnRoZW4oKCkgPT4gdGhpcy5jb2xsZWN0SXRlbXMoKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuQSkpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoV0VTVCkudGhlbigoKSA9PiB0aGlzLmNvbGxlY3RJdGVtcygpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5TKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShTT1VUSCkudGhlbigoKSA9PiB0aGlzLmNvbGxlY3RJdGVtcygpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5EKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShFQVNUKS50aGVuKCgpID0+IHRoaXMuY29sbGVjdEl0ZW1zKCkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5mYWNpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RmFjaW5nKHRoaXMucGxheWVyLmZhY2luZylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLmlkbGUoKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxlY3RJdGVtcygpIHtcclxuICAgIC8vIGFkZCBhbnkgaXRlbXMgb24gdGhpcyBjZWxsIHRvIHRoZSBpbnZlbnRvcnlcclxuICAgIGxldCBbeCx5XSA9IHRoaXMucGxheWVyLndvcmxkUG9zaXRpb25cclxuICAgIGxldCBpdCA9IHRoaXMuX2dhbWUud29ybGQudGhpbmdzLmF0KHgseSlcclxuICAgIGlmIChpdCAhPT0gTk9USElORyAmJiBpdCAhPT0gdW5kZWZpbmVkKSB7IFxyXG4gICAgICBsZXQgaXRlbU5hbWUgPSB0aGlzLl9nYW1lLndvcmxkLmRlc2NyaWJlT2JqZWN0KHgsIHkpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sbGVjdCBcIiArIGl0ZW1OYW1lKVxyXG4gICAgICB0aGlzLl9nYW1lLmh1ZC5jb2xsZWN0KGl0ZW1OYW1lLCAxKVxyXG4gICAgICB0aGlzLl9nYW1lLndvcmxkLnRoaW5ncy5zZXQoeCx5LE5PVEhJTkcpXHJcbiAgICAgIHRoaXMuZW52aXJvbnMudGhpbmdUaWxlcy5nZXRDZWxsKHgseSkuY2xlYXJTcHJpdGVzKClcclxuICAgICAgLy8gYW5kIGFjdHVhbGx5IHJlbW92ZSBmcm9tIHRpbGVzP1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFzdEludGVyYWN0ZWQ6IG51bWJlciA9IC0xXHJcbiAgaW50ZXJhY3Rpb25HYXRlOiBudW1iZXIgPSAyNTBcclxuICBzdGFydEludGVyYWN0aW9uKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICBsZXQgZWxhcHNlZCA9IG5vdyAtIHRoaXMubGFzdEludGVyYWN0ZWRcclxuICAgIGlmIChlbGFwc2VkID49IHRoaXMuaW50ZXJhY3Rpb25HYXRlKSB7XHJcbiAgICAgIGxldCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gPSBhZGp1c3RQb3NpdGlvbih0aGlzLnBsYXllci53b3JsZFBvc2l0aW9uLCB0aGlzLnBsYXllci5mYWNpbmcpXHJcbiAgICAgIGxldCBbeCx5XSA9IHRhcmdldFxyXG4gICAgICBpZiAodGhpcy5fZ2FtZS53b3JsZC50ZXJyYWluLmF0KHgseSkgPT0gVFJFRVMpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UHJvZ3Jlc3NCYXIodGFyZ2V0KVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUud29ybGQuc3RydWN0dXJlLmF0KHgseSkgPT0gV09PREVOX0RPT1JfQ0xPU0VEKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dvdWxkIG9wZW4gZG9vcicpXHJcbiAgICAgICAgdGhpcy5fZ2FtZS53b3JsZC5zdHJ1Y3R1cmUuc2V0KHgseSwgV09PREVOX0RPT1JfT1BFTilcclxuICAgICAgICB0aGlzLl9nYW1lLndvcmxkLmJlYXV0aWZ5V29vZGVuU3RydWN0dXJlcygpXHJcbiAgICAgICAgdGhpcy5lbnZpcm9ucy5hc3NlbWJsZVN0cnVjdHVyZXMoKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUud29ybGQuc3RydWN0dXJlLmF0KHgseSkgPT0gV09PREVOX0RPT1JfT1BFTikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3b3VsZCBjbG9zZSBkb29yJylcclxuICAgICAgICB0aGlzLl9nYW1lLndvcmxkLnN0cnVjdHVyZS5zZXQoeCx5LCBXT09ERU5fRE9PUl9DTE9TRUQpXHJcbiAgICAgICAgdGhpcy5fZ2FtZS53b3JsZC5iZWF1dGlmeVdvb2RlblN0cnVjdHVyZXMoKVxyXG4gICAgICAgIHRoaXMuZW52aXJvbnMuYXNzZW1ibGVTdHJ1Y3R1cmVzKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ25vdGhpbmcgdG8gaW50ZXJhY3Qgd2l0aCEnKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdEludGVyYWN0ZWQgPSBub3dcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0UHJvZ3Jlc3NCYXIodGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aW9uID0ge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF0OiB0YXJnZXQgYXMgV29ybGRQb3NpdGlvbixcclxuICAgICAgc3RhcnRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wb3MgPSBuZXcgVmVjdG9yKHRhcmdldFswXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUsIHRhcmdldFsxXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUpXHJcbiAgICB0aGlzLmFkZCh0aGlzLnByb2dyZXNzQmFyKVxyXG4gIH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0bic7XHJcbmltcG9ydCBNb3VzZVRvb2x0aXAgZnJvbSAncmVhY3Qtc3RpY2t5LW1vdXNlLXRvb2x0aXAnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGVQcm92aWRlciB9IGZyb20gXCIuLi9HYW1lU3RhdGVQcm92aWRlclwiO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcblxyXG5jb25zdCBJbnZlbnRvcnkgPSAoeyBpdGVtcyB9KSA9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnkgYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtdGl0bGUnPlxyXG4gICAgICAgIElOVkVOVE9SWVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3J1bGUnIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnM3B4Jywgd2lkdGg6ICc5NSUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XHJcbiAgICAgICAge09iamVjdC5lbnRyaWVzKGl0ZW1zKS5tYXAoKFtpdCxjb3VudF0pID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17aXR9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDF9fT57aXR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6IDEsIHRleHRBbGlnbjogJ3JpZ2h0J319Pnh7Y291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ttZXNzYWdlLCBpbnNwZWN0LCBpbnZlbnRvcnksIGNvbnN0cnVjdGluZ31dPSBHYW1lU3RhdGVQcm92aWRlci51c2VHbG9iYWwoKVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3ggbWV0YVwiIHN0eWxlPXt7cGFkZGluZzogJzNweCd9fT5cclxuICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5mcmVlaG9sZDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxJbnZlbnRvcnkgaXRlbXM9e2ludmVudG9yeX0gLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cnVjdGlvbiBib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC10aXRsZSc+XHJcbiAgICAgICAgQ09OU1RSVUNUSU9OXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncnVsZScgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnM3B4Jywgd2lkdGg6ICc5NSUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgIHtPYmplY3QuZW50cmllcyh7ICdXb29kIFdhbGwnOiAnMTAgd29vZCcsICdXb29kIEZsb29yJzogJzIwIHdvb2QnLCAnV29vZCBEb29yJzogJzUgd29vZCcgfSkubWFwKChbaXQscmVxc10pID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17aXR9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbnN0cnVjdGluZyA9PT0gaXQgPyAnZ3JheScgOiAncmdiYSgwLDAsMCwwLjMpJ319XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgR2FtZVN0YXRlUHJvdmlkZXIuc2V0R2xvYmFsKHsgY29uc3RydWN0aW5nOiBpdCB9KVxyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDF9fT57aXR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6IDEsIHRleHRBbGlnbjogJ3JpZ2h0J319PntyZXFzfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPE1vdXNlVG9vbHRpcCB2aXNpYmxlPXtpbnNwZWN0fSBvZmZzZXRYPXsyMH0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzZweCcsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4zKScsIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScgfX0+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+aGVyZToge21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW91c2VUb29sdGlwPlxyXG4gIDwvZGl2PjtcclxufTsiLCJpbXBvcnQgeyBzZXRHbG9iYWwsIGdldEdsb2JhbCB9IGZyb20gJ3JlYWN0bidcclxuaW1wb3J0IHsgR2FtZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9HYW1lU3RhdGVQcm92aWRlcidcclxuXHJcbi8vIHRoaW4gd3JhcHBlciBhcm91bmQgZ2FtZSBzdGF0ZSBwcm92aWRlciBzZXR0ZXJzLi5cclxuZXhwb3J0IGNsYXNzIEh1ZCB7XHJcbiAgc2V0SG92ZXJNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgaWYgKG1lc3NhZ2UgIT09IEdhbWVTdGF0ZVByb3ZpZGVyLmdldEdsb2JhbCgpLm1lc3NhZ2UpIHtcclxuICAgICAgR2FtZVN0YXRlUHJvdmlkZXIuc2V0R2xvYmFsKHsgbWVzc2FnZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFzdFRvZ2dsZWRJbnNwZWN0OiBudW1iZXIgPSAtMVxyXG4gIHRvZ2dsZUluc3BlY3QoKSB7IFxyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICBsZXQgZWxhcHNlZCA9IG5vdyAtIHRoaXMubGFzdFRvZ2dsZWRJbnNwZWN0XHJcbiAgICBpZiAoZWxhcHNlZCA+PSAyMDApIHtcclxuICAgICAgR2FtZVN0YXRlUHJvdmlkZXIuc2V0R2xvYmFsKHsgaW5zcGVjdDogIUdhbWVTdGF0ZVByb3ZpZGVyLmdldEdsb2JhbCgpLmluc3BlY3QgfSlcclxuICAgICAgdGhpcy5sYXN0VG9nZ2xlZEluc3BlY3QgPSBub3dcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxlY3QoaXRlbTogc3RyaW5nLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICBsZXQgeyBpbnZlbnRvcnkgfSA9IEdhbWVTdGF0ZVByb3ZpZGVyLmdldEdsb2JhbCgpXHJcbiAgICBpbnZlbnRvcnlbaXRlbV0gPSBpbnZlbnRvcnlbaXRlbV0gfHwgMFxyXG4gICAgaW52ZW50b3J5W2l0ZW1dICs9IGNvdW50XHJcbiAgICBHYW1lU3RhdGVQcm92aWRlci5zZXRHbG9iYWwoeyBpbnZlbnRvcnl9KVxyXG4gIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2RlKC4uLmFycjogYW55W10pIHtcclxuICAgIHZhciBtYXAgPSB7fTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1hcFthcnJbaV1dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbWFwW2FycltpXV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXBbYXJyW2ldXSArPSAxO1xyXG4gICAgfVxyXG4gICAgdmFyIGdyZWF0ZXN0RnJlcSA9IDA7XHJcbiAgICB2YXIgbW9kZTtcclxuICAgIGZvciAodmFyIHByb3AgaW4gbWFwKSB7XHJcbiAgICAgICAgaWYgKG1hcFtwcm9wXSA+IGdyZWF0ZXN0RnJlcSkge1xyXG4gICAgICAgICAgICBncmVhdGVzdEZyZXEgPSBtYXBbcHJvcF07XHJcbiAgICAgICAgICAgIG1vZGUgPSBwcm9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlO1xyXG59IiwiZXhwb3J0IGNvbnN0IHBpY2sgPSA8VD4oLi4uZWxlbXM6IFRbXSk6IFQgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVsZW1zLmxlbmd0aCkpXHJcbiAgICByZXR1cm4gZWxlbXNbaW5kZXhdXHJcbn0iLCJleHBvcnQgY29uc3QgdGltZXMgPSAobjogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgYXJyLnB1c2godmFsdWUpIH1cclxuICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=