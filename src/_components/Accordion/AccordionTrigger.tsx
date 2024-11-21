import { useContext } from "react";
import { AccordionContext, useAccordionContext } from "./Accordion";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionTrigger {
  children: React.ReactNode;
  isOpen?: boolean;
  value?: number;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTrigger> = ({
  children,
  isOpen,
  className,
  value,
}) => {
  const { toggleItems } = useAccordionContext();

  return (
    <button
      onClick={() => value && toggleItems(value)}
      className={cn(
        "flex justify-between w-full py-4 px-5 text-left md:items-center  cursor-pointer",
        className
      )}
    >
      {children}
      <Plus
        className={cn(
          "transition-transform duration-300  ",
          isOpen ? "transform  rotate-45 " : ""
        )}
      />
    </button>
  );
};
