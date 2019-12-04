window.applicationAd = (function($) {
  'use strict';

  const form = document.querySelector('#form-application-ad');

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

      function getActiveNameOfAd() {
        const activePanelEl = document.querySelector(
          '[data-aria-accordion-panel][aria-hidden="false"]'
        );
        let text = null;

        if (activePanelEl) {
          const headingEl = activePanelEl.previousElementSibling;
          text = headingEl.textContent;
        }

        return text;
      }

      formData.append('dateSendForm', new Date());
      formData.append('currentTypeAd', getActiveNameOfAd());

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
    rules: {
      phone: {
        checkPhoneMask: true,
      },
    },
  });
})(window.jQuery);
