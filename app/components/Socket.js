import { io } from "socket.io-client";

const { SOCKET_SERVER_URL } = process.env;
// Local dev lol
export const socket = io("https://socket-server-9qm5.onrender.com", {autoConnect: false})
// "prod"
// export const socket = io("http://localhost:4000", {autoConnect: false})
