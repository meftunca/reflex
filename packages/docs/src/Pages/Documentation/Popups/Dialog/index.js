import { css } from "@emotion/react";
import { Box, Button, Dialog, Text } from "@re-flex/ui";
import React, { useRef, useState } from "react";

export default (props) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  return (
    <div>
      <br />
      <Button onClick={() => dialogRef.current?.open()}>
        Open {props.role} ({props.drawerPosition})
      </Button>
      <Dialog
        {...props}
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
            <Button onClick={close} variant="contained" color="red">
              Save
            </Button>
          </div>
        )}
      >
        <Box p={32}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus laudantium porro doloribus commodi sunt, ab incidunt
            unde explicabo quas hic dolores ratione assumenda repellat in beatae
            maiores rem eius doloremque.
          </Text>
        </Box>
      </Dialog>
    </div>
  );
};
