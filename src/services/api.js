export const API_ROOT = "https://pixelove-server-app.herokuapp.com";
export const WS_ROOT = "wss://pixelove-server-app.herokuapp.com/cable";
const headers = () => {
  return {
    "Content-Type": "application/json",
    Accepts: "application/json"
  };
};

const newRoom = params => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data.room)
  }).then(roomData => roomData.json());
};
