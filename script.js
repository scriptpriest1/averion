$(document).ready(function () {
  // Navbar toggle for mobile view
  const $navbarMenu = $('.site-header .list-container');

  $(document).on('click', '.site-header .navbar-toggler', function () {
    if ($navbarMenu.is(':visible')) {
      $navbarMenu.hide();
    } else {
      $navbarMenu.show();
    }
  });

  // Hero section heading translation rotation
  $(function () {
    const translations = [
      '<p class="fs-6 fw-normal position-absolute top-0 start-50" style="transform: translate(-50%, -90%)">Igbo</p>Kedu ihe ịchọrọ ịzụta?', // Igbo
      '<p class="fs-6 fw-normal position-absolute top-0 start-50" style="transform: translate(-50%, -90%)">Yoruba</p>Kí ni o fẹ́ rà?', // Yoruba
      '<p class="fs-6 fw-normal position-absolute top-0 start-50" style="transform: translate(-50%, -90%)">Hausa</p>Me kake son siya?', // Hausa
      '<p class="fs-6 fw-normal position-absolute top-0 start-50" style="transform: translate(-50%, -90%)">Efik</p>Ñkpọ emi ke usen ke ubok ibom mi?', // Efik
      'What do you want to buy?', // English
    ];

    let i = 0;
    const heading = $('.hero .welcome-heading');

    setInterval(() => {
      heading.fadeOut(500, () => {
        heading.html(translations[i]).fadeIn(500);
        i = (i + 1) % translations.length;
      });
    }, 5000);
  });

  // Auth screen section-step navigation
  $(function () {
    let currentStep = 1;
    const steps = $('.auth-screen .auth-step');
    const totalSteps = steps.length;

    steps
      .hide()
      .eq(currentStep - 1)
      .show();
    $('.step-indicator').text(`Step ${currentStep} of ${totalSteps}`);

    $(document).on('click', '.auth-screen .next-btn', function () {
      $('.auth-screen .auth-sect').scrollTop(0);
      $('body, html').scrollTop(0);
      if (currentStep < totalSteps) {
        steps.eq(currentStep - 1).hide();
        currentStep++;
        steps.eq(currentStep - 1).fadeIn(300);
        $('.step-indicator').text(`Step ${currentStep} of ${totalSteps}`);
      }
    });

    $(document).on('click', '.auth-screen .prev-btn', function () {
      $('.auth-screen .auth-sect').scrollTop(0);
      $('body, html').scrollTop(0);
      if (currentStep > 1) {
        steps.eq(currentStep - 1).hide();
        currentStep--;
        steps.eq(currentStep - 1).fadeIn(300);
        $('.step-indicator').text(`Step ${currentStep} of ${totalSteps}`);
      }
    });
  });

  // Profile image upload and preview
  $(function () {
    $(document).on('change', '.file-input', function (event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $('.photo-upload-container')
            .find('.preview-img-box')
            .prepend(`<img src="" alt="" class="preview-img w-100 h-100" />`);
          $(input).siblings('.preview-img').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
      }
    });
  });
  $(document).on('click', '.upload-btn', function (e) {
    e.preventDefault();
    $(this).siblings('.file-input').trigger('click');
  });
});
