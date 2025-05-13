import React from "react";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { RxHamburgerMenu } from "react-icons/rx";

import ChatArea from "./components/ChatArea";
import UploadImage from "./components/UploadImage";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [bottomNavValue, setBottomNavValue] = React.useState(0);
  const [areaValue, setAreaValue] = React.useState("chat");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleAreaChange = (value) => {
    setAreaValue(value);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleAreaChange("chat")}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleAreaChange("ImageConvert To Text")}
          >
            <ListItemIcon>
              <DriveFolderUploadIcon />
            </ListItemIcon>
            <ListItemText primary="Image to Text" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          padding: "20px",
          zIndex: 1200,
          backgroundColor: "#e0e0e0",
        }}
      >
        <RxHamburgerMenu
          style={{ cursor: "pointer", fontSize: "25px" }}
          onClick={toggleDrawer(true)}
        />
      </Box>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#e0e0e0",
          pt: "80px",
          pb: "100px",
        }}
      >
        {areaValue === "chat" ? (
          <ChatArea />
        ) : areaValue === "ImageConvert To Text" ? (
          <UploadImage />
        ) : (
          <h1>Welcome</h1>
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          borderRadius: "20px",
          position: "fixed",
          bottom: "20px",
          left: 0,
          right: 0,
          margin: "auto",
          zIndex: 1000,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <BottomNavigation
          showLabels
          value={bottomNavValue}
          onChange={(event, newValue) => {
            setBottomNavValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="AiChat"
            icon={<ChatIcon />}
            onClick={() => handleAreaChange("chat")}
          />
          <BottomNavigationAction
            label="Image Convert Text"
            icon={<DriveFolderUploadIcon />}
            onClick={() => handleAreaChange("ImageConvert To Text")}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default App;
