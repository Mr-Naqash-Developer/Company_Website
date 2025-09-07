import React from "react";

type Props = { className?: string };

const Sphere1: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`rounded-full animate-gradientShift ease-in-out gradient-sphere ${className || ""}`}
    />
  );
};

export default Sphere1;
