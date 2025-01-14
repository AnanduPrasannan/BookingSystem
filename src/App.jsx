import React, { useState } from 'react'
import SeatGrid from './components/SeatGrid'
import BookingSummary from './components/BookingSummary'

const App = () => {

  const generateSeats=()=>{
    const seats=[]
    let counter=0

    for(let row=0;row<6;row++){
      for(let seat=1;seat<=10;seat++){
        const seatId= counter++
        const tier= row<2? "silver": row<4 ?"gold":"platinum"
        const price = tier === "silver" ? 100 : tier === "gold" ? 150 : 200;
        seats.push({id:seatId,tier,isSelected:false,price})
      }
    }
    return seats

  }

  

  const [seats,setSeats]=useState(generateSeats())

  const selectedSeats = seats.filter((seat) => seat.isSelected);

  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleSeatClick = (clickedSeat) => {
    if (!clickedSeat.isSelected && selectedSeats.length >= 8) {
      alert('You can only select up to 8 seats');
      return
    }

    setSeats(seats.map((seat) =>
      seat.id === clickedSeat.id
        ? { ...seat, isSelected: !seat.isSelected }
        : seat
    ));
  };


  const handleBookNow = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }

    alert(`Booking confirmed!\nSeats: ${selectedSeats.map(s => s.id).join(', ')}\nTotal: ₹${totalCost}`);
    
    setSeats(seats.map(seat => ({ ...seat, isSelected: false })));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Movie Seat Booking
      </h1>
      
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        <SeatGrid
          seats={seats}
          onSeatClick={handleSeatClick}
        />
        
        <BookingSummary
          selectedSeats={selectedSeats}
          totalCost={totalCost}
          onBookNow={handleBookNow}
        />
      </div>
    </div>
  </div>

  )
}

export default App



