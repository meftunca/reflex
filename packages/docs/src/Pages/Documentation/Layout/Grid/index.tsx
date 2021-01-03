import { Box, Grid, Text } from "@re-flex/ui";
import React from "react";

export default () => {
  return (
    <div>
      <Text variant="h2">Grid</Text>
      <br />
      <Grid gap={24}>
        <Grid.Col width={2} xs={12} md={6}>
          <Box bgColor="#f0f0f0" p={40} radius={6} />
        </Grid.Col>
        <Grid.Col width={5} height={4}>
          <Box bgColor="#ff99ff" p={40} radius={6} />
        </Grid.Col>
        <Grid.Col width={2}>
          <Box bgColor="#f0f0f0" p={40} radius={6} />
        </Grid.Col>
        <Grid.Col width={5}>
          <Box bgColor="#ff99ff" p={40} radius={6} />
        </Grid.Col>
        <Grid.Col width={4}>
          <Box bgColor="#f0f0f0" p={40} radius={6} />
        </Grid.Col>
      </Grid>
    </div>
  );
};
