import { Chip, Text } from "@re-flex/ui";
import * as React from "react";

const ChipPage = () => {
  return (
    <div>
      <Text variant="h2">Chips</Text>
      <br />
      <Text variant="h3">Simple</Text>
      <Chip label={"Test"} />
      <Chip label={"Test"} onDelete={() => console.info("Silindi")} />
      <br />
      <br />
      <br />
      <Text variant="h3">Variants/Actions</Text>
      <br />
      <br />
      <Text variant="h4">Deletable</Text>
      <br />
      <Chip
        label={"contained"}
        variant="contained"
        color="primary"
        onDelete={() => console.info("Silindi")}
      />
      <Chip
        label={"outlined"}
        variant="outlined"
        onDelete={() => console.info("Silindi")}
      />
      <Chip
        label={"text"}
        variant="text"
        onDelete={() => console.info("Silindi")}
      />
      <br />
      <br />
      <Text variant="h4">Selectable</Text>
      <br />
      <Chip
        label={"contained"}
        variant="contained"
        color="primary"
        onSelect={() => console.info("Silindi")}
      />
      <Chip
        label={"outlined"}
        variant="outlined"
        onSelect={() => console.info("Silindi")}
      />
      <Chip
        label={"text"}
        variant="text"
        onSelect={() => console.info("Silindi")}
      />
    </div>
  );
};

export default ChipPage;
