import axios from "axios";
import { ToDoItem } from "../model/ToDoItem";

export async function getData() {
  
  const data: ToDoItem[] | [] = (await axios.get('http://localhost:3000/toDoItems')).data

  return data


}