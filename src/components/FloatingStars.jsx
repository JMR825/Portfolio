import React from "react";

const FloatingStars = React.memo(() => {
  const stars = Array.from({ length: 30 });

  return (
    <div className="floating-stars" aria-hidden="true">
      {stars.map((_, idx) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 8}s`
        };
        return <div key={idx} className="star" style={style} />;
      })}
    </div>
  );
});

FloatingStars.displayName = "FloatingStars";

export default FloatingStars;
