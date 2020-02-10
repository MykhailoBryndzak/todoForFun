import React from "react";
import {Todos} from "../components/Todos";

export const DayTasksPage: React.FC = () => {
  return (
    <>
      <Todos tasksType="todos"/>
    </>
  );
};