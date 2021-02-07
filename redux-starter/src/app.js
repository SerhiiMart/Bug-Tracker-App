import React from 'react';
import { compose, pipe} from 'lodash/fp';

function App() {
  let input = "   JavaScript  ";
  let output = "<div>" + input.trim() + "</div>";

  const trim = str => str.trim()
  const wrapInDiv = str => `<div>${str}</div>`;
  const wrapInSpan = str => `<span>${str}</span>`;
  const toLowerCase = str => str.toLowerCase();

  const transform = pipe(trim, toLowerCase, wrapInDiv)
  console.log(transform(input));

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;