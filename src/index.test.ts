import test from 'ava';

import { add } from './index';

test('add returns correct sum', (t) => {
  return t.is(add(1, 2), 3);
});
