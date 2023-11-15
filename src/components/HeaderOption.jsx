import classes from "./HeaderOption.module.css";
import { Avatar } from "@mui/material";
const HeaderOption = ({ title, Icon, avatar }) => {
  return (
    <div className={classes.headeroption}>
      {Icon && <Icon className={classes.headeroption_icon} />}
      {avatar && <Avatar src={avatar} className={classes.headeroption_icon} />}
      <h3 className={classes.headeroption_title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
