'use strict'
const axios = use('axios');
const User = use('App/Models/User');
const UserRepo = use('App/Repositories/UserRepository');

class UserController {

  constructor() {
    this.userRepo = new UserRepo(User);
  }

  async getUser({ response, auth }) {
    try {
      const { email, username } = await auth.getUser();
      return { email, username };
    } catch (error) {
      response.send('Missing or invalid jwt token' + error);
    }
  }

  async getAllUsers() {
    return await this.userRepo.find(1);
  }
}

module.exports = UserController
