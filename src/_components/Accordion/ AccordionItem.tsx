import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { useAccordionContext } from "./Accordion";
import React from "react";

type AccordionItemChildProps = {
  isOpen?: boolean;
  value?: number;
};
interface AccordionItemProps {
  children:
    | React.ReactElement<AccordionItemChildProps>
    | React.ReactElement<AccordionItemChildProps>[];
  value: number;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className,
}) => {
  const { activeIndexes } = useAccordionContext();
  const isOpen = activeIndexes.includes(value);
  return (
    <div
      // onClick={onClick}
      className={cn(
        "overflow-hidden rounded-xl transition-colors duration-500 ease-out",
        isOpen ? "bg-white" : "bg-white",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemChildProps>(child)) {
          return React.cloneElement(child, { isOpen, value });
        }
        return child;
      })}
    </div>
  );
};
