<?php

namespace Modules\Guest\Http\Controllers;

use App\Models\CodeRedeems;
use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MigrationRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('guest::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('guest::migration_role.create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request, $UserId)
    {
    }
    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {


        //return view('guest::migration_role.show');
        return back()->withErrors('ini show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('guest::migration_role.edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $UserId)
    {

        $user = User::find($UserId);
        $user->RedeemCode($request->code_migration);
        // Get role key from input
        // $GetRoleKey = explode("-", $request->code_migration);

        // // Get user from input request
        // $user = User::where('id', $UserId)->first();

        // // Get code redeems from input request
        // $GetCode = CodeRedeems::where('code', $GetRoleKey[1])
        // ->where('type', 'MIGRATION_ROLE')
        // ->first();




        // $user->syncRoles([$role]);

         // Get role key from input
        //  $GetRoleKey = explode("-", $request->code_migration);

        //  // Get code redeems from database
        //  $code = CodeRedeems::where('code', $request->code_migration)
        //      ->where('type', 'MIGRATION_ROLE')
        //      ->firstOrFail();

        //  // Get user data
        //  $user = User::where('id', $UserId)->first();

        //  // Expired code check
        //  //$code->isExpired();

        //  // Update role
        //  $user->syncRoles([$GetRoleKey[0]]);

        //  return redirect($GetRoleKey[0]);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
