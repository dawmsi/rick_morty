export function createPages(arrr, pagesCount, currentPage) {
  if (pagesCount > 10) {
    if (currentPage > 5 && currentPage <= pagesCount) {
      for (let i = currentPage - 5; i <= currentPage + 5; i++) {
        arrr.push(i)
        if (i >= pagesCount) break
      }
    } else {
      for (let i = 1; i <= 10; i++) {
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
