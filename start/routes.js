'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/auth/token/refresh', 'AuthController.refreshToken');
  Route.post('/auth/logout', 'AuthController.logout');

  Route.get('/user/me', 'UserController.getUser');
  Route.get('/user/all', 'UserController.getAllUsers');
}).middleware(['auth']);

Route.group(() => {
  Route.post('/auth/sign-in', 'AuthController.signIn');
  Route.post('/auth/register', 'AuthController.register');
}).middleware(['guest']);


