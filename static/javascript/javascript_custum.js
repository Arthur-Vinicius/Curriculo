// teste de fechamento automatico de navbar
document.addEventListener('DOMContentLoaded', function() {
  var navbarCollapse = document.getElementById('navbarNavDropdown');
  var navLinks = navbarCollapse.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
});
