// src/features/vendors/vendorSlice.ts
import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Vendor } from "@/types/vendor";

const initialState: Vendor[] = [
  {
    id: "1",
    name: "ipNX Nigeria Limited",
    address: {
      addressLine1: "4 Balarabe Musa Crescent",
      addressLine2: "Victoria Island",
      state: "Lagos",
      country: "Nigeria",
    },
    contact: {
      fullname: "Israel O. Adewuyi",
      phone: "+234 (0)8075092903",
      email: "",
    },
    email: "csupport@ipnxnigeria.net",
    altEmail: "",
    servicesProvided: "Internet Services",
    status: "active",
  },
  {
    id: "2",
    name: "ICSL",
    address: {
      addressLine1: "Plot 4, Sen Victor Oyofo Close,",
      addressLine2: `Lekki-Epe Expressway,
        Chisco Bus-Stop by Enyo Petrol Station`,
      state: "Lagos",
      country: "Nigeria",
    },
    contact: {
      fullname: "Joy Nweke",
      phone: "08039169598",
      email: "",
    },
    email: "support1@ic-sol.net",
    altEmail: "support@ic-sol.net",
    servicesProvided: "Internet Services",
    status: "active",
  },
  {
    id: "3",
    name: "LCode",
    address: {
      addressLine1: "Lal Bagh Towers,",
      addressLine2: `MG Rd, Ballalbagh, Kodailbail, Mangaluru`,
      state: "Karnataka 575003,",
      country: "India",
    },
    contact: {
      fullname: "Amit Welde",
      phone: "+919820830845",
      email: "amit.w@lcodetechnologies.com",
    },
    email: "",
    altEmail: "",
    servicesProvided: "Software/App Development",
    status: "active",
  },
];

const VENDORS_KEY = "persistedVendors";

// Thunk to load vendors from localStorage
export const loadVendors = createAsyncThunk("vendors/load", async () => {
  const data = localStorage.getItem(VENDORS_KEY);
  return data ? (JSON.parse(data) as Vendor[]) : initialState;
});

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    addVendor: {
      reducer(state, action: PayloadAction<Vendor>) {
        state.push(action.payload);
        localStorage.setItem(VENDORS_KEY, JSON.stringify(state));
      },
      prepare(vendor: Omit<Vendor, "id">) {
        return {
          payload: {
            id: nanoid(),
            ...vendor,
          },
        };
      },
    },
    updateVendor(state, action: PayloadAction<{ id: string; updates: Partial<Vendor> }>) {
      const { id, updates } = action.payload;
      const vendor = state.find((v) => v.id === id);
      if (vendor) {
        Object.assign(vendor, updates);
        localStorage.setItem(VENDORS_KEY, JSON.stringify(state));
      }
    },
    deleteVendor(state, action: PayloadAction<string>) {
      const newState = state.filter((v) => v.id !== action.payload);
      localStorage.setItem(VENDORS_KEY, JSON.stringify(newState));
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadVendors.fulfilled, (_, action) => action.payload);
  },
});

export const { addVendor, updateVendor, deleteVendor } = vendorSlice.actions;
export default vendorSlice.reducer;
