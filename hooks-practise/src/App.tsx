import Counter from "./hooks_practise/count";
import StringState from "./hooks_practise/st";
import BooleanState from "./hooks_practise/boolean";
import Logged_State from "./hooks_practise/Logged";
import ObjectState from "./hooks_practise/Object_State";
import ArrayState from "./hooks_practise/Array_State";
import MultipleStates from "./hooks_practise/Multiple_State";
function App() {
  return (
  <div>
    <Counter />
    <StringState/>
    <BooleanState/>
    <Logged_State/>
    <ObjectState/>
    <ArrayState/>
    <MultipleStates/>
  </div>

  );
}

export default App;