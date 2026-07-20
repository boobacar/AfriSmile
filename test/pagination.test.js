import test from 'node:test'
import assert from 'node:assert/strict'

import { getPaginationState } from '../src/utils/pagination.js'

test('returns the requested page slice and navigation state', () => {
  const items = Array.from({ length: 23 }, (_, index) => `article-${index + 1}`)

  const result = getPaginationState(items, 2, 10)

  assert.deepEqual(result.items, items.slice(10, 20))
  assert.equal(result.currentPage, 2)
  assert.equal(result.totalPages, 3)
  assert.equal(result.hasPreviousPage, true)
  assert.equal(result.hasNextPage, true)
})

test('clamps invalid or out-of-range pages', () => {
  const items = Array.from({ length: 12 }, (_, index) => index)

  assert.equal(getPaginationState(items, 'invalide', 10).currentPage, 1)
  assert.equal(getPaginationState(items, -4, 10).currentPage, 1)
  assert.equal(getPaginationState(items, 99, 10).currentPage, 2)
})

test('returns a stable empty state when there are no items', () => {
  const result = getPaginationState([], 4, 10)

  assert.deepEqual(result.items, [])
  assert.equal(result.currentPage, 1)
  assert.equal(result.totalPages, 1)
  assert.equal(result.hasPreviousPage, false)
  assert.equal(result.hasNextPage, false)
})
