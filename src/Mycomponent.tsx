
import  { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

// Utility function to merge className strings

type Props= {
  children: ReactNode, 
  variant? : string,
  size? : string,
  isLoading?: boolean,
  className: string
}
const Button = ({ 
  children,
  variant = 'default', 
  size = 'default', 
  isLoading = false, 
  className= "", 
  ...props 
}:Props) => {
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
      className={`
        ${baseStyles} 
        ${variants["outline"]} 
        ${sizes["default"]} 
        ${isLoading && "relative text-transparent hover:text-transparent"} 
        ${className} 
      `}
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
  
  

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button className=" " >Default Button</Button>
              <Button className=" " variant="outline">Outline Button</Button>
              <Button className=" " variant="ghost">Ghost Button</Button>
              <Button className=" " variant="danger">Danger Button</Button>
              <Button className=" " variant="success">Success Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button className=" " size="small">Small Button</Button>
              <Button className=" " size="default">Default Button</Button>
              <Button className=" " size="large">Large Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Loading State</h2>
            <div className="flex flex-wrap gap-4">
              <Button className=" " isLoading={false}> 
                Click to Load
              </Button>
              <Button className=" " variant="outline" isLoading>Loading...</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;