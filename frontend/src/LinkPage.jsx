import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const baseUrl = process.env.REACT_APP_BASE_URL;

function LinkPage() {
  const { link } = useParams();
  useEffect(() => {
    window.location.href = `${baseUrl}/url/${link}`;
  }, [link]);
  return <div>Redirecting...</div>;
}

export default LinkPage;
