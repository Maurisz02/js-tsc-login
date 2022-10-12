"use strict";
let jelszo = "";
let isU = false;
let isE = false;
let isP = false;
let isRp = false;
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e;
    (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        let name = e.currentTarget;
        let label = document.getElementById('userCheck');
        if (name.value.includes("&") || name.value.includes("=") || name.value.includes("_") || name.value.includes("'") || name.value.includes("+") || name.value.includes("-") || name.value.includes(",") || name.value.includes(">") || name.value.includes("<")) {
            label.textContent = "Felhasználónév nem tartalmazhat bizonyos karaktereket";
            label.className = "bad";
        }
        else if (name.value.length < 6 || name.value.length > 30) {
            label.textContent = "A nevednek minimum 6 karakternek kell lennie és maximum 30 karaktert tartalmazhat";
            label.className = "bad";
        }
        else {
            name.style.color = "White";
            label.textContent = "";
            isU = true;
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
            label.className = "bad";
        }
        else {
            email.style.color = "White";
            label.textContent = "";
            isE = true;
        }
    });
    (_c = document.getElementById('passwd')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', (e) => {
        let passwd = e.currentTarget;
        let label = document.getElementById('passwdCheck');
        var passwdC = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!passwd.value.match(passwdC)) {
            label.textContent = "A jelszónak 8-10 karakter, tartalmaznia kell kis és nagy betűt, számot és speciális karaktert";
            label.className = "bad";
        }
        else {
            label.textContent = "";
            jelszo = passwd.value;
            isP = true;
        }
    });
    (_d = document.getElementById('rePasswd')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (e) => {
        let rePasswd = e.currentTarget;
        let label = document.getElementById('rePasswdCheck');
        if (rePasswd.value != jelszo) {
            label.textContent = "A két jelszó nem egyezik";
            label.className = "bad";
        }
        else {
            label.textContent = "";
            isRp = true;
        }
    });
    (_e = document.getElementById('btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => {
        if (isU && isE && isP && isRp) {
            alert('Sikeres Regisztráció');
        }
        else {
            alert('A regisztráció sikertelen');
        }
    });
});
