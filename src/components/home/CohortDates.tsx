// // src/components/CohortDates.tsx

// export default function CohortDates() {
//   return (
//     <div className="bg-yellow-300 py-4" id="cohort-dates">
//       <div className="mx-auto px-6 lg:px-8">
//         <div className="max-w-[700px] mx-auto">
//           {/* Mobile layout: columna única con divisor horizontal */}
//           <div className="block sm:hidden">
//             <div className="text-center">
//               <h2 className="font-cinzel text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
//                 July 31st - August 7th
//               </h2>
//             </div>
//           </div>

//           {/* Desktop/Tablet layout: grid de tres columnas */}
//           <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center">
//             {/* Izquierda: Cohort 1, alineado a la derecha */}
//             <div className="pr-4 text-right">
//               <h2 className="font-cinzel text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
//                 <span className="text-lg">Cohort 1:</span> July 31st - August
//                 7th
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/CohortDates.tsx

export default function CohortDates() {
  return (
    <div className="bg-yellow-300 py-4" id="cohort-dates">
      <div className="mx-auto px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto">
          {/* Mobile layout: columna única con divisor horizontal */}
          <div className="block md:hidden">
            <div className="text-center">
              <h2 className="font-cinzel text-xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                Cohort 1: July 25th - July 25th
              </h2>
            </div>
            <div className="w-full h-px bg-black my-4"></div>
            <div className="text-center">
              <h2 className="font-cinzel text-xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                Cohort 2: August 3rd - August 10th
              </h2>
            </div>
          </div>

          {/* Desktop/Tablet layout: grid de tres columnas */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Izquierda: Cohort 1, alineado a la derecha */}
            <div className="pr-4 text-right">
              <h2 className="font-cinzel text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                <span className="text-lg">Cohort 1:</span> July 25th - July 31st
              </h2>
            </div>
            {/* Separador vertical */}
            <div className="w-px h-16 bg-black"></div>
            {/* Derecha: Cohort 2, alineado a la izquierda */}
            <div className="pl-4 text-left">
              <h2 className="font-cinzel text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">
                <span className="text-lg">Cohort 2:</span> August 3rd - August
                10th
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
