import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate";
import Home from "./screen/Home";
import Course from "./screen/course/Course";
import CourseHome from "./screen/course/CourseHome.jsx";
import CourseDetail from "./screen/course/CourseDetail.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />}>
            <Route index element={<CourseHome />} />
            <Route path="course-detail" element={<CourseDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
