import Header from "./components/Header";
import { Post } from "./components/Post";


function App() {
  return (
    <>
      
      <Header>
        <h2>Posts of the week</h2>
      </Header>

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
