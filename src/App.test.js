import { render, screen } from "@testing-library/react";
import BookingForm from "./components/bookingForm/BookingForm";
import BookingPage from "./BookingPage/BookingPage";

test("render a Reservation Form", () => {
  render(<BookingPage />);
  render(<BookingForm />);
  const heading = screen.getByText("Reservation Form");
  expect(heading).toBeInTheDocument();
});
