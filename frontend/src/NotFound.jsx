import React from "react";

function NotFound() {
  const notFoundImg =
    "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";
  return (
    <div className="flex flex-col items-center justify-center align-middle bg-black h-screen">
      <img src={notFoundImg} alt="" />
    </div>
  );
}

export default NotFound;
