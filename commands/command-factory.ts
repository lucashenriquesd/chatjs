import { EmptyCommand } from "./empty";
import { HelpCommand } from "./help";
import { NoCommand } from "./no-command";
import { WhisperCommand } from "./whisper";

export class CommandFactory {
  make(msg: string) {
    let command = new NoCommand();
    command = msg.startsWith('/') ? new EmptyCommand() : command;
    command = msg === '/help' ? new HelpCommand() : command;
    command = msg.startsWith('/w ') ? new WhisperCommand() : command;

    return command;
  }
}