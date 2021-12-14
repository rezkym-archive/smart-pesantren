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

    // Admin Section - Kelola Santri
    [
        'section' => 'Kelola',
        'permission_section' => 'manage_kesantrian_admin',
    ],

    // Custome Content
    [
        'title' => 'Kesantrian',
        'icon' => 'media/svg/icons/Layout/Layout-4-blocks.svg',
        'bullet' => 'dot',
        'root' => true,
        'permission' => 'manage_kesantrian_admin',
        'submenu' => [
            [
                'title' => 'Data santri',
                'permission' => 'manage_kesantrian_admin',
                'bullet' => 'dot',
                'page' => '#',
                /* 'label' => [
                    'type' => 'label-danger label-inline',
                    'value' => 'new'
                ] */
            ],
            [
                'title' => 'Data izin santri',
                'permission' => 'manage_kesantrian_admin',
                'bullet' => 'dot',
                'page' => '#',
            ],


        ]
    ],

    // Teacher Section - Halaqoh
    [
        'section' => 'Halaqoh',
        'permission_section' => 'halaqoh_teacher',
    ],
    // End Teacher Section - Halaqoh

    // Teacher Halaqoh - Content
    [
        'title' => 'Halaqoh',
        'icon' => 'media/svg/icons/Layout/Layout-4-blocks.svg',
        'bullet' => 'dot',
        'root' => true,
        'permission' => 'halaqoh_teacher',
        'submenu' => [
            [
                'title' => 'Setoran baru',
                'permission' => 'halaqoh_teacher',
                'bullet' => 'dot',
                'page' => '/teacher/halaqoh',
                /* 'label' => [
                    'type' => 'label-danger label-inline',
                    'value' => 'new'
                ] */
            ],
            [
                'title' => 'Riwayat setoran',
                'permission' => 'halaqoh_teacher',
                'bullet' => 'dot',
                'page' => '/teacher/halaqoh/history',
            ],


        ]
    ],
    // End Teacher Halaqoh - Content

    // Student Section - Kesantrian
    [
        'section' => 'Kesantrian',
        'permission_section' => 'mutabaah_student',
    ],
    // End Teacher Section - Halaqoh

    // Teacher Halaqoh - Content
    [
        'title' => 'Mutabaah Yaumiyah',
        'icon' => 'media/svg/icons/Layout/Layout-4-blocks.svg',
        'bullet' => 'dot',
        'root' => true,
        'permission' => 'mutabaah_student',
        'submenu' => [
            [
                'title' => 'Mutabaah',
                'permission' => 'mutabaah_student',
                'bullet' => 'dot',
                'page' => 'student/mutabaah',
                /* 'label' => [
                    'type' => 'label-danger label-inline',
                    'value' => 'new'
                ] */
            ],
            /* [
                'title' => 'Riwayat mutabaah',
                'permission' => 'mutabaah_student',
                'bullet' => 'dot',
                'page' => '/teacher/halaqoh/history',
            ], */


        ]
    ],
    // End Teacher Halaqoh - Content


],

];