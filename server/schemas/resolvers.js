const { User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return await User.find({})
        }
    },
    Mutation: {
        addUser: async (_, args) => {
            return await User.create(args);
        }
    }


}

module.exports = resolvers;