

QUnit.test( "hello Wenamity", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
QUnit.test( "fbq('1')", function( assert ) {
  assert.ok( fbq(1) == "1", "1"+ ch +"1" );
});
QUnit.test( "fbq('2')", function( assert ) {
  assert.ok( fbq('2') == "2", "2"+ ch +"2" );
});
QUnit.test( "fbq('3')", function( assert ) {
  assert.ok( fbq('3') == "FooFoo", "FooFoo (divisible by 3, contains 3)" );
});
QUnit.test( "fbq('4')", function( assert ) {
  assert.ok( fbq('4') == "4", "4 "+ ch +"4"  );
});
QUnit.test( "fbq('5')", function( assert ) {
  assert.ok( fbq('5') == "BarBar", "BarBar (divisible by 5, contains 5)" );
});
QUnit.test( "fbq('6')", function( assert ) {
  assert.ok( fbq('6') == "Foo", "Foo (divisible by 3)" );
});
QUnit.test( "fbq('7')", function( assert ) {
  assert.ok( fbq('7') == "QixQix", "QixQix (divisible by 7, contains 7)" );
});
QUnit.test( "fbq('8')", function( assert ) {
  assert.ok( fbq('8') == "8", "8 "+ ch +"8"  );
});
QUnit.test( "fbq('9')", function( assert ) {
  assert.ok( fbq('9') == "Foo", "Foo" );
});
QUnit.test( "fbq('10')", function( assert ) {
  assert.ok( fbq('10') == "Bar*", "Bar*" );
});
QUnit.test( "fbq('13')", function( assert ) {
  assert.ok( fbq('13') == "Foo", "Foo" );
});
QUnit.test( "fbq('15')", function( assert ) {
  assert.ok( fbq('15') == "FooBarBar", "FooBarBar (divisible by 3, divisible by 5, contains 5)" );
});
QUnit.test( "fbq('21')", function( assert ) {
  assert.ok( fbq('21') == "FooQix", "FooQix" );
});
QUnit.test( "fbq('33')", function( assert ) {
  assert.ok( fbq('33') == "FooFooFoo", "FooFooFoo (divisible by 3, contains two 3)" );
});
QUnit.test( "fbq('51')", function( assert ) {
  assert.ok( fbq('51') == "FooBar", "FooBar" );
});
QUnit.test( "fbq('53')", function( assert ) {
  assert.ok( fbq('53') == "BarFoo", "BarFoo" );
});

QUnit.test( "fbq('101')", function( assert ) {
  assert.ok( fbq('101') == "1*1", "1*1" );
});
QUnit.test( "fbq('303')", function( assert ) {
  assert.ok( fbq('303') == "FooFoo*Foo", "FooFoo*Foo" );
});
QUnit.test( "fbq('105')", function( assert ) {
  assert.ok( fbq('105') == "FooBarQix*Bar", "FooBarQix*Bar" );
});
QUnit.test( "fbq('10101')", function( assert ) {
  assert.ok( fbq('10101') == "FooQix**", "FooQix**" );
});




