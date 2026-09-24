interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>Welcome to our application</p>
    </div>
  );
};

export default Greeting;