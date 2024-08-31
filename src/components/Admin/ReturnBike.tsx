// import { useState } from "react";

const ReturnBike = () => {
  // const [rentals, setRentals] = useState([]); // Replace with actual data fetching

  // const handleReturnBike = (rentalId: string) => {
  //   // Logic to calculate and update rental details
  // };

  return (
    <div>
      <h2>Return Bike</h2>
      {/* <ul>
        {rentals.map((rental) => (
          <li key={rental.id}>
            <span>
              {rental.bikeName} - Start Time:{" "}
              {new Date(rental.startTime).toLocaleString()}
            </span>
            <button onClick={() => handleReturnBike(rental.id)}>
              Calculate & Return
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ReturnBike;
