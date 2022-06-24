import { Home } from "@mui/icons-material";
import React, { useState } from "react";
import ImageCard from "./ImageCard.js";
import UploadButton from "./UploadButton.js";
import { AppBar, Typography, Button, Toolbar } from "@mui/material/";

const HomePage = () => {
  const [images, setImages] = useState([]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Image Sharing Website
          </Typography>
          <UploadButton />
        </Toolbar>
      </AppBar>
      {images.length ? (
        images.map((image) => {
          <ImageCard image={image} />;
        })
      ) : (
        <h3>NO IMAGES FOUND </h3>
      )}
    </>
  );
};

export default HomePage;
