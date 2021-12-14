<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::prefix('guest')->group(function() {
//     Route::get('/', 'GuestController@index');
// });


/**
 * * Global route group.
 * ! this route need authentication.
 */
Route::group(
    [
        'middleware' => ['auth:sanctum', 'role:guest'],
        'prefix'     => 'guest',
        'as'    => 'guest.',
    ],
    function () {

        // Main page on guest
        Route::get('/', 'GuestController@index')->name('home');

        Route::resource('migration_role', MigrationRoleController::class);
    }
);
