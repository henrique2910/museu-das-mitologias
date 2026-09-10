export type RealmKey = "greek" | "norse";
export type RealmSlug = "grega" | "nordica";

export type Exhibit = {
  id: string;
  name: string;
  epithet: string;
  domain: string;
  text: string;
  fact: string;
};

export type Room = {
  id: string;
  title: string;
  desc: string;
  scene: string;
  exhibits: Exhibit[];
};

export type Realm = {
  key: RealmKey;
  slug: RealmSlug;
  name: string;
  tagline: string;
  gateTitle: string;
  gateDesc: string;
  gateCta: string;
  gateScene: string;
  rooms: Room[];
};

export const SLUG_TO_REALM: Record<RealmSlug, RealmKey> = {
  grega: "greek",
  nordica: "norse",
};

export const REALM_TO_SLUG: Record<RealmKey, RealmSlug> = {
  greek: "grega",
  norse: "nordica",
};

export function isRealmSlug(value: string): value is RealmSlug {
  return value === "grega" || value === "nordica";
}

export function portraitSrc(id: string) {
  return `/portraits/${id}.jpg`;
}

const GREEK_ROOMS: Room[] = [
  {
    id: "olimpo",
    title: "Sala do Olimpo",
    scene: "/scenes/olimpo.jpg",
    desc: "Os doze grandes deuses do Monte Olimpo, reunidos como se ainda decidissem, entre disputas e favores, o destino dos mortais lá embaixo.",
    exhibits: [
      {
        id: "zeus",
        name: "Zeus",
        epithet: "Senhor do raio e do céu",
        domain: "Rei dos deuses",
        text: "Governa o céu e comanda o clima com seus raios. Filho de Cronos e Reia, derrubou o próprio pai para libertar os irmãos que ele havia engolido ainda bebês.",
        fact: "Costumava se transformar em touro, cisne ou chuva dourada para se aproximar de mortais.",
      },
      {
        id: "hera",
        name: "Hera",
        epithet: "Rainha do Olimpo",
        domain: "Casamento e família",
        text: "Deusa do casamento, protetora dos laços familiares. É esposa e também irmã de Zeus, e pune com rigor as infidelidades do marido.",
        fact: 'O pavão, com sua cauda cheia de "olhos", é seu animal sagrado.',
      },
      {
        id: "poseidon",
        name: "Poseidon",
        epithet: "Senhor dos mares",
        domain: "Oceanos e terremotos",
        text: "Governa os oceanos, os terremotos e os cavalos. Vive em um palácio dourado no fundo do mar e agita as águas com seu tridente.",
        fact: "Disputou a posse da cidade de Atenas com Atena — e perdeu.",
      },
      {
        id: "atena",
        name: "Atena",
        epithet: "Deusa da sabedoria",
        domain: "Estratégia e conhecimento",
        text: "Nasceu já adulta e armada, saindo da cabeça de Zeus. Protege heróis e cidades e representa a inteligência aplicada, não a força bruta.",
        fact: "Deu de presente à cidade uma oliveira e venceu Poseidon — foi assim que Atenas ganhou seu nome.",
      },
      {
        id: "apolo",
        name: "Apolo",
        epithet: "Deus da luz e da profecia",
        domain: "Música e oráculos",
        text: "Irmão gêmeo de Ártemis, toca lira, guia o sol e comanda o oráculo de Delfos, onde mortais buscavam respostas sobre o futuro.",
        fact: "Em seu templo, a sacerdotisa Pítia falava por ele em transe.",
      },
      {
        id: "artemis",
        name: "Ártemis",
        epithet: "Senhora da caça e da lua",
        domain: "Florestas e animais selvagens",
        text: "Deusa virgem da caça e das florestas, protetora de mulheres e crianças. Anda sempre acompanhada de seu arco e de uma matilha de cães.",
        fact: "Transformou o caçador Actéon em cervo por tê-la visto se banhando.",
      },
      {
        id: "afrodite",
        name: "Afrodite",
        epithet: "Deusa do amor",
        domain: "Beleza e desejo",
        text: "Nasceu da espuma do mar e desperta paixões entre deuses e mortais, muitas vezes causando mais problemas do que romances felizes.",
        fact: "Seu cinto mágico fazia qualquer pessoa se apaixonar por quem o usasse.",
      },
      {
        id: "hermes",
        name: "Hermes",
        epithet: "Mensageiro dos deuses",
        domain: "Viagens e comércio",
        text: "Deus veloz das estradas, do comércio e também dos ladrões. É ele quem guia as almas dos mortos até a entrada do submundo.",
        fact: "Inventou a lira no dia em que nasceu, usando um casco de tartaruga.",
      },
      {
        id: "ares",
        name: "Ares",
        epithet: "Deus da guerra",
        domain: "Violência e combate",
        text: "Representa a fúria bruta dos campos de batalha, em contraste com a estratégia fria de Atena.",
        fact: "Era um dos deuses menos queridos do Olimpo — até por seu próprio pai, Zeus.",
      },
      {
        id: "demeter",
        name: "Deméter",
        epithet: "Deusa das colheitas",
        domain: "Fertilidade da terra",
        text: "Governa as estações e a fertilidade dos campos. Quando sua filha Perséfone é levada ao submundo, a terra inteira fica estéril.",
        fact: "O inverno, na mitologia grega, nasce do luto de Deméter.",
      },
      {
        id: "hefesto",
        name: "Hefesto",
        epithet: "Deus do fogo e da forja",
        domain: "Metalurgia e invenção",
        text: "Ferreiro dos deuses, cria armas, joias e até autômatos vivos em sua forja sob um vulcão.",
        fact: "Era o único deus com um corpo imperfeito — e o mais habilidoso de todos com as mãos.",
      },
      {
        id: "dioniso",
        name: "Dioniso",
        epithet: "Deus do vinho e do êxtase",
        domain: "Vinho e teatro",
        text: "Governa a vinha, a embriaguez e os estados de transe coletivo, capazes de unir ou destruir uma cidade inteira.",
        fact: "Suas celebrações, as Dionisíacas, deram origem ao teatro grego.",
      },
    ],
  },
  {
    id: "herois",
    title: "Sala dos Heróis e Monstros",
    scene: "/scenes/herois.jpg",
    desc: "Provações, labirintos e criaturas impossíveis — o palco onde mortais tentam a glória e alguns pagam caro por ela.",
    exhibits: [
      {
        id: "heracles",
        name: "Héracles",
        epithet: "O mais forte dos heróis",
        domain: "Herói",
        text: "Filho de Zeus, cumpriu doze trabalhos impossíveis para expiar uma culpa, enfrentando leões, hidras e até o próprio submundo.",
        fact: "Ainda no berço, estrangulou duas serpentes enviadas para matá-lo.",
      },
      {
        id: "perseu",
        name: "Perseu",
        epithet: "Matador de Medusa",
        domain: "Herói",
        text: "Decapitou a górgona Medusa usando um escudo espelhado para não ser petrificado, e depois salvou a princesa Andrômeda de um monstro marinho.",
        fact: "Usava sandálias aladas emprestadas de Hermes.",
      },
      {
        id: "teseu",
        name: "Teseu",
        epithet: "Vencedor do labirinto",
        domain: "Herói",
        text: "Enfrentou o Minotauro no labirinto de Creta, guiado por um novelo de linha dado pela princesa Ariadne.",
        fact: "Esqueceu de trocar as velas do navio na volta, causando por engano a morte do próprio pai.",
      },
      {
        id: "medusa",
        name: "Medusa",
        epithet: "A górgona",
        domain: "Criatura",
        text: "Outrora uma mulher, foi amaldiçoada com cabelos de serpente e um olhar capaz de petrificar qualquer um.",
        fact: "Do sangue derramado em sua morte nasceu o cavalo alado Pégaso.",
      },
      {
        id: "minotauro",
        name: "Minotauro",
        epithet: "A besta do labirinto",
        domain: "Criatura",
        text: "Criatura com corpo de homem e cabeça de touro, filho da rainha Pasífae, mantida presa no labirinto de Creta.",
        fact: "Alimentava-se de jovens atenienses enviados como tributo a cada nove anos.",
      },
      {
        id: "quimera",
        name: "Quimera",
        epithet: "A híbrida",
        domain: "Criatura",
        text: "Monstro com partes de leão, cabra e serpente, que cospe fogo pela boca de cabra em seu próprio lombo.",
        fact: "Foi derrotada pelo herói Belerofonte, montado no cavalo alado Pégaso.",
      },
    ],
  },
  {
    id: "submundo",
    title: "Salão do Submundo",
    scene: "/scenes/submundo.jpg",
    desc: "Além do rio Estige, onde as almas dos mortos aguardam julgamento e nem os deuses circulam com liberdade.",
    exhibits: [
      {
        id: "hades",
        name: "Hades",
        epithet: "Senhor dos mortos",
        domain: "Governante do submundo",
        text: "Governa o mundo dos mortos com justiça implacável, raramente deixando seu reino subterrâneo.",
        fact: "Apesar da fama sombria, não é o deus do mal — apenas o administrador dos mortos.",
      },
      {
        id: "persefone",
        name: "Perséfone",
        epithet: "Rainha do submundo",
        domain: "Governante do submundo",
        text: "Filha de Deméter, divide o ano entre a superfície e as profundezas depois de comer sementes de romã no reino de Hades.",
        fact: "Sua ida e volta anual explica, no mito, a alternância das estações.",
      },
      {
        id: "cerbero",
        name: "Cérbero",
        epithet: "Guardião dos portões",
        domain: "Criatura",
        text: "Cão de três cabeças que guarda a entrada do submundo, impedindo que os mortos escapem de volta ao mundo dos vivos.",
        fact: "Foi acorrentado temporariamente por Héracles em seu décimo segundo trabalho.",
      },
      {
        id: "caronte",
        name: "Caronte",
        epithet: "O barqueiro",
        domain: "Guia das almas",
        text: "Conduz as almas através do rio Estige, cobrando uma moeda como pagamento pela travessia.",
        fact: "Por isso os gregos enterravam seus mortos com moedas sobre os olhos.",
      },
      {
        id: "tanatos",
        name: "Tânatos",
        epithet: "A morte pacífica",
        domain: "Personificação",
        text: "Personificação da morte serena, irmão gêmeo de Hipnos, o sono.",
        fact: "Era retratado como um jovem alado — não como um esqueleto.",
      },
    ],
  },
];

const NORSE_ROOMS: Room[] = [
  {
    id: "asgard",
    title: "Salão de Asgard",
    scene: "/scenes/asgard.jpg",
    desc: "O lar dos Aesir, ligado aos demais mundos pela ponte Bifröst — um salão de decisões, banquetes e alianças frágeis.",
    exhibits: [
      {
        id: "odin",
        name: "Odin",
        epithet: "O Pai de Todos",
        domain: "Sabedoria e guerra",
        text: "Deus da sabedoria, da guerra e da magia. Sacrificou um dos próprios olhos para beber da fonte do conhecimento.",
        fact: "Pendurou-se de cabeça para baixo na árvore Yggdrasil por nove dias para aprender as runas.",
      },
      {
        id: "thor",
        name: "Thor",
        epithet: "O trovejante",
        domain: "Proteção de Asgard",
        text: "Deus do trovão, protetor de Asgard e da humanidade. Empunha o martelo Mjölnir, capaz de gerar raios com um único golpe.",
        fact: "Seu martelo sempre retorna à mão, não importa a distância do arremesso.",
      },
      {
        id: "frigg",
        name: "Frigg",
        epithet: "Rainha de Asgard",
        domain: "Lar e profecia",
        text: "Deusa do lar, do casamento e da profecia. Conhece o destino de todos, mas nunca o revela.",
        fact: "Fez quase tudo no mundo jurar não ferir seu filho Baldur — esqueceu apenas do visco.",
      },
      {
        id: "baldur",
        name: "Baldur",
        epithet: "O radiante",
        domain: "Luz e beleza",
        text: "Deus da luz e da beleza, o mais amado entre todos os deuses nórdicos.",
        fact: "Sua morte, causada por uma flecha de visco, é um dos sinais que anunciam o Ragnarök.",
      },
      {
        id: "tyr",
        name: "Tyr",
        epithet: "O de mão só",
        domain: "Guerra justa e juramentos",
        text: "Deus da guerra justa e dos juramentos. Perdeu a mão direita na boca do lobo Fenrir.",
        fact: "Sacrificou a própria mão para provar aos deuses que a corrente mágica que prendia Fenrir era segura.",
      },
      {
        id: "heimdall",
        name: "Heimdall",
        epithet: "Guardião da ponte",
        domain: "Vigilância",
        text: "Guardião da ponte arco-íris Bifröst, com visão e audição sobre-humanas, capaz de ouvir a grama crescer.",
        fact: "Soprará seu chifre Gjallarhorn para anunciar o início do Ragnarök.",
      },
      {
        id: "loki",
        name: "Loki",
        epithet: "O trapaceiro",
        domain: "Mudança de forma",
        text: "Deus trapaceiro e mestre da mudança de forma. Ora ajuda, ora prejudica gravemente os outros deuses.",
        fact: "Deu à luz o cavalo de oito patas Sleipnir depois de se transformar em égua.",
      },
      {
        id: "freya",
        name: "Freya",
        epithet: "Senhora da guerra e do amor",
        domain: "Amor e fertilidade",
        text: "Deusa do amor, da fertilidade e também da guerra. Lidera as Valquírias na escolha dos guerreiros mortos em combate.",
        fact: "Possui uma capa de penas de falcão que permite voar entre os mundos.",
      },
    ],
  },
  {
    id: "valquirias",
    title: "Sala dos Heróis e Valquírias",
    scene: "/scenes/valquirias.jpg",
    desc: "Guerreiros lendários e as escolhedoras dos mortos, entre espadas forjadas em sangue de dragão e sonos enfeitiçados.",
    exhibits: [
      {
        id: "valquirias-grupo",
        name: "Valquírias",
        epithet: "As que escolhem os mortos",
        domain: "Guerreiras aladas",
        text: "Guerreiras aladas que decidem quais soldados mortos em batalha seguem para o salão de Valhalla.",
        fact: 'Seu nome, em nórdico antigo, significa literalmente "as que escolhem os mortos".',
      },
      {
        id: "sigurd",
        name: "Sigurd",
        epithet: "Matador de dragão",
        domain: "Herói",
        text: "Matou o dragão Fafnir com a espada Gram e se banhou em seu sangue, tornando-se quase invulnerável.",
        fact: "Passou a entender a língua dos pássaros depois de provar acidentalmente o coração do dragão.",
      },
      {
        id: "brunhilda",
        name: "Brunhilda",
        epithet: "A adormecida em fogo",
        domain: "Valquíria",
        text: "Valquíria punida por Odin com um sono eterno, cercada por um muro de fogo, até ser despertada por Sigurd.",
        fact: "Sua história inspirou lendas e óperas por toda a Europa, séculos depois.",
      },
      {
        id: "skadi",
        name: "Skadi",
        epithet: "Senhora do inverno",
        domain: "Caça e montanhas",
        text: "Deusa gigante do inverno, da caça e das montanhas nevadas. Escolheu o marido entre os deuses observando apenas os pés.",
        fact: "Preferia as montanhas geladas à vida à beira-mar ao lado do marido, Njord.",
      },
      {
        id: "ullr",
        name: "Ullr",
        epithet: "O caçador do gelo",
        domain: "Caça e esqui",
        text: "Deus associado ao arco, à caça no gelo e ao deslizar sobre a neve, pouco mencionado mas profundamente respeitado.",
        fact: "Antigos juramentos nórdicos eram, por vezes, feitos em seu nome, e não no de Odin.",
      },
    ],
  },
  {
    id: "fim",
    title: "Sala do Ragnarök",
    scene: "/scenes/fim.jpg",
    desc: "As feras acorrentadas e as profecias que anunciam o Ragnarök — o crepúsculo dos deuses e o nascimento de um novo mundo.",
    exhibits: [
      {
        id: "fenrir",
        name: "Fenrir",
        epithet: "O lobo acorrentado",
        domain: "Criatura",
        text: "Lobo monstruoso, filho de Loki, tão temido que os deuses o prenderam com uma fita mágica feita de coisas impossíveis.",
        fact: "No Ragnarök, romperá as correntes e devorará o próprio Odin.",
      },
      {
        id: "jormungandr",
        name: "Jörmungandr",
        epithet: "A serpente do mundo",
        domain: "Criatura",
        text: "Serpente gigante que circunda o mundo inteiro, mordendo a própria cauda no fundo do oceano.",
        fact: "Seu inimigo eterno é Thor — os dois se matarão mutuamente no fim dos tempos.",
      },
      {
        id: "hel",
        name: "Hel",
        epithet: "Senhora dos que morrem sem glória",
        domain: "Governante",
        text: "Governa Helheim, o reino de quem morre de doença ou velhice, com metade do rosto viva e metade morta.",
        fact: "É filha de Loki e irmã de Fenrir e Jörmungandr.",
      },
      {
        id: "sleipnir",
        name: "Sleipnir",
        epithet: "O cavalo de oito patas",
        domain: "Montaria de Odin",
        text: "Cavalo de oito patas de Odin, o mais rápido entre todos os nove mundos.",
        fact: "É filho de Loki, nascido depois que ele se transformou em égua para enganar um gigante.",
      },
      {
        id: "yggdrasil",
        name: "Yggdrasil",
        epithet: "A árvore-mundo",
        domain: "Eixo do cosmos",
        text: "A grande árvore cujos galhos e raízes conectam os nove mundos da cosmologia nórdica.",
        fact: "Um esquilo chamado Ratatosk corre por seu tronco levando insultos entre uma águia e uma serpente.",
      },
      {
        id: "ragnarok",
        name: "Ragnarök",
        epithet: "O crepúsculo dos deuses",
        domain: "Profecia",
        text: "A batalha final entre deuses e monstros, que destrói o mundo conhecido antes que ele renasça, verde e novo.",
        fact: "Alguns deuses, como os filhos de Thor, sobrevivem para reconstruir o mundo depois.",
      },
    ],
  },
];

export const REALMS: Record<RealmKey, Realm> = {
  greek: {
    key: "greek",
    slug: "grega",
    name: "Ala Grega",
    tagline: "Deuses, heróis e monstros do Mediterrâneo",
    gateTitle: "Deuses do Mediterrâneo",
    gateDesc: "Olimpianos, heróis, monstros e o submundo além do rio Estige.",
    gateCta: "Entrar na ala grega",
    gateScene: "/scenes/gate-greek.jpg",
    rooms: GREEK_ROOMS,
  },
  norse: {
    key: "norse",
    slug: "nordica",
    name: "Ala Nórdica",
    tagline: "Deuses, gigantes e o fim anunciado dos tempos",
    gateTitle: "Deuses do Gelo e do Norte",
    gateDesc: "Asgard, Valquírias e as profecias que anunciam o Ragnarök.",
    gateCta: "Entrar na ala nórdica",
    gateScene: "/scenes/gate-norse.jpg",
    rooms: NORSE_ROOMS,
  },
};

export const CENTRAL = {
  title: "Salão das Convergências",
  intro:
    "Duas mitologias nascidas em climas e mares diferentes, mas que respondem às mesmas perguntas: de onde viemos, o que nos sustenta e como tudo termina.",
  scene: "/scenes/central.jpg",
  items: [
    {
      title: "O eixo do mundo",
      gr: "O Monte Olimpo é a morada no topo do mundo, onde os doze grandes deuses observam e governam os mortais lá embaixo.",
      no: "Yggdrasil não fica no alto, mas atravessa tudo: suas raízes e galhos ligam os nove mundos, dos deuses aos mortos.",
      grImage: "/scenes/olimpo.jpg",
      noImage: "/portraits/yggdrasil.jpg",
      grLabel: "Olimpo",
      noLabel: "Yggdrasil",
    },
    {
      title: "A origem do cosmos",
      gr: "Do Caos surgem Gaia e Urano; seus filhos titãs são depostos pelos próprios filhos, os deuses do Olimpo.",
      no: "Do vazio Ginnungagap nasce o gigante Ymir; morto pelos deuses, seu corpo forma a terra, o mar e o céu.",
      grImage: "/portraits/zeus.jpg",
      noImage: "/portraits/odin.jpg",
      grLabel: "Zeus",
      noLabel: "Odin",
    },
    {
      title: "O fim dos tempos",
      gr: "As Idades do Homem se sucederam lentamente, do ouro ao ferro, num declínio gradual da virtude humana.",
      no: "O Ragnarök é uma única batalha catastrófica, prevista e temida, que arrasa o mundo antes de um recomeço.",
      grImage: "/portraits/demeter.jpg",
      noImage: "/portraits/ragnarok.jpg",
      grLabel: "As estações",
      noLabel: "Ragnarök",
    },
    {
      title: "Destino e livre-arbítrio",
      gr: "As Moiras fiam, medem e cortam o fio da vida de cada um — até os deuses se curvam diante do destino.",
      no: "As Nornas talham o destino nas raízes de Yggdrasil; nem Odin escapa da própria morte, já anunciada.",
      grImage: "/portraits/atena.jpg",
      noImage: "/portraits/frigg.jpg",
      grLabel: "Atena",
      noLabel: "Frigg",
    },
  ],
};

export function findRoom(realm: Realm, sala?: string) {
  const match = realm.rooms.find((room) => room.id === sala);
  return match ?? realm.rooms[0];
}

export function findExhibit(room: Room, id: string) {
  return room.exhibits.find((item) => item.id === id) ?? null;
}
