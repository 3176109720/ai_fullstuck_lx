import React, { useState } from 'react';
import { useScroll } from '../_hooks/useScroll.js';
import { useLocal } from '../_hooks/useLocal.js';

const MyHooks = () => {
  const [pageY] = useScroll(100)

  const [count, setCount] = useLocal('count', 0)


  return (
    <div style={{ height: ' 200vh', marginTop: '50vh' }}>
      当前页面的滚动距离：{pageY}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default MyHooks;