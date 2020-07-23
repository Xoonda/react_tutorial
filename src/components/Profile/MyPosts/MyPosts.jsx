import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.myposts__wrapper}>
      My Posts
      <div>
        <div><textarea></textarea></div>
        <button>Add Posts</button>
      </div>
      <div className={s.myposts__message}>
      <Post message="Hi! How are u?" likecount="10" />
      <Post message="Hello, I`am fine! And u?" likecount="15" />
      </div>
    </div>
  )
}

export default MyPosts;