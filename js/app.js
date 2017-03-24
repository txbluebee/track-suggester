$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();

    //Set variable to collect value from user input
    var envirnment = $("input:radio[name=envirnment]:checked").val();
    var platform = $("input:radio[name=platform]:checked").val();
    var companySize =
    $("input:radio[name=company-size]:checked").val();
    var langauageType = $("input:radio[name=language-type]:checked").val();
    var api = $("input:radio[name=api]:checked").val();

    //variable for name

    var name = $("input#name").val().toUpperCase();

    $('.userName').text(name);

    //front-end Logic
    /**
     1. CSS/Design: value => front-end
     2. PHP/Drupal value => back-end, dynamic, lessAPI
     3. Ruby/Rails: value => back-end, dynamic, small, moreAPI,
     4. C#/.NET: value => back-end, stat, big
     5. Java/Android: value => back-end, stat, mobile
    **/

    if (name) {
      if ( (envirnment === "front-end") ) {
        $('.track').hide();
        $('.design').fadeIn();
      } else if ( (envirnment === "back-end") && ( langauageType === "dynamic") && ( api === "lessAPI") ) {
        $('.track').hide();
        $('.php').slideUp();
      } else if ( (envirnment === "back-end") && ( langauageType === "dynamic") && ( api === "moreAPI") && ( companySize = "small")) {
        $('.track').hide();
        $('.ruby').slideDown();
      } else if ( (envirnment === "back-end") && ( langauageType === "static") && ( platform === "mobile")) {
        $('.track').hide();
        $('.java').show();
      } else if ( (envirnment === "back-end") && ( langauageType === "static") && ( companySize = "big")) {
        $('.track').hide();
        $('.c-net').show();
      } else {
        $('.track').hide();
        $('no-fit').show();
      }
    } else {
      $('.track').hide();
      alert("Please enter your name!");
    }

  });
});
