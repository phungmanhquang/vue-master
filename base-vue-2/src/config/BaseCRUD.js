import service from "@/config/axios";

export default class {
  service = service;

  constructor(path) {
    this.path = path;
  }

  post(data) {
    return this.service.post(this.path, data);
  }

  get(params) {
    return this.service.get(this.path, { params });
  }

  put(id, data) {
    const path = `${this.path}/${id}`;
    return this.service.put(path, data);
  }

  delete(id) {
    const path = `${this.path}/${id}`;
    return this.service.delete(path);
  }
}
