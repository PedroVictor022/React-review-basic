import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

export function Post(props) {

  return (
    <>
      <article>
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
        />
        <br />
        <small>{props.post.subTitle}</small>
        <br />
        Media: {props.post.like / 2}
        <br />

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