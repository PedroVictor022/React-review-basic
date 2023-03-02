import PropTypes from "prop-types";
import { useContext } from "react";
import Button from "../button";
import { ThemeContext } from "../context/ThemeContext";

import styled from "styled-components";

export default function Header({ title, children }) {

  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
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


const Title = styled.h1`
  color: #637BF3;
`;