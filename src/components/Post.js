import PropTypes from "prop-types";

export function Post(props) {

  return (
    <>
      <article>
        <strong>
          {
            props.post.read ? <s>{props.post.title}</s> : props.post.title
          }
        </strong><br />
        <small>{props.post.subTitle}</small>
        <br />
        Media: {props.post.like / 2}
        <br />
        <button onClick={() => props.onRemove(props.post.id)}>Remove post</button>
      </article>
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}