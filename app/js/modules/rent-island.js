window.rentIsland = (function($) {
  'use strict';

  const form = document.querySelector('#form-rent-island');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    groups: {
      dimensions: 'dimensionWidth dimensionLength dimensionHeight',
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
        dataType: 'json',
      })
        .done(data => {
          if (data.status === true) {
            form.reset();
            $.fancybox.close(true);

            setTimeout(() => {
              $.fancybox.open(`
                <div class="popup-message">
                  <h2 class="popup-message__text">Спасибо, ваша заявка отправлена.</h2>
                </div>
              `);
            }, 400);
          } else {
            $.fancybox.open(`
              <div class="popup-message">
                <h2 class="popup-message__text">Что-то пошло не так! Попробуйте снова!</h2>
              </div>
            `);
          }
        })
        .fail(() => {
          $.fancybox.open(`
            <div class="popup-message">
              <h2 class="popup-message__text">Что-то пошло не так! Обновите страницу и попробуйте снова!</h2>
            </div>
          `);
        });
    },
    rules: {
      phone: {
        checkPhoneMask: true,
      },
      'profiles[]': {
        required: true,
      },
    },
  });
})(window.jQuery);
