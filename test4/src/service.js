import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const LAUNCHES = '/launches'
const ROCKETS = '/rockets'

export const getAllLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}`)
export const getRocketById = id => axios.get(`${BASE_URL}${ROCKETS}/${id}`)