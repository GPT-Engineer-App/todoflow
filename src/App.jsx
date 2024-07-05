import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Calendar, Clock } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import AllTasks from "./pages/AllTasks.jsx";
import TodayTasks from "./pages/TodayTasks.jsx";
import UpcomingTasks from "./pages/UpcomingTasks.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "All Tasks",
    to: "/all-tasks",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Today",
    to: "/today",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Upcoming",
    to: "/upcoming",
    icon: <Clock className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="all-tasks" element={<AllTasks />} />
              <Route path="today" element={<TodayTasks />} />
              <Route path="upcoming" element={<UpcomingTasks />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;