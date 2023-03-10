export const SortBy = (array, by = 'name') => {
  array.sort(function (a, b) {
    if (a[by] < b[by]) {
      return -1
    }
    if (a[by] > b[by]) {
      return 1
    }
    return 0
  })
}
