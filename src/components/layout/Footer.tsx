import { contactDetails, footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/liam-graham-psychometry-logo-2.png";
import HPCSA from "@/assets/images/HPCSA.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-b border-psycho-gray-300 bg-white pt-20 ">
      <div className="mb-8 border-b border-psycho-gray-300 md:mb-12">
        <div className="container flex flex-wrap items-end justify-between gap-6 pb-6">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-psycho-blue-600 block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-psycho-blue-600 block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-psycho-blue-600 block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-5 md:row-start-1 lg:col-span-3">
            {footerLinks.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium text-psycho-gray-900 dark:text-white">
                  {link.group}
                </span>
                {link.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="text-muted-foreground hover:text-psycho-blue-600 block duration-150 dark:text-psycho-gray-300 dark:hover:text-white"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-psycho-blue-300"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <Link
                href={`tel:${contactDetails.phone}`}
                className="text-muted-foreground hover:text-psycho-blue-600 transition-colors dark:text-psycho-gray-300 dark:hover:text-white"
              >
                {contactDetails.phone}
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2  mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-psycho-blue-300"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-muted-foreground hover:text-psycho-blue-600 transition-colors dark:text-psycho-gray-300 dark:hover:text-white"
              >
                {contactDetails.email}
              </Link>
            </div>

            <div className="mt-4">
              <Image
                src={HPCSA}
                width={300}
                height={121}
                alt="HPCSA logo"
                className="w-[150px] md:w-[200px] h-auto mx-auto md:mx-0"
              />
              <div className="mt-2 flex flex-col lg:flex-row gap-2 md:gap-4">
                <p className=" text-sm text-muted-foreground">PMT 0101460</p>
                <p className=" text-sm text-muted-foreground">PR 1170139</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col border-t border-psycho-gray-300 py-6">
          <small className="text-muted-foreground block text-center text-sm">
            © {currentYear} Liam Graham Psychometry. All rights reserved.
          </small>

          <small className="items-center justify-center text-muted-foreground block text-center text-sm mt-2">
            Created by:&nbsp;
            <Link
              href="https://nevaeh.co.za"
              className="hover:underline"
              target="_blank"
              rel="noopener"
            >
              Nevaeh Solutions (Pty) Ltd
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
