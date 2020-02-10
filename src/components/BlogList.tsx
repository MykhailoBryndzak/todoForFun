import React from 'react';
import {IPost} from "../interfaces";

type TodoListProps = {
  posts: IPost[],
  onRemove(id: number): void
}

export const BlogList: React.FC<TodoListProps> = ({posts, onRemove}) => {
  if (posts.length === 0) {
    return <p className="center">Немає записів!</p>
  }
  return (
    <ul className="todo">
      {posts.map(post => {
        return (
          <li className="post" key={post.id}>
            <div className="post-header">
              <h4>{post.title}</h4>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(post.id)}
              >
                delete
              </i>
            </div>
            <p className="post-text">{post.text}</p>
          </li>
        )
      })}
    </ul>
  )
};
