import Image, { StaticImageData } from "next/image";
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="container mb-12 pt-12">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-psycho-blue-800/90 to-psycho-blue-600/80 z-10"></div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={384}
          quality={85}
          priority
          className="w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-10 md:p-16 text-white">
          <span className="text-sm font-medium text-white/80 uppercase tracking-wider mb-2">
            {title}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {subtitle}
          </h1>
          <p className="text-white/80 max-w-2xl text-lg md:text-xl opacity-90">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
