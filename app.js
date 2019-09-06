//FILE
const { crearArchivo, listar } = require('./archivos/multiplicar');

const argv = require('./config/yargs').argv;

console.log(argv);


let comando = argv._[0]; //Recoge el primer dato de los comandos de YARG

switch (comando) {
    case 'listar':
        console.log('Listando');

        listar(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));

        break;
    case 'crear':
        console.log('Guardando');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido. Escriba --help para ver la lista de comandos.');
        break;
}