import { io } from "socket.io-client";

const { SOCKET_SERVER_URL } = process.env;


export const socket = io("https://socket-server.andyngo6.repl.co", {autoConnect: false})