import React, { useState } from 'react';

const State = () => {
  let [count, setCount] = useState(10)   // [xx, xxfn] 
  const [title, setTitle] = useState('hello')
  let num = 1
  if (num) {
    const [flag, setFlag] = useState(true)
  }

  const add = () => {
    setCount(count + 1)
    setTitle(title+count)
  }

  return (
    <div>
      <h4>title: {title}</h4>
      <button onClick={() => add()}>{count}</button>
      <h3>{flag}</h3>
    </div>
  );
};

export default State;


// export default class State extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }
//   add = () => {
//     this.setState({
//       count: this.state.count+1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.add()}>{this.state.count}</button>
//       </div>
//     )
//   }
// }