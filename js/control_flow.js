let userRole = 'admin';
let acesssLevel;

let isAuthenticated = true;

console.log("Entrou");
if(userRole === 'admin'){
    accessLevel = 'full access';
}else if (userRole === 'manager'){
    acessLevel = 'moderate access';
}else{
    accessLevel = 'not allowed';
}

console.log("Access level:", accessLevel);

let authenticated_status = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("User status:", authenticated_status);