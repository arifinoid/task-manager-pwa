import { createContext, useState } from "react";

type TasksContextState = {
  tasks: any;
  editTask: (task: any, state: boolean) => void;
  isEditTask: boolean;
};

const contextDefaultValues: TasksContextState = {
  tasks: {},
  editTask: () => {},
  isEditTask: false,
};

export const TaskContext = createContext<TasksContextState>(
  contextDefaultValues
);

const TaskProvider = ({ children }: { children: React.ReactChild }) => {
  const [tasks, setTask] = useState<any>(contextDefaultValues.tasks);
  const [isEditTask, setIsEditTask] = useState<boolean>(false);
  const editTask = (newTask: any, editState: boolean) => {
    setTask({ ...newTask });
    setIsEditTask(editState);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        editTask,
        isEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
