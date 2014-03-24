com.onsip.developer.site = {

  initialize: function() {
    console.log('[initializing]');
    this._checkForActiveMenu();     // Check if sidebar on page
    this._attachEvents();
  },

  _attachEvents: function() {

  },

  _checkForActiveMenu: function() {
    var $menuParentLinks = $('.sidenav-section'),
        currentPage = window.location.pathname,
        linkHref = null;

    if ($menuParentLinks.length) {
      $menuParentLinks.each(function() {
        linkHref = $(this).attr('href');

        if (currentPage === linkHref) {
          $(this).parent('li').addClass('active');
          return;
        } else if (currentPage !== linkHref && currentPage.indexOf() > -1) {
          $(this).parent('li').addClass('active');
          return;
        }
      });
    }
  }
}

// This doesn't appear to be functional
// Grab API status
// $.getJSON('https://status.onsip.com/api/status.json?callback=?', function(data) {
//   if(data) {
//     var link = $("<a>")
//       .attr("href", "https://status.onsip.com")
//       .addClass(data.status)
//       .attr("title", "API Status: " + data.status + ". Click for details.")
//       .text("API Status: " + data.status);
//     $('.api-status').html(link);
//   }
// });