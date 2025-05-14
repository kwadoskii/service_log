export interface VendorAddress {
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
}

export interface VendorContact {
  fullname: string;
  phone: string;
  email: string;
}

export interface Vendor {
  id: string;
  name: string;
  address: VendorAddress;
  contact: VendorContact;
  email: string;
  altEmail: string;
  servicesProvided: string;
  status: "active" | "inactive" | "pending";
}
