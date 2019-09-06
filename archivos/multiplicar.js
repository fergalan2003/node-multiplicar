//REQUIRES
const fs = require('fs');

let listar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El parametro ${limite} no es un numero`);
            return;
        }

        let tabla = "";
        for (var i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i} \n`;
        }

        if (tabla != '') {
            resolve(tabla);
        } else {
            reject('No se pudo generar la tabla');
        }

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero`);
            return;
        }

        let tabla = "";
        for (var i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i} \n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);

        });
    });
}

module.exports = {
    crearArchivo,
    listar
}