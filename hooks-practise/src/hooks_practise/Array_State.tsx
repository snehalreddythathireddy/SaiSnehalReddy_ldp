import { useEffect, useState } from "react";

const ArrayState = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    console.log("Todo component mounted");
  }, []);

  useEffect(() => {
    console.log("Current Input:", task);
  }, [task]);

  useEffect(() => {
    console.log("Tasks Updated:", tasks);
    document.title = `Tasks: ${tasks.length}`;

    if (tasks.length > 5) {
      alert("You have more than 5 tasks!");
    }
  }, [tasks]);

  useEffect(() => {
    return () => {
      console.log("Todo component unmounted");
    };
  }, []);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <hr />

      {tasks.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArrayState;