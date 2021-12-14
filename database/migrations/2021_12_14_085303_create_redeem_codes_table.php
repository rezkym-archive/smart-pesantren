<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedeemCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('redeem_codes', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedBigInteger('created_by');
        //     $table->string('code', 100);
        //     $table->string('type', 100);
        //     $table->text('description')->nullable();
        //     $table->integer('quota')->default(0);
        //     $table->integer('quota_limit')->nullable()->default(0);
        //     $table->enum('status', ['active', 'not-active', 'limit', 'unlimited']);
        //     $table->timestamp('expires_at')->nullable();
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('redeem_codes');
    }
}
