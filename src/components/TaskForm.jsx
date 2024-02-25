import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState(""); //Un setState que guarda en variable lo que vayamos asignando
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //Esto nos cancela que el formulario reinicie la pagina por defecto

    createTask({
      title,
      description,
    }); //convierte en objeto los sets que ha hecho
    setTitle(""); //Para cuando ya ayamos dado enter al boton, esto se reinicie a vacio
    setDescription(""); //Para cuando ya ayamos dado enter al boton, esto se reinicie a vacio
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">CREA TU TAREA</h1>
        {" "}
        {/* Le decimos que al enviar ejecute la funcion maneja forumlario */}
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus // esto va a poner el cursor en este input en cuanto refresquemos la pagina
        />
        {/* Input que guarda en consola lo que pongamos dentro de el y se lo asigna a la constante TITLE*/}
        <textarea
          placeholder="escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
