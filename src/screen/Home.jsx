import "../style/Home.scss";
import { useNavigate } from "react-router-dom";
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


export default function Home() {
  const data = course;
  const navigate = useNavigate();
  return (
    <section className="home">

      <div className="shortInfo">
        <div className="course1">
          <h1 className="heading">Courses</h1>
          <p>All our total courses so far.</p>
          <h1>
            {course &&
              (course.length > 0) & (course.length < 10) &&
              "0" + course.length}
          </h1>
          <h1>{course && course.length >= 10 && course.length}</h1>
        </div>
      </div>

      <div className="courses">
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
                  onClick={() =>
                    navigate("course/course-detail", { state: value })
                  }
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

    </section>
  );
}
