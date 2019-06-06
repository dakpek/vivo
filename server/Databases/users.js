const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const db = require('./db')
const user = require('../Models/users');
const errors = require('../errors')

const SALT = 10;

const addUser = async (User) => {

  let email = User.email;
  let found = await this.findUser({email});
  if (found) {
    return {'error': errors.USER_EXISTS}
  }
  let pwd = User.password;
  let password = await bcrypt.hash(pwd, SALT)
  let res = await user.create({email, password})
  let uid = res._id
  user.updateOne(res, {uid})
    .then(() => console.log('Added Item'))
    .catch(err => console.error(err))
  return uid
}



const deleteUser = async (uid) => {
  let data = await user.findOneAndDelete({uid})
    if (data) {
      console.log("successfully deleted User")
    }
    return data
}

const signInUser = async (User) => {
  console.log(User)
  let email = User.email;
  let pwd = User.password;
  let suggestedUser = await user.findOne({"email": email})
  if (suggestedUser == null ) {
    return {'error': errors.USER_DOES_NOT_EXIST}
  }
  console.log('Suggested USer: ', suggestedUser);
  let passWordMatch = await bcrypt.compare(pwd, suggestedUser.password)
    if (passWordMatch) {
      return suggestedUser
    } else {
      return {'error': errors.WRONG_PASSWORD}
    }
}

const editUser = async (User) => {
  let uid = User.uid
  let newUser = User.user
  await user.updateOne({uid}, newUser)
  return newUser
}

const findUser = async (uid) => {
  let found = await user.findOne(uid)
  return found;
}


exports.addUser = addUser
exports.deleteUser = deleteUser
exports.signInUser = signInUser
exports.editUser = editUser
exports.findUser = findUser