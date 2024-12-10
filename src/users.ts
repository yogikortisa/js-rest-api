
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Database Dummy - THIS IS NOT A REAL DATABASE
  export let initialUsers: User[] = [
    {
      id: 1,
      name: "Fulan",
      email: "fulan@email.com",
    },
    {
      id: 2,
      name: "Pedro",
      email: "pedro@email.com",
    },
    {
      id: 3,
      name: "Jamput",
      email: "jamput@email.com",
    },
  ];
  
  export async function getUsers() {
    return initialUsers;
  }
  
  export async function getUserById(id: number) {
    const foundUser = initialUsers.find(
      (user) => user.id === id
    );
    return foundUser;
  }
  
  export function addUser({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) {
    let newId;
    if (initialUsers.length === 0) {
      newId = 1;
    } else {
      newId = initialUsers.at(-1)!.id + 1;
    }
  
    const newUser = {
      id: newId,
      name,
      email,
    };
  
    initialUsers.push(newUser);
  
    return newUser;
  }
  
  export function deleteUserById(id: number) {
    const newUsers = initialUsers.filter(
      (user) => user.id !== id
    );
    initialUsers = newUsers;
    return `User with id: ${id} has been deleted`;
  }
  
  export async function updateEmailById({
    id,
    email,
  }: {
    id: number;
    email: string;
  }) {
    const users = await getUsers();
    const foundUser = users.find(
      (user) => user.id === id
    );
  
    foundUser!.email = email;
  
    return foundUser;
  }