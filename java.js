let comida= ["pastas","arepa","sanduche","milo"];

let numeros=[1,2,3,4,5,6,7,8,9];

let ciudades=["Barranquilla","Medellin","cali","Tolima"];


let  detodito=[24,"pipe",3.14,"camilo"];


//operaciones de arreglo numeros

let suma = numeros.reduce((acumulador,actual) => acumulador + actual,0);
console.log(suma);


let numerosMayores =numeros.filter(numeros => numeros > 4);
console.log(numerosMayores)

let multiplicados = numeros.map(numeros => numeros*3);
console.log(multiplicados)


numeros.forEach((Element) =>console.log(Element));


// operaciones de arreglo comida

let listacomida= comida.reduce((acumulador1, itme) =>acumulador1 + ","+item);
console.log(listacomida);

numerocomida =comida.filter(item => item.length >5);
console.log(numerocomida);


let comidaMayuscula= comida.map(item =>item.toUpperCase());
console.log(comidaMayuscula);

comida.forEach(item =>{
    console.log(item);
});


//operaciones arreglo ciudades

let listaciudades= ciudades.reduce((acumulador,ciudad) => acumulador2 +","+ ciudad);
console.log(listaciudades);

let ciudadnum=ciudades.filter(ciudad => ciudad.length >6);
console.log(ciudadnum);

let ciudadminuscula= ciudades.map(ciudad =>ciudad.toLocaleLowerCase());
console.log(ciudadminuscula);

ciudades.forEach(ciudad =>{
    console.log(ciudad);
});


//operaciones arreglo detodito


let sumaNumeros =detodito.reduce((acumulador4, item) =>{
    if (typeof item ==='number'){
        return acumulador4 + item ;
    }
    return acumulador4;

},0);



let soloNumero = detodito.filter(item =>typeof item ==='number');
console.log(soloNumero);


let transformado =detodito. map(item => item.toString());
console.log(transformado);


detodito.forEach(item => {
    if(typeof item ==='numbre'){
        console.log(' Nuumero: ${item}');

    } else if (typeof item ==='string'){
        console.log('Cadena:${item}');
    }
});


//funciones flecha

const bienvenida=()=>"Un placer conocerlo";
console.log(bienvenida());


const sumaa = (a,b) => a+b ;
console.log(sumaa(6,6));


const promedio =(a,b,c) =>(a+b+c)/ 3;
console.log(promedio(3,5,6));

const cuadrado = x=> x*x;
console.log(cuadrado(4));

const MayorEdad =(edad,pais) =>{
    if(pais === 'Alemania'){
        return edad >= 21;
    }
    return edad >= 18;
};

console.log(MayorEdad(20,"Alemania"));
console.log(aayorMayor(18,"Mexico"))
































































































ciudq