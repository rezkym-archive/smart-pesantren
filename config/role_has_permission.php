<?php

return
    [
        /*
        |--------------------------------------------------------------------------
        | role_has_permission
        |--------------------------------------------------------------------------
        |
        | This default configuration is used 
        | when the migration is first run
        | 
        */
        'role_has_permission' =>
        [
            /*
            |--------------------------------------------------------------------------
            | Admin role has permission to
            |--------------------------------------------------------------------------
            |
            | This role can access all inside this permission
            | 
            */
            [
                'admin' =>
                [
                    'manage_kesantrian',
                    'manage_halaqoh',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Teacher role has permission to
            |--------------------------------------------------------------------------
            |
            | This role can access all inside this permission
            | 
            */
            [
                'teacher' =>
                [
                    'halaqoh_teacher',
                    'attendance_teacher',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Binsis role has permission to
            |--------------------------------------------------------------------------
            |
            | This role can access all inside this permission
            | 
            */
            [
                'binsis' =>
                [
                    //
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Guest role has permission to
            |--------------------------------------------------------------------------
            |
            | This role can access all inside this permission
            | 
            */
            [
                'guest' =>
                [
                    'guest_room',
                    'role_migration',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Student role has permission to
            |--------------------------------------------------------------------------
            |
            | This role can access all inside this permission
            | 
            */
            [
                'student' =>
                [
                    'mutabaah_student',
                ],
            ],
        ],
    ];
