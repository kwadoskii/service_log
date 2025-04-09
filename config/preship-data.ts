export const countries: country[] = [
  { id: "1", name: "Nigeria", value: "Nigeria" },
  { id: "2", name: "India", value: "India" },
  { id: "3", name: "Brazil", value: "Brazil" },
  { id: "4", name: "Ghana", value: "Ghana" },
];

export const states: state[] = [
  { id: "1", name: "Lagos", value: "Lagos" },
  { id: "2", name: "Abuja", value: "Abuja" },
  { id: "3", name: "Ogun", value: "Ogun" },
  { id: "4", name: "Oyo", value: "Oyo" },
];

type country = {
  id: string;
  name: string;
  value: string;
};

type state = {
  id: string;
  name: string;
  value: string;
};
