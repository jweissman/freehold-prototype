import * as ex from 'excalibur';
import { Play } from './scenes/level-one/play';
import { Resources } from './resources';
import { OVERWORLD } from './constants';
import { Game } from './Game';
import React from 'reactn';
import ReactDOM from "react-dom";
import { GameStateProvider } from './GameStateProvider';
import { App } from './ui/App';

ReactDOM.render(<GameStateProvider><App /></GameStateProvider>, document.getElementById("index"));

console.log("CREATE GAME...")
const game = new Game();


const overworld = new Play(game);
game.add(OVERWORLD, overworld);

let loader = new ex.Loader();
loader.suppressPlayButton = true;
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

console.log("load game")
game.start(loader).then(() => {
  console.log("start game")
  game.goToScene(OVERWORLD);
});
