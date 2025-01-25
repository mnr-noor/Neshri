    import { Search, ShoppingCart } from "lucide-react";
    import Image from 'next/image'
    import logo from '../assets/logo.png'

    export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-6">
            <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
            </a>
            <a href="/collection" className="text-gray-800 hover:text-gray-600">
            Collection
            </a>
            <a href="/new" className="text-gray-800 hover:text-gray-600">
            New
            </a>
        </div>

        <div className="text-2xl font-bold text-gray-800">
            <Image
            src={logo} alt="logo" width={40} height={40} 
            />

            
        </div>

        <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-800 hover:text-gray-600">
            <Search size={20} />
            </button>
            <button className="p-2 text-gray-800 hover:text-gray-600">
            <ShoppingCart size={20} />
            </button>
        </div>
        </nav>
    );
    }
