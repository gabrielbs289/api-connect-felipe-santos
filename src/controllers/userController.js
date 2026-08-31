const database = require('../data/database');

const userController = {
  getAllUsers: (req, res) => {
    try {
      const users = database.findAll();
      return res.status(200).json({
        success: true,
        results: users.length,
        data: users
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
  },

  getUserById: (req, res) => {
    try {
      const { id } = req.params;
      const numericId = parseInt(id, 10);

      if (isNaN(numericId)) {
        return res.status(400).json({ success: false, message: 'ID deve ser numérico.' });
      }

      const user = database.findById(numericId);
      if (!user) {
        return res.status(404).json({ success: false, message: `Usuário ID ${id} não encontrado.` });
      }

      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
  },

  createUser: (req, res) => {
    try {
      const { name, email, role } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          error: 'Campos obrigatórios ausentes. Forneça name e email.'
        });
      }

      const newUser = database.create({ name, email, role });
      return res.status(201).json({
        success: true,
        message: 'Usuário cadastrado com sucesso.',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
  },

  updateUser: (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, role } = req.body;
      const numericId = parseInt(id, 10);

      if (isNaN(numericId)) {
        return res.status(400).json({ success: false, message: 'ID deve ser numérico.' });
      }

      const updatedUser = database.update(numericId, { name, email, role });
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: `Usuário ID ${id} não encontrado.` });
      }

      return res.status(200).json({ success: true, message: 'Usuário atualizado.', data: updatedUser });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
  },

  deleteUser: (req, res) => {
    try {
      const { id } = req.params;
      const numericId = parseInt(id, 10);

      if (isNaN(numericId)) {
        return res.status(400).json({ success: false, message: 'ID deve ser numérico.' });
      }

      const wasDeleted = database.delete(numericId);
      if (!wasDeleted) {
        return res.status(404).json({ success: false, message: `Usuário ID ${id} não encontrado.` });
      }

      return res.status(200).json({ success: true, message: `Usuário ID ${id} removido com sucesso.` });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
  }
};

module.exports = userController;
