import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="bg-base-100/80 backdrop-blur-lg border-base-content/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="navbar px-4 min-h-[4rem] justify-between">
                    {/* LOGO */}
                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <div className='flex items-center gap-2'>
                            <ShoppingCartIcon className='size-9 text-primary' />
                            <span className="font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                POSTGRESTORE
                            </span>
                        </div>
                    </Link>
                    
                    {/* navlink */}
                    <div className="flex items-center gap-4">
                        {isHomePage && (
                            <div className='indicator'>
                                <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                                    <ShoppingBagIcon className="size-5" />
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;