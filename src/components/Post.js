import PropTypes from "prop-types";

export function Post(props) {

  return (
    <>
      <article>
        <strong>{props.post.title}</strong><br />
        <small>{props.post.subTitle}</small>
        <br />
        Media: {props.like / 2}
        <br/>
        <button onClick={() => props.onRemove(props.post.id)}>Remove post</button>
      </article>
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  like: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
  }).isRequired,
}