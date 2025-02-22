import { List, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SideBarOrga = () => {
  return (
    <div className="w-64 min-w-64 h-screen bg-gray-900 text-white p-5 flex flex-col relative">
      {/* Background Image */}
      <Image
        src="/S2EElines.svg"
        width={1000}
        height={1000}
        alt="S2EE"
        className="absolute -bottom-24 right-0 h-[600px] z-0"
      />

      {/* Logo */}
      <div className="text-5xl font-bold text-white mx-auto mb-8 z-10"> {/* Add z-10 to bring it to the front */}
        <span className="text-gray-300">S</span>
        <span className="text-yellow-400">2</span>
        <span className="text-gray-300">EE</span>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center mb-8 z-10"> {/* Add z-10 to bring it to the front */}
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">👤</span>
        </div>
        <div className="mt-2 text-lg font-semibold">Organisateur</div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 z-10"> {/* Add z-10 to bring it to the front */}

        <Link
          href=""
          className="w-full py-2 px-4 text-left text-gray-400 hover:text-white flex items-center transition-colors"
        >
          <List size={16} className="mr-2" />
          Liste des entreprises
        </Link>
      </nav>
    </div>
  );
};

export default SideBarOrga;