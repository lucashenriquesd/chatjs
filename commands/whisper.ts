import { Server, Socket } from 'socket.io';
import { Command } from "./command";

export class WhisperCommand implements Command{
  handle(io: Server, socket: Socket, msg: string): void {
    io.to(socket.id).emit('chat message', `you whispered to ${msg.substring(3, 23)}: ${msg.substring(24)}`);
    io.to(msg.substring(3, 23)).emit('chat message', `${socket.id} - whispered: ${msg.substring(24)}`);
  }
}