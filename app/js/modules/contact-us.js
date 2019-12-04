window.contactUs = (function(window, $) {
  'use strict';

  const form = document.querySelector('#form-contact-us');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler(form, event) {
      event.preventDefault();

      const action = form.action;
      const formData = new FormData(form);

      formData.append('dateSendForm', new Date());

      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
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
  });
})(window, window.jQuery);
