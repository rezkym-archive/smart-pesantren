"use strict";

// Class Definition
var KTLogin = (function () {
    var _login;

    var _showForm = function (form) {
        var cls = "login-" + form + "-on";
        var form = "kt_login_" + form + "_form";

        _login.removeClass("login-forgot-on");
        _login.removeClass("login-signin-on");
        _login.removeClass("login-signup-on");

        _login.addClass(cls);

        KTUtil.animateClass(
            KTUtil.getById(form),
            "animate__animated animate__backInUp"
        );
    };

    var _handleSignInForm = function () {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            KTUtil.getById("kt_login_signin_form"),
            {
                fields: {
                    email: {
                        validators: {
                            emailAddress: {
                                message: "Email tidak benar.",
                            },
                            notEmpty: {
                                message: "Email tidak boleh kosong.",
                            },
                        },
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: "Kata sandi tidak boleh kosong",
                            },
                        },
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                },
            }
        );

        $("#kt_login_signin_submit").on("click", function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == "Valid") {
                    KTUtil.scrollTop();
                    $("#kt_login_signin_form").submit();
                } else {
                    KTUtil.scrollTop();
                }
            });
        });

        // Handle forgot button
        $("#kt_login_forgot").on("click", function (e) {
            e.preventDefault();
            _showForm("forgot");
        });

        // Handle signup
        $("#kt_login_signup").on("click", function (e) {
            e.preventDefault();
            _showForm("signup");
        });
    };

    var _handleSignUpForm = function (e) {
        var validation;
        var form = KTUtil.getById("kt_login_signup_form");

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(form, {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: "Nama tidak boleh kosong.",
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: "Nama tidak benar.",
                        },
                        stringLength: {
                            min: 5,
                            max: 50,
                            message:
                                "Nama minimal antara 5 hingga 50 karakter.",
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Email tidak boleh kosong.",
                        },
                        emailAddress: {
                            message: "Email tidak benar.",
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: "Kata sandi tidak boleh kosong.",
                        },
                    },
                },
                agree: {
                    validators: {
                        notEmpty: {
                            message: "Setujui syarat dan persetujuan.",
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
            },
        });

        $("#kt_login_signup_submit").on("click", function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == "Valid") {
                    swal.fire({
                        text: "Apakah semua data sudah benar?",
                        icon: "success",
                        buttonsStyling: false,
                        cancelButtonText: "Ehhh! belum.",
                        confirmButtonText: "Yeups, udah!",
                        customClass: {
                            confirmButton:
                                "btn font-weight-bold btn-light-primary",
                        },
                    }).then(function () {
                        KTUtil.scrollTop();
                        $("#kt_login_signup_form").submit();
                    });
                } else {
                    swal.fire({
                        text: "Upss! ada yang salah nih, coba cek lagi kuy.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Okeyyy.",
                        customClass: {
                            confirmButton:
                                "btn font-weight-bold btn-light-primary",
                        },
                    }).then(function () {
                        KTUtil.scrollTop();
                    });
                }
            });
        });

        // Handle cancel button
        $("#kt_login_signup_cancel").on("click", function (e) {
            e.preventDefault();

            _showForm("signin");
        });
    };

    var _handleForgotForm = function (e) {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            KTUtil.getById("kt_login_forgot_form"),
            {
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Email address is required",
                            },
                            emailAddress: {
                                message:
                                    "The value is not a valid email address",
                            },
                        },
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                },
            }
        );

        // Handle submit button
        $("#kt_login_forgot_submit").on("click", function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == "Valid") {
                    // Submit form
                    KTUtil.scrollTop();
                } else {
                    swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton:
                                "btn font-weight-bold btn-light-primary",
                        },
                    }).then(function () {
                        KTUtil.scrollTop();
                    });
                }
            });
        });

        // Handle cancel button
        $("#kt_login_forgot_cancel").on("click", function (e) {
            e.preventDefault();

            _showForm("signin");
        });
    };

    // Public Functions
    return {
        // public functions
        init: function () {
            _login = $("#kt_login");

            _handleSignInForm();
            _handleSignUpForm();
            _handleForgotForm();
        },
    };
})();

// Class Initialization
jQuery(document).ready(function () {
    KTLogin.init();
});
