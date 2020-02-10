import React from "react";
import {Todos} from "../components/Todos";

export const DayTasksPage: React.FC = () => {
  return (
    <>
      <h3>Список справ на день</h3>
      <Todos tasksType="todos"/>
    </>
  );
};