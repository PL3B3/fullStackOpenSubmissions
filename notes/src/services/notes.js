import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = note => {
  return axios
    .post(baseUrl, note)
    .then(response => response.data)
}

const update = (id, change) => {
  return axios
    .patch(`${baseUrl}/${id}`, change)
    .then(response => response.data)
}

const remove = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }


