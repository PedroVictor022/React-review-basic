import PropTypes from "prop-types";

export function Post({ title, subTitle, likes }) {

  console.log({title})

  return (
    <>
      <article>
        <strong>{title ?? "Default Post"}</strong><br />
        <small>{subTitle ?? "Comments"}</small>
        <br />
        Media: {likes / 2}
      </article>
    </>
  )
}

