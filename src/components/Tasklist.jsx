//El props.task es por que traemos desde APP las tasks
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    //En caso de que no haya NADA en tareas le pedimos que retorne el H1
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }
  return (
    //Lo que nos retorna cuando si hay Tarea
    <div className="grid grid-cols-4  gap-2  ">
      {tasks.map(
        (
          task //funcion que recorre nuestros objetos y los retorna como le digamos
        ) => (
          <TaskCard task={task} key={task.id} />
        )
      )}
    </div>
  );
}

export default TaskList;
