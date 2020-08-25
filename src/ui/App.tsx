import React from 'reactn';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { GameStateProvider } from "../GameStateProvider";
import './App.css';

const Inventory = ({ items }) =>
    <div className="inventory box">
      <div className='box-title'>
        INVENTORY
      </div>
      <div className='rule' />
      <div style={{padding: '3px', width: '95%', display: 'flex', flexDirection: 'column'}}>
        {Object.entries(items).map(([it,count]) =>
          <div key={it} style={{display: 'flex'}}>
            <span style={{ flex: 1}}>{it}</span>
            <span style={{flex: 1, textAlign: 'right'}}>x{count}</span>
          </div>
        )}
      </div>
    </div>

export const App = () => {
  const [{message, inspect, inventory, constructing}]= GameStateProvider.useGlobal()
  return <div>
    <div className="box meta" style={{padding: '3px'}}>
      <span style={{fontWeight: 'bold'}}>freehold</span>
    </div>

    <Inventory items={inventory} />

    <div className="construction box">
      <div className='box-title'>
        CONSTRUCTION
      </div>
      <div className='rule' />
      <div style={{ padding: '3px', width: '95%', display: 'flex', flexDirection: 'column' }}>
        {Object.entries({ 'Wood Wall': '10 wood', 'Wood Floor': '20 wood', 'Wood Door': '5 wood' }).map(([it,reqs]) =>
          <div key={it} style={{display: 'flex', backgroundColor: constructing === it ? 'gray' : 'rgba(0,0,0,0.3)'}}
            onClick={(e) => {
              GameStateProvider.setGlobal({ constructing: it })
              e.preventDefault()
              e.stopPropagation()
              return false;
            }}
          >
            <span style={{ flex: 1}}>{it}</span>
            <span style={{flex: 1, textAlign: 'right'}}>{reqs}</span>
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