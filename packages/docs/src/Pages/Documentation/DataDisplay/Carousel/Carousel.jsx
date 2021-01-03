import React from "react";
import { Box, Carousel } from "@re-flex/ui";

const SimpleList = () => {
  return (
    <Box display="flex">
      <Carousel initialHeight={400} initialWidth={600}>
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
        <img
          src="https://source.unsplash.com/random/400x400"
          alt="https://source.unsplash.com/random/400x400"
        />
      </Carousel>
    </Box>
  );
};

export default SimpleList;
