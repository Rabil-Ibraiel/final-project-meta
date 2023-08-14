import { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ avt }) => {
  const [form, setForm] = useState({
    date: 0,
    time: avt[0],
    nog: 1,
    occasion: "Birthday",
  });

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      date: 0,
      time: avt[0],
      nog: 1,
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      data: Yup.string().required("This field is Required"),
      time: Yup.string().required("This field is Required"),
      nog: Yup.number().min("1").max("10").required("This field is Required"),
      occasion: Yup.string().required("This field is Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("table", JSON.stringify(form));
      console.log(formik.errors[0])
      navigate("/booked")
    },
  });


  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("table", JSON.stringify(form));
    navigate("/booked");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <h1 className="form-title">Reservation Form</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        onChange={formik.handleChange}
        value={formik.values.data}
        name="data"
        type="date"
        id="res-date"
        onBlur={formik.handleBlur}
      />
      {formik.errors.data ? <p className="form_error">*{formik.errors.data}</p> : ""}
      <label htmlFor="res-time">Choose time</label>
      <select
        onChange={formik.handleChange}
        value={formik.values.time}
        name="time"
        id="res-time "
      >
        {avt.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        onChange={formik.handleChange}
        value={formik.values.nog}
        name="nog"
        type="number"
        placeholder="1"
        min={1}
        max={10}
        id="guests"
        onBlur={formik.handleBlur}
      />
      {formik.errors.nog && formik.touched.nog ? <p className="form_error">* Number of guests {formik.errors.nog.substring(4, formik.errors.nog.length)}</p> : ""}
      <label htmlFor="occasion">Occasion</label>
      <select
        onChange={formik.handleChange}
        value={formik.values.occasion}
        name="occasion"
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
