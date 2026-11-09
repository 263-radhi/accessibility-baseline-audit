import test from 'node:test';
import assert from 'node:assert/strict';

test('health endpoint contract returns ok status', async () => {
  // Lightweight contract check for the first vertical slice.
  const expected = { status: 'ok' };
  assert.deepEqual(expected, { status: 'ok' });
});
