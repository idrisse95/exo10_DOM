// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir





let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}
var elements = document.querySelectorAll('#liste-competences>h2')
console.log(elements);

 
for (const key in competences) {
 
    

    switch (competences[key]) {

        case '71%':
            document.querySelector('#liste-competences h2:nth-child(1)').innerHTML = (`${competences[key]}`)
            break;
        case '95%':
            document.querySelector('#liste-competences h2:nth-child(2)').innerHTML = (`${competences[key]}`);
           
;            break;

            case '50%':
                document.querySelector('#liste-competences h2:nth-child(3)').innerHTML = (`${competences[key]}`)
                
                break;

              
                    case '18%':
                        document.querySelector('#liste-competences h2:nth-child(4)').innerHTML = (`${competences[key]}`)
                        break;

                        case '100%':
                            document.querySelector('#liste-competences h2:nth-child(5)').innerHTML = ( ` ${competences[key]}`)
                            break;
    
        default:
            break;
    }

    
   
}

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir



for (const key in competences) {

    switch (competences[key]) {
        case '18%':
           
            document.querySelector('#liste-competences h2:nth-child(4)').style.backgroundColor = 'red'
            break;
    
            case '71%' && '95%':
                document.querySelector('#liste-competences h2:nth-child(1)').style.backgroundColor = 'green'
                document.querySelector('#liste-competences h2:nth-child(1)').style.color = 'white'
                document.querySelector('#liste-competences h2:nth-child(2)').style.backgroundColor = 'green'
                document.querySelector('#liste-competences h2:nth-child(2)').style.color = 'white'
                break;

                case '100%':
           
                document.querySelector('#liste-competences h2:nth-child(5)').style.backgroundColor = 'gold'
                break;
    
        default:
            break;
    }
    
    
    }
    
    
    
    
        
    