const storyData = [
  {
    id: 1,
    text: "Vous arrivez sur le parking du bar et voyez votre date approcher. Comment réagissez-vous ?",
    image: "parking.jpg",
    choices: [
      { text: "Sourire et dire bonjour chaleureusement", nextId: 2 },
      { text: "Faire un petit geste de la main timidement", nextId: 3 },
    ],
  },
  {
    id: 2,
    text: "Elle vous rend votre sourire et semble détendue. Vous entrez dans le bar ensemble.",
    image: "bar_entrance.jpg",
    choices: [
      { text: "Choisir une table près de la fenêtre", nextId: 4 },
      { text: "S'asseoir au comptoir", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "Elle vous sourit mais semble un peu hésitante. Vous entrez dans le bar ensemble.",
    image: "bar_entrance.jpg",
    choices: [
      { text: "Choisir une table au fond du bar", nextId: 6 },
      { text: "S'asseoir au comptoir", nextId: 5 },
    ],
  },
  {
    id: 4,
    text: "Vous êtes confortablement installées près de la fenêtre. Elle vous demande ce que vous voulez boire.",
    image: "table_fenetre.jpg",
    choices: [
      { text: "Commander un cocktail", nextId: 7 },
      { text: "Prendre un café", nextId: 8 },
    ],
  },
  {
    id: 5,
    text: "Vous êtes au comptoir, proche du barman. Elle semble détendue et attend votre commande.",
    image: "bar_comptoir.jpg",
    choices: [
      { text: "Commander un verre de vin", nextId: 7 },
      { text: "Prendre un soda", nextId: 8 },
    ],
  },
  {
    id: 6,
    text: "L'ambiance est plus intime au fond du bar. Vous échangez quelques sourires.",
    image: "table_fond.jpg",
    choices: [
      { text: "Commander un thé", nextId: 8 },
      { text: "Prendre un cocktail", nextId: 7 },
    ],
  },
  {
    id: 7,
    text: "Votre boisson est servie et elle lève son verre pour trinquer. La conversation démarre bien !",
    image: "verres_trinquent.jpg",
    choices: [
      { text: "Parler de votre journée", nextId: 9 },
      { text: "Lui poser une question sur elle", nextId: 10 },
    ],
  },
  {
    id: 8,
    text: "Vous dégustez tranquillement votre boisson, l'atmosphère est détendue.",
    image: "boisson_soft.jpg",
    choices: [
      { text: "Demander si elle vient souvent ici", nextId: 9 },
      { text: "Lui faire un compliment", nextId: 10 },
    ],
  },
  {
    id: 9,
    text: "Elle sourit et répond avec enthousiasme. L'alchimie commence à opérer !",
    image: "sourire.jpg",
    choices: [
      { text: "Proposer de commander à manger", nextId: 11 },
      { text: "Continuer la conversation sur un ton léger", nextId: 12 },
    ],
  },
  {
    id: 10,
    text: "Elle semble touchée par votre intérêt et partage quelques anecdotes.",
    image: "conversation.jpg",
    choices: [
      { text: "Parler de votre passion", nextId: 12 },
      { text: "Demander ses goûts culinaires", nextId: 11 },
    ],
  },
  {
    id: 11,
    text: "Vous choisissez ensemble un plat et partagez votre repas dans la bonne humeur.",
    image: "repas_partage.jpg",
    choices: [
      { text: "Faire une blague", nextId: 13 },
      { text: "Parler de voyages", nextId: 14 },
    ],
  },
  {
    id: 12,
    text: "La conversation se déroule naturellement, vous commencez à vous sentir à l'aise.",
    image: "discussion_detendue.jpg",
    choices: [
      { text: "Lui demander son film préféré", nextId: 14 },
      { text: "Lui proposer un deuxième rendez-vous", nextId: 15 },
    ],
  },
  {
    id: 13,
    text: "Votre blague la fait éclater de rire, elle semble vraiment passer un bon moment.",
    image: "rire.jpg",
    choices: [
      { text: "Suggérer une balade après le repas", nextId: 15 },
      { text: "Lui demander son plus grand rêve", nextId: 14 },
    ],
  },
  {
    id: 14,
    text: "La discussion devient plus profonde, vous apprenez à mieux vous connaître.",
    image: "moment_complice.jpg",
    choices: [
      { text: "Proposer de prolonger la soirée", nextId: 15 },
      { text: "Lui laisser le choix de la suite", nextId: 16 },
    ],
  },
  {
    id: 15,
    text: "Vous proposez de prolonger la soirée et elle accepte avec un sourire complice.",
    image: "fin_positive.jpg",
    choices: [],
  },
  {
    id: 16,
    text: "Elle vous remercie pour la soirée et propose de se revoir bientôt.",
    image: "fin_douce.jpg",
    choices: [],
  },
];

export default storyData;
