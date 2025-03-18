"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactDetails } from "@/constants";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3">
      <Link
        href={`tel:${contactDetails.phone}`}
        className="bg-white text-primary h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors duration-200"
        aria-label="Call us"
      >
        <Phone size={20} />
      </Link>
      <Link href={"/contact"} passHref>
        <Button className="shadow-lg flex gap-2 items-center rounded-full px-5 py-5 bg-primary text-primary-foreground hover:bg-primary/90 hover:cursor-pointer">
          <Calendar size={18} />
          <span>Book Now</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
