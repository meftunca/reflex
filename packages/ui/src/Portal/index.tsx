import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
const Portal: React.FC<{
  container?: HTMLElement;
  enable?: null | boolean;
}> = ({
  children,
  container = document.getElementById("destination"),
  enable = false,
}) => {
  const [mount, setMount] = useState<HTMLElement | null>(container);
  const portalKey = useRef(Number(Date.now()).toString(8)).current;
  useEffect(() => {
    let destination = document.getElementById("destination");
    if (destination === null) {
      destination = document.createElement("div");
      destination.id = "destination";
      document.body.append(destination);
    }
    // const div = document.createElement("div");
    // destination.append(div);
    setMount(destination);
  }, []);
  // useEffect(() => {
  //   if (enable !== undefined) {
  //     if (enable === null && mount !== null) {
  //       setMount(null);
  //     }
  //   }
  //   return () => {
  //     if (mount !== null) mount.innerHTML = "";
  //   };
  // }, [mount, enable]);
  if (enable === false) return null;
  return mount ? createPortal(children, mount, portalKey) : null;
};

export default Portal;
