import React from "react";

import Input from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <section className="min-h-screen flex flex-col items-center justify-center text-2xl">
        <Input />
        <TaskList />
      </section>
    </div>
  );
};

export default App;
