import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID 5a179fa5c59b58b2346cbffd20a50519e302e0a78dec9f2e38abc3d3c1e391e5"
  }
})
