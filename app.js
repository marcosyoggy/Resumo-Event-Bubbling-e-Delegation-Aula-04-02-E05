
// https://github.com/marcosyoggy/Resumo-Event-Bubbling-e-Delegation-Aula-04-02-E05 

// https://resumo-event-bubbling-e-delegation-aula-04-02-e05.netlify.app



//---------------BLOCK CONST-------------------------------------

const parentBody = document.querySelector(".parentBody")
const divOfExitButtons = document.querySelector(".divOfExitButtons")

const toggleBlockDisplay = event => {
    const clickedElement = event.target
    const datasetExitButtonValue = clickedElement.dataset.exitbutton
    const datasetAcessButtonValue = clickedElement.dataset.acessbutton
    const arrayExitButtons = Array.from(divOfExitButtons.children)
    const parentRef = document.querySelector(`[data-blockdiv="${datasetExitButtonValue}"]`)

    if (datasetExitButtonValue) {
        parentRef.style.display = 'none'
        return
    }

    if (datasetAcessButtonValue) {
        arrayExitButtons.forEach(item => {
            const datasetLiBlockValue = item.dataset.blockdiv
            const datasetAcessLastString = datasetAcessButtonValue.slice(-1)
            const liDatasetLastString = datasetLiBlockValue.slice(-1)

            if (item.style.display.includes("none")) {
                if (datasetAcessLastString === liDatasetLastString) {
                    item.style.display = 'block'
                    return
                }
            }
        })
    }
}


parentBody.addEventListener("click", toggleBlockDisplay)










