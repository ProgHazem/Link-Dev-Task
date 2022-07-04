import Form from './components/form';
import { useCallback, useState } from 'react';

function App() {
  const [allItems, setAllItems] = useState([]);

  const addItem = useCallback((item) => {
    setAllItems([...allItems, {checked: false, name: item}])
  },[allItems])

  const makeCheck = (item) => {
    const results = allItems.map((oldItem) => {
      if(oldItem.name === item){
        oldItem.checked = !oldItem.checked
        return oldItem;
      }else{
        return oldItem;
      }
    })
    setAllItems(results)
  }

  return (
    <div className="body">
      <h1 style={{textAlign: "center"}}>Todo List</h1>
      <Form  addItem={addItem}/>
      <hr />
      <ul>
      {allItems?.map(item => (
        <li onClick={() => makeCheck(item.name)} key={item.name}> <input type="checkbox" checked={item.checked} /> <span className={item.checked ? "checked item" : "item"}>{item.name}</span> </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
