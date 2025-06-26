import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "#ff2424" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
