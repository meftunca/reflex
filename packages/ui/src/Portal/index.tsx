import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
const Portal: React.FC<{ container?: HTMLElement }> = ({
  children,
  container = null,
}) => {
  const [mount, setMount] = useState<HTMLElement | null>(container);
  const hasContainer = () => {
    let destination = document.getElementById("destination");
    if (destination === null) {
      destination = document.createElement("div");
      destination.id = "destination";
      document.body.append(destination);
    }
    const div = document.createElement("div");
    destination.append(div);
    setMount(div);
  };
  useEffect(() => {
    const destination = document.getElementById("destination");
    if (mount === null) {
      hasContainer();
    } else {
    }
    return () => {
      // if (mount && destination) destination.removeChild(mount);
    };
  }, [mount]);
  return mount ? createPortal(children, mount) : null;
};

export default Portal;
