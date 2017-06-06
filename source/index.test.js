import test from 'tape';
import { flying, createDuck } from './index';


test('flying().fly()', assert => {
  const msg = 'should set isFlying() to true';
  const o = flying({});

  const actual = o.fly().isFlying();
  const expected = true;
  assert.same(actual, expected, msg);
  assert.end();
});
test('flying().land()', assert => {
  const msg = 'should set isFlying() to false';
  const o = flying({}).fly();
  assert.same(o.isFlying(), true, 'starts out flying');

  const actual = o.land().isFlying();
  const expected = false;
  assert.same(actual, expected, msg);
  assert.end();
});
test('flying() mixin', assert => {
  const msg = 'should mixin to exisiting object';
  const startingObject = { a: 'a'};

  const actual = flying(startingObject).a;
  const expected = 'a';

  assert.same(actual, expected, msg);
  assert.end();
});
test('createDuck()', assert => {
  const msg = 'should have FLYING and quacking';
  const quack = 'QUACK!';
  const duck = createDuck(quack);

  const actual = duck.fly().quack();
  const expected = quack;

  assert.same(actual, expected, msg);
  assert.end();
});
