import React from "react";

type Props = {
  className?: string;
};

const Sphere2: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`rounded-full gradient-sphere2 ease-in-out animate-gradientShift2 ${className || ""}`}
    />
  );
};

export default Sphere2;
