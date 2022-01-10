import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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

const update = (id, newData) => {
  return axios
    .put(`${baseUrl}/${id}`, newData)
    .then(response => response.data)
}

const remove = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }


