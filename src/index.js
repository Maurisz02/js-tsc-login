"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        let name = e.currentTarget;
        console.log(name.value);
    });
});
