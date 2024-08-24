import { io } from "socket.io-client";

const { SOCKET_SERVER_URL } = process.env;
// Local dev lol
let ADDRESS = "https://socket-server-9qm5.onrender.com";
let PORT = 4000
export const socket = io(ADDRESS+":"+PORT, {autoConnect: false})
// "prod"
// export const socket = io("http://localhost:4000", {autoConnect: false})
