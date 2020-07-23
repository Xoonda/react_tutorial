import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Posts</button>
      </div>
      <Post message="Hi! How are u?" likecount="10"/>
      <Post message="Hello, I`am fine! And u?" likecount="15"/>
    </div>
  )
}

export default MyPosts;