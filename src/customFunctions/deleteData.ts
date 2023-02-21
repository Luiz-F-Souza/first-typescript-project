import axios from 'axios'

export async function deleteData(id: number){

  const response = axios.delete(`http://localhost:3000/toDoItems/${id}`)

  if(!response) throw new Error('Não foi possível deletar o item da base de dados')
  

}