import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass';

const Simple = () => {
  return (
    <div>
      <h1>This is JSX!!!</h1>
    </div>
  )
};
console.log('this is working');

ReactDOM.render(<Simple/>, document.getElementById('app'));
