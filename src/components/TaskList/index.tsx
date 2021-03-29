import { FaTrash } from "react-icons/fa";
import { TiDelete, TiInputChecked, TiEdit, TiArrowSync } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";

import taskStore from "../../stores/taskStore";
import userStore from "../../stores/userStore";
import BaseComponent from "../Base";

import { TaskContext } from "../../context/taskContext";

class TaskList extends BaseComponent {
  static contextType = TaskContext;

  unsubTasks: any;
  deleteTask = async (id: string) => {
    await taskStore.deleteItem(id, userStore.data);
  };

  handleEdit = (item: any) => {
    this.context.editTask(item, true);
  };

  changeComplete = async (item: any) => {
    try {
      const id: string = item._id;
      const payload = {
        is_complete: !item.is_complete,
      };
      await taskStore.editItem(id, payload, userStore.data);
      toast.success("Change task status succeed", {
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

  checkIsUploaded(task: any) {
    const { dirtyAt } = task;
    return (
      dirtyAt && new Date(dirtyAt) <= new Date(taskStore.dataMeta.tsUpload)
    );
  }

  componentDidMount() {
    this.unsubTasks = taskStore.subscribe(this.rerender);
  }

  componentWillUnmount() {
    this.unsubTasks();
  }

  render() {
    return (
      <div className="antialiased mx-auto max-w-screen-sm">
        <h3 className="mb-4 text-xl font-bold text-gray-900">Task List</h3>
        <div className="space-y-4">
          {taskStore.data.length ? (
            taskStore.data.map((item: any) => (
              <div className="flex w-96" key={item._id}>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <div className="flex align-end justify-between">
                    <div className="flex w-36">
                      <span className="text-xs text-gray-400 align-middle">
                        {!this.checkIsUploaded(item) && "Not"} Synced
                      </span>
                      <TiArrowSync
                        className={`text-s text-${
                          this.checkIsUploaded(item) ? "green" : "red"
                        }-400`}
                      />
                    </div>
                    <div
                      className="flex w-14"
                      role="button"
                      onClick={() => this.handleEdit(item)}
                    >
                      <span className="text-xs text-gray-400 align-middle">
                        Edit{" "}
                      </span>
                      <TiEdit className="text-s text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm">Task title: {item.text}</p>
                  <p
                    className={`text-sm text-${
                      item.is_complete ? "green" : "red"
                    }-400`}
                  >
                    Status: {item.is_complete ? "Complete" : "Not Complete"}
                  </p>

                  <div className="mt-4 flex items-center align-center justify-around">
                    <div
                      className="flex justify-end align-center mb-4 text-red-400 align-middle"
                      role="button"
                      onClick={() => this.deleteTask(item._id)}
                    >
                      <span className="text-xs align-middle">Delete</span>
                      <FaTrash className="text-xs" />
                    </div>
                    <div
                      className="flex justify-end align-center mb-4 text-gren-400 align-middle"
                      role="button"
                      onClick={() => this.changeComplete(item)}
                    >
                      <span className="text-xs align-middle">
                        Toogle {item.is_complete && "not"} complete
                      </span>
                      {item.is_complete ? (
                        <TiDelete className="text-s text-red-400" />
                      ) : (
                        <TiInputChecked className="text-s text-green-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm">No task data</p>
          )}
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default TaskList;
