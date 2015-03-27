var result = {
    "1": {
        "name": "Marcos Matarrita (YODA)",
        "img": "Fotos/MarcosMatarrita.jpg",
        "selected": false
    },
    "2": {
        "name": "Saul Rojas (Pinguino)",
        "img": "Fotos/Pinguino.jpg",
        "selected": false
    },
    "3": {
        "name": "Roberth Parra",
        "img": "Fotos/RoberthParra.jpg",
        "selected": false
    },
    "4": {
        "name": "Xavi A",
        "img": "Fotos/XaviA.jpg",
        "selected": false
    },
    "5": {
        "name": "Alex Villegas",
        "img": "Fotos/AlexVillegas.png",
        "selected": false
    },
    "6": {
        "name": "Geiner Espinoza",
        "img": "Fotos/GeinerEspinoza.jpg",
        "selected": false
    },
    "7": {
        "name": "J Fabrizio",
        "img": "Fotos/JFabrizio.jpg",
        "selected": false
    },
    "8": {
        "name": "Jose Hernandez",
        "img": "Fotos/JoseHernandez.jpg",
        "selected": false
    },
    "9": {
        "name": "Keymer Vi Ro",
        "img": "Fotos/KeymerViRo.jpg",
        "selected": false
    }
};

var challenges = {
    "1": {
        "reto": "area circulo",
        "descripcion": "Sacar area de un circulo",
        "selected": false
    },
    "2": {
        "reto": "calculadora",
        "descripcion": "Realizar calculadora con las cuatro funciones basicas",
        "selected": false
    },
    "3": {
        "reto": "edad",
        "descripcion": "Realizar el calculo de la edad",
        "selected": false
    }
};

function findAllPerson(){
    return result;
}

function deletePersonById(id){
    return delete result[id];
}

function unselectPersonById(id){
    result[id].selected = false;
}

function selectRamdonPerson(i){
    i = typeof i === 'undefined' ? 1 : i;
    
    if(i<100){
        var arrayLength = Object.keys(findAllPerson()).length;
        var randomIndex = Math.floor(Math.random() * arrayLength + 1);
        var randomElement = findAllPerson()[randomIndex];
    
        if(typeof randomElement != 'undefined' && !randomElement.selected) {
            return randomElement;
        }else{
            return selectRamdonPerson(i+1);
        }
    } else {
        alert('No hay competidores disponibles!');
    }
}

function deleteChallengeById(id){
    return delete challenges[id];
}

// function unselectPersonById(id){
//     result[id].selected = false;
// }

function findAllChallenge(){
    return challenges;
}

function showPersonsAndSelect(selector){
    console.log(selector);
    var length = Object.keys(findAllPerson()).length;
	$.each(findAllPerson(), function(i, obj) {
    	setTimeout(function(){
   			$(selector + " img").fadeOut(400, function(){
   				
   				var personSelected = selectRamdonPerson();
   				console.log(i+':'+length);
   				if(i == length){
   					personSelected.selected = true;
   				}
   				
   				$(this).prop('src', personSelected.img);
   				$(selector).find('.name').text(personSelected.name);
   				$(this).fadeIn(400);
   			});
   		}, 800 * i);		
	});
}

function selectRamdonChallenge(i){
    i = typeof i === 'undefined' ? 1 : i;
    
    if(i<100){
        var arrayLength = Object.keys(findAllChallenge()).length;
        var randomIndex = Math.floor(Math.random() * arrayLength + 1);
        var randomElement = findAllChallenge()[randomIndex];
    
        if(typeof randomElement != 'undefined' && !randomElement.selected){
            randomElement.selected = true;
            return randomElement;
        }else{
            return selectRamdonChallenge(i+1);
        }
    } else {
        alert('No hay Retos disponibles!');
    }
}