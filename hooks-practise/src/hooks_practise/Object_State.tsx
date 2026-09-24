import { useState } from "react";


interface User {
  name: string;
  age: number;
  city: string;
}

const ObjectState = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    city: "",
  });

  return (
    <div>
      <h1>Object State</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={user.name}
        onChange={(event) =>
          setUser({
            ...user,
            name: event.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Age"
        value={user.age}
        onChange={(event) =>
          setUser({
            ...user,
            age: Number(event.target.value),
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter City"
        value={user.city}
        onChange={(event) =>
          setUser({
            ...user,
            city: event.target.value,
          })
        }
      />

      <hr />

      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>
    </div>
  );
};

export default ObjectState;
/*
interface User {
  name: string;
  age: number;
  city: string;
}

const ObjectState = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    city: "",
  });

  const updateName = () => {
    setUser({
      ...user,
      name: "Snehal",
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: 21,
    });
  };

  const updateCity = () => {
    setUser({
      ...user,
      city: "Hyderabad",
    });
  };

  const resetUser = () => {
    setUser({
      name: "",
      age: 0,
      city: "",
    });
  };

  return (
    <div>
      <h1>Object State</h1>

      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>

      <button onClick={updateName}>Update Name</button>

      <button onClick={updateAge}>Update Age</button>

      <button onClick={updateCity}>Update City</button>

      <button onClick={resetUser}>Reset</button>
    </div>
  );
};

export default ObjectState;*/