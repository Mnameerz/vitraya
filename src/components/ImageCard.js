import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ImageCard = ({ image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image.img}
        alt={image.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {image.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {image.tags}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
