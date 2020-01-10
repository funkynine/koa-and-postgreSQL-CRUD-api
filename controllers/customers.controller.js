// const Model = require('../models');

// module.exports = {
//   get: async (ctx) => {
//     const collection = await Model.User.findAll();
//     const users = collection;

//     ctx.body = users;
//   },
//   create: async (ctx) => {
//     const payload = ctx.request.body;
//     const user = await User.create({
//       name: payload.name,
//       email: payload.email
//     });
    
//     ctx.body = user;
//   },
//   update: async (ctx) => {
//     const payload = ctx.request.body;
//     const { id } = ctx.request.body;
//     const user = await User.update(payload, {
//       where: {
//         id
//       }
//     });

//     ctx.body = user;
//   },
//   delete: async (ctx) => {
//     const payload = ctx.request.body;
//     const user = await User.destroy({
//       where: {
//         id: payload.id
//       }
//     });

//     ctx.body = user;
//   },
// };