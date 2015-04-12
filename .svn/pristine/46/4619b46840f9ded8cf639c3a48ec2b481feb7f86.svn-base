// Loading Spinner.js Options and init
var opts = {
  lines: 11, // The number of lines to draw
  length: 14, // The length of each line
  width: 7, // The line thickness
  radius: 19, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 14, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#0BAFEE', // #rgb or #rrggbb or array of colors
  speed: 1.4, // Rounds per second
  trail: 64, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: true, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};
var target = document.getElementById('pageLoader');
var spinner = new Spinner(opts).spin(target);
target.appendChild(spinner.el);

// Spinner.js Ends


// User Filter PopOver init
$('#user_filter').popover({
    html: true,
    content: function() {
      return $('#user_filter_content').html();
    }
})