import { useState, useMemo, useCallback } from "react";
import TodoList from "./TodoList";

export const longCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

const UseMemoComponent = ({ data }) => {
  const [todos, setTodos] = useState(["Todo 0"]);

  const calculatedValue = useMemo(() => longCalculation(data), [data]);

  // const addTodo = () => setTodos((t) => [...t, "New Todo"]);
  const addTodo = useCallback(
    () => setTodos((t) => [...t, "New Todo"]),
    [todos]
  );
  const removeTodo = useCallback((index) => {
    setTodos((t) => t.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />

      <hr />
      <p>Calculated Value: {calculatedValue}</p>
      <p>Data: {data}</p>
    </div>
  );
};

export default UseMemoComponent;
