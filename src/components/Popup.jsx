import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const valueInputChat = useSelector((state) => state.cotroller.valueInput);

  const [responseChatMessage, setResponseChatMessage] = useState("");
  const SendMessage = async () => {
    setLoading(false);
    try {
      const response = await axios.post("http://localhost:5000/chatAi", {
        message: valueInputChat,
      });
      setResponseChatMessage(response.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <IoIosSend
          style={{ color: "white", fontSize: "20px" }}
          onClick={SendMessage}
        />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"ResponseMessage"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {loading === false ? <CircularProgress /> : responseChatMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CloseChatMessage</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
