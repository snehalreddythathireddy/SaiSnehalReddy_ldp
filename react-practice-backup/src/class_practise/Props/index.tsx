import FunctionalProps from "./FunctionalProps";
import ClassProps from "./ClassProps";

const PropsPractice = () => {
  return (
    <div>
      <h2>Props Practice</h2>

      <FunctionalProps name="Snehal" age={20} />

      <hr />

      <ClassProps name="Snehal" age={20} />
    </div>
  );
};

export default PropsPractice;