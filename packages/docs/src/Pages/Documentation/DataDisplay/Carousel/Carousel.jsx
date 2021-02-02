import { Box, Carousel } from "@re-flex/ui";
import React from "react";

const SimpleList = () => {
  return (
    <Box display="flex">
      <Carousel initialHeight={400} initialWidth={600}>
        <img
          src="https://images.unsplash.com/photo-1602524811122-b3aea0e2c0ee?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=60"
          alt="picture"
        />
        <img
          src="https://images.unsplash.com/photo-1578699183408-1258e0398a2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=60"
          alt="picture"
        />
        <img
          src="https://images.unsplash.com/photo-1609850092631-888fc0e3b7bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=60"
          alt="picture"
        />
      </Carousel>
    </Box>
  );
};

export default SimpleList;
