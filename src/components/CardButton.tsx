import React from "react";

export const CardButton: React.FC = () => {
  return (
    <button className="card-button w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
      In den Warenkorb
    </button>
  );
}