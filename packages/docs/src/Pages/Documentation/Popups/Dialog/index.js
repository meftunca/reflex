import { css } from "@emotion/react";
import { Button, Dialog, Text } from "@re-flex/ui";
import React, { useRef, useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  return (
    <div>
      <Text variant="h2">Dailogs</Text>
      <br />
      <br />
      <br />
      <Button onClick={() => dialogRef.current?.open()}>Open Dialog</Button>
      <Dialog
        ref={dialogRef}
        header={"Header 1"}
        footer={({ close }) => (
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <Button onClick={close}>Close</Button>
            <Button variant="contained" color="red">
              Save
            </Button>
          </div>
        )}
      >
        <Dialog
          header={"Header 2"}
          content={`
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus laudantium porro doloribus commodi sunt, ab incidunt
              unde explicabo quas hic dolores ratione assumenda repellat in
              beatae maiores rem eius doloremque.
            `}
        ></Dialog>
      </Dialog>
    </div>
  );
};
