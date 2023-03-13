export const localKey = 'user'

export const fetchUser = () => {
  return localStorage.getItem(localKey) !== 'undefined'
    ? JSON.parse(localStorage.getItem(localKey))
    : localStorage.removeItem(localKey)
}

export const saveUserlocaly = (object) => {
  localStorage.setItem(localKey, JSON.stringify(object))
  fetchUser()
}
