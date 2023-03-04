import PropTypes from "prop-types";
import PostHeader from "../postHeader";
import { Container, Rate, Subtitle } from "./styles";

export function Post(props) {

  return (
    <Container>
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
    </Container>
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