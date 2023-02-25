export function Post({ title, subTitle }) {

  console.log({title, subTitle})

  return (
    <>
      <article>
        <strong>{title ?? "Default Post"}</strong><br />
        <small>{subTitle ?? "Comments"}</small>
        <br/>
      </article>
    </>
  )
}