import Person from "../models/Person";

interface PersonCreate {
  name: string;
}
class PersonService {
  async create(person: PersonCreate) {
    return await Person.create(person);
  }

  async findAll() {
    return await Person.findAll();
  }
}

export default new PersonService();
