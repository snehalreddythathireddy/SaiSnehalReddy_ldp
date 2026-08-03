/*import Button from "./components/atoms/Button"*/
import Input from "./components/atoms/Input";
import SearchForm from "./components/molecules/SearchForm";
import RenderingPractice from "./class_practise/Rendering";
import PropsPractice from "./class_practise/Props";
import StatePractice from "./class_practise/State";
import EventsPractice from "./class_practise/Events";
import ConditionalPractice from "./class_practise/ConditionalRendering";
import ListsPractice from "./class_practise/Lists";
import FormsPractice from "./class_practise/Forms";
import Buttons from "./material_ui/Buttons";
import CheckBoxes from "./material_ui/CheckBoxs";
import Radios from "./material_ui/Radio";
import Switch from "./material_ui/Switch";
import TextField from "./material_ui/TextField";
import Selects from "./material_ui/Select";
import Sliders from "./material_ui/Sliders";
import Avatars from "./material_ui/Avatar";
import Badges from "./material_ui/Badges";
import Chips from "./material_ui/Chip";
import Dividers from "./material_ui/Divider";
import Lists from "./material_ui/Lists";
import Tables from "./material_ui/Table";
import Tooltips from "./material_ui/ToolTip";
import Alerts from "./material_ui/Alerts";
import Backdrops from "./material_ui/BackDrops";
import Dialogs from "./material_ui/Dialog";
import Progresses from "./material_ui/Progress";
import Skeletons from "./material_ui/Skeleton";
import Snackbars from "./material_ui/SnackBar";

function App() {
  return (
    <div>
      
      <h1>Atomic Design</h1>

      <h2>Atoms</h2>

      <Input placeholder="Enter your name" />
      <br />
      <br />

      <Input placeholder="Enter your email" />
      <br />
      <br />

      <Input placeholder="Search..." />
      <br />
      <br />

      {/*<Button label="Submit" />{" "}
      <Button label="Login" />{" "}
      <Button label="Register" />*/}

      <hr />

      
      <h2>Molecules</h2>

      <SearchForm
        placeholder="Search products"
        buttonLabel="Search"
      />

      <br />
      <br />

      <SearchForm
        placeholder="Search users"
        buttonLabel="Find"
      />

      <hr />

      
      <RenderingPractice />

      <hr />

      <PropsPractice />

      <hr />

      <StatePractice />

      <hr />

      <EventsPractice />

      <hr />

      <ConditionalPractice />

      <hr />

      <ListsPractice />

      <hr />

      <FormsPractice />
      <h3>Material UI</h3>
      <Buttons/>
      <CheckBoxes/><br />
      <Radios/><br />
      <Switch /><br />
      <TextField /><br />
      <Selects /><br />
      <Sliders/> <br/>
      <Avatars/><br/>
      <Badges/><br/>
      <Chips/>
      <Dividers/>
      <Lists/>
      <Tooltips/>
      <Tables/>
      <Alerts/>
      <Backdrops/>
      <Dialogs/>
      <Progresses/>
      <Skeletons/>
      <Snackbars/>
    
    </div>
  );
}

export default App;