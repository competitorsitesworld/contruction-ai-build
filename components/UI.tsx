import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-safety text-black hover:bg-safety-hover focus:ring-safety",
    secondary: "bg-industrial-900 text-white hover:bg-industrial-800 focus:ring-industrial-700",
    outline: "border-2 border-industrial-900 text-industrial-900 hover:bg-industrial-900 hover:text-white focus:ring-industrial-900"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionWrapper: React.FC<{
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-industrial-900 text-white' : 'bg-industrial-50 text-industrial-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}> = ({ title, subtitle, centered = false, light = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h3 className={`font-display font-bold uppercase tracking-widest text-sm mb-3 ${light ? 'text-safety' : 'text-safety-hover'}`}>
      {subtitle}
    </h3>
    <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-industrial-900'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-safety mt-6 ${centered ? 'mx-auto' : ''}`} />
  </div>
);