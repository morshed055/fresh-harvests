"use client"; // Required for using React hooks in Next.js

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Logo from "../../../public/image/Logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { Button } from "@/components/ui/button"; // Import shadcn Button
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // Import shadcn Dialog
import { Input } from "@/components/ui/input"; // Import shadcn Input
import { Label } from "@/components/ui/label"; // Import shadcn Label
import toast from "react-hot-toast"; // Import react-hot-toast
import { useLoginUserMutation, useLogoutUserMutation, useRegisterUserMutation } from "@/redux/api/authApi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track login state

  // RTK Query Mutations
  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading }] = useRegisterUserMutation();
  const [logoutUser] = useLogoutUserMutation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = async () => {
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials).unwrap(); // Use RTK Query mutation

      if (response.success) {
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
        toast.success("Login Successful"); // Show success toast
      } else {
        toast.error(response.message || "Invalid email or password."); // Show error toast
      }
    } catch (error) {
      toast.error("An error occurred while logging in."); // Show error toast
    }
  };

  const handleRegister = async () => {
    try {
      const userData = {
        fullName,
        email,
        password,
      };

      const response = await registerUser(userData).unwrap(); // Use RTK Query mutation

      if (response.success) {
        setIsRegisterModalOpen(false);
        toast.success("Registration Successful. Please log in."); // Show success toast
      } else {
        toast.error(response.message || "Registration failed. Please try again."); // Show error toast
      }
    } catch (error) {
      toast.error("An error occurred while registering."); // Show error toast
    }
  };

  const handleLogout = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");
  
      if (!token) {
        throw new Error("No token found.");
      }
  
      // Pass the token as an argument to the logoutUser mutation
      await logoutUser({ token }).unwrap(); // Use RTK Query mutation
      setIsLoggedIn(false);
      localStorage.removeItem("token"); // Clear the token from local storage
      toast.success("You have successfully logged out."); // Show success toast
    } catch (error) {
      toast.error("An error occurred while logging out."); // Show error toast
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 h-[100px] relative w-full md:max-w-[1200px] md:mx-auto">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700 cursor-pointer">
        <Link href="/" legacyBehavior passHref>
          <Image src={Logo} alt="Logo" className="hover:scale-110 transition-all duration-300 h-[39px] w-[224.3px]" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  Home
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  Shop
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  About
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  Blog
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop Right Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/favorites" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  Favorites
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/cart" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                  Cart
                  <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              {isLoggedIn ? (
                <Button onClick={handleLogout} variant="ghost" className="px-4 py-1.5 text-gray-700">
                  Logout
                </Button>
              ) : (
                <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="px-4 py-1.5 text-gray-700">
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Login</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Email</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div>
                        <Label>Password</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <Button onClick={handleLogin} className="w-full" disabled={isLoginLoading}>
                        {isLoginLoading ? "Logging in..." : "Login"}
                      </Button>
                      <p className="text-sm text-center">
                        Don't have an account?{" "}
                        <button
                          onClick={() => {
                            setIsLoginModalOpen(false);
                            setIsRegisterModalOpen(true);
                          }}
                          className="text-green-700 hover:underline"
                        >
                          Register
                        </button>
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none mb-6">
            <X size={24} />
          </button>
          <NavigationMenu className="flex flex-col space-y-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    Home
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/shop" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    Shop
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    About
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    Blog
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/favorites" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    Favorites
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/cart" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-1.5 text-gray-700 group relative">
                    Cart
                    <span className="absolute bottom-0 left-[40%] w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-[20%]"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                {isLoggedIn ? (
                  <Button onClick={handleLogout} variant="ghost" className="px-4 py-1.5 text-gray-700">
                    Logout
                  </Button>
                ) : (
                  <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="px-4 py-1.5 text-gray-700">
                        Sign In
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Email</Label>
                          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                          <Label>Password</Label>
                          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button onClick={handleLogin} className="w-full" disabled={isLoginLoading}>
                          {isLoginLoading ? "Logging in..." : "Login"}
                        </Button>
                        <p className="text-sm text-center">
                          Don't have an account?{" "}
                          <button
                            onClick={() => {
                              setIsLoginModalOpen(false);
                              setIsRegisterModalOpen(true);
                            }}
                            className="text-green-700 hover:underline"
                          >
                            Register
                          </button>
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Register Modal */}
      <Dialog open={isRegisterModalOpen} onOpenChange={setIsRegisterModalOpen}>
        <DialogContent className="h-[628px] rounded-lg px-6 py-20">
          <DialogHeader className="text-center">
            <DialogTitle>
              <h1 className="text-center">Register</h1>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button onClick={handleRegister} className="w-full" disabled={isRegisterLoading}>
              {isRegisterLoading ? "Registering..." : "Register"}
            </Button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsRegisterModalOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="text-green-700 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;