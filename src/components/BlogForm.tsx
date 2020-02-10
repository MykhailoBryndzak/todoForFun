import React, {useRef, useState} from 'react';
import {IPost} from "../interfaces";

interface BlogFormProps {
  onAddPost(newPost: IPost): void
}

export const BlogForm: React.FC<BlogFormProps> = props => {

  const refTitle = useRef<HTMLInputElement>(null);
  const refText = useRef<HTMLTextAreaElement>(null);

  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const onChangeTitle = () => {
    setPostTitle(refTitle.current!.value);
  };
  const onChangePostText = () => {
    setPostText(refText.current!.value);
  };

  const keyPressHandlerText = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      refText.current!.style.cssText = 'height:' + refText.current!.scrollHeight + 'px';
    }
  };

  const onClickAddPostHandler = () => {
    if (postTitle && postText) {
      const newPost: IPost = {
        title: postTitle,
        id: Date.now(),
        text: postText
      };
      props.onAddPost(newPost);

      setPostTitle("");
      setPostText("");
      refText.current!.style.cssText = 'height:' + refText.current!.scrollHeight;
    }
  };

  return (
    <div className="col s12">
      <div className="input-field">

        <label htmlFor="post-title" className="active">
          Введіть назву поста
        </label>

        <input
          onChange={onChangeTitle}
          ref={refTitle}
          type="text"
          id="post-title"
          value={postTitle}
        />
      </div>
      <div className="input-field">

        <label htmlFor="post-content" className="active">
          Введіть контент поста
        </label>

        <textarea
          id="post-content"
          className="materialize-textarea"
          onKeyUp={keyPressHandlerText}
          onChange={onChangePostText}
          ref={refText}
          value={postText}
        />
      </div>
      <button className="btn" onClick={onClickAddPostHandler}>Create Post</button>
    </div>
  )
};
