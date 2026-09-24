const FunctionalLists = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h3>Functional Component</h3>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionalLists;