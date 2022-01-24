import React from 'react';
import {button} from "./app-ui";
import $ from 'jquery'

function App() {


  return (
      <div className="App" style={{padding: '4em'}}>
        <header className="App-header">
          <p>
            Welcome to: react ts jquery
          </p>
          <div ref={(ref: HTMLInputElement) => {
            if (ref) {
              $(ref).empty();
              const dom = jqueryApp().get(0);
              if (dom) {
                ref.append(dom)
              }
            }
          }}/>

        </header>
      </div>
  );
}

export default App;

function jqueryApp(): JQuery<HTMLElement> {
  return $('<div>').css({
    border: '1px dashed gray',
    padding: '1em'
  }).append($('<h3>').text('JQuery Successfully Started!'), button('Click Me Quick', () => alert('Good boy, you clicked me!')));
}
