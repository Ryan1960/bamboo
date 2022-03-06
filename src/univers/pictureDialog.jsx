import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
export default function PictureDialog({ selectedImage, handleClose }) {
  return (
    <Dialog open={!!selectedImage} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Is this the picture you are looking for?
        <Button
          onClick={handleClose}
          color="primary"
          style={{ float: "right" }}
        >
          <Close />
        </Button>
      </DialogTitle>
      <DialogContent>
        <img src={selectedImage} className="chp-head-img" />
      </DialogContent>
    </Dialog>
  );
}
