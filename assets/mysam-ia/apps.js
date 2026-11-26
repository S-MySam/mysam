/*
  MySam IA — liste des applis affichées sur ia.html

  Pour ajouter une appli : copie un bloc { ... } en haut de la liste et remplis-le.
  La première appli de la liste est mise en avant (grande carte).

  nom          : nom de l'appli
  description  : une ou deux phrases, ce que la personne peut faire avec
  visuel       : capture de l'appli (format paysage 16:10), rangée dans assets/mysam-ia/
  lien         : adresse de l'appli (dossier ia/nom-de-l-appli/) ou du fichier à télécharger
  bouton       : "ouvrir" (s'ouvre dans un nouvel onglet) ou "telecharger" (télécharge le fichier)
  version      : ex. "v1", "v2"
  statut       : petit texte à côté de la version, ex. "En test", "Nouveau"
*/
window.MYSAM_APPS = [
  {
    nom: "Le Globe",
    description: "Faites tourner le globe, cochez les pays que vous avez visités et préparez vos prochains voyages étape par étape.",
    visuel: "assets/mysam-ia/le-globe.webp",
    lien: "ia/le-globe/",
    bouton: "ouvrir",
    version: "v1",
    statut: "En test"
  }
];
