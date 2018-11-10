'use strict';
(function () {
    var order = '';
    $(window).on('load', function () {
        $('.preLoader').addClass('preLoaderInProgres')
        $('.preLoader').on('transitionend', function () {
            $(this).addClass('preLoaderComplete')
            $(this).removeClass('preLoaderInProgres')
        })
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

    $('.options button').on('click', function (e) {
        e.preventDefault();
        order = order + ' ' + $(this).parent().parent().parent().find('select').val() +'\n'
        console.log(order)
        $('#order').attr('value',order)

    })
    $('#clearOrder').on('click',function(e){
        e.preventDefault();
        order = '';
        $('#order').attr('value',order)
    })

})();