import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
          <div className = {s.item}>
            
            <img className={s.post__avatar}src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU"/>
            {props.message}
            <div><span><img src="https://pngicon.ru/file/uploads/serdce.png" className= {s.post__like}/> {props.likecount}</span></div>
          </div>
    )
}

export default Post;