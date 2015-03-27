var result = {
    "1": {
        "id": "1",
        "name": "Marcos Matarrita (YODA)",
        "img": "Fotos/MarcosMatarrita.jpg",
        "selected": false
    },
    "2": {
        "id": "2",
        "name": "Saul Rojas (Pinguino)",
        "img": "Fotos/Pinguino.jpg",
        "selected": false
    },
    "3": {
        "id": "3",
        "name": "Roberth Parra",
        "img": "Fotos/RoberthParra.jpg",
        "selected": false
    },
    "4": {
        "id": "4",
        "name": "Xavi A",
        "img": "Fotos/XaviA.jpg",
        "selected": false
    },
    "5": {
        "id": "5",
        "name": "Alex Villegas",
        "img": "Fotos/AlexVillegas.png",
        "selected": false
    },
    "6": {
        "id": "6",
        "name": "Geiner Espinoza",
        "img": "Fotos/GeinerEspinoza.jpg",
        "selected": false
    },
    "7": {
        "id": "7",
        "name": "J Fabrizio",
        "img": "Fotos/JFabrizio.jpg",
        "selected": false
    },
    "8": {
        "id": "8",
        "name": "Jose Hernandez",
        "img": "Fotos/JoseHernandez.jpg",
        "selected": false
    },
    "9": {
        "id": "9",
        "name": "Keymer Vi Ro",
        "img": "Fotos/KeymerViRo.jpg",
        "selected": false
    },
    "10": {
        "id": "10",
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
        console.log(firstLength);
        var randomIndex = Math.floor(Math.random() * firstLength + 1);
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
    var length = Object.keys(findAllPerson()).length;
    var index = 0;
    var j = 1;
	$.each(findAllPerson(), function(i, obj) {
	    
    	setTimeout(function(){
   			$(selector + " img").fadeOut(400, function(){
   				var personSelected = selectRamdonPerson();
   			    
   			    console.log("i: "+ j + ' length: ' + length);
   			    
   				if(j == length){
   					personSelected.selected = true;
   					$(selector + ' .winner').prop('idCompetidor', personSelected.id);
   					console.log('nuevo competidor: ' + personSelected.id);
   				}
   				
   				$(this).prop('src', personSelected.img);
   				$(selector).find('.name').text(personSelected.name);
   				$(this).fadeIn(400);
   				j++;
   			});
   		}, 800 * (index+1));
   		
   		index++;
	});
}

function selectRamdonChallenge(){
    i = typeof i === 'undefined' ? 1 : i;
    
    if(i<100){
        var arrayLength = Object.keys(findAllChallenge()).length;
        var randomIndex = Math.floor(Math.random() * arrayLength + 1);
        var randomElement = findAllChallenge()[randomIndex];
        console.log(randomElement);
        if(typeof randomElement != 'undefined' && !randomElement.selected){
            randomElement.selected = true;
            return randomElement;
        }else{
            return selectRamdonChallenge(i);
        }
    } else {
        alert('No hay Retos disponibles!');
    }
}

function resetPlayers(){
    $('.sidebar2').each(function( index ) {
        $(this).find('img').prop('src', 'no-user.jpg');
        $(this).find('.name').text('Competidor #'+ (index+1));
        $(this).find('.selectPlayer').prop('disabled', false);
        $(this).find('.winner').prop('idCompetidor', null);
        //$(this).find('.winner').prop('disabled', 'disabled');
    });
}