export function getPaginationState(items, requestedPage, pageSize) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array')
  }

  if (!Number.isInteger(pageSize) || pageSize <= 0) {
    throw new RangeError('pageSize must be a positive integer')
  }

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize))
  const parsedPage = Number(requestedPage)
  const validPage = Number.isInteger(parsedPage) ? parsedPage : 1
  const currentPage = Math.min(Math.max(validPage, 1), totalPages)
  const startIndex = (currentPage - 1) * pageSize

  return {
    items: items.slice(startIndex, startIndex + pageSize),
    currentPage,
    totalPages,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
  }
}
