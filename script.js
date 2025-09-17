$(document).ready(function () {
  const $navbarMenu = $('.site-header .list-container');

  $(document).on('click', '.site-header .navbar-toggler', function () {
    if ($navbarMenu.is(':visible')) {
      $navbarMenu.hide();
    } else {
      $navbarMenu.show();
    }
  });
});
