import React from "react";

type ButtonProps = {
  onClick:()=>void
};

export default function Button({ onClick }: ButtonProps) {
  return (
    <button className="bg-red-500 text-white rounded-md px-4 py-2" onClick={onClick}>
      button
    </button>
  );
}
