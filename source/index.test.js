import test from 'tape';
import { flying } from './index';


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
