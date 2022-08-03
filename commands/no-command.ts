import { Server, Socket } from 'socket.io';
import { Command } from './command';

export class NoCommand implements Command {
  handle(io: Server, socket: Socket, msg: string): void {
    console.log(`message: ${socket.id}: ${msg}`);
    io.emit('chat message', `${socket.id}: ${msg}`);
  }
}