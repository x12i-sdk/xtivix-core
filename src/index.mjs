import assert from 'node:assert/strict';
import { maskText, redactDeep } from '@x12i/xtivix-core';

const policy = { version: 1, mask: [{ pattern: 'customer-[0-9]+', flags: 'g', replacement: '[customer]' }] };
const masked = maskText('Review customer-123 and customer-456', policy);
assert.equal(masked.text, 'Review [customer] and [customer]');
assert.equal(masked.changed, true);
const record = redactDeep({ raw: { message: 'For customer-123' } }, policy);
assert.equal(record.raw.message, 'For [customer]');
console.log(record);
// A real host must define its own complete policy; this fixture masks only the shown pattern.
