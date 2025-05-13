import { Box } from "@mui/material";
import React from "react";
import Popup from "../components/Popup";
import { useDispatch } from "react-redux";
import { ChatValue } from "../features/ControllerSlice";
import useMediaQuery from "@mui/material/useMediaQuery";

function ChatArea() {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        width: matches ? "50%" : "90%",
        display: "flex",
        justifyContent: "center",
        gap: 2,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        p: 2,
        mb: 2,
      }}
    >
      <input
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "50px",
          border: "none",
          flexGrow: 1,
        }}
        type="text"
        placeholder="Mesaj yazın..."
        onChange={(e) => {
          dispatch(ChatValue(e.target.value));
        }}
      />

      <Box
        sx={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100px",
          cursor: "pointer",
          padding: matches ? "5px" : "5px",
        }}
      >
        <Popup />
      </Box>
    </Box>
  );
}

export default ChatArea;
