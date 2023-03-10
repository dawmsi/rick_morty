import axios from 'axios'
import { sortBy } from './sortBy/'

const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const getData = (setList, setInfo, _params = '') => {
  const url = `${baseUrl}${_params}`
  axios
    .get(url)
    .then((res) => {
      setList(sortBy(res.data.results))
      setInfo(res.data.info)
    })
    .catch((e) => {
      if ((e.status = '404')) {
        setInfo({ count: 0, pages: 1 })
        setList([])
      }
    })
}

export const fetchItem = (setItem, id) => {
  const url = `${baseUrl}${id}`
  axios
    .get(url)
    .then((res) => {
      setItem(res.data)
    })
    .catch((e) => console.log(e))
}
