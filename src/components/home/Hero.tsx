import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

import hero from "@/assets/images/photo-1506794778202-cad84cf45f1d.jpeg";
import avatar1 from "@/assets/images/avatar-1.jpeg";
import avatar2 from "@/assets/images/avatar-2.jpeg";
import avatar3 from "@/assets/images/avatar-3.jpeg";
import { contactDetails } from "@/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-psycho-blue-50/30 to-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-psycho-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-psycho-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* 1st col */}
          <div className="flex flex-col space-y-6 max-w-xl mx-auto lg:mx-0">
            <div className="animate-fade-in opacity-0">
              <span className="inline-flex items-center rounded-full bg-psycho-blue-100 px-4 py-1 text-sm font-medium text-psycho-blue-800">
                Specialized Psychometry Services
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-[2.75rem] lg:text-[3.5rem] font-bold leading-tight text-psycho-gray-900 animate-fade-in opacity-0 animation-delay-100">
              Guiding you towards your clarity and purpose.
            </h1>

            <p className="text-lg text-psycho-gray-600 animate-fade-in opacity-0 animation-delay-200">
              Experience precise cognitive assessment and personalized insights
              to enhance your mental performance, wellbeing, and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0 animation-delay-300">
              <Link href={"/contact"} passHref>
                <Button
                  size="lg"
                  className="bg-psycho-blue-600 hover:bg-psycho-blue-700 hover:cursor-pointer text-white shadow-blue transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Book an Assessment
                </Button>
              </Link>

              <Link href="tel:+11234567890" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-psycho-blue-300 text-psycho-blue-700 hover:bg-psycho-blue-50 hover:cursor-pointer transition-all duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  Call {contactDetails.phone}
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-4 pt-2 animate-fade-in opacity-0 animation-delay-400">
              <div className="flex -space-x-2">
                <Image
                  src={avatar1}
                  width={300}
                  height={300}
                  alt="Client1"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={avatar2}
                  width={300}
                  height={300}
                  alt="Client2"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={avatar3}
                  width={300}
                  height={300}
                  alt="Client3"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-sm text-psycho-gray-600">
                <span className="font-semibold">400+ clients</span> helped this
                year
              </p>
            </div>
          </div>
          {/* 2nd col */}
          <div className="hidden lg:block relative aspect-square max-w-lg animate-fade-in opacity-0 animation-delay-200">
            <div className="absolute inset-0 bg-psycho-blue-600/10 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-medium">
              <Image
                src={hero}
                width={3000}
                height={3000}
                alt="Psychometry Assessment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
