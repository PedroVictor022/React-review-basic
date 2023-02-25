import Header from "./components/Header";
import { Post } from "./components/Post";


function App() {
  return (
    <>

      <Header
        title="Jstack's Blog"
      >
        <h2>Posts of the week</h2>
      </Header>

      <Post
        post={{
          title:"Week 1",
          subTitle:"Hello World"
        }}
      likes={10}
      />

      <Post
        post={{
          title:"Week 2",
          subTitle:"Install propTypes"
        }}
        likes={12}
      />

    </>
  );
}

export default App;
