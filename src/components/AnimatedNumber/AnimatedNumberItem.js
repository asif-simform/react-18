import { useEffect, useRef, useState } from "react";
import "./AnimatedNumberItem.scss";

// export interface AnimatedNumberItemProps {
//   number: number;
//   size: number;
//   duration?: number;
//   order?: "asc" | "desc";
// }

const AnimatedNumberItem = ({
  number,
  size,
  duration = 200,
  order = "asc",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberWrapperRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(number);
  }, [number]);

  useEffect(() => {
    const $numberWrapper = numberWrapperRef.current;
    if ($numberWrapper) {
      $numberWrapper.style.transform = `translateY(${
        size * (order === "desc" ? 9 - currentIndex : currentIndex) * -1
      }px)`;
    }
  }, [currentIndex, size, order]);

  return (
    <div className="AnimatedNumberItem" style={{ height: size }}>
      <div
        ref={numberWrapperRef}
        className="AnimatedNumberItem__wrapper"
        style={{ transitionDuration: `${duration}ms` }}
      >
        {Array.from({ length: 10 }).map((_, number) => (
          <div
            key={number}
            className="AnimatedNumberItem__number__increase"
            style={{
              fontSize: size,
              height: size,
            }}
          >
            {order === "desc" ? 9 - number : number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedNumberItem;