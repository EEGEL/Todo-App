import AppName from "./component/AppName";
import AddToDo from "./component/AddTODO";
import "./App.css";
import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems}
      onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
