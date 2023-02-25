import React, { createContext, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import { Post } from "./components/Post";
import ThemeProvider from "./components/ThemeContext";

function App() {
  const [theme, setTheme] = useState('light');
  const [posts, setPosts] = React.useState([
    {
      id: Math.random(),
      title: "Title 1",
      subTitle: "Subtitle 1",
      like: 23,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title 2",
      subTitle: "Subtitle 2",
      like: 34,
      read: false
    },
    {
      id: Math.random(),
      title: "Title 3",
      subTitle: "Subtitle 3",
      like: 27,
      read: true
    },
    {
      id: Math.random(),
      title: "Title 4",
      subTitle: "Subtitle 4",
      like: 27,
      read: false
    }
  ]);

  const handleUpdate = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title ${prevState.length + 1}`,
        subTitle: `Subtitle ${prevState.length + 1}`,
        like: prevState.length + 7.4,
        read: false
      }
    ])
  }

  const handleRemovePost = (postId) => {
    setPosts((prevState) => (
      prevState.filter(item => item.id !== postId)

    ))
  }


  return (
    <ThemeProvider>
      <Header
        
      >
          <p>Posts of the week</p>
          <button onClick={handleUpdate}>Update posts</button>
          
      </Header>

      {
        posts.map(post => (
          <Post
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
        ))
      }
    </ThemeProvider>
  )
}

export default App;
