import test from 'ava';
import numFormatter from '../index'

test('should convert single digits', t => {
  const result = numFormatter(1);
	t.true(result === '1');
});
