export const API_ROOT = "https://pixelove-server-app.herokuapp.com";
// export const API_ROOT = "http://localhost:3000";
export const WS_ROOT = "wss://pixelove-server-app.herokuapp.com/cable";
// export const WS_ROOT = "ws://localhost:3000/cable";
// export const WS_ROOT = "wss://pixelove-server-app.herokuapp.com/cable";
const headers = () => {
  return {
    "Content-Type": "application/json",
    Accepts: "application/json"
  };
};

const getRooms = () => {
  return fetch(`${API_ROOT}/rooms`, {
    method: "GET",
    headers: headers()
  }).then(roomData => roomData.json());
};

const newRoom = params => {
  return fetch(`${API_ROOT}/rooms`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(params)
  }).then(roomData => roomData.json());
};

const getRoom = id => {
  return fetch(`${API_ROOT}/rooms/${id}`, {
    method: "GET",
    headers: headers()
  }).then(roomData => roomData.json());
};

const updateColor = data => {
  return fetch(`${API_ROOT}/cells/${data.id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(cellData => cellData.json());
};

export const api = {
  room: {
    newRoom,
    getRoom,
    getRooms
  },
  cell: {
    updateColor
  }
};
