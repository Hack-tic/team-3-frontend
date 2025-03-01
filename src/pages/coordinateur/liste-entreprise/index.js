import { Geist, Geist_Mono } from "next/font/google";
import EntrepriseTable from "@/components/EntrepriseTable";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="flex md:flex-nowrap    ">
    <Sidebar />
    <EntrepriseTable />
    </div>
    </> 
  );
}
