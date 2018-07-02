

QUnit.test( "hello Wenamity", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "fbq('1')", function( assert ) {
  assert.ok( fbq(1) == "1", "1  "+ ch +"1" );
});

QUnit.test( "fbq('2')", function( assert ) {
  assert.ok( fbq('2') == "2", "2  "+ ch +"2" );
});

QUnit.test( "fbq('3')", function( assert ) {
  assert.ok( fbq('3') == "FooFoo", "FooFoo (divisible by 3, contains 3)" );
});

QUnit.test( "fbq('32')", function( assert ) {
  assert.ok( fbq('32') == "Foo", "Foo (contains 3)" );
});
QUnit.test( "fbq('33')", function( assert ) {
  assert.ok( fbq('33') == "FooFooFoo", "FooFooFoo (divisible by 3, contains two 3)" );
});

QUnit.test( "fbq('100')", function( assert ) {
  assert.ok( fbq('100') == "Bar**", "1** each 0 must be replace par char *" );
});
QUnit.test( "fbq('101')", function( assert ) {
  assert.ok( fbq('101') == "1*1", "1*1 each 0 must be replace par char *" );
});





