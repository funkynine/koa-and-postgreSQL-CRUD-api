const Model = require('../models');

module.exports = {
  get: async (ctx) => {
    const users = await Model.User.findAll();

    ctx.body = users;
  },
  create: async (ctx) => {
    const { name, email } = ctx.request.body;
    const user = await Model.User.create({
      name,
      email
    });
    
    ctx.body = user;
  },
  update: async (ctx) => {
    const payload = ctx.request.body;
    const { id } = ctx.request.body;
    const user = await Model.User.update(payload, {
      where: {
        id
      }
    });
    
    ctx.body = user;
  },
  delete: async (ctx) => {
    const payload = ctx.request.body;
    const { id } = payload;
    const user = await Model.User.destroy({
      where: {
        id
      }
    });
    
    ctx.body = user;
  },

  hasOne: async (ctx) => {
    const user = await Model.Task.findAll({
      where: { id: 1 },
      include: [{ model: Model.User, as: 'User'}]
    });

    ctx.body = user;
  },

  hasMany: async (ctx) => {
    const user = await Model.Image.findAll({
      where: { id: 2 },
      include: [{ model: Model.User, as: 'User'}]
    });

    ctx.body = user;
  },

  belongsTo: async (ctx) => {
    const user = await Model.Order.findAll({
      where: { name: "Order 1" },
      include: [{ model: Model.User, as: 'User'}]
    });

    ctx.body = user;
  },

  belongsMany: async (ctx) => {
    const user = await Model.Order.findAll({
      where: { name: "Order 1" },
      include: [{ model: Model.User, as: 'User'}]
    });

    ctx.body = user;
  },
};