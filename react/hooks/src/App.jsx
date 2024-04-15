// import Con from './_context.js'
// import Context from './components/Context'
// import { Button } from 'antd'
// const Con = createContext()

import TodoList from './todo/TodoList'

const App = () => {
  return (
    // <Con.Provider value={'来自App中的数据'}>
    //   <div>
    //     <Context/>
    //   </div>

    //   <Button type='primary'>antd</Button>

    // </Con.Provider>
    <TodoList></TodoList>
  );
};

export default App;