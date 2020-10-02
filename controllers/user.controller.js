const { User } = require('./../models');
const _ = require ('lodash');

exports.createUser = async (req, res, next) => {
   
    const { body } = req;
    let createdUser = null;
    try {
   
    createdUser = await User.create(body);
} catch (e) {
        return next(e);
}
    const userData = createdUser.get();

    const preparedUser = _.omit(userData, ['passwordHash'])
   
}
exports.getUserById = async (req, res, next) => {}
exports.getUsers = async (req, res, next) => {}
exports.updateUserById = async (req, res, next) => {}
exports.deleteUserById = async (req, res, next) => {}