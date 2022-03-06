import { useState } from "react";

export const useSelectImage = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleClickOpen = (src) => {
    setSelectedImage(src);
  };
  const handleClose = () => {
    setSelectedImage(undefined);
  };

  return { handleClickOpen: handleClickOpen, handleClose, selectedImage };
};
