import React from "react";
import {Todos} from "../components/Todos";

export const LongTermPage: React.FC = () => {
  return (
    <>
      <h3>Довготривалі цілі</h3>

      <Todos tasksType="lognTermTasks"/>
    </>
  );
};