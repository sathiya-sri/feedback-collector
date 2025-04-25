import axios from 'axios'

const api = axios.create({
  baseURL: '/.netlify/functions'
})

export const submitFeedback = (data) => api.post('/submit-feedback', data)
export const getFeedbacks = () => api.get('/get-feedbacks')

export default api