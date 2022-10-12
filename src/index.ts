

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('username')?.addEventListener('change',(e) : void=>{
        let name = e.currentTarget as HTMLInputElement;
        
        console.log(name.value);
    });

});