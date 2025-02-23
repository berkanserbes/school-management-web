export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Event = {
  id: number;
  title: string;
  time: string;
  description: string;
};
