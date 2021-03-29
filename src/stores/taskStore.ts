import PouchyStore from "pouchy-store";
import config, { ICouchDB } from "../config";

class TasksStore extends PouchyStore {
  _name: string | undefined;

  get name() {
    return config.name;
  }

  setName(userId: string) {
    this._name = `tasks_${userId}`;
  }

  get urlRemote(): string {
    return config.couchDBUrl;
  }

  get optionsRemote(): ICouchDB {
    return {
      auth: config.couchDBAuth,
    };
  }
}

export default new TasksStore();
