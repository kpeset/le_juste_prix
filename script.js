// CONSIGNE
// Le juste prix
// Je dois créer un jeu.
// Si le nombre est trop grand => "C'est moins" => Et l'utilisateur peut à nouveau rentrer un nombre.
// Si le nombre est trop petit => "C'est plus" => Et l'utilisateur peut à nouveau rentrer un nombre.
// Si le nombre est égal => "Bravo" => Et on arrête le jeu.

// Tant que je n'ai pas trouvé la bonne réponse, le jeu continue

// Bonus : Si on écrit "toto" ou autre qu'un nombre => "Entrez un nombre valide"
// Bonus : Si on écrit un nombre plus petit que 0 ou plus grand que 100 => "Entrez un nombre valide"

// ---------------------------------------------------------------------------------------------------------------------

// PHASE DE REFLEXION :

// la boucle for -> un nombre d'itération bien défini
// On pourrait la boucle for si on avait un nombre de vie limité

// Tant que -> while -> la partie n'est pas terminée -> on continue
// Quand la partie est terminée -> On s'arrête

// tant que je n'ai pas la bonne réponse, la partie continue
// quand j'ai la bonne réponse la partie s'arrête.

// ---------------------------------------------------------------------------------------------------------------------

// Génération d'un nombre aléatoire au début du programme

const randomNumber = Math.floor(Math.random() * 100 + 1);

// Etat initial du jeu.
// Quand la partie commence, celle-ci n'est pas terminée.
// Est-ce que la partie est terminée ? Non. Donc c'est faux.

let gameIsOver = false;

// Tant que la partie n'est pas terminée, on fait ce qu'il y a dans la boucle.

while (gameIsOver === false) {
  // A chaque tour de boucle, on demande à l'utilisateur de saisir un nombre et on stocke sa réponse dans une variable
  // answer.

  const answer = prompt(
    "Choisis un nombre aléatoire entre 1 et 100 " + randomNumber
  );

  // Logique conditionnelle dans laquelle on test la valeur de answer pour la comparer au nombre généré au début du jeu.

  if (answer > randomNumber) {
    alert("C'est moins");
  } else if (answer < randomNumber) {
    alert("C'est plus");
  } else {
    alert("Bravoooo !");
    // Si la partie est terminée, alors on passe gameIsOver à true
    gameIsOver = true;
  }
}
