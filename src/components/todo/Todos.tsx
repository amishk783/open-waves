import { Todo as TodoType } from "@/pages";
import { motion, AnimatePresence } from "framer-motion";
import Todo from "./Todo";

export default function Todos({
  todos,
  onClick,
}: {
  todos: TodoType[];
  onClick: (id: number) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-12rem", opacity: 0 }}
        layout
      >
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onClick={onClick} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
