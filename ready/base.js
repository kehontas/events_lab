/*
You can edit the text and remove the second line
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").text("Go!") );
});

//$("h1").text("Go!");

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
