const db = require('../../dataBase').getInstance();

module.exports = {
    findAllUsers: (where = {}, limit = 10, offset = 0) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findAll({
            where,
            include: [{ model: CarModel }],
            limit,
            offset
        });
    },

    insertUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findByPk(userId, { include: CarModel });
    },

    updateUser: (userId, newUser) => {
        const UserModel = db.getModel('User');

        return UserModel.update(newUser, { where: { id: userId } });
    },

    removeUser: (userId) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({ where: { id: userId } });
    }

};
