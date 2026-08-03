interface FunctionalPropsData {
  name: string;
  age: number;
}

const FunctionalProps = ({ name, age }: FunctionalPropsData) => {
  return (
    <div>
      <h3>Functional Component</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default FunctionalProps;