import PouchyStore from "pouchy-store";

class UserStore extends PouchyStore {
  get name(): string {
    return "user";
  }

  get isUseRemote(): boolean {
    return false;
  }

  get single(): string {
    return this.name;
  }
}

export default new UserStore();
