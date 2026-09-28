// Extrait le prénom d'un nom complet saisi dans le formulaire.
export function getFirstName(fullName: string): string {
  return fullName.split(" ")[0];
}
