import React, { useEffect, useState } from "react";
import API from "../../api";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchAllFeedbacks = async () => {
      try {
        const { data } = await API.get("/feedbacks"); // Admin route
        setFeedbacks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllFeedbacks();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb._id}>
            Student: {fb.student.name} | Course: {fb.course.title} | Rating: {fb.rating} <br />
            Comment: {fb.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
