
import React from 'react';
import { Loader2 } from 'lucide-react';

// Utility function to merge className strings
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  isLoading = false, 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && "relative text-transparent hover:text-transparent",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </span>
      )}
      {children}
    </button>
  );
};

// Demo Page Component
const ButtonDemo = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="success">Success Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="small">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="large">Large Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Loading State</h2>
            <div className="flex flex-wrap gap-4">
              <Button isLoading={isLoading} onClick={handleClick}>
                Click to Load
              </Button>
              <Button variant="outline" isLoading>Loading...</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;