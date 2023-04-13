import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateLayout({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user === false) {
      navigate("/security/login");
    }
  }, [user, navigate]);

  if (user === false) return null;

  return (
    <div>
      <Outlet />
    </div>
  );
}
