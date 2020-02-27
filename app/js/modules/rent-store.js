window.rentStore = (function($) {
  'use strict';

  const form = document.querySelector('#form-rent-store');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    groups: {
      area: 'areaMin areaMax areaOptimal',
    },
    errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler(form, event) {
      event.preventDefault();

      const action = form.action;
      const formData = new FormData(form);

      if (window.util.checkIsBotFilledForm(formData, event)) {
        window.location.href = '';
        return;
      }

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
                  <h2 class="popup-message__title">Спасибо</h2><p class="popup-message__text">Ваша заявка отправлена.</p>
                </div>
              `);
            }, 400);
          } else {
            $.fancybox.open(`
              <div class="popup-message">
                <h2 class="popup-message__title">Что-то пошло не так</h2><p class="popup-message__text">Пожалуйста,  попробуйте снова.</p>
              </div>
            `);
          }
        })
        .fail(() => {
          $.fancybox.open(`
            <div class="popup-message">
              <h2 class="popup-message__title">Что-то пошло не так</h2><p class="popup-message__text">Пожалуйста, обновите страницу и попробуйте снова.</p>
            </div>
          `);
        });
    },
    rules: {
      phone: {
        checkPhoneMask: true,
      },
      site: {
        checkUrl: true,
      }
    },
  });
})(window.jQuery);
