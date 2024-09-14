import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 mx-auto">
      {children}
    </div>
  );
};

export default Container;
