
var ch =' \u21D2 ';
QUnit.test( "hello Wenamity", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "fbq('1')", function( assert ) {
  assert.ok( fbq(1) == "1", "1  "+ ch +"1" );
});



