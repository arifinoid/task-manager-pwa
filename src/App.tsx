import TaskProvider from "./context/taskContext";

import BaseComponent from "./components/Base";
import Input from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TasksStore from "./stores/taskStore";
import UserStore from "./stores/userStore";

export interface ITask {
  text: string;
  _id: string;
  _rev: string;
  dirtyAt: string;
  is_complete: boolean;
  uploaded: boolean;
}

class App extends BaseComponent {
  state = {
    isInitialized: false,
  };
  unsubUser: any;

  async componentDidMount() {
    await UserStore.initialize();
    this.setState({
      isInitialized: true,
    });

    if (!UserStore.data.email) {
      await UserStore.editSingle({
        id: "test",
        email: "test@gmail.com",
      });
    }
    this.unsubUser = UserStore.subscribe(this.rerender);
  }

  async componentDidUpdate() {
    if (!TasksStore.isInitialized) {
      TasksStore.setName("test");
      await TasksStore.initialize();
    }
  }

  componentWillUnmount() {
    this.unsubUser();
  }

  render() {
    if (!this.state.isInitialized) {
      return (
        <div className="text-center container">
          <h1>Not initialized</h1>
        </div>
      );
    }

    return (
      <TaskProvider>
        <div className="m-auto antialiased font-sans font-serif font-mono text-center">
          <section className="min-h-screen flex flex-col items-center justify-center text-2xl">
            <Input />
            <TaskList />
          </section>
        </div>
      </TaskProvider>
    );
  }
}

export default App;
