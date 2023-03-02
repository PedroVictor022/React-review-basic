import PropTypes from "prop-types";
import PostHeader from "../postHeader";
import { Rate, Subtitle } from "./styles";

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
        
        <Subtitle>{props.post.subTitle}</Subtitle>
        
        <Rate>Media: {props.post.like / 2}</Rate>
        

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