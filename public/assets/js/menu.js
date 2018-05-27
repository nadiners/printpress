$(function() {
    var loc = window.location.pathname; // returns the full URL
    console.log("CURRENT URL :" + loc)

    // $('.menu li:has(a[href="'+ window.location.pathname +'"])').addClass('m-on');

    var techniques = RegExp('techniques').test(window.location.pathname)
    var toolkit = RegExp('toolkit').test(window.location.pathname)

    techniques = 'techniques';

    console.log("Contenu dans URL :" + techniques) //return techniques
    
    if (toolkit = true) {
    toolkit = 'toolkit';
    console.log("Contenu dans URL :" + toolkit) //return techniques
}


// switch (inUrl) {
//     case 'techniques':
//         $('#techniques').addClass('m-on')
//     case '/toolkit':
//         $('#toolkit').addClass('m-on')
//     case '/timeline':
//         $('#timeline').addClass('m-on')
//     case '/directory':
//         $('#directory').addClass('m-on')
//     case '/calendar':
//         $('#calendar').addClass('m-on')
//     case '/glossary':
//         $('#glossary').addClass('m-on')
//     case '/about':
//         $('#about').addClass('m-on')
// }
});


// if(/technology/.test(loc)) {
// https://stackoverflow.com/questions/9983091/jquery-add-class-based-on-page-url?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa