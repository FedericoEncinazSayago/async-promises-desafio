import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  contactsFile: string = "./src/contacts.json";
  data: Contact[] = [];

  load(): Promise<any> {
    const promise = jsonfile.readFile(this.contactsFile);

    return promise.then(obj => this.data = obj)
            .catch(error => console.log("Error: " + error));
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact: Contact): void {
    this.data.push(contact);
  }

  save(): Promise<any> {
    const promise = jsonfile.writeFile(this.contactsFile, this.data);

    return promise.then(res => {console.log('Write complete')})
            .catch(error => console.log("Error: " + error));
  }

  getOneById(id: number): Contact | undefined {
    return this.data.find((contact) => contact.id === id)
  }

}
export { ContactsCollection, Contact };
