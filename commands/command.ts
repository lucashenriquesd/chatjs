import { Server, Socket } from 'socket.io';

export interface Command {
  handle(io: Server, socket: Socket, msg: string): void;
}