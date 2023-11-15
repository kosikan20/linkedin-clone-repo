import { Avatar } from "@mui/material";
import classes from "./SideBar.module.css";
import sidebarBackground from "../assets/sidebarBackground.jpg";

const SideBar = () => {
  const recentItem = (topic) => {
    return (
      <div className={classes.sidebar_recentItem}>
        <span className={classes.sidebar_hash}>#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_top}>
        <img src={sidebarBackground} alt="sidebar" />
        <Avatar className={classes.sidebar_avatar}></Avatar>
        <h2>Kosikan Nanthan</h2>
        <h4>undergraduate student,programmer,kosikan1992@gmail.com</h4>
      </div>
      <div className={classes.sidebar_stats}>
        <div className={classes.sidebar_stat}>
          <p>Who viewed you</p>
          <p className={classes.sidebar_statno}>2000</p>
        </div>
        <div className={classes.sidebar_stat}></div>

        <div className={classes.sidebar_stat}>
          <p>views on post</p>
          <p className={classes.sidebar_statno}>2000</p>
        </div>
        <div className={classes.sidebar_stat}></div>
      </div>
      <div className={classes.sidebar_bottom}>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("software engineering")}
        {recentItem("developer")}
        {recentItem("design")}
        {recentItem("programming")}
      </div>
    </div>
  );
};

export default SideBar;
