import axios from 'axios'
import { sortBy } from './sortBy/'

const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const getData = (setList, setInfo, setLoading, _params = '') => {
  const url = `${baseUrl}${_params}`

  setLoading(true)

  axios
    .get(url)
    .then((res) => {
      setList(sortBy(res.data.results))
      setInfo(res.data.info)
      setLoading(false)
    })
    .catch((e) => {
      if ((e.status = '404')) {
        setInfo({ count: 0, pages: 1 })
        setList([])
        setLoading(false)
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
