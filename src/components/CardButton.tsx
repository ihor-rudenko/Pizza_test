import React from "react";

// -- Variante 1 -----------------------------------------

// export const CardButton: React.FC = () => {
//   return (
//     <button className="card-button w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
//       In den Warenkorb
//     </button>
//   );
// }


// -- Variante 2 -----------------------------------------


// export function CardButton() {
//   return (
//     <button className="card-button w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
//       In den Warenkorb
//     </button>
//   )
// }


// -- Variante 3 (Mit Props für flexiblen Text) -----------------------------------------

type CardButtonProps = {
  children?: React.ReactNode;
};

export const CardButton = ({ children = "In den Warenkorb" }: CardButtonProps) => (
  <button className="card-button w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
    {children}
  </button>
);

