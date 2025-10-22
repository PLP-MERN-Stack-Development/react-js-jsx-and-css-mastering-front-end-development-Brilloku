import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiList from "./pages/ApiList";


export default function App() {
return (
<Router>
<ThemeProvider>
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TaskManager />} />
<Route path="/api" element={<ApiList />} />
</Routes>
</Layout>
</ThemeProvider>
</Router>
);
}