export const getPageFromParams = (params) => {
  const string = params?.get('page')
  return Number(string) || 1
}
