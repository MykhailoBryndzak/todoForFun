import React from "react";
import {Todos} from "../components/Todos";

export const WeekTasksPage: React.FC = () => {
  return (
    <>
      <h3>Список справ на тиждень</h3>
      <Todos tasksType="weekTasks"/>
    </>
  );
};