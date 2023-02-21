import './css/style.css'

import { createToDoList } from './model/ToDoList'
import { newToDoForm } from './model/NewToDoForm'
import { getData } from './customFunctions/getData'




async function main(){

  const data = await getData()

  const AppElement = document.getElementById("app") as HTMLDivElement
  const listContainer = createToDoList(data)

  AppElement.appendChild(newToDoForm(listContainer))
  AppElement.appendChild(listContainer)
}

main()





