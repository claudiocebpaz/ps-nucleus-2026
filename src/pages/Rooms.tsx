// src/pages/Rooms.tsx

import Room from "../components/rooms/Room";
import RoomSeparator from "../components/rooms/RoomSeparator";

import GrandJungleRoomData from "../data/GrandJungleRoom.json";
import RoyalRoomData from "../data/RoyalRoom.json";
import GardenViewRoomData from "../data/GardenViewRoom.json";
import FishBowlRoomData from "../data/FishBowlRoom.json";
import BaliHaiRoomData from "../data/BaliHaiRoom.json";

import RiverRoomData from "../data/RiverRoom.json";
import SkylightRoomData from "../data/SkylightRoom.json";
import PoolViewRoomData from "../data/PoolViewRoom.json";
import BungalowRoomData from "../data/BungalowRoom.json";
import PoolMuralRoomData from "../data/PoolMuralRoom.json";

function Rooms() {
  return (
    <div>
      <RoomSeparator
        title="Single Rooms"
        subtitle="A retreat designed for comfort and efficiency with modern amenities."
        id="single-rooms"
      />
      <Room roomData={GrandJungleRoomData} />
      <Room roomData={RoyalRoomData} layoutType="even" />
      <Room roomData={GardenViewRoomData} />
      <Room roomData={FishBowlRoomData} layoutType="even" />
      <Room roomData={BaliHaiRoomData} />

      <RoomSeparator
        title="Double Rooms"
        subtitle="Spacious and elegantly designed for relaxation and real connections."
        id="double-rooms"
      />

      <Room roomData={RiverRoomData} />
      <Room roomData={SkylightRoomData} layoutType="even" />
      <Room roomData={PoolViewRoomData} />
      <Room roomData={BungalowRoomData} layoutType="even" />
      <Room roomData={PoolMuralRoomData} />
    </div>
  );
}

export default Rooms;
