'use strict'
const axios = use('axios');
const User = use('App/Models/User');
const UserRepo = use('App/Repositories/UserRepository');

class UserController {
  async getUser({ response, auth }) {

    try {
      const { email, username } = await auth.getUser();
      return { email, username };
    } catch (error) {
      response.send('Missing or invalid jwt token' + error);
    }
  }

  async getAllUsers() {
    const users = await (new UserRepo(User)).all(['permissions', 'roles']);

    return users;
  }
}

module.exports = UserController
