import { Geist, Geist_Mono } from "next/font/google";
import EntrepriseTable from "@/components/EntrepriseTable";
import SideBarOrga from "@/components/SideBarOrga";
import OrgaEntrepriseTable from "@/components/OrgaEntrepriseTable";

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
    <SideBarOrga />
    <OrgaEntrepriseTable />
    </div>
    </> 
  );
}
