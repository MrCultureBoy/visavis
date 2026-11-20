/* Tchin — paquets à thème (FR + EN ; les autres langues prennent l'anglais). Fabriqué par outils/paquets.py. */
(function (racine, fabrique) {
  if (typeof module === 'object' && module.exports) module.exports = fabrique();
  else racine.TchinPaquets = fabrique();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  return [
 {
  "id": "soiree",
  "em": "🎉",
  "nom": {
   "fr": "Soirée",
   "en": "Party",
   "es": "Fiesta",
   "de": "Party",
   "ar": "سهرة"
  },
  "desc": {
   "fr": "Musique, danse et petites manies de fête, pour briser la glace.",
   "en": "Music, dancing and party habits to break the ice.",
   "es": "Música, baile y manías de fiesta para romper el hielo.",
   "de": "Musik, Tanz und kleine Party-Macken zum Eisbrechen.",
   "ar": "موسيقى ورقص وعادات السهرات لكسر الجليد."
  },
  "questions": [
   {
    "fr": {
     "q": "Tu arrives à une soirée. Premier réflexe ?",
     "r": [
      [
       "🍕",
       "Foncer sur le buffet"
      ],
      [
       "👋",
       "Dire bonjour à tout le monde"
      ],
      [
       "🎶",
       "Repérer qui gère la musique"
      ],
      [
       "📱",
       "Chercher la personne que je connais"
      ]
     ],
     "relance": "Racontez l’arrivée la plus gênante que vous ayez vécue."
    },
    "en": {
     "q": "You walk into a party. First move?",
     "r": [
      "Head straight for the snacks",
      "Say hi to everyone",
      "Spot who’s in charge of the music",
      "Look for the one person I know"
     ],
     "relance": "Tell each other about your most awkward arrival ever."
    }
   },
   {
    "fr": {
     "q": "La playlist de la soirée, c’est…",
     "r": [
      [
       "🔥",
       "Les tubes que tout le monde connaît"
      ],
      [
       "🎧",
       "Ma sélection perso"
      ],
      [
       "📻",
       "N’importe quoi, tant que ça bouge"
      ],
      [
       "🎲",
       "Aléatoire, on verra"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The party playlist is…",
     "r": [
      "Hits everyone knows",
      "My own picks",
      "Anything, as long as it moves",
      "Shuffle, we’ll see"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Ton mouvement de danse signature ?",
     "r": [
      [
       "🕺",
       "Le grand classique des bras en l’air"
      ],
      [
       "🐔",
       "Le robot ou le poulet"
      ],
      [
       "🙃",
       "Je bouge un peu sur place"
      ],
      [
       "🛑",
       "Je ne danse pas, je regarde"
      ]
     ],
     "relance": "Faites-vous une démonstration de dix secondes."
    },
    "en": {
     "q": "Your signature dance move?",
     "r": [
      "Arms in the air, the classic",
      "The robot or the chicken",
      "A little shuffle on the spot",
      "I don’t dance, I watch"
     ],
     "relance": "Give each other a ten-second demo."
    }
   },
   {
    "fr": {
     "q": "À quelle heure tu quittes une bonne soirée ?",
     "r": [
      [
       "🌙",
       "Parmi les derniers"
      ],
      [
       "🕛",
       "Vers minuit"
      ],
      [
       "🚌",
       "Pour le dernier transport"
      ],
      [
       "🥱",
       "Dès que je baille"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "When do you leave a good party?",
     "r": [
      "Among the last ones",
      "Around midnight",
      "For the last bus or train",
      "As soon as I yawn"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le morceau qui te fait lever direct ?",
     "r": [
      [
       "🎤",
       "Un vieux tube de karaoké"
      ],
      [
       "🥁",
       "Un gros beat électro"
      ],
      [
       "🎷",
       "Un classique des années 2000"
      ],
      [
       "🪗",
       "Un truc de mariage que tout le monde chante"
      ]
     ],
     "relance": "Chantonnez le début de votre morceau."
    },
    "en": {
     "q": "The song that gets you up right away?",
     "r": [
      "An old karaoke hit",
      "A big electro beat",
      "A 2000s classic",
      "A wedding song everyone sings"
     ],
     "relance": "Hum the start of your song."
    }
   },
   {
    "fr": {
     "q": "Tu gères l’ambiance. Tu prends…",
     "r": [
      [
       "💡",
       "Des guirlandes lumineuses"
      ],
      [
       "🔊",
       "Une grosse enceinte"
      ],
      [
       "🎈",
       "Des ballons et de la déco"
      ],
      [
       "📸",
       "Un appareil photo jetable"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "You’re in charge of the vibe. You grab…",
     "r": [
      "String lights",
      "A big speaker",
      "Balloons and decorations",
      "A disposable camera"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le plat de buffet que tu vises en premier ?",
     "r": [
      [
       "🥔",
       "Les chips"
      ],
      [
       "🍕",
       "Les parts de pizza"
      ],
      [
       "🧁",
       "Les petits gâteaux"
      ],
      [
       "🥕",
       "Les légumes et la sauce"
      ]
     ],
     "relance": "Le snack de soirée que vous ne refuseriez jamais ?"
    },
    "en": {
     "q": "The buffet item you hit first?",
     "r": [
      "The chips",
      "The pizza slices",
      "The little cakes",
      "Veggies and dip"
     ],
     "relance": "The party snack you’d never turn down?"
    }
   },
   {
    "fr": {
     "q": "Quand la musique est trop forte, tu…",
     "r": [
      [
       "🗣️",
       "Crier pour me faire entendre"
      ],
      [
       "🤝",
       "Parler à l’oreille de l’autre"
      ],
      [
       "🚶",
       "Sortir prendre l’air"
      ],
      [
       "🤷",
       "Sourire et hocher la tête"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "When the music’s too loud, you…",
     "r": [
      "Shout to be heard",
      "Talk right into someone’s ear",
      "Step out for air",
      "Smile and nod"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Un jeu de soirée, tu choisis…",
     "r": [
      [
       "🃏",
       "Un jeu de cartes"
      ],
      [
       "🎯",
       "Un défi absurde"
      ],
      [
       "🧠",
       "Un quiz de culture générale"
      ],
      [
       "🎭",
       "Un jeu de mimes"
      ]
     ],
     "relance": "Quelle règle de jeu inventeriez-vous ?"
    },
    "en": {
     "q": "For a party game, you pick…",
     "r": [
      "A card game",
      "A silly dare",
      "A trivia quiz",
      "Charades"
     ],
     "relance": "What game rule would you invent?"
    }
   },
   {
    "fr": {
     "q": "Ton rôle en karaoké ?",
     "r": [
      [
       "🎙️",
       "Le micro ne me quitte plus"
      ],
      [
       "👏",
       "Le public le plus enthousiaste"
      ],
      [
       "🎼",
       "Je chante, mais faux"
      ],
      [
       "🍿",
       "Je regarde de loin"
      ]
     ],
     "relance": "Quelle chanson ne devrait jamais être chantée en karaoké ?"
    },
    "en": {
     "q": "Your karaoke role?",
     "r": [
      "The mic never leaves my hand",
      "The most enthusiastic audience",
      "I sing, but badly",
      "I watch from afar"
     ],
     "relance": "Which song should never be sung at karaoke?"
    }
   },
   {
    "fr": {
     "q": "L’after, c’est…",
     "r": [
      [
       "🥞",
       "Des crêpes à minuit"
      ],
      [
       "🛋️",
       "Un film sur le canapé"
      ],
      [
       "🗣️",
       "Des discussions sans fin"
      ],
      [
       "🛏️",
       "Mon lit, vite"
      ]
     ],
     "relance": "Le meilleur souvenir d’after que vous racontez volontiers ?"
    },
    "en": {
     "q": "The after-party is…",
     "r": [
      "Pancakes at midnight",
      "A movie on the couch",
      "Endless chatting",
      "My bed, fast"
     ],
     "relance": "The best after-party memory you’ll happily tell?"
    }
   },
   {
    "fr": {
     "q": "Pour une photo de groupe, tu…",
     "r": [
      [
       "🤳",
       "Tiens le téléphone"
      ],
      [
       "🤪",
       "Fais une grimace"
      ],
      [
       "😇",
       "Souris sagement"
      ],
      [
       "🏃",
       "Me cache derrière"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "For a group photo, you…",
     "r": [
      "Hold the phone",
      "Pull a face",
      "Smile nicely",
      "Hide in the back"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Ta soirée à thème idéale ?",
     "r": [
      [
       "🦸",
       "Super-héros"
      ],
      [
       "🕶️",
       "Années 80"
      ],
      [
       "🏴‍☠️",
       "Pirates"
      ],
      [
       "🧸",
       "Retour en enfance"
      ]
     ],
     "relance": "Quel déguisement vous irait le mieux ?"
    },
    "en": {
     "q": "Your ideal theme party?",
     "r": [
      "Superheroes",
      "The ’80s",
      "Pirates",
      "Back to childhood"
     ],
     "relance": "What costume would suit you best?"
    }
   },
   {
    "fr": {
     "q": "Tu es plutôt le genre de personne à…",
     "r": [
      [
       "🏠",
       "Organiser chez moi"
      ],
      [
       "🧳",
       "Apporter un truc à partager"
      ],
      [
       "🗓️",
       "Lancer l’idée sur le groupe"
      ],
      [
       "🙋",
       "Dire « je viens » au dernier moment"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "You’re the kind of person who…",
     "r": [
      "Hosts at my place",
      "Brings something to share",
      "Starts the plan in the group chat",
      "Says “I’m in” at the last minute"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Un bon invité, c’est celui qui…",
     "r": [
      [
       "🧹",
       "Aide à ranger"
      ],
      [
       "😂",
       "Fait rire tout le monde"
      ],
      [
       "🎶",
       "Met la bonne musique"
      ],
      [
       "🍰",
       "Arrive avec un dessert"
      ]
     ],
     "relance": "Qui est le meilleur invité que vous connaissez ?"
    },
    "en": {
     "q": "A good guest is the one who…",
     "r": [
      "Helps clean up",
      "Makes everyone laugh",
      "Plays the right music",
      "Shows up with dessert"
     ],
     "relance": "Who’s the best guest you know?"
    }
   },
   {
    "fr": {
     "q": "Soirée qui traîne : ton énergie à minuit ?",
     "r": [
      [
       "🔋",
       "Pleine, je démarre"
      ],
      [
       "🔌",
       "À moitié, ça va"
      ],
      [
       "🪫",
       "Presque vide"
      ],
      [
       "🧃",
       "Un jus et ça repart"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The party drags on: your energy at midnight?",
     "r": [
      "Full, I’m just starting",
      "Half, I’m fine",
      "Nearly empty",
      "A juice and I’m back"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Ton accessoire de soirée ?",
     "r": [
      [
       "🧢",
       "Une casquette"
      ],
      [
       "🕶️",
       "Des lunettes de soleil, même la nuit"
      ],
      [
       "👟",
       "Mes baskets confortables"
      ],
      [
       "✨",
       "Un truc qui brille"
      ]
     ],
     "relance": "Quel accessoire vous a sauvé une soirée ?"
    },
    "en": {
     "q": "Your party accessory?",
     "r": [
      "A cap",
      "Sunglasses, even at night",
      "My comfy sneakers",
      "Something sparkly"
     ],
     "relance": "Which accessory ever saved a party for you?"
    }
   },
   {
    "fr": {
     "q": "On t’annonce une surprise-partie pour un ami. Tu…",
     "r": [
      [
       "🤫",
       "Gardes le secret"
      ],
      [
       "🎁",
       "Gères le cadeau"
      ],
      [
       "🎂",
       "Prends le gâteau"
      ],
      [
       "🙊",
       "Craque et le dis par erreur"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "A surprise party for a friend is planned. You…",
     "r": [
      "Keep the secret",
      "Handle the gift",
      "Take care of the cake",
      "Crack and spill by mistake"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le plus drôle en soirée, c’est…",
     "r": [
      [
       "🧊",
       "Les défis stupides"
      ],
      [
       "📖",
       "Les anecdotes de chacun"
      ],
      [
       "🪩",
       "La piste de danse improvisée"
      ],
      [
       "🎤",
       "Le karaoké qui dérape"
      ]
     ],
     "relance": "Racontez la scène la plus drôle que vous avez vue en soirée."
    },
    "en": {
     "q": "The funniest thing at a party is…",
     "r": [
      "Silly dares",
      "Everyone’s stories",
      "The improvised dance floor",
      "Karaoke gone off the rails"
     ],
     "relance": "Describe the funniest scene you’ve seen at a party."
    }
   },
   {
    "fr": {
     "q": "Le lendemain d’une longue soirée, tu…",
     "r": [
      [
       "🥣",
       "Prépares un gros petit-déj"
      ],
      [
       "😴",
       "Dors jusqu’à midi"
      ],
      [
       "🚿",
       "Te remets en route doucement"
      ],
      [
       "📲",
       "Regardes les photos de la veille"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The day after a long party, you…",
     "r": [
      "Make a big breakfast",
      "Sleep till noon",
      "Ease back into the day",
      "Scroll through last night’s photos"
     ],
     "relance": null
    }
   }
  ],
  "defis": [
   {
    "fr": "Lancez chacun une consigne de danse en une phrase, puis dansez dix secondes sur celle de l’autre.",
    "en": "Each give one dance instruction in a sentence, then dance ten seconds to the other’s."
   },
   {
    "fr": "Inventez ensemble le thème d’une soirée parfaite et listez trois règles obligatoires.",
    "en": "Invent the theme of a perfect party together and list three mandatory rules."
   },
   {
    "fr": "Fredonnez chacun le refrain d’un tube de soirée. L’autre doit crier le titre en dix secondes.",
    "en": "Each hum the chorus of a party hit. The other shouts the title within ten seconds."
   },
   {
    "fr": "Imaginez la playlist idéale de cinq morceaux pour cette soirée, un titre chacun à tour de rôle.",
    "en": "Build the ideal five-song playlist for this party, taking turns one song each."
   },
   {
    "fr": "Faites une photo de groupe imaginaire : choisissez la pose, la grimace et le cri collectif. Jouez-la trois secondes.",
    "en": "Stage an imaginary group photo: pick the pose, the face and the group shout. Hold it for three seconds."
   },
   {
    "fr": "Racontez chacun en trente secondes la soirée dont vous êtes le plus fier ou fière, sans dire où.",
    "en": "Each tell, in thirty seconds, the party you’re proudest of, without saying where."
   },
   {
    "fr": "Mimez chacun un jeu de soirée, sans un son. L’autre doit le deviner en vingt secondes.",
    "en": "Each mime a party game, without a sound. The other guesses it in twenty seconds."
   },
   {
    "fr": "Trouvez ensemble un slogan pour une soirée pleine de gens qui viennent de se rencontrer.",
    "en": "Come up with a slogan together for a party full of people who just met."
   }
  ]
 },
 {
  "id": "campus",
  "em": "🎓",
  "nom": {
   "fr": "Campus",
   "en": "Campus",
   "es": "Campus",
   "de": "Campus",
   "ar": "الحرم الجامعي"
  },
  "desc": {
   "fr": "Cours, coloc, resto U et vie étudiante, version première année.",
   "en": "Classes, flatshares, canteen food and student life.",
   "es": "Clases, piso compartido, comedor y vida estudiantil.",
   "de": "Vorlesungen, WG, Mensa und Studentenleben.",
   "ar": "محاضرات وسكن مشترك ومطعم جامعي وحياة طلابية."
  },
  "questions": [
   {
    "fr": {
     "q": "Le premier jour de cours, tu t’assois…",
     "r": [
      [
       "🥇",
       "Au premier rang"
      ],
      [
       "🚪",
       "Près de la porte"
      ],
      [
       "🪟",
       "Près de la fenêtre"
      ],
      [
       "👥",
       "Là où il y a du monde"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "On the first day of class, you sit…",
     "r": [
      "In the front row",
      "Near the door",
      "By the window",
      "Wherever there are people"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "La veille d’un partiel, tu…",
     "r": [
      [
       "📚",
       "Révises jusqu’au bout"
      ],
      [
       "🧘",
       "Dors tôt, tout est vu"
      ],
      [
       "🧃",
       "Fais une grosse pause café"
      ],
      [
       "😰",
       "Découvres le programme"
      ]
     ],
     "relance": "Racontez votre pire veille d’examen."
    },
    "en": {
     "q": "The night before an exam, you…",
     "r": [
      "Study to the very end",
      "Sleep early, all done",
      "Take a big coffee break",
      "Discover the syllabus"
     ],
     "relance": "Tell each other about your worst night before an exam."
    }
   },
   {
    "fr": {
     "q": "Ton lieu de révision préféré ?",
     "r": [
      [
       "📖",
       "La bibliothèque"
      ],
      [
       "🛏️",
       "Mon lit"
      ],
      [
       "☕",
       "Un café"
      ],
      [
       "🌳",
       "Dehors, au soleil"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your favorite place to study?",
     "r": [
      "The library",
      "My bed",
      "A café",
      "Outside in the sun"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "En amphi, ton niveau d’attention ?",
     "r": [
      [
       "✍️",
       "Je note tout"
      ],
      [
       "📸",
       "Je photographie les slides"
      ],
      [
       "💭",
       "Je rêve doucement"
      ],
      [
       "🎧",
       "Je regarde plus tard en replay"
      ]
     ],
     "relance": "Quel cours vous a le plus captivé ?"
    },
    "en": {
     "q": "In a lecture hall, your attention level?",
     "r": [
      "I note everything",
      "I photograph the slides",
      "I daydream gently",
      "I’ll watch the replay later"
     ],
     "relance": "Which class kept you hooked the most?"
    }
   },
   {
    "fr": {
     "q": "Le repas du resto U, c’est…",
     "r": [
      [
       "🍟",
       "Les frites avant tout"
      ],
      [
       "🥗",
       "Le plat du jour"
      ],
      [
       "🍮",
       "Le dessert qui sauve"
      ],
      [
       "🥪",
       "Le sandwich de secours"
      ]
     ],
     "relance": "Quel plat de cantine vous rappelle votre enfance ?"
    },
    "en": {
     "q": "The campus canteen meal is…",
     "r": [
      "Fries above all",
      "The dish of the day",
      "The dessert that saves it",
      "The backup sandwich"
     ],
     "relance": "Which canteen dish takes you back to childhood?"
    }
   },
   {
    "fr": {
     "q": "En colocation, ton rôle ?",
     "r": [
      [
       "🧽",
       "Je nettoie"
      ],
      [
       "🍳",
       "Je cuisine"
      ],
      [
       "🎮",
       "Je mets l’ambiance"
      ],
      [
       "🕵️",
       "Je suis le fantôme du couloir"
      ]
     ],
     "relance": "Quelle règle de coloc vous semble indispensable ?"
    },
    "en": {
     "q": "In a flatshare, your role?",
     "r": [
      "The one who cleans",
      "The cook",
      "The life of the flat",
      "The hallway ghost"
     ],
     "relance": "Which flatshare rule do you find essential?"
    }
   },
   {
    "fr": {
     "q": "Le frigo partagé, tu y mets…",
     "r": [
      [
       "🏷️",
       "Mes affaires bien étiquetées"
      ],
      [
       "🥫",
       "Seulement l’essentiel"
      ],
      [
       "🍕",
       "Les restes de la veille"
      ],
      [
       "🧊",
       "Un seul yaourt, très surveillé"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "In the shared fridge, you put…",
     "r": [
      "My stuff, clearly labeled",
      "Just the basics",
      "Yesterday’s leftovers",
      "One yogurt, closely guarded"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Ton emploi du temps idéal ?",
     "r": [
      [
       "🌅",
       "Cours dès 8 h, libre l’après-midi"
      ],
      [
       "🌆",
       "Cours tard, grasse matinée"
      ],
      [
       "📅",
       "Peu de jours, journées pleines"
      ],
      [
       "🧩",
       "Un peu de tout, bien réparti"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your ideal timetable?",
     "r": [
      "Class from 8 a.m., free afternoons",
      "Late classes, sleeping in",
      "Few days, full days",
      "A bit of everything, spread out"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Un travail de groupe, tu es…",
     "r": [
      [
       "📋",
       "J’organise"
      ],
      [
       "💡",
       "J’apporte les idées"
      ],
      [
       "🔎",
       "Je relis tout"
      ],
      [
       "⏰",
       "Je finis à la dernière minute"
      ]
     ],
     "relance": "Votre meilleur souvenir de travail de groupe ?"
    },
    "en": {
     "q": "In a group project, you’re…",
     "r": [
      "The organizer",
      "The creative one",
      "The proofreader",
      "The last-minute finisher"
     ],
     "relance": "Your best group-project memory?"
    }
   },
   {
    "fr": {
     "q": "Pour une asso étudiante, tu t’imagines…",
     "r": [
      [
       "🎪",
       "À organiser un événement"
      ],
      [
       "📣",
       "À faire la com"
      ],
      [
       "🗂️",
       "À gérer l’organisation"
      ],
      [
       "🙌",
       "À donner un coup de main le jour J"
      ]
     ],
     "relance": "Quelle asso rêveriez-vous de monter ?"
    },
    "en": {
     "q": "For a student club, you picture yourself…",
     "r": [
      "Organizing an event",
      "Handling the promotion",
      "Keeping track of everything",
      "Lending a hand on the big day"
     ],
     "relance": "Which club would you love to start?"
    }
   },
   {
    "fr": {
     "q": "Ton stage idéal ?",
     "r": [
      [
       "🏢",
       "Dans une grande entreprise"
      ],
      [
       "🌱",
       "Dans une petite équipe"
      ],
      [
       "🌍",
       "À l’étranger"
      ],
      [
       "🎨",
       "Dans un lieu créatif"
      ]
     ],
     "relance": "Le métier que vous aimeriez découvrir en stage ?"
    },
    "en": {
     "q": "Your ideal internship?",
     "r": [
      "In a big company",
      "In a small team",
      "Abroad",
      "In a creative place"
     ],
     "relance": "Which job would you love to discover on an internship?"
    }
   },
   {
    "fr": {
     "q": "Les notes prises en cours, c’est…",
     "r": [
      [
       "🌈",
       "Un arc-en-ciel de surligneurs"
      ],
      [
       "💻",
       "Un ordi tout en tableaux"
      ],
      [
       "📝",
       "Un cahier bien rangé"
      ],
      [
       "🧩",
       "Un chaos que personne d’autre ne comprend"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your class notes are…",
     "r": [
      "A rainbow of highlighters",
      "A laptop full of tables",
      "A neat notebook",
      "Chaos only I understand"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le retard à un cours, c’est…",
     "r": [
      [
       "🏃",
       "Un sprint dans les couloirs"
      ],
      [
       "🚶",
       "Une entrée discrète"
      ],
      [
       "🙈",
       "Je fais demi-tour"
      ],
      [
       "🛴",
       "La trottinette à la rescousse"
      ]
     ],
     "relance": "Quelle excuse inventeriez-vous pour un retard ?"
    },
    "en": {
     "q": "Being late to class means…",
     "r": [
      "A sprint down the halls",
      "A quiet entrance",
      "I turn back",
      "The scooter to the rescue"
     ],
     "relance": "What excuse would you invent for being late?"
    }
   },
   {
    "fr": {
     "q": "Pour une dissert ou un exposé, tu commences par…",
     "r": [
      [
       "🗺️",
       "Un plan détaillé"
      ],
      [
       "🔍",
       "Les recherches"
      ],
      [
       "✏️",
       "Une phrase d’accroche"
      ],
      [
       "📆",
       "Un compte à rebours de panique"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "For an essay or presentation, you start with…",
     "r": [
      "A detailed outline",
      "Research",
      "A catchy opening line",
      "A panic countdown"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "La bibliothèque universitaire, c’est…",
     "r": [
      [
       "🤫",
       "Mon coin de silence"
      ],
      [
       "🔌",
       "La chasse à la prise"
      ],
      [
       "🥱",
       "Une sieste déguisée"
      ],
      [
       "👀",
       "Les fous rires étouffés"
      ]
     ],
     "relance": "Quel est le meilleur coin de votre campus ?"
    },
    "en": {
     "q": "The university library is…",
     "r": [
      "My quiet corner",
      "The hunt for an outlet",
      "A nap in disguise",
      "Stifled giggles"
     ],
     "relance": "What’s the best spot on your campus?"
    }
   },
   {
    "fr": {
     "q": "Ta première année, tu la décris en…",
     "r": [
      [
       "🎢",
       "Montagnes russes"
      ],
      [
       "🚀",
       "Décollage"
      ],
      [
       "🧭",
       "Exploration"
      ],
      [
       "🐢",
       "Tranquillement, à mon rythme"
      ]
     ],
     "relance": "Le meilleur conseil que vous donneriez à un ou une nouvelle ?"
    },
    "en": {
     "q": "You’d describe your first year as…",
     "r": [
      "A roller coaster",
      "A takeoff",
      "An exploration",
      "Taking it slowly, my pace"
     ],
     "relance": "The best advice you’d give a newcomer?"
    }
   },
   {
    "fr": {
     "q": "Pour te déplacer sur le campus, tu es…",
     "r": [
      [
       "🚲",
       "À vélo"
      ],
      [
       "🛴",
       "En trottinette"
      ],
      [
       "🚶",
       "À pied, tranquille"
      ],
      [
       "🚌",
       "En bus, comme tout le monde"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "To get around campus, you…",
     "r": [
      "Bike",
      "Scooter",
      "Walk, relaxed",
      "Take the bus, like everyone"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le groupe de la promo, c’est…",
     "r": [
      [
       "💬",
       "Trente messages par minute"
      ],
      [
       "🔕",
       "Muet, en silence"
      ],
      [
       "📢",
       "Mon fil d’infos"
      ],
      [
       "🙈",
       "Je lis sans répondre"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The class group chat is…",
     "r": [
      "Thirty messages a minute",
      "Muted, in silence",
      "My news feed",
      "I read but never reply"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Une journée sans cours, tu en profites pour…",
     "r": [
      [
       "🛌",
       "Récupérer du sommeil"
      ],
      [
       "🧺",
       "Faire une lessive"
      ],
      [
       "🎸",
       "Faire ce que j’aime"
      ],
      [
       "📚",
       "Rattraper le programme"
      ]
     ],
     "relance": "Votre activité hors cours préférée ?"
    },
    "en": {
     "q": "A day without classes, you use it to…",
     "r": [
      "Catch up on sleep",
      "Do laundry",
      "Do what I love",
      "Catch up on coursework"
     ],
     "relance": "Your favorite activity outside class?"
    }
   },
   {
    "fr": {
     "q": "Les repas de coloc, c’est…",
     "r": [
      [
       "🍝",
       "Des pâtes en gros"
      ],
      [
       "🛒",
       "Chacun son tour de courses"
      ],
      [
       "👨‍🍳",
       "Un grand dîner collectif"
      ],
      [
       "🍜",
       "Chacun dans son coin"
      ]
     ],
     "relance": "Votre recette d’étudiant imbattable ?"
    },
    "en": {
     "q": "Flatshare meals are…",
     "r": [
      "Pasta in bulk",
      "Taking turns shopping",
      "A big shared dinner",
      "Everyone for themselves"
     ],
     "relance": "Your unbeatable student recipe?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Inventez ensemble le nom d’une asso étudiante complètement absurde, et sa première soirée.",
    "en": "Invent the name of a totally absurd student club together, and its first event."
   },
   {
    "fr": "Chacun explique en vingt secondes une matière qu’il ou elle aime, comme à un enfant de dix ans.",
    "en": "Each explain, in twenty seconds, a subject you like, as if to a ten-year-old."
   },
   {
    "fr": "Imaginez le règlement parfait d’une coloc en trois articles. Votez : adopté ou non.",
    "en": "Imagine the perfect flatshare rules in three articles. Vote: adopted or not."
   },
   {
    "fr": "Faites un quiz éclair : chacun pose trois questions de culture générale à l’autre.",
    "en": "Run a quick quiz: each ask the other three general-knowledge questions."
   },
   {
    "fr": "Mimez chacun un moment de la vie étudiante, sans un son. L’autre doit deviner en vingt secondes.",
    "en": "Each mime a moment of student life, without a sound. The other guesses in twenty seconds."
   },
   {
    "fr": "Trouvez ensemble la meilleure excuse imaginaire pour un devoir pas rendu, puis jouez-la avec sérieux.",
    "en": "Come up with the best made-up excuse for a missed assignment, then act it out straight-faced."
   },
   {
    "fr": "Chacun dit en une phrase le conseil de première année qu’il ou elle aurait aimé recevoir.",
    "en": "Each give, in one sentence, the first-year advice you wish you’d gotten."
   },
   {
    "fr": "Imaginez le menu d’un resto U idéal : une entrée, un plat, un dessert. Donnez-leur des noms chics.",
    "en": "Imagine an ideal campus canteen menu: starter, main, dessert. Give them fancy names."
   }
  ]
 },
 {
  "id": "collegues",
  "em": "💼",
  "nom": {
   "fr": "Collègues",
   "en": "Coworkers",
   "es": "Compañeros",
   "de": "Kollegen",
   "ar": "زملاء العمل"
  },
  "desc": {
   "fr": "Pour souder l’équipe, du lundi matin à la pause café.",
   "en": "To bond the team, from Monday mornings to coffee breaks.",
   "es": "Para unir al equipo, del lunes por la mañana al café.",
   "de": "Fürs Team, vom Montagmorgen bis zur Kaffeepause.",
   "ar": "لتقريب الفريق، من صباح الاثنين إلى استراحة القهوة."
  },
  "questions": [
   {
    "fr": {
     "q": "Lundi matin au bureau, tu…",
     "r": [
      [
       "☕",
       "Café d’abord"
      ],
      [
       "📬",
       "Boîte mail direct"
      ],
      [
       "🗣️",
       "Je raconte mon week-end"
      ],
      [
       "🎧",
       "Casque sur les oreilles"
      ]
     ],
     "relance": "Racontez votre lundi matin type."
    },
    "en": {
     "q": "Monday morning at work, you…",
     "r": [
      "Coffee first",
      "Straight to the inbox",
      "Tell everyone about my weekend",
      "Headphones on"
     ],
     "relance": "Describe your typical Monday morning."
    }
   },
   {
    "fr": {
     "q": "En réunion, tu es plutôt…",
     "r": [
      [
       "🎤",
       "Je parle en premier"
      ],
      [
       "📝",
       "Je prends les notes"
      ],
      [
       "🤐",
       "J’attends la fin"
      ],
      [
       "🪟",
       "Les yeux par la fenêtre"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "In a meeting, you’re more…",
     "r": [
      "First to speak",
      "Always taking notes",
      "Waiting for the end",
      "Staring out the window"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "La pause café, c’est…",
     "r": [
      [
       "☕",
       "Sacré"
      ],
      [
       "🗞️",
       "Le moment des nouvelles"
      ],
      [
       "🍪",
       "Le moment des gâteaux"
      ],
      [
       "⏱️",
       "Cinq minutes chrono"
      ]
     ],
     "relance": "Quel est le meilleur sujet de pause café ?"
    },
    "en": {
     "q": "The coffee break is…",
     "r": [
      "Sacred",
      "News time",
      "Cookie time",
      "Five minutes, tops"
     ],
     "relance": "What’s the best coffee break topic?"
    }
   },
   {
    "fr": {
     "q": "Ton déjeuner idéal au travail ?",
     "r": [
      [
       "🥪",
       "Sandwich devant l’écran"
      ],
      [
       "🍱",
       "Gamelle maison"
      ],
      [
       "🍽️",
       "Resto avec l’équipe"
      ],
      [
       "🌳",
       "Dehors au soleil"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your ideal lunch at work?",
     "r": [
      "Sandwich at the screen",
      "Homemade lunchbox",
      "Restaurant with the team",
      "Outside in the sun"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Un mail arrive à 18 h 55. Tu…",
     "r": [
      [
       "⚡",
       "Réponds tout de suite"
      ],
      [
       "🌅",
       "Réponds demain"
      ],
      [
       "🙈",
       "Fais semblant de rien"
      ],
      [
       "📌",
       "Le classes « à traiter »"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "An email lands at 6:55 pm. You…",
     "r": [
      "Answer right away",
      "Answer tomorrow",
      "Pretend you didn’t see it",
      "File it under “to do”"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Ton bureau est…",
     "r": [
      [
       "✨",
       "Impeccable"
      ],
      [
       "🌀",
       "Un chaos organisé"
      ],
      [
       "🪴",
       "Plein de plantes"
      ],
      [
       "🧸",
       "Plein de petits objets"
      ]
     ],
     "relance": "Quel est l’objet le plus étonnant posé dessus ?"
    },
    "en": {
     "q": "Your desk is…",
     "r": [
      "Spotless",
      "Organized chaos",
      "Full of plants",
      "Full of little knick-knacks"
     ],
     "relance": "What’s the most surprising thing on it?"
    }
   },
   {
    "fr": {
     "q": "Travailler à distance, c’est…",
     "r": [
      [
       "🛋️",
       "Le canapé"
      ],
      [
       "🏡",
       "Un vrai bureau chez moi"
      ],
      [
       "☕",
       "Le café du coin"
      ],
      [
       "🏢",
       "Non merci, au bureau"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Working remotely means…",
     "r": [
      "The couch",
      "A real home office",
      "The corner café",
      "No thanks, the office for me"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "En visio, ta caméra est…",
     "r": [
      [
       "📷",
       "Toujours allumée"
      ],
      [
       "🙈",
       "Éteinte"
      ],
      [
       "🖼️",
       "Derrière un fond flou"
      ],
      [
       "🐶",
       "Visitée par un animal"
      ]
     ],
     "relance": "Quelle est la scène la plus drôle vue en visio ?"
    },
    "en": {
     "q": "In a video call, your camera is…",
     "r": [
      "Always on",
      "Off",
      "Behind a blurred background",
      "Visited by a pet"
     ],
     "relance": "What’s the funniest thing you’ve seen on a video call?"
    }
   },
   {
    "fr": {
     "q": "Ton outil indispensable ?",
     "r": [
      [
       "📅",
       "Mon agenda"
      ],
      [
       "📋",
       "Ma to-do list"
      ],
      [
       "🎧",
       "Mes écouteurs"
      ],
      [
       "🟨",
       "Mes post-it"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your must-have tool?",
     "r": [
      "My calendar",
      "My to-do list",
      "My earbuds",
      "My sticky notes"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le projet de rêve ?",
     "r": [
      [
       "🚀",
       "Lancer un produit"
      ],
      [
       "🎨",
       "Créer un truc beau"
      ],
      [
       "🧩",
       "Résoudre un casse-tête"
      ],
      [
       "🌍",
       "Bosser en voyageant"
      ]
     ],
     "relance": "Sur quel projet aimeriez-vous travailler ensemble ?"
    },
    "en": {
     "q": "Dream project?",
     "r": [
      "Launching a product",
      "Creating something beautiful",
      "Solving a puzzle",
      "Working while traveling"
     ],
     "relance": "What project would you like to work on together?"
    }
   },
   {
    "fr": {
     "q": "Un autre métier pour une journée ?",
     "r": [
      [
       "🎬",
       "Tourner des films"
      ],
      [
       "🧑‍🍳",
       "Cuisiner en grand resto"
      ],
      [
       "🐘",
       "Soigner des animaux"
      ],
      [
       "🎸",
       "Vivre de sa musique"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "A different job for a day?",
     "r": [
      "Making movies",
      "Cooking in a fancy restaurant",
      "Caring for animals",
      "Living off your music"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Une présentation à faire demain. Tu…",
     "r": [
      [
       "📖",
       "Répètes encore et encore"
      ],
      [
       "🎲",
       "Improvises"
      ],
      [
       "🎨",
       "Peaufines les diapos"
      ],
      [
       "😰",
       "Stresses en silence"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "A presentation is due tomorrow. You…",
     "r": [
      "Rehearse over and over",
      "Wing it",
      "Polish the slides",
      "Stress quietly"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le bruit de bureau qui te fait sourire ?",
     "r": [
      [
       "⌨️",
       "Le clavier qui crépite"
      ],
      [
       "🖨️",
       "L’imprimante qui se coince"
      ],
      [
       "🔔",
       "Les notifications"
      ],
      [
       "😂",
       "Un éclat de rire d’équipe"
      ]
     ],
     "relance": "Quel bruit est le plus agaçant ? Imitez-le."
    },
    "en": {
     "q": "The office sound that makes you smile?",
     "r": [
      "Keys clattering",
      "The printer jamming",
      "Notifications",
      "The team bursting out laughing"
     ],
     "relance": "Which sound is the most annoying? Imitate it."
    }
   },
   {
    "fr": {
     "q": "Le petit extra du bureau ?",
     "r": [
      [
       "🍫",
       "Le tiroir à bonbons"
      ],
      [
       "🪑",
       "La chaise parfaite"
      ],
      [
       "🌞",
       "La place près de la fenêtre"
      ],
      [
       "🔌",
       "La prise qui marche"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The little office perk?",
     "r": [
      "The candy drawer",
      "The perfect chair",
      "The spot by the window",
      "The outlet that works"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Pour trouver une idée, tu…",
     "r": [
      [
       "🌩️",
       "Brainstormes à voix haute"
      ],
      [
       "📓",
       "Prends un carnet et du silence"
      ],
      [
       "🚶",
       "Marches un peu"
      ],
      [
       "🚿",
       "Attends la douche"
      ]
     ],
     "relance": "D’où vient votre meilleure idée récente ?"
    },
    "en": {
     "q": "To come up with an idea, you…",
     "r": [
      "Brainstorm out loud",
      "Grab a notebook and silence",
      "Go for a walk",
      "Wait for the shower"
     ],
     "relance": "Where did your best recent idea come from?"
    }
   },
   {
    "fr": {
     "q": "L’ambiance d’équipe idéale ?",
     "r": [
      [
       "😂",
       "Blagues toute la journée"
      ],
      [
       "🎯",
       "Concentration totale"
      ],
      [
       "🎶",
       "Musique de fond"
      ],
      [
       "🤝",
       "Entraide"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The ideal team vibe?",
     "r": [
      "Jokes all day",
      "Total focus",
      "Background music",
      "Teamwork"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Vendredi, 16 h. Tu…",
     "r": [
      [
       "🍻",
       "Prépares l’afterwork"
      ],
      [
       "📬",
       "Vides ta boîte mail"
      ],
      [
       "🏃",
       "Es déjà dehors"
      ],
      [
       "🏖️",
       "Rêves du week-end"
      ]
     ],
     "relance": "Quel est le meilleur pot d’équipe dont vous vous souvenez ?"
    },
    "en": {
     "q": "Friday, 4 pm. You…",
     "r": [
      "Plan the after-work drinks",
      "Clear your inbox",
      "Are already gone",
      "Daydream about the weekend"
     ],
     "relance": "What’s the best team get-together you remember?"
    }
   },
   {
    "fr": {
     "q": "Un jeu d’équipe ?",
     "r": [
      [
       "🧩",
       "Escape game"
      ],
      [
       "🎳",
       "Bowling"
      ],
      [
       "🍳",
       "Concours de cuisine"
      ],
      [
       "🧠",
       "Quiz"
      ]
     ],
     "relance": "Choisissez le prochain jeu d’équipe. Vote à main levée."
    },
    "en": {
     "q": "A team game?",
     "r": [
      "Escape room",
      "Bowling",
      "Cooking contest",
      "Quiz"
     ],
     "relance": "Pick the next team game. Vote by raising hands."
    }
   },
   {
    "fr": {
     "q": "Ton premier jour dans une équipe, tu…",
     "r": [
      [
       "🙋",
       "Te présentes à tous"
      ],
      [
       "👀",
       "Observes"
      ],
      [
       "🗺️",
       "Cherches la machine à café"
      ],
      [
       "📝",
       "Notes tout"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your first day with a new team, you…",
     "r": [
      "Introduce yourself to everyone",
      "Observe",
      "Look for the coffee machine",
      "Write everything down"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Pour aller travailler, tu pars…",
     "r": [
      [
       "🚲",
       "À vélo"
      ],
      [
       "🚇",
       "En transports"
      ],
      [
       "🚗",
       "En voiture"
      ],
      [
       "🚶",
       "À pied"
      ]
     ],
     "relance": "Racontez votre trajet le plus long ou le plus drôle."
    },
    "en": {
     "q": "To get to work, you go…",
     "r": [
      "By bike",
      "By public transport",
      "By car",
      "On foot"
     ],
     "relance": "Tell the story of your longest or funniest commute."
    }
   }
  ],
  "defis": [
   {
    "fr": "Mimez chacun une réunion qui s’éternise, en 20 secondes.",
    "en": "Each mime a meeting that drags on, in 20 seconds."
   },
   {
    "fr": "Inventez une règle d’or absurde pour l’open space.",
    "en": "Invent an absurd golden rule for the open space."
   },
   {
    "fr": "Choisissez le nom d’une équipe imaginaire et son slogan.",
    "en": "Pick the name and slogan of an imaginary team."
   },
   {
    "fr": "Pitchez en 20 secondes un projet complètement fou. L’autre pose une question, puis dit oui ou non.",
    "en": "Pitch a totally crazy project in 20 seconds. The other asks one question, then says yes or no."
   },
   {
    "fr": "Décrivez chacun votre travail à un enfant de cinq ans, en une phrase.",
    "en": "Each describe your job to a five-year-old, in one sentence."
   },
   {
    "fr": "Dites à voix haute le pire message d’absence automatique imaginable.",
    "en": "Read out loud the worst out-of-office message imaginable."
   },
   {
    "fr": "Inventez un nouveau jour de la semaine et ce qu’on y fait au travail.",
    "en": "Invent a new day of the week and what people do at work on it."
   },
   {
    "fr": "Trouvez en une minute dix idées pour égayer le lundi matin.",
    "en": "Come up with ten ideas to brighten Monday mornings in one minute."
   }
  ]
 },
 {
  "id": "famille",
  "em": "🏡",
  "nom": {
   "fr": "Famille",
   "en": "Family",
   "es": "Familia",
   "de": "Familie",
   "ar": "العائلة"
  },
  "desc": {
   "fr": "De mamie aux ados : traditions, souvenirs et fous rires.",
   "en": "From grandparents to teens: traditions, memories and laughs.",
   "es": "De los abuelos a los adolescentes: tradiciones y risas.",
   "de": "Von Oma bis zu den Teens: Traditionen und Lacher.",
   "ar": "من الأجداد إلى المراهقين: تقاليد وذكريات وضحك."
  },
  "questions": [
   {
    "fr": {
     "q": "Le repas de fête, c’est…",
     "r": [
      [
       "🍗",
       "Le plat principal"
      ],
      [
       "🍰",
       "Le dessert"
      ],
      [
       "🥜",
       "Les entrées qui n’en finissent pas"
      ],
      [
       "🗣️",
       "Les discussions à table"
      ]
     ],
     "relance": "Quel plat doit absolument être sur la table ?"
    },
    "en": {
     "q": "The festive meal is…",
     "r": [
      "The main course",
      "The dessert",
      "Starters that never end",
      "The table talk"
     ],
     "relance": "Which dish absolutely has to be on the table?"
    }
   },
   {
    "fr": {
     "q": "Un dimanche en famille ?",
     "r": [
      [
       "🍲",
       "Gros repas"
      ],
      [
       "🎲",
       "Jeux de société"
      ],
      [
       "🚶",
       "Balade"
      ],
      [
       "🛋️",
       "Film tous ensemble"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "A Sunday with the family?",
     "r": [
      "Big meal",
      "Board games",
      "A walk",
      "A movie all together"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le plat de la maison qu’on réclame ?",
     "r": [
      [
       "🎂",
       "Le gâteau maison"
      ],
      [
       "🍲",
       "Le plat mijoté"
      ],
      [
       "🥞",
       "Les crêpes"
      ],
      [
       "🍟",
       "Les frites maison"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The home-cooked dish everyone begs for?",
     "r": [
      "The homemade cake",
      "The slow-cooked stew",
      "Crêpes",
      "Homemade fries"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Les vacances en famille, c’était…",
     "r": [
      [
       "🏖️",
       "La mer"
      ],
      [
       "⛺",
       "Le camping"
      ],
      [
       "🏔️",
       "La montagne"
      ],
      [
       "🚗",
       "Un long trajet en voiture"
      ]
     ],
     "relance": "Racontez un souvenir de vacances qui fait encore rire."
    },
    "en": {
     "q": "Family vacations were…",
     "r": [
      "The seaside",
      "Camping",
      "The mountains",
      "A long car ride"
     ],
     "relance": "Tell a vacation memory that still makes you laugh."
    }
   },
   {
    "fr": {
     "q": "Enfant, tu jouais surtout…",
     "r": [
      [
       "🧱",
       "Aux constructions"
      ],
      [
       "🪁",
       "Dehors"
      ],
      [
       "🎭",
       "À se déguiser"
      ],
      [
       "🃏",
       "Aux cartes"
      ]
     ],
     "relance": "Montrez un jeu d’enfance à l’autre, en vrai."
    },
    "en": {
     "q": "As a kid, you mostly played…",
     "r": [
      "With building blocks",
      "Outside",
      "Dress-up",
      "Cards"
     ],
     "relance": "Show each other a childhood game, for real."
    }
   },
   {
    "fr": {
     "q": "Pour écouter de la musique, avant ou maintenant ?",
     "r": [
      [
       "📻",
       "La radio"
      ],
      [
       "💿",
       "Disques et CD"
      ],
      [
       "📱",
       "Une appli"
      ],
      [
       "🎤",
       "On chante tous ensemble"
      ]
     ],
     "relance": "Quelle chanson toute la famille connaît par cœur ?"
    },
    "en": {
     "q": "To listen to music, then or now?",
     "r": [
      "The radio",
      "Records and CDs",
      "An app",
      "We all sing together"
     ],
     "relance": "Which song does the whole family know by heart?"
    }
   },
   {
    "fr": {
     "q": "Pour garder le contact, tu préfères…",
     "r": [
      [
       "📞",
       "Un appel"
      ],
      [
       "💌",
       "Une carte ou une lettre"
      ],
      [
       "💬",
       "Des messages"
      ],
      [
       "🏠",
       "Passer en vrai"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "To stay in touch, you prefer…",
     "r": [
      "A phone call",
      "A card or letter",
      "Messages",
      "Dropping by in person"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le jeu de société de la famille ?",
     "r": [
      [
       "🎲",
       "Un jeu de plateau"
      ],
      [
       "🃏",
       "Les cartes"
      ],
      [
       "🧠",
       "Un quiz"
      ],
      [
       "🤸",
       "Le mime"
      ]
     ],
     "relance": "Qui est le moins bon perdant ? Dites-le avec tendresse."
    },
    "en": {
     "q": "The family board game?",
     "r": [
      "A board game",
      "Cards",
      "A quiz",
      "Charades"
     ],
     "relance": "Who’s the worst loser? Say it with love."
    }
   },
   {
    "fr": {
     "q": "Chez vous, une fête réussie, c’est…",
     "r": [
      [
       "🎂",
       "Un gâteau et des bougies"
      ],
      [
       "🎈",
       "Des ballons partout"
      ],
      [
       "🎁",
       "Les cadeaux"
      ],
      [
       "🎶",
       "Musique et danse"
      ]
     ],
     "relance": "Quelle fête de famille reste la plus mémorable ?"
    },
    "en": {
     "q": "At your place, a great party means…",
     "r": [
      "Cake and candles",
      "Balloons everywhere",
      "Gifts",
      "Music and dancing"
     ],
     "relance": "Which family party is the most memorable?"
    }
   },
   {
    "fr": {
     "q": "Le petit-déjeuner de la maison ?",
     "r": [
      [
       "🥐",
       "Des viennoiseries"
      ],
      [
       "🥣",
       "Des céréales"
      ],
      [
       "🍞",
       "Des tartines"
      ],
      [
       "☕",
       "Juste un café"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Breakfast at home?",
     "r": [
      "Pastries",
      "Cereal",
      "Toast and spread",
      "Just a coffee"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Dans la voiture, le trajet, c’est…",
     "r": [
      [
       "🎶",
       "Musique à fond"
      ],
      [
       "🗺️",
       "Le copilote qui guide"
      ],
      [
       "😴",
       "Tout le monde dort"
      ],
      [
       "🍬",
       "Les bonbons"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "In the car, the ride is…",
     "r": [
      "Music blasting",
      "The co-pilot giving directions",
      "Everybody asleep",
      "Candy"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Sur la photo de famille, tu es…",
     "r": [
      [
       "📸",
       "Derrière l’appareil"
      ],
      [
       "😜",
       "Qui fait des grimaces"
      ],
      [
       "🙂",
       "Qui sourit sagement"
      ],
      [
       "🏃",
       "Introuvable"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "In the family photo, you’re…",
     "r": [
      "Behind the camera",
      "The one making faces",
      "The one smiling nicely",
      "Nowhere to be found"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "La pièce préférée de la maison ?",
     "r": [
      [
       "🍳",
       "La cuisine"
      ],
      [
       "🛋️",
       "Le salon"
      ],
      [
       "🌳",
       "Le jardin"
      ],
      [
       "🛏️",
       "Ma chambre"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "Your favorite room in the house?",
     "r": [
      "The kitchen",
      "The living room",
      "The garden",
      "My bedroom"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "À table, la règle de la maison ?",
     "r": [
      [
       "📵",
       "Pas de téléphone"
      ],
      [
       "🍽️",
       "Finir son assiette"
      ],
      [
       "🪑",
       "Chacun sa place"
      ],
      [
       "🗣️",
       "Chacun raconte sa journée"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "At the table, the house rule?",
     "r": [
      "No phones",
      "Finish your plate",
      "Everyone has a seat",
      "Everyone shares their day"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Dans la famille, ton rôle ?",
     "r": [
      [
       "😂",
       "Je fais rire"
      ],
      [
       "📋",
       "J’organise tout"
      ],
      [
       "🍳",
       "Je cuisine"
      ],
      [
       "😴",
       "Je dors partout"
      ]
     ],
     "relance": "Et l’autre, quel rôle ? Devinez-le chacun."
    },
    "en": {
     "q": "In the family, you’re the one who…",
     "r": [
      "Makes everyone laugh",
      "Organizes everything",
      "Cooks",
      "Falls asleep anywhere"
     ],
     "relance": "And the other person, what role? Guess for each other."
    }
   },
   {
    "fr": {
     "q": "Chez un grand-parent ou un proche plus âgé, tu adorais…",
     "r": [
      [
       "🍪",
       "Les gâteaux"
      ],
      [
       "📖",
       "Les histoires"
      ],
      [
       "🧶",
       "Les trucs faits main"
      ],
      [
       "🎴",
       "Les parties de cartes"
      ]
     ],
     "relance": "Racontez une histoire qu’on vous racontait."
    },
    "en": {
     "q": "At a grandparent’s or an older relative’s, you loved…",
     "r": [
      "The baking",
      "The stories",
      "The handmade things",
      "The card games"
     ],
     "relance": "Tell a story you were told as a kid."
    }
   },
   {
    "fr": {
     "q": "Un week-end à la maison, tu…",
     "r": [
      [
       "🛠️",
       "Bricoles"
      ],
      [
       "🌱",
       "Jardines"
      ],
      [
       "🎵",
       "Fais le ménage en musique"
      ],
      [
       "🧁",
       "Prépares un gâteau"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "A weekend at home, you…",
     "r": [
      "Tinker and fix things",
      "Garden",
      "Clean to music",
      "Bake a cake"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "Le plus beau d’autrefois ?",
     "r": [
      [
       "📺",
       "Les dessins animés d’avant"
      ],
      [
       "✉️",
       "Les lettres"
      ],
      [
       "🛴",
       "Jouer dehors sans écran"
      ],
      [
       "🍬",
       "Les bonbons d’avant"
      ]
     ],
     "relance": "Qu’est-ce qui était mieux avant ? Et mieux maintenant ?"
    },
    "en": {
     "q": "The best thing about the old days?",
     "r": [
      "Cartoons from back then",
      "Letters",
      "Playing outside, no screens",
      "The candy from back then"
     ],
     "relance": "What was better before? And what’s better now?"
    }
   },
   {
    "fr": {
     "q": "Le cadeau parfait d’un proche ?",
     "r": [
      [
       "🎁",
       "Une vraie surprise"
      ],
      [
       "💌",
       "Un mot écrit à la main"
      ],
      [
       "🍰",
       "Un repas fait pour moi"
      ],
      [
       "🎟️",
       "Une sortie ensemble"
      ]
     ],
     "relance": null
    },
    "en": {
     "q": "The perfect gift from a loved one?",
     "r": [
      "A real surprise",
      "A handwritten note",
      "A meal made for me",
      "An outing together"
     ],
     "relance": null
    }
   },
   {
    "fr": {
     "q": "À la grande réunion de famille, tu…",
     "r": [
      [
       "🍽️",
       "Aides en cuisine"
      ],
      [
       "🧒",
       "Joues avec les enfants"
      ],
      [
       "🗣️",
       "Racontes des histoires"
      ],
      [
       "🛋️",
       "Dors sur le canapé"
      ]
     ],
     "relance": "Qui part le premier ? Qui part le dernier ?"
    },
    "en": {
     "q": "At the big family gathering, you…",
     "r": [
      "Help in the kitchen",
      "Play with the kids",
      "Tell stories",
      "Nap on the couch"
     ],
     "relance": "Who leaves first? Who leaves last?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Chacun raconte un souvenir d’enfance en 20 secondes. Les autres devinent l’âge.",
    "en": "Each tell a childhood memory in 20 seconds. The others guess the age."
   },
   {
    "fr": "Montrez un geste ou une expression que vous tenez de la famille.",
    "en": "Show a gesture or expression you got from your family."
   },
   {
    "fr": "Imitez gentiment quelqu’un de la famille. Les autres devinent qui.",
    "en": "Kindly imitate someone in the family. The others guess who."
   },
   {
    "fr": "Apprenez un jeu d’enfance aux autres. Règles en 30 secondes.",
    "en": "Teach the others a childhood game. Rules in 30 seconds."
   },
   {
    "fr": "Chantez ensemble le refrain d’une chanson d’une autre génération.",
    "en": "Sing the chorus of a song from another generation together."
   },
   {
    "fr": "Inventez la devise de la famille, en une phrase.",
    "en": "Invent the family motto, in one sentence."
   },
   {
    "fr": "Expliquez un objet d’autrefois sans dire son nom. Les autres devinent.",
    "en": "Explain an object from the old days without saying its name. The others guess."
   },
   {
    "fr": "Inventez chacun un proverbe de famille complètement absurde.",
    "en": "Each invent a completely absurd family proverb."
   }
  ]
 },
 {
  "id": "voyage",
  "em": "✈️",
  "nom": {
   "fr": "Voyage",
   "en": "Travel",
   "es": "Viaje",
   "de": "Reisen",
   "ar": "سفر"
  },
  "desc": {
   "fr": "Valises, aéroports et souvenirs de route, pour partir sans bouger.",
   "en": "Suitcases, airports and road memories: travel without leaving your seat.",
   "es": "Maletas, aeropuertos y recuerdos de viaje para viajar sin moverse.",
   "de": "Koffer, Flughäfen und Reiseerinnerungen – verreisen, ohne sich zu bewegen.",
   "ar": "حقائب ومطارات وذكريات الطريق، لنسافر دون أن نتحرك."
  },
  "questions": [
   {
    "fr": {
     "q": "Dans ta valise, il y a toujours trop de…",
     "r": [
      [
       "👕",
       "Vêtements « au cas où »"
      ],
      [
       "👟",
       "Chaussures"
      ],
      [
       "🔌",
       "Câbles et chargeurs"
      ],
      [
       "📚",
       "Livres que je ne lirai pas"
      ]
     ],
     "relance": "Racontez l’objet le plus inutile que vous ayez emporté en voyage."
    },
    "en": {
     "q": "Your suitcase always has too many…",
     "r": [
      "Just-in-case clothes",
      "Shoes",
      "Cables and chargers",
      "Books I won’t read"
     ],
     "relance": "Tell each other about the most useless thing you’ve ever packed."
    }
   },
   {
    "fr": {
     "q": "Ta place préférée dans l’avion ?",
     "r": [
      [
       "🪟",
       "Côté hublot"
      ],
      [
       "🚶",
       "Côté couloir"
      ],
      [
       "🛫",
       "Au plus près de la sortie"
      ],
      [
       "😴",
       "Peu importe, je dors avant le décollage"
      ]
     ],
     "relance": "Votre voisin ou voisine de voyage le plus mémorable ?"
    },
    "en": {
     "q": "Your favourite seat on a plane?",
     "r": [
      "Window",
      "Aisle",
      "As close to the exit as possible",
      "Don’t care, I’m asleep before takeoff"
     ],
     "relance": "Your most memorable travel neighbour?"
    }
   },
   {
    "fr": {
     "q": "À l’aéroport, tu arrives…",
     "r": [
      [
       "⏰",
       "Trois heures avant"
      ],
      [
       "🏃",
       "En courant vers la porte"
      ],
      [
       "☕",
       "Pile à temps pour un café"
      ],
      [
       "🧘",
       "Juste à l’heure, zen"
      ]
     ],
     "relance": "Racontez la fois où vous avez failli rater un départ."
    },
    "en": {
     "q": "You get to the airport…",
     "r": [
      "Three hours early",
      "Sprinting to the gate",
      "Just in time for a coffee",
      "Right on time, totally calm"
     ],
     "relance": "Tell the story of a time you nearly missed a departure."
    }
   },
   {
    "fr": {
     "q": "Dans une ville inconnue, tu commences par…",
     "r": [
      [
       "🗺️",
       "Te perdre exprès"
      ],
      [
       "🏛️",
       "Le monument célèbre"
      ],
      [
       "🥐",
       "La boulangerie du coin"
      ],
      [
       "🔭",
       "Monter tout en haut pour voir la ville"
      ]
     ],
     "relance": "La ville qui vous a surpris dès la première heure ?"
    },
    "en": {
     "q": "In a new city, you start by…",
     "r": [
      "Getting lost on purpose",
      "Seeing the famous landmark",
      "Finding the local bakery",
      "Going up high to see the whole city"
     ],
     "relance": "Which city surprised you within the first hour?"
    }
   },
   {
    "fr": {
     "q": "Ton moyen de transport de voyage préféré ?",
     "r": [
      [
       "🚆",
       "Le train"
      ],
      [
       "🚗",
       "La voiture"
      ],
      [
       "🚲",
       "Le vélo"
      ],
      [
       "⛵",
       "Le bateau"
      ]
     ],
     "relance": "Le plus beau trajet que vous ayez fait ?"
    },
    "en": {
     "q": "Your favourite way to travel?",
     "r": [
      "Train",
      "Car",
      "Bike",
      "Boat"
     ],
     "relance": "The most beautiful journey you’ve ever made?"
    }
   },
   {
    "fr": {
     "q": "Le souvenir que tu ramènes ?",
     "r": [
      [
       "🧲",
       "Un magnet pour le frigo"
      ],
      [
       "🍫",
       "Une spécialité à manger"
      ],
      [
       "📸",
       "Juste des photos"
      ],
      [
       "🐚",
       "Un caillou ou un coquillage"
      ]
     ],
     "relance": "Décrivez le souvenir le plus étrange qui traîne chez vous."
    },
    "en": {
     "q": "The souvenir you bring back?",
     "r": [
      "A fridge magnet",
      "A local treat",
      "Just photos",
      "A pebble or a shell"
     ],
     "relance": "Describe the strangest souvenir lying around your home."
    }
   },
   {
    "fr": {
     "q": "Ton hébergement idéal ?",
     "r": [
      [
       "🏨",
       "Un hôtel avec petit-déjeuner"
      ],
      [
       "⛺",
       "Une tente sous les étoiles"
      ],
      [
       "🏡",
       "Une chambre chez l’habitant"
      ],
      [
       "🌳",
       "Une cabane dans les arbres"
      ]
     ],
     "relance": "Le logement le plus insolite où vous ayez dormi ?"
    },
    "en": {
     "q": "Your ideal place to stay?",
     "r": [
      "A hotel with breakfast",
      "A tent under the stars",
      "A room in a local’s home",
      "A treehouse"
     ],
     "relance": "The quirkiest place you’ve ever slept?"
    }
   },
   {
    "fr": {
     "q": "La langue du pays, tu…",
     "r": [
      [
       "📖",
       "L’apprends un peu avant de partir"
      ],
      [
       "👐",
       "Parles avec les mains"
      ],
      [
       "📱",
       "Sors l’appli de traduction"
      ],
      [
       "🗣️",
       "Parles français, mais plus fort"
      ]
     ],
     "relance": "Apprenez-vous un mot dans une langue que l’autre ne connaît pas."
    },
    "en": {
     "q": "The local language? You…",
     "r": [
      "Learn a bit before you go",
      "Talk with your hands",
      "Pull out the translation app",
      "Just speak your own language, louder"
     ],
     "relance": "Teach each other a word in a language the other doesn’t know."
    }
   },
   {
    "fr": {
     "q": "Tes photos de voyage, c’est…",
     "r": [
      [
       "🤳",
       "Moi devant tout"
      ],
      [
       "🌄",
       "Des paysages sans personne"
      ],
      [
       "🍽️",
       "Tous les repas"
      ],
      [
       "🙈",
       "Trois photos floues"
      ]
     ],
     "relance": "Décrivez la photo de voyage dont vous êtes le plus fier ou fière."
    },
    "en": {
     "q": "Your travel photos are…",
     "r": [
      "Me in front of everything",
      "Landscapes with nobody in them",
      "Every single meal",
      "Three blurry shots"
     ],
     "relance": "Describe the travel photo you’re proudest of."
    }
   },
   {
    "fr": {
     "q": "Un voyage de rêve, sans aucune limite ?",
     "r": [
      [
       "🌌",
       "Voir des aurores boréales"
      ],
      [
       "🐘",
       "Un safari"
      ],
      [
       "🗾",
       "Le Japon de long en large"
      ],
      [
       "🚂",
       "Un grand train à travers un continent"
      ]
     ],
     "relance": "Avec qui partiriez-vous, et pourquoi ?"
    },
    "en": {
     "q": "A dream trip, no limits?",
     "r": [
      "See the northern lights",
      "Go on safari",
      "Japan from end to end",
      "A long train ride across a continent"
     ],
     "relance": "Who would you take, and why?"
    }
   },
   {
    "fr": {
     "q": "Ton rôle dans un voyage entre amis ?",
     "r": [
      [
       "🧭",
       "Le GPS humain"
      ],
      [
       "📷",
       "Le photographe officiel"
      ],
      [
       "🍴",
       "Celui qui trouve où manger"
      ],
      [
       "💤",
       "Celui qui dort dans la voiture"
      ]
     ],
     "relance": "Qui est le pire compagnon de voyage de votre entourage ? Gentiment."
    },
    "en": {
     "q": "Your role on a trip with friends?",
     "r": [
      "The human GPS",
      "The official photographer",
      "The one who finds where to eat",
      "The one asleep in the car"
     ],
     "relance": "Who’s the worst travel buddy you know? Kindly, please."
    }
   },
   {
    "fr": {
     "q": "Le pire, en voyage ?",
     "r": [
      [
       "🧳",
       "Une valise perdue"
      ],
      [
       "🦟",
       "Les moustiques"
      ],
      [
       "🕐",
       "Le décalage horaire"
      ],
      [
       "🌧️",
       "Une semaine de pluie"
      ]
     ],
     "relance": "Racontez votre galère de voyage la plus drôle."
    },
    "en": {
     "q": "The worst thing on a trip?",
     "r": [
      "A lost suitcase",
      "Mosquitoes",
      "Jet lag",
      "A week of rain"
     ],
     "relance": "Share your funniest travel disaster."
    }
   },
   {
    "fr": {
     "q": "En arrivant à l’hôtel, ton premier réflexe ?",
     "r": [
      [
       "🛏️",
       "Tester le lit"
      ],
      [
       "🪟",
       "Regarder la vue"
      ],
      [
       "📶",
       "Chercher le Wi-Fi"
      ],
      [
       "🗄️",
       "Tout ranger dans les placards"
      ]
     ],
     "relance": "L’hôtel le plus mémorable, en bien ou en drôle ?"
    },
    "en": {
     "q": "First thing you do in a hotel room?",
     "r": [
      "Test the bed",
      "Check the view",
      "Find the Wi-Fi",
      "Unpack everything into drawers"
     ],
     "relance": "Your most memorable hotel, for good or funny reasons?"
    }
   },
   {
    "fr": {
     "q": "En vacances, tu préfères…",
     "r": [
      [
       "🏃",
       "Un programme chargé"
      ],
      [
       "🐢",
       "Ne rien faire du tout"
      ],
      [
       "⚖️",
       "Visites le matin, sieste l’après-midi"
      ],
      [
       "🎲",
       "Décider chaque jour au hasard"
      ]
     ],
     "relance": "Racontez votre journée de vacances parfaite, heure par heure."
    },
    "en": {
     "q": "On holiday, you prefer…",
     "r": [
      "A packed schedule",
      "Doing absolutely nothing",
      "Sights in the morning, nap in the afternoon",
      "Deciding each day at random"
     ],
     "relance": "Walk each other through your perfect holiday day, hour by hour."
    }
   },
   {
    "fr": {
     "q": "Pendant un long trajet, tu…",
     "r": [
      [
       "🎧",
       "Musique et paysage"
      ],
      [
       "🎬",
       "Enchaînes les films"
      ],
      [
       "💬",
       "Discutes avec ton voisin"
      ],
      [
       "📓",
       "Écris ou dessines"
      ]
     ],
     "relance": "Le trajet le plus long que vous ayez fait ?"
    },
    "en": {
     "q": "On a long journey, you…",
     "r": [
      "Music and the view",
      "Watch film after film",
      "Chat with the person next to you",
      "Write or doodle"
     ],
     "relance": "The longest journey you’ve ever made?"
    }
   },
   {
    "fr": {
     "q": "Ta prochaine destination, tu la choisis…",
     "r": [
      [
       "📍",
       "En pointant une carte au hasard"
      ],
      [
       "🖼️",
       "Grâce à une photo vue en ligne"
      ],
      [
       "👂",
       "Sur le conseil d’un ami"
      ],
      [
       "🔁",
       "Je retourne là où j’ai aimé"
      ]
     ],
     "relance": "Comment avez-vous choisi votre dernier voyage ?"
    },
    "en": {
     "q": "You pick your next destination…",
     "r": [
      "By pointing at a map at random",
      "From a photo you saw online",
      "On a friend’s tip",
      "I go back where I loved it"
     ],
     "relance": "How did you choose your last trip?"
    }
   },
   {
    "fr": {
     "q": "Le paysage qui te fait le plus d’effet ?",
     "r": [
      [
       "🌋",
       "Un volcan"
      ],
      [
       "🏜️",
       "Le désert"
      ],
      [
       "🌊",
       "L’océan à perte de vue"
      ],
      [
       "🏞️",
       "Un lac de montagne"
      ]
     ],
     "relance": "Le plus beau paysage que vous ayez vu de vos yeux ?"
    },
    "en": {
     "q": "The landscape that gets you most?",
     "r": [
      "A volcano",
      "The desert",
      "Ocean as far as the eye can see",
      "A mountain lake"
     ],
     "relance": "The most beautiful view you’ve seen with your own eyes?"
    }
   },
   {
    "fr": {
     "q": "Ton kit de survie en voyage ?",
     "r": [
      [
       "🔋",
       "Une batterie externe"
      ],
      [
       "🧴",
       "De la crème solaire"
      ],
      [
       "🍬",
       "Des bonbons"
      ],
      [
       "🧣",
       "Un gros pull pour l’avion"
      ]
     ],
     "relance": "L’objet qui vous a déjà sauvé la mise loin de chez vous ?"
    },
    "en": {
     "q": "Your travel survival kit?",
     "r": [
      "A power bank",
      "Sunscreen",
      "Sweets",
      "A big jumper for the plane"
     ],
     "relance": "The thing that once saved the day far from home?"
    }
   },
   {
    "fr": {
     "q": "Voyager en solo ?",
     "r": [
      [
       "🙋",
       "J’adore"
      ],
      [
       "🤝",
       "Jamais sans quelqu’un"
      ],
      [
       "🤔",
       "Un jour, peut-être"
      ],
      [
       "👯",
       "Seul au départ, en bande à l’arrivée"
      ]
     ],
     "relance": "Où partiriez-vous en solo, dès demain ?"
    },
    "en": {
     "q": "Travelling solo?",
     "r": [
      "Love it",
      "Never without someone",
      "Someday, maybe",
      "Leave alone, come back with a crew"
     ],
     "relance": "Where would you go on your own, tomorrow?"
    }
   },
   {
    "fr": {
     "q": "Le dernier jour des vacances, tu…",
     "r": [
      [
       "😢",
       "Es triste dès le réveil"
      ],
      [
       "📸",
       "Prends les dernières photos"
      ],
      [
       "🗓️",
       "Prévois déjà le prochain voyage"
      ],
      [
       "🏠",
       "Es content de rentrer"
      ]
     ],
     "relance": "Qu’est-ce qui vous manque le plus de chez vous quand vous partez ?"
    },
    "en": {
     "q": "On the last day of a holiday, you…",
     "r": [
      "Feel sad as soon as you wake up",
      "Take the last photos",
      "Already plan the next trip",
      "Are happy to go home"
     ],
     "relance": "What do you miss most about home when you’re away?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Faites chacun l’annonce du pilote avant le décollage, voix comprise. L’autre note sur dix.",
    "en": "Each do the captain’s pre-takeoff announcement, voice and all. The other scores it out of ten."
   },
   {
    "fr": "Inventez ensemble un pays imaginaire : son nom, son plat national et sa fête la plus bizarre.",
    "en": "Invent a country together: its name, its national dish and its strangest holiday."
   },
   {
    "fr": "Décrivez chacun un endroit visité en trois mots seulement. L’autre devine le pays.",
    "en": "Each describe a place you’ve visited in just three words. The other guesses the country."
   },
   {
    "fr": "Faites une valise imaginaire : à tour de rôle, chacun ajoute un objet et répète toute la liste. Le premier qui oublie a perdu.",
    "en": "Pack an imaginary suitcase: take turns adding one item and repeating the whole list. First to forget loses."
   },
   {
    "fr": "Mimez chacun un moment de voyage : la douane, les turbulences, la valise qui ne ferme pas… L’autre devine.",
    "en": "Each mime a travel moment: customs, turbulence, a suitcase that won’t close… The other guesses."
   },
   {
    "fr": "Jouez un guide touristique qui fait visiter l’endroit où vous êtes, avec le plus grand sérieux. 30 secondes chacun.",
    "en": "Play a tour guide showing off the place you’re in, with total seriousness. 30 seconds each."
   },
   {
    "fr": "Dites « bonjour » ou « merci » dans le plus de langues possible, à tour de rôle. Le premier qui sèche a perdu.",
    "en": "Take turns saying “hello” or “thank you” in as many languages as you can. First to run out loses."
   },
   {
    "fr": "Organisez ensemble un week-end de rêve en une minute : destination, transport et activité phare.",
    "en": "Plan a dream weekend together in one minute: destination, transport and headline activity."
   }
  ]
 },
 {
  "id": "gourmand",
  "em": "🍳",
  "nom": {
   "fr": "Gourmand",
   "en": "Foodies",
   "es": "Gastronomía",
   "de": "Feinschmecker",
   "ar": "ذوّاقة"
  },
  "desc": {
   "fr": "Recettes, manies à table et plats qui font débat, pour mettre l’eau à la bouche.",
   "en": "Recipes, table habits and food debates to make your mouth water.",
   "es": "Recetas, manías en la mesa y platos que dan que hablar, para abrir el apetito.",
   "de": "Rezepte, Tischmarotten und Gerichte, über die man streitet – Appetit garantiert.",
   "ar": "وصفات وعادات على المائدة وأطباق تثير النقاش، تفتح الشهية."
  },
  "questions": [
   {
    "fr": {
     "q": "En cuisine, tu es plutôt…",
     "r": [
      [
       "📖",
       "La recette au gramme près"
      ],
      [
       "🎨",
       "L’impro totale"
      ],
      [
       "📟",
       "Roi ou reine du micro-ondes"
      ],
      [
       "🥄",
       "Celui qui goûte tout"
      ]
     ],
     "relance": "Votre plus grand fiasco en cuisine ?"
    },
    "en": {
     "q": "In the kitchen, you’re…",
     "r": [
      "Recipe to the gram",
      "Total improv",
      "Microwave royalty",
      "The official taster"
     ],
     "relance": "Your biggest kitchen disaster?"
    }
   },
   {
    "fr": {
     "q": "L’œuf parfait, c’est…",
     "r": [
      [
       "🍳",
       "Au plat"
      ],
      [
       "🥚",
       "À la coque"
      ],
      [
       "🌀",
       "Brouillé"
      ],
      [
       "🧈",
       "En omelette"
      ]
     ],
     "relance": "Qui fait les meilleurs œufs que vous connaissiez ?"
    },
    "en": {
     "q": "The perfect egg is…",
     "r": [
      "Fried",
      "Soft-boiled",
      "Scrambled",
      "An omelette"
     ],
     "relance": "Who makes the best eggs you know?"
    }
   },
   {
    "fr": {
     "q": "Les frites, tu les manges…",
     "r": [
      [
       "🍅",
       "Avec du ketchup"
      ],
      [
       "🥫",
       "Avec de la mayo"
      ],
      [
       "🌶️",
       "Avec une sauce qui pique"
      ],
      [
       "🧂",
       "Juste salées"
      ]
     ],
     "relance": "Défendez votre sauce en quinze secondes."
    },
    "en": {
     "q": "Fries: how do you have them?",
     "r": [
      "With ketchup",
      "With mayo",
      "With a spicy sauce",
      "Just salted"
     ],
     "relance": "Defend your sauce in fifteen seconds."
    }
   },
   {
    "fr": {
     "q": "Le goûter idéal ?",
     "r": [
      [
       "🥖",
       "Du pain et du chocolat"
      ],
      [
       "🍪",
       "Des biscuits"
      ],
      [
       "🍎",
       "Un fruit croquant"
      ],
      [
       "🥞",
       "Des crêpes"
      ]
     ],
     "relance": "Le goûter de votre enfance ?"
    },
    "en": {
     "q": "The ideal afternoon snack?",
     "r": [
      "Bread and chocolate",
      "Biscuits",
      "A crunchy apple",
      "Crêpes"
     ],
     "relance": "What was your after-school snack as a kid?"
    }
   },
   {
    "fr": {
     "q": "Le fromage, pour toi, c’est…",
     "r": [
      [
       "🧀",
       "À chaque repas"
      ],
      [
       "🔥",
       "Fondu sur tout"
      ],
      [
       "🥨",
       "Avec du bon pain, rien d’autre"
      ],
      [
       "🙅",
       "Non merci"
      ]
     ],
     "relance": "Le fromage que vous emporteriez sur une île déserte ?"
    },
    "en": {
     "q": "Cheese, for you, is…",
     "r": [
      "At every meal",
      "Melted on everything",
      "With good bread and nothing else",
      "No thanks"
     ],
     "relance": "The cheese you’d take to a desert island?"
    }
   },
   {
    "fr": {
     "q": "Une seule cuisine du monde, pour toujours ?",
     "r": [
      [
       "🍣",
       "Japonaise"
      ],
      [
       "🌮",
       "Mexicaine"
      ],
      [
       "🍛",
       "Indienne"
      ],
      [
       "🥙",
       "Libanaise"
      ]
     ],
     "relance": "Le meilleur plat étranger que vous ayez goûté ?"
    },
    "en": {
     "q": "One world cuisine, forever?",
     "r": [
      "Japanese",
      "Mexican",
      "Indian",
      "Lebanese"
     ],
     "relance": "The best dish from another country you’ve ever had?"
    }
   },
   {
    "fr": {
     "q": "Le piquant, tu…",
     "r": [
      [
       "🔥",
       "En redemandes"
      ],
      [
       "🌶️",
       "Un peu, pour le goût"
      ],
      [
       "😰",
       "Pleures dès la première bouchée"
      ],
      [
       "🥛",
       "Gardes un verre de lait à côté"
      ]
     ],
     "relance": "Racontez votre pire rencontre avec un plat trop épicé."
    },
    "en": {
     "q": "Spicy food? You…",
     "r": [
      "Ask for more",
      "Like a little, for flavour",
      "Cry at the first bite",
      "Keep a glass of milk nearby"
     ],
     "relance": "Tell your worst run-in with a dish that was way too spicy."
    }
   },
   {
    "fr": {
     "q": "Au marché, tu craques pour…",
     "r": [
      [
       "🍓",
       "Les fruits de saison"
      ],
      [
       "🧀",
       "Le stand de fromages"
      ],
      [
       "🥐",
       "La boulangerie"
      ],
      [
       "🌿",
       "Les herbes et les épices"
      ]
     ],
     "relance": "Votre stand préféré, et pourquoi ?"
    },
    "en": {
     "q": "At the market, you can’t resist…",
     "r": [
      "Seasonal fruit",
      "The cheese stall",
      "The bakery",
      "Herbs and spices"
     ],
     "relance": "Your favourite stall, and why?"
    }
   },
   {
    "fr": {
     "q": "Le chocolat, tu le préfères…",
     "r": [
      [
       "⬛",
       "Noir"
      ],
      [
       "🟫",
       "Au lait"
      ],
      [
       "⬜",
       "Blanc"
      ],
      [
       "🌰",
       "Aux noisettes, sinon rien"
      ]
     ],
     "relance": "Le meilleur gâteau au chocolat que vous ayez mangé ?"
    },
    "en": {
     "q": "Chocolate: which kind?",
     "r": [
      "Dark",
      "Milk",
      "White",
      "With hazelnuts or nothing"
     ],
     "relance": "The best chocolate cake you’ve ever eaten?"
    }
   },
   {
    "fr": {
     "q": "Des amis viennent dîner. Tu fais…",
     "r": [
      [
       "🍲",
       "Mon plat signature"
      ],
      [
       "🍕",
       "Des pizzas maison"
      ],
      [
       "🧆",
       "Plein de petites choses à picorer"
      ],
      [
       "📞",
       "Je commande, je l’avoue"
      ]
     ],
     "relance": "Votre plat signature, en trois ingrédients ?"
    },
    "en": {
     "q": "Friends are coming for dinner. You make…",
     "r": [
      "My signature dish",
      "Homemade pizzas",
      "Lots of little things to nibble",
      "I order in, I admit it"
     ],
     "relance": "Your signature dish, in three ingredients?"
    }
   },
   {
    "fr": {
     "q": "Les pâtes, c’est forcément…",
     "r": [
      [
       "🍝",
       "Bolognaise"
      ],
      [
       "🥓",
       "Carbonara"
      ],
      [
       "🌿",
       "Au pesto"
      ],
      [
       "🧈",
       "Beurre et fromage râpé, la base"
      ]
     ],
     "relance": "Qui cuit les pâtes le mieux autour de vous, et quel est son secret ?"
    },
    "en": {
     "q": "Pasta has to be…",
     "r": [
      "Bolognese",
      "Carbonara",
      "Pesto",
      "Butter and grated cheese, the basics"
     ],
     "relance": "Who cooks pasta best in your life, and what’s their secret?"
    }
   },
   {
    "fr": {
     "q": "Ton ustensile préféré ?",
     "r": [
      [
       "🔪",
       "Un bon couteau"
      ],
      [
       "🍳",
       "La poêle"
      ],
      [
       "🥄",
       "La cuillère en bois"
      ],
      [
       "⚡",
       "Le mixeur"
      ]
     ],
     "relance": "L’appareil de cuisine qui dort au fond d’un placard chez vous ?"
    },
    "en": {
     "q": "Your favourite kitchen tool?",
     "r": [
      "A good knife",
      "The frying pan",
      "The wooden spoon",
      "The blender"
     ],
     "relance": "The kitchen gadget gathering dust in your cupboard?"
    }
   },
   {
    "fr": {
     "q": "Le plat que tu ne goûteras jamais ?",
     "r": [
      [
       "🐌",
       "Les escargots"
      ],
      [
       "🦪",
       "Les huîtres"
      ],
      [
       "🥬",
       "Les endives"
      ],
      [
       "🍄",
       "Les champignons"
      ]
     ],
     "relance": "Un aliment détesté enfant et adoré aujourd’hui ?"
    },
    "en": {
     "q": "The dish you’ll never try?",
     "r": [
      "Snails",
      "Oysters",
      "Endives",
      "Mushrooms"
     ],
     "relance": "A food you hated as a kid but love now?"
    }
   },
   {
    "fr": {
     "q": "À table, tu manges…",
     "r": [
      [
       "🐇",
       "Vite, très vite"
      ],
      [
       "🐢",
       "Lentement, en savourant"
      ],
      [
       "🍽️",
       "Une chose à la fois dans l’assiette"
      ],
      [
       "🔀",
       "Tout mélangé"
      ]
     ],
     "relance": "Une manie à table que les autres trouvent étrange ?"
    },
    "en": {
     "q": "At the table, you eat…",
     "r": [
      "Fast, very fast",
      "Slowly, savouring it",
      "One thing at a time",
      "Everything mixed together"
     ],
     "relance": "Got a table habit others find strange?"
    }
   },
   {
    "fr": {
     "q": "La meilleure odeur de cuisine ?",
     "r": [
      [
       "🥖",
       "Le pain qui sort du four"
      ],
      [
       "☕",
       "Le café du matin"
      ],
      [
       "🧄",
       "L’ail qui dore"
      ],
      [
       "🍰",
       "Un gâteau qui cuit"
      ]
     ],
     "relance": "L’odeur qui vous ramène direct en enfance ?"
    },
    "en": {
     "q": "The best kitchen smell?",
     "r": [
      "Bread fresh out of the oven",
      "Morning coffee",
      "Garlic sizzling",
      "A cake baking"
     ],
     "relance": "The smell that takes you straight back to childhood?"
    }
   },
   {
    "fr": {
     "q": "Le pique-nique parfait ?",
     "r": [
      [
       "🥪",
       "Des sandwichs"
      ],
      [
       "🥗",
       "Des salades en bocaux"
      ],
      [
       "🍉",
       "Une pastèque entière"
      ],
      [
       "🧺",
       "Un peu de tout, en grand"
      ]
     ],
     "relance": "Le plus beau pique-nique de votre vie, c’était où ?"
    },
    "en": {
     "q": "The perfect picnic?",
     "r": [
      "Sandwiches",
      "Salads in jars",
      "A whole watermelon",
      "A bit of everything, generously"
     ],
     "relance": "Where was the best picnic of your life?"
    }
   },
   {
    "fr": {
     "q": "Les restes du dîner, tu…",
     "r": [
      [
       "🥡",
       "Les manges froids le lendemain"
      ],
      [
       "♻️",
       "En fais un nouveau plat"
      ],
      [
       "🧊",
       "Les oublies au frigo"
      ],
      [
       "🤲",
       "Les donnes à qui en veut"
      ]
     ],
     "relance": "Votre meilleure recette inventée avec des restes ?"
    },
    "en": {
     "q": "Dinner leftovers? You…",
     "r": [
      "Eat them cold the next day",
      "Turn them into a new dish",
      "Forget them in the fridge",
      "Give them to whoever wants them"
     ],
     "relance": "Your best recipe invented from leftovers?"
    }
   },
   {
    "fr": {
     "q": "Le croissant, tu le manges…",
     "r": [
      [
       "☕",
       "Trempé dans le café"
      ],
      [
       "🧈",
       "Avec du beurre en plus"
      ],
      [
       "🍫",
       "Non, il me faut un pain au chocolat"
      ],
      [
       "🥐",
       "Nature, sans rien"
      ]
     ],
     "relance": "Pain au chocolat ou chocolatine ? Réglez ça une bonne fois."
    },
    "en": {
     "q": "How do you eat a croissant?",
     "r": [
      "Dunked in coffee",
      "With extra butter",
      "No, I need a pain au chocolat",
      "Plain, nothing else"
     ],
     "relance": "Settle it once and for all: what do you call a pain au chocolat?"
    }
   },
   {
    "fr": {
     "q": "Dans une émission de cuisine, tu serais…",
     "r": [
      [
       "👨‍🍳",
       "Le candidat stressé"
      ],
      [
       "🧐",
       "Le juré sévère"
      ],
      [
       "🎤",
       "L’animateur"
      ],
      [
       "😋",
       "Celui qui goûte à la fin"
      ]
     ],
     "relance": "Quel plat présenteriez-vous au jury ?"
    },
    "en": {
     "q": "On a cooking show, you’d be…",
     "r": [
      "The stressed contestant",
      "The strict judge",
      "The host",
      "The one who tastes at the end"
     ],
     "relance": "What dish would you serve the judges?"
    }
   },
   {
    "fr": {
     "q": "Un repas qui t’a marqué, c’était…",
     "r": [
      [
       "🏠",
       "Chez quelqu’un, tout simple"
      ],
      [
       "🌍",
       "À l’autre bout du monde"
      ],
      [
       "🔥",
       "Autour d’un feu ou d’un barbecue"
      ],
      [
       "🎉",
       "Pendant une grande fête"
      ]
     ],
     "relance": "Racontez ce repas : qui, où, quoi ?"
    },
    "en": {
     "q": "A meal that stuck with you was…",
     "r": [
      "At someone’s home, really simple",
      "On the other side of the world",
      "Around a fire or a barbecue",
      "At a big celebration"
     ],
     "relance": "Tell the story: who, where, what?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Décrivez chacun votre plat préféré comme un grand chef, avec des mots très chics. L’autre devine le plat.",
    "en": "Each describe your favourite dish like a fancy chef, with very posh words. The other guesses the dish."
   },
   {
    "fr": "Inventez ensemble une recette absurde en trois étapes, puis donnez-lui un nom de grand restaurant.",
    "en": "Invent an absurd three-step recipe together, then give it a fancy restaurant name."
   },
   {
    "fr": "Mimez chacun la préparation d’un plat, sans un son. L’autre a vingt secondes pour deviner.",
    "en": "Each mime making a dish, without a sound. The other has twenty seconds to guess."
   },
   {
    "fr": "Citez à tour de rôle un fruit ou un légume. Le premier qui hésite ou répète a perdu.",
    "en": "Take turns naming a fruit or vegetable. First to hesitate or repeat loses."
   },
   {
    "fr": "Faites chacun une pub de vingt secondes pour un aliment très banal, comme la carotte ou le riz.",
    "en": "Each do a twenty-second ad for a very ordinary food, like carrots or rice."
   },
   {
    "fr": "Créez un sandwich légendaire : chacun ajoute un ingrédient à tour de rôle, cinq tours. Puis baptisez-le.",
    "en": "Build a legendary sandwich: take turns adding one ingredient, five rounds. Then name it."
   },
   {
    "fr": "Faites la critique de votre dernier repas comme un juré de télé, très sérieux. Vingt secondes chacun.",
    "en": "Review your last meal like a very serious TV judge. Twenty seconds each."
   },
   {
    "fr": "Trouvez ensemble cinq expressions avec de la nourriture dedans, en une minute (« raconter des salades »…).",
    "en": "Find five expressions with food in them together, in one minute (“a piece of cake”…)."
   }
  ]
 },
 {
  "id": "ecrans",
  "em": "🎬",
  "nom": {
   "fr": "Ciné et séries",
   "en": "Movies and shows",
   "es": "Cine y series",
   "de": "Filme und Serien",
   "ar": "أفلام ومسلسلات"
  },
  "desc": {
   "fr": "Pop-corn, spoilers et répliques cultes, pour se faire son cinéma à deux.",
   "en": "Popcorn, spoilers and iconic lines: a private screening for two.",
   "es": "Palomitas, spoilers y frases míticas para montaros vuestra propia película.",
   "de": "Popcorn, Spoiler und Kultzitate – Kino zu zweit.",
   "ar": "فشار وحرق للأحداث وعبارات خالدة، لسينما خاصة لشخصين."
  },
  "questions": [
   {
    "fr": {
     "q": "Au cinéma, ta place ?",
     "r": [
      [
       "🎯",
       "Pile au milieu"
      ],
      [
       "🔝",
       "Tout en haut, au fond"
      ],
      [
       "👀",
       "Premier rang, le nez sur l’écran"
      ],
      [
       "🚪",
       "Près de la sortie"
      ]
     ],
     "relance": "Votre séance de cinéma la plus mémorable ?"
    },
    "en": {
     "q": "Your seat at the cinema?",
     "r": [
      "Dead centre",
      "Top row, at the back",
      "Front row, nose to the screen",
      "Near the exit"
     ],
     "relance": "Your most memorable trip to the cinema?"
    }
   },
   {
    "fr": {
     "q": "Une scène de film t’a déjà donné envie de…",
     "r": [
      [
       "🥋",
       "Te mettre au kung-fu"
      ],
      [
       "🗼",
       "Partir à l’autre bout du monde"
      ],
      [
       "🍝",
       "Cuisiner le plat du film"
      ],
      [
       "💃",
       "Danser dans la rue"
      ]
     ],
     "relance": "Laquelle, et l’avez-vous fait ?"
    },
    "en": {
     "q": "A film scene once made you want to…",
     "r": [
      "Take up kung fu",
      "Go to the other side of the world",
      "Cook the dish from the film",
      "Dance in the street"
     ],
     "relance": "Which scene, and did you actually do it?"
    }
   },
   {
    "fr": {
     "q": "Un épisode de plus, à minuit ?",
     "r": [
      [
       "▶️",
       "Évidemment, puis encore un"
      ],
      [
       "✋",
       "Non, je suis raisonnable"
      ],
      [
       "😴",
       "Je m’endors devant"
      ],
      [
       "🔮",
       "Je lis le résumé pour connaître la suite"
      ]
     ],
     "relance": "La série qui vous a fait veiller le plus tard ?"
    },
    "en": {
     "q": "One more episode at midnight?",
     "r": [
      "Obviously, then another",
      "No, I’m sensible",
      "I fall asleep watching",
      "I read the summary to find out"
     ],
     "relance": "The show that kept you up the latest?"
    }
   },
   {
    "fr": {
     "q": "Les spoilers, pour toi…",
     "r": [
      [
       "🤬",
       "Un crime"
      ],
      [
       "🤷",
       "Ça ne me gêne pas"
      ],
      [
       "📖",
       "Je les cherche exprès"
      ],
      [
       "🙊",
       "Je spoile sans faire exprès"
      ]
     ],
     "relance": "Le spoiler qui vous a le plus énervé ?"
    },
    "en": {
     "q": "Spoilers are…",
     "r": [
      "A crime",
      "Fine by me",
      "Something I look up on purpose",
      "Something I blurt out by accident"
     ],
     "relance": "The spoiler that annoyed you the most?"
    }
   },
   {
    "fr": {
     "q": "Le film que tu peux revoir cent fois ?",
     "r": [
      [
       "🦁",
       "Un dessin animé d’enfance"
      ],
      [
       "😂",
       "Une comédie culte"
      ],
      [
       "🧙",
       "Une grande saga fantastique"
      ],
      [
       "💔",
       "Un film qui fait pleurer"
      ]
     ],
     "relance": "Lequel, et la réplique que vous connaissez par cœur ?"
    },
    "en": {
     "q": "The film you could watch a hundred times?",
     "r": [
      "A childhood cartoon",
      "A cult comedy",
      "A big fantasy saga",
      "A tearjerker"
     ],
     "relance": "Which one, and which line do you know by heart?"
    }
   },
   {
    "fr": {
     "q": "Version originale ou doublée ?",
     "r": [
      [
       "🌍",
       "VO sous-titrée, toujours"
      ],
      [
       "🇫🇷",
       "VF, c’est plus reposant"
      ],
      [
       "🎧",
       "VO sans sous-titres, je frime"
      ],
      [
       "🎭",
       "Ça dépend de l’humeur"
      ]
     ],
     "relance": "Une voix de doublage que vous reconnaîtriez entre mille ?"
    },
    "en": {
     "q": "Original or dubbed?",
     "r": [
      "Original with subtitles, always",
      "Dubbed, it’s more relaxing",
      "Original, no subtitles, showing off",
      "Depends on my mood"
     ],
     "relance": "A dubbing voice you’d recognise anywhere?"
    }
   },
   {
    "fr": {
     "q": "Dans un film d’horreur, tu serais…",
     "r": [
      [
       "🏃",
       "Le premier à fuir"
      ],
      [
       "🔦",
       "Celui qui va voir dans la cave"
      ],
      [
       "🧠",
       "Celui qui a tout compris"
      ],
      [
       "😱",
       "Celui qui crie le plus fort"
      ]
     ],
     "relance": "Le film qui vous a fait le plus peur ?"
    },
    "en": {
     "q": "In a horror film, you’d be…",
     "r": [
      "The first to run",
      "The one who checks the basement",
      "The one who figured it all out",
      "The one who screams loudest"
     ],
     "relance": "The film that scared you the most?"
    }
   },
   {
    "fr": {
     "q": "Ton rôle de rêve dans une série ?",
     "r": [
      [
       "🕵️",
       "Le détective génial"
      ],
      [
       "👑",
       "Le roi ou la reine d’un royaume"
      ],
      [
       "🧑‍🍳",
       "Le chef d’un resto en pleine crise"
      ],
      [
       "👽",
       "L’extraterrestre incompris"
      ]
     ],
     "relance": "Avec quel personnage de série aimeriez-vous dîner ?"
    },
    "en": {
     "q": "Your dream role in a TV show?",
     "r": [
      "The genius detective",
      "Ruler of a kingdom",
      "Chef of a restaurant in chaos",
      "The misunderstood alien"
     ],
     "relance": "Which TV character would you have dinner with?"
    }
   },
   {
    "fr": {
     "q": "Le générique de début, tu…",
     "r": [
      [
       "⏩",
       "Le passes toujours"
      ],
      [
       "🎶",
       "Le chantes à fond"
      ],
      [
       "🔍",
       "Le regardes pour les détails"
      ],
      [
       "🍪",
       "En profites pour aller chercher à grignoter"
      ]
     ],
     "relance": "Chantez le générique de série que vous connaissez par cœur."
    },
    "en": {
     "q": "Opening credits? You…",
     "r": [
      "Always skip them",
      "Sing along at full volume",
      "Watch for the details",
      "Use them to grab a snack"
     ],
     "relance": "Sing the theme song you know by heart."
    }
   },
   {
    "fr": {
     "q": "Choisir quoi regarder, ça te prend…",
     "r": [
      [
       "⚡",
       "Deux minutes"
      ],
      [
       "🌀",
       "Plus longtemps que le film"
      ],
      [
       "🤝",
       "C’est l’autre qui choisit"
      ],
      [
       "🔁",
       "Je remets un truc déjà vu"
      ]
     ],
     "relance": "Votre technique pour enfin choisir ?"
    },
    "en": {
     "q": "Choosing what to watch takes you…",
     "r": [
      "Two minutes",
      "Longer than the film itself",
      "The other person picks",
      "I rewatch something I’ve seen"
     ],
     "relance": "Your trick for finally picking something?"
    }
   },
   {
    "fr": {
     "q": "Le personnage que tu adores détester ?",
     "r": [
      [
       "🦹",
       "Le grand méchant"
      ],
      [
       "🙄",
       "Le râleur de service"
      ],
      [
       "🤡",
       "Le rigolo un peu lourd"
      ],
      [
       "🧊",
       "Le froid qui cache un grand cœur"
      ]
     ],
     "relance": "Lequel exactement, et pourquoi ?"
    },
    "en": {
     "q": "The character you love to hate?",
     "r": [
      "The big villain",
      "The resident grump",
      "The slightly annoying joker",
      "The cold one with a big heart"
     ],
     "relance": "Which one exactly, and why?"
    }
   },
   {
    "fr": {
     "q": "Tu regardes surtout…",
     "r": [
      [
       "🛋️",
       "Sur le canapé"
      ],
      [
       "🛏️",
       "Dans le lit"
      ],
      [
       "🚇",
       "Dans les transports"
      ],
      [
       "🎥",
       "Au cinéma, rien d’autre"
      ]
     ],
     "relance": "L’endroit le plus étrange où vous ayez regardé un film ?"
    },
    "en": {
     "q": "You mostly watch…",
     "r": [
      "On the sofa",
      "In bed",
      "On public transport",
      "At the cinema, nothing else"
     ],
     "relance": "The weirdest place you’ve ever watched a film?"
    }
   },
   {
    "fr": {
     "q": "Un film tiré d’un livre, tu…",
     "r": [
      [
       "📚",
       "Lis le livre avant"
      ],
      [
       "🎬",
       "Regardes le film d’abord"
      ],
      [
       "😤",
       "Dis toujours que le livre est mieux"
      ],
      [
       "🤷",
       "Ignorais qu’il y avait un livre"
      ]
     ],
     "relance": "L’adaptation qui vous a déçu, ou bluffé ?"
    },
    "en": {
     "q": "A film based on a book? You…",
     "r": [
      "Read the book first",
      "Watch the film first",
      "Always say the book was better",
      "Didn’t know there was a book"
     ],
     "relance": "An adaptation that let you down, or blew you away?"
    }
   },
   {
    "fr": {
     "q": "Ton rayon préféré ?",
     "r": [
      [
       "🦸",
       "Les super-héros"
      ],
      [
       "🐉",
       "Les films d’animation"
      ],
      [
       "🔭",
       "Les documentaires"
      ],
      [
       "🕵️‍♀️",
       "Les enquêtes policières"
      ]
     ],
     "relance": "Le dernier que vous avez conseillé à quelqu’un ?"
    },
    "en": {
     "q": "Your favourite section?",
     "r": [
      "Superheroes",
      "Animated films",
      "Documentaries",
      "Crime mysteries"
     ],
     "relance": "The last one you recommended to someone?"
    }
   },
   {
    "fr": {
     "q": "Quand un film te fait pleurer, tu…",
     "r": [
      [
       "😭",
       "Assumes complètement"
      ],
      [
       "🙈",
       "Dis que c’est une poussière"
      ],
      [
       "🗿",
       "Ne pleures jamais devant un film"
      ],
      [
       "🫣",
       "Te caches derrière un coussin"
      ]
     ],
     "relance": "Le film qui vous a eu, malgré vous ?"
    },
    "en": {
     "q": "When a film makes you cry, you…",
     "r": [
      "Own it completely",
      "Blame something in your eye",
      "Never cry at films",
      "Hide behind a cushion"
     ],
     "relance": "The film that got you, despite yourself?"
    }
   },
   {
    "fr": {
     "q": "Au cinéma, tu y vas…",
     "r": [
      [
       "🎟️",
       "Le jour de la sortie"
      ],
      [
       "🌧️",
       "Quand il pleut"
      ],
      [
       "👥",
       "En bande"
      ],
      [
       "🧍",
       "En solo, et j’adore"
      ]
     ],
     "relance": "Le dernier film que vous avez vu en salle ?"
    },
    "en": {
     "q": "You go to the cinema…",
     "r": [
      "On release day",
      "When it rains",
      "With a big group",
      "On your own, and you love it"
     ],
     "relance": "The last film you saw on the big screen?"
    }
   },
   {
    "fr": {
     "q": "Tu entres dans un film. Tu atterris…",
     "r": [
      [
       "🪄",
       "Dans un monde magique"
      ],
      [
       "🚀",
       "Dans l’espace"
      ],
      [
       "🏰",
       "Dans un film d’époque"
      ],
      [
       "🗽",
       "Dans une comédie à New York"
      ]
     ],
     "relance": "Quelle scène vivriez-vous en premier ?"
    },
    "en": {
     "q": "You step into a film. You land…",
     "r": [
      "In a magical world",
      "In space",
      "In a period drama",
      "In a New York comedy"
     ],
     "relance": "Which scene would you live first?"
    }
   },
   {
    "fr": {
     "q": "Les dessins animés, aujourd’hui ?",
     "r": [
      [
       "❤️",
       "J’en regarde encore, sans honte"
      ],
      [
       "🎞️",
       "Seulement les classiques"
      ],
      [
       "🧸",
       "Seulement avec des enfants"
      ],
      [
       "🚫",
       "C’est fini depuis longtemps"
      ]
     ],
     "relance": "Le dessin animé qui a marqué votre enfance ?"
    },
    "en": {
     "q": "Cartoons, these days?",
     "r": [
      "Still watch them, no shame",
      "Only the classics",
      "Only with kids around",
      "Long behind me"
     ],
     "relance": "The cartoon that shaped your childhood?"
    }
   },
   {
    "fr": {
     "q": "Une fin ouverte, tu…",
     "r": [
      [
       "🤩",
       "Adores imaginer la suite"
      ],
      [
       "😠",
       "Veux une vraie fin"
      ],
      [
       "🧵",
       "Cherches des théories en ligne"
      ],
      [
       "💤",
       "Dormais déjà"
      ]
     ],
     "relance": "La fin de film ou de série qui vous a le plus frustré ?"
    },
    "en": {
     "q": "An open ending? You…",
     "r": [
      "Love imagining what happens next",
      "Want a proper ending",
      "Look up theories online",
      "Were already asleep"
     ],
     "relance": "The film or show ending that frustrated you most?"
    }
   },
   {
    "fr": {
     "q": "Le personnage qui te ressemble le plus ?",
     "r": [
      [
       "🦸‍♀️",
       "Le héros qui sauve tout le monde"
      ],
      [
       "🦉",
       "Le sage qui donne des conseils"
      ],
      [
       "😅",
       "L’acolyte maladroit"
      ],
      [
       "🕶️",
       "Le solitaire mystérieux"
      ]
     ],
     "relance": "Lequel, et l’autre est-il d’accord ?"
    },
    "en": {
     "q": "The character most like you?",
     "r": [
      "The hero who saves everyone",
      "The wise one giving advice",
      "The clumsy sidekick",
      "The mysterious loner"
     ],
     "relance": "Which one, and does the other agree?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Racontez chacun un film célèbre en trois phrases, le plus mal possible. L’autre devine le titre.",
    "en": "Each sum up a famous film in three sentences, as badly as possible. The other guesses the title."
   },
   {
    "fr": "Mimez chacun un titre de film, sans un son. L’autre a vingt secondes pour trouver.",
    "en": "Each mime a film title without a sound. The other has twenty seconds to get it."
   },
   {
    "fr": "Jouez la bande-annonce du film de votre rencontre, avec la grosse voix : « Cette année… »",
    "en": "Perform the trailer for the film of how you met, deep movie voice: “This year…”"
   },
   {
    "fr": "Dites chacun une réplique culte avec la voix du personnage. L’autre devine le film.",
    "en": "Each say an iconic line in the character’s voice. The other guesses the film."
   },
   {
    "fr": "Inventez ensemble une série : son titre, son héros et le rebondissement de la saison 1.",
    "en": "Invent a TV show together: its title, its hero and the season one twist."
   },
   {
    "fr": "Fredonnez chacun une musique de film. L’autre crie le titre dès qu’il ou elle trouve.",
    "en": "Each hum a film score. The other shouts the title as soon as they get it."
   },
   {
    "fr": "Rejouez de mémoire une scène célèbre à deux voix, en vingt secondes. Oscar ou pas ?",
    "en": "Act out a famous two-person scene from memory, in twenty seconds. Oscar-worthy or not?"
   },
   {
    "fr": "Faites chacun la critique d’un film qui n’existe pas, comme à la télé, avec une note sur cinq étoiles.",
    "en": "Each review a film that doesn’t exist, TV-critic style, with a rating out of five stars."
   }
  ]
 },
 {
  "id": "musique",
  "em": "🎵",
  "nom": {
   "fr": "Musique",
   "en": "Music",
   "es": "Música",
   "de": "Musik",
   "ar": "موسيقى"
  },
  "desc": {
   "fr": "Refrains, concerts et chansons coincées dans la tête, pour trouver votre air commun.",
   "en": "Choruses, concerts and earworms: find the tune you share.",
   "es": "Estribillos, conciertos y canciones pegadizas para encontrar vuestra melodía común.",
   "de": "Refrains, Konzerte und Ohrwürmer – findet eure gemeinsame Melodie.",
   "ar": "لازمات وحفلات وأغانٍ عالقة في الرأس، لتجدا لحنكما المشترك."
  },
  "questions": [
   {
    "fr": {
     "q": "Le son que tu reconnais en deux notes ?",
     "r": [
      [
       "📺",
       "Un générique de dessin animé"
      ],
      [
       "📱",
       "Une sonnerie de téléphone"
      ],
      [
       "🎮",
       "Le thème d’un jeu vidéo"
      ],
      [
       "🍦",
       "La musique du camion de glaces"
      ]
     ],
     "relance": "Faites-le avec la bouche. L’autre devine."
    },
    "en": {
     "q": "The sound you’d recognise in two notes?",
     "r": [
      "A cartoon theme tune",
      "A phone ringtone",
      "A video game theme",
      "The ice-cream van tune"
     ],
     "relance": "Make the sound. The other guesses."
    }
   },
   {
    "fr": {
     "q": "Un concert du passé, en vrai, tu choisis…",
     "r": [
      [
       "🎸",
       "Un groupe de rock légendaire"
      ],
      [
       "🎼",
       "Mozart au piano"
      ],
      [
       "🎤",
       "Une diva au sommet"
      ],
      [
       "🎧",
       "Une fête électro des années 90"
      ]
     ],
     "relance": "Qui exactement, et quelle chanson en premier ?"
    },
    "en": {
     "q": "One concert from the past, live: you pick…",
     "r": [
      "A legendary rock band",
      "Mozart at the piano",
      "A diva at her peak",
      "A 90s electro party"
     ],
     "relance": "Who exactly, and which song first?"
    }
   },
   {
    "fr": {
     "q": "Un instrument à maîtriser dès demain ?",
     "r": [
      [
       "🎸",
       "La guitare"
      ],
      [
       "🎹",
       "Le piano"
      ],
      [
       "🥁",
       "La batterie"
      ],
      [
       "🎻",
       "Le violon"
      ]
     ],
     "relance": "Avez-vous déjà essayé d’en apprendre un ? Racontez."
    },
    "en": {
     "q": "An instrument to master by tomorrow?",
     "r": [
      "Guitar",
      "Piano",
      "Drums",
      "Violin"
     ],
     "relance": "Ever tried to learn one? Tell the story."
    }
   },
   {
    "fr": {
     "q": "Les paroles des chansons, tu…",
     "r": [
      [
       "📝",
       "Les connais par cœur"
      ],
      [
       "🤭",
       "En inventes la moitié"
      ],
      [
       "🔍",
       "Les cherches en écoutant"
      ],
      [
       "🎵",
       "N’écoutes que la mélodie"
      ]
     ],
     "relance": "Les paroles que vous avez mal comprises pendant des années ?"
    },
    "en": {
     "q": "Song lyrics? You…",
     "r": [
      "Know them by heart",
      "Make up half of them",
      "Look them up while listening",
      "Only hear the melody"
     ],
     "relance": "Lyrics you misheard for years?"
    }
   },
   {
    "fr": {
     "q": "Ce qui tourne dans ta tête en ce moment ?",
     "r": [
      [
       "🐛",
       "Un vieux tube agaçant"
      ],
      [
       "📺",
       "Un jingle de pub ou un générique"
      ],
      [
       "🎠",
       "Une comptine d’enfant"
      ],
      [
       "🆕",
       "Le dernier tube à la mode"
      ]
     ],
     "relance": "Fredonnez-le. L’autre devine."
    },
    "en": {
     "q": "What’s stuck in your head right now?",
     "r": [
      "An annoying old hit",
      "An ad jingle or a theme song",
      "A nursery rhyme",
      "The latest chart hit"
     ],
     "relance": "Hum it. The other guesses."
    }
   },
   {
    "fr": {
     "q": "Ta décennie musicale ?",
     "r": [
      [
       "📻",
       "Les années 70"
      ],
      [
       "🕺",
       "Les années 80"
      ],
      [
       "💿",
       "Les années 90"
      ],
      [
       "📀",
       "Les années 2000"
      ]
     ],
     "relance": "La chanson qui résume cette époque pour vous ?"
    },
    "en": {
     "q": "Your musical decade?",
     "r": [
      "The 70s",
      "The 80s",
      "The 90s",
      "The 2000s"
     ],
     "relance": "The song that sums up that era for you?"
    }
   },
   {
    "fr": {
     "q": "Pour te concentrer, tu écoutes…",
     "r": [
      [
       "🎼",
       "Du classique"
      ],
      [
       "🌧️",
       "Des bruits de pluie"
      ],
      [
       "🎮",
       "Des musiques de jeux vidéo"
      ],
      [
       "🔇",
       "Rien du tout"
      ]
     ],
     "relance": "Votre bande-son de travail idéale ?"
    },
    "en": {
     "q": "To focus, you listen to…",
     "r": [
      "Classical",
      "Rain sounds",
      "Video game music",
      "Nothing at all"
     ],
     "relance": "Your ideal soundtrack for getting things done?"
    }
   },
   {
    "fr": {
     "q": "Ton réveil sonne avec…",
     "r": [
      [
       "⏰",
       "La sonnerie de base"
      ],
      [
       "🐦",
       "Des chants d’oiseaux"
      ],
      [
       "🎸",
       "Ma chanson préférée (bientôt détestée)"
      ],
      [
       "📢",
       "Un truc qui fait sursauter"
      ]
     ],
     "relance": "Une chanson gâchée à jamais par un réveil ?"
    },
    "en": {
     "q": "Your alarm plays…",
     "r": [
      "The default ringtone",
      "Birdsong",
      "My favourite song (soon to be hated)",
      "Something that makes me jump"
     ],
     "relance": "A song ruined forever by an alarm?"
    }
   },
   {
    "fr": {
     "q": "Sur scène, tu serais…",
     "r": [
      [
       "🎙️",
       "Au chant, au centre"
      ],
      [
       "🕶️",
       "Le guitariste mystérieux"
      ],
      [
       "💥",
       "Le batteur déchaîné"
      ],
      [
       "💃",
       "Danseur ou danseuse derrière"
      ]
     ],
     "relance": "Le nom de votre groupe imaginaire ?"
    },
    "en": {
     "q": "On stage, you’d be…",
     "r": [
      "Lead vocals, front and centre",
      "The mysterious guitarist",
      "The wild drummer",
      "The backing dancer"
     ],
     "relance": "Your imaginary band’s name?"
    }
   },
   {
    "fr": {
     "q": "Ton format de cœur ?",
     "r": [
      [
       "💿",
       "Le vinyle"
      ],
      [
       "📼",
       "La cassette"
      ],
      [
       "💽",
       "Le CD"
      ],
      [
       "☁️",
       "Le streaming, point"
      ]
     ],
     "relance": "Le premier album que vous avez eu ?"
    },
    "en": {
     "q": "Your format of choice?",
     "r": [
      "Vinyl",
      "Cassette",
      "CD",
      "Streaming, full stop"
     ],
     "relance": "The first album you ever had?"
    }
   },
   {
    "fr": {
     "q": "Quand tu découvres une chanson, tu…",
     "r": [
      [
       "🔁",
       "L’écoutes vingt fois de suite"
      ],
      [
       "📤",
       "L’envoies à tout le monde"
      ],
      [
       "🤫",
       "La gardes pour toi"
      ],
      [
       "🗂️",
       "Fouilles tout l’album"
      ]
     ],
     "relance": "La dernière chanson que vous avez écoutée en boucle ?"
    },
    "en": {
     "q": "When you discover a new song, you…",
     "r": [
      "Play it twenty times in a row",
      "Send it to everyone",
      "Keep it to yourself",
      "Dig through the whole album"
     ],
     "relance": "The last song you played on repeat?"
    }
   },
   {
    "fr": {
     "q": "Un festival de musique, c’est…",
     "r": [
      [
       "⛺",
       "Trois jours en camping"
      ],
      [
       "🎟️",
       "Une journée, c’est déjà bien"
      ],
      [
       "🎪",
       "Le petit festival du coin"
      ],
      [
       "🙅",
       "La foule ? Sans moi"
      ]
     ],
     "relance": "Le festival où vous rêvez d’aller ?"
    },
    "en": {
     "q": "A music festival means…",
     "r": [
      "Three days of camping",
      "One day is plenty",
      "The small local one",
      "Crowds? Not for me"
     ],
     "relance": "The festival you dream of going to?"
    }
   },
   {
    "fr": {
     "q": "Ta musique d’entrée sur un ring ?",
     "r": [
      [
       "🥊",
       "Un hymne qui fait peur"
      ],
      [
       "🧒",
       "Une chanson pour enfants"
      ],
      [
       "🎺",
       "Une fanfare"
      ],
      [
       "🎻",
       "Un morceau classique très dramatique"
      ]
     ],
     "relance": "Le titre exact ? Chantez l’intro."
    },
    "en": {
     "q": "Your walk-out music for a boxing ring?",
     "r": [
      "A scary anthem",
      "A children’s song",
      "A brass band",
      "A very dramatic classical piece"
     ],
     "relance": "The exact track? Sing the intro."
    }
   },
   {
    "fr": {
     "q": "Tes playlists sont rangées…",
     "r": [
      [
       "🌈",
       "Par humeur"
      ],
      [
       "🏷️",
       "Par genre"
      ],
      [
       "🌀",
       "Une seule, énorme, en vrac"
      ],
      [
       "📅",
       "Par année"
      ]
     ],
     "relance": "Le nom le plus drôle d’une de vos playlists ?"
    },
    "en": {
     "q": "Your playlists are sorted…",
     "r": [
      "By mood",
      "By genre",
      "One giant messy one",
      "By year"
     ],
     "relance": "The funniest name of one of your playlists?"
    }
   },
   {
    "fr": {
     "q": "Danser seul ou seule dans ta cuisine ?",
     "r": [
      [
       "🪩",
       "Tous les jours"
      ],
      [
       "🙈",
       "Seulement quand personne ne regarde"
      ],
      [
       "🍳",
       "Pendant que ça cuit, oui"
      ],
      [
       "🧍",
       "Jamais, je reste droit"
      ]
     ],
     "relance": "La chanson officielle de votre cuisine ?"
    },
    "en": {
     "q": "Dancing alone in your kitchen?",
     "r": [
      "Every day",
      "Only when nobody’s looking",
      "While things cook, yes",
      "Never, I stand perfectly still"
     ],
     "relance": "Your kitchen’s official song?"
    }
   },
   {
    "fr": {
     "q": "Une chanson que tu chantes sans comprendre les paroles ? Elle est…",
     "r": [
      [
       "🇪🇸",
       "En espagnol"
      ],
      [
       "🇰🇷",
       "En coréen"
      ],
      [
       "🇧🇷",
       "En portugais"
      ],
      [
       "🇮🇹",
       "En italien"
      ]
     ],
     "relance": "Chantez-en un bout. L’autre invente la traduction."
    },
    "en": {
     "q": "A song you sing without understanding the words? It’s in…",
     "r": [
      "Spanish",
      "Korean",
      "Portuguese",
      "Italian"
     ],
     "relance": "Sing a bit. The other makes up the translation."
    }
   },
   {
    "fr": {
     "q": "La musique d’attente au téléphone, tu…",
     "r": [
      [
       "😤",
       "Raccroches"
      ],
      [
       "🎶",
       "Fredonnes avec"
      ],
      [
       "🕺",
       "Danses dessus"
      ],
      [
       "⭐",
       "Lui donnes une note"
      ]
     ],
     "relance": "La pire musique d’attente que vous connaissiez ?"
    },
    "en": {
     "q": "Phone hold music? You…",
     "r": [
      "Hang up",
      "Hum along",
      "Dance to it",
      "Give it a rating"
     ],
     "relance": "The worst hold music you know?"
    }
   },
   {
    "fr": {
     "q": "Ton artiste préféré, tu l’as découvert…",
     "r": [
      [
       "👪",
       "Grâce à la famille"
      ],
      [
       "👫",
       "Grâce à un ami"
      ],
      [
       "🤖",
       "Grâce à un algorithme"
      ],
      [
       "🎬",
       "Dans un film ou une série"
      ]
     ],
     "relance": "Qui vous a fait découvrir le plus de musique ?"
    },
    "en": {
     "q": "You discovered your favourite artist…",
     "r": [
      "Through family",
      "Through a friend",
      "Through an algorithm",
      "In a film or a show"
     ],
     "relance": "Who’s introduced you to the most music?"
    }
   },
   {
    "fr": {
     "q": "Un mot pour la musique que tu aimes ?",
     "r": [
      [
       "⚡",
       "Énergique"
      ],
      [
       "🌙",
       "Mélancolique"
      ],
      [
       "☀️",
       "Joyeuse"
      ],
      [
       "🌀",
       "Bizarre"
      ]
     ],
     "relance": "Trois artistes pour la décrire, sans réfléchir."
    },
    "en": {
     "q": "One word for the music you love?",
     "r": [
      "Energetic",
      "Melancholic",
      "Joyful",
      "Weird"
     ],
     "relance": "Three artists to sum it up, no thinking."
    }
   },
   {
    "fr": {
     "q": "La bande-son de ta vie commencerait par…",
     "r": [
      [
       "🎺",
       "Une fanfare triomphale"
      ],
      [
       "🎹",
       "Un piano tout doux"
      ],
      [
       "🎛️",
       "Un gros drop électro"
      ],
      [
       "🪕",
       "Un petit air de banjo"
      ]
     ],
     "relance": "Et quelle chanson pour le générique de fin ?"
    },
    "en": {
     "q": "The soundtrack of your life opens with…",
     "r": [
      "A triumphant brass band",
      "A gentle piano",
      "A huge electro drop",
      "A little banjo tune"
     ],
     "relance": "And which song plays over the end credits?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Chantez chacun les paroles d’une chanson connue sur l’air d’une autre. L’autre devine les deux.",
    "en": "Each sing the lyrics of a famous song to the tune of another. The other guesses both."
   },
   {
    "fr": "Écrivez ensemble un refrain de quatre lignes sur votre rencontre, puis chantez-le.",
    "en": "Write a four-line chorus about meeting each other, then sing it."
   },
   {
    "fr": "Imitez chacun un instrument avec la voix : batterie, trompette, guitare… L’autre devine.",
    "en": "Each imitate an instrument with your voice: drums, trumpet, guitar… The other guesses."
   },
   {
    "fr": "Un mot, une chanson : l’un dit un mot, l’autre doit chanter un bout de chanson qui le contient. Trois tours chacun.",
    "en": "One word, one song: one says a word, the other must sing a bit of a song that has it. Three rounds each."
   },
   {
    "fr": "Inventez votre groupe : son nom, son style et le titre de son premier tube.",
    "en": "Invent your band: its name, its style and the title of its first hit."
   },
   {
    "fr": "Chantez chacun « Joyeux anniversaire » dans un style choisi en secret : opéra, rap, rock… L’autre devine le style.",
    "en": "Each sing “Happy Birthday” in a secretly chosen style: opera, rap, rock… The other guesses the style."
   },
   {
    "fr": "Beatbox à deux : l’un fait le rythme, l’autre chante par-dessus pendant vingt secondes, puis on échange.",
    "en": "Beatbox duo: one does the beat, the other sings over it for twenty seconds, then swap."
   },
   {
    "fr": "Citez à tour de rôle un artiste qui commence par la même lettre. Celui qui sèche choisit la lettre suivante.",
    "en": "Take turns naming artists that start with the same letter. Whoever gets stuck picks the next letter."
   }
  ]
 },
 {
  "id": "sport",
  "em": "⚽",
  "nom": {
   "fr": "Sport",
   "en": "Sports",
   "es": "Deportes",
   "de": "Sport",
   "ar": "رياضة"
  },
  "desc": {
   "fr": "Supporters, matchs et sport du dimanche, pour se défier gentiment.",
   "en": "Fans, matches and Sunday sports, for a friendly face-off.",
   "es": "Hinchas, partidos y deporte de domingo, para retarse con buen rollo.",
   "de": "Fans, Spiele und Sonntagssport für ein freundliches Kräftemessen.",
   "ar": "مشجعون ومباريات ورياضة الأحد لتحدٍّ ودّي."
  },
  "questions": [
   {
    "fr": {
     "q": "Un grand match à la télé. Tu le regardes…",
     "r": [
      [
       "🛋️",
       "Sur mon canapé, en silence"
      ],
      [
       "🍕",
       "Avec des amis et des pizzas"
      ],
      [
       "🏟️",
       "Au stade, sinon rien"
      ],
      [
       "📱",
       "Je regarde juste le score"
      ]
     ],
     "relance": "Racontez le match qui vous a le plus fait crier."
    },
    "en": {
     "q": "A big game is on TV. You watch it…",
     "r": [
      "On my couch, in silence",
      "With friends and pizza",
      "At the stadium or not at all",
      "I just check the score"
     ],
     "relance": "Tell each other about the game that made you yell the most."
    }
   },
   {
    "fr": {
     "q": "Ton rôle dans un match entre amis ?",
     "r": [
      [
       "🧤",
       "Gardien, personne d’autre ne veut"
      ],
      [
       "⚡",
       "Celui qui court partout"
      ],
      [
       "📣",
       "Le coach sur le bord du terrain"
      ],
      [
       "🍿",
       "Le public, c’est déjà bien"
      ]
     ],
     "relance": "Racontez votre plus beau geste… ou votre plus gros raté."
    },
    "en": {
     "q": "Your role in a friendly match?",
     "r": [
      "Goalkeeper, since nobody else will",
      "The one running everywhere",
      "The coach on the sideline",
      "The crowd, that counts too"
     ],
     "relance": "Share your best move… or your biggest miss."
    }
   },
   {
    "fr": {
     "q": "Quand ton équipe perd, tu…",
     "r": [
      [
       "😤",
       "Boudes jusqu’au lendemain"
      ],
      [
       "🧐",
       "Analyses chaque erreur"
      ],
      [
       "🤷",
       "Passes vite à autre chose"
      ],
      [
       "🔄",
       "Changes d’équipe en douce"
      ]
     ],
     "relance": "Quelle défaite vous reste encore en travers de la gorge ?"
    },
    "en": {
     "q": "When your team loses, you…",
     "r": [
      "Sulk until the next day",
      "Analyze every mistake",
      "Move on right away",
      "Quietly switch teams"
     ],
     "relance": "Which defeat are you still not over?"
    }
   },
   {
    "fr": {
     "q": "Le sport le plus fascinant à regarder ?",
     "r": [
      [
       "🎾",
       "Le tennis"
      ],
      [
       "🚴",
       "Le Tour de France"
      ],
      [
       "🏉",
       "Le rugby"
      ],
      [
       "⛸️",
       "Le patinage artistique"
      ]
     ],
     "relance": "Expliquez la règle de ce sport que personne ne comprend."
    },
    "en": {
     "q": "The most fascinating sport to watch?",
     "r": [
      "Tennis",
      "The Tour de France",
      "Rugby",
      "Figure skating"
     ],
     "relance": "Explain the one rule in that sport nobody understands."
    }
   },
   {
    "fr": {
     "q": "Les Jeux olympiques, tu regardes…",
     "r": [
      [
       "🌙",
       "Même les épreuves à 3 h du matin"
      ],
      [
       "🥇",
       "Seulement les finales"
      ],
      [
       "🏹",
       "Les sports bizarres que je découvre"
      ],
      [
       "🙈",
       "Rien du tout, je l’avoue"
      ]
     ],
     "relance": "Racontez l’épreuve olympique qui vous a le plus surpris."
    },
    "en": {
     "q": "During the Olympics, you watch…",
     "r": [
      "Even the 3 a.m. events",
      "Only the finals",
      "The odd sports I’ve never heard of",
      "Nothing at all, I confess"
     ],
     "relance": "Tell each other about the Olympic event that surprised you most."
    }
   },
   {
    "fr": {
     "q": "Un sport que tu rêves d’essayer ?",
     "r": [
      [
       "🏄",
       "Le surf"
      ],
      [
       "🧗",
       "L’escalade"
      ],
      [
       "🤺",
       "L’escrime"
      ],
      [
       "🪂",
       "Le parachute"
      ]
     ],
     "relance": "Racontez ce qui vous a donné envie… et ce qui vous retient encore."
    },
    "en": {
     "q": "A sport you dream of trying?",
     "r": [
      "Surfing",
      "Climbing",
      "Fencing",
      "Skydiving"
     ],
     "relance": "Share what made you want to… and what’s still holding you back."
    }
   },
   {
    "fr": {
     "q": "Ton souvenir de sport à l’école ?",
     "r": [
      [
       "🏐",
       "Le volley où personne ne touche la balle"
      ],
      [
       "🤸",
       "Les roulades au gymnase"
      ],
      [
       "🏃",
       "Le cross dans la boue"
      ],
      [
       "🎯",
       "La balle aux prisonniers"
      ]
     ],
     "relance": "Racontez votre prof de sport le plus mémorable."
    },
    "en": {
     "q": "Your school PE memory?",
     "r": [
      "Volleyball where nobody touches the ball",
      "Forward rolls in the gym",
      "Cross-country in the mud",
      "Dodgeball"
     ],
     "relance": "Tell each other about your most memorable PE teacher."
    }
   },
   {
    "fr": {
     "q": "Dans les tribunes, tu es…",
     "r": [
      [
       "🎺",
       "Celui qui chante tout le match"
      ],
      [
       "🤫",
       "Concentré, ne me parle pas"
      ],
      [
       "📸",
       "Occupé à tout filmer"
      ],
      [
       "🌭",
       "Surtout là pour le sandwich"
      ]
     ],
     "relance": "Chantez un chant de supporter, même inventé."
    },
    "en": {
     "q": "In the stands, you’re…",
     "r": [
      "The one singing the whole game",
      "Focused, don’t talk to me",
      "Busy filming everything",
      "Mostly there for the hot dog"
     ],
     "relance": "Sing a fan chant, even a made-up one."
    }
   },
   {
    "fr": {
     "q": "Le maillot qui dort dans ton placard ?",
     "r": [
      [
       "⚽",
       "Celui d’un club de foot"
      ],
      [
       "🏀",
       "Celui d’une équipe NBA"
      ],
      [
       "🎽",
       "Celui d’une course que j’ai finie"
      ],
      [
       "👕",
       "Aucun, que des t-shirts"
      ]
     ],
     "relance": "Racontez l’histoire de ce maillot (ou pourquoi vous n’en avez pas)."
    },
    "en": {
     "q": "The jersey sleeping in your closet?",
     "r": [
      "A football club’s",
      "An NBA team’s",
      "One from a race I finished",
      "None, just plain T-shirts"
     ],
     "relance": "Tell the story of that jersey (or why you don’t have one)."
    }
   },
   {
    "fr": {
     "q": "Le dimanche matin sportif idéal ?",
     "r": [
      [
       "🏃",
       "Un footing tranquille"
      ],
      [
       "🚲",
       "Une balade à vélo"
      ],
      [
       "🏊",
       "Quelques longueurs à la piscine"
      ],
      [
       "😴",
       "Regarder les autres courir"
      ]
     ],
     "relance": "Racontez votre meilleur coin pour bouger près d’ici."
    },
    "en": {
     "q": "The ideal sporty Sunday morning?",
     "r": [
      "An easy jog",
      "A bike ride",
      "A few laps at the pool",
      "Watching other people run"
     ],
     "relance": "Share your favorite spot to get moving around here."
    }
   },
   {
    "fr": {
     "q": "Un jeu vidéo de sport, tu choisis…",
     "r": [
      [
       "🎮",
       "Un jeu de foot"
      ],
      [
       "🏎️",
       "Une course de voitures"
      ],
      [
       "🏀",
       "Un jeu de basket"
      ],
      [
       "🕹️",
       "Wii Sports, le vrai classique"
      ]
     ],
     "relance": "Racontez votre plus grande victoire manette en main."
    },
    "en": {
     "q": "For a sports video game, you pick…",
     "r": [
      "A football game",
      "A racing game",
      "A basketball game",
      "Wii Sports, the true classic"
     ],
     "relance": "Tell each other about your greatest win, controller in hand."
    }
   },
   {
    "fr": {
     "q": "Ta célébration après un but ?",
     "r": [
      [
       "🕺",
       "Une petite danse"
      ],
      [
       "🙌",
       "Les bras au ciel"
      ],
      [
       "🫡",
       "Le salut au public"
      ],
      [
       "😎",
       "Rien, comme si c’était normal"
      ]
     ],
     "relance": "Montrez votre célébration, là, maintenant."
    },
    "en": {
     "q": "Your goal celebration?",
     "r": [
      "A little dance",
      "Arms up to the sky",
      "A salute to the crowd",
      "Nothing, like it’s routine"
     ],
     "relance": "Show your celebration, right here, right now."
    }
   },
   {
    "fr": {
     "q": "Le sport le plus sous-estimé ?",
     "r": [
      [
       "🏓",
       "Le ping-pong"
      ],
      [
       "🎳",
       "Le bowling"
      ],
      [
       "♟️",
       "Les échecs (si, ça compte)"
      ],
      [
       "🥏",
       "Le frisbee"
      ]
     ],
     "relance": "Défendez votre choix en une phrase, comme un avocat."
    },
    "en": {
     "q": "The most underrated sport?",
     "r": [
      "Ping-pong",
      "Bowling",
      "Chess (yes, it counts)",
      "Frisbee"
     ],
     "relance": "Defend your pick in one sentence, like a lawyer."
    }
   },
   {
    "fr": {
     "q": "Un champion avec qui prendre un café ?",
     "r": [
      [
       "🎾",
       "Une star du tennis"
      ],
      [
       "⚽",
       "Une légende du foot"
      ],
      [
       "🏃",
       "Un champion d’athlétisme"
      ],
      [
       "🏂",
       "Un champion de glisse"
      ]
     ],
     "relance": "Racontez la première question que vous lui poseriez."
    },
    "en": {
     "q": "A champion to grab a coffee with?",
     "r": [
      "A tennis star",
      "A football legend",
      "A track and field champion",
      "A board-sports champion"
     ],
     "relance": "Share the first question you’d ask them."
    }
   },
   {
    "fr": {
     "q": "La règle du hors-jeu, tu…",
     "r": [
      [
       "🎓",
       "Pourrais l’expliquer les yeux fermés"
      ],
      [
       "🤔",
       "La comprends à moitié"
      ],
      [
       "🙃",
       "Fais semblant de la comprendre"
      ],
      [
       "❓",
       "C’est quoi, le hors-jeu ?"
      ]
     ],
     "relance": "Tentez de l’expliquer à l’autre en vingt secondes."
    },
    "en": {
     "q": "The offside rule, you…",
     "r": [
      "Could explain it blindfolded",
      "Half get it",
      "Pretend to get it",
      "What’s offside?"
     ],
     "relance": "Try to explain it to each other in twenty seconds."
    }
   },
   {
    "fr": {
     "q": "Ton équipement de sport, c’est…",
     "r": [
      [
       "🆕",
       "Tout neuf, jamais servi"
      ],
      [
       "🩳",
       "Le même short depuis le lycée"
      ],
      [
       "🎒",
       "Un sac toujours prêt"
      ],
      [
       "🤷",
       "Ce que je trouve le jour même"
      ]
     ],
     "relance": "Racontez l’objet de sport que vous gardez sans jamais vous en servir."
    },
    "en": {
     "q": "Your sports gear is…",
     "r": [
      "Brand new, never used",
      "The same shorts since high school",
      "A bag that’s always packed",
      "Whatever I find on the day"
     ],
     "relance": "Tell each other about the sports item you keep but never use."
    }
   },
   {
    "fr": {
     "q": "Plutôt sport collectif ou en solo ?",
     "r": [
      [
       "🤝",
       "Collectif, pour l’ambiance"
      ],
      [
       "🎧",
       "Solo, avec ma musique"
      ],
      [
       "👯",
       "À deux, c’est parfait"
      ],
      [
       "🌀",
       "Ça dépend de l’humeur"
      ]
     ],
     "relance": "Racontez la meilleure équipe dont vous avez fait partie, sportive ou pas."
    },
    "en": {
     "q": "Team sport or solo?",
     "r": [
      "Team, for the vibe",
      "Solo, with my music",
      "In pairs, it’s perfect",
      "Depends on my mood"
     ],
     "relance": "Tell each other about the best team you’ve been part of, sporty or not."
    }
   },
   {
    "fr": {
     "q": "Pendant une compétition, tu es…",
     "r": [
      [
       "🔥",
       "Mauvais perdant, j’assume"
      ],
      [
       "😇",
       "Fair-play en toutes circonstances"
      ],
      [
       "🗣️",
       "Le roi du chambrage"
      ],
      [
       "😅",
       "Content de juste participer"
      ]
     ],
     "relance": "Racontez la fois où vous avez été le plus mauvais perdant."
    },
    "en": {
     "q": "During a competition, you’re…",
     "r": [
      "A sore loser, and proud of it",
      "Fair play no matter what",
      "The king of trash talk",
      "Just happy to take part"
     ],
     "relance": "Share the time you were the sorest loser."
    }
   },
   {
    "fr": {
     "q": "Le moment sportif que tu aurais voulu vivre en direct ?",
     "r": [
      [
       "🏆",
       "Une finale de Coupe du monde"
      ],
      [
       "🏅",
       "Un record olympique"
      ],
      [
       "🎾",
       "Une finale à Roland-Garros"
      ],
      [
       "🚴",
       "Une arrivée du Tour sur les Champs-Élysées"
      ]
     ],
     "relance": "Racontez un moment de sport que vous avez vraiment vécu, sur place ou à la télé."
    },
    "en": {
     "q": "The sports moment you wish you’d seen live?",
     "r": [
      "A World Cup final",
      "An Olympic record",
      "A French Open final",
      "A Tour finish on the Champs-Élysées"
     ],
     "relance": "Share a sports moment you actually lived, in person or on TV."
    }
   },
   {
    "fr": {
     "q": "Pour te motiver à bouger, il te faut…",
     "r": [
      [
       "🎵",
       "Une bonne playlist"
      ],
      [
       "👟",
       "Un ami qui m’attend en bas"
      ],
      [
       "🏅",
       "Un défi à relever"
      ],
      [
       "☀️",
       "Du soleil, c’est tout"
      ]
     ],
     "relance": "Racontez le morceau qui vous donne envie de courir."
    },
    "en": {
     "q": "To get you moving, you need…",
     "r": [
      "A good playlist",
      "A friend waiting downstairs",
      "A challenge to take on",
      "Sunshine, that’s all"
     ],
     "relance": "Tell each other the song that makes you want to run."
    }
   }
  ],
  "defis": [
   {
    "fr": "Commentez à tour de rôle, comme à la télé, ce qui se passe autour de vous. Vingt secondes chacun.",
    "en": "Take turns commentating, TV-style, whatever is happening around you. Twenty seconds each."
   },
   {
    "fr": "Inventez ensemble un sport qui n’existe pas : son nom, sa règle principale et son trophée.",
    "en": "Invent a sport that doesn’t exist: its name, its main rule and its trophy."
   },
   {
    "fr": "Mimez chacun un sport sans un mot. L’autre a quinze secondes pour deviner.",
    "en": "Each mime a sport without a word. The other has fifteen seconds to guess."
   },
   {
    "fr": "Pierre-feuille-ciseaux en trois manches, avec une célébration de champion à chaque point gagné.",
    "en": "Rock-paper-scissors, best of three, with a champion’s celebration for every point."
   },
   {
    "fr": "Inventez un chant de supporter à la gloire de l’autre, et chantez-le.",
    "en": "Make up a fan chant in honor of the other person, then sing it."
   },
   {
    "fr": "Rejouez au ralenti le plus beau but de l’histoire, avec la voix du commentateur. Inventé, c’est permis.",
    "en": "Replay the greatest goal ever in slow motion, with commentator voice. Made-up ones allowed."
   },
   {
    "fr": "Citez un sport chacun votre tour. Le premier qui sèche ou se répète a perdu.",
    "en": "Take turns naming a sport. First to freeze or repeat one loses."
   },
   {
    "fr": "Interview d’après-match : l’un est le champion, l’autre le journaliste. Puis on échange.",
    "en": "Post-match interview: one is the champion, the other the reporter. Then swap."
   }
  ]
 },
 {
  "id": "enfance",
  "em": "🧸",
  "nom": {
   "fr": "Enfance",
   "en": "Childhood",
   "es": "Infancia",
   "de": "Kindheit",
   "ar": "الطفولة"
  },
  "desc": {
   "fr": "Goûters, dessins animés et jeux de cour, pour retomber en enfance.",
   "en": "After-school snacks, cartoons and playground games to feel like a kid again.",
   "es": "Meriendas, dibujos animados y juegos de recreo para volver a ser niños.",
   "de": "Pausensnacks, Zeichentrick und Schulhofspiele, um wieder Kind zu sein.",
   "ar": "وجبات ما بعد المدرسة والرسوم المتحركة وألعاب الساحة لنعود أطفالًا."
  },
  "questions": [
   {
    "fr": {
     "q": "Ton goûter préféré à la sortie de l’école ?",
     "r": [
      [
       "🥐",
       "Un pain au chocolat (ou une chocolatine)"
      ],
      [
       "🍞",
       "Une tartine de confiture"
      ],
      [
       "🍪",
       "Des biscuits fourrés"
      ],
      [
       "🍎",
       "Une pomme, vraiment"
      ]
     ],
     "relance": "Racontez le goûter qui vous faisait courir jusqu’à la maison."
    },
    "en": {
     "q": "Your favorite after-school snack?",
     "r": [
      "A chocolate croissant",
      "Bread and jam",
      "Sandwich cookies",
      "An apple, honestly"
     ],
     "relance": "Tell each other about the snack that made you run home."
    }
   },
   {
    "fr": {
     "q": "Le dessin animé du matin ?",
     "r": [
      [
       "🐉",
       "Dragon Ball Z"
      ],
      [
       "🧽",
       "Bob l’éponge"
      ],
      [
       "⚡",
       "Pokémon"
      ],
      [
       "🏰",
       "Un vieux classique Disney"
      ]
     ],
     "relance": "Racontez l’épisode qui vous a le plus marqué."
    },
    "en": {
     "q": "The morning cartoon?",
     "r": [
      "Dragon Ball Z",
      "SpongeBob",
      "Pokémon",
      "An old Disney classic"
     ],
     "relance": "Share the episode that stuck with you the most."
    }
   },
   {
    "fr": {
     "q": "Pour choisir qui commence, on faisait…",
     "r": [
      [
       "👉",
       "« Am stram gram »"
      ],
      [
       "🪙",
       "Pile ou face"
      ],
      [
       "🏃",
       "Une course jusqu’au mur"
      ],
      [
       "🎂",
       "Le plus âgé commence"
      ]
     ],
     "relance": "Racontez la dispute de récré la plus mémorable de votre classe."
    },
    "en": {
     "q": "To decide who went first, we used…",
     "r": [
      "“Eeny, meeny, miny, moe”",
      "Heads or tails",
      "A race to the wall",
      "Oldest goes first"
     ],
     "relance": "Tell each other about the most memorable recess argument in your class."
    }
   },
   {
    "fr": {
     "q": "Ta trousse, c’était…",
     "r": [
      [
       "🖍️",
       "Vingt feutres de toutes les couleurs"
      ],
      [
       "✏️",
       "Un crayon et une gomme mâchouillée"
      ],
      [
       "🖊️",
       "Le stylo quatre couleurs"
      ],
      [
       "🎒",
       "Oubliée une fois sur deux"
      ]
     ],
     "relance": "Racontez l’objet d’école que vous auriez voulu garder."
    },
    "en": {
     "q": "Your pencil case was…",
     "r": [
      "Twenty felt-tips in every color",
      "A pencil and a chewed-up eraser",
      "The four-color pen",
      "Forgotten half the time"
     ],
     "relance": "Tell each other about the school item you wish you’d kept."
    }
   },
   {
    "fr": {
     "q": "Le métier que tu voulais faire petit ?",
     "r": [
      [
       "🚒",
       "Pompier"
      ],
      [
       "🦖",
       "Paléontologue"
      ],
      [
       "🎤",
       "Chanteur ou chanteuse"
      ],
      [
       "🚀",
       "Astronaute"
      ]
     ],
     "relance": "Racontez ce qu’il en reste aujourd’hui."
    },
    "en": {
     "q": "The job you dreamed of as a kid?",
     "r": [
      "Firefighter",
      "Paleontologist",
      "Singer",
      "Astronaut"
     ],
     "relance": "Share what’s left of that dream today."
    }
   },
   {
    "fr": {
     "q": "La cantine, c’était…",
     "r": [
      [
       "🍟",
       "Vivement les frites du vendredi"
      ],
      [
       "🥦",
       "Tout donner au voisin"
      ],
      [
       "🍮",
       "Seulement pour le dessert"
      ],
      [
       "🏠",
       "Je rentrais manger à la maison"
      ]
     ],
     "relance": "Racontez le plat de cantine qui vous fait encore grimacer (ou saliver)."
    },
    "en": {
     "q": "The school canteen was…",
     "r": [
      "Living for Friday fries",
      "Giving everything to my neighbor",
      "Only there for dessert",
      "I went home for lunch"
     ],
     "relance": "Tell each other about the canteen dish that still makes you cringe (or drool)."
    }
   },
   {
    "fr": {
     "q": "Ton jouet fétiche ?",
     "r": [
      [
       "🧸",
       "Une peluche toute usée"
      ],
      [
       "🧱",
       "Des briques à construire"
      ],
      [
       "🚗",
       "Des petites voitures"
      ],
      [
       "🎮",
       "Une console portable"
      ]
     ],
     "relance": "Racontez où il est aujourd’hui."
    },
    "en": {
     "q": "Your favorite toy?",
     "r": [
      "A worn-out teddy",
      "Building bricks",
      "Toy cars",
      "A handheld console"
     ],
     "relance": "Share where it is today."
    }
   },
   {
    "fr": {
     "q": "Un mercredi après-midi, tu étais…",
     "r": [
      [
       "🎨",
       "À une activité créative"
      ],
      [
       "⚽",
       "Au club de sport"
      ],
      [
       "📺",
       "Devant la télé"
      ],
      [
       "🌳",
       "Dehors jusqu’au dîner"
      ]
     ],
     "relance": "Racontez ce que vous feriez d’un mercredi après-midi libre aujourd’hui."
    },
    "en": {
     "q": "On a free afternoon after school, you were…",
     "r": [
      "At an arts and crafts class",
      "At sports practice",
      "In front of the TV",
      "Outside until dinner"
     ],
     "relance": "Share what you’d do with a free afternoon today."
    }
   },
   {
    "fr": {
     "q": "Ton bulletin scolaire disait…",
     "r": [
      [
       "🌟",
       "« Élève sérieux »"
      ],
      [
       "💬",
       "« Bavarde en classe »"
      ],
      [
       "🌙",
       "« Rêveur »"
      ],
      [
       "🤹",
       "« Peut mieux faire »"
      ]
     ],
     "relance": "Racontez la remarque d’un prof dont vous vous souvenez encore."
    },
    "en": {
     "q": "Your school report said…",
     "r": [
      "“A diligent pupil”",
      "“Talks too much in class”",
      "“Daydreams a lot”",
      "“Could do better”"
     ],
     "relance": "Share a teacher’s comment you still remember."
    }
   },
   {
    "fr": {
     "q": "Ta cabane d’enfance était…",
     "r": [
      [
       "🌳",
       "Dans un arbre"
      ],
      [
       "🛋️",
       "En coussins dans le salon"
      ],
      [
       "🛏️",
       "Sous le lit"
      ],
      [
       "📦",
       "Dans un carton géant"
      ]
     ],
     "relance": "Racontez qui avait le droit d’y entrer, et le mot de passe."
    },
    "en": {
     "q": "Your childhood fort was…",
     "r": [
      "Up a tree",
      "Made of cushions in the living room",
      "Under the bed",
      "In a giant cardboard box"
     ],
     "relance": "Tell each other who was allowed in, and the password."
    }
   },
   {
    "fr": {
     "q": "À la fête de l’école, tu…",
     "r": [
      [
       "💃",
       "Dansais sur scène"
      ],
      [
       "🎭",
       "Jouais un arbre dans la pièce"
      ],
      [
       "🎣",
       "Tenais le stand de pêche à la ligne"
      ],
      [
       "🙈",
       "Te cachais derrière les adultes"
      ]
     ],
     "relance": "Racontez votre rôle de spectacle le plus mémorable."
    },
    "en": {
     "q": "At the school fair, you…",
     "r": [
      "Danced on stage",
      "Played a tree in the play",
      "Ran the fishing game stall",
      "Hid behind the grown-ups"
     ],
     "relance": "Share your most memorable stage role."
    }
   },
   {
    "fr": {
     "q": "Tes cartes à collectionner ?",
     "r": [
      [
       "🃏",
       "Pokémon"
      ],
      [
       "⚽",
       "Les vignettes de foot"
      ],
      [
       "🪄",
       "Yu-Gi-Oh!"
      ],
      [
       "🪨",
       "Aucune, je collectionnais les cailloux"
      ]
     ],
     "relance": "Racontez la carte (ou le caillou) que vous n’auriez jamais échangé."
    },
    "en": {
     "q": "Your trading cards?",
     "r": [
      "Pokémon",
      "Football stickers",
      "Yu-Gi-Oh!",
      "None, I collected rocks"
     ],
     "relance": "Tell each other about the card (or rock) you’d never have traded."
    }
   },
   {
    "fr": {
     "q": "Le jour de la photo de classe, tu…",
     "r": [
      [
       "😁",
       "Souriais à fond"
      ],
      [
       "😑",
       "Fermais les yeux pile au flash"
      ],
      [
       "🤪",
       "Faisais une grimace"
      ],
      [
       "👔",
       "Portais ta tenue des grands jours"
      ]
     ],
     "relance": "Racontez votre photo de classe la plus drôle."
    },
    "en": {
     "q": "On class photo day, you…",
     "r": [
      "Smiled big",
      "Blinked right at the flash",
      "Pulled a funny face",
      "Wore your Sunday best"
     ],
     "relance": "Describe your funniest class photo."
    }
   },
   {
    "fr": {
     "q": "En colonie ou au centre de loisirs, tu étais…",
     "r": [
      [
       "🔦",
       "Celui des histoires à la lampe"
      ],
      [
       "🏆",
       "Le champion des grands jeux"
      ],
      [
       "💌",
       "Celui qui écrivait des lettres"
      ],
      [
       "🏡",
       "Pressé de rentrer"
      ]
     ],
     "relance": "Racontez une veillée dont vous vous souvenez encore."
    },
    "en": {
     "q": "At summer camp, you were…",
     "r": [
      "The flashlight storyteller",
      "The champion of big outdoor games",
      "The one writing letters home",
      "Counting the days till home"
     ],
     "relance": "Share a campfire night you still remember."
    }
   },
   {
    "fr": {
     "q": "La lecture de ton enfance ?",
     "r": [
      [
       "🧙",
       "Harry Potter"
      ],
      [
       "🕵️",
       "Une série d’enquêtes entre copains"
      ],
      [
       "📖",
       "Astérix ou Tintin"
      ],
      [
       "🦁",
       "Un album lu cent fois avant de dormir"
      ]
     ],
     "relance": "Racontez un personnage dont vous vous souvenez encore."
    },
    "en": {
     "q": "Your childhood reading?",
     "r": [
      "Harry Potter",
      "A kids’ detective series",
      "Asterix or Tintin",
      "A picture book read a hundred times at bedtime"
     ],
     "relance": "Tell each other about a character you still remember."
    }
   },
   {
    "fr": {
     "q": "Ta bêtise d’enfant la plus célèbre ?",
     "r": [
      [
       "🖍️",
       "Dessiner sur les murs"
      ],
      [
       "🍬",
       "Piller la boîte à bonbons"
      ],
      [
       "🙊",
       "Répéter un gros mot devant tout le monde"
      ],
      [
       "🫥",
       "Me cacher pendant des heures"
      ]
     ],
     "relance": "Racontez-la, version courte."
    },
    "en": {
     "q": "Your most famous childhood mischief?",
     "r": [
      "Drawing on the walls",
      "Raiding the candy jar",
      "Repeating a swear word in front of everyone",
      "Hiding for hours"
     ],
     "relance": "Tell it, short version."
    }
   },
   {
    "fr": {
     "q": "À la récré, on échangeait…",
     "r": [
      [
       "🍭",
       "Des bonbons"
      ],
      [
       "🔵",
       "Des billes"
      ],
      [
       "🤫",
       "Des secrets"
      ],
      [
       "📝",
       "Les réponses des devoirs"
      ]
     ],
     "relance": "Racontez le meilleur échange de votre vie d’élève."
    },
    "en": {
     "q": "At recess, we traded…",
     "r": [
      "Candy",
      "Marbles",
      "Secrets",
      "Homework answers"
     ],
     "relance": "Share the best trade of your school days."
    }
   },
   {
    "fr": {
     "q": "Le générique que tu connais encore par cœur ?",
     "r": [
      [
       "🎵",
       "Celui d’un dessin animé japonais"
      ],
      [
       "🐭",
       "Un générique Disney"
      ],
      [
       "📺",
       "Celui d’une émission jeunesse"
      ],
      [
       "🎶",
       "Une pub de jouets"
      ]
     ],
     "relance": "Chantez-en dix secondes : l’autre devine le titre."
    },
    "en": {
     "q": "The theme song you still know by heart?",
     "r": [
      "A Japanese cartoon’s",
      "A Disney theme song",
      "A kids’ TV show’s",
      "A toy commercial jingle"
     ],
     "relance": "Sing ten seconds of it: the other guesses the title."
    }
   },
   {
    "fr": {
     "q": "Le premier jour d’école, tu…",
     "r": [
      [
       "😭",
       "Pleurais à la grille"
      ],
      [
       "🤝",
       "Te faisais un ami tout de suite"
      ],
      [
       "👀",
       "Observais tout en silence"
      ],
      [
       "🎒",
       "Montrais ton cartable neuf à tous"
      ]
     ],
     "relance": "Racontez votre premier ami d’école : vous vous souvenez de son prénom ?"
    },
    "en": {
     "q": "On your first day of school, you…",
     "r": [
      "Cried at the gate",
      "Made a friend right away",
      "Watched everything in silence",
      "Showed off your new schoolbag"
     ],
     "relance": "Tell each other about your first school friend: do you remember their name?"
    }
   },
   {
    "fr": {
     "q": "Enfant, tu croyais dur comme fer que…",
     "r": [
      [
       "📺",
       "Des gens vivaient dans la télé"
      ],
      [
       "🌙",
       "La lune suivait la voiture"
      ],
      [
       "🌬️",
       "Une grimace restait si le vent tournait"
      ],
      [
       "🐭",
       "La petite souris passait vraiment"
      ]
     ],
     "relance": "Racontez la croyance d’enfant la plus étrange que vous ayez eue."
    },
    "en": {
     "q": "As a kid, you firmly believed that…",
     "r": [
      "People lived inside the TV",
      "The moon followed the car",
      "A funny face would stick if the wind changed",
      "The Tooth Fairy was totally real"
     ],
     "relance": "Share the strangest thing you believed as a kid."
    }
   }
  ],
  "defis": [
   {
    "fr": "Jouez à « Jacques a dit » : chacun donne trois ordres à l’autre. Les pièges sont permis.",
    "en": "Play Simon Says: each gives the other three commands. Traps allowed."
   },
   {
    "fr": "Chantez ensemble une comptine que vous connaissez tous les deux, sans vous tromper.",
    "en": "Sing a nursery rhyme you both know, together, without slipping up."
   },
   {
    "fr": "Résumez chacun un dessin animé en trois phrases. L’autre devine le titre.",
    "en": "Each sum up a cartoon in three sentences. The other guesses the title."
   },
   {
    "fr": "Concours de grimaces : le premier qui rit a perdu.",
    "en": "Funny-face contest: first one to laugh loses."
   },
   {
    "fr": "« Ni oui ni non » : l’un pose des questions pendant trente secondes, l’autre ne doit jamais dire oui ou non. Puis on échange.",
    "en": "The Yes-No game: one asks questions for thirty seconds, the other must never say yes or no. Then swap."
   },
   {
    "fr": "Inventez le générique d’un dessin animé dont vous êtes les héros, et chantez le refrain.",
    "en": "Invent the theme song of a cartoon starring you two, and sing the chorus."
   },
   {
    "fr": "Imitez chacun votre maîtresse ou votre maître d’école avec sa phrase culte.",
    "en": "Each impersonate your old schoolteacher with their signature line."
   },
   {
    "fr": "Portrait chinois : si l’autre était un dessin animé, un bonbon et un jouet, ce serait… Trois réponses chacun.",
    "en": "If the other person were a cartoon, a candy and a toy, what would they be? Three answers each."
   }
  ]
 },
 {
  "id": "futur",
  "em": "🚀",
  "nom": {
   "fr": "Futur et rêves",
   "en": "Future and dreams",
   "es": "Futuro y sueños",
   "de": "Zukunft und Träume",
   "ar": "المستقبل والأحلام"
  },
  "desc": {
   "fr": "Inventions, voyages fous et vies rêvées, pour imaginer la suite.",
   "en": "Inventions, wild trips and dream lives to picture what comes next.",
   "es": "Inventos, viajes locos y vidas soñadas para imaginar lo que viene.",
   "de": "Erfindungen, verrückte Reisen und Traumleben, um sich das Morgen auszumalen.",
   "ar": "اختراعات ورحلات مجنونة وحياة الأحلام لنتخيّل ما سيأتي."
  },
  "questions": [
   {
    "fr": {
     "q": "Dans dix ans, ton dimanche matin ressemble à…",
     "r": [
      [
       "⛰️",
       "Une rando en montagne"
      ],
      [
       "🥐",
       "Un brunch qui n’en finit pas"
      ],
      [
       "🎨",
       "Un atelier créatif"
      ],
      [
       "📰",
       "Le journal en terrasse"
      ]
     ],
     "relance": "Racontez ce qui aurait changé par rapport à vos dimanches d’aujourd’hui."
    },
    "en": {
     "q": "Ten years from now, your Sunday morning looks like…",
     "r": [
      "A mountain hike",
      "A never-ending brunch",
      "A creative workshop",
      "The paper on a café terrace"
     ],
     "relance": "Share what would be different from your Sundays today."
    }
   },
   {
    "fr": {
     "q": "L’invention qui manque vraiment ?",
     "r": [
      [
       "🧦",
       "Un détecteur de chaussettes perdues"
      ],
      [
       "⏰",
       "Un réveil qui négocie"
      ],
      [
       "🚪",
       "La téléportation"
      ],
      [
       "🧹",
       "Un robot qui range pour de vrai"
      ]
     ],
     "relance": "Racontez la première fois que vous vous en serviriez."
    },
    "en": {
     "q": "The invention the world is missing?",
     "r": [
      "A lost-sock detector",
      "An alarm clock that negotiates",
      "Teleportation",
      "A robot that actually tidies up"
     ],
     "relance": "Tell each other about the first time you’d use it."
    }
   },
   {
    "fr": {
     "q": "Les voitures volantes, tu…",
     "r": [
      [
       "🛸",
       "En réserves une dès demain"
      ],
      [
       "🚲",
       "Restes fidèle au vélo"
      ],
      [
       "😬",
       "Attends que les autres testent"
      ],
      [
       "🚆",
       "Préfères le train, tranquille"
      ]
     ],
     "relance": "Racontez où vous iriez en premier."
    },
    "en": {
     "q": "Flying cars, you…",
     "r": [
      "Pre-order one tomorrow",
      "Stay loyal to your bike",
      "Wait for others to test them",
      "Prefer the train, nice and calm"
     ],
     "relance": "Share where you’d fly first."
    }
   },
   {
    "fr": {
     "q": "Voyager dans le temps pour une journée ?",
     "r": [
      [
       "🦕",
       "Chez les dinosaures"
      ],
      [
       "🏛️",
       "Dans l’Antiquité"
      ],
      [
       "🔭",
       "En l’an 3000"
      ],
      [
       "📼",
       "Dans les années 90"
      ]
     ],
     "relance": "Racontez ce que vous rapporteriez en souvenir."
    },
    "en": {
     "q": "Time travel for one day?",
     "r": [
      "Back to the dinosaurs",
      "To ancient times",
      "To the year 3000",
      "To the ’90s"
     ],
     "relance": "Tell each other what souvenir you’d bring back."
    }
   },
   {
    "fr": {
     "q": "Un rêve de vie un peu fou ?",
     "r": [
      [
       "🗺️",
       "Faire le tour du monde"
      ],
      [
       "📚",
       "Écrire un livre"
      ],
      [
       "🍝",
       "Ouvrir un petit restaurant"
      ],
      [
       "🎸",
       "Monter un groupe de musique"
      ]
     ],
     "relance": "Racontez la toute première étape pour y arriver."
    },
    "en": {
     "q": "A slightly crazy life dream?",
     "r": [
      "Travel around the world",
      "Write a book",
      "Open a little restaurant",
      "Start a band"
     ],
     "relance": "Share the very first step to get there."
    }
   },
   {
    "fr": {
     "q": "Ta maison du futur parle. Tu lui demandes…",
     "r": [
      [
       "☕",
       "Le café avant mon réveil"
      ],
      [
       "🎶",
       "Une musique selon mon humeur"
      ],
      [
       "🧺",
       "De plier le linge"
      ],
      [
       "🤐",
       "De se taire, merci"
      ]
     ],
     "relance": "Racontez le prénom que vous lui donneriez, et pourquoi."
    },
    "en": {
     "q": "Your future home can talk. You ask it…",
     "r": [
      "Coffee before I wake up",
      "Music that fits my mood",
      "To fold the laundry",
      "To stay quiet, thanks"
     ],
     "relance": "Tell each other what you’d name it, and why."
    }
   },
   {
    "fr": {
     "q": "Vivre sur Mars, tu signes ?",
     "r": [
      [
       "🚀",
       "Premier inscrit"
      ],
      [
       "📸",
       "Juste le temps des photos"
      ],
      [
       "🌍",
       "La Terre me va très bien"
      ],
      [
       "📶",
       "Seulement s’il y a du wifi"
      ]
     ],
     "relance": "Racontez l’objet que vous emporteriez là-bas."
    },
    "en": {
     "q": "Living on Mars: are you in?",
     "r": [
      "First to sign up",
      "Just long enough for photos",
      "Earth suits me fine",
      "Only if there’s wifi"
     ],
     "relance": "Share the one object you’d take with you."
    }
   },
   {
    "fr": {
     "q": "Ta lettre à toi-même dans dix ans commence par…",
     "r": [
      [
       "😂",
       "« Alors, toujours en retard ? »"
      ],
      [
       "🤞",
       "« J’espère que tu as essayé… »"
      ],
      [
       "🌱",
       "« Tu te souviens quand… »"
      ],
      [
       "📋",
       "« Liste des promesses tenues »"
      ]
     ],
     "relance": "Lisez à voix haute la première phrase de votre lettre."
    },
    "en": {
     "q": "Your letter to yourself in ten years begins with…",
     "r": [
      "“So, still running late?”",
      "“I hope you tried…”",
      "“Remember when…”",
      "“List of promises kept”"
     ],
     "relance": "Read the first line of your letter out loud."
    }
   },
   {
    "fr": {
     "q": "Un robot de compagnie ?",
     "r": [
      [
       "🐕",
       "Un chien robot"
      ],
      [
       "🤖",
       "Un majordome"
      ],
      [
       "🦜",
       "Un perroquet qui traduit tout"
      ],
      [
       "🙅",
       "Non merci, je préfère les vrais animaux"
      ]
     ],
     "relance": "Racontez son premier défaut, celui qui vous ferait craquer."
    },
    "en": {
     "q": "A robot companion?",
     "r": [
      "A robot dog",
      "A butler",
      "A parrot that translates everything",
      "No thanks, I prefer real pets"
     ],
     "relance": "Tell each other about its first flaw, the one you’d secretly love."
    }
   },
   {
    "fr": {
     "q": "Ce qui te rendrait fier dans dix ans ?",
     "r": [
      [
       "🗣️",
       "Parler une nouvelle langue"
      ],
      [
       "🎹",
       "Jouer d’un instrument"
      ],
      [
       "🥕",
       "Avoir un vrai potager"
      ],
      [
       "🧑‍🍳",
       "Cuisiner sans recette"
      ]
     ],
     "relance": "Racontez depuis quand vous y pensez."
    },
    "en": {
     "q": "What would make you proud in ten years?",
     "r": [
      "Speaking a new language",
      "Playing an instrument",
      "Having a real veggie garden",
      "Cooking without a recipe"
     ],
     "relance": "Share how long you’ve been thinking about it."
    }
   },
   {
    "fr": {
     "q": "Les vacances de 2040 ?",
     "r": [
      [
       "🌊",
       "Un hôtel sous la mer"
      ],
      [
       "🌕",
       "Un week-end sur la Lune"
      ],
      [
       "🚂",
       "Un train à travers trois continents"
      ],
      [
       "🏕️",
       "Un camping sans aucun écran"
      ]
     ],
     "relance": "Racontez qui vous emmèneriez, et ce que vous feriez le premier soir."
    },
    "en": {
     "q": "Vacation in 2040?",
     "r": [
      "An underwater hotel",
      "A weekend on the Moon",
      "A train across three continents",
      "Screen-free camping"
     ],
     "relance": "Tell each other who you’d bring and what you’d do the first night."
    }
   },
   {
    "fr": {
     "q": "L’appli que tu rêves d’avoir ?",
     "r": [
      [
       "🔑",
       "Une qui retrouve mes clés"
      ],
      [
       "🍽️",
       "Une qui décide quoi manger"
      ],
      [
       "💬",
       "Une qui écrit le message parfait"
      ],
      [
       "🌦️",
       "Une météo enfin fiable"
      ]
     ],
     "relance": "Donnez-lui un nom et un slogan, puis racontez la pub."
    },
    "en": {
     "q": "The app you dream of having?",
     "r": [
      "One that finds my keys",
      "One that decides what to eat",
      "One that writes the perfect text",
      "A weather app that’s finally right"
     ],
     "relance": "Give it a name and a slogan, then pitch the ad."
    }
   },
   {
    "fr": {
     "q": "Tu peux apprendre un talent en une nuit. Tu choisis…",
     "r": [
      [
       "🎻",
       "Le violon"
      ],
      [
       "🥋",
       "Un art martial"
      ],
      [
       "🎨",
       "La peinture"
      ],
      [
       "🃏",
       "La magie"
      ]
     ],
     "relance": "Racontez votre première démonstration, devant qui et où."
    },
    "en": {
     "q": "You can learn a talent overnight. You pick…",
     "r": [
      "The violin",
      "A martial art",
      "Painting",
      "Magic tricks"
     ],
     "relance": "Share your first show-off moment: in front of whom, and where."
    }
   },
   {
    "fr": {
     "q": "Ton futur toi, c’est…",
     "r": [
      [
       "🛴",
       "Un senior cool en trottinette"
      ],
      [
       "📖",
       "Un sage qui donne des conseils"
      ],
      [
       "🧳",
       "Un éternel voyageur"
      ],
      [
       "🪴",
       "Quelqu’un avec cent plantes"
      ]
     ],
     "relance": "Racontez une journée type de ce futur vous."
    },
    "en": {
     "q": "Your future self is…",
     "r": [
      "A cool senior on a scooter",
      "A wise advice-giver",
      "A forever traveler",
      "Someone with a hundred plants"
     ],
     "relance": "Describe a typical day for that future you."
    }
   },
   {
    "fr": {
     "q": "À l’école du futur, on apprendra…",
     "r": [
      [
       "🍳",
       "La cuisine"
      ],
      [
       "🛠️",
       "À tout réparer soi-même"
      ],
      [
       "🤖",
       "À parler aux robots"
      ],
      [
       "🎙️",
       "L’art de raconter une histoire"
      ]
     ],
     "relance": "Racontez le cours que vous auriez adoré avoir."
    },
    "en": {
     "q": "At the school of the future, kids will learn…",
     "r": [
      "Cooking",
      "How to fix anything",
      "How to talk to robots",
      "The art of storytelling"
     ],
     "relance": "Tell each other about the class you’d have loved to take."
    }
   },
   {
    "fr": {
     "q": "Un jour, tu aimerais…",
     "r": [
      [
       "🎤",
       "Monter sur scène"
      ],
      [
       "🏔️",
       "Gravir un sommet"
      ],
      [
       "🐋",
       "Voir une baleine en vrai"
      ],
      [
       "🎬",
       "Apparaître dans un film"
      ]
     ],
     "relance": "Racontez où ce serait, et avec qui."
    },
    "en": {
     "q": "Someday, you’d love to…",
     "r": [
      "Get on stage",
      "Climb a summit",
      "See a whale up close",
      "Appear in a movie"
     ],
     "relance": "Share where it would happen, and with whom."
    }
   },
   {
    "fr": {
     "q": "Si tu changeais de vie demain, ce serait pour…",
     "r": [
      [
       "🐓",
       "Une ferme"
      ],
      [
       "⛵",
       "Un bateau"
      ],
      [
       "🏪",
       "Une petite boutique"
      ],
      [
       "🎪",
       "Un cirque"
      ]
     ],
     "relance": "Racontez votre tout premier jour dans cette nouvelle vie."
    },
    "en": {
     "q": "If you changed your life tomorrow, it would be for…",
     "r": [
      "A farm",
      "A boat",
      "A little shop",
      "A circus"
     ],
     "relance": "Tell each other about your very first day in that new life."
    }
   },
   {
    "fr": {
     "q": "La nouveauté que tu n’adopteras jamais ?",
     "r": [
      [
       "🥽",
       "Les lunettes de réalité virtuelle tous les jours"
      ],
      [
       "🚗",
       "La voiture sans conducteur"
      ],
      [
       "🧊",
       "Parler à mon frigo"
      ],
      [
       "🤷",
       "Aucune, je teste tout"
      ]
     ],
     "relance": "Racontez la dernière nouveauté que vous avez adoptée."
    },
    "en": {
     "q": "The new tech you’ll never adopt?",
     "r": [
      "VR glasses every day",
      "Driverless cars",
      "Talking to my fridge",
      "None, I try everything"
     ],
     "relance": "Share the last new thing you did adopt."
    }
   },
   {
    "fr": {
     "q": "Ton rêve le plus simple ?",
     "r": [
      [
       "🌅",
       "Un petit-déjeuner face à la mer"
      ],
      [
       "📵",
       "Une semaine sans téléphone"
      ],
      [
       "🛶",
       "Une descente en canoë"
      ],
      [
       "🌌",
       "Dormir à la belle étoile"
      ]
     ],
     "relance": "Racontez ce qui vous empêche de le faire ce mois-ci."
    },
    "en": {
     "q": "Your simplest dream?",
     "r": [
      "Breakfast facing the sea",
      "A week without my phone",
      "A canoe trip down a river",
      "Sleeping under the stars"
     ],
     "relance": "Tell each other what’s stopping you from doing it this month."
    }
   },
   {
    "fr": {
     "q": "Dans une capsule temporelle, tu mets…",
     "r": [
      [
       "📸",
       "Une photo d’aujourd’hui"
      ],
      [
       "🎧",
       "Ma playlist du moment"
      ],
      [
       "✉️",
       "Une lettre à ouvrir en 2040"
      ],
      [
       "🎟️",
       "Un ticket de concert"
      ]
     ],
     "relance": "Racontez où vous l’enterreriez, et qui l’ouvrirait."
    },
    "en": {
     "q": "In a time capsule, you put…",
     "r": [
      "A photo from today",
      "My current playlist",
      "A letter to open in 2040",
      "A concert ticket"
     ],
     "relance": "Share where you’d bury it, and who’d open it."
    }
   }
  ],
  "defis": [
   {
    "fr": "Présentez chacun, en trente secondes, une invention géniale et parfaitement inutile. L’autre la note sur dix.",
    "en": "Each pitch a brilliant and totally useless invention in thirty seconds. The other rates it out of ten."
   },
   {
    "fr": "Interview dans dix ans : l’un est devenu célèbre, l’autre est journaliste. Puis on échange.",
    "en": "Interview, ten years from now: one has become famous, the other is the reporter. Then swap."
   },
   {
    "fr": "Prédisez trois choses sur la vie de l’autre dans dix ans. L’autre répond « possible » ou « jamais ».",
    "en": "Predict three things about the other’s life in ten years. They answer “maybe” or “never”."
   },
   {
    "fr": "Présentez chacun la météo de l’an 3000, comme à la télé, en vingt secondes.",
    "en": "Each present the weather forecast for the year 3000, TV-style, in twenty seconds."
   },
   {
    "fr": "Inventez ensemble le slogan de votre ville en 2050, puis criez-le comme une pub.",
    "en": "Invent your city’s 2050 slogan together, then shout it like a commercial."
   },
   {
    "fr": "L’un joue un robot qui découvre les humains, l’autre lui explique ce qu’est un lundi matin.",
    "en": "One plays a robot discovering humans, the other explains what a Monday morning is."
   },
   {
    "fr": "Chacun annonce un rêve en une phrase. L’autre propose une première étape faisable cette semaine.",
    "en": "Each state a dream in one sentence. The other suggests a first step doable this week."
   },
   {
    "fr": "Inventez le menu du restaurant du futur : une entrée, un plat, un dessert, et un nom au restaurant.",
    "en": "Invent the menu of a restaurant of the future: a starter, a main, a dessert, and a name for the place."
   }
  ]
 },
 {
  "id": "coloc",
  "em": "🏠",
  "nom": {
   "fr": "Coloc",
   "en": "Roommates",
   "es": "Compartir piso",
   "de": "WG-Leben",
   "ar": "السكن المشترك"
  },
  "desc": {
   "fr": "Vaisselle, règles de la maison et canapé partagé, pour voir si vous tiendriez ensemble.",
   "en": "Dishes, house rules and a shared couch to see if you’d survive living together.",
   "es": "Platos, normas de casa y sofá compartido para ver si sobreviviríais juntos.",
   "de": "Abwasch, Hausregeln und das geteilte Sofa: Würdet ihr zusammen klarkommen?",
   "ar": "الصحون وقواعد البيت والأريكة المشتركة لنرى هل تتفقان في السكن معًا."
  },
  "questions": [
   {
    "fr": {
     "q": "La vaisselle sale dans l’évier, tu…",
     "r": [
      [
       "🧽",
       "La fais tout de suite"
      ],
      [
       "⏳",
       "La laisses tremper « un peu »"
      ],
      [
       "📝",
       "Laisses un petit mot"
      ],
      [
       "🙈",
       "Ne la vois pas"
      ]
     ],
     "relance": "Racontez la pile de vaisselle la plus légendaire que vous ayez vue."
    },
    "en": {
     "q": "Dirty dishes in the sink, you…",
     "r": [
      "Do it right away",
      "Let it soak “for a bit”",
      "Leave a little note",
      "Don’t see it"
     ],
     "relance": "Tell each other about the most legendary pile of dishes you’ve seen."
    }
   },
   {
    "fr": {
     "q": "La règle de la maison qui compte vraiment ?",
     "r": [
      [
       "🔇",
       "Le calme après 23 h"
      ],
      [
       "🔁",
       "On remplace ce qu’on finit"
      ],
      [
       "🚪",
       "On frappe avant d’entrer"
      ],
      [
       "🍽️",
       "Un dîner ensemble par semaine"
      ]
     ],
     "relance": "Racontez la règle absurde que vous ajouteriez au règlement."
    },
    "en": {
     "q": "The house rule that really matters?",
     "r": [
      "Quiet after 11 pm",
      "You finish it, you replace it",
      "Knock before you enter",
      "One dinner together a week"
     ],
     "relance": "Share the absurd rule you’d add to the list."
    }
   },
   {
    "fr": {
     "q": "Ton colocataire idéal ?",
     "r": [
      [
       "👨‍🍳",
       "Un cuisinier qui partage"
      ],
      [
       "🧹",
       "Un maniaque du ménage"
      ],
      [
       "🎸",
       "Un musicien (pas trop fort)"
      ],
      [
       "🐈",
       "Un chat, tout simplement"
      ]
     ],
     "relance": "Racontez le pire colocataire imaginable, version comédie."
    },
    "en": {
     "q": "Your ideal roommate?",
     "r": [
      "A cook who shares",
      "A neat freak",
      "A musician (not too loud)",
      "Just a cat"
     ],
     "relance": "Describe the worst roommate imaginable, comedy version."
    }
   },
   {
    "fr": {
     "q": "Le planning des tâches ménagères, c’est…",
     "r": [
      [
       "📋",
       "Mon chef-d’œuvre"
      ],
      [
       "🎡",
       "Une roue qu’on fait tourner"
      ],
      [
       "🤝",
       "On fait au feeling"
      ],
      [
       "👻",
       "Une légende, personne ne l’a vu"
      ]
     ],
     "relance": "Racontez la corvée que vous fuyez le plus, et votre technique."
    },
    "en": {
     "q": "The chore chart is…",
     "r": [
      "My masterpiece",
      "A wheel we spin",
      "We just wing it",
      "A legend, nobody’s ever seen it"
     ],
     "relance": "Tell each other about the chore you dodge most, and how."
    }
   },
   {
    "fr": {
     "q": "La salle de bain le matin, tu…",
     "r": [
      [
       "⏱️",
       "Passes en trois minutes chrono"
      ],
      [
       "🎤",
       "Y donnes ton concert du matin"
      ],
      [
       "📅",
       "As réservé ton créneau"
      ],
      [
       "🌅",
       "Y vas avant tout le monde"
      ]
     ],
     "relance": "Racontez votre embouteillage du matin le plus mémorable."
    },
    "en": {
     "q": "The bathroom in the morning, you…",
     "r": [
      "Are in and out in three minutes",
      "Hold your morning concert there",
      "Have booked your slot",
      "Get there before everyone"
     ],
     "relance": "Share your most memorable morning traffic jam at home."
    }
   },
   {
    "fr": {
     "q": "Une soirée improvisée au salon ?",
     "r": [
      [
       "🎲",
       "Jeux de société"
      ],
      [
       "🎬",
       "Marathon de films"
      ],
      [
       "🍳",
       "On cuisine à plusieurs"
      ],
      [
       "💬",
       "On discute jusqu’à 2 h"
      ]
     ],
     "relance": "Racontez votre meilleure soirée à la maison en trois phrases."
    },
    "en": {
     "q": "An impromptu night in the living room?",
     "r": [
      "Board games",
      "Movie marathon",
      "Cooking together",
      "Talking till 2 a.m."
     ],
     "relance": "Tell each other about your best night in, in three sentences."
    }
   },
   {
    "fr": {
     "q": "Quelqu’un a mangé ton dernier yaourt. Tu…",
     "r": [
      [
       "🕵️",
       "Mènes l’enquête"
      ],
      [
       "🗒️",
       "Laisses un mot faussement poli"
      ],
      [
       "😇",
       "Pardonnes, c’est la vie"
      ],
      [
       "🥣",
       "Te venges sur ses céréales"
      ]
     ],
     "relance": "Racontez le plus grand vol de nourriture de votre vie."
    },
    "en": {
     "q": "Someone ate your last yogurt. You…",
     "r": [
      "Launch an investigation",
      "Leave a passive-aggressive note",
      "Forgive, that’s life",
      "Take revenge on their cereal"
     ],
     "relance": "Share the biggest food heist of your life."
    }
   },
   {
    "fr": {
     "q": "La musique dans l’appart, c’est…",
     "r": [
      [
       "🔊",
       "Moi qui choisis, toujours"
      ],
      [
       "🎧",
       "Chacun son casque"
      ],
      [
       "📻",
       "La radio en fond"
      ],
      [
       "🤫",
       "Le silence, merci"
      ]
     ],
     "relance": "Racontez le morceau que vous imposeriez à toute la coloc."
    },
    "en": {
     "q": "Music in the apartment is…",
     "r": [
      "Me picking, always",
      "Everyone on headphones",
      "The radio in the background",
      "Silence, please"
     ],
     "relance": "Tell each other the song you’d force on the whole house."
    }
   },
   {
    "fr": {
     "q": "La déco du salon, tu la veux…",
     "r": [
      [
       "🪴",
       "Pleine de plantes"
      ],
      [
       "🖼️",
       "Avec des posters partout"
      ],
      [
       "✨",
       "Minimaliste"
      ],
      [
       "🧭",
       "Pleine d’objets bizarres de brocante"
      ]
     ],
     "relance": "Racontez l’objet le plus étrange que vous ayez accroché chez vous."
    },
    "en": {
     "q": "You want the living room decor…",
     "r": [
      "Full of plants",
      "With posters everywhere",
      "Minimalist",
      "Full of odd flea-market finds"
     ],
     "relance": "Share the strangest thing you’ve ever hung on your wall."
    }
   },
   {
    "fr": {
     "q": "Un invité surprise débarque. Tu…",
     "r": [
      [
       "🍝",
       "Rajoutes des pâtes"
      ],
      [
       "🧹",
       "Ranges en panique"
      ],
      [
       "🛋️",
       "Lui proposes le canapé"
      ],
      [
       "😴",
       "Fais semblant de dormir"
      ]
     ],
     "relance": "Racontez l’invité le plus inattendu que vous ayez reçu."
    },
    "en": {
     "q": "A surprise guest shows up. You…",
     "r": [
      "Throw in more pasta",
      "Tidy up in a panic",
      "Offer them the couch",
      "Pretend to be asleep"
     ],
     "relance": "Tell each other about the most unexpected guest you’ve had."
    }
   },
   {
    "fr": {
     "q": "Le bruit qui t’agace le plus à la maison ?",
     "r": [
      [
       "🚪",
       "Une porte qui claque"
      ],
      [
       "💧",
       "Un robinet qui goutte"
      ],
      [
       "⏰",
       "Un réveil qui sonne sans fin"
      ],
      [
       "🎮",
       "Les cris devant un jeu vidéo"
      ]
     ],
     "relance": "Imitez ce bruit : l’autre devine lequel c’est."
    },
    "en": {
     "q": "The home noise that annoys you most?",
     "r": [
      "A slamming door",
      "A dripping tap",
      "An alarm that won’t stop",
      "Yelling at a video game"
     ],
     "relance": "Imitate the noise: the other guesses which one it is."
    }
   },
   {
    "fr": {
     "q": "Faire les courses pour la coloc, tu…",
     "r": [
      [
       "📝",
       "Suis la liste à la lettre"
      ],
      [
       "🍫",
       "Reviens surtout avec des gâteaux"
      ],
      [
       "🛒",
       "Oublies la moitié"
      ],
      [
       "📲",
       "Appelles trois fois pour demander"
      ]
     ],
     "relance": "Racontez l’achat le plus inutile que vous ayez rapporté."
    },
    "en": {
     "q": "Grocery run for the house, you…",
     "r": [
      "Stick to the list exactly",
      "Come back mostly with snacks",
      "Forget half of it",
      "Call three times to ask"
     ],
     "relance": "Share the most useless thing you’ve ever brought home."
    }
   },
   {
    "fr": {
     "q": "Les poubelles, c’est le tour de…",
     "r": [
      [
       "🙋",
       "Moi, sans râler"
      ],
      [
       "✊",
       "Celui qui perd à pierre-feuille-ciseaux"
      ],
      [
       "🗓️",
       "C’est écrit sur le planning"
      ],
      [
       "🫣",
       "Personne, elles débordent"
      ]
     ],
     "relance": "Racontez votre meilleure excuse pour échapper à une corvée."
    },
    "en": {
     "q": "Taking out the trash is the job of…",
     "r": [
      "Me, no complaints",
      "Whoever loses at rock-paper-scissors",
      "It’s on the schedule",
      "Nobody, they’re overflowing"
     ],
     "relance": "Tell each other your best excuse to get out of a chore."
    }
   },
   {
    "fr": {
     "q": "Le canapé du salon, c’est…",
     "r": [
      [
       "👑",
       "Ma place réservée"
      ],
      [
       "🛏️",
       "Un lit d’appoint pour les amis"
      ],
      [
       "🎮",
       "Le QG des jeux vidéo"
      ],
      [
       "🧺",
       "Là où s’entasse le linge"
      ]
     ],
     "relance": "Racontez la meilleure discussion que vous ayez eue sur un canapé."
    },
    "en": {
     "q": "The living room couch is…",
     "r": [
      "My reserved spot",
      "A spare bed for friends",
      "Video game HQ",
      "Where the laundry piles up"
     ],
     "relance": "Share the best conversation you’ve ever had on a couch."
    }
   },
   {
    "fr": {
     "q": "Ton plat signature pour la coloc ?",
     "r": [
      [
       "🍝",
       "Les pâtes de minuit"
      ],
      [
       "🥘",
       "Un grand plat à partager"
      ],
      [
       "🥞",
       "Les crêpes du dimanche"
      ],
      [
       "📞",
       "Le numéro de la pizzeria"
      ]
     ],
     "relance": "Racontez la recette en trente secondes, comme à la télé."
    },
    "en": {
     "q": "Your signature dish for the house?",
     "r": [
      "Midnight pasta",
      "A big dish to share",
      "Sunday crêpes",
      "The pizza place’s number"
     ],
     "relance": "Give the recipe in thirty seconds, cooking-show style."
    }
   },
   {
    "fr": {
     "q": "Un désaccord de coloc se règle…",
     "r": [
      [
       "🗣️",
       "Autour d’une table"
      ],
      [
       "🟨",
       "Par un post-it sur le frigo"
      ],
      [
       "💬",
       "Dans le groupe de discussion"
      ],
      [
       "🍪",
       "Avec des cookies en signe de paix"
      ]
     ],
     "relance": "Racontez un désaccord qui a fini en fou rire."
    },
    "en": {
     "q": "A roommate disagreement gets settled…",
     "r": [
      "Around a table",
      "With a sticky note on the fridge",
      "In the group chat",
      "With peace-offering cookies"
     ],
     "relance": "Tell each other about a disagreement that ended in laughter."
    }
   },
   {
    "fr": {
     "q": "Le groupe de discussion de la coloc s’appelle…",
     "r": [
      [
       "🏰",
       "« Le château »"
      ],
      [
       "🦆",
       "Un nom d’animal absurde"
      ],
      [
       "🍕",
       "Un truc avec « pizza » dedans"
      ],
      [
       "📛",
       "Juste l’adresse"
      ]
     ],
     "relance": "Racontez le nom de groupe le plus drôle que vous ayez connu."
    },
    "en": {
     "q": "The house group chat is called…",
     "r": [
      "“The Castle”",
      "An absurd animal name",
      "Something with “pizza” in it",
      "Just the address"
     ],
     "relance": "Share the funniest group chat name you’ve ever been in."
    }
   },
   {
    "fr": {
     "q": "Le dimanche soir en coloc ?",
     "r": [
      [
       "📺",
       "Une série tous ensemble"
      ],
      [
       "🧼",
       "Grand ménage collectif"
      ],
      [
       "🍲",
       "Soupe et plaid"
      ],
      [
       "🚪",
       "Chacun dans sa chambre"
      ]
     ],
     "relance": "Racontez votre rituel du dimanche soir."
    },
    "en": {
     "q": "Sunday night in a shared home?",
     "r": [
      "A show all together",
      "A big group clean-up",
      "Soup and a blanket",
      "Everyone in their own room"
     ],
     "relance": "Tell each other about your Sunday night ritual."
    }
   },
   {
    "fr": {
     "q": "Le thermostat de l’appart ?",
     "r": [
      [
       "🔥",
       "Chauffage à fond"
      ],
      [
       "🧣",
       "Pull et écharpe à l’intérieur"
      ],
      [
       "🪟",
       "Fenêtre ouverte même en hiver"
      ],
      [
       "🌡️",
       "Pile 19 degrés, pas un de plus"
      ]
     ],
     "relance": "Racontez la plus grande bataille de thermostat que vous ayez connue."
    },
    "en": {
     "q": "The apartment thermostat?",
     "r": [
      "Heating on full blast",
      "Sweater and scarf indoors",
      "Window open even in winter",
      "Exactly 19°C, not one more"
     ],
     "relance": "Share the biggest thermostat war you’ve ever lived through."
    }
   },
   {
    "fr": {
     "q": "La plante de la coloc…",
     "r": [
      [
       "🌿",
       "Pousse grâce à moi"
      ],
      [
       "🥀",
       "Survit par miracle"
      ],
      [
       "🏷️",
       "A un prénom"
      ],
      [
       "🌵",
       "Est en plastique, plus simple"
      ]
     ],
     "relance": "Racontez le prénom que vous donneriez à votre plante, et son caractère."
    },
    "en": {
     "q": "The house plant…",
     "r": [
      "Thrives thanks to me",
      "Survives by some miracle",
      "Has a name",
      "Is plastic, much easier"
     ],
     "relance": "Tell each other what you’d name your plant, and its personality."
    }
   }
  ],
  "defis": [
   {
    "fr": "Jouez la scène : l’un a laissé la vaisselle, l’autre la découvre. Trente secondes, puis on échange les rôles.",
    "en": "Act it out: one left the dishes, the other discovers them. Thirty seconds, then swap roles."
   },
   {
    "fr": "Faites visiter à l’autre votre chambre idéale, comme un agent immobilier beaucoup trop enthousiaste.",
    "en": "Give the other a tour of your dream bedroom, like an overly excited real estate agent."
   },
   {
    "fr": "Inventez le post-it de coloc le plus poli du monde, et lisez-le à voix haute avec solennité.",
    "en": "Write the politest roommate sticky note ever, then read it aloud very solemnly."
   },
   {
    "fr": "Répartissez-vous cinq corvées au pierre-feuille-ciseaux. Le perdant de chaque manche annonce sa corvée avec fierté.",
    "en": "Split five chores with rock-paper-scissors. The loser of each round announces their chore proudly."
   },
   {
    "fr": "Créez le cri de ralliement de votre coloc : un son, un geste, et lancez-le ensemble.",
    "en": "Create your house’s rallying cry: one sound, one gesture, then do it together."
   },
   {
    "fr": "Listez chacun trois qualités du colocataire parfait. Comptez combien vous en avez en commun.",
    "en": "Each list three qualities of the perfect roommate. Count how many you share."
   },
   {
    "fr": "Inventez une recette « fond de frigo » avec trois ingrédients improbables, et donnez-lui un nom de grand chef.",
    "en": "Invent a “leftovers” recipe with three unlikely ingredients, and give it a fancy chef’s name."
   },
   {
    "fr": "Jouez la réunion de coloc la plus solennelle du monde pour décider qui garde la télécommande.",
    "en": "Hold the most solemn house meeting ever to decide who gets the remote."
   }
  ]
 },
 {
  "id": "rencard",
  "em": "☕",
  "nom": {
   "fr": "Premier café",
   "en": "First coffee",
   "es": "Primer café",
   "de": "Erster Kaffee",
   "ar": "أول قهوة"
  },
  "desc": {
   "fr": "Goûts, petites manies et grandes envies, le temps d’un café.",
   "en": "Tastes, little quirks and big cravings, over one coffee.",
   "es": "Gustos, pequeñas manías y grandes antojos, en lo que dura un café.",
   "de": "Vorlieben, kleine Macken und große Pläne, für die Dauer eines Kaffees.",
   "ar": "أذواق وعادات صغيرة وأحلام كبيرة، خلال فنجان قهوة."
  },
  "questions": [
   {
    "fr": {
     "q": "Au comptoir, tu commandes…",
     "r": [
      [
       "☕",
       "Un café tout simple"
      ],
      [
       "🍵",
       "Un thé, toujours"
      ],
      [
       "🥛",
       "Un truc avec plein de mousse"
      ],
      [
       "🧃",
       "Un jus, je suis déjà réveillé·e"
      ]
     ],
     "relance": "Racontez la commande la plus compliquée que vous ayez entendue dans un café."
    },
    "en": {
     "q": "At the counter, you order…",
     "r": [
      "A plain coffee",
      "Tea, always",
      "Something with loads of foam",
      "A juice, I’m already awake"
     ],
     "relance": "Share the most complicated order you’ve ever heard in a café."
    }
   },
   {
    "fr": {
     "q": "La table idéale dans un café ?",
     "r": [
      [
       "🪟",
       "Près de la fenêtre"
      ],
      [
       "🛋️",
       "Le canapé du fond"
      ],
      [
       "🌞",
       "En terrasse, même en hiver"
      ],
      [
       "🎯",
       "Au comptoir, face au barista"
      ]
     ],
     "relance": "Votre café préféré au monde, il ressemble à quoi ?"
    },
    "en": {
     "q": "The ideal table in a café?",
     "r": [
      "By the window",
      "The sofa at the back",
      "Outside, even in winter",
      "At the bar, facing the barista"
     ],
     "relance": "What does your favorite café in the world look like?"
    }
   },
   {
    "fr": {
     "q": "Avec ton café, tu prends…",
     "r": [
      [
       "🥐",
       "Un croissant"
      ],
      [
       "🍪",
       "Un cookie énorme"
      ],
      [
       "🍰",
       "Une part de gâteau"
      ],
      [
       "🙅",
       "Rien, je suis raisonnable"
      ]
     ],
     "relance": "La pâtisserie pour laquelle vous traverseriez la ville ?"
    },
    "en": {
     "q": "With your coffee, you get…",
     "r": [
      "A croissant",
      "A giant cookie",
      "A slice of cake",
      "Nothing, I’m being sensible"
     ],
     "relance": "The pastry you’d cross town for?"
    }
   },
   {
    "fr": {
     "q": "Tu es plutôt du matin ou du soir ?",
     "r": [
      [
       "🐓",
       "Debout avant le réveil"
      ],
      [
       "🌅",
       "Matin, mais lentement"
      ],
      [
       "🌆",
       "Je m’allume en fin d’après-midi"
      ],
      [
       "🦉",
       "Hibou assumé"
      ]
     ],
     "relance": "Racontez votre journée parfaite, heure par heure, version courte."
    },
    "en": {
     "q": "Morning person or night owl?",
     "r": [
      "Up before the alarm",
      "Morning, but slowly",
      "I come alive late afternoon",
      "Proud night owl"
     ],
     "relance": "Describe your perfect day hour by hour, short version."
    }
   },
   {
    "fr": {
     "q": "Le dimanche idéal ?",
     "r": [
      [
       "🛌",
       "Grasse matinée sans honte"
      ],
      [
       "🥾",
       "Une balade dès le matin"
      ],
      [
       "🍳",
       "Un long brunch"
      ],
      [
       "🧩",
       "Un projet perso qui avance"
      ]
     ],
     "relance": "Votre dernier dimanche vraiment réussi, c’était quoi ?"
    },
    "en": {
     "q": "The ideal Sunday?",
     "r": [
      "Sleeping in, no guilt",
      "A walk first thing",
      "A long brunch",
      "Getting a side project done"
     ],
     "relance": "What was your last truly great Sunday?"
    }
   },
   {
    "fr": {
     "q": "Ta petite manie qu’on remarque vite ?",
     "r": [
      [
       "🔁",
       "Je vérifie trois fois mes clés"
      ],
      [
       "🎵",
       "Je fredonne sans m’en rendre compte"
      ],
      [
       "🖊️",
       "Je griffonne sur tout"
      ],
      [
       "⏰",
       "J’arrive toujours en avance"
      ]
     ],
     "relance": "Quelle manie d’un proche vous fait sourire ?"
    },
    "en": {
     "q": "Your little quirk people spot fast?",
     "r": [
      "I check my keys three times",
      "I hum without noticing",
      "I doodle on everything",
      "I’m always early"
     ],
     "relance": "Which quirk of someone close to you makes you smile?"
    }
   },
   {
    "fr": {
     "q": "Un film pour ce soir ?",
     "r": [
      [
       "😂",
       "Une comédie qui ne se prend pas au sérieux"
      ],
      [
       "🚀",
       "De la science-fiction"
      ],
      [
       "🕵️",
       "Un bon polar"
      ],
      [
       "🎨",
       "Un film d’animation"
      ]
     ],
     "relance": "Le film que vous pourriez revoir dix fois ?"
    },
    "en": {
     "q": "A movie for tonight?",
     "r": [
      "A comedy that doesn’t take itself seriously",
      "Sci-fi",
      "A good crime thriller",
      "An animated film"
     ],
     "relance": "The movie you could watch ten more times?"
    }
   },
   {
    "fr": {
     "q": "Dans un musée, tu es…",
     "r": [
      [
       "🖼️",
       "Celui ou celle qui lit chaque cartel"
      ],
      [
       "🏃",
       "En mode visite express"
      ],
      [
       "🛍️",
       "Pressé·e d’aller à la boutique"
      ],
      [
       "🪑",
       "Assis·e sur le banc à rêvasser"
      ]
     ],
     "relance": "L’œuvre ou l’expo qui vous a le plus marqué·e ?"
    },
    "en": {
     "q": "In a museum, you’re…",
     "r": [
      "The one who reads every label",
      "On the express tour",
      "Rushing to the gift shop",
      "Daydreaming on the bench"
     ],
     "relance": "The artwork or exhibition that stuck with you most?"
    }
   },
   {
    "fr": {
     "q": "Une nouvelle passion à apprendre ?",
     "r": [
      [
       "🎸",
       "Un instrument"
      ],
      [
       "🧗",
       "L’escalade"
      ],
      [
       "🍞",
       "Faire son propre pain"
      ],
      [
       "🗣️",
       "Une nouvelle langue"
      ]
     ],
     "relance": "Qu’est-ce que vous avez commencé un jour, puis abandonné ?"
    },
    "en": {
     "q": "A new hobby to pick up?",
     "r": [
      "An instrument",
      "Climbing",
      "Baking your own bread",
      "A new language"
     ],
     "relance": "What did you start once and then give up?"
    }
   },
   {
    "fr": {
     "q": "Ton livre ou ta série de chevet, c’est plutôt…",
     "r": [
      [
       "📚",
       "Un roman épais"
      ],
      [
       "📺",
       "Une série à rattraper"
      ],
      [
       "🎧",
       "Un podcast en boucle"
      ],
      [
       "📰",
       "Des articles au hasard"
      ]
     ],
     "relance": "Recommandez-vous mutuellement un truc à lire, voir ou écouter."
    },
    "en": {
     "q": "What’s on your nightstand, so to speak?",
     "r": [
      "A thick novel",
      "A series to catch up on",
      "A podcast on repeat",
      "Random articles"
     ],
     "relance": "Recommend each other something to read, watch or listen to."
    }
   },
   {
    "fr": {
     "q": "Ton plat réconfort ?",
     "r": [
      [
       "🍝",
       "Des pâtes, simplement"
      ],
      [
       "🍲",
       "Une soupe maison"
      ],
      [
       "🍔",
       "Un bon burger"
      ],
      [
       "🍫",
       "Du chocolat, c’est un plat"
      ]
     ],
     "relance": "Qui vous le préparait, ou qui vous l’a fait découvrir ?"
    },
    "en": {
     "q": "Your comfort food?",
     "r": [
      "Pasta, simple",
      "Homemade soup",
      "A good burger",
      "Chocolate counts as a meal"
     ],
     "relance": "Who used to make it for you, or introduced you to it?"
    }
   },
   {
    "fr": {
     "q": "Un message reçu, tu réponds…",
     "r": [
      [
       "⚡",
       "Dans la minute"
      ],
      [
       "🕐",
       "Dans l’heure, promis"
      ],
      [
       "📅",
       "Quelques jours plus tard"
      ],
      [
       "🙈",
       "Dans ma tête, j’ai répondu"
      ]
     ],
     "relance": "Le message le plus drôle que vous ayez envoyé par erreur ?"
    },
    "en": {
     "q": "You get a text. You reply…",
     "r": [
      "Within a minute",
      "Within the hour, promise",
      "A few days later",
      "I replied in my head"
     ],
     "relance": "The funniest message you’ve sent by mistake?"
    }
   },
   {
    "fr": {
     "q": "Ton animal préféré, version honnête ?",
     "r": [
      [
       "🐱",
       "Les chats, évidemment"
      ],
      [
       "🐶",
       "Les chiens, sans hésiter"
      ],
      [
       "🦦",
       "Les loutres"
      ],
      [
       "🐢",
       "Les tortues, calmes et sages"
      ]
     ],
     "relance": "Si vous pouviez adopter n’importe quel animal, lequel et pourquoi ?"
    },
    "en": {
     "q": "Your favorite animal, honestly?",
     "r": [
      "Cats, obviously",
      "Dogs, no question",
      "Otters",
      "Turtles, calm and wise"
     ],
     "relance": "If you could adopt any animal, which one and why?"
    }
   },
   {
    "fr": {
     "q": "Dans une conversation, tu es…",
     "r": [
      [
       "👂",
       "Celui ou celle qui écoute"
      ],
      [
       "📖",
       "Le conteur ou la conteuse"
      ],
      [
       "❓",
       "Celui ou celle qui pose mille questions"
      ],
      [
       "😄",
       "Celui ou celle qui fait des blagues"
      ]
     ],
     "relance": "Quel sujet pourriez-vous raconter pendant une heure sans notes ?"
    },
    "en": {
     "q": "In a conversation, you’re…",
     "r": [
      "The listener",
      "The storyteller",
      "The one asking a thousand questions",
      "The joker"
     ],
     "relance": "What topic could you talk about for an hour without notes?"
    }
   },
   {
    "fr": {
     "q": "Le compliment qui te fait le plus plaisir ?",
     "r": [
      [
       "😆",
       "« T’es drôle »"
      ],
      [
       "🤝",
       "« On peut compter sur toi »"
      ],
      [
       "✨",
       "« T’as bon goût »"
      ],
      [
       "🌱",
       "« T’as changé, en bien »"
      ]
     ],
     "relance": "Le plus beau compliment qu’un inconnu vous ait fait ?"
    },
    "en": {
     "q": "The compliment you love most?",
     "r": [
      "“You’re funny”",
      "“You’re reliable”",
      "“You’ve got great taste”",
      "“You’ve grown, for the better”"
     ],
     "relance": "The nicest compliment a stranger ever gave you?"
    }
   },
   {
    "fr": {
     "q": "Ta saison préférée ?",
     "r": [
      [
       "🌸",
       "Le printemps"
      ],
      [
       "☀️",
       "L’été"
      ],
      [
       "🍂",
       "L’automne"
      ],
      [
       "❄️",
       "L’hiver"
      ]
     ],
     "relance": "Le souvenir qui vous revient avec cette saison ?"
    },
    "en": {
     "q": "Your favorite season?",
     "r": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
     ],
     "relance": "The memory that comes back with that season?"
    }
   },
   {
    "fr": {
     "q": "Un talent caché ?",
     "r": [
      [
       "🎤",
       "Je chante juste, si si"
      ],
      [
       "🃏",
       "Je fais un tour de magie"
      ],
      [
       "🍳",
       "Je cuisine sans recette"
      ],
      [
       "🧭",
       "Je ne me perds jamais"
      ]
     ],
     "relance": "Prouvez votre talent caché, ou racontez quand il vous a sauvé la mise."
    },
    "en": {
     "q": "A hidden talent?",
     "r": [
      "I can actually sing",
      "I know a magic trick",
      "I cook without recipes",
      "I never get lost"
     ],
     "relance": "Prove your hidden talent, or tell when it saved the day."
    }
   },
   {
    "fr": {
     "q": "Ton week-end parfait loin d’ici ?",
     "r": [
      [
       "🏔️",
       "Un chalet à la montagne"
      ],
      [
       "🏖️",
       "Une plage tranquille"
      ],
      [
       "🏙️",
       "Une grande ville à explorer"
      ],
      [
       "🏕️",
       "Une tente au bord d’un lac"
      ]
     ],
     "relance": "Où êtes-vous parti·e la dernière fois sur un coup de tête ?"
    },
    "en": {
     "q": "Your perfect weekend away?",
     "r": [
      "A cabin in the mountains",
      "A quiet beach",
      "A big city to explore",
      "A tent by a lake"
     ],
     "relance": "Where did you last go on a whim?"
    }
   },
   {
    "fr": {
     "q": "La chanson que tu chantes sous la douche ?",
     "r": [
      [
       "🎶",
       "Un vieux tube de variété"
      ],
      [
       "🎙️",
       "Du rap, en entier"
      ],
      [
       "🎻",
       "Une musique de film"
      ],
      [
       "🤐",
       "Je fais juste « lalala »"
      ]
     ],
     "relance": "Chantonnez-en trois secondes. L’autre devine."
    },
    "en": {
     "q": "The song you sing in the shower?",
     "r": [
      "An old pop classic",
      "Rap, every word",
      "A movie soundtrack",
      "Just “la la la”"
     ],
     "relance": "Hum three seconds of it. The other guesses."
    }
   },
   {
    "fr": {
     "q": "Après ce café, on…",
     "r": [
      [
       "🚶",
       "Fait un tour à pied"
      ],
      [
       "🎳",
       "Teste une activité au hasard"
      ],
      [
       "📚",
       "Passe chez un libraire"
      ],
      [
       "👋",
       "Se dit à la prochaine"
      ]
     ],
     "relance": "Proposez chacun le plan idéal pour une deuxième fois."
    },
    "en": {
     "q": "After this coffee, we…",
     "r": [
      "Go for a walk",
      "Try a random activity",
      "Stop by a bookshop",
      "Say see you next time"
     ],
     "relance": "Each suggest the perfect plan for a second meet-up."
    }
   }
  ],
  "defis": [
   {
    "fr": "Inventez ensemble le nom et la boisson signature de votre café imaginaire.",
    "en": "Together, invent the name and signature drink of your imaginary café."
   },
   {
    "fr": "Chacun décrit l’autre comme un serveur décrirait le plat du jour, en vingt secondes.",
    "en": "Each describe the other the way a waiter would describe today’s special, in twenty seconds."
   },
   {
    "fr": "Trouvez trois points communs inattendus entre vous, sans compter le café.",
    "en": "Find three unexpected things you have in common, coffee doesn’t count."
   },
   {
    "fr": "Jouez la commande la plus compliquée du monde : l’un commande, l’autre fait le barista débordé.",
    "en": "Act out the world’s most complicated order: one orders, the other plays the swamped barista."
   },
   {
    "fr": "Racontez chacun votre semaine en trois mots seulement. L’autre doit poser une question sur un des mots.",
    "en": "Each sum up your week in just three words. The other asks about one of them."
   },
   {
    "fr": "Faites deux vérités et un mensonge sur vos petites manies. L’autre doit trouver le faux.",
    "en": "Play two truths and a lie about your little quirks. The other spots the fake."
   },
   {
    "fr": "Imaginez ensemble la pire première conversation possible, et jouez-en dix secondes.",
    "en": "Imagine the worst possible first conversation together, and act out ten seconds of it."
   },
   {
    "fr": "Chacun recommande à l’autre un endroit du coin en une phrase, comme une pub à la radio.",
    "en": "Each recommend a local spot to the other in one sentence, like a radio ad."
   }
  ]
 },
 {
  "id": "erasmus",
  "em": "🌍",
  "nom": {
   "fr": "Nouveaux arrivants",
   "en": "Newcomers",
   "es": "Recién llegados",
   "de": "Neu in der Stadt",
   "ar": "الوافدون الجدد"
  },
  "desc": {
   "fr": "Nouvelle ville, nouveaux mots, petits chocs culturels et grands fous rires.",
   "en": "New city, new words, small culture shocks and big laughs.",
   "es": "Nueva ciudad, nuevas palabras, pequeños choques culturales y grandes risas.",
   "de": "Neue Stadt, neue Wörter, kleine Kulturschocks und großes Gelächter.",
   "ar": "مدينة جديدة وكلمات جديدة وصدمات ثقافية صغيرة وضحك كثير."
  },
  "questions": [
   {
    "fr": {
     "q": "Ton premier réflexe en arrivant dans une nouvelle ville ?",
     "r": [
      [
       "🗺️",
       "Marcher au hasard"
      ],
      [
       "🛒",
       "Trouver le supermarché"
      ],
      [
       "📶",
       "Chercher le Wi-Fi"
      ],
      [
       "☕",
       "Repérer un café sympa"
      ]
     ],
     "relance": "Racontez votre tout premier jour ici."
    },
    "en": {
     "q": "Your first move in a new city?",
     "r": [
      "Wander around",
      "Find the supermarket",
      "Hunt for Wi-Fi",
      "Scout a nice café"
     ],
     "relance": "Tell each other about your very first day here."
    }
   },
   {
    "fr": {
     "q": "Le mot français le plus dur à prononcer ?",
     "r": [
      [
       "🐿️",
       "« Écureuil »"
      ],
      [
       "🔁",
       "« Serrurerie »"
      ],
      [
       "🌀",
       "« Grenouille »"
      ],
      [
       "😵",
       "« Anticonstitutionnellement »"
      ]
     ],
     "relance": "Apprenez à l’autre un mot impossible de votre langue."
    },
    "en": {
     "q": "The hardest French word to say?",
     "r": [
      "“Écureuil”",
      "“Serrurerie”",
      "“Grenouille”",
      "“Anticonstitutionnellement”"
     ],
     "relance": "Teach each other an impossible word from your language."
    }
   },
   {
    "fr": {
     "q": "Ce qui t’a le plus surpris ici ?",
     "r": [
      [
       "🥖",
       "La baguette sous le bras"
      ],
      [
       "😘",
       "La bise, combien de fois ?"
      ],
      [
       "🕐",
       "Les horaires des repas"
      ],
      [
       "🏪",
       "Les magasins fermés le dimanche"
      ]
     ],
     "relance": "Racontez un petit choc culturel qui vous a fait rire."
    },
    "en": {
     "q": "What surprised you most here?",
     "r": [
      "Baguettes under every arm",
      "The cheek kiss, how many?",
      "Meal times",
      "Shops closed on Sunday"
     ],
     "relance": "Share a small culture shock that made you laugh."
    }
   },
   {
    "fr": {
     "q": "Pour te faire des amis, tu…",
     "r": [
      [
       "🎉",
       "Vas à toutes les soirées d’accueil"
      ],
      [
       "⚽",
       "T’inscris à un sport"
      ],
      [
       "🏠",
       "Comptes sur ta coloc"
      ],
      [
       "📲",
       "Rejoins tous les groupes de discussion"
      ]
     ],
     "relance": "Comment avez-vous rencontré votre premier ami ici ?"
    },
    "en": {
     "q": "To make friends, you…",
     "r": [
      "Go to every welcome event",
      "Join a sports team",
      "Count on your flatmates",
      "Join every group chat"
     ],
     "relance": "How did you meet your first friend here?"
    }
   },
   {
    "fr": {
     "q": "Le plat de chez toi qui te manque le plus ?",
     "r": [
      [
       "🍲",
       "Un plat mijoté de famille"
      ],
      [
       "🌶️",
       "Un truc bien épicé"
      ],
      [
       "🥟",
       "Une spécialité de rue"
      ],
      [
       "🧁",
       "Un dessert introuvable ici"
      ]
     ],
     "relance": "Décrivez ce plat à l’autre pour lui donner faim."
    },
    "en": {
     "q": "The dish from home you miss most?",
     "r": [
      "A slow-cooked family dish",
      "Something really spicy",
      "A street food favorite",
      "A dessert you can’t find here"
     ],
     "relance": "Describe it so well the other gets hungry."
    }
   },
   {
    "fr": {
     "q": "Quand tu ne comprends pas une phrase, tu…",
     "r": [
      [
       "😅",
       "Souris et hoches la tête"
      ],
      [
       "🔁",
       "Demandes de répéter, trois fois"
      ],
      [
       "📱",
       "Sors le traducteur"
      ],
      [
       "🎭",
       "Mimes pour te faire comprendre"
      ]
     ],
     "relance": "Racontez votre plus beau malentendu de langue."
    },
    "en": {
     "q": "When you don’t understand a sentence, you…",
     "r": [
      "Smile and nod",
      "Ask them to repeat it, three times",
      "Pull out the translator app",
      "Mime your way through"
     ],
     "relance": "Tell your best language mix-up story."
    }
   },
   {
    "fr": {
     "q": "Ton premier achat ici ?",
     "r": [
      [
       "🧥",
       "Un manteau plus chaud"
      ],
      [
       "🚲",
       "Un vélo"
      ],
      [
       "🍳",
       "Une poêle et trois assiettes"
      ],
      [
       "🗺️",
       "Un plan de la ville"
      ]
     ],
     "relance": "L’objet que vous avez apporté de chez vous et que vous ne quitteriez jamais ?"
    },
    "en": {
     "q": "Your first purchase here?",
     "r": [
      "A warmer coat",
      "A bike",
      "A pan and three plates",
      "A city map"
     ],
     "relance": "The thing you brought from home and would never part with?"
    }
   },
   {
    "fr": {
     "q": "La météo d’ici, pour toi, c’est…",
     "r": [
      [
       "🌧️",
       "Trop de pluie"
      ],
      [
       "🥶",
       "Trop froid"
      ],
      [
       "🌤️",
       "Parfait, franchement"
      ],
      [
       "🤷",
       "Imprévisible, je m’habille en oignon"
      ]
     ],
     "relance": "La météo de chez vous, décrivez-la en une phrase."
    },
    "en": {
     "q": "The weather here, to you, is…",
     "r": [
      "Way too rainy",
      "Way too cold",
      "Honestly perfect",
      "Unpredictable, I dress in layers"
     ],
     "relance": "Describe the weather back home in one sentence."
    }
   },
   {
    "fr": {
     "q": "Dans ta langue, le mot qu’on devrait adopter en français ?",
     "r": [
      [
       "💛",
       "Un mot pour un sentiment précis"
      ],
      [
       "🍽️",
       "Un mot de cuisine"
      ],
      [
       "😆",
       "Une insulte gentille"
      ],
      [
       "🌙",
       "Un mot pour un moment de la journée"
      ]
     ],
     "relance": "Dites ce mot et expliquez-le avec les mains."
    },
    "en": {
     "q": "A word from your language French should borrow?",
     "r": [
      "A word for a specific feeling",
      "A cooking word",
      "A gentle insult",
      "A word for a time of day"
     ],
     "relance": "Say the word and explain it with your hands."
    }
   },
   {
    "fr": {
     "q": "Ta coloc idéale ?",
     "r": [
      [
       "🌍",
       "Une personne de chaque pays"
      ],
      [
       "🤫",
       "Calme et rangée"
      ],
      [
       "🎸",
       "Bruyante mais géniale"
      ],
      [
       "👵",
       "Chez une mamie adorable"
      ]
     ],
     "relance": "La meilleure ou la pire histoire de coloc que vous connaissez ?"
    },
    "en": {
     "q": "Your ideal flatshare?",
     "r": [
      "One person from every country",
      "Quiet and tidy",
      "Loud but amazing",
      "With a lovely old lady"
     ],
     "relance": "The best or worst flatshare story you know?"
    }
   },
   {
    "fr": {
     "q": "Pour parler à ta famille, tu…",
     "r": [
      [
       "📞",
       "Appelles tous les jours"
      ],
      [
       "💬",
       "Envoies des messages vocaux"
      ],
      [
       "📸",
       "Envoies des photos de tout"
      ],
      [
       "🗓️",
       "Un grand appel le dimanche"
      ]
     ],
     "relance": "Qu’est-ce que vos proches vous demandent le plus souvent sur votre vie ici ?"
    },
    "en": {
     "q": "To talk to your family, you…",
     "r": [
      "Call every day",
      "Send voice notes",
      "Send photos of everything",
      "One big call on Sunday"
     ],
     "relance": "What do your loved ones ask most about your life here?"
    }
   },
   {
    "fr": {
     "q": "Le geste qui veut dire autre chose chez toi ?",
     "r": [
      [
       "👌",
       "Le signe OK"
      ],
      [
       "👍",
       "Le pouce levé"
      ],
      [
       "🤌",
       "Les doigts réunis"
      ],
      [
       "🙆",
       "Hocher la tête"
      ]
     ],
     "relance": "Montrez un geste de chez vous et ce qu’il veut dire."
    },
    "en": {
     "q": "The gesture that means something else back home?",
     "r": [
      "The OK sign",
      "Thumbs up",
      "Fingers pinched together",
      "Nodding your head"
     ],
     "relance": "Show a gesture from home and what it means."
    }
   },
   {
    "fr": {
     "q": "Ton week-end type depuis que tu es ici ?",
     "r": [
      [
       "🚆",
       "Je visite une autre ville"
      ],
      [
       "🛌",
       "Je récupère de la semaine"
      ],
      [
       "🧺",
       "Pique-nique entre nouveaux amis"
      ],
      [
       "📚",
       "Je rattrape les cours"
      ]
     ],
     "relance": "Le meilleur week-end depuis votre arrivée ?"
    },
    "en": {
     "q": "Your typical weekend since you got here?",
     "r": [
      "I visit another city",
      "I recover from the week",
      "Picnic with new friends",
      "I catch up on classes"
     ],
     "relance": "Your best weekend since you arrived?"
    }
   },
   {
    "fr": {
     "q": "La chose la plus française que tu fais maintenant ?",
     "r": [
      [
       "🥐",
       "Acheter du pain tous les jours"
      ],
      [
       "😤",
       "Râler pour rire"
      ],
      [
       "🧀",
       "Finir le repas par du fromage"
      ],
      [
       "☕",
       "Prendre un café en terrasse"
      ]
     ],
     "relance": "Qu’est-ce que vos amis de chez vous trouveraient bizarre chez vous maintenant ?"
    },
    "en": {
     "q": "The most French thing you do now?",
     "r": [
      "Buy bread every day",
      "Grumble for fun",
      "End meals with cheese",
      "Have coffee on a terrace"
     ],
     "relance": "What would your friends back home find odd about you now?"
    }
   },
   {
    "fr": {
     "q": "Pour te repérer en ville, tu…",
     "r": [
      [
       "📍",
       "Suis l’appli sans lever les yeux"
      ],
      [
       "🧭",
       "Fais confiance à ton instinct"
      ],
      [
       "🗣️",
       "Demandes aux passants"
      ],
      [
       "⛪",
       "Prends un grand monument comme repère"
      ]
     ],
     "relance": "Racontez la fois où vous vous êtes le plus perdu·e."
    },
    "en": {
     "q": "To find your way around town, you…",
     "r": [
      "Follow the app, eyes down",
      "Trust your gut",
      "Ask people on the street",
      "Use a big landmark"
     ],
     "relance": "Tell the time you got the most lost."
    }
   },
   {
    "fr": {
     "q": "Une tradition de chez toi à importer ici ?",
     "r": [
      [
       "🎆",
       "Une grande fête de quartier"
      ],
      [
       "🍵",
       "Un rituel du thé"
      ],
      [
       "🎶",
       "Une musique de rue"
      ],
      [
       "🎁",
       "Une coutume de cadeau"
      ]
     ],
     "relance": "Expliquez cette tradition comme si l’autre allait la vivre demain."
    },
    "en": {
     "q": "A tradition from home to bring here?",
     "r": [
      "A big neighborhood festival",
      "A tea ritual",
      "Street music",
      "A gift-giving custom"
     ],
     "relance": "Explain it as if the other will live it tomorrow."
    }
   },
   {
    "fr": {
     "q": "Ton accent en français, tu le trouves…",
     "r": [
      [
       "😎",
       "Charmant, je le garde"
      ],
      [
       "🙈",
       "Gênant, je le cache"
      ],
      [
       "🎯",
       "Presque parti"
      ],
      [
       "🤔",
       "Je ne l’entends pas"
      ]
     ],
     "relance": "Imitez l’accent français dans votre langue, gentiment."
    },
    "en": {
     "q": "Your accent in French, you find it…",
     "r": [
      "Charming, I’m keeping it",
      "Embarrassing, I hide it",
      "Almost gone",
      "I can’t hear it"
     ],
     "relance": "Gently imitate a French accent in your language."
    }
   },
   {
    "fr": {
     "q": "Le meilleur endroit pour rencontrer des gens ici ?",
     "r": [
      [
       "🎓",
       "La fac"
      ],
      [
       "🏀",
       "Le club de sport"
      ],
      [
       "🗨️",
       "Les soirées d’échange de langues"
      ],
      [
       "🛤️",
       "Les transports, on ne sait jamais"
      ]
     ],
     "relance": "Racontez une rencontre inattendue depuis votre arrivée."
    },
    "en": {
     "q": "The best place to meet people here?",
     "r": [
      "Campus",
      "The sports club",
      "Language exchange evenings",
      "Public transport, you never know"
     ],
     "relance": "Tell an unexpected encounter since you arrived."
    }
   },
   {
    "fr": {
     "q": "Ce que tu ramèneras chez toi ?",
     "r": [
      [
       "🧀",
       "Du fromage, beaucoup"
      ],
      [
       "📖",
       "Un livre en français"
      ],
      [
       "🧢",
       "Un souvenir de la ville"
      ],
      [
       "🫶",
       "Des amis, dans ma valise"
      ]
     ],
     "relance": "Qu’est-ce que vous avez déjà appris ici, qu’aucun cours ne vous a appris ?"
    },
    "en": {
     "q": "What will you take back home?",
     "r": [
      "Cheese, lots of it",
      "A book in French",
      "A souvenir from the city",
      "Friends, in my suitcase"
     ],
     "relance": "What have you learned here that no class taught you?"
    }
   },
   {
    "fr": {
     "q": "Dans cinq ans, tu te vois…",
     "r": [
      [
       "🏡",
       "Toujours ici"
      ],
      [
       "✈️",
       "Dans un autre pays encore"
      ],
      [
       "🔙",
       "De retour chez moi"
      ],
      [
       "🎲",
       "Aucune idée, et j’adore"
      ]
     ],
     "relance": "Où rêvez-vous de vivre au moins une fois ?"
    },
    "en": {
     "q": "In five years, you see yourself…",
     "r": [
      "Still here",
      "In yet another country",
      "Back home",
      "No idea, and I love it"
     ],
     "relance": "Where do you dream of living at least once?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Apprenez-vous trois mots chacun dans votre langue, puis faites une phrase avec les six.",
    "en": "Teach each other three words from your languages, then make one sentence using all six."
   },
   {
    "fr": "Dites « bonjour » de toutes les façons que vous connaissez, à tour de rôle. Le premier bloqué a perdu.",
    "en": "Take turns saying “hello” in every way you know. First one stuck loses."
   },
   {
    "fr": "Mimez un petit choc culturel vécu ici. L’autre doit deviner en vingt secondes.",
    "en": "Mime a small culture shock you’ve had here. The other guesses in twenty seconds."
   },
   {
    "fr": "Inventez ensemble la fête idéale qui mélange vos deux pays : un nom, un plat, une musique.",
    "en": "Invent the ideal party mixing both your countries: a name, a dish, a song."
   },
   {
    "fr": "Chacun prononce un mot français difficile. L’autre note sa prononciation de un à dix, avec sérieux.",
    "en": "Each say a tricky French word. The other scores the pronunciation from one to ten, very seriously."
   },
   {
    "fr": "Décrivez votre ville d’origine en trois mots. L’autre doit dire s’il ou elle y partirait demain.",
    "en": "Describe your hometown in three words. The other says whether they’d move there tomorrow."
   },
   {
    "fr": "Jouez une scène : l’un est touriste perdu, l’autre guide pressé. Dix secondes, puis on inverse.",
    "en": "Act a scene: one is a lost tourist, the other a rushed guide. Ten seconds, then swap."
   },
   {
    "fr": "Chantez le début d’une chanson connue chez vous. L’autre essaie de reprendre le refrain.",
    "en": "Sing the start of a well-known song from home. The other tries to join the chorus."
   }
  ]
 },
 {
  "id": "reims",
  "em": "🥂",
  "nom": {
   "fr": "Reims",
   "en": "Reims",
   "es": "Reims",
   "de": "Reims",
   "ar": "ريمس"
  },
  "desc": {
   "fr": "Biscuits roses, cathédrale, tram et quartiers : ta ville, tes souvenirs.",
   "en": "Pink biscuits, cathedral, tram and neighborhoods: your city, your memories.",
   "es": "Galletas rosas, catedral, tranvía y barrios: tu ciudad, tus recuerdos.",
   "de": "Rosa Kekse, Kathedrale, Tram und Viertel: deine Stadt, deine Erinnerungen.",
   "ar": "البسكويت الوردي والكاتدرائية والترام والأحياء: مدينتك وذكرياتك."
  },
  "questions": [
   {
    "fr": {
     "q": "Le biscuit rose, tu le manges…",
     "r": [
      [
       "☕",
       "Trempé dans le café"
      ],
      [
       "🍫",
       "Dans un chocolat chaud"
      ],
      [
       "🍓",
       "Avec des fruits ou une crème"
      ],
      [
       "😋",
       "Tel quel, croquant"
      ]
     ],
     "relance": "Votre premier souvenir de biscuit rose ?"
    },
    "en": {
     "q": "The pink biscuit, you eat it…",
     "r": [
      "Dunked in coffee",
      "In hot chocolate",
      "With fruit or cream",
      "Plain and crunchy"
     ],
     "relance": "Your first memory of a pink biscuit?"
    }
   },
   {
    "fr": {
     "q": "Ton coin préféré pour te poser à Reims ?",
     "r": [
      [
       "🌳",
       "Le parc de Champagne"
      ],
      [
       "🚶",
       "Le long du canal"
      ],
      [
       "🏛️",
       "Le parvis de la cathédrale"
      ],
      [
       "🪑",
       "Une terrasse de la place d’Erlon"
      ]
     ],
     "relance": "Emmenez l’autre là-bas en une phrase : on y fait quoi ?"
    },
    "en": {
     "q": "Your favorite spot to chill in Reims?",
     "r": [
      "Parc de Champagne",
      "Along the canal",
      "In front of the cathedral",
      "A terrace on Place d’Erlon"
     ],
     "relance": "Take the other there in one sentence: what do you do there?"
    }
   },
   {
    "fr": {
     "q": "La cathédrale, pour toi, c’est…",
     "r": [
      [
       "📸",
       "Le décor de toutes mes photos"
      ],
      [
       "🌙",
       "Plus belle de nuit"
      ],
      [
       "😇",
       "Le sourire de l’Ange avant tout"
      ],
      [
       "🧭",
       "Mon repère pour ne pas me perdre"
      ]
     ],
     "relance": "Quand l’avez-vous vue pour la première fois ?"
    },
    "en": {
     "q": "The cathedral, to you, is…",
     "r": [
      "The backdrop of all my photos",
      "Prettier at night",
      "The Smiling Angel above all",
      "My landmark so I don’t get lost"
     ],
     "relance": "When did you first see it?"
    }
   },
   {
    "fr": {
     "q": "Le spectacle de lumières sur la cathédrale l’été ?",
     "r": [
      [
       "✨",
       "J’y vais chaque année"
      ],
      [
       "👀",
       "Vu une fois, magique"
      ],
      [
       "📅",
       "Toujours prévu, jamais fait"
      ],
      [
       "❓",
       "Il y a un spectacle ?"
      ]
     ],
     "relance": "Le plus beau moment de lumière que vous ayez vu en ville ?"
    },
    "en": {
     "q": "The summer light show on the cathedral?",
     "r": [
      "I go every year",
      "Saw it once, magical",
      "Always planned, never done",
      "There’s a show?"
     ],
     "relance": "The most beautiful light moment you’ve seen in town?"
    }
   },
   {
    "fr": {
     "q": "Au Stade de Reims, tu es…",
     "r": [
      [
       "📣",
       "En tribune à chanter"
      ],
      [
       "📺",
       "Devant le match à la maison"
      ],
      [
       "😅",
       "Je suis le score de loin"
      ],
      [
       "⚽",
       "Je préfère jouer moi-même"
      ]
     ],
     "relance": "Racontez un match, n’importe lequel, qui vous a marqué."
    },
    "en": {
     "q": "At Stade de Reims games, you’re…",
     "r": [
      "In the stands, singing",
      "Watching at home",
      "Following the score from afar",
      "I’d rather play myself"
     ],
     "relance": "Tell about a match, any match, that stuck with you."
    }
   },
   {
    "fr": {
     "q": "Le tram à Reims, c’est…",
     "r": [
      [
       "🚋",
       "Ma deuxième maison"
      ],
      [
       "🚲",
       "Je préfère le vélo"
      ],
      [
       "🚶",
       "Tout se fait à pied"
      ],
      [
       "🎧",
       "Mon moment musique"
      ]
     ],
     "relance": "La scène la plus drôle que vous ayez vue dans les transports ?"
    },
    "en": {
     "q": "The tram in Reims is…",
     "r": [
      "My second home",
      "I’d rather bike",
      "Everything’s walkable",
      "My music time"
     ],
     "relance": "The funniest scene you’ve seen on public transport?"
    }
   },
   {
    "fr": {
     "q": "Le marché de Noël, tu y vas pour…",
     "r": [
      [
       "🎄",
       "Les lumières"
      ],
      [
       "🥨",
       "Les petites choses à grignoter"
      ],
      [
       "🎁",
       "Trouver des cadeaux"
      ],
      [
       "🧣",
       "Juste marcher dans le froid"
      ]
     ],
     "relance": "Votre meilleur souvenir d’hiver à Reims ?"
    },
    "en": {
     "q": "You go to the Christmas market for…",
     "r": [
      "The lights",
      "The little snacks",
      "Finding gifts",
      "Just walking in the cold"
     ],
     "relance": "Your best winter memory in Reims?"
    }
   },
   {
    "fr": {
     "q": "Les halles du Boulingrin, le samedi ?",
     "r": [
      [
       "🧺",
       "Mon rituel"
      ],
      [
       "🥐",
       "Pour un bon petit-déjeuner"
      ],
      [
       "🏛️",
       "Pour le bâtiment"
      ],
      [
       "😴",
       "Le samedi matin, je dors"
      ]
     ],
     "relance": "Votre marché ou commerce préféré, et pourquoi ?"
    },
    "en": {
     "q": "The Boulingrin market hall on Saturday?",
     "r": [
      "My ritual",
      "For a good breakfast",
      "For the building itself",
      "Saturday morning I sleep"
     ],
     "relance": "Your favorite market or shop, and why?"
    }
   },
   {
    "fr": {
     "q": "Si tu fais visiter Reims, tu commences par…",
     "r": [
      [
       "⛪",
       "La cathédrale, évidemment"
      ],
      [
       "🕳️",
       "Les crayères et leurs galeries"
      ],
      [
       "🌿",
       "Les parcs"
      ],
      [
       "🍽️",
       "Une bonne table"
      ]
     ],
     "relance": "Votre visite guidée en trois étapes, top chrono."
    },
    "en": {
     "q": "Showing someone around Reims, you start with…",
     "r": [
      "The cathedral, obviously",
      "The chalk cellars and tunnels",
      "The parks",
      "A good restaurant"
     ],
     "relance": "Your three-stop tour, go."
    }
   },
   {
    "fr": {
     "q": "Ton quartier rémois de cœur ?",
     "r": [
      [
       "🏙️",
       "Le centre, au cœur de tout"
      ],
      [
       "🌳",
       "Un coin plus calme et vert"
      ],
      [
       "🏘️",
       "Celui où j’ai grandi"
      ],
      [
       "🧭",
       "Je les découvre encore"
      ]
     ],
     "relance": "Qu’est-ce qui rend votre quartier unique ?"
    },
    "en": {
     "q": "Your favorite Reims neighborhood?",
     "r": [
      "Downtown, in the middle of it all",
      "A quieter, greener area",
      "Where I grew up",
      "I’m still discovering them"
     ],
     "relance": "What makes your neighborhood unique?"
    }
   },
   {
    "fr": {
     "q": "Une journée sous la pluie à Reims, tu…",
     "r": [
      [
       "🖼️",
       "Vas au musée"
      ],
      [
       "☕",
       "T’installes dans un café"
      ],
      [
       "🛍️",
       "Fais les boutiques"
      ],
      [
       "🌧️",
       "Marches quand même"
      ]
     ],
     "relance": "Le meilleur abri imprévu que vous ayez trouvé en ville ?"
    },
    "en": {
     "q": "A rainy day in Reims, you…",
     "r": [
      "Go to a museum",
      "Settle into a café",
      "Go shopping",
      "Walk anyway"
     ],
     "relance": "The best unexpected shelter you’ve found in town?"
    }
   },
   {
    "fr": {
     "q": "Un dimanche ensoleillé à Reims ?",
     "r": [
      [
       "🚴",
       "Vélo le long de la coulée verte"
      ],
      [
       "🧺",
       "Pique-nique au parc"
      ],
      [
       "🛶",
       "Balade au bord de l’eau"
      ],
      [
       "🏠",
       "Fenêtres ouvertes, chez moi"
      ]
     ],
     "relance": "Racontez votre dimanche rémois parfait."
    },
    "en": {
     "q": "A sunny Sunday in Reims?",
     "r": [
      "Biking the green path",
      "Picnic in the park",
      "A walk by the water",
      "Windows open, at home"
     ],
     "relance": "Describe your perfect Sunday in Reims."
    }
   },
   {
    "fr": {
     "q": "Un souvenir de Reims à offrir ?",
     "r": [
      [
       "🩷",
       "Une boîte de biscuits roses"
      ],
      [
       "🪨",
       "Un objet en forme de cathédrale"
      ],
      [
       "👕",
       "Un maillot du Stade"
      ],
      [
       "📷",
       "Une photo prise par moi"
      ]
     ],
     "relance": "Le souvenir le plus kitsch que vous ayez acheté quelque part ?"
    },
    "en": {
     "q": "A Reims souvenir to give?",
     "r": [
      "A box of pink biscuits",
      "Something shaped like the cathedral",
      "A Stade de Reims jersey",
      "A photo I took"
     ],
     "relance": "The tackiest souvenir you’ve ever bought anywhere?"
    }
   },
   {
    "fr": {
     "q": "Ton lieu de rendez-vous à Reims ?",
     "r": [
      [
       "🚉",
       "Devant la gare"
      ],
      [
       "⛲",
       "Une fontaine du centre"
      ],
      [
       "🚋",
       "Un arrêt de tram précis"
      ],
      [
       "📍",
       "Je partage ma position"
      ]
     ],
     "relance": "Racontez un rendez-vous où personne ne s’est trouvé."
    },
    "en": {
     "q": "Your go-to meeting spot in Reims?",
     "r": [
      "In front of the station",
      "A fountain downtown",
      "A specific tram stop",
      "I share my location"
     ],
     "relance": "Tell about a meet-up where nobody found each other."
    }
   },
   {
    "fr": {
     "q": "Reims en une couleur ?",
     "r": [
      [
       "🩷",
       "Rose, comme le biscuit"
      ],
      [
       "🤍",
       "Blanc craie"
      ],
      [
       "❤️",
       "Rouge et blanc, comme le Stade"
      ],
      [
       "💛",
       "Doré, la pierre au coucher du soleil"
      ]
     ],
     "relance": "Décrivez Reims à quelqu’un qui n’y est jamais venu, en une phrase."
    },
    "en": {
     "q": "Reims in one color?",
     "r": [
      "Pink, like the biscuit",
      "Chalk white",
      "Red and white, like the club",
      "Golden, the stone at sunset"
     ],
     "relance": "Describe Reims in one sentence to someone who’s never been."
    }
   },
   {
    "fr": {
     "q": "Le meilleur moment de l’année à Reims ?",
     "r": [
      [
       "🌷",
       "Le printemps dans les parcs"
      ],
      [
       "☀️",
       "Les soirs d’été en terrasse"
      ],
      [
       "🍇",
       "L’automne et les vendanges autour"
      ],
      [
       "🎄",
       "Décembre et ses lumières"
      ]
     ],
     "relance": "Un souvenir précis lié à ce moment ?"
    },
    "en": {
     "q": "The best time of year in Reims?",
     "r": [
      "Spring in the parks",
      "Summer evenings on terraces",
      "Autumn and the harvest around town",
      "December and its lights"
     ],
     "relance": "A specific memory from that time?"
    }
   },
   {
    "fr": {
     "q": "Pour un bon resto à Reims, tu…",
     "r": [
      [
       "⭐",
       "Demandes à un ami du coin"
      ],
      [
       "📱",
       "Lis tous les avis"
      ],
      [
       "🎲",
       "Entres au hasard"
      ],
      [
       "🔁",
       "Retournes toujours au même"
      ]
     ],
     "relance": "Votre adresse secrète, vous la partagez ?"
    },
    "en": {
     "q": "For a good restaurant in Reims, you…",
     "r": [
      "Ask a local friend",
      "Read every review",
      "Walk in at random",
      "Always go back to the same one"
     ],
     "relance": "Your secret spot, will you share it?"
    }
   },
   {
    "fr": {
     "q": "Les crayères, pour toi, c’est…",
     "r": [
      [
       "🕯️",
       "Un monde souterrain fascinant"
      ],
      [
       "🧥",
       "Surtout très frais"
      ],
      [
       "📚",
       "Un pan d’histoire de la ville"
      ],
      [
       "🔜",
       "Pas encore visitées"
      ]
     ],
     "relance": "Le lieu le plus étonnant que vous ayez visité sous terre ou en hauteur ?"
    },
    "en": {
     "q": "The chalk cellars, to you, are…",
     "r": [
      "A fascinating underground world",
      "Mostly very chilly",
      "A slice of the city’s history",
      "Not visited yet"
     ],
     "relance": "The most amazing place you’ve visited underground or up high?"
    }
   },
   {
    "fr": {
     "q": "Si Reims avait une mascotte, ce serait…",
     "r": [
      [
       "😇",
       "L’Ange au sourire"
      ],
      [
       "🩷",
       "Un biscuit rose avec des jambes"
      ],
      [
       "🫧",
       "Une bulle qui ne tient pas en place"
      ],
      [
       "🚋",
       "Un tram qui fait coucou"
      ]
     ],
     "relance": "Donnez-lui un nom et une réplique culte."
    },
    "en": {
     "q": "If Reims had a mascot, it would be…",
     "r": [
      "The Smiling Angel",
      "A pink biscuit with legs",
      "A bubble that can’t sit still",
      "A tram waving hello"
     ],
     "relance": "Give it a name and a catchphrase."
    }
   },
   {
    "fr": {
     "q": "Ce qui manquerait à Reims selon toi ?",
     "r": [
      [
       "🏖️",
       "Une plage, même petite"
      ],
      [
       "🎢",
       "Un grand parc d’attractions"
      ],
      [
       "🌃",
       "Plus de lieux ouverts tard"
      ],
      [
       "⛰️",
       "Une montagne, pour voir"
      ]
     ],
     "relance": "Si vous étiez maire pour une journée, vous ajouteriez quoi ?"
    },
    "en": {
     "q": "What’s Reims missing, in your opinion?",
     "r": [
      "A beach, even a tiny one",
      "A big theme park",
      "More places open late",
      "A mountain, just to see"
     ],
     "relance": "If you were mayor for a day, what would you add?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Faites la visite guidée de Reims la plus enthousiaste du monde, en vingt secondes chacun.",
    "en": "Give the world’s most enthusiastic tour of Reims, twenty seconds each."
   },
   {
    "fr": "Imitez le sourire de l’Ange, très sérieusement. L’autre note de un à dix.",
    "en": "Do your best Smiling Angel impression, very seriously. The other scores from one to ten."
   },
   {
    "fr": "Inventez ensemble le chant de supporters du Stade de Reims le plus gentil possible, et chantez-le.",
    "en": "Together, write the kindest possible Stade de Reims chant, and sing it."
   },
   {
    "fr": "Citez à tour de rôle un lieu de Reims. Le premier qui hésite plus de trois secondes a perdu.",
    "en": "Take turns naming a place in Reims. First to hesitate more than three seconds loses."
   },
   {
    "fr": "Faites l’annonce du tram la plus théâtrale possible pour votre arrêt préféré.",
    "en": "Do the most dramatic tram announcement possible for your favorite stop."
   },
   {
    "fr": "Inventez une nouvelle recette avec le biscuit rose. Donnez-lui un nom chic.",
    "en": "Invent a new recipe using the pink biscuit. Give it a fancy name."
   },
   {
    "fr": "Décrivez votre trajet préféré dans Reims comme un reportage animalier.",
    "en": "Describe your favorite route through Reims like a nature documentary."
   },
   {
    "fr": "Imaginez ensemble la carte postale parfaite de Reims : l’image et la phrase au dos.",
    "en": "Together, imagine the perfect Reims postcard: the picture and the line on the back."
   }
  ]
 },
 {
  "id": "grandes",
  "em": "🌙",
  "nom": {
   "fr": "Grandes questions",
   "en": "Big questions",
   "es": "Grandes preguntas",
   "de": "Große Fragen",
   "ar": "أسئلة كبيرة"
  },
  "desc": {
   "fr": "Pour la fin de soirée : super-pouvoirs, voyages dans le temps et rêves un peu fous.",
   "en": "For late nights: superpowers, time travel and slightly wild dreams.",
   "es": "Para el final de la noche: superpoderes, viajes en el tiempo y sueños un poco locos.",
   "de": "Für späte Abende: Superkräfte, Zeitreisen und ein bisschen verrückte Träume.",
   "ar": "لآخر السهرة: قوى خارقة وسفر عبر الزمن وأحلام مجنونة قليلًا."
  },
  "questions": [
   {
    "fr": {
     "q": "Un super-pouvoir, un seul ?",
     "r": [
      [
       "🦅",
       "Voler"
      ],
      [
       "👻",
       "Devenir invisible"
      ],
      [
       "⏸️",
       "Mettre le temps sur pause"
      ],
      [
       "🗣️",
       "Parler toutes les langues"
      ]
     ],
     "relance": "Votre première journée avec ce pouvoir, vous en faites quoi ?"
    },
    "en": {
     "q": "One superpower, just one?",
     "r": [
      "Flying",
      "Turning invisible",
      "Pausing time",
      "Speaking every language"
     ],
     "relance": "Your first day with that power, what do you do?"
    }
   },
   {
    "fr": {
     "q": "Voyager dans le temps : tu vas…",
     "r": [
      [
       "🦕",
       "Voir les dinosaures"
      ],
      [
       "🏰",
       "Au Moyen Âge"
      ],
      [
       "🚀",
       "Dans 500 ans"
      ],
      [
       "👶",
       "Revoir un moment de mon enfance"
      ]
     ],
     "relance": "Qu’est-ce que vous rapporteriez de ce voyage ?"
    },
    "en": {
     "q": "Time travel: you go…",
     "r": [
      "See the dinosaurs",
      "To the Middle Ages",
      "500 years ahead",
      "Revisit a childhood moment"
     ],
     "relance": "What would you bring back from that trip?"
    }
   },
   {
    "fr": {
     "q": "Si tu pouvais garder une seule chose de ta chambre ?",
     "r": [
      [
       "📓",
       "Un carnet rempli"
      ],
      [
       "🧸",
       "Un doudou d’enfance"
      ],
      [
       "🖼️",
       "Une photo encadrée"
      ],
      [
       "🎮",
       "Une vieille console"
      ]
     ],
     "relance": "Quelle histoire se cache derrière cet objet ?"
    },
    "en": {
     "q": "If you could keep just one thing from your room?",
     "r": [
      "A filled notebook",
      "A childhood stuffed toy",
      "A framed photo",
      "An old game console"
     ],
     "relance": "What’s the story behind that object?"
    }
   },
   {
    "fr": {
     "q": "Vivre une autre vie pendant un an ?",
     "r": [
      [
       "🎪",
       "Artiste de cirque"
      ],
      [
       "🧑‍🚀",
       "Astronaute"
      ],
      [
       "🌾",
       "Fermier ou fermière"
      ],
      [
       "🏝️",
       "Gardien·ne de phare"
      ]
     ],
     "relance": "Qu’est-ce qui vous attire dans cette vie-là ?"
    },
    "en": {
     "q": "Live another life for a year?",
     "r": [
      "Circus performer",
      "Astronaut",
      "Farmer",
      "Lighthouse keeper"
     ],
     "relance": "What draws you to that life?"
    }
   },
   {
    "fr": {
     "q": "Le meilleur âge, selon toi ?",
     "r": [
      [
       "🧒",
       "Huit ans, l’insouciance"
      ],
      [
       "🎒",
       "Dix-huit ans, tout commence"
      ],
      [
       "💼",
       "Trente ans, on sait qui on est"
      ],
      [
       "🧓",
       "Quatre-vingts ans, plus rien à prouver"
      ]
     ],
     "relance": "Qu’est-ce que vous diriez à vous-même à cet âge ?"
    },
    "en": {
     "q": "The best age, to you?",
     "r": [
      "Eight, carefree",
      "Eighteen, everything starts",
      "Thirty, you know who you are",
      "Eighty, nothing left to prove"
     ],
     "relance": "What would you tell yourself at that age?"
    }
   },
   {
    "fr": {
     "q": "Une invention que tu aimerais voir ?",
     "r": [
      [
       "🚪",
       "La porte de téléportation"
      ],
      [
       "💤",
       "Le sommeil en dix minutes"
      ],
      [
       "🧹",
       "Le robot qui range tout"
      ],
      [
       "🐕",
       "Le traducteur pour animaux"
      ]
     ],
     "relance": "Quel problème du quotidien elle réglerait pour vous ?"
    },
    "en": {
     "q": "An invention you’d love to see?",
     "r": [
      "A teleportation door",
      "Full sleep in ten minutes",
      "A robot that tidies everything",
      "An animal translator"
     ],
     "relance": "Which everyday problem would it fix for you?"
    }
   },
   {
    "fr": {
     "q": "Tu peux dîner avec un personnage de fiction. Qui ?",
     "r": [
      [
       "🧙",
       "Un grand magicien"
      ],
      [
       "🕵️",
       "Un détective célèbre"
      ],
      [
       "🦸",
       "Un super-héros"
      ],
      [
       "🐻",
       "Un ours qui parle"
      ]
     ],
     "relance": "Quelle question vous lui poseriez en premier ?"
    },
    "en": {
     "q": "Dinner with any fictional character. Who?",
     "r": [
      "A great wizard",
      "A famous detective",
      "A superhero",
      "A talking bear"
     ],
     "relance": "What would you ask them first?"
    }
   },
   {
    "fr": {
     "q": "Si tu pouvais maîtriser instantanément un talent ?",
     "r": [
      [
       "🎹",
       "Le piano"
      ],
      [
       "🎨",
       "La peinture"
      ],
      [
       "🧑‍🍳",
       "La grande cuisine"
      ],
      [
       "🤹",
       "Le jonglage"
      ]
     ],
     "relance": "Pourquoi celui-là, et pas un autre ?"
    },
    "en": {
     "q": "Master one skill instantly?",
     "r": [
      "Piano",
      "Painting",
      "Fine cooking",
      "Juggling"
     ],
     "relance": "Why that one and not another?"
    }
   },
   {
    "fr": {
     "q": "Le monde serait meilleur avec plus de…",
     "r": [
      [
       "😂",
       "Fous rires"
      ],
      [
       "🌳",
       "Arbres en ville"
      ],
      [
       "🐢",
       "Lenteur"
      ],
      [
       "🎶",
       "Musique dans la rue"
      ]
     ],
     "relance": "Une petite chose qui rend votre journée meilleure ?"
    },
    "en": {
     "q": "The world would be better with more…",
     "r": [
      "Giggles",
      "Trees in cities",
      "Slowness",
      "Music in the streets"
     ],
     "relance": "A small thing that makes your day better?"
    }
   },
   {
    "fr": {
     "q": "Ton rêve le plus fou, version vacances ?",
     "r": [
      [
       "🌌",
       "Dormir sous les aurores boréales"
      ],
      [
       "🐋",
       "Nager près d’une baleine"
      ],
      [
       "🎈",
       "Survoler un désert en montgolfière"
      ],
      [
       "🚂",
       "Traverser un continent en train"
      ]
     ],
     "relance": "Qu’est-ce qui vous empêche de le faire l’an prochain ?"
    },
    "en": {
     "q": "Your wildest vacation dream?",
     "r": [
      "Sleep under the northern lights",
      "Swim near a whale",
      "Hot-air balloon over a desert",
      "Cross a continent by train"
     ],
     "relance": "What’s stopping you from doing it next year?"
    }
   },
   {
    "fr": {
     "q": "Tu peux parler à un animal. Lequel ?",
     "r": [
      [
       "🐈",
       "Un chat, pour enfin comprendre"
      ],
      [
       "🦜",
       "Un perroquet, pour les ragots"
      ],
      [
       "🐬",
       "Un dauphin, pour l’océan"
      ],
      [
       "🐜",
       "Une fourmi, pour l’organisation"
      ]
     ],
     "relance": "Que lui demanderiez-vous en premier ?"
    },
    "en": {
     "q": "You can talk to one animal. Which?",
     "r": [
      "A cat, to finally understand",
      "A parrot, for the gossip",
      "A dolphin, for the ocean",
      "An ant, for the organization tips"
     ],
     "relance": "What would you ask it first?"
    }
   },
   {
    "fr": {
     "q": "Si tu vivais dans un film, ce serait…",
     "r": [
      [
       "🎬",
       "Une comédie romantique pleine de hasards"
      ],
      [
       "🗺️",
       "Un film d’aventure"
      ],
      [
       "👽",
       "De la science-fiction"
      ],
      [
       "🐾",
       "Un dessin animé"
      ]
     ],
     "relance": "Quelle serait la scène d’ouverture de votre film ?"
    },
    "en": {
     "q": "If your life were a movie, it would be…",
     "r": [
      "A rom-com full of coincidences",
      "An adventure film",
      "Sci-fi",
      "A cartoon"
     ],
     "relance": "What’s the opening scene of your movie?"
    }
   },
   {
    "fr": {
     "q": "Un objet magique pour une semaine ?",
     "r": [
      [
       "🪄",
       "Une baguette qui range tout"
      ],
      [
       "🧥",
       "Une cape d’invisibilité"
      ],
      [
       "🗝️",
       "Une clé qui ouvre n’importe où"
      ],
      [
       "⏳",
       "Un sablier qui rembobine"
      ]
     ],
     "relance": "Le premier endroit où vous l’utiliseriez ?"
    },
    "en": {
     "q": "A magic object for a week?",
     "r": [
      "A wand that tidies anything",
      "An invisibility cloak",
      "A key that opens anywhere",
      "An hourglass that rewinds"
     ],
     "relance": "The first place you’d use it?"
    }
   },
   {
    "fr": {
     "q": "La question que tu poserais à ton toi du futur ?",
     "r": [
      [
       "🏠",
       "« Où est-ce que tu vis ? »"
      ],
      [
       "😊",
       "« Tu es content·e ? »"
      ],
      [
       "🧳",
       "« Tu as voyagé où ? »"
      ],
      [
       "🤫",
       "« Tu te souviens de ce soir ? »"
      ]
     ],
     "relance": "Et votre toi du futur, il vous dirait quoi aujourd’hui ?"
    },
    "en": {
     "q": "The question you’d ask your future self?",
     "r": [
      "“Where do you live?”",
      "“Are you happy?”",
      "“Where have you traveled?”",
      "“Do you remember tonight?”"
     ],
     "relance": "And what would your future self tell you today?"
    }
   },
   {
    "fr": {
     "q": "Vivre sans quoi pendant un mois ?",
     "r": [
      [
       "📱",
       "Sans téléphone"
      ],
      [
       "🎵",
       "Sans musique"
      ],
      [
       "🧂",
       "Sans sucre ni sel"
      ],
      [
       "🛋️",
       "Sans canapé"
      ]
     ],
     "relance": "Qu’est-ce qui vous manquerait le plus, en vrai ?"
    },
    "en": {
     "q": "Live a month without…",
     "r": [
      "Your phone",
      "Music",
      "Sugar and salt",
      "A sofa"
     ],
     "relance": "What would you really miss the most?"
    }
   },
   {
    "fr": {
     "q": "Tu reçois une lettre de ton toi de dix ans. Elle dit…",
     "r": [
      [
       "🚀",
       "« Tu es devenu·e astronaute ? »"
      ],
      [
       "🍬",
       "« Tu as gardé des bonbons ? »"
      ],
      [
       "🐶",
       "« On a eu un chien ? »"
      ],
      [
       "🤝",
       "« Tu es toujours ami·e avec… ? »"
      ]
     ],
     "relance": "Qu’est-ce que votre enfant intérieur trouverait génial chez vous aujourd’hui ?"
    },
    "en": {
     "q": "A letter arrives from ten-year-old you. It says…",
     "r": [
      "“Did you become an astronaut?”",
      "“Did you save some candy?”",
      "“Did we get a dog?”",
      "“Are you still friends with…?”"
     ],
     "relance": "What would your inner kid think is awesome about you now?"
    }
   },
   {
    "fr": {
     "q": "Une loi absurde que tu voterais ?",
     "r": [
      [
       "🍰",
       "Goûter obligatoire à 16 h"
      ],
      [
       "😴",
       "Sieste pour tout le monde"
      ],
      [
       "🎤",
       "Karaoké tous les vendredis"
      ],
      [
       "🐕",
       "Chiens admis partout"
      ]
     ],
     "relance": "Défendez votre loi en une phrase, comme au tribunal."
    },
    "en": {
     "q": "A silly law you’d vote for?",
     "r": [
      "Mandatory snack at 4 pm",
      "Naps for everyone",
      "Karaoke every Friday",
      "Dogs allowed everywhere"
     ],
     "relance": "Defend your law in one sentence, courtroom style."
    }
   },
   {
    "fr": {
     "q": "Si tu pouvais changer de prénom pour une semaine ?",
     "r": [
      [
       "👑",
       "Un prénom de roi ou de reine"
      ],
      [
       "🌍",
       "Un prénom d’un autre pays"
      ],
      [
       "🦸",
       "Un nom de super-héros"
      ],
      [
       "🙂",
       "Non, j’aime le mien"
      ]
     ],
     "relance": "L’histoire de votre prénom, vous la connaissez ?"
    },
    "en": {
     "q": "Change your first name for a week?",
     "r": [
      "A royal name",
      "A name from another country",
      "A superhero name",
      "No, I love mine"
     ],
     "relance": "Do you know the story behind your name?"
    }
   },
   {
    "fr": {
     "q": "Ta définition d’une vie réussie, en un mot ?",
     "r": [
      [
       "🎒",
       "Aventure"
      ],
      [
       "🤗",
       "Les gens autour"
      ],
      [
       "🛠️",
       "Créer quelque chose"
      ],
      [
       "☮️",
       "Le calme"
      ]
     ],
     "relance": "Un moment où vous vous êtes dit : « là, c’est bien » ?"
    },
    "en": {
     "q": "A good life, in one word?",
     "r": [
      "Adventure",
      "The people around you",
      "Making something",
      "Calm"
     ],
     "relance": "A moment when you thought: “this, right here, is good”?"
    }
   },
   {
    "fr": {
     "q": "Si cette soirée était un souvenir dans dix ans, ce serait…",
     "r": [
      [
       "📸",
       "Une photo floue mais drôle"
      ],
      [
       "💬",
       "Une phrase culte"
      ],
      [
       "🎵",
       "Une chanson"
      ],
      [
       "🌃",
       "Une rue la nuit"
      ]
     ],
     "relance": "Quelle phrase de ce soir vous voulez retenir ?"
    },
    "en": {
     "q": "If tonight were a memory in ten years, it would be…",
     "r": [
      "A blurry but funny photo",
      "An iconic line",
      "A song",
      "A street at night"
     ],
     "relance": "Which line from tonight do you want to remember?"
    }
   }
  ],
  "defis": [
   {
    "fr": "Chacun présente son super-pouvoir comme une pub télé de vingt secondes.",
    "en": "Each pitch your superpower like a twenty-second TV ad."
   },
   {
    "fr": "Racontez ensemble, une phrase chacun, un voyage dans le temps qui tourne mal.",
    "en": "Tell a time-travel trip gone wrong together, one sentence each."
   },
   {
    "fr": "Inventez ensemble une fête qui n’existe pas encore : son nom, sa date, son rituel.",
    "en": "Invent a holiday that doesn’t exist yet: its name, date and ritual."
   },
   {
    "fr": "Chacun dit trois choses qu’il ou elle emporterait sur une île déserte. L’autre en échange une.",
    "en": "Each name three things you’d take to a desert island. The other swaps one out."
   },
   {
    "fr": "Jouez votre toi de quatre-vingts ans qui raconte cette soirée, en quinze secondes chacun.",
    "en": "Play your eighty-year-old self telling the story of tonight, fifteen seconds each."
   },
   {
    "fr": "Trouvez ensemble la devise de votre duo, en cinq mots maximum.",
    "en": "Come up with a motto for your duo, five words max."
   },
   {
    "fr": "L’un défend « voler », l’autre « être invisible », vingt secondes chacun. Puis on vote.",
    "en": "One defends “flying”, the other “invisibility”, twenty seconds each. Then vote."
   },
   {
    "fr": "Décrivez l’autre comme le héros d’un conte, en une seule phrase qui commence par « Il était une fois ».",
    "en": "Describe the other as the hero of a fairy tale, in one sentence starting with “Once upon a time”."
   }
  ]
 }
];
});
