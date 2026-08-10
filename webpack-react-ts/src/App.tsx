import "./App.css";
import image from "./image5.png"; 
function App() {
  return (
    <div>
      <h1>Hello React + TypeScript + Webpack 🚀</h1>
      <p>My first Webpack React project.</p>
      <img src={image} alt="Image" width={200} />
    </div>
  );
}

export default App;