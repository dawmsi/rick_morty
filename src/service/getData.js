import axios from 'axios'
import { sortBy } from './sortBy/'

export const getData = (setList, setInfo, _params = '') => {
  const url = `https://rickandmortyapi.com/api/character/${_params}`
  axios
    .get(url)
    .then((res) => {
      setList(sortBy(res.data.results))
      setInfo(res.data.info)
    })
    .catch((e) => console.log(e))
}
