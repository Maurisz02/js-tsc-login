

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('username')?.addEventListener('change',(e) : void=>{
        let name = e.currentTarget as HTMLInputElement;
        let label = (document.getElementById('userCheck') as HTMLLabelElement);
        if(name.value.includes("&") || name.value.includes("=") || name.value.includes("_") || name.value.includes("'") || name.value.includes("+") || name.value.includes("-") || name.value.includes(",") || name.value.includes(">") || name.value.includes("<")){
            label.textContent = "Felhasználónév nem tartalmazhat bizonyos karaktereket"
            label.style.color = "Red";
            name.style.color = "Red";
        }else if(name.value.length < 6 || name.value.length > 30){
            label.textContent = "A nevednek minimum 6 karakternek kell lennie és maximum 30 karaktert tartalmazhat"
            label.style.color = "Red";
            name.style.color = "Red";
        }else{
            name.style.color = "White";
            label.textContent = "";
        }
    });



});