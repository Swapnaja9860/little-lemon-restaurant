import { render, screen } from "@testing-library/react";
import BookingForm from "../Components/BookingForm/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Date");
    expect(headingElement).toBeInTheDocument();
})

