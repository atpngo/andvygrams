import { io } from "socket.io-client";

const { SOCKET_SERVER_URL } = process.env;


export const socket = io(SOCKET_SERVER_URL, {autoConnect: false})