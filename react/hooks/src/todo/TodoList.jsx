import React, { useRef, useState } from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';

// 父组件
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const [ inpVal, setInpVal] = useState('hello')

  const [newData, setNewData] = useState(data)
  const inputRef = useRef(null)
  const handleClick = () => {
    // console.log(inputRef.current.input.value);
    // let arr = newData
    // arr.push(inputRef.current.input.value)  // 已经将newData修改了，但是不触发组件更新
    let arr = [...newData, inputRef.current.input.value]
    setNewData(arr)
    console.log(newData);
  }

  const onDelete = (i) => {
    // console.log(item);
    let arr = newData.filter((str, index) => index !== i)
    console.log(arr);
    setNewData(arr)
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setInpVal(e.target.value)
  }

  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" value={inpVal}  onChange={(e) => handleChange(e)} />
        <Button onClick={handleClick}>提交</Button>
      </header>

      <section>
        <TotoItem data={newData} cb={onDelete}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;