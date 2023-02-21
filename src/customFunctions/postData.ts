import axios from 'axios'
import { ToDoItem } from '../model/ToDoItem';

export async function postData(toDo: ToDoItem){

 const response = await axios.post('http://localhost:3000/toDoItems', toDo)

 if(!response) throw new Error('O banco de dados não foi atualizado')

}