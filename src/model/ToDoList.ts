import { createToDoItem, ToDoItem } from "./ToDoItem"


export function createToDoList(data: ToDoItem[] | undefined): HTMLUListElement{

  const listContainer: HTMLUListElement = document.createElement('ul')

  const title: HTMLHeadingElement = document.createElement('h1')
  title.textContent = "Lista de atividades"
  title.classList.add('to_to_list_title')


  listContainer.classList.add('to_do_container')

  listContainer.appendChild(title)

  
  if(!data) return listContainer

  data.forEach((item: ToDoItem) => {

    const { id, description, isCompleted } = item

    createToDoItem({ id, description, isCompleted }, listContainer, true)
  })

  return listContainer

}