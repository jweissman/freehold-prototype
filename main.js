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
    inventory: {}
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
        this.addDrawing(resources_1.SpriteSheets.Structure.getSprite(5));
    }
}
class Cursor extends excalibur_1.Actor {
    constructor() {
        super({
            width: constants_1.OVERWORLD_CELL_SIZE,
            height: constants_1.OVERWORLD_CELL_SIZE,
            color: excalibur_1.Color.Black,
            opacity: 0.3,
        });
        this.hoverWorldPos = [-1, -1];
        this.ticks = 0;
    }
    onInitialize() {
        // this.addDrawing(Resources.Sword)
        // this.anchor = new Vector(0,0) //16,16)
        this.anchor = new excalibur_1.Vector(0.5, 0.5);
        // this.addDrawing(SpriteSheets.Structure.getSprite(5))
        this.pluckedStructure = new PluckedStructure();
        this.pluckedStructure.visible = false;
        this.add(this.pluckedStructure);
    }
    onPreUpdate(engine) {
        this.ticks++;
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
        this.anchor = new excalibur_1.Vector(0.5, 1); //0.5)
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
exports.SOUTHWEST = exports.SOUTHEAST = exports.NORTHWEST = exports.NORTHEAST = exports.EAST = exports.WEST = exports.SOUTH = exports.NORTH = exports.PROGRESS_ANIM_LENGTH = exports.PROGRESS_INTERVAL = exports.WOODEN_WALL_CONNECTIONS = exports.WOODEN_WALL = exports.FIRE = exports.WELL = exports.EGGPLANT = exports.BLUEBERRY = exports.PLUM = exports.GRAPES = exports.APPLES = exports.CORN = exports.STRAWBERRY = exports.BANANA = exports.NOTHING = exports.TREE_GRASS_INTERFACE = exports.WATER_GRASS_INTERFACE = exports.TREES = exports.WATER = exports.GRASS = exports.PEASANT_IDLE = exports.PEASANT_FACE_UP = exports.PEASANT_FACE_DOWN = exports.PEASANT_FACE_LEFT = exports.PEASANT_FACE_RIGHT = exports.PEASANT_WALK_UP = exports.PEASANT_WALK_DOWN = exports.PEASANT_WALK_LEFT = exports.PEASANT_WALK_RIGHT = exports.OVERWORLD_CELL_SIZE = exports.OVERWORLD = void 0;
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

module.exports = __webpack_require__.p + "91fde3e433e15b6f7c11fa857da89215.png";

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
    buildWoodenWall(x, y) {
        console.log("build wall at " + x + ", " + y);
        this.structure.set(x, y, constants_1.WOODEN_WALL);
        this.beautifyStructureInterfaces(constants_1.WOODEN_WALL_CONNECTIONS, constants_1.WOODEN_WALL);
        // this.prettify
        // this.assemblePrett
        // this.structure
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
    beautifyStructureInterfaces(indices, structure) {
        this.prettyStructure.eachPosition((x, y) => {
            let self = this.structure.at(x, y);
            if (self == structure) {
                // console.log("beautify structure " + structure + " at " + x + ", " + y)
                let neighbors = this.structure.labelledNeighbors(x, y);
                let north = neighbors[constants_1.NORTH];
                let south = neighbors[constants_1.SOUTH];
                let east = neighbors[constants_1.EAST];
                let west = neighbors[constants_1.WEST];
                let mask = (north == structure ? 1 : 0) * 8 +
                    (east == structure ? 1 : 0) * 4 +
                    (south == structure ? 1 : 0) * 2 +
                    (west == structure ? 1 : 0) * 1;
                // console.log("connections", { north, south, east, west}, "--->", mask)
                this.prettyStructure.set(x, y, indices[mask]);
            }
        });
    }
    // 
    isPositionClear(x, y) {
        let terrain = this.terrain.at(x, y);
        let thing = this.things.at(x, y);
        let building = this.structure.at(x, y);
        let isClear = (terrain == constants_1.GRASS) // || terrain == TREES)
            // && (thing == NOTHING || thing == undefined)
            && (building == constants_1.NOTHING || building == undefined);
        return isClear;
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
let Resources = {
    Sword: new ex.Texture(sword),
    Fruit: new ex.Texture(fruit),
    Terrain: new ex.Texture(terrain),
    Peasant: new ex.Texture(peasant),
    Progress: new ex.Texture(progress),
    Structure: new ex.Texture(structure),
};
exports.Resources = Resources;
let sz = constants_1.OVERWORLD_CELL_SIZE;
let SpriteSheets = {
    Fruit: new ex.SpriteSheet(Resources.Fruit, 7, 2, sz, sz),
    Terrain: new ex.SpriteSheet(Resources.Terrain, 8, 8, sz, sz),
    Peasant: new ex.SpriteSheet(Resources.Peasant, 4, 4, sz, sz),
    Progress: new ex.SpriteSheet(Resources.Progress, 17, 1, sz, sz),
    Structure: new ex.SpriteSheet(Resources.Structure, 4, 4, sz, sz)
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
    }
    get tilemaps() { return [this.terrainTiles, this.thingTiles, this.structureTiles]; }
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
    assembleStructures() {
        this.game.world.structure.eachPosition((x, y) => {
            let cell = this.structureTiles.getCell(x, y);
            if (cell) {
                let val = this.game.world.structure.at(x, y);
                if (val !== constants_1.NOTHING) {
                    let sprite = new ex.TileSprite('structure', this.structureSource.at(x, y));
                    cell.clearSprites();
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
class Play extends excalibur_1.Scene {
    constructor() {
        super(...arguments);
        this.interaction = { active: false };
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
        let [x, y] = this.cursor.hoverWorldPos;
        if (this._game.world.isPositionClear(x, y)) { //terrain.at(x,y) == GRASS) {
            this._game.world.buildWoodenWall(x, y);
            this.environs.assembleStructures();
        }
    }
    handlePlayerInput() {
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
        // if (this.interaction.active) {
        // } else {
        // create progress wherever player is facing, if it is a forest
        let target = direction_1.adjustPosition(this.player.worldPosition, this.player.facing);
        if (this._game.world.terrain.at(...target) == constants_1.TREES) {
            this.startProgressBar(target);
        }
        // }
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
exports.App = () => {
    const [{ message, inspect, inventory }] = GameStateProvider_1.GameStateProvider.useGlobal();
    return reactn_1.default.createElement("div", null,
        reactn_1.default.createElement("div", { className: "box meta", style: { padding: '3px' } },
            reactn_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "freehold")),
        reactn_1.default.createElement("div", { className: "inventory box" },
            reactn_1.default.createElement("span", { style: { fontSize: '11px', fontWeight: 'bold', padding: '3px' } }, "INVENTORY"),
            reactn_1.default.createElement("div", { style: { width: '100%', height: '1px', backgroundColor: 'white', margin: '0 auto' } }),
            reactn_1.default.createElement("div", { style: { padding: '3px', width: '95%', display: 'flex', flexDirection: 'column' } }, Object.entries(inventory).map(([it, count]) => reactn_1.default.createElement("div", { key: it, style: { display: 'flex', flexDirection: 'row', width: '100%' } },
                reactn_1.default.createElement("span", { style: { flex: 1 } }, it),
                reactn_1.default.createElement("span", { style: { flex: 1, textAlign: 'right' } },
                    "x",
                    count))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVTdGF0ZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3RvcnMvY3Vyc29yL2N1cnNvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3JzL3BsYXllci9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9ycy9wcm9ncmVzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZnJ1aXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGVhc2FudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wcm9ncmVzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdHJ1Y3R1cmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3dvcmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGVycmFpbi1kZWVwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ2FydG9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xldmVsLW9uZS9FbnZpcm9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xldmVsLW9uZS9wbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy91aS9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbW9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kLnRzIiwi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QUNIWSxhQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDaEQsSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUFFO0lBQy9DLE9BQU8sR0FBRztBQUNaLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vbW9kZWxzL3dvcmxkJztcclxuaW1wb3J0IHsgSHVkIH0gZnJvbSAnLi91aS9IdWQnO1xyXG5pbXBvcnQgeyBFbmdpbmUsIERpc3BsYXlNb2RlIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgRW5naW5lIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgaHVkOiBIdWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogODAwLFxyXG4gICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgZGlzcGxheU1vZGU6IERpc3BsYXlNb2RlLkZ1bGxTY3JlZW4sXHJcbiAgICAgIGNhbnZhc0VsZW1lbnRJZDogJ2dhbWUnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLndvcmxkID0gV29ybGQuZ2VuKCk7XHJcbiAgICB0aGlzLmh1ZCA9IG5ldyBIdWQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc3RhcnQobG9hZGVyOiBleC5Mb2FkZXIpIHtcclxuICAgIHJldHVybiBzdXBlci5zdGFydChsb2FkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVQcm92aWRlciB9IGZyb20gXCJyZWFjdG5cIjtcclxuXHJcbmNvbnN0IElOSVRJQUxfVUlfU1RBVEUgPSB7XHJcbiAgbWVzc2FnZTogJycsXHJcbiAgaW5zcGVjdDogZmFsc2UsXHJcbiAgaW52ZW50b3J5OiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZVByb3ZpZGVyID0gY3JlYXRlUHJvdmlkZXIoSU5JVElBTF9VSV9TVEFURSk7XHJcblxyXG4iLCJpbXBvcnQgeyBBY3RvciwgVmVjdG9yLCBDb2xvciB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IE9WRVJXT1JMRF9DRUxMX1NJWkUsIEdSQVNTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcclxuXHJcbmNsYXNzIFBsdWNrZWRTdHJ1Y3R1cmUgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHdpZHRoOiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBoZWlnaHQ6IE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIC8vIGNvbG9yOiBDb2xvci5CbGFjayxcclxuICAgICAgLy8gb3BhY2l0eTogMC4zLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uSW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIHRoaXMuYWRkRHJhd2luZyhSZXNvdXJjZXMuU3dvcmQpXHJcbiAgICAvLyB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMCwwKSAvLzE2LDE2KVxyXG4gICAgdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAuNSwwLjUpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoU3ByaXRlU2hlZXRzLlN0cnVjdHVyZS5nZXRTcHJpdGUoNSkpXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJzb3IgZXh0ZW5kcyBBY3RvciB7XHJcbiAgaG92ZXJXb3JsZFBvczogW251bWJlciwgbnVtYmVyXSA9IFstMSwtMV1cclxuICBwbHVja2VkU3RydWN0dXJlOiBQbHVja2VkU3RydWN0dXJlXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBjb2xvcjogQ29sb3IuQmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoKSB7XHJcbiAgICAvLyB0aGlzLmFkZERyYXdpbmcoUmVzb3VyY2VzLlN3b3JkKVxyXG4gICAgLy8gdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAsMCkgLy8xNiwxNilcclxuXHJcbiAgICB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgIC8vIHRoaXMuYWRkRHJhd2luZyhTcHJpdGVTaGVldHMuU3RydWN0dXJlLmdldFNwcml0ZSg1KSlcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZSA9IG5ldyBQbHVja2VkU3RydWN0dXJlKClcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZS52aXNpYmxlID0gZmFsc2VcclxuICAgIHRoaXMuYWRkKHRoaXMucGx1Y2tlZFN0cnVjdHVyZSlcclxuICB9XHJcblxyXG4gIHRpY2tzID0gMFxyXG4gIG9uUHJlVXBkYXRlKGVuZ2luZTogR2FtZSkge1xyXG4gICAgdGhpcy50aWNrcyArK1xyXG4gICAgLy8gaWYgKHRoaXMudGlja3MgJSAzID09PSAwKSB7XHJcbiAgICAgIGlmIChlbmdpbmUuaW5wdXQucG9pbnRlcnMucHJpbWFyeS5sYXN0V29ybGRQb3MpIHtcclxuICAgICAgICBsZXQgeyB4LCB5IH0gPSBlbmdpbmUuaW5wdXQucG9pbnRlcnMucHJpbWFyeS5sYXN0V29ybGRQb3NcclxuICAgICAgICB0aGlzLmhvdmVyV29ybGRQb3MgPSBbXHJcbiAgICAgICAgICBNYXRoLnJvdW5kKHggLyBPVkVSV09STERfQ0VMTF9TSVpFKSxcclxuICAgICAgICAgIE1hdGgucm91bmQoeSAvIE9WRVJXT1JMRF9DRUxMX1NJWkUpLFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgbGV0IFtjZWxsWCwgY2VsbFldID0gdGhpcy5ob3ZlcldvcmxkUG9zXHJcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICAgICAgY2VsbFggKiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICAgICAgY2VsbFkgKiBPVkVSV09STERfQ0VMTF9TSVpFXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBsZXQgdGVycmFpbiA9IGVuZ2luZS53b3JsZC5kZXNjcmliZVRlcnJhaW4oY2VsbFgsIGNlbGxZKVxyXG4gICAgICAgIGxldCBpdGVtID0gZW5naW5lLndvcmxkLmRlc2NyaWJlT2JqZWN0KGNlbGxYLCBjZWxsWSlcclxuICAgICAgICBlbmdpbmUuaHVkLnNldEhvdmVyTWVzc2FnZShbaXRlbSwgdGVycmFpbl0uam9pbignIC0tICcpKVxyXG5cclxuICAgICAgICBpZiAoZW5naW5lLndvcmxkLmlzUG9zaXRpb25DbGVhcihjZWxsWCwgY2VsbFkpKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuQmxhY2tcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLlJlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufSAiLCJpbXBvcnQgKiBhcyBleCBmcm9tICdleGNhbGlidXInO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldHMgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBQRUFTQU5UX1dBTEtfUklHSFQsIFBFQVNBTlRfV0FMS19ET1dOLCBQRUFTQU5UX1dBTEtfTEVGVCwgUEVBU0FOVF9XQUxLX1VQLCBQRUFTQU5UX0lETEUsIE5PUlRILCBXRVNULCBTT1VUSCwgRUFTVCwgUEVBU0FOVF9GQUNFX0xFRlQsIFBFQVNBTlRfRkFDRV9SSUdIVCwgUEVBU0FOVF9GQUNFX0RPV04sIFBFQVNBTlRfRkFDRV9VUCwgT1ZFUldPUkxEX0NFTExfU0laRSwgV0FURVIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFbmdpbmUsIEFjdG9yLCBWZWN0b3IgfSBmcm9tICdleGNhbGlidXInO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIGFkanVzdFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpcmVjdGlvbic7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vLi4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQWN0b3Ige1xyXG4gIF9nYW1lOiBHYW1lXHJcbiAgd29ybGRQb3NpdGlvbjogV29ybGRQb3NpdGlvbiA9IFswLCAwXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgbW92aW5nPzogRGlyZWN0aW9uID0gbnVsbFxyXG4gIGZhY2luZz86IERpcmVjdGlvbiA9IG51bGxcclxuICB3YWxrU3BlZWQ6IG51bWJlciA9IDM1MFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgd2lkdGg6IE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIGhlaWdodDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgY29sb3I6IG5ldyBleC5Db2xvcigyNTUsIDI1NSwgMjU1KVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDEpIC8vMC41KVxyXG4gIH1cclxuXHJcbiAgb25Jbml0aWFsaXplKGdhbWU6IEdhbWUpIHtcclxuICAgIGNvbnN0IHdhbGtSaWdodCA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldEFuaW1hdGlvbkJldHdlZW4oZ2FtZSwgMCwgNCwgMTI1KVxyXG4gICAgY29uc3Qgd2Fsa0Rvd24gPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRBbmltYXRpb25CZXR3ZWVuKGdhbWUsIDQsIDgsIDEyNSlcclxuICAgIGNvbnN0IHdhbGtMZWZ0ID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0QW5pbWF0aW9uQmV0d2VlbihnYW1lLCA4LCAxMiwgMTI1KVxyXG4gICAgY29uc3Qgd2Fsa1VwID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0QW5pbWF0aW9uQmV0d2VlbihnYW1lLCAxMiwgMTYsIDEyNSlcclxuICAgIGNvbnN0IGlkbGUgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRTcHJpdGUoNClcclxuICAgIGNvbnN0IGZhY2VSaWdodCA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSgwKVxyXG4gICAgY29uc3QgZmFjZUxlZnQgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRTcHJpdGUoOClcclxuICAgIGNvbnN0IGZhY2VVcCA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSgxMilcclxuXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9XQUxLX1JJR0hULCB3YWxrUmlnaHQpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9XQUxLX0RPV04sIHdhbGtEb3duKVxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfV0FMS19MRUZULCB3YWxrTGVmdClcclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX1dBTEtfVVAsIHdhbGtVcClcclxuXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX1JJR0hULCBmYWNlUmlnaHQpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX0xFRlQsIGZhY2VMZWZ0KVxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfRkFDRV9VUCwgZmFjZVVwKVxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfRkFDRV9ET1dOLCBpZGxlKVxyXG5cclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX0lETEUsIGlkbGUpXHJcblxyXG4gICAgdGhpcy5fZ2FtZSA9IGdhbWVcclxuICAgIHRoaXMuaWRsZSgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbk1vdmUoZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBib29sZWFuIHtcclxuICAgIGxldCBbeCx5XSA9IGFkanVzdFBvc2l0aW9uKHRoaXMud29ybGRQb3NpdGlvbiwgZGlyZWN0aW9uKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWUud29ybGQuaXNQb3NpdGlvbkNsZWFyKHgseSlcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdmUoZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuY2FuTW92ZShkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNb3ZpbmcoZGlyZWN0aW9uKVxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBhZGp1c3RQb3NpdGlvbih0aGlzLndvcmxkUG9zaXRpb24sIGRpcmVjdGlvbilcclxuICAgICAgICBhd2FpdCB0aGlzLmFjdGlvbnMubW92ZVRvKFxyXG4gICAgICAgICAgdGFyZ2V0WzBdICogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgICAgIHRhcmdldFsxXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgICAgICB0aGlzLndhbGtTcGVlZFxyXG4gICAgICAgICkuYXNQcm9taXNlKClcclxuICAgICAgICB0aGlzLndvcmxkUG9zaXRpb24gPSB0YXJnZXRcclxuICAgICAgICB0aGlzLm1vdmluZyA9IG51bGxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBub3QgbW92aW5nLCBidXQgY2FuJ3QgbW92ZSB0aGlzIGRpcmVjdGlvbiAtLSBmYWNlIGl0XHJcbiAgICAgICAgdGhpcy5zZXRGYWNpbmcoZGlyZWN0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbm5vdCBtb3ZlIHBsYXllciAtLSBhbHJlYWR5IG1vdmluZ1wiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmFjaW5nQW5pbXMgPSB7XHJcbiAgICBbV0VTVF06IFBFQVNBTlRfRkFDRV9MRUZULFxyXG4gICAgW0VBU1RdOiBQRUFTQU5UX0ZBQ0VfUklHSFQsXHJcbiAgICBbTk9SVEhdOiBQRUFTQU5UX0ZBQ0VfVVAsXHJcbiAgICBbU09VVEhdOiBQRUFTQU5UX0ZBQ0VfRE9XTixcclxuICB9XHJcblxyXG4gIC8vIHN3aW1GYWNpbmdBbmltcyA9IHtcclxuICAvLyB9XHJcblxyXG4gIHNldEZhY2luZyhkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgdGhpcy5mYWNpbmcgPSBkaXJlY3Rpb247XHJcbiAgICBsZXQgW3gseV0gPSB0aGlzLndvcmxkUG9zaXRpb25cclxuICAgIGlmICh0aGlzLl9nYW1lLndvcmxkLnRlcnJhaW4uYXQoeCx5KSA9PSBXQVRFUikge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcodGhpcy5mYWNpbmdBbmltc1tkaXJlY3Rpb25dKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREcmF3aW5nKHRoaXMuZmFjaW5nQW5pbXNbZGlyZWN0aW9uXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1vdmluZyhkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgdGhpcy5tb3ZpbmcgPSBkaXJlY3Rpb25cclxuICAgIC8vIHRoaXMuZmFjZShkaXJlY3Rpb24pXHJcbiAgICB0aGlzLmZhY2luZyA9IGRpcmVjdGlvblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gTk9SVEgpIHtcclxuICAgICAgdGhpcy5zZXREcmF3aW5nKFBFQVNBTlRfV0FMS19VUClcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBXRVNUKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX1dBTEtfTEVGVClcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBTT1VUSCkge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcoUEVBU0FOVF9XQUxLX0RPV04pXHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRUFTVCkge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcoUEVBU0FOVF9XQUxLX1JJR0hUKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWRsZSgpIHtcclxuICAgIHRoaXMuZmFjaW5nID0gU09VVEhcclxuICAgIC8vIGlmICh0aGlzLl9nYW1lLmxvYWQpXHJcbiAgICB0aGlzLnNldERyYXdpbmcoUEVBU0FOVF9JRExFKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHN3aW1taW5nKCkge1xyXG4gICAgbGV0IFt4LHldID0gdGhpcy53b3JsZFBvc2l0aW9uXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZS53b3JsZC50ZXJyYWluLmF0KHgseSkgPT0gV0FURVI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBY3RvciwgVmVjdG9yLCBDb2xvciB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgT1ZFUldPUkxEX0NFTExfU0laRSwgUFJPR1JFU1NfQU5JTV9MRU5HVEgsIFBST0dSRVNTX0lOVEVSVkFMIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldHMgfSBmcm9tIFwiLi4vcmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICAvLyBwb3M6IG5ldyBWZWN0b3IoMCwwKSxcclxuICAgICAgd2lkdGg6IE9WRVJXT1JMRF9DRUxMX1NJWkUsIC8vKiAyLFxyXG4gICAgICBoZWlnaHQ6IE9WRVJXT1JMRF9DRUxMX1NJWkUsIC8vICogMixcclxuICAgICAgY29sb3I6IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KSxcclxuICAgICAgYW5jaG9yOiBuZXcgVmVjdG9yKDAuNSwwLjUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Jbml0aWFsaXplKGVuZ2luZTogR2FtZSkge1xyXG4gICAgdGhpcy5hZGREcmF3aW5nKCdwcm9ncmVzcycsIFNwcml0ZVNoZWV0cy5Qcm9ncmVzcy5nZXRBbmltYXRpb25Gb3JBbGwoXHJcbiAgICAgIGVuZ2luZSxcclxuICAgICAgKFBST0dSRVNTX0lOVEVSVkFMIC8gUFJPR1JFU1NfQU5JTV9MRU5HVEgpICsgMTAgLy8gbWlsbGlzZWNvbmRzIHBlciBmcmFtZS4uLlxyXG4gICAgKSlcclxuICAgIHRoaXMuc2V0RHJhd2luZygncHJvZ3Jlc3MnKVxyXG4gICAgLy8gdGhpcy52aXNpYmxlID0gZmFsc2VcclxuICB9XHJcbn0iLCJcclxuLy8gc2NlbmVzXHJcbmV4cG9ydCBjb25zdCBPVkVSV09STEQgPSAnb3ZlcndvcmxkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE9WRVJXT1JMRF9DRUxMX1NJWkUgPSA2NDtcclxuXHJcbi8vIGFuaW1zXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX1dBTEtfUklHSFQgPSAncGVhc2FudC93YWxrX3JpZ2h0J1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9XQUxLX0xFRlQgPSAncGVhc2FudC93YWxrX2xlZnQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX1dBTEtfRE9XTiA9ICdwZWFzYW50L3dhbGtfZG93bidcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfV0FMS19VUCA9ICdwZWFzYW50L3dhbGtfdXAnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfUklHSFQgPSAncGVhc2FudC9mYWNlX3JpZ2h0J1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9GQUNFX0xFRlQgPSAgJ3BlYXNhbnQvZmFjZV9sZWZ0J1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9GQUNFX0RPV04gPSAgJ3BlYXNhbnQvZmFjZV9kb3duJ1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9GQUNFX1VQID0gICAgJ3BlYXNhbnQvZmFjZV91cCdcclxuXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0lETEUgPSAncGVhc2FudC9pZGxlJ1xyXG5cclxuLy8gdGVycmFpblxyXG5leHBvcnQgY29uc3QgR1JBU1MgPSAwO1xyXG5leHBvcnQgY29uc3QgV0FURVIgPSAxO1xyXG5leHBvcnQgY29uc3QgVFJFRVMgPSAzO1xyXG4vLyBleHBvcnQgY29uc3QgTU9VTlRBSU4gPSAyO1xyXG5cclxuY29uc3QgQUxMX0dSQVNTID0gWzAsMyw0LDUsMjAsNDRdXHJcbmNvbnN0IEFMTF9XQVRFUiA9IFsxLDIsMTddXHJcbi8vIHByZXR0eSB0ZXJyYWluXHJcbiAgICAgICAgICAvLyBbc2VsZl0gW2Vhc3RdIFtzb3V0aF0gW3NvdXRoZWFzdF1cclxuZXhwb3J0IGNvbnN0IFdBVEVSX0dSQVNTX0lOVEVSRkFDRSA9IFtcclxuICAgICAgQUxMX1dBVEVSLCAgLy8gMDAwMCAtLSBhbGwgd2F0ZXJcclxuICAgICAgWzExXSwgLy8gMDAwMSAtLSBncmFzcyBhdCBib3R0b20tcmlnaHQgY29ybmVyXHJcbiAgICAgIFsxM10sIC8vIDAwMTAgLS0gZ3Jhc3MgYXQgYm90dG9tLWxlZnQgY29ybmVyXHJcbiAgICAgIFsyNV0sIC8vIDAwMTEgLS0gZ3Jhc3Mgb24gYm90dG9tIHNpZGVcclxuICAgICAgWzI3XSwgLy8gMDEwMCAtLSBncmFzcyBhdCB0b3AtcmlnaHQgY29ybmVyXHJcbiAgICAgIFsxOF0sIC8vIDAxMDEgLS0gZ3Jhc3Mgb24gcmlnaHQgc2lkZVxyXG4gICAgICBbMTRdLCAvLyAwMTEwIC0tIGdyYXNzIHcvIGdhcCBib3R0b20tbGVmdCB0byB0b3AtcmlnaHRcclxuICAgICAgWzI2XSwgIC8vIDAxMTEgLS0gd2F0ZXIgYXQgdG9wLWxlZnQgY29ybmVyXHJcbiAgICAgIFsyOV0sIC8vIDEwMDAgLS0gZ3Jhc3MgYXQgdG9wLWxlZnRcclxuICAgICAgWzE1XSwgLy8gMTAwMSAtLSBncmFzcyB3LyBnYXAgdG9wLWxlZnQgdG8gYm90dG9tLXJpZ2h0XHJcbiAgICAgIFsyMV0sIC8vIDEwMTAgLS0gZ3Jhc3Mgb24gbGVmdCBzaWRlXHJcbiAgICAgIFsyNF0sIC8vIDEwMTEgLS0gd2F0ZXIgYXQgdG9wLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbMjhdLCAvLyAxMTAwIC0tIGdyYXNzIG9uIHRvcCBzaWRlXHJcbiAgICAgIFsxMF0sIC8vIDExMDEgLS0gd2F0ZXIgYXQgYm90dG9tLWxlZnQgY29ybmVyXHJcbiAgICAgIFs4XSwgLy8gMTExMCAtLSB3YXRlciBhdCBib3R0b20tcmlnaHQgY29ybmVyXHJcbiAgICAgIEFMTF9HUkFTUyAvLyAxMTExIC0tIGFsbCBncmFzc1xyXG4gICAgXTtcclxuXHJcbiAgICAgIC8vIFtzZWxmXSBbZWFzdF0gW3NvdXRoXSBbc291dGhlYXN0XVxyXG5leHBvcnQgY29uc3QgVFJFRV9HUkFTU19JTlRFUkZBQ0U6IG51bWJlcltdW10gPSBbXHJcbiAgICAgIFs0MV0sICAgICAvLyAwMDAwIC0tIGFsbCB0cmVlXHJcbiAgICAgIFszNV0sICAgICAvLyAwMDAxIC0tIGdyYXNzIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgWzM3XSwgICAgIC8vIDAwMTAgLS0gZ3Jhc3MgYXQgYm90dG9tLWxlZnQgY29ybmVyXHJcbiAgICAgIFszNl0sICAgICAvLyAwMDExIC0tIGdyYXNzIG9uIGJvdHRvbSBzaWRlXHJcbiAgICAgIFs1MV0sICAgICAvLyAwMTAwIC0tIGdyYXNzIGF0IHRvcC1yaWdodCBjb3JuZXJcclxuICAgICAgWzQzXSwgICAgIC8vIDAxMDEgLS0gZ3Jhc3Mgb24gcmlnaHQgc2lkZVxyXG4gICAgICBbMzhdLCAgICAgLy8gMDExMCAtLSBncmFzcyB3LyBnYXAgYm90dG9tLWxlZnQgdG8gdG9wLXJpZ2h0XHJcbiAgICAgIFs1MF0sICAgICAvLyAwMTExIC0tIHRyZWUgYXQgdG9wLWxlZnQgY29ybmVyXHJcbiAgICAgIFs1M10sICAgICAvLyAxMDAwIC0tIGdyYXNzIGF0IHRvcC1sZWZ0XHJcbiAgICAgIFszOV0sICAgICAvLyAxMDAxIC0tIGdyYXNzIHcvIGdhcCB0b3AtbGVmdCB0byBib3R0b20tcmlnaHRcclxuICAgICAgWzQ1XSwgICAgIC8vIDEwMTAgLS0gZ3Jhc3Mgb24gbGVmdCBzaWRlXHJcbiAgICAgIFs0OF0sICAgICAvLyAxMDExIC0tIHRyZWUgYXQgdG9wLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbNTJdLCAgICAgLy8gMTEwMCAtLSBncmFzcyBvbiB0b3Agc2lkZVxyXG4gICAgICBbMzRdLCAgICAgLy8gMTEwMSAtLSB0cmVlIGF0IGJvdHRvbS1sZWZ0IGNvcm5lclxyXG4gICAgICBbMzJdLCAgICAgLy8gMTExMCAtLSB0cmVlIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgQUxMX0dSQVNTIC8vIDExMTEgLS0gYWxsIGdyYXNzXHJcbiAgICBdXHJcblxyXG5cclxuLy8gdGhpbmdzIChmcnVpdCBmb3Igbm93Li4pXHJcbmV4cG9ydCBjb25zdCBOT1RISU5HID0gLTE7XHJcbmV4cG9ydCBjb25zdCBCQU5BTkEgPSAwO1xyXG5leHBvcnQgY29uc3QgU1RSQVdCRVJSWSA9IDE7XHJcbmV4cG9ydCBjb25zdCBDT1JOID0gMjtcclxuZXhwb3J0IGNvbnN0IEFQUExFUyA9IDM7XHJcbmV4cG9ydCBjb25zdCBHUkFQRVMgPSA0O1xyXG5leHBvcnQgY29uc3QgUExVTSA9IDU7XHJcbmV4cG9ydCBjb25zdCBCTFVFQkVSUlkgPSA2O1xyXG5leHBvcnQgY29uc3QgRUdHUExBTlQgPSA3O1xyXG5cclxuLy8gaXRlbXMgLyBjb25zdHJ1Y3RlZCBvYmplY3RzXHJcbmV4cG9ydCBjb25zdCBXRUxMID0gMDtcclxuZXhwb3J0IGNvbnN0IEZJUkUgPSAxO1xyXG5cclxuLy8gc3RydWN0dXJlc1xyXG5leHBvcnQgY29uc3QgV09PREVOX1dBTEwgPSAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdPT0RFTl9XQUxMX0NPTk5FQ1RJT05TID0gW1xyXG4gIC8vIG5vcnRoIGVhc3Qgc291dGggd2VzdFxyXG4gIDUsICAvLyAwMDAwIC0tIG5vIGNvbm5lY3Rpb25zIFxyXG4gIDUsICAvLyAwMDAxIC0tIGNvbm5lY3RlZCB3ZXN0XHJcbiAgMTAsICAvLyAwMDEwIC0tIGNvbm5lY3RlZCBzb3V0aFxyXG4gIDE1LCAvLyAwMDExIC0tIGNvbm5lY3RlZCBzb3V0aCBhbmQgd2VzdFxyXG4gIDUsICAvLyAwMTAwIC0tIGNvbm5lY3RlZCBlYXN0XHJcbiAgNSwgIC8vIDAxMDEgLS0gY29ubmVjdGVkIGVhc3QgYW5kIHdlc3RcclxuICAxMSwgLy8gMDExMCAtLSBjb25uZWN0ZWQgZWFzdCBhbmQgc291dGhcclxuICA5LCAgLy8gMDExMSAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0IGFuZCBzb3V0aFxyXG4gIDE0LCAvLyAxMDAwIC0tIGNvbm5lY3RlZCBub3J0aFxyXG4gIDMsICAvLyAxMDAxIC0tIGNvbm5lY3RlZCBub3J0aCBhbmQgd2VzdFxyXG4gIDEwLCAvLyAxMDEwIC0tIGNvbm5lY3RlZCBub3J0aCBhbmQgc291dGhcclxuICAxMiwgLy8gMTAxMSAtLSBjb25uZWN0ZWQgbm9ydGgsIHNvdXRoIGFuZCB3ZXN0XHJcbiAgNywgIC8vIDExMDAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBlYXN0XHJcbiAgNiwgIC8vIDExMDEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCBhbmQgbm9ydGhcclxuICAxMywgLy8gMTExMCAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGggYW5kIGVhc3RcclxuICA4LCAgLy8gMTExMSAtLSBhbGwgY29ubmVjdGVkXHJcbl1cclxuXHJcbi8vIGR1cmF0aW9uIG9mIGludGVyYWN0aW9uIHByb2dyZXNzIChtaWxsaXMpXHJcbmV4cG9ydCBjb25zdCBQUk9HUkVTU19JTlRFUlZBTCA9IDUwMFxyXG4vLyAjIG9mIGNlbGxzIGluIHByb2dyZXNzIGFuaW1cclxuZXhwb3J0IGNvbnN0IFBST0dSRVNTX0FOSU1fTEVOR1RIID0gMjRcclxuXHJcbi8vIGRpcmVjdGlvbnNcclxuZXhwb3J0IGNvbnN0IE5PUlRIID0gJ25vcnRoJ1xyXG5leHBvcnQgY29uc3QgU09VVEggPSAnc291dGgnXHJcbmV4cG9ydCBjb25zdCBXRVNUID0gJ3dlc3QnXHJcbmV4cG9ydCBjb25zdCBFQVNUID0gJ2Vhc3QnXHJcbmV4cG9ydCBjb25zdCBOT1JUSEVBU1QgPSAnbm9ydGhlYXN0J1xyXG5leHBvcnQgY29uc3QgTk9SVEhXRVNUID0gJ25vcnRod2VzdCdcclxuZXhwb3J0IGNvbnN0IFNPVVRIRUFTVCA9ICdzb3V0aGVhc3QnXHJcbmV4cG9ydCBjb25zdCBTT1VUSFdFU1QgPSAnc291dGh3ZXN0J1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMjNiMmNiYjU0MDM5NDgxZjYwNzRlYzRhYmY3ZjI2My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1Y2I4ZmUyODc3YWNhNDI4YzUzNDBjNjY0NTE0MjQ4Ni5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZjNiMjVlYzgyNmQ4YjI2NGRlNzU4YTRiNmNhMTU5NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MWZkZTNlNDMzZTE1YjZmN2MxMWZhODU3ZGE4OTIxNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NDc1NGY2MmUwYWU0ZDIzZDM4NmUyNDZmNWUwY2I2ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkYmIzNGYxNjcxZGZhMTc0MTIwZDYzOWJkYWRlM2FlNC5wbmdcIjsiLCJpbXBvcnQgKiBhcyBleCBmcm9tICdleGNhbGlidXInO1xyXG5pbXBvcnQgeyBQbGF5IH0gZnJvbSAnLi9zY2VuZXMvbGV2ZWwtb25lL3BsYXknO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XHJcbmltcG9ydCB7IE9WRVJXT1JMRCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdG4nO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGVQcm92aWRlciB9IGZyb20gJy4vR2FtZVN0YXRlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL3VpL0FwcCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEdhbWVTdGF0ZVByb3ZpZGVyPjxBcHAgLz48L0dhbWVTdGF0ZVByb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSk7XHJcblxyXG5jb25zb2xlLmxvZyhcIkNSRUFURSBHQU1FLi4uXCIpXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuXHJcbmNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBQbGF5KGdhbWUpO1xyXG5nYW1lLmFkZChPVkVSV09STEQsIG92ZXJ3b3JsZCk7XHJcblxyXG5sZXQgbG9hZGVyID0gbmV3IGV4LkxvYWRlcigpO1xyXG5sb2FkZXIuc3VwcHJlc3NQbGF5QnV0dG9uID0gdHJ1ZTtcclxuZm9yIChsZXQga2V5IGluIFJlc291cmNlcykge1xyXG4gIGxvYWRlci5hZGRSZXNvdXJjZShSZXNvdXJjZXNba2V5XSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwibG9hZCBnYW1lXCIpXHJcbmdhbWUuc3RhcnQobG9hZGVyKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInN0YXJ0IGdhbWVcIilcclxuICBnYW1lLmdvVG9TY2VuZShPVkVSV09STEQpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3JhbmRcIjtcclxuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgYXZlcmFnZSB9IGZyb20gXCIuLi91dGlsL2F2ZXJhZ2VcIjtcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCIuLi91dGlsL21vZGVcIjtcclxuaW1wb3J0IHsgU09VVEhFQVNULCBOT1JUSFdFU1QsIE5PUlRILCBOT1JUSEVBU1QsIFdFU1QsIEVBU1QsIFNPVVRIV0VTVCwgU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0b2dyYW0ge1xyXG4gIFxyXG4gIC8vIHByaXZhdGUgY2VsbHM6IG51bWJlcltdW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGltczogRGltZW5zaW9ucywgcHVibGljIGNlbGxzOiBudW1iZXJbXVtdID0gW10pIHtcclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB0aGlzLnNldCh4LHksLTEpKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVJvdWdoR3JhaW5lZFZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIGdyYWluOiBudW1iZXIgPSAxNikge1xyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHggJSBncmFpbiA9PT0gMCAmJiB5ICUgZ3JhaW4gPT09IDApIHtcclxuICAgICAgICBsZXQgdmFsID0gcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgICBmb3IgKGxldCBkeCA9IDA7IGR4IDwgZ3JhaW47IGR4KyspIHtcclxuICAgICAgICAgIGZvciAobGV0IGR5ID0gMDsgZHkgPCBncmFpbjsgZHkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WCA9IHggKyBkeFxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IHkgKyBkeVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldID0gdGhpcy5jZWxsc1t0YXJnZXRZXSB8fCBbXVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldW3RhcmdldFhdID0gdmFsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMuY2VsbHNbeV1beF0gPSB0aGlzLmNlbGxzW01hdGguZmxvb3IoeS9ncmFpbildW01hdGguZmxvb3IoeC9ncmFpbildIC8vcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAgIC8vIGlmIChwbGFjZUhlcmUpIHtcclxuICAgICAgLy8gfVxyXG4gICAgfSwgKHkpID0+IHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIHNob3VsZFBsYWNlPzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICBsZXQgaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID0gISFzaG91bGRQbGFjZVxyXG4gICAgY29uc29sZS5sb2coXCJCdWlsZCBtYXBcIiwgdGhpcy5uYW1lKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IHBsYWNlSGVyZSA9IGhhc1BsYWNlbWVudFJlc3RyaWN0aW9ucyA/IHNob3VsZFBsYWNlKHgsIHkpIDogdHJ1ZVxyXG4gICAgICBpZiAocGxhY2VIZXJlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsc1t5XVt4XSA9IHBpY2soLi4udmFsdWVEaXN0cmlidXRpb24pXHJcbiAgICAgIH1cclxuICAgIH0sICh5KSA9PiB0aGlzLmNlbGxzW3ldID0gW10pXHJcbiAgfVxyXG5cclxuICBkaXN0cmlidXRlV2l0aGluKHNvdXJjZTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBzb3VyY2VSYXRlOiBudW1iZXIsIHZhbHVlUmF0ZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgcGxhY2VzID0gW11cclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHgseSkgPT0gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVpZ2hib3JzKHgsIHkpLmV2ZXJ5KHZhbCA9PiB2YWwgPT0gc291cmNlKSkge1xyXG4gICAgICAgICAgcGxhY2VzLnB1c2goW3gseV0pXHJcbiAgICAgICAgICAvLyB0aGlzLnNldCh4LHksIHBpY2sodmFsdWUsIHNvdXJjZSkpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgZGlzdHJpYnV0aW9uID0gWy4uLnRpbWVzKHZhbHVlUmF0ZSwgdmFsdWUpLCAuLi50aW1lcyhzb3VyY2VSYXRlLCBzb3VyY2UpXVxyXG4gICAgcGxhY2VzLmZvckVhY2goKFt4LHldKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0KHgseSwgcGljayguLi5kaXN0cmlidXRpb24pKVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb3B5KG5ld05hbWU6IHN0cmluZyk6IENhcnRvZ3JhbSB7XHJcbiAgICBsZXQgbmV3Q2VsbHMgPSBbXSAvL3RoaXMuY2VsbHMuc2xpY2UoKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbmV3Q2VsbHNbeV1beF0gPSB0aGlzLmF0KHgsIHkpXHJcbiAgICB9LCAoeSkgPT4gbmV3Q2VsbHNbeV0gPSBbXSlcclxuICAgIC8vIGZvciAoKVxyXG4gICAgbGV0IG5ld01hcCA9IG5ldyBDYXJ0b2dyYW0obmV3TmFtZSwgdGhpcy5kaW1zLCBuZXdDZWxscylcclxuICAgIC8vIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiBcclxuICAgIC8vICAgbmV3TWFwLnNldCh4LHksdGhpcy5hdCh4LHkpKVxyXG4gICAgLy8gICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAvLyApXHJcbiAgICByZXR1cm4gbmV3TWFwO1xyXG4gIH1cclxuXHJcbiAgYXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgcmV0dXJuIHRoaXMuY2VsbHNbeV0gJiYgdGhpcy5jZWxsc1t5XVt4XSB9XHJcblxyXG4gIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5jZWxsc1t5XSA9IHRoaXMuY2VsbHNbeV0gfHwgW11cclxuICAgIHRoaXMuY2VsbHNbeV1beF0gPSB2YWx1ZVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzbW9vdGgocm91bmRzOiBudW1iZXIgPSAzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBuZXdDZWxsczogbnVtYmVyW11bXSA9IFtdXHJcbiAgICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LHkpID0+IHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IHRoaXMuYXQoeCx5KVxyXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSB0aGlzLm5laWdoYm9ycyh4LHkpXHJcbiAgICAgICAgbGV0IG1vZGFsVmFsdWUgPSBtb2RlKG9yaWdpbmFsVmFsdWUsIC4uLm5laWdoYm9ycylcclxuICAgICAgICBuZXdDZWxsc1t5XVt4XSA9IHBpY2soLi4udGltZXMoMTMsIG1vZGFsVmFsdWUpLCAuLi5uZWlnaGJvcnMsIG9yaWdpbmFsVmFsdWUpXHJcbiAgICAgIH0sICh5KSA9PiBuZXdDZWxsc1t5XSA9IFtdKVxyXG4gICAgICB0aGlzLmNlbGxzID0gbmV3Q2VsbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlYWNoUG9zaXRpb24oZWFjaENlbGxDYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkLCBlYWNoUm93Q2FsbGJhY2s/OiAoeTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuZGltcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBlYWNoUm93Q2FsbGJhY2sgJiYgZWFjaFJvd0NhbGxiYWNrKHkpXHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kaW1zLndpZHRoOyB4KyspIHtcclxuICAgICAgICBlYWNoQ2VsbENhbGxiYWNrKHgseSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc3RhdGljIG5laWdoYm9yRGlyZWN0aW9ucyA9IHsgTk9SVEhXRVNUOiAwLCAgTk9SVEg6IDEsIE5PUlRIRUFTVDogMiwgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV0VTVDogMywgRUFTVDogNSxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT1VUSFdFU1Q6IDYsIFNPVVRIOiA3LCBTT1VUSEVBU1Q6IDggfVxyXG4gIC8vIG5laWdoYm9yUG9zaXRpb25zKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gIC8vICAgcmV0dXJuIFtcclxuICAvLyAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gIC8vICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgLy8gICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gIC8vICAgXVxyXG4gIC8vICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gIC8vICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgLy8gfSBcclxuICBuZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgcmV0dXJuIFtcclxuICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gICAgXVxyXG4gICAgICAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBsYWJlbGxlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXMuYXQoeCx5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW05PUlRIV0VTVF06IHRoaXMuYXQoeCAtIDEsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhdOiB0aGlzLmF0KHgsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhFQVNUXTogdGhpcy5hdCh4ICsgMSwgeSAtIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgW0VBU1RdOiB0aGlzLmF0KHggKyAxLCB5KSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbU09VVEhXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSF06IHRoaXMuYXQoeCwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSEVBU1RdOiB0aGlzLmF0KHggKyAxLCB5ICsgMSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZVxyXG4gICAgfVxyXG4gICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAvLyAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgd2l0aGluQm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLmRpbXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmRpbXMuaGVpZ2h0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5PUlRILCBTT1VUSCwgV0VTVCwgRUFTVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSB0eXBlb2YgTk9SVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgU09VVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgV0VTVFxyXG4gICAgICAgICAgICAgICB8IHR5cGVvZiBFQVNUXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0UG9zaXRpb24ocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgbGV0IFt4LHldID0gcG9zaXRpb25cclxuICBpZiAoZGlyZWN0aW9uID09PSBOT1JUSCkge1xyXG4gICAgcmV0dXJuIFt4LCB5LTFdIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gV0VTVCkge1xyXG4gICAgcmV0dXJuIFt4LTEsIHldIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gU09VVEgpIHtcclxuICAgIHJldHVybiBbeCwgeSsxXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IEVBU1QpIHtcclxuICAgIHJldHVybiBbeCsxLCB5XSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlyZWN0aW9uIHRvIGFkanVzdFBvc2l0aW9uOiBcIiArIGRpcmVjdGlvbilcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4vZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBDYXJ0b2dyYW0gfSBmcm9tIFwiLi9DYXJ0b2dyYW1cIjtcclxuLy8gaW1wb3J0IHsgR1JBU1MsIFdBVEVSLCBNT1VOVEFJTiwgTk9USElORywgR1JBUEVTLCBCQU5BTkEsIEFQUExFUywgUExVTSwgQkxVRUJFUlJZLCBTT1VUSCwgTk9SVEgsIFdBVEVSX1dJVEhfR1JBU1NfU09VVEgsIE5PUlRIRUFTVCwgU09VVEhFQVNULCBFQVNULCBXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRILCBXQVRFUl9XSVRIX0dSQVNTX1dFU1QsIFdBVEVSX1dJVEhfR1JBU1NfRUFTVCwgTk9SVEhXRVNULCBTT1VUSFdFU1QsIEdSQVNTX1dJVEhfV0FURVJfU09VVEhXRVNULCBHUkFTU19XSVRIX1dBVEVSX1NPVVRIRUFTVCwgR1JBU1NfV0lUSF9XQVRFUl9OT1JUSEVBU1QsIEdSQVNTX1dJVEhfV0FURVJfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRIRUFTVCwgV0FURVJfV0lUSF9HUkFTU19TT1VUSEVBU1QsIFdBVEVSX1dJVEhfR1JBU1NfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX1NPVVRIV0VTVCwgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElORywgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElOR19CUklER0VfU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9yYW5kXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEdSQVNTLCBXQVRFUiwgTk9SVEgsIEVBU1QsIFNPVVRILCBXRVNULCBOT1RISU5HLCBCQU5BTkEsIEdSQVBFUywgQVBQTEVTLCBQTFVNLCBCTFVFQkVSUlksIFNPVVRIRUFTVCwgVFJFRVMsIFdBVEVSX0dSQVNTX0lOVEVSRkFDRSwgVFJFRV9HUkFTU19JTlRFUkZBQ0UsIENPUk4sIFNUUkFXQkVSUlksIFdPT0RFTl9XQUxMLCBXT09ERU5fV0FMTF9DT05ORUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgdGVycmFpbjogQ2FydG9ncmFtXHJcbiAgdGhpbmdzOiBDYXJ0b2dyYW1cclxuICBzdHJ1Y3R1cmU6IENhcnRvZ3JhbVxyXG5cclxuICBwcmV0dHlUZXJyYWluOiBDYXJ0b2dyYW1cclxuICBwcmV0dHlTdHJ1Y3R1cmU6IENhcnRvZ3JhbVxyXG5cclxuICBjb25zdHJ1Y3RvcihkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlUmF3VGVycmFpbihkaW1zKVxyXG4gICAgdGhpcy5wcmV0dHlUZXJyYWluID0gbmV3IENhcnRvZ3JhbSgncHJldHR5VGVycmFpbicsIGRpbXMpIC8vdGhpcy50ZXJyYWluLmNvcHkoJ3ByZXR0eVRlcnJhaW4nKVxyXG4gICAgdGhpcy5hc3NlbWJsZVByZXR0eVRlcnJhaW4oKVxyXG5cclxuICAgIC8vIGRpc3RyaWJ1dGUgdGhpbmdzXHJcbiAgICBsZXQgdGhpbmdEaXN0cmlidXRpb24gPSBbXHJcbiAgICAgIC4uLnRpbWVzKDEwLCBOT1RISU5HKSxcclxuICAgICAgLi4udGltZXMoMSwgQkFOQU5BKSxcclxuICAgICAgLi4udGltZXMoMiwgR1JBUEVTKSxcclxuICAgICAgLi4udGltZXMoMywgQVBQTEVTKSxcclxuICAgICAgLi4udGltZXMoMSwgUExVTSksXHJcbiAgICAgIC4uLnRpbWVzKDEsIEJMVUVCRVJSWSksXHJcbiAgICAgIC4uLnRpbWVzKDIsIENPUk4pLFxyXG4gICAgICAuLi50aW1lcygzLCBTVFJBV0JFUlJZKSxcclxuICAgIF1cclxuICAgIHRoaXMudGhpbmdzID0gbmV3IENhcnRvZ3JhbSgndGhpbmdzJywgZGltcylcclxuICAgIHRoaXMudGhpbmdzLmRpc3RyaWJ1dGVWYWx1ZXMoXHJcbiAgICAgIHRoaW5nRGlzdHJpYnV0aW9uLFxyXG4gICAgICAoeCx5KSA9PiBcclxuICAgICAgdGhpcy50ZXJyYWluLmF0KHgseSkgPT0gR1JBU1MgJiZcclxuICAgICAgICB0aGlzLnRlcnJhaW4ubmVpZ2hib3JzKHgseSkuZXZlcnkoY2VsbCA9PiBjZWxsID09IEdSQVNTKVxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RydWN0dXJlID0gbmV3IENhcnRvZ3JhbSgnc3RydWN0dXJlJywgZGltcylcclxuICAgIHRoaXMucHJldHR5U3RydWN0dXJlID0gbmV3IENhcnRvZ3JhbSgncHJldHR5U3RydWN0dXJlJywgZGltcylcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMudGVycmFpbi5kaW1zLndpZHRoIH1cclxuICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy50ZXJyYWluLmRpbXMuaGVpZ2h0IH1cclxuXHJcbiAgc3RhdGljIGdlbigpOiBXb3JsZCB7XHJcbiAgICBsZXQgd29ybGQgPSBuZXcgV29ybGQoeyB3aWR0aDogMjU2LCBoZWlnaHQ6IDI1NiB9KVxyXG4gICAgcmV0dXJuIHdvcmxkXHJcbiAgfVxyXG5cclxuICBkZXNjcmliZVRlcnJhaW4oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlcnJhaW4gPSB0aGlzLnRlcnJhaW4uYXQoeCx5KVxyXG4gICAgaWYgKHRlcnJhaW4gPT0gR1JBU1MpIHtcclxuICAgICAgcmV0dXJuICdncmFzcydcclxuICAgIH0gZWxzZSBpZiAodGVycmFpbiA9PSBXQVRFUikge1xyXG4gICAgICByZXR1cm4gJ3dhdGVyJ1xyXG4gICAgfSBlbHNlIGlmICh0ZXJyYWluID09IFRSRUVTKSB7XHJcbiAgICAgIHJldHVybiAnZm9yZXN0J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICc/Pz8nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXNjcmliZU9iamVjdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgbGV0IGl0ID0gdGhpcy50aGluZ3MuYXQoeCx5KVxyXG4gICAgaWYgKGl0ID09IE5PVEhJTkcgfHwgaXQgPT0gdW5kZWZpbmVkKSB7IHJldHVybiAnJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBCQU5BTkEpIHsgcmV0dXJuICdiYW5hbmEnIH1cclxuICAgIGVsc2UgaWYgKGl0ID09IEdSQVBFUykgeyByZXR1cm4gJ2dyYXBlcycgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQkxVRUJFUlJZKSB7IHJldHVybiAnYmx1ZWJlcnJ5JyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBDT1JOKSB7IHJldHVybiAnY29ybicgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gU1RSQVdCRVJSWSkgeyByZXR1cm4gJ3N0cmF3YmVycnknfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQVBQTEVTKSB7IHJldHVybiAnYXBwbGVzJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBQTFVNKSB7IHJldHVybiAncGx1bScgfVxyXG4gICAgZWxzZSB7IHJldHVybiAnPz8/IFsnICsgaXQgKyAnXSd9XHJcbiAgfVxyXG5cclxuICBjaG9wVHJlZUF0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNob3AgdHJlZSBhdCB0YXJnZXQ6IFwiICsgeCArIFwiLCBcIiArIHkpXHJcbiAgICB0aGlzLnRlcnJhaW4uc2V0KHgseSxHUkFTUylcclxuICAgIC8vIHRoaXMuYXNzZW1ibGVQcmV0dHlUZXJyYWluKClcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhUUkVFX0dSQVNTX0lOVEVSRkFDRSwgVFJFRVMsIEdSQVNTKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBidWlsZFdvb2RlbldhbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYnVpbGQgd2FsbCBhdCBcIiArIHggKyBcIiwgXCIgKyB5KVxyXG4gICAgdGhpcy5zdHJ1Y3R1cmUuc2V0KHgseSxXT09ERU5fV0FMTClcclxuICAgIHRoaXMuYmVhdXRpZnlTdHJ1Y3R1cmVJbnRlcmZhY2VzKFdPT0RFTl9XQUxMX0NPTk5FQ1RJT05TLCBXT09ERU5fV0FMTClcclxuICAgIC8vIHRoaXMucHJldHRpZnlcclxuICAgIC8vIHRoaXMuYXNzZW1ibGVQcmV0dFxyXG4gICAgLy8gdGhpcy5zdHJ1Y3R1cmVcclxuICB9XHJcbiAgXHJcblxyXG4gIGdlbmVyYXRlUmF3VGVycmFpbihkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICBsZXQgdGVycmFpbkRpc3RyaWJ1dGlvbiA9IFtcclxuICAgICAgLi4udGltZXMoMTgsIEdSQVNTKSwgXHJcbiAgICAgIC4uLnRpbWVzKDEzLCBXQVRFUiksXHJcbiAgICAgIC8vIC4uLnRpbWVzKDExLCBNT1VOVEFJTilcclxuICAgIF1cclxuICAgIHRoaXMudGVycmFpbiA9IG5ldyBDYXJ0b2dyYW0oJ3RlcnJhaW4nLCBkaW1zKVxyXG4gICAgLy8gdGhpcy50ZXJyYWluLmRpc3RyaWJ1dGVWYWx1ZXModGVycmFpbkRpc3RyaWJ1dGlvbilcclxuICAgIHRoaXMudGVycmFpbi5kaXN0cmlidXRlUm91Z2hHcmFpbmVkVmFsdWVzKHRlcnJhaW5EaXN0cmlidXRpb24sIDgpXHJcbiAgICB0aGlzLnRlcnJhaW4uc21vb3RoKDgpXHJcbiAgICB0aGlzLnRlcnJhaW4uZGlzdHJpYnV0ZVdpdGhpbihHUkFTUywgVFJFRVMsIDIxLCAxNSlcclxuICB9XHJcblxyXG4gIGJlYXV0aWZ5VGVycmFpbkludGVyZmFjZXMoaW5kaWNlczogbnVtYmVyW11bXSwgdGVycmFpbk9uZTogbnVtYmVyLCB0ZXJyYWluVHdvOiBudW1iZXIpIHtcclxuICAgIHRoaXMucHJldHR5VGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzLnRlcnJhaW4uYXQoeCwgeSlcclxuICAgICAgbGV0IG5laWdoYm9ycyA9IHRoaXMudGVycmFpbi5sYWJlbGxlZE5laWdoYm9ycyh4LCB5KVxyXG4gICAgICBsZXQgZWFzdCA9IG5laWdoYm9yc1tFQVNUXVxyXG4gICAgICBsZXQgc291dGggPSBuZWlnaGJvcnNbU09VVEhdXHJcbiAgICAgIGxldCBzb3V0aGVhc3QgPSBuZWlnaGJvcnNbU09VVEhFQVNUXVxyXG4gICAgICBsZXQgZ3JvdXAgPSBbc2VsZiwgZWFzdCwgc291dGgsIHNvdXRoZWFzdF1cclxuXHJcbiAgICAgIGlmIChncm91cC5ldmVyeSh2YWwgPT4gdmFsID09IHRlcnJhaW5PbmUgfHwgdmFsID09IHRlcnJhaW5Ud28pKSB7XHJcbiAgICAgICAgbGV0IG1hc2sgPVxyXG4gICAgICAgICAgKHRoaXMudGVycmFpbi5hdCh4LCB5KSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogOCArXHJcbiAgICAgICAgICAobmVpZ2hib3JzW0VBU1RdID09IHRlcnJhaW5PbmUgPyAwIDogMSkgKiA0ICtcclxuICAgICAgICAgIChuZWlnaGJvcnNbU09VVEhdID09IHRlcnJhaW5PbmUgPyAwIDogMSkgKiAyICtcclxuICAgICAgICAgIChuZWlnaGJvcnNbU09VVEhFQVNUXSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogMVxyXG4gICAgICAgIHRoaXMucHJldHR5VGVycmFpbi5zZXQoeCwgeSwgcGljayguLi5pbmRpY2VzW21hc2tdKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzc2VtYmxlUHJldHR5VGVycmFpbigpIHtcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhXQVRFUl9HUkFTU19JTlRFUkZBQ0UsIFdBVEVSLCBHUkFTUylcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhUUkVFX0dSQVNTX0lOVEVSRkFDRSwgVFJFRVMsIEdSQVNTKVxyXG4gIH1cclxuXHJcbiAgYmVhdXRpZnlTdHJ1Y3R1cmVJbnRlcmZhY2VzKGluZGljZXM6IG51bWJlcltdLCBzdHJ1Y3R1cmU6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV0dHlTdHJ1Y3R1cmUuZWFjaFBvc2l0aW9uKCh4LHkpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzLnN0cnVjdHVyZS5hdCh4LHkpXHJcbiAgICAgIGlmIChzZWxmID09IHN0cnVjdHVyZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmVhdXRpZnkgc3RydWN0dXJlIFwiICsgc3RydWN0dXJlICsgXCIgYXQgXCIgKyB4ICsgXCIsIFwiICsgeSlcclxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gdGhpcy5zdHJ1Y3R1cmUubGFiZWxsZWROZWlnaGJvcnMoeCx5KVxyXG4gICAgICAgIGxldCBub3J0aCA9IG5laWdoYm9yc1tOT1JUSF1cclxuICAgICAgICBsZXQgc291dGggPSBuZWlnaGJvcnNbU09VVEhdXHJcbiAgICAgICAgbGV0IGVhc3QgPSBuZWlnaGJvcnNbRUFTVF1cclxuICAgICAgICBsZXQgd2VzdCA9IG5laWdoYm9yc1tXRVNUXVxyXG5cclxuICAgICAgICBsZXQgbWFzayA9IChub3J0aCA9PSBzdHJ1Y3R1cmUgPyAxIDogMCkgKiA4ICtcclxuICAgICAgICAgICAgICAgICAgIChlYXN0ID09IHN0cnVjdHVyZSA/IDEgOiAwKSAqIDQgK1xyXG4gICAgICAgICAgICAgICAgICAgKHNvdXRoID09IHN0cnVjdHVyZSA/IDEgOiAwKSAqIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgKHdlc3QgPT0gc3RydWN0dXJlID8gMSA6IDApICogMVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbnNcIiwgeyBub3J0aCwgc291dGgsIGVhc3QsIHdlc3R9LCBcIi0tLT5cIiwgbWFzaylcclxuICAgICAgICB0aGlzLnByZXR0eVN0cnVjdHVyZS5zZXQoeCx5LGluZGljZXNbbWFza10pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gXHJcbiAgaXNQb3NpdGlvbkNsZWFyKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgdGVycmFpbiA9IHRoaXMudGVycmFpbi5hdCh4LHkpXHJcbiAgICBsZXQgdGhpbmcgPSB0aGlzLnRoaW5ncy5hdCh4LCB5KVxyXG4gICAgbGV0IGJ1aWxkaW5nID0gdGhpcy5zdHJ1Y3R1cmUuYXQoeCx5KVxyXG4gICAgbGV0IGlzQ2xlYXIgPSAodGVycmFpbiA9PSBHUkFTUykgLy8gfHwgdGVycmFpbiA9PSBUUkVFUylcclxuICAgICAgICAvLyAmJiAodGhpbmcgPT0gTk9USElORyB8fCB0aGluZyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgJiYgKGJ1aWxkaW5nID09IE5PVEhJTkcgfHwgYnVpbGRpbmcgPT0gdW5kZWZpbmVkKVxyXG5cclxuICAgIHJldHVybiBpc0NsZWFyXHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZG9tQ2xlYXJQb3NpdGlvbigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGxldCBtYXRjaGluZ1Bvc2l0aW9uczogW251bWJlciwgbnVtYmVyXVtdID0gW11cclxuICAgIHRoaXMudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3NpdGlvbkNsZWFyKHgseSkpIHtcclxuICAgICAgICBtYXRjaGluZ1Bvc2l0aW9ucy5wdXNoKFt4LHldKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHBpY2soLi4ubWF0Y2hpbmdQb3NpdGlvbnMpIGFzIFdvcmxkUG9zaXRpb25cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgT1ZFUldPUkxEX0NFTExfU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuY29uc3Qgc3dvcmQgPSByZXF1aXJlKCcuL2ltYWdlcy9zd29yZC5wbmcnKTtcclxuY29uc3QgZnJ1aXQgPSByZXF1aXJlKCcuL2ltYWdlcy9mcnVpdC5wbmcnKTtcclxuY29uc3QgdGVycmFpbiA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4tZGVlcC5wbmcnKTtcclxuLy8gY29uc3QgdGVycmFpblNtb290aCA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4ucG5nJyk7XHJcbmNvbnN0IHBlYXNhbnQgPSByZXF1aXJlKCcuL2ltYWdlcy9wZWFzYW50LnBuZycpO1xyXG5jb25zdCBwcm9ncmVzcyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3Byb2dyZXNzLnBuZycpXHJcbmNvbnN0IHN0cnVjdHVyZSA9IHJlcXVpcmUoJy4vaW1hZ2VzL3N0cnVjdHVyZS5wbmcnKVxyXG5cclxubGV0IFJlc291cmNlcyA9IHtcclxuICBTd29yZDogbmV3IGV4LlRleHR1cmUoc3dvcmQpLFxyXG4gIEZydWl0OiBuZXcgZXguVGV4dHVyZShmcnVpdCksXHJcbiAgVGVycmFpbjogbmV3IGV4LlRleHR1cmUodGVycmFpbiksXHJcbiAgUGVhc2FudDogbmV3IGV4LlRleHR1cmUocGVhc2FudCksXHJcbiAgUHJvZ3Jlc3M6IG5ldyBleC5UZXh0dXJlKHByb2dyZXNzKSxcclxuICBTdHJ1Y3R1cmU6IG5ldyBleC5UZXh0dXJlKHN0cnVjdHVyZSksXHJcbn1cclxuXHJcbmxldCBzeiA9IE9WRVJXT1JMRF9DRUxMX1NJWkVcclxubGV0IFNwcml0ZVNoZWV0cyA9IHtcclxuICBGcnVpdDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5GcnVpdCwgNywgMiwgc3osIHN6KSxcclxuICBUZXJyYWluOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRlcnJhaW4sIDgsIDgsIHN6LCBzeiksXHJcbiAgUGVhc2FudDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5QZWFzYW50LCA0LCA0LCBzeiwgc3opLFxyXG4gIFByb2dyZXNzOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlByb2dyZXNzLCAxNywgMSwgc3osIHN6KSxcclxuICBTdHJ1Y3R1cmU6IG5ldyBleC5TcHJpdGVTaGVldChSZXNvdXJjZXMuU3RydWN0dXJlLCA0LCA0LCBzeiwgc3opXHJcbn1cclxuXHJcbmV4cG9ydCB7IFJlc291cmNlcywgU3ByaXRlU2hlZXRzIH1cclxuIiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uLy4uL0dhbWUnO1xyXG5pbXBvcnQgeyBOT1RISU5HLCBPVkVSV09STERfQ0VMTF9TSVpFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXRzIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ucyB7XHJcbiAgdGVycmFpblRpbGVzOiBleC5UaWxlTWFwO1xyXG4gIHRoaW5nVGlsZXM6IGV4LlRpbGVNYXA7XHJcbiAgc3RydWN0dXJlVGlsZXM6IGV4LlRpbGVNYXA7XHJcblxyXG4gIGdldCB0aWxlbWFwcygpIHsgcmV0dXJuIFt0aGlzLnRlcnJhaW5UaWxlcywgdGhpcy50aGluZ1RpbGVzLCB0aGlzLnN0cnVjdHVyZVRpbGVzXTsgfVxyXG4gIGdldCB0ZXJyYWluU291cmNlKCkgeyByZXR1cm4gdGhpcy5nYW1lLndvcmxkLnByZXR0eVRlcnJhaW47IH1cclxuICBnZXQgc3RydWN0dXJlU291cmNlKCkgeyByZXR1cm4gdGhpcy5nYW1lLndvcmxkLnByZXR0eVN0cnVjdHVyZTsgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHtcclxuICAgIGxldCBpc09mZnNldCA9IHRydWU7XHJcbiAgICBsZXQgdGVycmFpbk1hcE9yaWdpbiA9IGlzT2Zmc2V0ID8gWzAsIDBdXHJcbiAgICAgIDogWy1PVkVSV09STERfQ0VMTF9TSVpFIC8gMiwgLU9WRVJXT1JMRF9DRUxMX1NJWkUgLyAyXTtcclxuICAgIHRoaXMudGVycmFpblRpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHRlcnJhaW5NYXBPcmlnaW5bMF0sXHJcbiAgICAgIHRlcnJhaW5NYXBPcmlnaW5bMV0sXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAxLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQud2lkdGggLSAxXHJcbiAgICApO1xyXG4gICAgdGhpcy50ZXJyYWluVGlsZXMucmVnaXN0ZXJTcHJpdGVTaGVldCgnbGFuZCcsIFNwcml0ZVNoZWV0cy5UZXJyYWluKTtcclxuICAgIHRoaXMucGF2ZVRlcnJhaW4oKTtcclxuXHJcbiAgICBsZXQgdGhpbmdNYXBPcmlnaW4gPSBbLU9WRVJXT1JMRF9DRUxMX1NJWkUgLyAyLCAtT1ZFUldPUkxEX0NFTExfU0laRSAvIDJdO1xyXG4gICAgdGhpcy50aGluZ1RpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHRoaW5nTWFwT3JpZ2luWzBdLFxyXG4gICAgICB0aGluZ01hcE9yaWdpblsxXSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIDEsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDFcclxuICAgICk7XHJcbiAgICB0aGlzLnRoaW5nVGlsZXMucmVnaXN0ZXJTcHJpdGVTaGVldCgnZnJ1aXQnLCBTcHJpdGVTaGVldHMuRnJ1aXQpO1xyXG5cclxuICAgIHRoaXMuZW1iZWRUaGluZ3MoKTtcclxuXHJcbiAgICBsZXQgc3RydWN0dXJlTWFwT3JpZ2luID0gdGhpbmdNYXBPcmlnaW47XHJcbiAgICB0aGlzLnN0cnVjdHVyZVRpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHN0cnVjdHVyZU1hcE9yaWdpblswXSxcclxuICAgICAgc3RydWN0dXJlTWFwT3JpZ2luWzFdLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMSk7XHJcbiAgICB0aGlzLnN0cnVjdHVyZVRpbGVzLnJlZ2lzdGVyU3ByaXRlU2hlZXQoJ3N0cnVjdHVyZScsIFNwcml0ZVNoZWV0cy5TdHJ1Y3R1cmUpO1xyXG5cclxuICB9XHJcblxyXG4gIHBhdmVUZXJyYWluKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXZlIHRlcnJhaW4uLi5cIik7XHJcbiAgICB0aGlzLmdhbWUud29ybGQudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IGNlbGwgPSB0aGlzLnRlcnJhaW5UaWxlcy5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIGNlbGwuY2xlYXJTcHJpdGVzKCk7XHJcbiAgICAgICAgY2VsbC5wdXNoU3ByaXRlKG5ldyBleC5UaWxlU3ByaXRlKCdsYW5kJywgdGhpcy50ZXJyYWluU291cmNlLmF0KHgsIHkpKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGF2ZVRlcnJhaW5OYXJyb3dseShwb3NpdGlvbnM6IFtudW1iZXIsIG51bWJlcl1bXSkge1xyXG4gICAgcG9zaXRpb25zLmZvckVhY2goKFt4LCB5XSkgPT4ge1xyXG4gICAgICBsZXQgY2VsbCA9IHRoaXMudGVycmFpblRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKTtcclxuICAgICAgICBjZWxsLnB1c2hTcHJpdGUobmV3IGV4LlRpbGVTcHJpdGUoJ2xhbmQnLCB0aGlzLnRlcnJhaW5Tb3VyY2UuYXQoeCwgeSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbWJlZFRoaW5ncygpIHtcclxuICAgIHRoaXMuZ2FtZS53b3JsZC50aGluZ3MuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBjZWxsID0gdGhpcy50aGluZ1RpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nYW1lLndvcmxkLnRoaW5ncy5hdCh4LCB5KTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IE5PVEhJTkcpIHtcclxuICAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgZXguVGlsZVNwcml0ZSgnZnJ1aXQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICBjZWxsLnB1c2hTcHJpdGUoc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5fZ2FtZSA9IGVuZ2luZVxyXG4gIH1cclxuXHJcbiAgYXNzZW1ibGVTdHJ1Y3R1cmVzKCkge1xyXG4gICAgdGhpcy5nYW1lLndvcmxkLnN0cnVjdHVyZS5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IGNlbGwgPSB0aGlzLnN0cnVjdHVyZVRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuZ2FtZS53b3JsZC5zdHJ1Y3R1cmUuYXQoeCwgeSlcclxuICAgICAgICBpZiAodmFsICE9PSBOT1RISU5HKSB7XHJcbiAgICAgICAgICBsZXQgc3ByaXRlID0gbmV3IGV4LlRpbGVTcHJpdGUoJ3N0cnVjdHVyZScsIHRoaXMuc3RydWN0dXJlU291cmNlLmF0KHgsIHkpKVxyXG4gICAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKVxyXG4gICAgICAgICAgY2VsbC5wdXNoU3ByaXRlKHNwcml0ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi8uLi9HYW1lJztcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi4vLi4vYWN0b3JzL2N1cnNvci9jdXJzb3InO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi8uLi9hY3RvcnMvcGxheWVyL3BsYXllcic7XHJcbmltcG9ydCB7IFZlY3RvciwgSW5wdXQsIExvY2tDYW1lcmFUb0FjdG9yU3RyYXRlZ3ksIFNjZW5lIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgTk9SVEgsIFdFU1QsIFNPVVRILCBFQVNULCBPVkVSV09STERfQ0VMTF9TSVpFLCBUUkVFUywgU09VVEhFQVNULCBQUk9HUkVTU19JTlRFUlZBTCwgR1JBU1MsIFNUUkFXQkVSUlksIE5PVEhJTkcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGp1c3RQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kaXJlY3Rpb24nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uLy4uL2FjdG9ycy9wcm9ncmVzcyc7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBFbnZpcm9ucyB9IGZyb20gJy4vRW52aXJvbnMnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGVQcm92aWRlciB9IGZyb20gJy4uLy4uL0dhbWVTdGF0ZVByb3ZpZGVyJztcclxuXHJcbnR5cGUgSW50ZXJhY3Rpb24gPSB7IGFjdGl2ZTogYm9vbGVhbiwgYXQ/OiBXb3JsZFBvc2l0aW9uLCBzdGFydGVkQXQ/OiBudW1iZXIgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgZW52aXJvbnM6IEVudmlyb25zXHJcbiAgY3Vyc29yOiBDdXJzb3JcclxuICBwbGF5ZXI6IFBsYXllclxyXG4gIF9nYW1lOiBHYW1lXHJcbiAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uID0geyBhY3RpdmU6IGZhbHNlIH1cclxuICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcclxuXHJcbiAgcHVibGljIG9uSW5pdGlhbGl6ZShlbmdpbmU6IEdhbWUpIHtcclxuICAgIHRoaXMuX2dhbWUgPSBlbmdpbmVcclxuICAgIHRoaXMuZW52aXJvbnMgPSBuZXcgRW52aXJvbnMoZW5naW5lKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmVudmlyb25zLnRpbGVtYXBzLmZvckVhY2gobWFwID0+IHRoaXMuYWRkKG1hcCkpXHJcblxyXG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxuICAgIHRoaXMuYWRkKHRoaXMucGxheWVyKTtcclxuICAgIHRoaXMuYWRkKHRoaXMuY3Vyc29yKTtcclxuXHJcbiAgICBsZXQgc3RhcnRXb3JsZFBvcyA9IHRoaXMuX2dhbWUud29ybGQucmFuZG9tQ2xlYXJQb3NpdGlvblxyXG4gICAgdGhpcy5wbGF5ZXIud29ybGRQb3NpdGlvbiA9IHN0YXJ0V29ybGRQb3NcclxuICAgIHRoaXMucGxheWVyLnBvcyA9IG5ldyBWZWN0b3IoXHJcbiAgICAgIHN0YXJ0V29ybGRQb3NbMF0gKiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICAoc3RhcnRXb3JsZFBvc1sxXSkgKiBPVkVSV09STERfQ0VMTF9TSVpFXHJcbiAgICApXHJcbiAgICB0aGlzLmNhbWVyYS5hZGRTdHJhdGVneShuZXcgTG9ja0NhbWVyYVRvQWN0b3JTdHJhdGVneSh0aGlzLnBsYXllcikpXHJcbiAgICB0aGlzLl9nYW1lLmlucHV0LnBvaW50ZXJzLnByaW1hcnkub24oJ2Rvd24nLCAoKSA9PiB0aGlzLmJ1aWxkU3RydWN0dXJlKCkpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QcmVVcGRhdGUoKSB7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3MgPSB0aGlzLnBsYXllci5wb3NcclxuICAgIHRoaXMuaGFuZGxlUGxheWVySW5wdXQoKVxyXG4gICAgLy8gaWYgKHRoaXMuX2dhbWUuaW5wdXQucG9pbnRlcnMucHJpbWFyeS4pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRTdHJ1Y3R1cmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIndvdWxkIGJ1aWxkIHN0cnVjdHVyZS4uLlwiKVxyXG4gICAgbGV0IFt4LHldID0gdGhpcy5jdXJzb3IuaG92ZXJXb3JsZFBvc1xyXG4gICAgaWYgKHRoaXMuX2dhbWUud29ybGQuaXNQb3NpdGlvbkNsZWFyKHgseSkpIHsgLy90ZXJyYWluLmF0KHgseSkgPT0gR1JBU1MpIHtcclxuICAgICAgdGhpcy5fZ2FtZS53b3JsZC5idWlsZFdvb2RlbldhbGwoeCx5KVxyXG4gICAgICB0aGlzLmVudmlyb25zLmFzc2VtYmxlU3RydWN0dXJlcygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGF5ZXJJbnB1dCgpIHtcclxuICAgIGlmICh0aGlzLl9nYW1lLmlucHV0LmtleWJvYXJkLmlzSGVsZChJbnB1dC5LZXlzLlEpKSB7XHJcbiAgICAgIHRoaXMuX2dhbWUuaHVkLnRvZ2dsZUluc3BlY3QoKVxyXG4gICAgICAvLyBHYW1lU3RhdGVQcm92aWRlci5zZXRHbG9iYWwoeyBpbnNwZWN0OiAhR2FtZVN0YXRlUHJvdmlkZXIuZ2V0R2xvYmFsKCkuaW5zcGVjdCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSkge1xyXG4gICAgICAvLyBuZWVkIHRvIGtlZXAgaG9sZGluZyBFIG9yIGl0IGdvZXMgYXdheVxyXG4gICAgICBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5FKSkge1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIGxldCBlbGFwc2VkID0gbm93IC0gdGhpcy5pbnRlcmFjdGlvbi5zdGFydGVkQXRcclxuICAgICAgICBjb25zb2xlLmxvZyhcImludGVyYWN0IC0tIGNvbnRpbnVlXCIsIGVsYXBzZWQpXHJcbiAgICAgICAgLy8gdGhpcy5pbnRlcmFjdGlvbi5wZXJjZW50ICs9IDFcclxuICAgICAgICBpZiAoZWxhcHNlZCA+PSBQUk9HUkVTU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcmFjdCBjb21wbGV0ZVwiKVxyXG4gICAgICAgICAgLy8gdGhpcy53b3JsZC50ZXJyYWluXHJcbiAgICAgICAgICBsZXQgW3gseV0gPSB0aGlzLmludGVyYWN0aW9uLmF0XHJcbiAgICAgICAgICB0aGlzLl9nYW1lLndvcmxkLmNob3BUcmVlQXQoeCx5KVxyXG4gICAgICAgICAgdGhpcy5fZ2FtZS5odWQuY29sbGVjdCgnd29vZCcsIDUpXHJcbiAgICAgICAgICB0aGlzLmVudmlyb25zLnBhdmVUZXJyYWluTmFycm93bHkoW1xyXG4gICAgICAgICAgICBbeCx5XSxcclxuICAgICAgICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gICAgICAgICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgICAgICAgICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICB0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnByb2dyZXNzQmFyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5wcm9ncmVzc0JhcilcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnBsYXllci5tb3ZpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5FKSkge1xyXG4gICAgICAgICAgdGhpcy5zdGFydEludGVyYWN0aW9uKClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuVykpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoTk9SVEgpLnRoZW4oKCkgPT4gdGhpcy5jb2xsZWN0SXRlbXMoKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuQSkpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoV0VTVCkudGhlbigoKSA9PiB0aGlzLmNvbGxlY3RJdGVtcygpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5TKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShTT1VUSCkudGhlbigoKSA9PiB0aGlzLmNvbGxlY3RJdGVtcygpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5EKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShFQVNUKS50aGVuKCgpID0+IHRoaXMuY29sbGVjdEl0ZW1zKCkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5mYWNpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RmFjaW5nKHRoaXMucGxheWVyLmZhY2luZylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLmlkbGUoKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxlY3RJdGVtcygpIHtcclxuICAgIC8vIGFkZCBhbnkgaXRlbXMgb24gdGhpcyBjZWxsIHRvIHRoZSBpbnZlbnRvcnlcclxuICAgIGxldCBbeCx5XSA9IHRoaXMucGxheWVyLndvcmxkUG9zaXRpb25cclxuICAgIGxldCBpdCA9IHRoaXMuX2dhbWUud29ybGQudGhpbmdzLmF0KHgseSlcclxuICAgIGlmIChpdCAhPT0gTk9USElORyAmJiBpdCAhPT0gdW5kZWZpbmVkKSB7IFxyXG4gICAgICBsZXQgaXRlbU5hbWUgPSB0aGlzLl9nYW1lLndvcmxkLmRlc2NyaWJlT2JqZWN0KHgsIHkpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sbGVjdCBcIiArIGl0ZW1OYW1lKVxyXG4gICAgICB0aGlzLl9nYW1lLmh1ZC5jb2xsZWN0KGl0ZW1OYW1lLCAxKVxyXG4gICAgICB0aGlzLl9nYW1lLndvcmxkLnRoaW5ncy5zZXQoeCx5LE5PVEhJTkcpXHJcbiAgICAgIHRoaXMuZW52aXJvbnMudGhpbmdUaWxlcy5nZXRDZWxsKHgseSkuY2xlYXJTcHJpdGVzKClcclxuICAgICAgLy8gYW5kIGFjdHVhbGx5IHJlbW92ZSBmcm9tIHRpbGVzP1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRJbnRlcmFjdGlvbigpIHtcclxuICAgIC8vIGlmICh0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSkge1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gY3JlYXRlIHByb2dyZXNzIHdoZXJldmVyIHBsYXllciBpcyBmYWNpbmcsIGlmIGl0IGlzIGEgZm9yZXN0XHJcbiAgICAgIGxldCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gPSBhZGp1c3RQb3NpdGlvbih0aGlzLnBsYXllci53b3JsZFBvc2l0aW9uLCB0aGlzLnBsYXllci5mYWNpbmcpXHJcbiAgICAgIGlmICh0aGlzLl9nYW1lLndvcmxkLnRlcnJhaW4uYXQoLi4udGFyZ2V0KSA9PSBUUkVFUykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQcm9ncmVzc0Jhcih0YXJnZXQpXHJcbiAgICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0UHJvZ3Jlc3NCYXIodGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aW9uID0ge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF0OiB0YXJnZXQgYXMgV29ybGRQb3NpdGlvbixcclxuICAgICAgc3RhcnRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wb3MgPSBuZXcgVmVjdG9yKHRhcmdldFswXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUsIHRhcmdldFsxXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUpXHJcbiAgICB0aGlzLmFkZCh0aGlzLnByb2dyZXNzQmFyKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3RuJztcclxuaW1wb3J0IE1vdXNlVG9vbHRpcCBmcm9tICdyZWFjdC1zdGlja3ktbW91c2UtdG9vbHRpcCc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIi4uL0dhbWVTdGF0ZVByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt7bWVzc2FnZSwgaW5zcGVjdCwgaW52ZW50b3J5fV09IEdhbWVTdGF0ZVByb3ZpZGVyLnVzZUdsb2JhbCgpXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBtZXRhXCIgc3R5bGU9e3twYWRkaW5nOiAnM3B4J319PlxyXG4gICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PmZyZWVob2xkPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnkgYm94XCI+XHJcbiAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcxMXB4JywgZm9udFdlaWdodDogJ2JvbGQnLCBwYWRkaW5nOiAnM3B4J319PlxyXG4gICAgICAgIElOVkVOVE9SWVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIG1hcmdpbjogJzAgYXV0byd9fSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzNweCcsIHdpZHRoOiAnOTUlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxyXG4gICAgICAgIHtPYmplY3QuZW50cmllcyhpbnZlbnRvcnkpLm1hcCgoW2l0LGNvdW50XSkgPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtpdH0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDF9fT57aXR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6IDEsIHRleHRBbGlnbjogJ3JpZ2h0J319Pnh7Y291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8TW91c2VUb29sdGlwIHZpc2libGU9e2luc3BlY3R9IG9mZnNldFg9ezIwfT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNnB4JywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjMpJywgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyB9fT5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5oZXJlOiB7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb3VzZVRvb2x0aXA+XHJcbiAgPC9kaXY+O1xyXG59OyIsImltcG9ydCB7IHNldEdsb2JhbCwgZ2V0R2xvYmFsIH0gZnJvbSAncmVhY3RuJ1xyXG5pbXBvcnQgeyBHYW1lU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL0dhbWVTdGF0ZVByb3ZpZGVyJ1xyXG5cclxuLy8gdGhpbiB3cmFwcGVyIGFyb3VuZCBnYW1lIHN0YXRlIHByb3ZpZGVyIHNldHRlcnMuLlxyXG5leHBvcnQgY2xhc3MgSHVkIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHNldEhvdmVyTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGlmIChtZXNzYWdlICE9PSBHYW1lU3RhdGVQcm92aWRlci5nZXRHbG9iYWwoKS5tZXNzYWdlKSB7XHJcbiAgICAgIEdhbWVTdGF0ZVByb3ZpZGVyLnNldEdsb2JhbCh7IG1lc3NhZ2UgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhc3RUb2dnbGVkSW5zcGVjdDogbnVtYmVyID0gLTFcclxuICB0b2dnbGVJbnNwZWN0KCkgeyBcclxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgbGV0IGVsYXBzZWQgPSBub3cgLSB0aGlzLmxhc3RUb2dnbGVkSW5zcGVjdFxyXG4gICAgaWYgKGVsYXBzZWQgPj0gMjAwKSB7XHJcbiAgICAgIEdhbWVTdGF0ZVByb3ZpZGVyLnNldEdsb2JhbCh7IGluc3BlY3Q6ICFHYW1lU3RhdGVQcm92aWRlci5nZXRHbG9iYWwoKS5pbnNwZWN0IH0pXHJcbiAgICAgIHRoaXMubGFzdFRvZ2dsZWRJbnNwZWN0ID0gbm93XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsZWN0KGl0ZW06IHN0cmluZywgY291bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IHsgaW52ZW50b3J5IH0gPSBHYW1lU3RhdGVQcm92aWRlci5nZXRHbG9iYWwoKVxyXG4gICAgaW52ZW50b3J5W2l0ZW1dID0gaW52ZW50b3J5W2l0ZW1dIHx8IDBcclxuICAgIGludmVudG9yeVtpdGVtXSArPSBjb3VudFxyXG4gICAgR2FtZVN0YXRlUHJvdmlkZXIuc2V0R2xvYmFsKHsgaW52ZW50b3J5fSlcclxuICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbW9kZSguLi5hcnI6IGFueVtdKSB7XHJcbiAgICB2YXIgbWFwID0ge307XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtYXBbYXJyW2ldXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1hcFthcnJbaV1dID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFwW2FycltpXV0gKz0gMTtcclxuICAgIH1cclxuICAgIHZhciBncmVhdGVzdEZyZXEgPSAwO1xyXG4gICAgdmFyIG1vZGU7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIG1hcCkge1xyXG4gICAgICAgIGlmIChtYXBbcHJvcF0gPiBncmVhdGVzdEZyZXEpIHtcclxuICAgICAgICAgICAgZ3JlYXRlc3RGcmVxID0gbWFwW3Byb3BdO1xyXG4gICAgICAgICAgICBtb2RlID0gcHJvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZTtcclxufSIsImV4cG9ydCBjb25zdCBwaWNrID0gPFQ+KC4uLmVsZW1zOiBUW10pOiBUID0+IHtcclxuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbGVtcy5sZW5ndGgpKVxyXG4gICAgcmV0dXJuIGVsZW1zW2luZGV4XVxyXG59IiwiZXhwb3J0IGNvbnN0IHRpbWVzID0gKG46IG51bWJlciwgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGFyci5wdXNoKHZhbHVlKSB9XHJcbiAgcmV0dXJuIGFyclxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9