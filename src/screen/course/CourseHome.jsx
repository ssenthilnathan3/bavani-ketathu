import "../../style/course.scss";
import { useNavigate } from "react-router-dom"; 
export default function CourseHome() {
  const navigate = useNavigate();
  return (
    <div className="course">
      <div className="heading">
        <h1>Course</h1>
      </div>

      <div className="box">
        {data && data.length > 0 ? (
          data.map((value, index) => {
            return (
              <div
                key={index}
                className="box1"
                onClick={() => navigate("course-detail", { state: value })}
              >
                <img src={value.image} alt="image not found" width="300px" />
                <div className="description">
                  <h1>{value.courseName}</h1>
                  <p>Course duration: {value.courseDuration} Month</p>
                  <p>no. of Quiz: {value.noOfQuiz}</p>
                  <h2>RS {value.price}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
}
