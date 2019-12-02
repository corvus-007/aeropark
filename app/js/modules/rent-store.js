window.rentStore = (function(window, $) {
  'use strict';

  const form = document.querySelector('#form-rent-store');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    groups: {
      area: 'areaMin areaMax areaOptimal'
    },
    errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler(form, event) {
      event.preventDefault();

      const formData = new FormData(form);
      const action = form.action;

      formData.append('dateSendForm', new Date());

      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      })
        .done(data => {
          if (data.status === true) {
            form.reset();
            $.fancybox.close();
            alert('Спасибо, ваша заявка отправлена ;-)');
          } else {
            alert('Произошла ошибка! Попробуйте снова!');
          }
        })
        .fail(() => {
          alert('Произошла ошибка! Обновите страницу и попробуйте снова!');
        });
    },
    rules: {
      phone: {
        checkPhoneMask: true
      }
    }
  });
})(window, jQuery);
