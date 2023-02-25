import PropTypes from "prop-types";
import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export default function Header({ title, children }) {

  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{title}</h1>
      <Button
        onClick={onToggleTheme}
      >
        Change Theme
      </Button>
      {children}
      <hr />
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `JStack's Blog`,
}