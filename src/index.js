"use strict";
let jelszo = "";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        let name = e.currentTarget;
        let label = document.getElementById('userCheck');
        if (name.value.includes("&") || name.value.includes("=") || name.value.includes("_") || name.value.includes("'") || name.value.includes("+") || name.value.includes("-") || name.value.includes(",") || name.value.includes(">") || name.value.includes("<")) {
            label.textContent = "Felhasználónév nem tartalmazhat bizonyos karaktereket";
            label.style.color = "Red";
            name.style.color = "Red";
        }
        else if (name.value.length < 6 || name.value.length > 30) {
            label.textContent = "A nevednek minimum 6 karakternek kell lennie és maximum 30 karaktert tartalmazhat";
            label.style.color = "Red";
            name.style.color = "Red";
        }
        else {
            name.style.color = "White";
            label.textContent = "";
        }
    });
    (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', (e) => {
        let email = e.currentTarget;
        let label = document.getElementById('emailCheck');
        const valid = (emailC) => {
            return String(emailC)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if (!valid(email.value)) {
            label.textContent = "Helytelen e-mail formátum";
            label.style.color = "Red";
            email.style.color = "Red";
        }
        else {
            email.style.color = "White";
            label.textContent = "";
        }
    });
    (_c = document.getElementById('passwd')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', (e) => {
        let passwd = e.currentTarget;
        let label = document.getElementById('passwdCheck');
        var passwdC = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!passwd.value.match(passwdC)) {
            label.textContent = "A jelszónak 8-10 karakter, tartalmaznia kell kis és nagy betűt, számot és speciális karaktert";
            label.style.color = "Red";
        }
        else {
            label.textContent = "";
            jelszo = passwd.value;
        }
    });
    (_d = document.getElementById('rePasswd')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (e) => {
        let rePasswd = e.currentTarget;
        let label = document.getElementById('rePasswdCheck');
        if (rePasswd.value != jelszo) {
            label.textContent = "A két jelszó nem egyezik";
            label.style.color = "Red";
        }
        else {
            label.textContent = "";
        }
    });
});
