export interface IChatMessage {
  message: string;
  timestamp: Date;
  username: string;
  userId: string;
  bold: boolean;
  italic: boolean;
}