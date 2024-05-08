import { useLocation } from "react-router-dom";
import "../../style/courseDetail.scss";
const course = [
  {
    courseName: "Introduction to Web Development",
    courseDuration: 3,
    noOfQuiz: 5,
    price: 1000,
    image: "/images/card/2.png",
  },
  {
    courseName: "Advanced JavaScript",
    courseDuration: 2,
    noOfQuiz: 3,
    price: 800,
    image: "/images/card/1.png",
  },
];

export default function CourseDetail() {
  const data = useLocation();
  const courseData = data.state;
  return (
    <section className="courseDetail">
      {courseData && (
        <div className="detail">
          <div className="courseDescription">
            <div className="course-detail">
              <h1>{courseData.courseName}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium vero blanditiis molestias a sed asperiores
                aspernatur
              </p>
            </div>

            <div className="courseDuration">
              <h4>
                Course Duration:{" "}
                <span style={{ color: "#a43af8" }}>
                  {courseData.courseDuration} Month{" "}
                </span>
              </h4>
            </div>

            <div className="noOfQuiz">
              <h4>
                no. Of Quiz:{" "}
                <span style={{ color: "#a43af8" }}>
                  {Number(courseData.noOfQuiz) < 10
                    ? `0${courseData.noOfQuiz}`
                    : courseData.noOfQuiz}
                </span>
              </h4>
            </div>

            <div className="leadTrainer">
              <h4>
                Lead Trainer:{" "}
                <span style={{ color: "#a43af8" }}>{courseData.leadTrainer}</span>
              </h4>
            </div>

            <div className="assistantTrainer">
              <h4>Assistant Trainer</h4>
              <ul>
                {courseData.assistantTrainer &&
                  courseData.assistantTrainer.map((value, index) => (
                    <li key={index} style={{ color: "#a43af8" }}>
                      {value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="courseImage">
            <img src={courseData.image} alt="image not found" />
          </div>
        </div>
      )}
    </section>
  );
}
