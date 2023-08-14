import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BookingForm from '../components/bookingForm/BookingForm'
import "./BookingPage.css"


const BookingPage = () => {
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    .then((res) => res.json())
    .then((res) => console.log(res))
  }, [])

  const [availableTime, setAvailableTime] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

  return (
    <>
        <Navbar />
        <div className='bookgin-page-form'>
          <BookingForm avt={availableTime}/>
        </div>
        <Footer />
    </>
  )
}

export default BookingPage