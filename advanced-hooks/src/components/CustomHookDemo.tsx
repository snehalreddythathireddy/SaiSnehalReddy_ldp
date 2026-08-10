import { useCounter } from "../hooks/useCounter";
import { useToggle } from "../hooks/useToggle";
import { useFetch } from "../hooks/useFetch";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface User {
  id: number;
  name: string;
  email: string;
}

function CustomHookDemo() {
  const counter = useCounter(0);

  const toggle = useToggle();

  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [name, setName] = useLocalStorage(
    "user-name",
    ""
  );

  return (
    <div>
      <h2>Custom Hooks</h2>

      {/* useCounter */}

      <h3>useCounter</h3>

      <p>Count: {counter.count}</p>

      <button onClick={counter.increment}>
        +
      </button>

      <button onClick={counter.decrement}>
        -
      </button>

      <button onClick={counter.reset}>
        Reset
      </button>

      <hr />

      {/* useToggle */}

      <h3>useToggle</h3>

      <p>
        Status: {toggle.value ? "ON" : "OFF"}
      </p>

      <button onClick={toggle.toggle}>
        Toggle
      </button>

      <button onClick={toggle.setTrue}>
        ON
      </button>

      <button onClick={toggle.setFalse}>
        OFF
      </button>

      <hr />

      {/* useFetch */}

      <h3>useFetch</h3>

      <button onClick={refetch}>
        Refetch Users
      </button>

      {loading && <p>Loading...</p>}

      {error && (
        <p>Error: {error}</p>
      )}

      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}

      <hr />

      {/* useLocalStorage */}

      <h3>useLocalStorage</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <p>
        Saved Name: {name}
      </p>
    </div>
  );
}

export default CustomHookDemo;