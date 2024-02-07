import { Todo } from "@/pages";
import { motion, AnimatePresence } from "framer-motion";
export default function Todo({
  todo,
  onClick,
}: {
  todo: Todo;
  onClick: (id: number) => void;
}) {
  // console.log(todo.id)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="rounded-md bg-orange-200 m-3 px-8 py-3 flex justify-between"
        onClick={() => onClick(todo.id)}
        exit={{ x: "-12rem", opacity: 0 }}
      >
        <h1>{todo.text}</h1>
        <button onClick={() => onClick(todo.id)}>hello</button>
      </motion.div>
    </AnimatePresence>
  );
}
