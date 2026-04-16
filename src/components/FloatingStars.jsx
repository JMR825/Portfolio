import React from "react";

const FloatingStars = React.memo(() => {
  const stars = Array.from({ length: 50 });

  return (
    <div className="floating-stars" aria-hidden="true">
      {stars.map((_, idx) => {
        const style = {
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${4 + Math.random() * 6}s`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        };
        return (
          <div 
            key={idx} 
            className="star" 
            style={style}
          />
        );
      })}
    </div>
  );
});

FloatingStars.displayName = "FloatingStars";

export default FloatingStars;
