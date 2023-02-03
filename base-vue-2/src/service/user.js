import BaseCRUD from "@/config/BaseCRUD";

class UserService extends BaseCRUD {
  constructor() {
    super("user");
  }
}

export default new UserService();
