class Building{
    constructor(street,number,zipcode){
        this.street = street;
        this.number = number;
        this.zipcode = zipcode;
        this.floors = [];
    }
   
    agregarPlantasYPuertas(numFloors,numDoors){
        
        
        for(let floorNumber = 0 ; floorNumber < numFloors ; floorNumber++ ){
            this.floors[floorNumber]=[];
            for(let doorNumber = 0 ; doorNumber < numDoors ; doorNumber++){
                this.floors[floorNumber][doorNumber]='NONE. If you wanna buy, this is your chance';
            }
        }
    }
    
    setNumber(number){
        this.number = number;
    } 

    setStreet(street){
        this.street = street ;
    }

    setZipcode(zipcode){
        this.zipcode = zipcode;
    } 

    printStreet(buildingName){
        document.write(`Building: ${buildingName}, Street: ${this.street}<br>`);
    } 

    setNumber(){
        document.write(`El edificio ${this.nombre} esta situado en la calle ${this.calle} numero ${this.numero} <br>`);
    }

    // Devuelve el código postal del edificio.
    imprimeCodigoPostal(nombreEdificio){
        document.write(`El codigo postal del edificio ${nombreEdificio} es ${this.codigo}  <br>`);
    } 

    // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
    agregarPropietario(nombre,planta,puerta){
        this.planta[planta][puerta]= nombre;
        document.write(`${nombre} es ahora el dueño de la puerta ${puerta} de la planta ${planta}  <br> `);
    } 

    // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
    imprimePlantas(){
        for(let numPlanta = 0  ; numPlanta < this.planta.length;numPlanta++){
            for(let numPuerta = 0 ; numPuerta < this.planta[numPlanta].length ; numPuerta++){
                document.write(` el dueño del piso numero ${numPuerta} de la planta ${numPlanta} es: ${this.planta[numPlanta][numPuerta]}<br>`);
            }
        }
    }
    mensaje(){
        document.write(`Construiodo nuevo edificio en calle: ${this.calle} Nº:${this.numero} CP:${this.codigo} <br>`);
    }
    ubicacion(nombreEdificio){
        document.write(`El Edificio${nombreEdificio} esta situado en ${this.calle} numero ${this.numero} <br>`);
    }
}




edificioA = new Building("Garcia Prieto",58,15706);
edificioA.mensaje();
edificioA.imprimeCodigoPostal("A");
edificioA.imprimeCalle("A");
edificioA.ubicacion("A");

edificioA.agregarPlantasYPuertas(3,2);

edificioA.agregarPropietario("Jose Antonio Lopez",0,0);
edificioA.agregarPropietario("Luisa Martinez",0,1);
edificioA.agregarPropietario("Marta Castellón",0,2);
edificioA.agregarPropietario("Antonio Pereira",1,1);
edificioA.agregarPropietario("Pedro Meijide",2,1);
edificioA.imprimePlantas();
edificioA.agregarPropietario("Pedro Meijide",2,1);

edificioA.imprimePlantas();