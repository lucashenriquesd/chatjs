import { Server, Socket } from 'socket.io';
import { Command } from './command';

export class HelpCommand implements Command {
  handle(io: Server, socket: Socket, msg: string): void {
    io.to(socket.id).emit('chat message', '/w socketId message - whisper to a specific person');
  }
}