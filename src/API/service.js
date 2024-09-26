import axios from 'axios'

// const BASE_URL = ''

export const getAPI = async (url , queryParams) => {
   try {
      const data = await axios.get(BASE_URL+url, {
         params:{
            ...queryParams
         },
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2UxYTE2NDM4ZGNhODlhNTQ2YjQzYTlmN2ZkZDkwMiIsInN1YiI6IjY2NzQwYmY1MTY5MDkxZmI5MmEzYzYyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NGKgqkibrwviOK_6NimaPYDwdHXiB4bHYXy58IsckqI',

         }
      })
      return data

   } catch (error) {
      console.log(error)
   }
}

export const postAPI = async (url, payload) => {
   try {
      const data = await axios.post(BASE_URL+url,payload, {
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2UxYTE2NDM4ZGNhODlhNTQ2YjQzYTlmN2ZkZDkwMiIsInN1YiI6IjY2NzQwYmY1MTY5MDkxZmI5MmEzYzYyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NGKgqkibrwviOK_6NimaPYDwdHXiB4bHYXy58IsckqI',
         },
         
      })
      return data
   } catch (error) {
      console.log(error)
   }
}