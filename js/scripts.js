$(document).ready(function(){
  $("#formOne").submit(function(event) {

   var favThings = $("input#favOne").val();
   var favThings1 = $("input#favTwo").val();
   var favThings2 = $("input#favThree").val();
  console.log(favThings);
  console.log(favThings1);
  console.log(favThings2);
  event.preventDefault();
  $("span#spanFavThings").append(favThings);
  $("span#spanFavPlace").append(favThings1);
  $("span#spanFavColor").append(favThings2);
  });
});
