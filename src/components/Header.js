export default function Header({ title, children }) {
  return (
    <>
      <h1>{title ?? "JStack's Blog"}</h1>
      { children }
      <hr />
    </>
  )
}