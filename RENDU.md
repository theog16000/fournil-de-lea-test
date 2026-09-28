# Rendu

Nom :

## Temps

| Tâche                    | Début | Fin | Durée |
|---                       |   |  |  |
| 1. Relire et corriger    |   12:42    |  12:59   |  16min 33s     |
| 2. Formulaire de contact |       |     |       |
| 3. Demande du client     |       |     |       |
| **Total**                |       |     |       |

## Tâche 1 : défauts trouvés

| Défaut| Où |Correction |
|Plusieurs balises h1|Ligne 34 environ (page.tsx)|Généralement pour le référencement Naturel (SEO), on évite de mettre plusieurs titre H1, il faut que cela sois sémantique (h1>h2>h3)|
|L'attribut Alt non présent| Ligne 42 (page.tsx)|Pour le référencement Naturel, on doit mettre l'attribut alt (description de l'image avec la balise img), cela rend plus accessible et permet de renforcer le référencement|
|Image non optimisé| Ligne 42|Généralement on utilise la balise <img> mais lorsqu'on travaille avec Next.js, on utilise le composant <Image /> de Next/image, c'est plus moderne et moins lourd.


## Tâche 2 : ce que j'ai fait

J'utilise peu la gestion de formulaire par React, j'ai demandé à l'IA de m'indiquer les éléments principaux afin de structurer mon code, surtout au niveau de la route. L'IA a réussi à me faire gagner du temps sur la structure ce qui m'a fortement aidé pour la suite.

Choix faits :

J'ai utilisé l'App Router de Next.js en créant la route app/api/contact/route.ts pour séparer la logique serveur de l'interface.

 J'ai mis en place une validation à deux niveaux : côté client avec les attributs HTML pour guider la saisie, et côté serveur pour garantir la sécurité des données. 
 
 Pour l'expérience utilisateur, j'ai ajouté un état de chargement qui désactive les champs pendant l'envoi afin que ca évite les doubles clics. J'ai conservé le message de confirmation avec getFirstName. 
 
 Le traitement se fait via les logs du serveur.

Cas d'erreur couverts :
L'API bloque l'envoi et renvoie un message d'erreur clair si des champs obligatoires sont vides ou ne contiennent que des espaces, si l'adresse email n'a pas un format valide, ... 


Ce que j'ai testé et comment :

J'ai testé le cas de succès en remplissant tous les champs et en vérifiant que le message apparaît bien dans les logs du terminal.

 J'ai ensuite testé les cas d'erreur en tentant d'envoyer un email malformé, un message trop court et des champs vides pour m'assurer que le formulaire bloque l'envoi et affiche le message d'erreur en rouge. 
 
 Enfin, j'ai vérifié que le bouton passe bien en "Envoi en cours..." et se désactive dès le clic.



## Tâche 3 : questions et décisions

Ce qui n'était pas clair, ce que j'ai décidé en attendant une réponse, et pourquoi :

## L'IA

Où l'IA s'est trompée ou m'a fait perdre du temps, et ce que j'ai dû vérifier ou corriger à la main :

## Ce que je n'ai pas eu le temps de faire
