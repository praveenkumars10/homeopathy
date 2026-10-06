import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumbLabel: string;
  backgroundImage: string;
}

export function PageHeader({ title, breadcrumbLabel, backgroundImage }: PageHeaderProps) {
  return (
    <div 
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#1F4B3F]/75"></div>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F0] mb-4 drop-shadow-lg tracking-tight">
          {title}
        </h1>
        <div className="text-sm md:text-base font-medium text-[#E8F0EB] flex items-center justify-center gap-2">
          <Link href="/" className="hover:text-[#C98B3E] transition-colors">Home</Link>
          <span className="text-[#C98B3E]">&gt;</span>
          <span className="text-[#FAF7F0]">{breadcrumbLabel}</span>
        </div>
      </div>
    </div>
  );
}
