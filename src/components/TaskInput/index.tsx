import { useState } from "react";

import Form from "../Form";
import Input from "../Input";
import "./index.css";

const TaskInput: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(task);
  };

  return (
    <div className="flex justify-center items-center container my-11">
      <section className="flex max-w-sm w-full h-48 bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5">
        <h3 className="text-2xl font-bold mb-4">Task Manager PWA</h3>
        <Form
          onSubmit={handleSubmit}
          className="relative h-10 input-component empty"
        >
          <Input
            id="task"
            name="task"
            type="text"
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
          />
          <label
            htmlFor="task"
            className="absolute left-2 transition-all bg-white px-1"
          >
            Add task
          </label>
          <button
            className="my-3 w-full py-3 bg-green-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg"
            type="submit"
          >
            Add
          </button>
        </Form>
      </section>
    </div>
  );
};

export default TaskInput;
