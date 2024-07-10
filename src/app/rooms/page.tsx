"use client"

import React, { useEffect, useState } from 'react';
import RoomCard from '@/components/RoomCard';
import { getRooms, Room } from '@/app/api/roomService'

function Rooms() {

  const [rooms, setRooms] = useState<Room[]>([]);

  // Fetch rooms from the API
  useEffect(() => {
    getRooms().then((data) => {
      setRooms(data);
    });
  }, []);

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
