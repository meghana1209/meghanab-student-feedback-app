import React, { useEffect, useState } from "react";
import API from "../../api";

const Profile = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data } = await API.get("/feedbacks/myfeedbacks");
        setFeedbacks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>My Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <ul>
          {feedbacks.map((fb) => (
            <li key={fb._id}>
              <strong>{fb.course.title}</strong>: {fb.rating}/5 <br />
              {fb.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
