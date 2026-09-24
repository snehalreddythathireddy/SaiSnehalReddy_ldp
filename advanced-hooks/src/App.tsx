import ContextDemo from "./components/ContextDemo";
import MemoDemo from "./components/MemoDemo";
import CallbackDemo from "./components/CallbackDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Advanced React Hooks Practice</h1>

        <hr />

        <ContextDemo />

        <hr />

        <MemoDemo />

        <hr />

        <CallbackDemo />

        <hr />

        <CustomHookDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;