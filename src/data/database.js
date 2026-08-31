let users = [
  {
    id: 1,
    name: 'Ana Silva',
    email: 'ana.silva@empresa.com',
    role: 'Desenvolvedora Frontend',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    email: 'carlos.eduardo@empresa.com',
    role: 'Product Manager',
    createdAt: new Date().toISOString()
  }
];

let currentId = 2;

const database = {
  findAll: () => users,
  findById: (id) => users.find((user) => user.id === parseInt(id, 10)),
  create: (userData) => {
    currentId += 1;
    const newUser = {
      id: currentId,
      name: userData.name,
      email: userData.email,
      role: userData.role || 'Usuário',
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return newUser;
  },
  update: (id, updateData) => {
    const userIndex = users.findIndex((user) => user.id === parseInt(id, 10));
    if (userIndex === -1) return null;

    users[userIndex] = {
      ...users[userIndex],
      name: updateData.name || users[userIndex].name,
      email: updateData.email || users[userIndex].email,
      role: updateData.role || users[userIndex].role,
      updatedAt: new Date().toISOString()
    };
    return users[userIndex];
  },
  delete: (id) => {
    const userIndex = users.findIndex((user) => user.id === parseInt(id, 10));
    if (userIndex === -1) return false;
    users.splice(userIndex, 1);
    return true;
  }
};

module.exports = database;
