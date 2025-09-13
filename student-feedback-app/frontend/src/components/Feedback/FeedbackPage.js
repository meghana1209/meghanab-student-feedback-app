import React, { useEffect, useState } from "react";
import API from "../../api";

const FeedbackPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get("/courses");
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/feedbacks", { course: selectedCourse, rating, comment });
      alert("Feedback submitted!");
      setComment("");
      setRating(5);
      setSelectedCourse("");
    } catch (err) {
      alert(err.response?.data?.message || "Error submitting feedback");
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.title}
            </option>
          ))}
        </select>
        <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
