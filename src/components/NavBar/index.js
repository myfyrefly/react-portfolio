import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Contact from "../../pages/contact";
import "./style.css";

const LookTabs = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  return (
    <>
      <AppBar position="static">
        <Tabs position="static" value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Portfolio" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <About setOpenToTrue={() => setOpen(true)} />}
      {selectedTab === 1 && <Portfolio setOpenToTrue={() => setOpen(true)} />}
      {selectedTab === 2 && <Contact setOpenToTrue={() => setOpen(true)} />}
    </>
  );
};

export default LookTabs;
