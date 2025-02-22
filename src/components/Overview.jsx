import React from 'react'

function Overview() {
  return (
    <div className="flex min-h-screen font-poppins flex-col justify-center items-center w-full">
        <div className="flex-1 p-5 flex flex-col justify-center items-center w-full">
            {/* Welcome Message */}
            <h1 className="text-5xl font-bold text-[#282D6E] text-center pt-3 mb-8">
            Bienvenue à la plateforme de S2EE !
            </h1>

            {/* Card Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16">
            {/* Card 1 */}
            <div className="bg-[#152D76] rounded-2xl p-5 shadow-lg w-full max-w-xs h-48">
                <span className="block text-white text-2xl font-bold mt-2">
                Nombres contactés
                </span>
                <span className="block text-white text-2xl font-bold text-right mt-8">
                45 / 300
                </span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#152D76] rounded-2xl p-5 shadow-lg w-full max-w-xs h-48">
                <span className="block text-white text-2xl font-bold mt-2">
                Nombres non-contactés
                </span>
                <span className="block text-white text-2xl font-bold text-right mt-8">
                125 / 300
                </span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#152D76] rounded-2xl p-5 shadow-lg w-full max-w-xs h-48">
                <span className="block text-white text-2xl font-bold mt-2">
                Nombres en attente de rappels
                </span>
                <span className="block text-white text-2xl font-bold text-right mt-8">
                23 / 300
                </span>
            </div>

            {/* Card 4 */}
            <div className="bg-[#152D76] rounded-2xl p-5 shadow-lg w-full max-w-xs h-48">
                <span className="block text-white text-2xl font-bold mt-2">
                Nombres d'emails envoyés
                </span>
                <span className="block text-white text-2xl font-bold text-right mt-8">
                107 / 300
                </span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Overview