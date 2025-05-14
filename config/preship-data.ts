export const countries: Country[] = [
  { id: "1", name: "Nigeria", value: "Nigeria" },
  { id: "2", name: "India", value: "India" },
  { id: "3", name: "Brazil", value: "Brazil" },
  { id: "4", name: "Ghana", value: "Ghana" },
  { id: "5", name: "China", value: "China" },
];

export const states: State[] = [
  { id: "1", name: "Lagos", value: "Lagos" },
  { id: "2", name: "Abuja", value: "Abuja" },
  { id: "3", name: "Ogun", value: "Ogun" },
  { id: "4", name: "Oyo", value: "Oyo" },
  { id: "5", name: "Imo", value: "Imo" },
  { id: "6", name: "Enugu", value: "Enugu" },
];

export const serviceTypes: Service[] = [
  { id: "1", name: "Internet Services", value: "Internet Services" },
  { id: "2", name: "Software/App Development", value: "Software/App Development" },
  { id: "3", name: "Power/Inverter Solutions", value: "Power/Inverter Solutions" },
  { id: "4", name: "Cyber Security Solutions", value: "Cyber Security Solutions" },
  {
    id: "5",
    name: "Data Security/Compliance Consultants",
    value: "Data Security/Compliance Consultants",
  },
  { id: "6", name: "Microsoft/Azure Services", value: "Microsoft/Azure Services" },
  { id: "7", name: "Bulk SMS/Email", value: "Bulk SMS/Email" },
  { id: "8", name: "Website/App Development", value: "Website/App Development" },
  { id: "9", name: "Office Supplies and Accessories", value: "Office Supplies and Accessories" },
  {
    id: "10",
    name: "Printers/ Enterprise Printers/ Copiers",
    value: "Printers/ Enterprise Printers/ Copiers",
  },
  {
    id: "11",
    name: "Servers/Computers/ Installations/Accessories",
    value: "Servers/Computers/ Installations/Accessories",
  },
  { id: "12", name: "FM200 Installation /Maintenance", value: "FM200 Installation /Maintenance" },
];

type Country = {
  id: string;
  name: string;
  value: string;
};

type State = {
  id: string;
  name: string;
  value: string;
};

type Service = {
  id: string;
  name: string;
  value: string;
};
