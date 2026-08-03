import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";

const CheckBoxes = () => {
  const [checked, setChecked] = useState(false);

  return (
        <div>
            <Checkbox  defaultChecked />
            <Checkbox/>
            <Checkbox disabled/>
            <Checkbox disabled checked/><br/>
            <FormGroup>
            <FormControlLabel control={<Checkbox size="small" color="secondary" />}label="label" />
            <FormControlLabel required control={<Checkbox size="medium" color ="success"/>} label="required"/>
            <FormControlLabel disabled control={<Checkbox defaultChecked color ="default"/> } label ="disabled"/>
            </FormGroup>
            <Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon/>}/>
            <Checkbox
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            />


        </div>
    );
};

export default CheckBoxes;