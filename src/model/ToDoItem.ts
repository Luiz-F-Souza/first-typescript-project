import { deleteData } from "../customFunctions/deleteData"
import { postData } from "../customFunctions/postData"
import { upDateData } from "../customFunctions/updateData"

export interface ToDoItem {
  id: number,
  description: string,
  isCompleted: boolean,
}

export function createToDoItem(params: ToDoItem, toDoContainer: HTMLUListElement, firstLoading: boolean){

  const { id, description, isCompleted } = params

  if(!firstLoading) postData(params)

  const li: HTMLLIElement = document.createElement('li')
  li.classList.add('to_do_item_container')
  li.id = id.toString()

  const checkbox: HTMLInputElement = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('to_do_item_checkbox')
  checkbox.checked = isCompleted

  checkbox.addEventListener('change', () => {
    console.log(checkbox.checked)
    upDateData(id,{...params, isCompleted: checkbox.checked})
  })

  const descriptionContent: HTMLParagraphElement = document.createElement('p')
  descriptionContent.textContent = description
  descriptionContent.classList.add('to_do_item_description')

  const deleteBtn: HTMLButtonElement = document.createElement('button')
  deleteBtn.textContent = 'X'
  deleteBtn.classList.add('to_do_delete_btn')
  deleteBtn.addEventListener("click", () => {

    deleteData(id)
    li.remove()

  })

  li.appendChild(checkbox)
  li.appendChild(descriptionContent)
  li.appendChild(deleteBtn)

  toDoContainer.appendChild(li)

}

