$(function() {
  var loc = window.location.pathname; // returns the full URL
  console.log("CURRENT URL :"+loc)

  switch (loc) {
    case '/techniques':
        $('.menu-item').addClass('m-on')
    case '/something':
    case '/somestuff':
        $('#main').addClass('some')
}
});

// https://stackoverflow.com/questions/9983091/jquery-add-class-based-on-page-url?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa