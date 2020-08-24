import React from 'reactn';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { GameStateProvider } from "../GameStateProvider";

export const App = () => {
  const [{message, inspect, inventory}]= GameStateProvider.useGlobal()
  return <div>
    <div className="box meta" style={{padding: '3px'}}>
      <span style={{fontWeight: 'bold'}}>freehold</span>
    </div>

    <div className="inventory box">
      <span style={{fontSize: '11px', fontWeight: 'bold', padding: '3px'}}>
        INVENTORY
      </span>
      <div style={{width: '100%', height: '1px', backgroundColor: 'white', margin: '0 auto'}} />
      <div style={{padding: '3px', width: '95%', display: 'flex', flexDirection: 'column'}}>
        {Object.entries(inventory).map(([it,count]) =>
          <div key={it} style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <span style={{ flex: 1}}>{it}</span>
            <span style={{flex: 1, textAlign: 'right'}}>x{count}</span>
          </div>
        )}
      </div>
    </div>

    <MouseTooltip visible={inspect} offsetX={20}>
      <div style={{ padding: '6px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid white' }}>
        <span style={{ color: 'white' }}>here: {message}</span>
      </div>
    </MouseTooltip>
  </div>;
};