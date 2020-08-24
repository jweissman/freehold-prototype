import * as ex from 'excalibur';
import { Play } from './scenes/level-one/play';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { Cursor } from './actors/cursor/cursor';
import { OVERWORLD } from './constants';
import { Game } from './Game';
// import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import React, { useGlobal, setGlobal, createProvider } from 'reactn';
import { GameStateProvider } from './GameStateProvider';
import MouseTooltip from 'react-sticky-mouse-tooltip';


// setGlobal({ message: '-- '});

export const AppUI = () => {
  const [{message, inspect}]= GameStateProvider.useGlobal()
  return <div>
    <table style={{border: "1px solid white", margin: '6px'}}>
      <tbody>
          <tr>
            <td><b>FREEHOLD</b></td>
            <td>v0.0.1-prealpha</td>
          </tr>
      </tbody>
    </table>
    <MouseTooltip visible={inspect} offsetX={20}>
      <div style={{padding: '6px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid white'}}>
        <span style={{ color: 'white' }}>here: {message}</span>
      </div>
    </MouseTooltip>
  </div>;
};

ReactDOM.render(<GameStateProvider><AppUI /></GameStateProvider>, document.getElementById("index"));

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
