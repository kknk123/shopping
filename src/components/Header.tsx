
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">ShopPro</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-gray-900 transition-colors">Categories</Link>
            <Link to="/deals" className="text-gray-700 hover:text-gray-900 transition-colors">Deals</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
                  <Link to="/categories" className="text-gray-700 hover:text-gray-900 transition-colors">Categories</Link>
                  <Link to="/deals" className="text-gray-700 hover:text-gray-900 transition-colors">Deals</Link>
                  <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
                  <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
                  <Link to="/login" className="text-gray-700 hover:text-gray-900 transition-colors">Login</Link>
                  <Link to="/cart" className="text-gray-700 hover:text-gray-900 transition-colors">Cart</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
