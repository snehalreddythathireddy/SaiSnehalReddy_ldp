import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import Hobbies from "./components/Hobbies";
import Userprofile from "./components/UserProfile";
import Button from "./components/Button";
import Card from "./components/Card";
import Buttons from "./components/Optional";

function App() {
  const myHobbies =["Reading", "Coding", "Cricket", "Music"];
  const user1={name:"Ravi", age:28, city:"kolkata", email:"ravikrishna@098"};
  const handleClick = () => {
    alert("Button Clicked!");
  }
  const saveClick =()=>{
    alert("Saved Successfully");
  }
  return (
    <div>
      <h1>Props Practice</h1>
      <h2>passing a single prop</h2>
      <Greeting name="Snehal"/>
      <Greeting name="Rahul"/>
      <Greeting name="priya"/>
      <h2>passing multile props</h2>
      <UserCard name="Shreya" age={20} id={303} isStudent ={true}/>
      <h2>Passing an array as a prop</h2>
      <Hobbies hobbies={myHobbies}/>
      <h2>passing an object as a prop</h2>
      <Userprofile user={user1}/>
      <h2>passing a function as a prop</h2>
      <Button label ="CLick Me" onClick={handleClick}/>
      <Button label="Save" onClick={saveClick} />
      <h2>childs prop practise</h2>
      <Card>
        <p>Rendering a para</p>
        <h3>rendering a heading</h3>
      </Card>
      <h2>optional props</h2>
      <Buttons label="Delete" color ="red" />
      <Buttons label="Edit" />



    </div>
  );
}

export default App;
