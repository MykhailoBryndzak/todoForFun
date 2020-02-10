import React from "react";
import {Todos} from "../components/Todos";

export const WeekTasksPage: React.FC = () => {
  return (
    <>
      <Todos tasksType="weekTasks"/>
    </>
  );
};