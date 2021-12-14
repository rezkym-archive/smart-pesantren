<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use FrittenKeeZ\Vouchers\Facades\Vouchers;
use FrittenKeeZ\Vouchers\Models\Voucher;

use Carbon\CarbonInterval;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = User::where('id', 2)->first();

    return $user->roles->pluck('name')[0];
});


Route::get('/a', function () {


    // $user = User::find(1);
    // $voucher = Vouchers::withMask('***-***-***')
    // ->withMetadata(['foo' => 'bar'])
    // ->withExpireDateIn(CarbonInterval::addDays(2))
    // ->withOwner($user)
    // ->withPrefix('binsis')
    // ->withEntities($user)
    // ->create();

    // dd($voucher);



    try {
        $user = User::find(1);
        Voucher::shouldMarkRedeemed(function (Voucher $voucher) {
            return false;
        });
        $success = Vouchers::redeem('binsis-TQ9-P9M-7G7', $user);
    } catch (FrittenKeeZ\Vouchers\Exceptions\VoucherNotFoundException $e) {
        return 'not found';
    } catch (FrittenKeeZ\Vouchers\Exceptions\VoucherAlreadyRedeemedException $e) {
        return 'already redeem';
    }

    // $user = User::find(1);
    // Voucher::shouldMarkRedeemed(function (Voucher $voucher) {
    //     return false;
    // });
    // /* ... */
    // $voucher = Vouchers::withOwner($user)->create();
    // Vouchers::redeem($voucher->code, $user);


});
