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
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
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
        this.pluckedStructure = new PluckedStructure;
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
            if (engine.world.terrain.at(cellX, cellY) == constants_1.GRASS) {
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
const ex = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ex = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const play_1 = __webpack_require__(/*! ./scenes/level-one/play */ "./src/scenes/level-one/play.ts");
const resources_1 = __webpack_require__(/*! ./resources */ "./src/resources.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
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
        // throw new Error("Method not implemented.");
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
                console.log("connections", { north, south, east, west }, "--->", mask);
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
            && (thing == constants_1.NOTHING || thing == undefined)
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteSheets = exports.Resources = void 0;
const ex = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.Environs = void 0;
const ex = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
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
        if (this._game.world.terrain.at(x, y) == constants_1.GRASS) {
            this._game.world.buildWoodenWall(x, y);
            this.environs.assembleStructures();
        }
    }
    handlePlayerInput() {
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
                    this.player.move(constants_1.NORTH);
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.A)) {
                    this.player.move(constants_1.WEST);
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.S)) {
                    this.player.move(constants_1.SOUTH);
                }
                else if (this._game.input.keyboard.isHeld(excalibur_1.Input.Keys.D)) {
                    this.player.move(constants_1.EAST);
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

/***/ "./src/ui/Hud.ts":
/*!***********************!*\
  !*** ./src/ui/Hud.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hud = void 0;
class Hud {
    constructor() {
        this.hover = document.getElementById('hover-note');
    }
    setHoverMessage(message) {
        if (this.hover) {
            this.hover.innerHTML = message;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9ycy9jdXJzb3IvY3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3RvcnMvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3JzL3Byb2dyZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9mcnVpdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wZWFzYW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Byb2dyZXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0cnVjdHVyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zd29yZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90ZXJyYWluLWRlZXAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NhcnRvZ3JhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sZXZlbC1vbmUvRW52aXJvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sZXZlbC1vbmUvcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvSHVkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90aW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNB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SSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxFQUFFO1lBQzFCLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBakJELG9CQWlCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCWSxZQUFJLEdBQUcsQ0FBSSxHQUFHLEtBQVUsRUFBSyxFQUFFO0lBQ3hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSFksYUFBSyxHQUFHLENBQUMsQ0FBUyxFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQ2hELElBQUksR0FBRyxHQUFHLEVBQUU7SUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FBRTtJQUMvQyxPQUFPLEdBQUc7QUFDWixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vbW9kZWxzL3dvcmxkJztcclxuaW1wb3J0IHsgSHVkIH0gZnJvbSAnLi91aS9IdWQnO1xyXG5pbXBvcnQgeyBFbmdpbmUsIERpc3BsYXlNb2RlIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgRW5naW5lIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgaHVkOiBIdWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogODAwLFxyXG4gICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgZGlzcGxheU1vZGU6IERpc3BsYXlNb2RlLkZ1bGxTY3JlZW4sXHJcbiAgICAgIGNhbnZhc0VsZW1lbnRJZDogJ2dhbWUnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLndvcmxkID0gV29ybGQuZ2VuKCk7XHJcbiAgICB0aGlzLmh1ZCA9IG5ldyBIdWQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc3RhcnQobG9hZGVyOiBleC5Mb2FkZXIpIHtcclxuICAgIHJldHVybiBzdXBlci5zdGFydChsb2FkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3RvciwgVmVjdG9yLCBDb2xvciB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IE9WRVJXT1JMRF9DRUxMX1NJWkUsIEdSQVNTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcclxuXHJcbmNsYXNzIFBsdWNrZWRTdHJ1Y3R1cmUgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHdpZHRoOiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBoZWlnaHQ6IE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIC8vIGNvbG9yOiBDb2xvci5CbGFjayxcclxuICAgICAgLy8gb3BhY2l0eTogMC4zLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uSW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIHRoaXMuYWRkRHJhd2luZyhSZXNvdXJjZXMuU3dvcmQpXHJcbiAgICAvLyB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMCwwKSAvLzE2LDE2KVxyXG4gICAgdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAuNSwwLjUpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoU3ByaXRlU2hlZXRzLlN0cnVjdHVyZS5nZXRTcHJpdGUoNSkpXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJzb3IgZXh0ZW5kcyBBY3RvciB7XHJcbiAgaG92ZXJXb3JsZFBvczogW251bWJlciwgbnVtYmVyXSA9IFstMSwtMV1cclxuICBwbHVja2VkU3RydWN0dXJlOiBQbHVja2VkU3RydWN0dXJlXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBjb2xvcjogQ29sb3IuQmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoKSB7XHJcbiAgICAvLyB0aGlzLmFkZERyYXdpbmcoUmVzb3VyY2VzLlN3b3JkKVxyXG4gICAgLy8gdGhpcy5hbmNob3IgPSBuZXcgVmVjdG9yKDAsMCkgLy8xNiwxNilcclxuXHJcbiAgICB0aGlzLmFuY2hvciA9IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgIC8vIHRoaXMuYWRkRHJhd2luZyhTcHJpdGVTaGVldHMuU3RydWN0dXJlLmdldFNwcml0ZSg1KSlcclxuICAgIHRoaXMucGx1Y2tlZFN0cnVjdHVyZSA9IG5ldyBQbHVja2VkU3RydWN0dXJlXHJcbiAgICB0aGlzLmFkZCh0aGlzLnBsdWNrZWRTdHJ1Y3R1cmUpXHJcbiAgfVxyXG5cclxuICB0aWNrcyA9IDBcclxuICBvblByZVVwZGF0ZShlbmdpbmU6IEdhbWUpIHtcclxuICAgIHRoaXMudGlja3MgKytcclxuICAgIC8vIGlmICh0aGlzLnRpY2tzICUgMyA9PT0gMCkge1xyXG4gICAgICBpZiAoZW5naW5lLmlucHV0LnBvaW50ZXJzLnByaW1hcnkubGFzdFdvcmxkUG9zKSB7XHJcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gZW5naW5lLmlucHV0LnBvaW50ZXJzLnByaW1hcnkubGFzdFdvcmxkUG9zXHJcbiAgICAgICAgdGhpcy5ob3ZlcldvcmxkUG9zID0gW1xyXG4gICAgICAgICAgTWF0aC5yb3VuZCh4IC8gT1ZFUldPUkxEX0NFTExfU0laRSksXHJcbiAgICAgICAgICBNYXRoLnJvdW5kKHkgLyBPVkVSV09STERfQ0VMTF9TSVpFKSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGxldCBbY2VsbFgsIGNlbGxZXSA9IHRoaXMuaG92ZXJXb3JsZFBvc1xyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3RvcihcclxuICAgICAgICAgIGNlbGxYICogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgICAgIGNlbGxZICogT1ZFUldPUkxEX0NFTExfU0laRVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgbGV0IHRlcnJhaW4gPSBlbmdpbmUud29ybGQuZGVzY3JpYmVUZXJyYWluKGNlbGxYLCBjZWxsWSlcclxuICAgICAgICBsZXQgaXRlbSA9IGVuZ2luZS53b3JsZC5kZXNjcmliZU9iamVjdChjZWxsWCwgY2VsbFkpXHJcbiAgICAgICAgZW5naW5lLmh1ZC5zZXRIb3Zlck1lc3NhZ2UoW2l0ZW0sIHRlcnJhaW5dLmpvaW4oJyAtLSAnKSlcclxuXHJcbiAgICAgICAgaWYgKGVuZ2luZS53b3JsZC50ZXJyYWluLmF0KGNlbGxYLCBjZWxsWSkgPT0gR1JBU1MpIHtcclxuICAgICAgICAgIHRoaXMuY29sb3IgPSBDb2xvci5CbGFja1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuUmVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59ICIsImltcG9ydCAqIGFzIGV4IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gJy4uLy4uL3Jlc291cmNlcyc7XHJcbmltcG9ydCB7IFBFQVNBTlRfV0FMS19SSUdIVCwgUEVBU0FOVF9XQUxLX0RPV04sIFBFQVNBTlRfV0FMS19MRUZULCBQRUFTQU5UX1dBTEtfVVAsIFBFQVNBTlRfSURMRSwgTk9SVEgsIFdFU1QsIFNPVVRILCBFQVNULCBQRUFTQU5UX0ZBQ0VfTEVGVCwgUEVBU0FOVF9GQUNFX1JJR0hULCBQRUFTQU5UX0ZBQ0VfRE9XTiwgUEVBU0FOVF9GQUNFX1VQLCBPVkVSV09STERfQ0VMTF9TSVpFLCBXQVRFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEVuZ2luZSwgQWN0b3IsIFZlY3RvciB9IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgYWRqdXN0UG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGlyZWN0aW9uJztcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9wb3NpdGlvbic7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi8uLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBY3RvciB7XHJcbiAgX2dhbWU6IEdhbWVcclxuICB3b3JsZFBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uID0gWzAsIDBdIGFzIFdvcmxkUG9zaXRpb25cclxuICBtb3Zpbmc/OiBEaXJlY3Rpb24gPSBudWxsXHJcbiAgZmFjaW5nPzogRGlyZWN0aW9uID0gbnVsbFxyXG4gIHdhbGtTcGVlZDogbnVtYmVyID0gMzUwXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBjb2xvcjogbmV3IGV4LkNvbG9yKDI1NSwgMjU1LCAyNTUpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYW5jaG9yID0gbmV3IFZlY3RvcigwLjUsMSkgLy8wLjUpXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoZ2FtZTogR2FtZSkge1xyXG4gICAgY29uc3Qgd2Fsa1JpZ2h0ID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0QW5pbWF0aW9uQmV0d2VlbihnYW1lLCAwLCA0LCAxMjUpXHJcbiAgICBjb25zdCB3YWxrRG93biA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldEFuaW1hdGlvbkJldHdlZW4oZ2FtZSwgNCwgOCwgMTI1KVxyXG4gICAgY29uc3Qgd2Fsa0xlZnQgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRBbmltYXRpb25CZXR3ZWVuKGdhbWUsIDgsIDEyLCAxMjUpXHJcbiAgICBjb25zdCB3YWxrVXAgPSBTcHJpdGVTaGVldHMuUGVhc2FudC5nZXRBbmltYXRpb25CZXR3ZWVuKGdhbWUsIDEyLCAxNiwgMTI1KVxyXG4gICAgY29uc3QgaWRsZSA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSg0KVxyXG4gICAgY29uc3QgZmFjZVJpZ2h0ID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0U3ByaXRlKDApXHJcbiAgICBjb25zdCBmYWNlTGVmdCA9IFNwcml0ZVNoZWV0cy5QZWFzYW50LmdldFNwcml0ZSg4KVxyXG4gICAgY29uc3QgZmFjZVVwID0gU3ByaXRlU2hlZXRzLlBlYXNhbnQuZ2V0U3ByaXRlKDEyKVxyXG5cclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX1dBTEtfUklHSFQsIHdhbGtSaWdodClcclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX1dBTEtfRE9XTiwgd2Fsa0Rvd24pXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9XQUxLX0xFRlQsIHdhbGtMZWZ0KVxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfV0FMS19VUCwgd2Fsa1VwKVxyXG5cclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX0ZBQ0VfUklHSFQsIGZhY2VSaWdodClcclxuICAgIHRoaXMuYWRkRHJhd2luZyhQRUFTQU5UX0ZBQ0VfTEVGVCwgZmFjZUxlZnQpXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX1VQLCBmYWNlVXApXHJcbiAgICB0aGlzLmFkZERyYXdpbmcoUEVBU0FOVF9GQUNFX0RPV04sIGlkbGUpXHJcblxyXG4gICAgdGhpcy5hZGREcmF3aW5nKFBFQVNBTlRfSURMRSwgaWRsZSlcclxuXHJcbiAgICB0aGlzLl9nYW1lID0gZ2FtZVxyXG4gICAgdGhpcy5pZGxlKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuTW92ZShkaXJlY3Rpb246IERpcmVjdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IFt4LHldID0gYWRqdXN0UG9zaXRpb24odGhpcy53b3JsZFBvc2l0aW9uLCBkaXJlY3Rpb24pXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZS53b3JsZC5pc1Bvc2l0aW9uQ2xlYXIoeCx5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICBpZiAodGhpcy5jYW5Nb3ZlKGRpcmVjdGlvbikpIHtcclxuICAgICAgICB0aGlzLnNldE1vdmluZyhkaXJlY3Rpb24pXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGFkanVzdFBvc2l0aW9uKHRoaXMud29ybGRQb3NpdGlvbiwgZGlyZWN0aW9uKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuYWN0aW9ucy5tb3ZlVG8oXHJcbiAgICAgICAgICB0YXJnZXRbMF0gKiBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICAgICAgdGFyZ2V0WzFdICogT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgICAgIHRoaXMud2Fsa1NwZWVkXHJcbiAgICAgICAgKS5hc1Byb21pc2UoKVxyXG4gICAgICAgIHRoaXMud29ybGRQb3NpdGlvbiA9IHRhcmdldFxyXG4gICAgICAgIHRoaXMubW92aW5nID0gbnVsbFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG5vdCBtb3ZpbmcsIGJ1dCBjYW4ndCBtb3ZlIHRoaXMgZGlyZWN0aW9uIC0tIGZhY2UgaXRcclxuICAgICAgICB0aGlzLnNldEZhY2luZyhkaXJlY3Rpb24pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2Fubm90IG1vdmUgcGxheWVyIC0tIGFscmVhZHkgbW92aW5nXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWNpbmdBbmltcyA9IHtcclxuICAgIFtXRVNUXTogUEVBU0FOVF9GQUNFX0xFRlQsXHJcbiAgICBbRUFTVF06IFBFQVNBTlRfRkFDRV9SSUdIVCxcclxuICAgIFtOT1JUSF06IFBFQVNBTlRfRkFDRV9VUCxcclxuICAgIFtTT1VUSF06IFBFQVNBTlRfRkFDRV9ET1dOLFxyXG4gIH1cclxuXHJcbiAgLy8gc3dpbUZhY2luZ0FuaW1zID0ge1xyXG4gIC8vIH1cclxuXHJcbiAgc2V0RmFjaW5nKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmZhY2luZyA9IGRpcmVjdGlvbjtcclxuICAgIGxldCBbeCx5XSA9IHRoaXMud29ybGRQb3NpdGlvblxyXG4gICAgaWYgKHRoaXMuX2dhbWUud29ybGQudGVycmFpbi5hdCh4LHkpID09IFdBVEVSKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyh0aGlzLmZhY2luZ0FuaW1zW2RpcmVjdGlvbl0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcodGhpcy5mYWNpbmdBbmltc1tkaXJlY3Rpb25dKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TW92aW5nKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLm1vdmluZyA9IGRpcmVjdGlvblxyXG4gICAgLy8gdGhpcy5mYWNlKGRpcmVjdGlvbilcclxuICAgIHRoaXMuZmFjaW5nID0gZGlyZWN0aW9uXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBOT1JUSCkge1xyXG4gICAgICB0aGlzLnNldERyYXdpbmcoUEVBU0FOVF9XQUxLX1VQKVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFdFU1QpIHtcclxuICAgICAgdGhpcy5zZXREcmF3aW5nKFBFQVNBTlRfV0FMS19MRUZUKVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFNPVVRIKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX1dBTEtfRE9XTilcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBFQVNUKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX1dBTEtfUklHSFQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZGxlKCkge1xyXG4gICAgdGhpcy5mYWNpbmcgPSBTT1VUSFxyXG4gICAgLy8gaWYgKHRoaXMuX2dhbWUubG9hZClcclxuICAgIHRoaXMuc2V0RHJhd2luZyhQRUFTQU5UX0lETEUpXHJcbiAgfVxyXG5cclxuICBnZXQgc3dpbW1pbmcoKSB7XHJcbiAgICBsZXQgW3gseV0gPSB0aGlzLndvcmxkUG9zaXRpb25cclxuICAgIHJldHVybiB0aGlzLl9nYW1lLndvcmxkLnRlcnJhaW4uYXQoeCx5KSA9PSBXQVRFUjtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFjdG9yLCBWZWN0b3IsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBPVkVSV09STERfQ0VMTF9TSVpFLCBQUk9HUkVTU19BTklNX0xFTkdUSCwgUFJPR1JFU1NfSU5URVJWQUwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gXCIuLi9yZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIC8vIHBvczogbmV3IFZlY3RvcigwLDApLFxyXG4gICAgICB3aWR0aDogT1ZFUldPUkxEX0NFTExfU0laRSwgLy8qIDIsXHJcbiAgICAgIGhlaWdodDogT1ZFUldPUkxEX0NFTExfU0laRSwgLy8gKiAyLFxyXG4gICAgICBjb2xvcjogbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpLFxyXG4gICAgICBhbmNob3I6IG5ldyBWZWN0b3IoMC41LDAuNSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkluaXRpYWxpemUoZW5naW5lOiBHYW1lKSB7XHJcbiAgICB0aGlzLmFkZERyYXdpbmcoJ3Byb2dyZXNzJywgU3ByaXRlU2hlZXRzLlByb2dyZXNzLmdldEFuaW1hdGlvbkZvckFsbChcclxuICAgICAgZW5naW5lLFxyXG4gICAgICAoUFJPR1JFU1NfSU5URVJWQUwgLyBQUk9HUkVTU19BTklNX0xFTkdUSCkgKyAxMCAvLyBtaWxsaXNlY29uZHMgcGVyIGZyYW1lLi4uXHJcbiAgICApKVxyXG4gICAgdGhpcy5zZXREcmF3aW5nKCdwcm9ncmVzcycpXHJcbiAgICAvLyB0aGlzLnZpc2libGUgPSBmYWxzZVxyXG4gIH1cclxufSIsIlxyXG4vLyBzY2VuZXNcclxuZXhwb3J0IGNvbnN0IE9WRVJXT1JMRCA9ICdvdmVyd29ybGQnXHJcblxyXG5leHBvcnQgY29uc3QgT1ZFUldPUkxEX0NFTExfU0laRSA9IDY0O1xyXG5cclxuLy8gYW5pbXNcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfV0FMS19SSUdIVCA9ICdwZWFzYW50L3dhbGtfcmlnaHQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX1dBTEtfTEVGVCA9ICdwZWFzYW50L3dhbGtfbGVmdCdcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfV0FMS19ET1dOID0gJ3BlYXNhbnQvd2Fsa19kb3duJ1xyXG5leHBvcnQgY29uc3QgUEVBU0FOVF9XQUxLX1VQID0gJ3BlYXNhbnQvd2Fsa191cCdcclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfRkFDRV9SSUdIVCA9ICdwZWFzYW50L2ZhY2VfcmlnaHQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfTEVGVCA9ICAncGVhc2FudC9mYWNlX2xlZnQnXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfRE9XTiA9ICAncGVhc2FudC9mYWNlX2Rvd24nXHJcbmV4cG9ydCBjb25zdCBQRUFTQU5UX0ZBQ0VfVVAgPSAgICAncGVhc2FudC9mYWNlX3VwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFQVNBTlRfSURMRSA9ICdwZWFzYW50L2lkbGUnXHJcblxyXG4vLyB0ZXJyYWluXHJcbmV4cG9ydCBjb25zdCBHUkFTUyA9IDA7XHJcbmV4cG9ydCBjb25zdCBXQVRFUiA9IDE7XHJcbmV4cG9ydCBjb25zdCBUUkVFUyA9IDM7XHJcbi8vIGV4cG9ydCBjb25zdCBNT1VOVEFJTiA9IDI7XHJcblxyXG5jb25zdCBBTExfR1JBU1MgPSBbMCwzLDQsNSwyMCw0NF1cclxuY29uc3QgQUxMX1dBVEVSID0gWzEsMiwxN11cclxuLy8gcHJldHR5IHRlcnJhaW5cclxuICAgICAgICAgIC8vIFtzZWxmXSBbZWFzdF0gW3NvdXRoXSBbc291dGhlYXN0XVxyXG5leHBvcnQgY29uc3QgV0FURVJfR1JBU1NfSU5URVJGQUNFID0gW1xyXG4gICAgICBBTExfV0FURVIsICAvLyAwMDAwIC0tIGFsbCB3YXRlclxyXG4gICAgICBbMTFdLCAvLyAwMDAxIC0tIGdyYXNzIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgWzEzXSwgLy8gMDAxMCAtLSBncmFzcyBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzI1XSwgLy8gMDAxMSAtLSBncmFzcyBvbiBib3R0b20gc2lkZVxyXG4gICAgICBbMjddLCAvLyAwMTAwIC0tIGdyYXNzIGF0IHRvcC1yaWdodCBjb3JuZXJcclxuICAgICAgWzE4XSwgLy8gMDEwMSAtLSBncmFzcyBvbiByaWdodCBzaWRlXHJcbiAgICAgIFsxNF0sIC8vIDAxMTAgLS0gZ3Jhc3Mgdy8gZ2FwIGJvdHRvbS1sZWZ0IHRvIHRvcC1yaWdodFxyXG4gICAgICBbMjZdLCAgLy8gMDExMSAtLSB3YXRlciBhdCB0b3AtbGVmdCBjb3JuZXJcclxuICAgICAgWzI5XSwgLy8gMTAwMCAtLSBncmFzcyBhdCB0b3AtbGVmdFxyXG4gICAgICBbMTVdLCAvLyAxMDAxIC0tIGdyYXNzIHcvIGdhcCB0b3AtbGVmdCB0byBib3R0b20tcmlnaHRcclxuICAgICAgWzIxXSwgLy8gMTAxMCAtLSBncmFzcyBvbiBsZWZ0IHNpZGVcclxuICAgICAgWzI0XSwgLy8gMTAxMSAtLSB3YXRlciBhdCB0b3AtcmlnaHQgY29ybmVyXHJcbiAgICAgIFsyOF0sIC8vIDExMDAgLS0gZ3Jhc3Mgb24gdG9wIHNpZGVcclxuICAgICAgWzEwXSwgLy8gMTEwMSAtLSB3YXRlciBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzhdLCAvLyAxMTEwIC0tIHdhdGVyIGF0IGJvdHRvbS1yaWdodCBjb3JuZXJcclxuICAgICAgQUxMX0dSQVNTIC8vIDExMTEgLS0gYWxsIGdyYXNzXHJcbiAgICBdO1xyXG5cclxuICAgICAgLy8gW3NlbGZdIFtlYXN0XSBbc291dGhdIFtzb3V0aGVhc3RdXHJcbmV4cG9ydCBjb25zdCBUUkVFX0dSQVNTX0lOVEVSRkFDRTogbnVtYmVyW11bXSA9IFtcclxuICAgICAgWzQxXSwgICAgIC8vIDAwMDAgLS0gYWxsIHRyZWVcclxuICAgICAgWzM1XSwgICAgIC8vIDAwMDEgLS0gZ3Jhc3MgYXQgYm90dG9tLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbMzddLCAgICAgLy8gMDAxMCAtLSBncmFzcyBhdCBib3R0b20tbGVmdCBjb3JuZXJcclxuICAgICAgWzM2XSwgICAgIC8vIDAwMTEgLS0gZ3Jhc3Mgb24gYm90dG9tIHNpZGVcclxuICAgICAgWzUxXSwgICAgIC8vIDAxMDAgLS0gZ3Jhc3MgYXQgdG9wLXJpZ2h0IGNvcm5lclxyXG4gICAgICBbNDNdLCAgICAgLy8gMDEwMSAtLSBncmFzcyBvbiByaWdodCBzaWRlXHJcbiAgICAgIFszOF0sICAgICAvLyAwMTEwIC0tIGdyYXNzIHcvIGdhcCBib3R0b20tbGVmdCB0byB0b3AtcmlnaHRcclxuICAgICAgWzUwXSwgICAgIC8vIDAxMTEgLS0gdHJlZSBhdCB0b3AtbGVmdCBjb3JuZXJcclxuICAgICAgWzUzXSwgICAgIC8vIDEwMDAgLS0gZ3Jhc3MgYXQgdG9wLWxlZnRcclxuICAgICAgWzM5XSwgICAgIC8vIDEwMDEgLS0gZ3Jhc3Mgdy8gZ2FwIHRvcC1sZWZ0IHRvIGJvdHRvbS1yaWdodFxyXG4gICAgICBbNDVdLCAgICAgLy8gMTAxMCAtLSBncmFzcyBvbiBsZWZ0IHNpZGVcclxuICAgICAgWzQ4XSwgICAgIC8vIDEwMTEgLS0gdHJlZSBhdCB0b3AtcmlnaHQgY29ybmVyXHJcbiAgICAgIFs1Ml0sICAgICAvLyAxMTAwIC0tIGdyYXNzIG9uIHRvcCBzaWRlXHJcbiAgICAgIFszNF0sICAgICAvLyAxMTAxIC0tIHRyZWUgYXQgYm90dG9tLWxlZnQgY29ybmVyXHJcbiAgICAgIFszMl0sICAgICAvLyAxMTEwIC0tIHRyZWUgYXQgYm90dG9tLXJpZ2h0IGNvcm5lclxyXG4gICAgICBBTExfR1JBU1MgLy8gMTExMSAtLSBhbGwgZ3Jhc3NcclxuICAgIF1cclxuXHJcblxyXG4vLyB0aGluZ3MgKGZydWl0IGZvciBub3cuLilcclxuZXhwb3J0IGNvbnN0IE5PVEhJTkcgPSAtMTtcclxuZXhwb3J0IGNvbnN0IEJBTkFOQSA9IDA7XHJcbmV4cG9ydCBjb25zdCBTVFJBV0JFUlJZID0gMTtcclxuZXhwb3J0IGNvbnN0IENPUk4gPSAyO1xyXG5leHBvcnQgY29uc3QgQVBQTEVTID0gMztcclxuZXhwb3J0IGNvbnN0IEdSQVBFUyA9IDQ7XHJcbmV4cG9ydCBjb25zdCBQTFVNID0gNTtcclxuZXhwb3J0IGNvbnN0IEJMVUVCRVJSWSA9IDY7XHJcbmV4cG9ydCBjb25zdCBFR0dQTEFOVCA9IDc7XHJcblxyXG4vLyBpdGVtcyAvIGNvbnN0cnVjdGVkIG9iamVjdHNcclxuZXhwb3J0IGNvbnN0IFdFTEwgPSAwO1xyXG5leHBvcnQgY29uc3QgRklSRSA9IDE7XHJcblxyXG4vLyBzdHJ1Y3R1cmVzXHJcbmV4cG9ydCBjb25zdCBXT09ERU5fV0FMTCA9IDE7XHJcblxyXG5leHBvcnQgY29uc3QgV09PREVOX1dBTExfQ09OTkVDVElPTlMgPSBbXHJcbiAgLy8gbm9ydGggZWFzdCBzb3V0aCB3ZXN0XHJcbiAgNSwgIC8vIDAwMDAgLS0gbm8gY29ubmVjdGlvbnMgXHJcbiAgNSwgIC8vIDAwMDEgLS0gY29ubmVjdGVkIHdlc3RcclxuICAxMCwgIC8vIDAwMTAgLS0gY29ubmVjdGVkIHNvdXRoXHJcbiAgMTUsIC8vIDAwMTEgLS0gY29ubmVjdGVkIHNvdXRoIGFuZCB3ZXN0XHJcbiAgNSwgIC8vIDAxMDAgLS0gY29ubmVjdGVkIGVhc3RcclxuICA1LCAgLy8gMDEwMSAtLSBjb25uZWN0ZWQgZWFzdCBhbmQgd2VzdFxyXG4gIDExLCAvLyAwMTEwIC0tIGNvbm5lY3RlZCBlYXN0IGFuZCBzb3V0aFxyXG4gIDksICAvLyAwMTExIC0tIGNvbm5lY3RlZCBlYXN0LXdlc3QgYW5kIHNvdXRoXHJcbiAgMTQsIC8vIDEwMDAgLS0gY29ubmVjdGVkIG5vcnRoXHJcbiAgMywgIC8vIDEwMDEgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCB3ZXN0XHJcbiAgMTAsIC8vIDEwMTAgLS0gY29ubmVjdGVkIG5vcnRoIGFuZCBzb3V0aFxyXG4gIDEyLCAvLyAxMDExIC0tIGNvbm5lY3RlZCBub3J0aCwgc291dGggYW5kIHdlc3RcclxuICA3LCAgLy8gMTEwMCAtLSBjb25uZWN0ZWQgbm9ydGggYW5kIGVhc3RcclxuICA2LCAgLy8gMTEwMSAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0IGFuZCBub3J0aFxyXG4gIDEzLCAvLyAxMTEwIC0tIGNvbm5lY3RlZCBub3J0aC1zb3V0aCBhbmQgZWFzdFxyXG4gIDgsICAvLyAxMTExIC0tIGFsbCBjb25uZWN0ZWRcclxuXVxyXG5cclxuLy8gZHVyYXRpb24gb2YgaW50ZXJhY3Rpb24gcHJvZ3Jlc3MgKG1pbGxpcylcclxuZXhwb3J0IGNvbnN0IFBST0dSRVNTX0lOVEVSVkFMID0gNTAwXHJcbi8vICMgb2YgY2VsbHMgaW4gcHJvZ3Jlc3MgYW5pbVxyXG5leHBvcnQgY29uc3QgUFJPR1JFU1NfQU5JTV9MRU5HVEggPSAyNFxyXG5cclxuLy8gZGlyZWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTk9SVEggPSAnbm9ydGgnXHJcbmV4cG9ydCBjb25zdCBTT1VUSCA9ICdzb3V0aCdcclxuZXhwb3J0IGNvbnN0IFdFU1QgPSAnd2VzdCdcclxuZXhwb3J0IGNvbnN0IEVBU1QgPSAnZWFzdCdcclxuZXhwb3J0IGNvbnN0IE5PUlRIRUFTVCA9ICdub3J0aGVhc3QnXHJcbmV4cG9ydCBjb25zdCBOT1JUSFdFU1QgPSAnbm9ydGh3ZXN0J1xyXG5leHBvcnQgY29uc3QgU09VVEhFQVNUID0gJ3NvdXRoZWFzdCdcclxuZXhwb3J0IGNvbnN0IFNPVVRIV0VTVCA9ICdzb3V0aHdlc3QnXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYyM2IyY2JiNTQwMzk0ODFmNjA3NGVjNGFiZjdmMjYzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVjYjhmZTI4NzdhY2E0MjhjNTM0MGM2NjQ1MTQyNDg2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmM2IyNWVjODI2ZDhiMjY0ZGU3NThhNGI2Y2ExNTk0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxZmRlM2U0MzNlMTViNmY3YzExZmE4NTdkYTg5MjE1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk0NzU0ZjYyZTBhZTRkMjNkMzg2ZTI0NmY1ZTBjYjZlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRiYjM0ZjE2NzFkZmExNzQxMjBkNjM5YmRhZGUzYWU0LnBuZ1wiOyIsImltcG9ydCAqIGFzIGV4IGZyb20gJ2V4Y2FsaWJ1cic7XHJcbmltcG9ydCB7IFBsYXkgfSBmcm9tICcuL3NjZW5lcy9sZXZlbC1vbmUvcGxheSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vYWN0b3JzL3BsYXllci9wbGF5ZXInO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJy4vYWN0b3JzL2N1cnNvci9jdXJzb3InO1xyXG5pbXBvcnQgeyBPVkVSV09STEQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiQ1JFQVRFIEdBTUUuLi5cIilcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbmNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBQbGF5KGdhbWUpO1xyXG5nYW1lLmFkZChPVkVSV09STEQsIG92ZXJ3b3JsZCk7XHJcblxyXG5sZXQgbG9hZGVyID0gbmV3IGV4LkxvYWRlcigpO1xyXG5sb2FkZXIuc3VwcHJlc3NQbGF5QnV0dG9uID0gdHJ1ZTtcclxuZm9yIChsZXQga2V5IGluIFJlc291cmNlcykge1xyXG4gIGxvYWRlci5hZGRSZXNvdXJjZShSZXNvdXJjZXNba2V5XSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwibG9hZCBnYW1lXCIpXHJcbmdhbWUuc3RhcnQobG9hZGVyKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInN0YXJ0IGdhbWVcIilcclxuICBnYW1lLmdvVG9TY2VuZShPVkVSV09STEQpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3JhbmRcIjtcclxuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgYXZlcmFnZSB9IGZyb20gXCIuLi91dGlsL2F2ZXJhZ2VcIjtcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCIuLi91dGlsL21vZGVcIjtcclxuaW1wb3J0IHsgU09VVEhFQVNULCBOT1JUSFdFU1QsIE5PUlRILCBOT1JUSEVBU1QsIFdFU1QsIEVBU1QsIFNPVVRIV0VTVCwgU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0b2dyYW0ge1xyXG4gIFxyXG4gIC8vIHByaXZhdGUgY2VsbHM6IG51bWJlcltdW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGltczogRGltZW5zaW9ucywgcHVibGljIGNlbGxzOiBudW1iZXJbXVtdID0gW10pIHtcclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB0aGlzLnNldCh4LHksLTEpKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVJvdWdoR3JhaW5lZFZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIGdyYWluOiBudW1iZXIgPSAxNikge1xyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHggJSBncmFpbiA9PT0gMCAmJiB5ICUgZ3JhaW4gPT09IDApIHtcclxuICAgICAgICBsZXQgdmFsID0gcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgICBmb3IgKGxldCBkeCA9IDA7IGR4IDwgZ3JhaW47IGR4KyspIHtcclxuICAgICAgICAgIGZvciAobGV0IGR5ID0gMDsgZHkgPCBncmFpbjsgZHkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WCA9IHggKyBkeFxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IHkgKyBkeVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldID0gdGhpcy5jZWxsc1t0YXJnZXRZXSB8fCBbXVxyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3RhcmdldFldW3RhcmdldFhdID0gdmFsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMuY2VsbHNbeV1beF0gPSB0aGlzLmNlbGxzW01hdGguZmxvb3IoeS9ncmFpbildW01hdGguZmxvb3IoeC9ncmFpbildIC8vcGljayguLi52YWx1ZURpc3RyaWJ1dGlvbilcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAgIC8vIGlmIChwbGFjZUhlcmUpIHtcclxuICAgICAgLy8gfVxyXG4gICAgfSwgKHkpID0+IHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdKVxyXG4gIH1cclxuXHJcbiAgZGlzdHJpYnV0ZVZhbHVlcyh2YWx1ZURpc3RyaWJ1dGlvbjogbnVtYmVyW10sIHNob3VsZFBsYWNlPzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICBsZXQgaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID0gISFzaG91bGRQbGFjZVxyXG4gICAgY29uc29sZS5sb2coXCJCdWlsZCBtYXBcIiwgdGhpcy5uYW1lKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IHBsYWNlSGVyZSA9IGhhc1BsYWNlbWVudFJlc3RyaWN0aW9ucyA/IHNob3VsZFBsYWNlKHgsIHkpIDogdHJ1ZVxyXG4gICAgICBpZiAocGxhY2VIZXJlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsc1t5XVt4XSA9IHBpY2soLi4udmFsdWVEaXN0cmlidXRpb24pXHJcbiAgICAgIH1cclxuICAgIH0sICh5KSA9PiB0aGlzLmNlbGxzW3ldID0gW10pXHJcbiAgfVxyXG5cclxuICBkaXN0cmlidXRlV2l0aGluKHNvdXJjZTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBzb3VyY2VSYXRlOiBudW1iZXIsIHZhbHVlUmF0ZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgcGxhY2VzID0gW11cclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHgseSkgPT0gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVpZ2hib3JzKHgsIHkpLmV2ZXJ5KHZhbCA9PiB2YWwgPT0gc291cmNlKSkge1xyXG4gICAgICAgICAgcGxhY2VzLnB1c2goW3gseV0pXHJcbiAgICAgICAgICAvLyB0aGlzLnNldCh4LHksIHBpY2sodmFsdWUsIHNvdXJjZSkpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgZGlzdHJpYnV0aW9uID0gWy4uLnRpbWVzKHZhbHVlUmF0ZSwgdmFsdWUpLCAuLi50aW1lcyhzb3VyY2VSYXRlLCBzb3VyY2UpXVxyXG4gICAgcGxhY2VzLmZvckVhY2goKFt4LHldKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0KHgseSwgcGljayguLi5kaXN0cmlidXRpb24pKVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb3B5KG5ld05hbWU6IHN0cmluZyk6IENhcnRvZ3JhbSB7XHJcbiAgICBsZXQgbmV3Q2VsbHMgPSBbXSAvL3RoaXMuY2VsbHMuc2xpY2UoKVxyXG4gICAgdGhpcy5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbmV3Q2VsbHNbeV1beF0gPSB0aGlzLmF0KHgsIHkpXHJcbiAgICB9LCAoeSkgPT4gbmV3Q2VsbHNbeV0gPSBbXSlcclxuICAgIC8vIGZvciAoKVxyXG4gICAgbGV0IG5ld01hcCA9IG5ldyBDYXJ0b2dyYW0obmV3TmFtZSwgdGhpcy5kaW1zLCBuZXdDZWxscylcclxuICAgIC8vIHRoaXMuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiBcclxuICAgIC8vICAgbmV3TWFwLnNldCh4LHksdGhpcy5hdCh4LHkpKVxyXG4gICAgLy8gICAvLyBsZXQgcGxhY2VIZXJlID0gaGFzUGxhY2VtZW50UmVzdHJpY3Rpb25zID8gc2hvdWxkUGxhY2UoeCwgeSkgOiB0cnVlXHJcbiAgICAvLyApXHJcbiAgICByZXR1cm4gbmV3TWFwO1xyXG4gIH1cclxuXHJcbiAgYXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgcmV0dXJuIHRoaXMuY2VsbHNbeV0gJiYgdGhpcy5jZWxsc1t5XVt4XSB9XHJcblxyXG4gIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5jZWxsc1t5XSA9IHRoaXMuY2VsbHNbeV0gfHwgW11cclxuICAgIHRoaXMuY2VsbHNbeV1beF0gPSB2YWx1ZVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzbW9vdGgocm91bmRzOiBudW1iZXIgPSAzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBuZXdDZWxsczogbnVtYmVyW11bXSA9IFtdXHJcbiAgICAgIHRoaXMuZWFjaFBvc2l0aW9uKCh4LHkpID0+IHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IHRoaXMuYXQoeCx5KVxyXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSB0aGlzLm5laWdoYm9ycyh4LHkpXHJcbiAgICAgICAgbGV0IG1vZGFsVmFsdWUgPSBtb2RlKG9yaWdpbmFsVmFsdWUsIC4uLm5laWdoYm9ycylcclxuICAgICAgICBuZXdDZWxsc1t5XVt4XSA9IHBpY2soLi4udGltZXMoMTMsIG1vZGFsVmFsdWUpLCAuLi5uZWlnaGJvcnMsIG9yaWdpbmFsVmFsdWUpXHJcbiAgICAgIH0sICh5KSA9PiBuZXdDZWxsc1t5XSA9IFtdKVxyXG4gICAgICB0aGlzLmNlbGxzID0gbmV3Q2VsbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlYWNoUG9zaXRpb24oZWFjaENlbGxDYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkLCBlYWNoUm93Q2FsbGJhY2s/OiAoeTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuZGltcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBlYWNoUm93Q2FsbGJhY2sgJiYgZWFjaFJvd0NhbGxiYWNrKHkpXHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kaW1zLndpZHRoOyB4KyspIHtcclxuICAgICAgICBlYWNoQ2VsbENhbGxiYWNrKHgseSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc3RhdGljIG5laWdoYm9yRGlyZWN0aW9ucyA9IHsgTk9SVEhXRVNUOiAwLCAgTk9SVEg6IDEsIE5PUlRIRUFTVDogMiwgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV0VTVDogMywgRUFTVDogNSxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT1VUSFdFU1Q6IDYsIFNPVVRIOiA3LCBTT1VUSEVBU1Q6IDggfVxyXG4gIC8vIG5laWdoYm9yUG9zaXRpb25zKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gIC8vICAgcmV0dXJuIFtcclxuICAvLyAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gIC8vICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgLy8gICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gIC8vICAgXVxyXG4gIC8vICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gIC8vICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgLy8gfSBcclxuICBuZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgcmV0dXJuIFtcclxuICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4LCB5IC0gMV0sIFt4ICsgMSwgeSAtIDFdLFxyXG4gICAgICBbeCAtIDEsIHldLCAsIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLCBbeCwgeSArIDFdLCBbeCArIDEsIHkgKyAxXVxyXG4gICAgXVxyXG4gICAgICAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBsYWJlbGxlZE5laWdoYm9ycyh4OiBudW1iZXIsIHk6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXMuYXQoeCx5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW05PUlRIV0VTVF06IHRoaXMuYXQoeCAtIDEsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhdOiB0aGlzLmF0KHgsIHkgLSAxKSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbTk9SVEhFQVNUXTogdGhpcy5hdCh4ICsgMSwgeSAtIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgW0VBU1RdOiB0aGlzLmF0KHggKyAxLCB5KSwgLy8gfHwgc2VsZiwgLy8gfHwgZGVmYXVsdFZhbHVlLFxyXG4gICAgICBbU09VVEhXRVNUXTogdGhpcy5hdCh4IC0gMSwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSF06IHRoaXMuYXQoeCwgeSArIDEpLCAvLyB8fCBzZWxmLCAvLyB8fCBkZWZhdWx0VmFsdWUsXHJcbiAgICAgIFtTT1VUSEVBU1RdOiB0aGlzLmF0KHggKyAxLCB5ICsgMSksIC8vIHx8IHNlbGYsIC8vIHx8IGRlZmF1bHRWYWx1ZVxyXG4gICAgfVxyXG4gICAgICAvLyAuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMud2l0aGluQm91bmRzKHgsIHkpKVxyXG4gICAgICAvLyAubWFwKChbeCwgeV0pID0+IHRoaXMuY2VsbHNbeV1beF0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgd2l0aGluQm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLmRpbXMud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmRpbXMuaGVpZ2h0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5PUlRILCBTT1VUSCwgV0VTVCwgRUFTVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSB0eXBlb2YgTk9SVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgU09VVEhcclxuICAgICAgICAgICAgICAgfCB0eXBlb2YgV0VTVFxyXG4gICAgICAgICAgICAgICB8IHR5cGVvZiBFQVNUXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0UG9zaXRpb24ocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgbGV0IFt4LHldID0gcG9zaXRpb25cclxuICBpZiAoZGlyZWN0aW9uID09PSBOT1JUSCkge1xyXG4gICAgcmV0dXJuIFt4LCB5LTFdIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gV0VTVCkge1xyXG4gICAgcmV0dXJuIFt4LTEsIHldIGFzIFdvcmxkUG9zaXRpb25cclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gU09VVEgpIHtcclxuICAgIHJldHVybiBbeCwgeSsxXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IEVBU1QpIHtcclxuICAgIHJldHVybiBbeCsxLCB5XSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlyZWN0aW9uIHRvIGFkanVzdFBvc2l0aW9uOiBcIiArIGRpcmVjdGlvbilcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4vZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBDYXJ0b2dyYW0gfSBmcm9tIFwiLi9DYXJ0b2dyYW1cIjtcclxuLy8gaW1wb3J0IHsgR1JBU1MsIFdBVEVSLCBNT1VOVEFJTiwgTk9USElORywgR1JBUEVTLCBCQU5BTkEsIEFQUExFUywgUExVTSwgQkxVRUJFUlJZLCBTT1VUSCwgTk9SVEgsIFdBVEVSX1dJVEhfR1JBU1NfU09VVEgsIE5PUlRIRUFTVCwgU09VVEhFQVNULCBFQVNULCBXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRILCBXQVRFUl9XSVRIX0dSQVNTX1dFU1QsIFdBVEVSX1dJVEhfR1JBU1NfRUFTVCwgTk9SVEhXRVNULCBTT1VUSFdFU1QsIEdSQVNTX1dJVEhfV0FURVJfU09VVEhXRVNULCBHUkFTU19XSVRIX1dBVEVSX1NPVVRIRUFTVCwgR1JBU1NfV0lUSF9XQVRFUl9OT1JUSEVBU1QsIEdSQVNTX1dJVEhfV0FURVJfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX05PUlRIRUFTVCwgV0FURVJfV0lUSF9HUkFTU19TT1VUSEVBU1QsIFdBVEVSX1dJVEhfR1JBU1NfTk9SVEhXRVNULCBXQVRFUl9XSVRIX0dSQVNTX1NPVVRIV0VTVCwgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElORywgR1JBU1NfV0lUSF9XQVRFUl9TVVJST1VORElOR19CUklER0VfU09VVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9yYW5kXCI7XHJcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSBcIi4uL3V0aWwvdGltZXNcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEdSQVNTLCBXQVRFUiwgTk9SVEgsIEVBU1QsIFNPVVRILCBXRVNULCBOT1RISU5HLCBCQU5BTkEsIEdSQVBFUywgQVBQTEVTLCBQTFVNLCBCTFVFQkVSUlksIFNPVVRIRUFTVCwgVFJFRVMsIFdBVEVSX0dSQVNTX0lOVEVSRkFDRSwgVFJFRV9HUkFTU19JTlRFUkZBQ0UsIENPUk4sIFNUUkFXQkVSUlksIFdPT0RFTl9XQUxMLCBXT09ERU5fV0FMTF9DT05ORUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgdGVycmFpbjogQ2FydG9ncmFtXHJcbiAgdGhpbmdzOiBDYXJ0b2dyYW1cclxuICBzdHJ1Y3R1cmU6IENhcnRvZ3JhbVxyXG5cclxuICBwcmV0dHlUZXJyYWluOiBDYXJ0b2dyYW1cclxuICBwcmV0dHlTdHJ1Y3R1cmU6IENhcnRvZ3JhbVxyXG5cclxuICBjb25zdHJ1Y3RvcihkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlUmF3VGVycmFpbihkaW1zKVxyXG4gICAgdGhpcy5wcmV0dHlUZXJyYWluID0gbmV3IENhcnRvZ3JhbSgncHJldHR5VGVycmFpbicsIGRpbXMpIC8vdGhpcy50ZXJyYWluLmNvcHkoJ3ByZXR0eVRlcnJhaW4nKVxyXG4gICAgdGhpcy5hc3NlbWJsZVByZXR0eVRlcnJhaW4oKVxyXG5cclxuICAgIC8vIGRpc3RyaWJ1dGUgdGhpbmdzXHJcbiAgICBsZXQgdGhpbmdEaXN0cmlidXRpb24gPSBbXHJcbiAgICAgIC4uLnRpbWVzKDEwLCBOT1RISU5HKSxcclxuICAgICAgLi4udGltZXMoMSwgQkFOQU5BKSxcclxuICAgICAgLi4udGltZXMoMiwgR1JBUEVTKSxcclxuICAgICAgLi4udGltZXMoMywgQVBQTEVTKSxcclxuICAgICAgLi4udGltZXMoMSwgUExVTSksXHJcbiAgICAgIC4uLnRpbWVzKDEsIEJMVUVCRVJSWSksXHJcbiAgICAgIC4uLnRpbWVzKDIsIENPUk4pLFxyXG4gICAgICAuLi50aW1lcygzLCBTVFJBV0JFUlJZKSxcclxuICAgIF1cclxuICAgIHRoaXMudGhpbmdzID0gbmV3IENhcnRvZ3JhbSgndGhpbmdzJywgZGltcylcclxuICAgIHRoaXMudGhpbmdzLmRpc3RyaWJ1dGVWYWx1ZXMoXHJcbiAgICAgIHRoaW5nRGlzdHJpYnV0aW9uLFxyXG4gICAgICAoeCx5KSA9PiBcclxuICAgICAgdGhpcy50ZXJyYWluLmF0KHgseSkgPT0gR1JBU1MgJiZcclxuICAgICAgICB0aGlzLnRlcnJhaW4ubmVpZ2hib3JzKHgseSkuZXZlcnkoY2VsbCA9PiBjZWxsID09IEdSQVNTKVxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RydWN0dXJlID0gbmV3IENhcnRvZ3JhbSgnc3RydWN0dXJlJywgZGltcylcclxuICAgIHRoaXMucHJldHR5U3RydWN0dXJlID0gbmV3IENhcnRvZ3JhbSgncHJldHR5U3RydWN0dXJlJywgZGltcylcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMudGVycmFpbi5kaW1zLndpZHRoIH1cclxuICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy50ZXJyYWluLmRpbXMuaGVpZ2h0IH1cclxuXHJcbiAgc3RhdGljIGdlbigpOiBXb3JsZCB7XHJcbiAgICBsZXQgd29ybGQgPSBuZXcgV29ybGQoeyB3aWR0aDogMjU2LCBoZWlnaHQ6IDI1NiB9KVxyXG4gICAgcmV0dXJuIHdvcmxkXHJcbiAgfVxyXG5cclxuICBkZXNjcmliZVRlcnJhaW4oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRlcnJhaW4gPSB0aGlzLnRlcnJhaW4uYXQoeCx5KVxyXG4gICAgaWYgKHRlcnJhaW4gPT0gR1JBU1MpIHtcclxuICAgICAgcmV0dXJuICdncmFzcydcclxuICAgIH0gZWxzZSBpZiAodGVycmFpbiA9PSBXQVRFUikge1xyXG4gICAgICByZXR1cm4gJ3dhdGVyJ1xyXG4gICAgfSBlbHNlIGlmICh0ZXJyYWluID09IFRSRUVTKSB7XHJcbiAgICAgIHJldHVybiAnZm9yZXN0J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICc/Pz8nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXNjcmliZU9iamVjdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgbGV0IGl0ID0gdGhpcy50aGluZ3MuYXQoeCx5KVxyXG4gICAgaWYgKGl0ID09IE5PVEhJTkcgfHwgaXQgPT0gdW5kZWZpbmVkKSB7IHJldHVybiAnJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBCQU5BTkEpIHsgcmV0dXJuICdiYW5hbmEnIH1cclxuICAgIGVsc2UgaWYgKGl0ID09IEdSQVBFUykgeyByZXR1cm4gJ2dyYXBlcycgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQkxVRUJFUlJZKSB7IHJldHVybiAnYmx1ZWJlcnJ5JyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBDT1JOKSB7IHJldHVybiAnY29ybicgfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gU1RSQVdCRVJSWSkgeyByZXR1cm4gJ3N0cmF3YmVycnknfVxyXG4gICAgZWxzZSBpZiAoaXQgPT0gQVBQTEVTKSB7IHJldHVybiAnYXBwbGVzJyB9XHJcbiAgICBlbHNlIGlmIChpdCA9PSBQTFVNKSB7IHJldHVybiAncGx1bScgfVxyXG4gICAgZWxzZSB7IHJldHVybiAnPz8/IFsnICsgaXQgKyAnXSd9XHJcblxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBjaG9wVHJlZUF0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNob3AgdHJlZSBhdCB0YXJnZXQ6IFwiICsgeCArIFwiLCBcIiArIHkpXHJcbiAgICB0aGlzLnRlcnJhaW4uc2V0KHgseSxHUkFTUylcclxuICAgIC8vIHRoaXMuYXNzZW1ibGVQcmV0dHlUZXJyYWluKClcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhUUkVFX0dSQVNTX0lOVEVSRkFDRSwgVFJFRVMsIEdSQVNTKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBidWlsZFdvb2RlbldhbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYnVpbGQgd2FsbCBhdCBcIiArIHggKyBcIiwgXCIgKyB5KVxyXG4gICAgdGhpcy5zdHJ1Y3R1cmUuc2V0KHgseSxXT09ERU5fV0FMTClcclxuICAgIHRoaXMuYmVhdXRpZnlTdHJ1Y3R1cmVJbnRlcmZhY2VzKFdPT0RFTl9XQUxMX0NPTk5FQ1RJT05TLCBXT09ERU5fV0FMTClcclxuICAgIC8vIHRoaXMucHJldHRpZnlcclxuICAgIC8vIHRoaXMuYXNzZW1ibGVQcmV0dFxyXG4gICAgLy8gdGhpcy5zdHJ1Y3R1cmVcclxuICB9XHJcbiAgXHJcblxyXG4gIGdlbmVyYXRlUmF3VGVycmFpbihkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICBsZXQgdGVycmFpbkRpc3RyaWJ1dGlvbiA9IFtcclxuICAgICAgLi4udGltZXMoMTgsIEdSQVNTKSwgXHJcbiAgICAgIC4uLnRpbWVzKDEzLCBXQVRFUiksXHJcbiAgICAgIC8vIC4uLnRpbWVzKDExLCBNT1VOVEFJTilcclxuICAgIF1cclxuICAgIHRoaXMudGVycmFpbiA9IG5ldyBDYXJ0b2dyYW0oJ3RlcnJhaW4nLCBkaW1zKVxyXG4gICAgLy8gdGhpcy50ZXJyYWluLmRpc3RyaWJ1dGVWYWx1ZXModGVycmFpbkRpc3RyaWJ1dGlvbilcclxuICAgIHRoaXMudGVycmFpbi5kaXN0cmlidXRlUm91Z2hHcmFpbmVkVmFsdWVzKHRlcnJhaW5EaXN0cmlidXRpb24sIDgpXHJcbiAgICB0aGlzLnRlcnJhaW4uc21vb3RoKDgpXHJcbiAgICB0aGlzLnRlcnJhaW4uZGlzdHJpYnV0ZVdpdGhpbihHUkFTUywgVFJFRVMsIDIxLCAxNSlcclxuICB9XHJcblxyXG4gIGJlYXV0aWZ5VGVycmFpbkludGVyZmFjZXMoaW5kaWNlczogbnVtYmVyW11bXSwgdGVycmFpbk9uZTogbnVtYmVyLCB0ZXJyYWluVHdvOiBudW1iZXIpIHtcclxuICAgIHRoaXMucHJldHR5VGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzLnRlcnJhaW4uYXQoeCwgeSlcclxuICAgICAgbGV0IG5laWdoYm9ycyA9IHRoaXMudGVycmFpbi5sYWJlbGxlZE5laWdoYm9ycyh4LCB5KVxyXG4gICAgICBsZXQgZWFzdCA9IG5laWdoYm9yc1tFQVNUXVxyXG4gICAgICBsZXQgc291dGggPSBuZWlnaGJvcnNbU09VVEhdXHJcbiAgICAgIGxldCBzb3V0aGVhc3QgPSBuZWlnaGJvcnNbU09VVEhFQVNUXVxyXG4gICAgICBsZXQgZ3JvdXAgPSBbc2VsZiwgZWFzdCwgc291dGgsIHNvdXRoZWFzdF1cclxuXHJcbiAgICAgIGlmIChncm91cC5ldmVyeSh2YWwgPT4gdmFsID09IHRlcnJhaW5PbmUgfHwgdmFsID09IHRlcnJhaW5Ud28pKSB7XHJcbiAgICAgICAgbGV0IG1hc2sgPVxyXG4gICAgICAgICAgKHRoaXMudGVycmFpbi5hdCh4LCB5KSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogOCArXHJcbiAgICAgICAgICAobmVpZ2hib3JzW0VBU1RdID09IHRlcnJhaW5PbmUgPyAwIDogMSkgKiA0ICtcclxuICAgICAgICAgIChuZWlnaGJvcnNbU09VVEhdID09IHRlcnJhaW5PbmUgPyAwIDogMSkgKiAyICtcclxuICAgICAgICAgIChuZWlnaGJvcnNbU09VVEhFQVNUXSA9PSB0ZXJyYWluT25lID8gMCA6IDEpICogMVxyXG4gICAgICAgIHRoaXMucHJldHR5VGVycmFpbi5zZXQoeCwgeSwgcGljayguLi5pbmRpY2VzW21hc2tdKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzc2VtYmxlUHJldHR5VGVycmFpbigpIHtcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhXQVRFUl9HUkFTU19JTlRFUkZBQ0UsIFdBVEVSLCBHUkFTUylcclxuICAgIHRoaXMuYmVhdXRpZnlUZXJyYWluSW50ZXJmYWNlcyhUUkVFX0dSQVNTX0lOVEVSRkFDRSwgVFJFRVMsIEdSQVNTKVxyXG4gIH1cclxuXHJcbiAgYmVhdXRpZnlTdHJ1Y3R1cmVJbnRlcmZhY2VzKGluZGljZXM6IG51bWJlcltdLCBzdHJ1Y3R1cmU6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV0dHlTdHJ1Y3R1cmUuZWFjaFBvc2l0aW9uKCh4LHkpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzLnN0cnVjdHVyZS5hdCh4LHkpXHJcbiAgICAgIGlmIChzZWxmID09IHN0cnVjdHVyZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmVhdXRpZnkgc3RydWN0dXJlIFwiICsgc3RydWN0dXJlICsgXCIgYXQgXCIgKyB4ICsgXCIsIFwiICsgeSlcclxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gdGhpcy5zdHJ1Y3R1cmUubGFiZWxsZWROZWlnaGJvcnMoeCx5KVxyXG4gICAgICAgIGxldCBub3J0aCA9IG5laWdoYm9yc1tOT1JUSF1cclxuICAgICAgICBsZXQgc291dGggPSBuZWlnaGJvcnNbU09VVEhdXHJcbiAgICAgICAgbGV0IGVhc3QgPSBuZWlnaGJvcnNbRUFTVF1cclxuICAgICAgICBsZXQgd2VzdCA9IG5laWdoYm9yc1tXRVNUXVxyXG5cclxuICAgICAgICBsZXQgbWFzayA9IChub3J0aCA9PSBzdHJ1Y3R1cmUgPyAxIDogMCkgKiA4ICtcclxuICAgICAgICAgICAgICAgICAgIChlYXN0ID09IHN0cnVjdHVyZSA/IDEgOiAwKSAqIDQgK1xyXG4gICAgICAgICAgICAgICAgICAgKHNvdXRoID09IHN0cnVjdHVyZSA/IDEgOiAwKSAqIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgKHdlc3QgPT0gc3RydWN0dXJlID8gMSA6IDApICogMVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbnNcIiwgeyBub3J0aCwgc291dGgsIGVhc3QsIHdlc3R9LCBcIi0tLT5cIiwgbWFzaylcclxuICAgICAgICB0aGlzLnByZXR0eVN0cnVjdHVyZS5zZXQoeCx5LGluZGljZXNbbWFza10pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gXHJcbiAgaXNQb3NpdGlvbkNsZWFyKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgdGVycmFpbiA9IHRoaXMudGVycmFpbi5hdCh4LHkpXHJcbiAgICBsZXQgdGhpbmcgPSB0aGlzLnRoaW5ncy5hdCh4LCB5KVxyXG4gICAgbGV0IGJ1aWxkaW5nID0gdGhpcy5zdHJ1Y3R1cmUuYXQoeCx5KVxyXG4gICAgbGV0IGlzQ2xlYXIgPSAodGVycmFpbiA9PSBHUkFTUykgLy8gfHwgdGVycmFpbiA9PSBUUkVFUylcclxuICAgICAgICAmJiAodGhpbmcgPT0gTk9USElORyB8fCB0aGluZyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgJiYgKGJ1aWxkaW5nID09IE5PVEhJTkcgfHwgYnVpbGRpbmcgPT0gdW5kZWZpbmVkKVxyXG5cclxuICAgIHJldHVybiBpc0NsZWFyXHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZG9tQ2xlYXJQb3NpdGlvbigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGxldCBtYXRjaGluZ1Bvc2l0aW9uczogW251bWJlciwgbnVtYmVyXVtdID0gW11cclxuICAgIHRoaXMudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3NpdGlvbkNsZWFyKHgseSkpIHtcclxuICAgICAgICBtYXRjaGluZ1Bvc2l0aW9ucy5wdXNoKFt4LHldKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHBpY2soLi4ubWF0Y2hpbmdQb3NpdGlvbnMpIGFzIFdvcmxkUG9zaXRpb25cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgT1ZFUldPUkxEX0NFTExfU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuY29uc3Qgc3dvcmQgPSByZXF1aXJlKCcuL2ltYWdlcy9zd29yZC5wbmcnKTtcclxuY29uc3QgZnJ1aXQgPSByZXF1aXJlKCcuL2ltYWdlcy9mcnVpdC5wbmcnKTtcclxuY29uc3QgdGVycmFpbiA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4tZGVlcC5wbmcnKTtcclxuLy8gY29uc3QgdGVycmFpblNtb290aCA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4ucG5nJyk7XHJcbmNvbnN0IHBlYXNhbnQgPSByZXF1aXJlKCcuL2ltYWdlcy9wZWFzYW50LnBuZycpO1xyXG5jb25zdCBwcm9ncmVzcyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3Byb2dyZXNzLnBuZycpXHJcbmNvbnN0IHN0cnVjdHVyZSA9IHJlcXVpcmUoJy4vaW1hZ2VzL3N0cnVjdHVyZS5wbmcnKVxyXG5cclxubGV0IFJlc291cmNlcyA9IHtcclxuICBTd29yZDogbmV3IGV4LlRleHR1cmUoc3dvcmQpLFxyXG4gIEZydWl0OiBuZXcgZXguVGV4dHVyZShmcnVpdCksXHJcbiAgVGVycmFpbjogbmV3IGV4LlRleHR1cmUodGVycmFpbiksXHJcbiAgUGVhc2FudDogbmV3IGV4LlRleHR1cmUocGVhc2FudCksXHJcbiAgUHJvZ3Jlc3M6IG5ldyBleC5UZXh0dXJlKHByb2dyZXNzKSxcclxuICBTdHJ1Y3R1cmU6IG5ldyBleC5UZXh0dXJlKHN0cnVjdHVyZSksXHJcbn1cclxuXHJcbmxldCBzeiA9IE9WRVJXT1JMRF9DRUxMX1NJWkVcclxubGV0IFNwcml0ZVNoZWV0cyA9IHtcclxuICBGcnVpdDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5GcnVpdCwgNywgMiwgc3osIHN6KSxcclxuICBUZXJyYWluOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRlcnJhaW4sIDgsIDgsIHN6LCBzeiksXHJcbiAgUGVhc2FudDogbmV3IGV4LlNwcml0ZVNoZWV0KFJlc291cmNlcy5QZWFzYW50LCA0LCA0LCBzeiwgc3opLFxyXG4gIFByb2dyZXNzOiBuZXcgZXguU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlByb2dyZXNzLCAxNywgMSwgc3osIHN6KSxcclxuICBTdHJ1Y3R1cmU6IG5ldyBleC5TcHJpdGVTaGVldChSZXNvdXJjZXMuU3RydWN0dXJlLCA0LCA0LCBzeiwgc3opXHJcbn1cclxuXHJcbmV4cG9ydCB7IFJlc291cmNlcywgU3ByaXRlU2hlZXRzIH1cclxuIiwiaW1wb3J0ICogYXMgZXggZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uLy4uL0dhbWUnO1xyXG5pbXBvcnQgeyBOT1RISU5HLCBPVkVSV09STERfQ0VMTF9TSVpFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXRzIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ucyB7XHJcbiAgdGVycmFpblRpbGVzOiBleC5UaWxlTWFwO1xyXG4gIHRoaW5nVGlsZXM6IGV4LlRpbGVNYXA7XHJcbiAgc3RydWN0dXJlVGlsZXM6IGV4LlRpbGVNYXA7XHJcblxyXG4gIGdldCB0aWxlbWFwcygpIHsgcmV0dXJuIFt0aGlzLnRlcnJhaW5UaWxlcywgdGhpcy50aGluZ1RpbGVzLCB0aGlzLnN0cnVjdHVyZVRpbGVzXTsgfVxyXG4gIGdldCB0ZXJyYWluU291cmNlKCkgeyByZXR1cm4gdGhpcy5nYW1lLndvcmxkLnByZXR0eVRlcnJhaW47IH1cclxuICBnZXQgc3RydWN0dXJlU291cmNlKCkgeyByZXR1cm4gdGhpcy5nYW1lLndvcmxkLnByZXR0eVN0cnVjdHVyZTsgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHtcclxuICAgIGxldCBpc09mZnNldCA9IHRydWU7XHJcbiAgICBsZXQgdGVycmFpbk1hcE9yaWdpbiA9IGlzT2Zmc2V0ID8gWzAsIDBdXHJcbiAgICAgIDogWy1PVkVSV09STERfQ0VMTF9TSVpFIC8gMiwgLU9WRVJXT1JMRF9DRUxMX1NJWkUgLyAyXTtcclxuICAgIHRoaXMudGVycmFpblRpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHRlcnJhaW5NYXBPcmlnaW5bMF0sXHJcbiAgICAgIHRlcnJhaW5NYXBPcmlnaW5bMV0sXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAxLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQud2lkdGggLSAxXHJcbiAgICApO1xyXG4gICAgdGhpcy50ZXJyYWluVGlsZXMucmVnaXN0ZXJTcHJpdGVTaGVldCgnbGFuZCcsIFNwcml0ZVNoZWV0cy5UZXJyYWluKTtcclxuICAgIHRoaXMucGF2ZVRlcnJhaW4oKTtcclxuXHJcbiAgICBsZXQgdGhpbmdNYXBPcmlnaW4gPSBbLU9WRVJXT1JMRF9DRUxMX1NJWkUgLyAyLCAtT1ZFUldPUkxEX0NFTExfU0laRSAvIDJdO1xyXG4gICAgdGhpcy50aGluZ1RpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHRoaW5nTWFwT3JpZ2luWzBdLFxyXG4gICAgICB0aGluZ01hcE9yaWdpblsxXSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgT1ZFUldPUkxEX0NFTExfU0laRSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIDEsXHJcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDFcclxuICAgICk7XHJcbiAgICB0aGlzLnRoaW5nVGlsZXMucmVnaXN0ZXJTcHJpdGVTaGVldCgnZnJ1aXQnLCBTcHJpdGVTaGVldHMuRnJ1aXQpO1xyXG5cclxuICAgIHRoaXMuZW1iZWRUaGluZ3MoKTtcclxuXHJcbiAgICBsZXQgc3RydWN0dXJlTWFwT3JpZ2luID0gdGhpbmdNYXBPcmlnaW47XHJcbiAgICB0aGlzLnN0cnVjdHVyZVRpbGVzID0gbmV3IGV4LlRpbGVNYXAoXHJcbiAgICAgIHN0cnVjdHVyZU1hcE9yaWdpblswXSxcclxuICAgICAgc3RydWN0dXJlTWFwT3JpZ2luWzFdLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICBPVkVSV09STERfQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMSxcclxuICAgICAgdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMSk7XHJcbiAgICB0aGlzLnN0cnVjdHVyZVRpbGVzLnJlZ2lzdGVyU3ByaXRlU2hlZXQoJ3N0cnVjdHVyZScsIFNwcml0ZVNoZWV0cy5TdHJ1Y3R1cmUpO1xyXG5cclxuICB9XHJcblxyXG4gIHBhdmVUZXJyYWluKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXZlIHRlcnJhaW4uLi5cIik7XHJcbiAgICB0aGlzLmdhbWUud29ybGQudGVycmFpbi5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IGNlbGwgPSB0aGlzLnRlcnJhaW5UaWxlcy5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIGNlbGwuY2xlYXJTcHJpdGVzKCk7XHJcbiAgICAgICAgY2VsbC5wdXNoU3ByaXRlKG5ldyBleC5UaWxlU3ByaXRlKCdsYW5kJywgdGhpcy50ZXJyYWluU291cmNlLmF0KHgsIHkpKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGF2ZVRlcnJhaW5OYXJyb3dseShwb3NpdGlvbnM6IFtudW1iZXIsIG51bWJlcl1bXSkge1xyXG4gICAgcG9zaXRpb25zLmZvckVhY2goKFt4LCB5XSkgPT4ge1xyXG4gICAgICBsZXQgY2VsbCA9IHRoaXMudGVycmFpblRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKTtcclxuICAgICAgICBjZWxsLnB1c2hTcHJpdGUobmV3IGV4LlRpbGVTcHJpdGUoJ2xhbmQnLCB0aGlzLnRlcnJhaW5Tb3VyY2UuYXQoeCwgeSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbWJlZFRoaW5ncygpIHtcclxuICAgIHRoaXMuZ2FtZS53b3JsZC50aGluZ3MuZWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGxldCBjZWxsID0gdGhpcy50aGluZ1RpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nYW1lLndvcmxkLnRoaW5ncy5hdCh4LCB5KTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IE5PVEhJTkcpIHtcclxuICAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgZXguVGlsZVNwcml0ZSgnZnJ1aXQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICBjZWxsLnB1c2hTcHJpdGUoc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5fZ2FtZSA9IGVuZ2luZVxyXG4gIH1cclxuXHJcbiAgYXNzZW1ibGVTdHJ1Y3R1cmVzKCkge1xyXG4gICAgdGhpcy5nYW1lLndvcmxkLnN0cnVjdHVyZS5lYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgbGV0IGNlbGwgPSB0aGlzLnN0cnVjdHVyZVRpbGVzLmdldENlbGwoeCwgeSk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuZ2FtZS53b3JsZC5zdHJ1Y3R1cmUuYXQoeCwgeSlcclxuICAgICAgICBpZiAodmFsICE9PSBOT1RISU5HKSB7XHJcbiAgICAgICAgICBsZXQgc3ByaXRlID0gbmV3IGV4LlRpbGVTcHJpdGUoJ3N0cnVjdHVyZScsIHRoaXMuc3RydWN0dXJlU291cmNlLmF0KHgsIHkpKVxyXG4gICAgICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKVxyXG4gICAgICAgICAgY2VsbC5wdXNoU3ByaXRlKHNwcml0ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi8uLi9HYW1lJztcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi4vLi4vYWN0b3JzL2N1cnNvci9jdXJzb3InO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi8uLi9hY3RvcnMvcGxheWVyL3BsYXllcic7XHJcbmltcG9ydCB7IFZlY3RvciwgSW5wdXQsIExvY2tDYW1lcmFUb0FjdG9yU3RyYXRlZ3ksIFNjZW5lIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuaW1wb3J0IHsgTk9SVEgsIFdFU1QsIFNPVVRILCBFQVNULCBPVkVSV09STERfQ0VMTF9TSVpFLCBUUkVFUywgU09VVEhFQVNULCBQUk9HUkVTU19JTlRFUlZBTCwgR1JBU1MgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGp1c3RQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kaXJlY3Rpb24nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4uLy4uL2FjdG9ycy9wcm9ncmVzcyc7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBFbnZpcm9ucyB9IGZyb20gJy4vRW52aXJvbnMnO1xyXG5cclxudHlwZSBJbnRlcmFjdGlvbiA9IHsgYWN0aXZlOiBib29sZWFuLCBhdD86IFdvcmxkUG9zaXRpb24sIHN0YXJ0ZWRBdD86IG51bWJlciB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheSBleHRlbmRzIFNjZW5lIHtcclxuICBlbnZpcm9uczogRW52aXJvbnNcclxuICBjdXJzb3I6IEN1cnNvclxyXG4gIHBsYXllcjogUGxheWVyXHJcbiAgX2dhbWU6IEdhbWVcclxuICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb24gPSB7IGFjdGl2ZTogZmFsc2UgfVxyXG4gIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxyXG5cclxuICBwdWJsaWMgb25Jbml0aWFsaXplKGVuZ2luZTogR2FtZSkge1xyXG4gICAgdGhpcy5fZ2FtZSA9IGVuZ2luZVxyXG4gICAgdGhpcy5lbnZpcm9ucyA9IG5ldyBFbnZpcm9ucyhlbmdpbmUpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25BY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuZW52aXJvbnMudGlsZW1hcHMuZm9yRWFjaChtYXAgPT4gdGhpcy5hZGQobWFwKSlcclxuXHJcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcclxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xyXG4gICAgdGhpcy5hZGQodGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5hZGQodGhpcy5jdXJzb3IpO1xyXG5cclxuICAgIGxldCBzdGFydFdvcmxkUG9zID0gdGhpcy5fZ2FtZS53b3JsZC5yYW5kb21DbGVhclBvc2l0aW9uXHJcbiAgICB0aGlzLnBsYXllci53b3JsZFBvc2l0aW9uID0gc3RhcnRXb3JsZFBvc1xyXG4gICAgdGhpcy5wbGF5ZXIucG9zID0gbmV3IFZlY3RvcihcclxuICAgICAgc3RhcnRXb3JsZFBvc1swXSAqIE9WRVJXT1JMRF9DRUxMX1NJWkUsXHJcbiAgICAgIChzdGFydFdvcmxkUG9zWzFdKSAqIE9WRVJXT1JMRF9DRUxMX1NJWkVcclxuICAgIClcclxuICAgIHRoaXMuY2FtZXJhLmFkZFN0cmF0ZWd5KG5ldyBMb2NrQ2FtZXJhVG9BY3RvclN0cmF0ZWd5KHRoaXMucGxheWVyKSlcclxuICAgIHRoaXMuX2dhbWUuaW5wdXQucG9pbnRlcnMucHJpbWFyeS5vbignZG93bicsICgpID0+IHRoaXMuYnVpbGRTdHJ1Y3R1cmUoKSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblByZVVwZGF0ZSgpIHtcclxuICAgIHRoaXMuY2FtZXJhLnBvcyA9IHRoaXMucGxheWVyLnBvc1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ZXJJbnB1dCgpXHJcbiAgICAvLyBpZiAodGhpcy5fZ2FtZS5pbnB1dC5wb2ludGVycy5wcmltYXJ5LilcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZFN0cnVjdHVyZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwid291bGQgYnVpbGQgc3RydWN0dXJlLi4uXCIpXHJcbiAgICBsZXQgW3gseV0gPSB0aGlzLmN1cnNvci5ob3ZlcldvcmxkUG9zXHJcbiAgICBpZiAodGhpcy5fZ2FtZS53b3JsZC50ZXJyYWluLmF0KHgseSkgPT0gR1JBU1MpIHtcclxuICAgICAgdGhpcy5fZ2FtZS53b3JsZC5idWlsZFdvb2RlbldhbGwoeCx5KVxyXG4gICAgICB0aGlzLmVudmlyb25zLmFzc2VtYmxlU3RydWN0dXJlcygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGF5ZXJJbnB1dCgpIHtcclxuICAgIGlmICh0aGlzLmludGVyYWN0aW9uLmFjdGl2ZSkge1xyXG4gICAgICAvLyBuZWVkIHRvIGtlZXAgaG9sZGluZyBFIG9yIGl0IGdvZXMgYXdheVxyXG4gICAgICBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5FKSkge1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIGxldCBlbGFwc2VkID0gbm93IC0gdGhpcy5pbnRlcmFjdGlvbi5zdGFydGVkQXRcclxuICAgICAgICBjb25zb2xlLmxvZyhcImludGVyYWN0IC0tIGNvbnRpbnVlXCIsIGVsYXBzZWQpXHJcbiAgICAgICAgLy8gdGhpcy5pbnRlcmFjdGlvbi5wZXJjZW50ICs9IDFcclxuICAgICAgICBpZiAoZWxhcHNlZCA+PSBQUk9HUkVTU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcmFjdCBjb21wbGV0ZVwiKVxyXG4gICAgICAgICAgLy8gdGhpcy53b3JsZC50ZXJyYWluXHJcbiAgICAgICAgICBsZXQgW3gseV0gPSB0aGlzLmludGVyYWN0aW9uLmF0XHJcbiAgICAgICAgICB0aGlzLl9nYW1lLndvcmxkLmNob3BUcmVlQXQoeCx5KVxyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ucy5wYXZlVGVycmFpbk5hcnJvd2x5KFtcclxuICAgICAgICAgICAgW3gseV0sXHJcbiAgICAgICAgICAgIFt4IC0gMSwgeSAtIDFdLCBbeCwgeSAtIDFdLCBbeCArIDEsIHkgLSAxXSxcclxuICAgICAgICAgICAgW3ggLSAxLCB5XSwgLCBbeCArIDEsIHldLFxyXG4gICAgICAgICAgICBbeCAtIDEsIHkgKyAxXSwgW3gsIHkgKyAxXSwgW3ggKyAxLCB5ICsgMV1cclxuICAgICAgICAgIF0pXHJcblxyXG4gICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5wcm9ncmVzc0JhcilcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucmVtb3ZlKHRoaXMucHJvZ3Jlc3NCYXIpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5wbGF5ZXIubW92aW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuRSkpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcmFjdGlvbigpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9nYW1lLmlucHV0LmtleWJvYXJkLmlzSGVsZChJbnB1dC5LZXlzLlcpKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKE5PUlRIKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5BKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShXRVNUKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0hlbGQoSW5wdXQuS2V5cy5TKSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShTT1VUSClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaW5wdXQua2V5Ym9hcmQuaXNIZWxkKElucHV0LktleXMuRCkpIHtcclxuICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoRUFTVClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLmZhY2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRGYWNpbmcodGhpcy5wbGF5ZXIuZmFjaW5nKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXIuaWRsZSgpXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0SW50ZXJhY3Rpb24oKSB7XHJcbiAgICAvLyBpZiAodGhpcy5pbnRlcmFjdGlvbi5hY3RpdmUpIHtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBwcm9ncmVzcyB3aGVyZXZlciBwbGF5ZXIgaXMgZmFjaW5nLCBpZiBpdCBpcyBhIGZvcmVzdFxyXG4gICAgICBsZXQgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdID0gYWRqdXN0UG9zaXRpb24odGhpcy5wbGF5ZXIud29ybGRQb3NpdGlvbiwgdGhpcy5wbGF5ZXIuZmFjaW5nKVxyXG4gICAgICBpZiAodGhpcy5fZ2FtZS53b3JsZC50ZXJyYWluLmF0KC4uLnRhcmdldCkgPT0gVFJFRVMpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UHJvZ3Jlc3NCYXIodGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBzdGFydFByb2dyZXNzQmFyKHRhcmdldDogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdDogdGFyZ2V0IGFzIFdvcmxkUG9zaXRpb24sXHJcbiAgICAgIHN0YXJ0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgIH1cclxuICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NCYXIucG9zID0gbmV3IFZlY3Rvcih0YXJnZXRbMF0gKiBPVkVSV09STERfQ0VMTF9TSVpFLCB0YXJnZXRbMV0gKiBPVkVSV09STERfQ0VMTF9TSVpFKVxyXG4gICAgdGhpcy5hZGQodGhpcy5wcm9ncmVzc0JhcilcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEh1ZCB7XHJcbiAgaG92ZXI6IEVsZW1lbnRcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdmVyLW5vdGUnKVxyXG4gIH1cclxuXHJcbiAgc2V0SG92ZXJNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaG92ZXIpIHtcclxuICAgICAgdGhpcy5ob3Zlci5pbm5lckhUTUwgPSBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vZGUoLi4uYXJyOiBhbnlbXSkge1xyXG4gICAgdmFyIG1hcCA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWFwW2FycltpXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtYXBbYXJyW2ldXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcFthcnJbaV1dICs9IDE7XHJcbiAgICB9XHJcbiAgICB2YXIgZ3JlYXRlc3RGcmVxID0gMDtcclxuICAgIHZhciBtb2RlO1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBtYXApIHtcclxuICAgICAgICBpZiAobWFwW3Byb3BdID4gZ3JlYXRlc3RGcmVxKSB7XHJcbiAgICAgICAgICAgIGdyZWF0ZXN0RnJlcSA9IG1hcFtwcm9wXTtcclxuICAgICAgICAgICAgbW9kZSA9IHByb3A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGU7XHJcbn0iLCJleHBvcnQgY29uc3QgcGljayA9IDxUPiguLi5lbGVtczogVFtdKTogVCA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZWxlbXMubGVuZ3RoKSlcclxuICAgIHJldHVybiBlbGVtc1tpbmRleF1cclxufSIsImV4cG9ydCBjb25zdCB0aW1lcyA9IChuOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpID0+IHtcclxuICBsZXQgYXJyID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBhcnIucHVzaCh2YWx1ZSkgfVxyXG4gIHJldHVybiBhcnJcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==