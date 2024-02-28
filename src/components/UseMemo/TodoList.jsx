import { memo, useMemo } from "react";
import { longCalculation } from "./UseMemoComponent";

const TodoList = memo((props) => {
  const { todos, addTodo, removeTodo } = props;
  //   const calculatedValue = longCalculation(4)
  const calculatedValue = useMemo(() => longCalculation(4), []);

  console.log("render Todos");
  return (
    <div>
      <h2>My ToDo List</h2>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
      ))}

      <p>Todos: {calculatedValue}</p>
    </div>
  );
});

export default TodoList;
