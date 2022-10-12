
let jelszo : string = "";
let isU : Boolean = false;
let isE : Boolean = false;
let isP : Boolean = false;
let isRp : Boolean = false;

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('username')?.addEventListener('change',(e) : void=>{
        let name = e.currentTarget as HTMLInputElement;
        let label = (document.getElementById('userCheck') as HTMLLabelElement);
        if(name.value.includes("&") || name.value.includes("=") || name.value.includes("_") || name.value.includes("'") || name.value.includes("+") || name.value.includes("-") || name.value.includes(",") || name.value.includes(">") || name.value.includes("<")){
            label.textContent = "Felhasználónév nem tartalmazhat bizonyos karaktereket"
            label.className = "bad";
        }else if(name.value.length < 6 || name.value.length > 30){
            label.textContent = "A nevednek minimum 6 karakternek kell lennie és maximum 30 karaktert tartalmazhat"
            label.className = "bad";
        }else{
            name.style.color = "White";
            label.textContent = "";
            isU = true;
        }
    });

    document.getElementById('email')?.addEventListener('change', (e) : void =>{
        let email = e.currentTarget as HTMLInputElement;
        let label = (document.getElementById('emailCheck') as HTMLLabelElement);
        const valid = (emailC : string) => {
            return String(emailC)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };

          if(!valid(email.value)){
            label.textContent = "Helytelen e-mail formátum";
            label.className = "bad";
            
          }else{
            email.style.color = "White";
            label.textContent = "";
            isE = true;
          }
    });

    document.getElementById('passwd')?.addEventListener('change', (e) : void =>{
        let passwd = e.currentTarget as HTMLInputElement;
        let label = (document.getElementById('passwdCheck') as HTMLLabelElement);
        var passwdC=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(!passwd.value.match(passwdC)){
            label.textContent = "A jelszónak 8-10 karakter, tartalmaznia kell kis és nagy betűt, számot és speciális karaktert"
            label.className = "bad";
        }else{
            label.textContent = "";
            jelszo = passwd.value;
            isP = true;
        }
    });

    document.getElementById('rePasswd')?.addEventListener('change',(e) : void =>{
        let rePasswd = e.currentTarget as HTMLInputElement;
        let label = (document.getElementById('rePasswdCheck') as HTMLLabelElement);

        if(rePasswd.value != jelszo){
            label.textContent = "A két jelszó nem egyezik"
            label.className = "bad";
        }else{
            label.textContent = "";
            isRp = true;
        }
    });

    document.getElementById('btn')?.addEventListener('click',(e)=>{
        if(isU && isE && isP && isRp){
            alert('Sikeres Regisztráció');
        }else{
            alert('A regisztráció sikertelen');
        }
    });

});