<?php
return [

    'items' => [
        // Dashboard
        [
            'title' => 'Beranda',
            //'permission' => 'primary_dashboard',
            'root' => true,
            'icon' => 'media/svg/icons/Design/Layers.svg', // or can be 'flaticon-home' or any flaticon-*
            'page' => '/',
            'permission' => false,
            'new-tab' => false,
        ],

        // Guest Section - Halaqoh
        [
            'section' => 'Migrasi Peran',
            'permission_section' => 'role_migration',
        ],
        // End Teacher Section - Halaqoh

        // Teacher Halaqoh - Content
        [
            'title' => 'Migrasi Peran',
            'icon' => 'media/svg/icons/Layout/Layout-4-blocks.svg',
            'bullet' => 'dot',
            'root' => true,
            'permission' => 'role_migration',
            'page' => '/guest/migration_role/create',
        ],
        // End Teacher Halaqoh - Content


    ],

];
