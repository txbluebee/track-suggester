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
    
  });
});
