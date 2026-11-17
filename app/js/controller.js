import {baseVidas} from "./acessos.js";

document.getElementById("loginForm").addEventListener("submit", (event) => {

    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const usuario = checkAccess(email, senha);

    if (usuario) {
        console.log("Login realizado!");
        console.log(usuario);
    }

});

function checkAccess(email,senha){

    var ifEmailExists = false;
    var acessLiberated = false;

    for(var i = 0; i < baseVidas.length;i++){
        if(baseVidas[i]["E-mail"] == email){
            ifEmailExists = true;
            if(baseVidas[i].Senha == senha){
                acessLiberated =  true;
                return baseVidas[i];
            }else{
                alert("Senha incorreta. Acesso negado.");
                break;
            }
        };
    }
        if (!ifEmailExists) {
        alert("E-mail não encontrado."); 
        }

         return acessLiberated;
}

