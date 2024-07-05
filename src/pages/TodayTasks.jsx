import React from "react";
import AllTasks from "./AllTasks";

const TodayTasks = () => {
  const today = new Date().toISOString().split("T")[0];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const todayTasks = tasks.filter((task) => task.dueDate === today);

  return <AllTasks tasks={todayTasks} />;
};

export default TodayTasks;