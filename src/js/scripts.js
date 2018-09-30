'use strict';
(function () {
    $(window).on('load', function () {
        $('.preLoader').addClass('preLoaderInProgres')

        $('.preLoader').on('transitionend', function () {
            $(this).addClass('preLoaderComplete')
            $(this).removeClass('preLoaderInProgres')
        })
        let cookie = document.cookie.split('=')
        let order = cookie[1]
        console.log(order);
        $('#order').attr('value', order)


    })
    $("#buttonOne").on('click', function () {
        console.log('test')
        $('html,body').animate({
            scrollTop: $("section").offset().top
        }, 1000)
    })
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    $('.options a').on('click', function () {
        this._order = $('.options select').val()
        document.cookie = 'order' + "=" + this._order;
    })

})();