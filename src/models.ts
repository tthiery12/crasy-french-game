export interface IGameState {
  players: IPlayer[];
  coins: ICoin[];
  fieldSize: {
    width: number;
    height: number;
  };
  eliminatedPlayers: Record<string, string>;
}

export interface IPlayer {
  id: string;
  name: string;
  score: number;
  speed: number;
  visible: boolean;
  x: number;
  y: number;
}

export interface ICoin {
  x: number;
  y: number;
  isDeadly?: boolean;
}

export type Command = 'left' | 'right' | 'up' | 'down' | "Random" | "Invisible" | "Boost";
export type Commands = Record<string, Command>;
