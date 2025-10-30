$(document).ready(function () {
  $(function () {
    const inputs = $('#otp-input .otp-box');

    inputs.on('input', function () {
      const value = $(this).val().replace(/\D/g, ''); // Allow only digits
      $(this).val(value);
      if (value && $(this).next('.otp-box').length) {
        $(this).next().focus();
      }
    });

    inputs.on('keydown', function (e) {
      if (
        e.key === 'Backspace' &&
        !$(this).val() &&
        $(this).prev('.otp-box').length
      ) {
        $(this).prev().focus();
      }
    });
  });
});
