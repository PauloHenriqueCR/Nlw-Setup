const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso❌")
    return
  }

  alert("Adicionado com Sucesso✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
/*const data = {
  water: ["01-02", "03-05", "04-05"],
  journal: ["01-02", "06-05", "09-02", "04-02"],
  food: ["05-03", "04-04", "03-04", "05-04"],
}
*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
