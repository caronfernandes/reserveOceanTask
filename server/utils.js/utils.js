export const aggregateAvailableRoomsByRoomTyp = (data) => {
  const aggregatedRooms = data.reduce((acc, room) => {
    if (!acc[room.RoomType]) {
      acc[room.RoomType] = {
        RoomType: room.RoomType,
        RoomTypeId: room.RoomTypeId,
        RoomPrice: room.Price,
        RoomTypeDescription: room.RoomTypeDescription,
        Rooms: [],
      };
    }
    acc[room.RoomType].Rooms.push({
      roomId: room.RoomID,
      descreption: room.RoomDescription,
    });
    return acc;
  }, {});

  return Object.values(aggregatedRooms);
};

export const calculateNumberOfDays = (checkInDate, checkOutDate) => {
  var date1 = new Date(checkInDate);
  var date2 = new Date(checkOutDate);

  var differenceMs = Math.abs(date2 - date1);

  var differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  return differenceDays === 0 ? 1 : differenceDays;
};
