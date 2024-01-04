import { ContactsCollection, Contact } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: Contact | undefined;
}

class ContactsController {
  contacts: ContactsCollection;
  promise: Promise<any>;

  constructor() {
    this.contacts = new ContactsCollection();
    this.promise = this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    var resultado;
    if (options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}
export { ContactsController };
