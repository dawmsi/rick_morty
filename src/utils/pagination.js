export function createPages(arrr, pagesCount, currentPage) {
  if (pagesCount > 8) {
    if (currentPage > 4 && currentPage <= pagesCount) {
      for (let i = currentPage - 3; i <= currentPage + 3; i++) {
        arrr.push(i)
        if (i >= pagesCount) break
      }
    } else {
      for (let i = 1; i <= 8; i++) {
        arrr.push(i)
        if (i >= pagesCount) break
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      arrr.push(i)
    }
  }
}
