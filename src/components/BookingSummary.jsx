import React from 'react'

const BookingSummary = ({selectedSeats, totalCost, onBookNow }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">Booking Summary</h2>
      </div>
      
      {selectedSeats.length > 0 ? (
        <>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Selected Seats:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <span
                  key={seat.id}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
                >
                  {seat.id} (₹{seat.price})
                </span>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Cost:</span>
              <span className="text-xl font-bold">₹{totalCost}</span>
            </div>
          </div>
          
          <button
            onClick={onBookNow}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg
                     hover:bg-blue-600 transition-colors duration-200"
          >
            Book Now
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-center">Please select seats to continue</p>
      )}
    </div>
  )
}

export default BookingSummary