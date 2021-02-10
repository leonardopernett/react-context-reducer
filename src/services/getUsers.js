import axios from 'axios'

export const getAllUsers = async ()=>{
   const  {data} = await axios.get('https://reqres.in/api/users')
   return  data
}

export const getUserOne = async (id)=>{
   const  {data} = await axios.get('https://reqres.in/api/users/'+id)
   return  data
}
