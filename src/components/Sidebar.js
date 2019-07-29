import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import User from "./User";
import SearchBar from "./SearchBar";
import NewNote from "./NewNote";
import Navigation from "./Navigation";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  }
}));

const Sidebar = ({ pageSetter, notebooks, tags }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <User name="John Doe" />
      <SearchBar />
      <NewNote />
      <Navigation pageSetter={pageSetter} notebooks={notebooks} tags={tags} />
    </Drawer>
  );
};

export default Sidebar;