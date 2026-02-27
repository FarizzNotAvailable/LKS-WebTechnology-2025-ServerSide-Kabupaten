<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Validation extends Model
{
    protected $fillable = ['user_id', 'validator_id', 'status', 'job', 'job_description', 'reason_accepted', 'income', 'validator_notes', 'reason_accepted'];

    function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    function validator(){
        return $this->belongsTo(Validator::class, 'validator_id');
    }
}
