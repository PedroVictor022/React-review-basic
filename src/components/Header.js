import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <>
      {/* <h1>{title ?? "Jstack's Blog"}</h1> */}
      <h1>{title}</h1>
      { children }
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