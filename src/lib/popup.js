import axios from 'axios'

export function getPopup() {
  /**
   * Step 2: Instead of directly returning the popup definition fetch it from http://localhost:8001/popup
   */
  const apiUrl = 'http://localhost:8001'
  return axios
    .get(apiUrl + '/popup')
    .then(res => {
      return res.data
    })
    .catch(res => {
      return res
    })
}

export function updatePopup(message) {
  const apiUrl = 'http://localhost:8001'
  return axios
    .post(apiUrl + '/popup', { message: message })
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(res => {
      console.log(res)
      return res
    })
}
