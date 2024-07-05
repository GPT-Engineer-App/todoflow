import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the Todo App</h1>
      <p className="mb-4">Manage your tasks efficiently and effectively.</p>
      <Button onClick={() => navigate("/all-tasks")}>Get Started</Button>
    </div>
  );
};

export default Index;
