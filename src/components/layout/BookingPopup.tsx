"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiPhone, FiArrowUpRight } from "react-icons/fi";

export function openBookingPopup() {
  window.dispatchEvent(new Event("open-booking-popup"));
}

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-popup", handleOpen);
    return () => window.removeEventListener("open-booking-popup", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative mx-4 w-full max-w-md animate-fade-in rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-dark/60 transition-colors hover:bg-light-bg hover:text-dark"
        >
          <FiX className="text-xl" />
        </button>

        {/* Image */}
        <div className="mb-4 overflow-hidden rounded-xl">
          <Image
            src="/images/z15aquE3BtNKeCIDtV4dhelmODXsSmhLlzy3Px4N.png"
            alt="Book an appointment"
            width={894}
            height={569}
            className="h-auto w-full"
          />
        </div>

        {/* Heading */}
        <h3 className="mb-5 text-center text-2xl font-bold text-dark">
          Book by phone or online
        </h3>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="tel:5874424898"
            className="btn-primary flex w-full items-center justify-center gap-2"
          >
            <FiPhone className="text-lg" />
            587-442-4898
          </a>
          <Link
            href="/contact"
            className="btn-outline flex w-full items-center justify-center gap-2"
          >
            <FiArrowUpRight className="text-lg" />
            Book From Website
          </Link>
        </div>
      </div>
    </div>
  );
}
