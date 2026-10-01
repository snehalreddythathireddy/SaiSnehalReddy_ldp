export interface Candidate {
  id: number;
  name: string;
  adjudication: string;
  status: "CLEAR" | "CONSIDER";
  location: string;
  date: string;
}