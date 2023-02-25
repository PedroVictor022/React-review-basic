import React from "react";
import Header from "./components/Header";
import { Post } from "./components/Post";


function App() {
  const [posts, setPosts] = React.useState([
    {
      id: Math.random(),
      title: "Title 1",
      subTitle: "Subtitle 1",
      like: 23,
    },
    {
      id: Math.random(),
      title: "Title 2",
      subTitle: "Subtitle 2",
      like: 34
    },
    {
      id: Math.random(),
      title: "Title 3",
      subTitle: "Subtitle 3",
      like: 27
    }
  ]);

  const handleUpdate = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title ${prevState.length + 1}`,
        subTitle: `Subtitle ${prevState.length + 1}`,
        like: prevState.length + 7.4
      }
    ])
  }

  const handleRemovePost = (postId) => {
    setPosts((prevState) => (
      prevState.filter(item => item.id !== postId)
      
    ))
  }

  return (
    <>

      <Header>
        <>
          <p>Posts of the week</p>
          <button onClick={handleUpdate}>Update posts</button>
        </>
      </Header>

      {
        posts.map(post => (
          <Post 
            key={post.id}
            like={post.like}
            onRemove={handleRemovePost}
            post={{
              id: post.id,
              title: post.title,
              subTitle: post.subTitle
            }}
          />
        ))
      }

    </>
  );
}

export default App;
