import React from "react";

type Props = {};

const Section = ({
  children,
  index,
  href,
}: {
  children: React.ReactNode;
  index: Number;
  href: String;
}) => {
  return (
    <div>
      <div className="max-w-7xl m-auto">{children}</div>
    </div>
  );
};

export default Section;
