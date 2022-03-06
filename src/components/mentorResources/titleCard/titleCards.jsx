import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import PictureDialog from "../../../univers/pictureDialog";
import { useSelectImage } from "../../../univers/selectImage";

import "./titleCard.css";

export default function TitleCards({ title, srcArray }) {
  //by calling useSelectImage(), we get selectedImage, handleClickOpen, handleClose;
  const { selectedImage, handleClickOpen, handleClose } = useSelectImage();

  return (
    <div className="consulting">
      <h1 className="zixun"> {title} </h1>
      <Grid
        container
        className="selc_100"
        justifyContent="space-between"
        spacing={1}
      >
        {srcArray.map((src, index) => (
          <Grid item xs={4} key={index}>
            <div className="ziyuan">
              <img
                src={src}
                onClick={() => handleClickOpen(src)}
                className="chp-head-img"
              />
            </div>
          </Grid>
        ))}
      </Grid>

      <PictureDialog selectedImage={selectedImage} handleClose={handleClose} />
    </div>
  );
}
