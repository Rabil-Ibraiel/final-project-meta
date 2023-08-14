import { useEffect } from "react";
import "./Booked.css";
import { useNavigate } from "react-router-dom";

const Booked = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, []);

  return (
    <div className="booked">
      <h1>Your Table has been booked</h1>
      <p>Redirecting...</p>
      <span class="loader"></span>
    </div>
  );
};

export default Booked;
