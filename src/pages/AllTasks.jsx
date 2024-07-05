import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Edit, Trash } from "lucide-react";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({ title: "", description: "", dueDate: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleAddTask = () => {
    setTasks([...tasks, { ...taskDetails, id: Date.now() }]);
    setTaskDetails({ title: "", description: "", dueDate: "" });
  };

  const handleEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setTaskDetails(task);
    setIsEditing(true);
    setCurrentTaskId(id);
  };

  const handleUpdateTask = () => {
    setTasks(tasks.map((task) => (task.id === currentTaskId ? taskDetails : task)));
    setTaskDetails({ title: "", description: "", dueDate: "" });
    setIsEditing(false);
    setCurrentTaskId(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Task" : "Add Task"}</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                isEditing ? handleUpdateTask() : handleAddTask();
              }}
            >
              <Input
                name="title"
                placeholder="Title"
                value={taskDetails.title}
                onChange={handleInputChange}
                className="mb-2"
              />
              <Textarea
                name="description"
                placeholder="Description"
                value={taskDetails.description}
                onChange={handleInputChange}
                className="mb-2"
              />
              <Input
                type="date"
                name="dueDate"
                value={taskDetails.dueDate}
                onChange={handleInputChange}
                className="mb-2"
              />
              <Button type="submit">{isEditing ? "Update Task" : "Add Task"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
              <p>Due: {format(new Date(task.dueDate), "PPP")}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => handleEditTask(task.id)}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteTask(task.id)}>
                <Trash className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;