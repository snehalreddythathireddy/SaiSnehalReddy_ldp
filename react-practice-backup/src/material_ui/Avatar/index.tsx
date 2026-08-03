import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FolderIcon from '@mui/icons-material/Folder';
import { deepOrange } from '@mui/material/colors';
import AvatarGroup from '@mui/material/AvatarGroup';


const Avatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>A</Avatar>
      <Avatar sx={{ bgcolor: "green" }}>B</Avatar>
      <Avatar src="https://i.pravatar.cc/150?img=5" />
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
        </Avatar>
       <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={4251}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
       </AvatarGroup>
    </Stack>
  );
};

export default Avatars;