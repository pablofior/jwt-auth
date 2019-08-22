
'use strict'

/*
 * All commonly used functions are placed here, mostly CRUD operations
 */



const BaseRepository = use('App/Base/BaseRepository');
const User = use('App/Models/User');

class UserRepository extends BaseRepository{
  constructor() {
    super(User);
  }
}

module.exports = UserRepository
