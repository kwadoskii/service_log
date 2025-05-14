// src/app/components/VendorInitializer.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { loadVendors } from "@/lib/features/vendors/vendorSlice";

export default function VendorInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadVendors());
  }, [dispatch]);

  return null; // No UI, just state hydration
}
