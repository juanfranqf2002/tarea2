$(document).ready(function () {
  $('nav ul li').hover(
    function () {
      $(this).find('ul').slideDown(200);
    },
    function () {
      $(this).find('ul').slideUp(200);
    }
  );
});

/**Funciones de validacion java script*/
