import React from 'react';
import RoomCard from '@/components/RoomCard';

// This should be fetched from the backend
const rooms = [
  { roomNumber: 247, category: {id: 1, name: "Single room"} },
  { roomNumber: 7, category: {id: 2, name: "Double room"} },
  { roomNumber: 89, category: {id: 2, name: "Double room"} },
  { roomNumber: 42, category: {id: 2, name: "Double room"} },
];

function Rooms() {
  return (
    <div className="h-full">
      {rooms.map((room, index) => (
        <RoomCard
          key={index}
          roomNumber={room.roomNumber}
          category={room.category}
        />
      ))}
    </div>
  );
}

export default Rooms;
