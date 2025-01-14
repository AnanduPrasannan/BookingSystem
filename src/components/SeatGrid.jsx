import React from 'react'

const SeatGrid = ({seats, onSeatClick}) => {

    const getSeatColor=(tier,isSelected)=>{
        if (isSelected) return 'bg-green-500 text-white';
        switch(tier){
    
          case "silver" :
            return "bg-gray-500"
    
            case "gold":
              return "bg-yellow-500"
    
              case "platinum":
                return "bg-blue-500"
        }
      }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-400 mr-2"></div>
          <span>Silver (₹100)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
          <span>Gold (₹150)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-400 mr-2"></div>
          <span>Platinum (₹200)</span>
        </div>
      </div>
      
      <div className="mb-8 p-8 bg-gray-900 rounded-lg">
        <div className="w-full h-4 bg-white mb-8 rounded text-center text-sm">Screen</div>
        <div className="grid grid-cols-10 gap-2">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => onSeatClick(seat)}
              className={`
                ${getSeatColor(seat.tier, seat.isSelected)}
                w-10 h-10 rounded-lg flex items-center justify-center
                transition-colors duration-200 text-sm font-medium
                ${!seat.isSelected && seats.filter(s => s.isSelected).length >= 8}
              `}
            >
              {seat.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeatGrid