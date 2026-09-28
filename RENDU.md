# Rendu

Nom : GENTY Théo

## Temps

| Tâche                    | Début | Fin | Durée |
|---                       |   |  |  |
| 1. Relire et corriger    |   12:42    |  12:59   |  16min 33s     |
| 2. Formulaire de contact |13:01|     13:26|       |25min 32s
| 3. Demande du client     | 13:30|    14h32 |  1h 2min 39s     |
| **Total**                |     /  |   /  |    1h 43 min   |

## Tâche 1 : défauts trouvés

| Défaut| Où |Correction |
|Plusieurs balises h1|Ligne 34 environ (page.tsx)|Généralement pour le référencement Naturel (SEO), on évite de mettre plusieurs titre H1, il faut que cela sois sémantique (h1>h2>h3)|
|L'attribut Alt non présent| Ligne 42 (page.tsx)|Pour le référencement Naturel, on doit mettre l'attribut alt (description de l'image avec la balise img), cela rend plus accessible et permet de renforcer le référencement|
|Image non optimisé| Ligne 42|Généralement on utilise la balise <img> mais lorsqu'on travaille avec Next.js, on utilise le composant <Image /> de Next/image, c'est plus moderne et moins lourd.|


## Tâche 2 : ce que j'ai fait

J'utilise peu la gestion de formulaire par React, j'ai demandé à l'IA de m'indiquer les éléments principaux afin de structurer mon code, surtout au niveau de la route. L'IA a réussi à me faire gagner du temps sur la structure ce qui m'a fortement aidé pour la suite.

Choix faits :

J'ai utilisé l'App Router de Next.js en créant la route app/api/contact/route.ts pour séparer la logique serveur de l'interface.

 J'ai mis en place une validation à deux niveaux : côté client avec les attributs HTML pour guider la saisie, et côté serveur pour garantir la sécurité des données. 
 
 Pour l'expérience utilisateur, j'ai ajouté un état de chargement qui désactive les champs pendant l'envoi afin que ca évite les doubles clics. J'ai conservé le message de confirmation avec le getFirstName. 
 
 Le traitement se fait via les logs du serveur.

Cas d'erreur couverts :

L'API bloque l'envoi et renvoie un message d'erreur clair si des champs obligatoires sont vides ou ne contiennent que des espaces, si l'adresse email n'a pas un format valide, ... 


Ce que j'ai testé et comment :

J'ai testé le cas de succès en remplissant tous les champs et en vérifiant que le message apparaît bien dans les logs du terminal.

 J'ai ensuite testé les cas d'erreur en tentant d'envoyer un email malformé, un message trop court et des champs vides pour m'assurer que le formulaire bloque l'envoi et affiche le message d'erreur en rouge. 
 
 Enfin, j'ai vérifié que le bouton passe bien en "Envoi en cours..." et se désactive dès le clic.



## Tâche 3 : questions et décisions

Ce qui n'était pas clair, ce que j'ai décidé en attendant une réponse, et pourquoi :

Ce qui n'était pas clair :

 J'avais de nombreuses questions concernant le format belge. Il fallait accepter seulement les numéros de mobile ou aussi les numéros fixes de la région de Wavre ? 
 
 Concernant le délai de 5 minutes, fallait déterminer s'il s'agissait d'un délai maximum ou pas ?
 
Ce que j'ai décidé en attendant une réponse, et pourquoi :

J'ai ajouté une case à cocher pour indiquer s'il s'agit d'une commande sur mesure, ce qui active dynamiquement l'obligation du numéro de téléphone sans alourdir le formulaire. 

Pour le téléphone, j'ai accepté à la fois les numéros mobiles, fixes et avec l'indicatif international +32.

Enfin, aucune donnée n'est enregistrée en base de données et j'ai retiré les affichages d'informations personnelles dans les logs de la console pour respecter la volonté de non-conservation des données.

L'IA



## L'IA

Où l'IA s'est trompée ou m'a fait perdre du temps, et ce que j'ai dû vérifier ou corriger à la main :


L'IA a confondu l'emplacement du fichier de route dans l'App Router en donnant app/api/route.ts au lieu de app/api/contact/route.ts, ce qui provoquait une erreur 404 lors de l'envoi. J'ai perdu facilement 10 min dessus.

J'ai dû replacer le fichier de route dans le bon dossier pour faire correspondre l'URL de la route. 

J'ai testé manuellement la saisie de plusieurs formats de numéros belges, avec et sans espaces ou indicatifs, pour m'assurer que la validation fonctionnait. 

J'ai aussi vérifié que l'obligation du champ téléphone se mettait bien à jour côté client et côté serveur lorsque la case était cochée ou non.

Malgrès ces erreurs, l'IA ma permis de gagner du temps et de la praticité sur de nombreuses taches au cours de ces différents exercices. 

## Ce que je n'ai pas eu le temps de faire

J'ai essayé mais je n'est pas réussi à faire cela dans les temps à la tache 3 : Ne pas conserver de données personnelles sur le serveur. J'ai essayé de me renseigner au niveau de l'IA et sur les docs en ligne, j'ai eu du mal à comprendre et/ou à a appliquer cela sur le site. 

Il me restait une dizaine de minute, j'ai préférer relire mon compte rendu en indiquant, au maximum, toutes les taches que j'ai pu faire au lieu d'encommencer une autre et de rendre cela dans la précipitation.