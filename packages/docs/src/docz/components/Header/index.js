/** @jsx jsx */
import { jsx, Box, IconButton, Button, AppBar } from "@re-flex/ui";

import { Edit, Menu, Sun, Github } from "../Icons";
import { Logo } from "../Logo";

export const Header = (props) => {
  const { onOpen } = props;

  // const [colorMode, setColorMode] = useColorMode()
  const colorMode = "light";
  const toggleColorMode = () => {
    // setColorMode(colorMode === 'light' ? 'dark' : 'light')
    if (window.changeTheme) {
      let theme = localStorage.getItem("reflex-theme");
      window.changeTheme(!theme || theme === "light" ? "dark" : "light");
    }
  };

  return (
    <AppBar
      bgColor="primary"
      p={[12, 24]}
      display="flex"
      css={{ alignItems: "center" }}
      data-testid="header"
    >
      <IconButton onClick={onOpen} color="white" size={32} icon={<Menu />} />
      <Logo />
      <IconButton
        onClick={() =>
          (window.location.href = "https://github.com/meftunca/reflex")
        }
        size={32}
        color="white"
        icon={<Github />}
        color="white"
      />
      <IconButton
        size={32}
        color="white"
        onClick={toggleColorMode}
        aria-label={`Switch to ${colorMode} mode`}
        icon={<Sun />}
        css={{ marginRight: 24 }}
      />
      <Button
        color="#fff"
        size={12}
        variant="outlined"
        affixIcon={<Edit color="#fff" css={{ minWidth: 24 }} />}
      >
        Edit page
      </Button>
    </AppBar>
  );
};
