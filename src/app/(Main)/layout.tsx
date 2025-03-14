import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";




export default function PageLayout({ children }: { children: React.ReactElement[] | React.ReactElement }) {


    return (
        <>
            <Navbar />
            {children}
            <Toaster />
            <Footer/>
      
        </>
    )
}
