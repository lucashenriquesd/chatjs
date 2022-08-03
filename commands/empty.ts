import { Server, Socket } from 'socket.io';
import { Command } from './command';

export class EmptyCommand implements Command {
  handle(io: Server, socket: Socket, msg: string): void {
    io.to(socket.id).emit('chat message', 'command not found');
  }
}