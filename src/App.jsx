import style from "./App.module.css";
import DoneList from "./components/DoneList";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className={style.container}>
      <div className={style.context}>
        <h1>TO DO APP REDUX TOOLKIT</h1>
        <Input />
        <div className={style.listsContainer}>
          <TodoList />
          <DoneList />
        </div>
      </div>
    </div>
  );
}

export default App;
