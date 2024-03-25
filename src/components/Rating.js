import { useEffect, useState } from "react";
import "./Rating.css";

export function Rating({ vote_average }) {
  const [score, setScore] = useState([]);

  useEffect(() => {
    let result = [];
    for (let i = 0; i < Math.round(vote_average / 2); i++) {
      result.push(i);
    }
    setScore(result);
  }, [vote_average]);

  return (
    <div className="rating">
      {score.map((item) => (
        <Star key={item} />
      ))}
    </div>
  );
}

export function Star() {
  return <div className="star">★</div>;
}
