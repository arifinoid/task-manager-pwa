const TaskList = () => {
  return (
    <div className="antialiased mx-auto max-w-screen-sm">
      <h3 className="mb-4 text-xl font-bold text-gray-900">Task List</h3>
      <div className="space-y-4">
        <div className="flex">
          <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <div className="flex justify-end mb-4">
              <span className="text-xs text-gray-400">3:34 PM</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="mt-4 flex items-center">
              {/* TODO: Toggle Complete Component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
