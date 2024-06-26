const basketCount3 = document.querySelector("#basket-count");
basketCount3.style.display = "None"

const changeButtonList = document.querySelectorAll(".change")
const formList = document.querySelectorAll(".p_object")
const popUpWindow = document.querySelector(".pop-up-window")
const add_product_button = document.querySelector(".add-button")


add_product_button.addEventListener("click", () => {
    add_product_button.previousElementSibling.style.display = "flex"
})

for(let count = 0; count < changeButtonList.length; count++){
    let changeButton = changeButtonList[count]
    changeButton.addEventListener(
        'click',
        function(){
            for(let count2 = 0; count2 < formList.length; count2++){
                let form = formList[count2]
                if (changeButton.id == form.getAttribute("id")){
                    let image = form. getElementsByClassName("p_image")[0]
                    popUpWindow.style.display = "flex"
                    if (changeButton.value != "image"){
                        let windowDiv = popUpWindow.getElementsByClassName("window_text_div")[0]
                        windowDiv.style.display = "flex"
                        let text = form.getElementsByClassName("p_" + changeButton.value)[0].textContent
                        let type = "text"
                        if (changeButton.value == "discount"){
                            text = text.split(" ")[1].replace("%", '')
                            type = "number"
                        } else if (changeButton.value == "price"){
                            text = text.split(" ")[0]
                            type = "number"
                        }
                        
                        let windowInput = windowDiv.getElementsByClassName("w_input")[0]
                        windowInput.name = changeButton.value
                        windowInput.value = text
                        windowInput.type = type
                    } else{
                        let windowDiv = popUpWindow.getElementsByClassName("window_image_div")[0]
                        windowDiv.style.display = "flex"
                        let windowImage = windowDiv.getElementsByClassName("w_image")[0]
                        windowImage.src = image.src
                    }
                    let apply_button = popUpWindow.getElementsByClassName("w_button")[0]
                    apply_button.value = changeButton.id

                }
            }
        }
    )
}

// Получаем елемент input всплывающего окна и добавляем функцию для события "onchange"
popUpWindow.getElementsByClassName("w_image_input")[0].addEventListener("change", function(event) {
    // Получаем елемент input
    let target = event.target;
    // Создаём объект класса FileReader
    let fileReader = new FileReader();
    // Добавляем прослушку события load
    fileReader.onload = function() {
        // Загружаем картинку в тег img
        popUpWindow.getElementsByClassName("w_image")[0].src = fileReader.result;
    }
    // Загружаем в fileReader изображение
    fileReader.readAsDataURL(target.files[0]);
})