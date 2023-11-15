import linked from "../assets/linked.svg";
import avatar from "../assets/avatar.jpg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import classes from "./Header.module.css";
import HeaderOption from "./HeaderOption";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <img src={linked} alt="linked" />
        <div className={classes.header_search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className={classes.header_right}>
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar={avatar} />
      </div>
    </div>
  );
};

export default Header;
