import { Post } from "./components/Post";


function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr/>

      <Post
        title="Week 1"
        subTitle="Hello World"
      />

      <Post 
        title="Week 2"
      />

    </>
  );
}

export default App;
