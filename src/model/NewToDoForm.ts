import { createToDoItem } from "./ToDoItem"


export function newToDoForm(toDoContainer: HTMLUListElement): HTMLFormElement{


  const newForm: HTMLFormElement = document.createElement('form')
  newForm.classList.add('new_to_do_form')
  
  const textInput: HTMLInputElement = document.createElement('input')
  textInput.type = 'text'
  textInput.placeholder = 'digite a descrição'
  textInput.classList.add('new_to_do_input')

  const submitBtn: HTMLButtonElement = document.createElement('button')
  submitBtn.type = 'submit'
  submitBtn.textContent = "cadastrar"
  submitBtn.classList.add('btn_new_to_do')

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    createToDoItem({
      id: Math.random() * 99999999,
      description: textInput.value,
      isCompleted: false
    }, 
    toDoContainer,
    false )

    textInput.value = ''
    textInput.focus()
  })


  newForm.appendChild(textInput)
  newForm.appendChild(submitBtn)

  return newForm

}