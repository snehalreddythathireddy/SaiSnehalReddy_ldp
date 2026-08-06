export interface Candidate {
  id: number;
  name: string;
  adjudication: string;
  status: "CLEAR" | "CONSIDER";
  location: string;
  date: string;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "John Smith",
    adjudication: "-",
    status: "CLEAR",
    location: "Barrouallie",
    date: "2/22/2022",
  },
  {
    id: 2,
    name: "Serene",
    adjudication: "-",
    status: "CLEAR",
    location: "Vänersborg",
    date: "3/13/2022",
  },
  {
    id: 3,
    name: "Walsh",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
  },
  {
    id: 4,
    name: "Maurizia",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "2/20/2022",
  },
  {
    id: 5,
    name: "Kendre",
    adjudication: "-",
    status: "CLEAR",
    location: "Beutong Ateuh",
    date: "5/19/2022",
  },
  {
    id: 6,
    name: "Erastus",
    adjudication: "-",
    status: "CLEAR",
    location: "Höviyin Am",
    date: "12/1/2021",
  },
  {
    id: 7,
    name: "Jereme",
    adjudication: "-",
    status: "CONSIDER",
    location: "Shāringol",
    date: "7/26/2022",
  },
  {
    id: 8,
    name: "John Smith",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
    date: "5/28/2022",
  },
  {
    id: 9,
    name: "Cari",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboão da Serra",
    date: "5/23/2022",
  },
  
  
];