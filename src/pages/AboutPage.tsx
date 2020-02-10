import React, {useEffect, useState} from "react";
import {BlogForm} from "../components/BlogForm";
import {BlogList} from "../components/BlogList";
import {IPost} from "../interfaces";

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blog") || '[]') as IPost[];

    setPosts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(posts))
  }, [posts]);

  const addHandler = (newPost: IPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Ви впевнені, що хочети видалити запис?");
    if (shouldRemove) {
      setPosts(prev => prev.filter(todo => todo.id !== id))
    }
  };

  return (
    <>
      <BlogForm onAddPost={addHandler} />
      <BlogList posts={posts} onRemove={removeHandler}/>
    </>
  )
};