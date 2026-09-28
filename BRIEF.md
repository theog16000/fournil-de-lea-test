# Les trois tâches

Fais-les dans l'ordre et note ton heure de début et de fin de chacune dans `RENDU.md`.

## Tâche 1 : relire et corriger

Le site a été écrit rapidement, en partie avec une IA. Il contient plusieurs défauts : de contenu, de structure, de référencement et de code. Trouve-les et corrige-les.

Tu peux utiliser l'IA pour relire, mais c'est à toi de juger ce qui est réellement un défaut et ce qui n'en est pas. Dans `RENDU.md`, liste chaque défaut trouvé, où il se trouvait, et comment tu l'as corrigé.

## Tâche 2 : faire marcher le formulaire de contact

Aujourd'hui, le formulaire affiche « Merci » sans rien envoyer nulle part. Fais-le fonctionner :

- une route `POST /api/contact` qui reçoit le nom, l'email et le message ;
- une validation côté serveur (champs présents, email valide, longueurs raisonnables) ;
- des erreurs claires renvoyées au visiteur en cas de problème, et un état d'envoi en cours ;
- la route peut se contenter d'écrire dans les logs du serveur : on ne te demande pas de brancher un vrai service d'email.

## Tâche 3 : une demande du client

Léa, la gérante, t'écrit :

> « Bonjour, pouvez-vous ajouter un champ téléphone au formulaire ? Il doit être obligatoire pour les commandes sur mesure, facultatif sinon. Au format belge, bien sûr. Et après l'envoi, je veux que le client reçoive un mail de confirmation dans les 5 minutes. Attention : je ne veux conserver aucune donnée personnelle sur le serveur. »

Implémente ce qui est clair. Pour tout ce que tu ne peux pas trancher seul, ne devine pas en silence : note dans `RENDU.md` ce qui te pose problème, ce que tu as décidé en attendant, et pourquoi.
