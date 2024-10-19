// simulates database interraction 

class UserStorage {
    constructor() {
        this.storage = {}; 
        this.id = 0; 
    }

    addUser({ firstName, lastName }) {
        const id = this.id; 
        this.storage[id] = {id, firstName, lastName }; 
        this.id++; 
    }

    getUsers() {
        return Object.values(this.storage); 
    }

    getUser(id) {
        return this.storage[id]; 
    }

    updateUser (id, { firstName, lastName }) {
        this.storage[id] = { id, firstName, lastName }; 
    }

    deleteUser(id) {
        delete this.storage[id]; 
    }
}

// export instance of class, ensuring only one instance can exist 
// singleton pattern 
module.exports = new UserStorage(); 
