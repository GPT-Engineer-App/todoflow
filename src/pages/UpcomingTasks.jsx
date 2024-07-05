import React from "react";
import AllTasks from "./AllTasks";

const UpcomingTasks = () => {
  const today = new Date().toISOString().split("T")[0];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const upcomingTasks = tasks.filter((task) => task.dueDate > today);

  return <AllTasks tasks={upcomingTasks} />;
};

export default UpcomingTasks;