import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = entry => {
  return axios
    .post(baseUrl, entry)
    .then(response => response.data)
}

const update = (id, updated) => {
  return axios
    .put(`${baseUrl}/${id}`, updated)
    .then(response => response.data)
}

const remove = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }


