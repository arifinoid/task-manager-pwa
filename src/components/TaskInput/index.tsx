import React, { useState, useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Form from "../Form";
import Input from "../Input";
import "./index.css";

import TasksStore from "../../stores/taskStore";
import UserStore from "../../stores/userStore";
import { TaskContext } from "../../context/taskContext";

const TaskInput: React.FC = () => {
  const [task, setTask] = useState("");
  const { tasks, isEditTask, editTask } = useContext(TaskContext);

  useEffect(() => {
    if (tasks.text) {
      setTask(tasks.text);
    }
  }, [tasks]);

  const handleAddTask = async () => {
    try {
      if (!task) {
        toast.error("Please enter task title", {
          className: "text-xs",
          autoClose: 2000,
        });
        return;
      }

      await TasksStore.addItem(
        {
          text: task,
          is_complete: false,
        },
        UserStore.data
      );
      toast.success("Add task succeed", {
        className: "text-xs",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        className: "text-xs",
        autoClose: 2000,
      });
      return error;
    }
  };

  const handleEditTask = async () => {
    try {
      const id = tasks._id;
      const payload = {
        text: task,
      };
      await TasksStore.editItem(id, payload, UserStore.data);
      toast.success("Edit task succeed", {
        className: "text-xs",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.messagge, {
        className: "text-xs",
        autoClose: 2000,
      });
      return error;
    } finally {
      editTask({}, false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    isEditTask ? handleEditTask() : handleAddTask();
    setTask("");
  };

  const handleSync = async () => {
    try {
      await TasksStore.upload();
      toast.success("Sync succeed", {
        className: "text-xs",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        className: "text-xs",
        autoClose: 2000,
      });
      return error;
    }
  };

  return (
    <div className="flex justify-center items-center container my-11">
      <section className="flex max-w-sm w-full h-64 bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5">
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
            placeholder="Add task..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
          />
          <button
            className="my-3 w-full py-3 bg-green-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg"
            type="submit"
          >
            {isEditTask ? "Edit" : "Add"}
          </button>
          <button
            className="my-3 w-full py-3 bg-blue-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg"
            type="button"
            onClick={handleSync}
          >
            Sync
          </button>
        </Form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default TaskInput;
