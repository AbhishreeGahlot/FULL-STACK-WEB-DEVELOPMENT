\import { useState } from "react";
import "./Comment.css";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "good",
      rating: 4,
    },
    {
      username: "@abhishree",
      remarks: "Excellent!",
      rating: 5,
    },
  ]);

  return (
    <div>
      <h4>All Comments</h4>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span>{comment.remarks}</span>
          &nbsp;
          <span>(rating = {comment.rating})</span>
          &nbsp;
          <p>– {comment.username}</p>
        </div>
      ))}
    </div>
  );
}
