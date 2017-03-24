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

    console.log(envirnment);
    console.log(platform);
    console.log(companySize);
    console.log(langauageType);
    console.log(api);

    //front-end Logic
    /**
     1. CSS/Design: value => front-end
     2. PHP/Drupal value => back-end, dynamic, lessAPI
     3. Ruby/Rails: value => back-end, dynamic, small, moreAPI,
     4. C#/.NET: value => back-end, stat, big
     5. Java/Android: value => back-end, stat, mobile
    **/
    if ()
  });
});
