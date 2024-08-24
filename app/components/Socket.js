import { io } from "socket.io-client";

const { SOCKET_SERVER_URL } = process.env;
// Local dev lol
// let ADDRESS = "https://socket-server-9qm5.onrender.com";
// let ADDRESS = "https://socket-server-e8c7ac523508.herokuapp.com";
// let ADDRESS = "http://localhost:4000"
let PORT = 80
// export const socket = io(ADDRESS+":"+PORT, {autoConnect: false})
// export const socket = io("http://localhost:4000", {autoConnect: false})
// export const socket = io("https://socket-server-e8c7ac523508.herokuapp.com", {autoConnect: false})
export const socket = io("https://socket-server-9qm5.onrender.com", {autoConnect: false})
// "prod"
// export const socket = io("http://localhost:4000", {autoConnect: false})
