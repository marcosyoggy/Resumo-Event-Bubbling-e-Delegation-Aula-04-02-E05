//---------------BLOCK CONST-------------------------------------

const parentBody = document.querySelector(".parentBody")
const blockAcessButtons = document.querySelector(".blockAcessButtons")
const divOfExitButtons = document.querySelector(".divOfExitButtons")

//---------------BLOCK FUNCTIONS-------------------------------------

const hiddenBlocks = event => {
    const clickedElement = event.target
    const datasetExitButtonValue = clickedElement.dataset.exitbutton
    const parentRef = document.querySelector(`[data-blockdiv="${datasetExitButtonValue}"]`)

    if (datasetExitButtonValue) {
        parentRef.style.display = 'none'
        return
    }
}

const showBlocks = event => {
    const clickedElement = event.target
    const datasetAcessButtonValue = clickedElement.dataset.acessbutton
    const arrayExitButtons = Array.from(divOfExitButtons.children)

    if (datasetAcessButtonValue) {
        arrayExitButtons.forEach(item => {
            const datasetLiBlockValue = item.dataset.blockdiv
            const datasetAcessLastString = datasetAcessButtonValue.slice(-1)
            const liDatasetLastString = datasetLiBlockValue.slice(-1)
            const arrayLiClasslist = Array.from(item.classList)

            if (item.style.display.includes("none")) {
                if (datasetAcessLastString === liDatasetLastString) {
                    item.style.display = 'block'                
                    return
                }
            }
        })
    }
}

//---------------BLOCK ACTIONS---------------------------------

parentBody.addEventListener("click", hiddenBlocks)

blockAcessButtons.addEventListener("click", showBlocks)


















