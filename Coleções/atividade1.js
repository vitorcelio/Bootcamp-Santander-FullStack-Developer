function getAdmins(usuarios) {
    const admins = [];
    for ([key, value] of usuarios) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();
usuarios.set('Vítor', 'Admin');
usuarios.set('Ilaysa', 'Admin');
usuarios.set('Célio', 'User');
usuarios.set('Oliveira', 'Admin');
usuarios.set('Silva', 'User');
usuarios.set('Vitória', 'User');

console.log(getAdmins(usuarios));