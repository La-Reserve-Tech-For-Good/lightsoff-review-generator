
const text = `Ecris un message à destination d'un commerçant pour l'inciter à éteindre sa devanture dès la fermeture.`

const keywords = [
  'eteindre les lumières',
  'éclairage nocturne',
  'vitrine',
  'devanture',
  'fermeture',
  'magasin',
  'boutique',
  'crise énergétique',
  'possible coupures de courant',
  'illégal',
  'empreinte carbone',
  'sobriété',
  'sensibiliser',
  'environement',
]

const examples = [
  `Exemple : Bonjour, pourriez-vous éteindre les lumières en partant le soir ? J'ai remarqué en passant que votre vitrine était allumée après la fermeture. Vous l'ignorez peut-être, mais la loi sur l'éclairage nocturne a été renforcée en octobre 2022 : vous risquez une amende de 7500€. En pleine crise énergétique, chaque geste est important. Vous ferez des économies, éviterez une amende et votre clientèle de plus en plus attentive appréciera cet effort. Qu'en pensez-vous ?`,
  `Exemple : Bonjour, Je suis passée devant votre boutique (lorsqu'elle était fermée) et j'ai remarqué que l'éclairage était allumé...  C'est, aujourd'hui en France, interdit par la loi pendant la nuit à partir de 1h du matin (avec une amende allant jusqu'à 7500€). Mais surtout nous traversons une crise climatique et énergétique... Pouvez-vous nous aider à faire face à cette double crise en éteignant les lumières de votre boutique hors des horaires d'ouverture ? Ça serait génial ! 🙏 Merci !`,
  `Exemple : Bonjour, Je viens vers vers vous afin de voir s'il serait possible de couper vos lumières la nuit ? La crise énergétique (et donc climatique) est un des enjeux clés de notre siècle et ce petit geste, si répété par tous, peut en effet participer à sauver la planète. Je ne sais pas si vous êtes informés à ce sujet mais depuis octobre 2022 vous encourez également une amende allant jusque 7500€. Ce serait dommage pour quelque chose si peu utile. Croyez moi, votre clientèle appréciera :) Qu'en pensez-vous ?`,
  `Exemple : Cher commerçant, Je souhaite aider les magasins à faire des économies d'énergie à l'approche de l'hiver où nous en aurons tous besoin. J'ai remarqué que votre enseigne restait allumée après fermeture et je souhaite vous inviter à l'éteindre. C'est très important pour l'économie et la solidarité énergétique mais aussi la loi l'exige désormais. Chaque commerce peut être sanctionné jusqu'à 7500 € de pénalités. Mon message est donc ici un moyen de prévention et de lutte contre la crise énergétique. En vous remerciant par avance pour votre action !`,
  `Exemple : Bonjour, J'ai pu voir en passant devant votre enseigne que les lumières restaient allumées la nuit. La dernière loi d'octobre 2022 est malheureusement encore peu connue à ce sujet mais il est important de noter que vous risquez de vous exposer à une amende de 7500€. Ces lumières sont gourmandes en énergie, néfastes pour l'environnement et malheureusement peu utiles. Vous pourriez faire un joli geste pour notre planète en pleine période de crise énergétique, et vos clients vous remercierons :) Pourriez-vous songer à les éteindre ?`,
  `Exemple : Bonjour, J'apprécierais que vous éteigniez les lumières de votre boutique lorsqu'elle est fermée. Vous ferez des économies d'énergie et un petit geste pour la planète ! Allez-vous jouer le jeu ?`,
  `Exemple : Hello ! Je ne suis pas cliente, mais je tenais cependant à ajouter mon commentaire concernant votre éclairage : en effet, j'ai constaté que vous laissiez allumée votre commerce la nuit, or l'éclairage des commerces est interdit après 1h du matin. De plus, comme c'est la crise énergétique, je pense que ça pourrait être bénéfique pour votre facture d'électricité ;) Je sais que vous prendrez les dispositions nécessaires, je n'en doute pas 🙏 Pensons à la planète dès maintenant pour notre futur !`,
  `Exemple : Bonjour, je viens de passer devant votre magasin et j'ai vu que les lumières étaient toujours allumées alors que vous êtes fermés. Ce serait super si vous pouviez éteindre votre lumière tous les soirs en partant ! ;) Avec la crise environnementale, et encore plus la crise énergétique cet hiver, ce sont des gestes qui feront la différence si tout le monde s'y met. D'ailleurs au cas où vous ne le sauriez pas, l'éclairage des commerce est interdit par la loi après 1h du matin (et entre la fermeture du magasin et 1h, ce n'est sûrement pas très utile non plus, voire cela peut avoir un impact négatif en donnant une mauvaise image de votre enseigne à vos clients attentifs). Est-ce que vous pourrez faire quelque chose prochainement pour éviter cette situation ? Merci beaucoup par avance et au plaisir de passer chez vous plus tard !`,
  `Exemple : Bonjour, j'ai remarqué que vous laissiez vos lumières allumées la nuit. Ca serait gentil d'éteindre la lumière en partant et je suis sûr que vos clients seront reconnaissants. En plus vous risquez une amende de 7500€ ! Merci`,
  `Exemple : Bonjour, En passant devant, j'ai vu que votre magasin était allumé alors qu'il est fermé à cette heure-ci alors que nous traversons une crise énergétique et climatique... Pouvez-vous agir pour que nous évitions des coupures de courant cet hiver ? Merci beaucoup !`,
  `Exemple : Cher commerçant, A l'approche de l'hiver et sachant que la crise énergétique doit nous rendre solidaires, je m'implique pour aider et protéger les magasins. Contre quoi ? Contre le gâchis d'énergie et son coût inutile, contre le risque d'être épinglé par une amende jusqu'à 7500 € par la loi si je n'étais pas les lumières après fermeture. Or j'ai remarqué que votre commerce restait allumé après fermeture et je souhaite vous inviter à l'éteindre. En vous remerciant par avance pour votre action ! Solidairement.`,
  `Exemple : Bonjour, J'ai pu remarquer que vos vitrines restaient allumées la nuit. Je comprend tout à fait à quel point il doit s'agir d'un réflexe ancré mais sachez que vous vous exposez à une amende conséquente de 7500€. En vue des enjeux actuels de crise énergétique et climatique je trouve cela dommage et peu utile. Je serais ravi vous voir devenir un exemple à suivre en éteignant vos enseignes après fermeture. Pensez-vous que cela serait possible ?`,
  `Exemple : Bonjour, Eteindre la lumière lorsque l'on est plus dans une pièce est un geste permettant de faire des économies et aide a réduire notre impact environmental. Pourriez vous faire en sorte d'éteindre celles de votre boutique lorsque vous quittez celle-ci ?`,
  `Exemple : Bonjour, je viens de voir que vos lumières étaient allumées en passant devant votre magasin alors qu'il est fermé. Ce serait top que vous éteigniez tous les soirs en fermant ! Parce qu'entre la crise environnementale et la crise énergétique, ça fera une vraie différence si tout le monde fait attention. Pour information si jamais vous ne le savez pas, l'éclairage des commerces est illégal après 1h du matin (et inutile après la fermeture du magasin). Peut-être même que laisser allumé a un impact négatif pour les client.e.s attentif.ve.s comme moi...? Pouvez vous faire quelque chose dans les prochains jours pour remédier à ces lumières allumées ? Merci d'avance et à bientôt j'espère :)`,
  `Exemple : Bonjour, je voulais vous prévenir que vos lumières restaient allumées la nuit - pourriez-vous les éteindre en partant le soir pour aider le pays à traverser la crise énergétique ? Chaque geste compte pour la planète. Merci d'avance`,
  `Exemple : Cher commerçant, Je souhaite t'informer que les lumières de ton enseigne restent allumées après la fermeture. Comme la crise énergétique nous touche tous, il me semble important de prévenir les commerçants pour nous aider collectivement et solidairement à économiser les coûts d'énergie inutile. En plus, les commerces peuvent être sanctionnés par la loi à hauteur de 7 500 €. Prévenir les commerces aide aussi à éviter qu'ils soient pénalisés. Merci beaucoup par avance pour la prise en compte de cette notification et pour l'action d'extinction !`,
  `Exemple : Bonjour, Pourriez-vous considérer d'éteindre vos enseignes la nuit ? Je pense que la planète et votre clientèle vous remercierons sincèrement. J'y vois là une grande perte énergétique futile, surtout pendant la crise climatique actuelle qui touche notre monde. De plus, vous risquez jusque 7500€ d'amende (depuis la nouvelle loi d'octobre encore peu connue). Pensez-vous pouvoir effectuer ce simple geste ?`,
  `Exemple : Bonjour, vos vitrines restent allumées la nuit. Seriez-vous d'accord pour les éteindre en partant le soir afin de faire des économies d'énergie pendant la crise énergétique ? On risque des coupures de courant si on ne fait pas attention. Et maintenant vous risque une grosse amende donc ça vaut la peine de faire attention ! Merci`,
  `Exemple : Bonjour, pouvez-vous éteindre votre vitrine en partant le soir ? J'ai remarqué qu'elle restait allumé alors que nous sommes en pleine crise énergétique. Ce serait vraiment gentil de l'éteindre, et en plus ça vous évitera une amende. La loi a été récemment renforcée...`,
  `Exemple : Bonjour, vos vitrines restent allumées le soir alors que votre boutique est fermée. Pouvez-vous éteindre la lumière en partant ? Chaque geste est important pendant cette crise énergétique. Merci mille fois`,
]

const pick = (atLeast, atMost, list) => {
  const clonedList = [...list]
  const pickedCount = Math.floor(Math.random() * (atMost - atLeast + 1) + atLeast)
  const picked = [];

  for (let i = 0; i < pickedCount; i++) {
    const randomIndex = Math.floor(Math.random() * (clonedList.length - 1))
    picked.push(clonedList[randomIndex])
    clonedList.splice(randomIndex, 1)
  }

  return picked
}

const prompt = () => `${text}\n\nMots clés: ${pick(5, 12, keywords).join(', ')}\n\n${pick(4, 6, examples).join('\n')}\n\nBonjour,\n`

export default prompt
