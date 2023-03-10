import axios from 'axios'

const params = '1,2,3,4,5,6,7,8'

const url = `https://rickandmortyapi.com/api/character/${params}`

export const getData = (fc) => {
  axios
    .get(url)
    .then((res) => {
      const data = res.data
      fc(data)
    })
    .catch((e) => console.log(e))
}
