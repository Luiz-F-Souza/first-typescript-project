import axios from 'axios'

export async function upDateData(id: number, valueToUpDate: object){

  const response = await axios.put(`http://localhost:3000/toDoItems/${id}`, valueToUpDate)

  if(!response) throw new Error('não foi possível atualizar o valor no banco de dados')
}