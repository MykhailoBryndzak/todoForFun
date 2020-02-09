import React from "react";
import {useHistory} from "react-router-dom"

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return(
    <>
      <h1>Сторінка інформації</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet asperiores, et natus neque nisi numquam porro quae totam veniam.</p>
      <button className="btn" onClick={() => history.push("/")}>Повернутись назад до списку задач</button>
    </>
  )
};

