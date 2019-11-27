import {
  categoryFilter,
  audienceFilter,
  discountFilter
} from './filter-options';

export default {
  settings: {
    dimensions: {
      width: 1619,
      height: 569
    },
    boundaryShape: `M1618,36H1V568H62.51c41.78,41.36,104.29,51.71,156.48,0H1618Z`
  },
  areas: [
    {
      id: 11,
      title: `Лента`,
      logoSrc: `lenta.svg`,
      synonyms: ['лента', 'лента'],
      description: `Гипермаркет`,
      discount: new Set(),
      category: new Set([categoryFilter[`Гипермаркеты`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1618,568H1297V36h321Z`
    },
    {
      id: 12,
      title: `Секунда. Мини-дом быта`,
      logoSrc: `sekunda.svg`,
      synonyms: ['Секунда'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1248,568V514h18v54Z`
    },
    {
      id: 13,
      title: `Церковная лавка`,
      logoSrc: ``,
      synonyms: ['церковная лавка'],
      description: `Церковные товары`,
      discount: new Set(),
      category: new Set([categoryFilter[`Церковные товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1229,568V514h19v54Z`
    },
    {
      id: 14,
      title: `Связной`,
      logoSrc: `svyaznoy.svg`,
      synonyms: ['связной', 'svyaznoy'],
      description: `Связь и техника`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1194,568V514h35v54Z`
    },
    {
      id: 15,
      title: `ELIS`,
      logoSrc: `elis.svg`,
      synonyms: [
        'элис',
        'tkbc',
        'elis',
        'одежда',
        'женская одежда',
        'брюки',
        'платья',
        'юбки',
        'трикотаж'
      ],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1194,568h-36V530l16-16h20Z`
    },
    {
      id: 16,
      title: `Планета сухофруктов`,
      logoSrc: ``,
      synonyms: ['планета сухофруктов', 'сухофруткты', 'орехи'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1260.25,506.5h-16v-16h16Z`
    },
    {
      id: 17,
      title: `BryanskGiro`,
      logoSrc: ``,
      synonyms: [
        'Гироскутеры',
        'Брянскгиро',
        'гиро',
        'героскутеры',
        'электротранспорт',
        'спорт'
      ],
      description: `Гироскутеры`,
      discount: new Set(),
      category: new Set([categoryFilter[`Спортивные товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1223.5,506.5h-16v-16h16Z`
    },
    {
      id: 18,
      title: `Аксессуары для мобильных телефонов`,
      logoSrc: ``,
      synonyms: ['Аксессуары для мобильных телефонов'],
      description: `Аксессуары`,
      discount: new Set(),
      category: new Set([categoryFilter[`Аксессуары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1149.5,506.5h-16v-16h16Z`
    },
    {
      id: 19,
      title: `Прокат машинок`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1046.5,506.5h-16v-16h16Z`
    },
    {
      id: 110,
      title: `София`,
      logoSrc: ``,
      synonyms: [
        'София',
        'Софья',
        'Мастерская',
        'Православная мастерская',
        'Православные подарки'
      ],
      description: `Православные подарки`,
      discount: new Set(),
      category: new Set([categoryFilter[`Православные товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M979,506.5H963v-16h16Z`
    },
    {
      id: 111,
      title: `Arabic Perfumer`,
      logoSrc: ``,
      synonyms: [
        'Арабик Перфюме',
        'Парфюмерия',
        'Духи',
        'арабские духи',
        'масляные духи',
        'Perfume',
        'Arab'
      ],
      description: `Парфюмерия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M918.5,506.5h-16v-16h16Z`
    },
    {
      id: 112,
      title: `YOTA`,
      logoSrc: ``,
      synonyms: ['Йота', 'Ёта', 'ета', 'yota'],
      description: `Салон сотовой связи`,
      discount: new Set([]),
      category: new Set([categoryFilter[`Сотовая связь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M766.5,506.5h-16v-16h16Z`
    },
    {
      id: 113,
      title: `СЛЕТАТЬ.РУ`,
      logoSrc: ``,
      synonyms: [],
      description: `Сервис по подбору туров`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M662.5,506.5h-16v-16h16Z`
    },
    {
      id: 114,
      title: `Drive`,
      logoSrc: ``,
      synonyms: ['Драйв', 'гироскутеры', 'гироскутэр', 'скутэр', 'Ubhjcrenth'],
      description: `Гироскутеры`,
      discount: new Set(),
      category: new Set([categoryFilter[`Спортивные товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M616.5,506.5h-16v-16h16Z`
    },
    {
      id: 115,
      title: `IPOCHINO`,
      logoSrc: ``,
      synonyms: ['ipochino', 'айпочино'],
      description: `Крупнейшая сеть сервисных центров в России`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M510,506.5H494v-16h16Z`
    },
    {
      id: 116,
      title: `M Store`,
      logoSrc: ``,
      synonyms: [
        'M store',
        'store',
        'mstore',
        'мобильные телефоны',
        'аксессуары'
      ],
      description: `Мобильные телефоны и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M463.77,506.5h-16v-16h16Z`
    },
    {
      id: 117,
      title: `S-PARFUM`,
      logoSrc: ``,
      synonyms: [
        'sparfum',
        'sparfumbryansk',
        'подаркиБрянск',
        'хочудухи',
        'аналогидухов',
        'духибрянск',
        'спарфюмбрянск',
        'парфюмериябрянск',
        'ароматыдлядомабрянск',
        'montale'
      ],
      description: `Парфюмерный бутик`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M330,506.5H314v-16h16Z`
    },
    {
      id: 118,
      title: `Все для ногтей`,
      logoSrc: ``,
      synonyms: ['все для ногтей', 'косметика', 'ногти', 'маникюр'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M373,323H357V307h16Z`
    },
    {
      id: 119,
      title: `Fashion Optic`,
      logoSrc: ``,
      synonyms: ['fashion optic'],
      description: `Fashion Optic`,
      discount: new Set(),
      category: new Set([categoryFilter[`Оптика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M537,323H521V307h16Z`
    },
    {
      id: 120,
      title: `BOUTIQUE DE L'AROME`,
      logoSrc: ``,
      synonyms: [
        'BOUTIQUI DE LʹAROME',
        'boutique',
        'butiq',
        'de larome',
        'LʹAROME',
        'Larome',
        'Ляроме',
        'бутик',
        'Бутик дэ ля ромэ',
        'ароматы для дома',
        'ароматические свечи',
        'ароматическое масло'
      ],
      description: `Ароматы для дома из Франции`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M573.5,339.5v16h-16v-16Z`
    },
    {
      id: 121,
      title: `Boft - фото из Instagram`,
      logoSrc: `boft.svg`,
      synonyms: ['boft', 'бофт', 'инст', 'инстаграм', 'Instagram'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M599,373v18H583V373Z`
    },
    {
      id: 122,
      title: `Carraji`,
      logoSrc: ``,
      synonyms: [
        'carraji',
        'караджи',
        'карраджи',
        'саккфош',
        'украшения',
        'мужские украшения',
        'цепи',
        'кулоны',
        'кольца',
        'браслеты'
      ],
      description: `Мужские украшения`,
      discount: new Set(),
      category: new Set([categoryFilter[`Аксессуары`]]),
      audience: new Set([audienceFilter[`Мужская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M573.5,447.5v16h-16v-16Z`
    },
    {
      id: 123,
      title: `ONEUP`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M746.5,323h-16V307h16Z`
    },
    {
      id: 124,
      title: `Askent`,
      logoSrc: ``,
      synonyms: [
        'Askent',
        'Аскент',
        'сумки',
        'портмоне',
        'обложки для документов',
        'аксессуары для мобильных телефонов',
        'подарки',
        'кожгалантерея'
      ],
      description: `Кожгалантерея`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Подарки и сувениры`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M948,323H932V307h16Z`
    },
    {
      id: 125,
      title: `Джелато Шоколато`,
      logoSrc: ``,
      synonyms: [
        'Мороженое',
        'Шоколад',
        'Наполнители',
        'Десерт',
        'джелатто',
        'шоколатто',
        'шокколатто',
        'джэлатто',
        'джэлато',
        'джелата'
      ],
      description: `Итальянское мороженое`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M862,203v16H846V203Z`
    },
    {
      id: 126,
      title: `Bubble Bar`,
      logoSrc: ``,
      synonyms: ['bubble bar', 'баббл бар'],
      description: `Bubble tea`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M862,119v16H846V119Z`
    },
    {
      id: 127,
      title: `РИРЦ`,
      logoSrc: ``,
      synonyms: ['РИРЦ'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1035,323h-16V307h16Z`
    },
    {
      id: 128,
      title: `WT-Парикмахер`,
      logoSrc: ``,
      synonyms: [
        'профессиональная косметика для волос',
        'парикмахер',
        'WT-парикмахер',
        'товары для парикмахеров',
        'шампуни',
        'гели',
        'лак'
      ],
      description: `Профессиональная косметика, товары для парикмахеров`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1096,323h-16V307h16Z`
    },
    {
      id: 129,
      title: `Baskin Robbins`,
      logoSrc: ``,
      synonyms: [
        'baskin robbins',
        'баскин',
        'робинс',
        'роббинс',
        'баскин роббинс',
        'баскин',
        'baskin',
        'vjhj;tyyj',
        'мороженное'
      ],
      description: `Самый большой выбор мороженого`,
      discount: new Set(),
      category: new Set([categoryFilter[`Десерты`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1177,323h-16V307h16Z`
    },
    {
      id: 130,
      title: `Sotopark`,
      logoSrc: ``,
      synonyms: ['Сотопарк', 'Мобильные телефоны', 'Sotopark', 'Аксессуары'],
      description: `Мобильные телефоны и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1147.5,346.5v16h-16v-16Z`
    },
    {
      id: 131,
      title: `БИЛЕТ32.РФ`,
      logoSrc: ``,
      synonyms: [
        'Билет32',
        'Билет на концерт',
        'касса',
        'продажа билетов',
        'концерт'
      ],
      description: `Касса по продаже билетов`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1279.5,320.5v16h-16v-16Z`
    },
    {
      id: 132,
      title: `Спортлото`,
      logoSrc: ``,
      synonyms: ['спортлото'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1287.5,111v16h-16V111Z`
    },
    {
      id: 133,
      title: `Горячая кукуруза`,
      logoSrc: ``,
      synonyms: ['Горячая кукуруза', 'кукуруза'],
      description: `Вкуснейшая вареная кукуруза`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1279.5,372.5v16h-16v-16Z`
    },
    {
      id: 134,
      title: `Крутецкие игрушки`,
      logoSrc: ``,
      synonyms: [
        'крутецкие игрушки',
        'игрушки',
        'автоматы игрушек',
        'автомат по продаже игрушек',
        'детские игрушки',
        'тачки',
        'лизун',
        'фиксики',
        'вспыш',
        'барбоскины',
        'крутецкие',
        'игрушки',
        'rhentwrfz',
        'свинка пеппи',
        'щенячий патруль',
        'миньоны',
        'робокоп',
        'поли'
      ],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1279.5,406.5v16h-16v-16Z`
    },
    {
      id: 135,
      title: `CASIO`,
      logoSrc: ``,
      synonyms: ['casio', 'касио'],
      description: `Часы`,
      discount: new Set(),
      category: new Set([categoryFilter[`Часы`], categoryFilter[`Аксессуары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1147.5,395.5v16h-16v-16Z`
    },
    {
      id: 136,
      title: `Sweet Point`,
      logoSrc: ``,
      synonyms: ['sweet point', 'свит пойнт', 'кофейня', 'кофе', 'свит'],
      description: `Кофейня для тебя и твоих друзей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Кофейня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1217,323h-16V307h16Z`
    },
    {
      id: 137,
      title: `LUXURY`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M493 288h-28v-16h28z`
    },
    {
      id: 138,
      title: `Vape Hill`,
      logoSrc: ``,
      synonyms: [
        'Электронные сигареты',
        'Электронные испарители',
        'Vape Hill',
        'Вэйп Хилл'
      ],
      description: `Электронные испарители`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бытовая техника и электроника`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M227,443V427h16v16Z`
    },
    {
      id: 139,
      title: `Батарейка 32`,
      logoSrc: ``,
      synonyms: [
        'Батарейка 32',
        'Батарейка',
        '<fnfhtqrf',
        'зарядное устройство',
        'элементы питания',
        'электроника'
      ],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Товары для дома`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M184,36V64H168V36Z`
    },
    {
      id: 140,
      title: `Постомат`,
      logoSrc: ``,
      synonyms: ['Постомат', 'Получения посылок', 'Посылки'],
      description: `Терминал получения посылок`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M127.5,80h-16V64h16Z`
    },
    {
      id: 141,
      title: `Легкий шаг`,
      logoSrc: `easystep.svg`,
      synonyms: [
        'Легкий шаг',
        'обувь',
        'мужская обувь',
        'женская обувь',
        'туфли',
        'сапоги',
        'полусапожки',
        'ботинки'
      ],
      description: `Магазин женской и мужской обуви`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,417h-63V382h63v35Z`
    },
    {
      id: 142,
      title: `Respect`,
      logoSrc: `respect.svg`,
      synonyms: [
        'respect',
        'респект',
        'женская обувь',
        'мужская обувь',
        'обувь',
        'ботильоны',
        'ботинки',
        'туфли',
        'сапоги',
        'босоножки'
      ],
      description: `Стильная обувь по демократичным ценам`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1189,453h-34V417h63v36h-29Z`
    },
    {
      id: 143,
      title: `Мегафон`,
      logoSrc: `megafon.svg`,
      synonyms: ['мегафон', 'megafon'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Сотовая связь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1189,453v27h-16.57L1155,461.43V453Z`
    },
    {
      id: 144,
      title: `Paolo Conte`,
      logoSrc: `paolo-conte.svg`,
      synonyms: [
        'paolo conte',
        'паоло конте',
        'обувь',
        'мужская обувь',
        'женская обувь',
        'дизайнерская обувь',
        'кожаная обувь',
        'кожгалантерея',
        'туфли',
        'сапоги',
        'ботинки'
      ],
      description: `Модная обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,382h-63V357h63Z`
    },
    {
      id: 145,
      title: `Rieker`,
      logoSrc: `rieker.svg`,
      synonyms: [
        'Rieker',
        'Рикер',
        'ортопедическая обувь',
        'обувь',
        'женская обувь',
        'мужская обувь',
        'туфли',
        'ботинки',
        'сапоги'
      ],
      description: `Удобная обувь антистресс`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1193,357h-38v-8l18-18h20Z`
    },
    {
      id: 146,
      title: `TELE2`,
      logoSrc: `tele2.svg`,
      synonyms: ['tele2', 'теле2'],
      description: `Оператор сотовой связи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Сотовая связь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1211,453v27h-22V453Z`
    },
    {
      id: 147,
      title: `Классика вкуса`,
      logoSrc: `klassika-vkusa.svg`,
      synonyms: ['Классика вкуса', 'чай', 'кофе'],
      description: `Чай, кофе`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1229.9,331l12.1,12v14h-24V331Z`
    },
    {
      id: 148,
      title: `MYBOX`,
      logoSrc: `mybox.svg`,
      synonyms: ['mybox', 'Суши', 'Японская', 'майбокс', 'май бокс'],
      description: `Японская кухня, суши`,
      discount: new Set(),
      category: new Set([categoryFilter[`Японская кухня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,357h24v25h-24Z`
    },
    {
      id: 149,
      title: `Мур-Мур`,
      logoSrc: `mur-mur.svg`,
      synonyms: ['мурмур', 'мур', 'мр'],
      description: `Товары для животных`,
      discount: new Set(),
      category: new Set([categoryFilter[`Зоотовары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,382h24v23h-24Z`
    },
    {
      id: 150,
      title: `Табак`,
      logoSrc: `tabak.svg`,
      synonyms: ['сигареты', 'сигары', 'курить', 'табак'],
      description: `Специализированный магазин табачной продукции`,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,425h24v14h-24Z`
    },
    {
      id: 151,
      title: `Ottimo`,
      logoSrc: `ottimo.svg`,
      synonyms: [
        'Ottimo',
        'отимо',
        'оттимо',
        'Сумки',
        'очки',
        'часы',
        'аксессуары',
        'кожгалантерея'
      ],
      description: `Сумки, очки, часы, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Часы`],
        categoryFilter[`Кожгалантерея`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1229,453h13v15.09L1230.44,480H1229Z`
    },
    {
      id: 152,
      title: `Пекарня «Альпен»`,
      logoSrc: `alpen.svg`,
      synonyms: [
        'альпэн',
        'алпен',
        'алпэн',
        'альпен',
        'пекарня',
        'торты',
        'свежая выпечка',
        'пирожки',
        'хлеб'
      ],
      description: `Огромный выбор свежей выпечки`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,405h24v20h-24V405Z`
    },
    {
      id: 153,
      title: `Ортопед и Я`,
      logoSrc: `ortoped.svg`,
      synonyms: ['ортопед и я', 'ортопедия', 'ортопедические изделия'],
      description: `Ортопедический салон`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,439h24v14h-24Z`
    },
    {
      id: 154,
      title: `Креатив`,
      logoSrc: `kreativ.svg`,
      synonyms: [
        'креатив',
        'профессиональная косметика',
        'товары для парикмахеров',
        'уход за волосами',
        'уход за ногтями',
        'маникюрные наборы',
        'лак',
        'парфюм',
        'шампуни',
        'косметика для волос'
      ],
      description: `Профессиональная косметика, товары для парикмахеров`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1229,453v27h-18V453h18Z`
    },
    {
      id: 155,
      title: `Weekend MaxMara`,
      logoSrc: `maxmara.svg`,
      synonyms: [
        'максмара',
        'vfrc vfhf',
        'макс мара',
        'викенд',
        'векенд',
        'weekend maxmara',
        'пальто',
        'трикотаж',
        'рубашки',
        'джинсы',
        'одежда для женщин',
        'сумки',
        'обувь',
        'очки',
        'платки'
      ],
      description: `Женская одежда в стиле casual`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M979,514v54H943V514Z`
    },
    {
      id: 156,
      title: `Кристалл`,
      logoSrc: `kristall.svg`,
      synonyms: ['кристалл'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M909,514v54H871V525.22Z`
    },
    {
      id: 157,
      title: `The iStore`,
      logoSrc: `the-istore.svg`,
      synonyms: [
        'The iStore',
        'iStore',
        'айстор',
        'истор',
        'айсторе',
        'телефоны',
        'Apple',
        'планшеты'
      ],
      description: `Официальный представитель Аpple в России`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M943,514v54H909V514l.06,0Z`
    },
    {
      id: 158,
      title: `Tezenis`,
      logoSrc: `tezenis.svg`,
      synonyms: [
        'tezenis',
        'тезенис',
        'еуяутшы',
        'белье',
        'женское белье',
        'мужское белье',
        'детское белье',
        'купальники',
        'колготки',
        'платки',
        'домашние костюмы'
      ],
      description: `Женское и мужское белье`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1107.25,514,1124,531.15V568h-71V539h35V514Z`
    },
    {
      id: 159,
      title: `Marella`,
      logoSrc: `marella.svg`,
      synonyms: [
        'марелла',
        'марела',
        'марэлла',
        'марэла',
        'женская одежда',
        'одежда',
        'классическая одежда',
        'сумки',
        'женская обувь',
        'головные уборы'
      ],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`],
        categoryFilter[`Головные уборы`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1017,514v54H979V514Z`
    },
    {
      id: 160,
      title: `CHESTER`,
      logoSrc: `chester.svg`,
      synonyms: [
        'chester',
        'честер',
        'обувь',
        'сруыеук',
        'мужская обувь',
        'женская обувь',
        'ботинки',
        'туфли',
        'сапоги',
        'кожгалантерея'
      ],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1053,539v29h-36V514h36Z`
    },
    {
      id: 161,
      title: `BRIOCHE`,
      logoSrc: `brioche.svg`,
      synonyms: [
        'brioche',
        'бриош',
        'брошь',
        'бриохе',
        'бриоче',
        'brioche',
        'bri',
        'кондитерская',
        'винотека'
      ],
      description: `Кондитерская, винотека`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`],
        categoryFilter[`Десерты`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1053,539V514h35v25Z`
    },
    {
      id: 162,
      title: `Intimissimi`,
      logoSrc: `intimissimi.svg`,
      synonyms: [
        'intimissimi',
        'интимисими',
        'интимиссими',
        'белье',
        'женское белье',
        'мужское белье',
        'купальники',
        'бикини'
      ],
      description: `Нижнее белье`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M803.37,299H800V214h37v52A55.15,55.15,0,0,0,803.37,299Z`
    },
    {
      id: 163,
      title: `Модная Цирюльня`,
      logoSrc: `modnaya-ciryulnya.svg`,
      synonyms: ['модная цирюльня'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M800,117V36h37v81Z`
    },
    {
      id: 164,
      title: `Джинсомания`,
      logoSrc: `dzhinsomaniya.svg`,
      synonyms: [
        'джинсомания',
        'джинсы',
        'куртки',
        'плащи',
        'ремни',
        'перчатки',
        'шарфики',
        'шарфы',
        'свитер',
        'брюки',
        'свитера',
        'джемперы',
        'жакет',
        'джемпер',
        'верхняя одежда',
        'сумки'
      ],
      description: `Джинсовая и повседневная одежда для всей семьи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M800,117h37v97H800Z`
    },
    {
      id: 165,
      title: `Снежная Королева`,
      logoSrc: `snowqueen.svg`,
      synonyms: [
        'снежка',
        'cyt;yfz rjhjktdf',
        'снежная королева',
        'верхняя одежда',
        'мужская одежда',
        'женская одежда',
        'одежда из кожи',
        'одежда из меха',
        'головные уборы',
        'шапки',
        'шубы и меха',
        'пальто',
        'джинсы',
        'куртки',
        'шубы'
      ],
      description: `Верхняя одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M604,36V299H535V247H476V36Z`
    },
    {
      id: 166,
      title: `Кораблик`,
      logoSrc: `korablik.svg`,
      synonyms: [
        'Кораблик',
        'караблик',
        'кораблик',
        'детские товары',
        'игрушки',
        'детское питание',
        'детская одежда',
        'rjhf,kbr'
      ],
      description: `Детские товары и игрушки`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M312,151H215V36H361v74H312Z`
    },
    {
      id: 167,
      title: `Zara`,
      logoSrc: `zara.svg`,
      synonyms: [
        'зара',
        'яфкф',
        'zara',
        'одежда',
        'женская одежда',
        'мужская одежда',
        'детская одежда',
        'куртки',
        'сумки',
        'платья',
        'костюмы',
        'обувь',
        'парфюм',
        'верхняя одежда'
      ],
      description: `Одежда для современных людей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Головные уборы`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M800,214v85H604V36H800V214Z`
    },
    {
      id: 168,
      title: `Reserved`,
      logoSrc: `reserved.svg`,
      synonyms: [
        'резервд',
        'ресервд',
        'резервед',
        'ресерд',
        'резевт',
        'Reserved',
        'Женская одежда',
        'Мужская одежда',
        'Детская одежда',
        'Одежда',
        'Брюки',
        'Юбки',
        'Платья',
        'Блузы',
        'Рубашки',
        'Аксессуары',
        'Украшения',
        'Обувь'
      ],
      description: `Женская, мужская и детская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Одежда`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M365,195V299H265V151h47V110h49V36H476V195H365Z`
    },
    {
      id: 169,
      title: `Incanto`,
      logoSrc: `incanto.svg`,
      synonyms: ['incanto', 'инканто'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M906,238l-35,27.37V192h35Z`
    },
    {
      id: 170,
      title: `Grand Gudini`,
      logoSrc: `grand-gudini.svg`,
      synonyms: [
        'grand gudini',
        'гранд гудини',
        'обувь',
        'мужская обувь',
        'женская обувь',
        'кожаная обувь',
        'туфли',
        'ботинки',
        'сапоги'
      ],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M906,192H871V122h35Z`
    },
    {
      id: 171,
      title: `Хранение меха`,
      logoSrc: `hranenie-mekha.svg`,
      synonyms: ['Хранение меха'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1203,82h59v35h-59Z`
    },
    {
      id: 172,
      title: `TOM TAILOR`,
      logoSrc: `tom-tailor.svg`,
      synonyms: ['том тейлор', 'том', 'tom tailor', 'tailor'],
      description: `Женская и мужская одежда, аксессуары`,
      discount: new Set(),
      category: new Set([categoryFilter[`Аксессуары`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M906,122H871V36h35Z`
    },
    {
      id: 173,
      title: `Bershka`,
      logoSrc: `bershka.svg`,
      synonyms: [
        'бершка',
        'bershka',
        'трендовая одежда',
        'одежда',
        'одежда для женщин',
        'одежда для мужчин',
        'молодежная одежда',
        'обувь',
        'женская обувь',
        'мужская обувь',
        'аксессуары',
        'сумки',
        'кошельки',
        'клатчи',
        'верхняя одежда'
      ],
      description: `Трендовая одежда, обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M980,254v45H906.63A55.15,55.15,0,0,0,871,265.37h0L906,238V36h74Z`
    },
    {
      id: 174,
      title: `Ателье «MODnое»`,
      logoSrc: `atele-modnoe.svg`,
      synonyms: ['Ателье «MODnое»', 'ателье модное'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1203,161h59v44h-59Z`
    },
    {
      id: 175,
      title: `Terranova`,
      logoSrc: `terranova.svg`,
      synonyms: [
        'terranova',
        'терранова',
        'теранова',
        'одежда',
        'детская одежда',
        'джинсы',
        'молодежная одежда',
        'обувь',
        'носки',
        'шапки',
        'куртки',
        'сумки',
        'верхняя одежда'
      ],
      description: `Итальянская стильная и доступная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1174,248v51h-75V36h104V248Z`
    },
    {
      id: 176,
      title: `Химчистка «Экочистка»`,
      logoSrc: `himchistka-ehkochistka.svg`,
      synonyms: ['Химчистка Экочистка'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1203,117h59v44h-59Z`
    },
    {
      id: 177,
      title: `FiNN FLARE`,
      logoSrc: `finn-flare.svg`,
      synonyms: [
        'фин флер',
        'финн флэр',
        'фин флэр',
        'финфлер',
        'финфлэр',
        'finn flare',
        'женская одежда',
        'мужская одежда',
        'детская одежда',
        'верхняя одежда',
        'куртки',
        'джинсы',
        'джемперы',
        'белье',
        'шапки',
        'перчатки',
        'шарфы'
      ],
      description: `Женская и мужская одежда, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бельё`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: {
        text: ``,
        url: ``
      },
      button: { text: ``, action: `` },
      path: `M980,377.43V331h71v84H980Z`
    },
    {
      id: 178,
      title: `Betty Barclay`,
      logoSrc: `betty-barclay.svg`,
      synonyms: [
        'betty barclay',
        'бетти барклай',
        'барклау',
        'бети',
        'борклай',
        'бэтти',
        'бэти',
        'бэтси',
        'одежда',
        'женская одежда',
        'одежда из германии',
        'сумки',
        'ремни',
        'очки',
        'верхняя одежда',
        'шапки'
      ],
      description: `Элегантная женская одежда из Германии`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Головные уборы`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1017,446v34H980V446Z`
    },
    {
      id: 179,
      title: `Грация`,
      logoSrc: `graciya.svg`,
      synonyms: ['грация', 'чулки', 'носки', 'колготки', 'белье', 'пижамы'],
      description: `Чулочно-носочная продукция, белье, одежда для сна`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1088,383h36v32h-36Z`
    },
    {
      id: 180,
      title: `ARMANI EXCHANGE`,
      logoSrc: `armaniexchange.svg`,
      synonyms: [
        'armani',
        'armani exchange',
        'армани',
        'арма',
        'fhvfyb',
        'молодежная',
        'дизайнерская одежда'
      ],
      description: `Молодежная дизайнерская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1088,444.84V480h-37V415h37Z`
    },
    {
      id: 181,
      title: `Best Of Brands`,
      logoSrc: `bestofbrands.svg`,
      synonyms: ['best of brands', 'best', 'brand'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Аксессуары`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1051,415v65h-34V446H980V415Z`
    },
    {
      id: 182,
      title: `LADY COLLECTION`,
      logoSrc: `ladycollection.svg`,
      synonyms: [
        'lady collection',
        'леди коллекшн',
        'леди колекшн',
        'дфвн сщддусешщт',
        'lady',
        'бижутерия',
        'кольца',
        'серьги',
        'аксессуары',
        'украшения'
      ],
      description: `Модная бижутерия и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Подарки и сувениры`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1088,362V331h20v31Z`
    },
    {
      id: 183,
      title: `BAON`,
      logoSrc: `baon.svg`,
      synonyms: [
        'баон',
        'baon',
        'женская одежда',
        'мужская одежда',
        'куртки',
        'пуховики',
        'шапки',
        'шарфы',
        'носки',
        'детская одежда',
        'горнолыжные костюмы',
        'обувь',
        'купальники',
        'белье'
      ],
      description: `Одежда и аксессуары в стиле Casual`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Спортивные товары`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1051,415V331h37v84Z`
    },
    {
      id: 184,
      title: `Брянские кабельные сети`,
      logoSrc: `domru-bks.svg`,
      synonyms: ['дом.ru', 'dom.ru', 'bks', 'бкс'],
      description: `Салон услуг связи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Провайдер интернета`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1108,362V331h4.2l11.8,12.17V362Z`
    },
    {
      id: 185,
      title: `Atlantic`,
      logoSrc: `atlantic.svg`,
      synonyms: [
        'atlantic',
        'атлантик',
        'atlantik',
        'нижнее белье',
        'мужское белье',
        'женское белье',
        'купальники'
      ],
      description: `Нижнее бельё`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1107.63,362H1124v21h-36V362Z`
    },
    {
      id: 186,
      title: `Milan man`,
      logoSrc: `milan-man.svg`,
      synonyms: ['milan man', 'милан мен'],
      description: `Бутик мужской одежды`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Мужская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1088,415h36v30h-36Z`
    },
    {
      id: 187,
      title: `Московский ювелирный завод De Luxe`,
      logoSrc: `miuz.svg`,
      synonyms: [
        'московский ювелирный завод de luxe',
        'мюз',
        'делюкс',
        'ювелирка',
        'ювелир'
      ],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set([]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M898,406H871V383h27Z`
    },
    {
      id: 188,
      title: `PANDORA`,
      logoSrc: `pandora.svg`,
      synonyms: [
        'pandora',
        'пандора',
        'украшения',
        'серьги',
        'кольца',
        'шармы',
        'аксессуары',
        'браслеты'
      ],
      description: `Ювелирные украшения`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирные украшения`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M898,383H871V371.09a55.12,55.12,0,0,0,27-18.36Z`
    },
    {
      id: 189,
      title: `Yves Rocher`,
      logoSrc: `yves-rocher.svg`,
      synonyms: [
        'ивроше',
        'ив роше',
        'yves rocher',
        'косметика',
        'парфюмерия',
        'парфюм',
        'духи',
        'помада',
        'тушь',
        'тени',
        'мужская косметика'
      ],
      description: `Французская растительная косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M898,427H871V406h27Z`
    },
    {
      id: 190,
      title: `Ювелир`,
      logoSrc: `yuvelir.svg`,
      synonyms: ['ювелир'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M980,446v34H935V446Z`
    },
    {
      id: 191,
      title: `Оптика Eye Fresh`,
      logoSrc: `eye-fresh.svg`,
      synonyms: ['оптика eye fresh', 'оптика', 'айфреш'],
      description: `Оптика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Оптика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M935,446v34H905V446Z`
    },
    {
      id: 192,
      title: `L'Occitane`,
      logoSrc: `loccitane.svg`,
      synonyms: [
        'l occitane',
        'локситэн',
        'локситен',
        'локситан',
        'лоситан',
        'лосситен',
        'лоситэн',
        'лосси',
        'локси',
        'французская косметика',
        'натуральная косметика',
        'loccitan',
        'locci',
        'парфюмерия',
        'духи',
        'гели',
        'пена для ванны',
        'тушь',
        'помада',
        'лак'
      ],
      description: `Французская косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M905,446v34l-34-17V446h34Z`
    },
    {
      id: 193,
      title: `Librederm`,
      logoSrc: `librederm.svg`,
      synonyms: [
        'librederm',
        'либредерм',
        'либрадерм',
        'либридэри',
        'дерм',
        'либр',
        'либри',
        'либро',
        'kb,hblthv',
        'косметика',
        'либдерем'
      ],
      description: `Косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M898,446H871V427h27Z`
    },
    {
      id: 194,
      title: `Mango`,
      logoSrc: `mango.svg`,
      synonyms: [
        'mango',
        'манго',
        'одежда',
        'женская одежда',
        'мужская одежда',
        'детская одежда',
        'белье',
        'обувь',
        'ремни',
        'сумки',
        'очки',
        'шарфы',
        'куртки',
        'пальто',
        'спортивная одежда'
      ],
      description: `Женская одежда для жительниц города`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Женская одежда`],
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M898,352.08A54.06,54.06,0,0,0,908.5,331H953v46h27v69H898V352.08Z 21.1z`
    },
    {
      id: 195,
      title: `Organic Shop`,
      logoSrc: `organic-shop.svg`,
      synonyms: [
        'organic shop',
        'органик',
        'organic',
        'натуральная косметика',
        'органическая косметика'
      ],
      description: `Органическая и натуральная косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M953,377V331h27v46Z`
    },
    {
      id: 196,
      title: `CALZEDONIA`,
      logoSrc: `calzedonia.svg`,
      synonyms: [
        'calzedonia',
        'карлзедония',
        'карлзедония',
        'калзедония',
        'кальцедония',
        'калзедона',
        'белье',
        'одежда для пляжа',
        'купальники',
        'бикини',
        'белье для мужчин',
        'чулки',
        'колготки'
      ],
      description: `Колготки, чулки, купальники`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бельё`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1124,445v23l-12,12h-24V445Z`
    },
    {
      id: 197,
      title: `Gloria Jeans`,
      logoSrc: `gloria-jeans.svg`,
      synonyms: [
        'глория джинс',
        'глория',
        'модная одежда',
        'детская одежда',
        'одежда',
        'обувь',
        'аксессуары',
        'шапки',
        'белье',
        'перчатки',
        'носки',
        'женская одежда',
        'мужская одежда',
        'верхняя одежда'
      ],
      description: `Модная одежда, обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: {
        text: `1 действующая акция`,
        url: ``
      },
      button: { text: ``, action: `` },
      path: `M1099,36V299h-32V254H980V36Z`
    },
    {
      id: 198,
      title: `REVOLUTION`,
      logoSrc: `revolution.svg`,
      synonyms: [
        'make up',
        'make',
        'revolution ',
        'макияж ',
        'мейк',
        'революшион',
        'революшн',
        'революшен'
      ],
      description: `Магазин профессиональной косметики Revolution`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1002,254v45H980V254Z`
    },
    {
      id: 199,
      title: `Турагентство «Sunmar»`,
      logoSrc: `sunmar.svg`,
      synonyms: ['Турагентство «Sunmar»'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Туристическое агентство`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1223,248v51h-20V248Z`
    },
    {
      id: 1100,
      title: `Brow time`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1223 213h20v51h-20z`
    },
    {
      id: 1101,
      title: `Milavitsa`,
      logoSrc: `milavitsa.svg`,
      synonyms: [
        'милавица',
        'миловица',
        'vbkfdbwf',
        'milavitsa',
        'milavitsa',
        'белье',
        'купальники',
        'корректирующее белье',
        'белье для сна',
        'пижамы'
      ],
      description: `Женское белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1203,248v51h-29V248Z`
    },
    {
      id: 1102,
      title: `Линии Любви`,
      logoSrc: `linii-lyubvi.svg`,
      synonyms: ['линии любви'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1034,254v45h-32V254Z`
    },
    {
      id: 1103,
      title: `Рив Гош`,
      logoSrc: `riv-gosh.svg`,
      synonyms: [
        'риф гош',
        'riv gosh',
        'косметика',
        'парфюм',
        'hbd uji',
        'духи',
        'тушь',
        'помада',
        'крем'
      ],
      description: `Косметика и парфюмерия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M476,247v52H417V195h59Z`
    },
    {
      id: 1104,
      title: `Mohito`,
      logoSrc: `mohito.svg`,
      synonyms: [
        'vk[bnj',
        'мохито',
        'махито',
        'Mohito',
        'Одежда',
        'женская одежда',
        'молодежная одежда',
        'офисная одежда',
        'casual',
        'платья',
        'юбки',
        'брюки'
      ],
      description: `Женская одежда`,
      discount: new Set([]),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M417,195V299H365V195Z`
    },
    {
      id: 1105,
      title: `s.Oliver`,
      logoSrc: `soliver.svg`,
      synonyms: [
        'оливер',
        'jkbdth',
        'oliwer',
        'соливер',
        'oliver',
        's.oliver',
        'одежда',
        'повседневная одежда',
        'мужская одежда',
        'женская одежда',
        'одежда для детей',
        'сумки',
        'ремни',
        'шапки'
      ],
      description: `Одежда для женщин и мужчин`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M535,247v52H476V247Z`
    },
    {
      id: 1106,
      title: `Шоколадница`,
      logoSrc: `shokoladnica.svg`,
      synonyms: ['шоколадница'],
      description: `Изысканное и уютное кафе`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M882.5,318A27.5,27.5,0,1,1,855,290.5,27.5,27.5,0,0,1,882.5,318Z`
    },
    {
      id: 1107,
      title: `Van Cliff`,
      logoSrc: `vancliff.svg`,
      synonyms: [
        'ванклиф',
        'ванклив',
        'ванклифф',
        'vancliff',
        'мужская одежда',
        'пальто',
        'костюмы',
        'пиджаки',
        'брюки',
        'классические костюмы',
        'одежда для мальчика',
        'верхняя одежда',
        'одежда для детей'
      ],
      description: `Мужская деловая одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M657,514v54H584V542h39V514Z`
    },
    {
      id: 1108,
      title: `Mascotte`,
      logoSrc: `mascotte.svg`,
      synonyms: [
        'обувь',
        'аксессуары',
        'mascotte',
        'кожгалантерея',
        'мужская обувь',
        'женская обувь',
        'туфли',
        'ботинки',
        'сапоги'
      ],
      description: `Модная мужская и женская обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M730,514v54H692V514Z`
    },
    {
      id: 1109,
      title: `Хронограф`,
      logoSrc: `hronograf.svg`,
      synonyms: ['хронограф', 'hronograf'],
      description: `Салон часов`,
      discount: new Set(),
      category: new Set([categoryFilter[`Часы`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M623,542H584V531l18-17h21Z`
    },
    {
      id: 1110,
      title: `Carlo Pazolini`,
      logoSrc: `pazolini.svg`,
      synonyms: [
        'carlo pazolini',
        'карло пазолини',
        'обувь',
        'сумки',
        'кошельки',
        'ремни'
      ],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M800,542v26H767V514h33Z`
    },
    {
      id: 1111,
      title: `ECCO`,
      logoSrc: `ecco.svg`,
      synonyms: [
        '\'rrj',
        'экко',
        'екко',
        'эко',
        'ecco',
        'фирменная обувь',
        'обувь',
        'мужская обувь',
        'женская обувь',
        'детская обувь',
        'удобная обувь',
        'сумки',
        'аксессуары'
      ],
      description: `Фирменная обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M692,514v54H657V514Z`
    },
    {
      id: 1112,
      title: `DOMANI`,
      logoSrc: `domani.svg`,
      synonyms: [
        'domani',
        'домани',
        'сумки',
        'ремни',
        'чемоданы',
        'зонты',
        'кошельки'
      ],
      description: `Сеть салонов итальянских сумок и аксессуаров`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M767,514v54H730V514Z`
    },
    {
      id: 1113,
      title: `Билайн`, // Возле входа №2
      logoSrc: `beeline-alt.svg`,
      synonyms: [
        'билайн',
        'beeline.ru',
        'мобильная связь',
        'мобильный интернет',
        'мобильный оператор',
        'оператор сотовой связи'
      ],
      description: `Салон мобильной связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M819,521.16,837,527v41H800V542h19Z`
    },
    {
      id: 1114,
      title: `Билайн`, // Возле Ленты
      logoSrc: `beeline.svg`,
      synonyms: [
        'билайн',
        'beeline.ru',
        'мобильная связь',
        'мобильный интернет',
        'мобильный оператор',
        'оператор сотовой связи'
      ],
      description: `Салон мобильной связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1218,331v26h-25V331Z`
    },
    {
      id: 1115,
      title: `МТС`, // Возле входа №2
      logoSrc: `mts.svg`,
      synonyms: ['МТС', 'mts'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Сотовая связь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M800,514l19,7.16V542H800Z`
    },
    {
      id: 1116,
      title: `МТС`,
      logoSrc: `mts.svg`,
      synonyms: ['МТС', 'mts'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Сотовая связь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1262,248v51h-19V248Z`
    },
    {
      id: 1117,
      title: `Каприз Авеню`,
      logoSrc: `kapriz-avenyu.svg`,
      synonyms: [
        'Каприз Авеню',
        'каприз',
        'авеню',
        'белье',
        'женское белье',
        'мужское белье',
        'купальники',
        'трусы'
      ],
      description: `Женское белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Белье`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M728,431v49H692V431Z`
    },
    {
      id: 1118,
      title: `Л'Этуаль (L’Etoile)`,
      logoSrc: `letu.svg`,
      synonyms: [
        'летуаль',
        'лэтуаль',
        'косметика',
        'парфюмерия',
        'средства ухода',
        'letoile',
        'make up',
        'cosmetics',
        'skin care',
        'perfume',
        'духи',
        'тушь'
      ],
      description: `Супермаркет парфюмерно-косметической продукции`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M804,431h33v33l-33,16H728V431Z`
    },
    {
      id: 1119,
      title: `ЭКОНИКА`,
      logoSrc: `ehkonika.svg`,
      synonyms: [
        'эконика',
        'иконика',
        'эконека',
        'женская обувь',
        'обувь',
        'туфли',
        'сапоги',
        'босоножки',
        'кожгалантерея'
      ],
      description: `Модная обувная сеть`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M656,431v49H621V431Z`
    },
    {
      id: 1120,
      title: `Samsung`,
      logoSrc: `samsung.svg`,
      synonyms: [
        'samsung',
        'самсунг',
        'бытовая техника',
        'цифровая техника',
        'телефон',
        'смартфон'
      ],
      description: `Техника`,
      discount: new Set(),
      category: new Set([categoryFilter[`Бытовая техника и электроника`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M804,407h33v24H804Z`
    },
    {
      id: 1121,
      title: `Шапэль`,
      logoSrc: `shapehl.svg`,
      synonyms: ['шапки', 'шапэль', 'шапель', 'головные уборы'],
      description: `Головные уборы`,
      discount: new Set(),
      category: new Set([categoryFilter[`Головные уборы`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M621,448v32H603V448Z`
    },
    {
      id: 1122,
      title: `Оликон`,
      logoSrc: `olikon.svg`,
      synonyms: ['Оликон', 'Аликон', 'Олекон', 'Алекон', 'Jkbrjy', 'Золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M837,370v37H804V338.59A55.15,55.15,0,0,0,837,370Z`
    },
    {
      id: 1123,
      title: `Оликон`, // Островок
      logoSrc: ``,
      synonyms: ['Оликон', 'Аликон', 'Олекон', 'Алекон', 'Jkbrjy', 'Золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1147.5,445.5v16h-16v-16Z`
    },
    {
      id: 1124,
      title: ` 2scoop`,
      logoSrc: `2scoop.svg`,
      synonyms: ['2scoop', 'спорт', 'спортпит'],
      description: `Спортивное питание`,
      discount: new Set(),
      category: new Set([categoryFilter[`Спортивные товары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M603,448v32h-8l-11-11V448Z`
    },
    {
      id: 1125,
      title: `Pull & Bear`,
      logoSrc: `pullandbear.svg`,
      synonyms: [
        'пул',
        'пул энд бир',
        'пул енд бир',
        'pull',
        'pul',
        'пул енд бер',
        'pull&bear',
        'одежда',
        'мужская одежда',
        'женская одежда',
        'обувь',
        'верхняя одежда',
        'куртки',
        'плащи',
        'пальто',
        'джинсы',
        'платья',
        'сумки',
        'шапки',
        'шарфы'
      ],
      description: `Одежда для энергичных, творческих и амбициозных молодых людей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M621,408V331H728V431H621Z`
    },
    {
      id: 1126,
      title: `Stradivarius`,
      logoSrc: `stradivarius.svg`,
      synonyms: [
        'страдивариус',
        'страдевариус',
        'страдивар',
        'страдевар',
        'strad',
        'stradivarius',
        'женская одежда',
        'куртки',
        'платья',
        'джинсы',
        'джемперы',
        'обувь',
        'сумки',
        'шапки'
      ],
      description: `Женская молодежная одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M728,431V331h73.56a54.16,54.16,0,0,0,2.44,7.59V431Z`
    },
    {
      id: 1127,
      title: `Русское золото`,
      logoSrc: `ruszol.svg`,
      synonyms: ['русское золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M692,431v49H656V431Z`
    },
    {
      id: 1128,
      title: `Lexmer`,
      logoSrc: `lexmer.svg`,
      synonyms: [
        'костюмы',
        'сорочки',
        'брюки',
        'пальто',
        'пиджаки',
        'верхняя одежда ',
        'одежда для мужчин',
        'школьная форма'
      ],
      description: `Мужская классическая одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M603,448H584V408h37v40Z`
    },
    {
      id: 1129,
      title: `LIME`,
      logoSrc: `lime.svg`,
      synonyms: [
        'Lime',
        'LIME',
        'лайм',
        'lime',
        'лиме',
        'laime',
        'ла',
        'модная одежда',
        'аксессуары'
      ],
      description: `Женская одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M621,331v77H599V373H584V344l13-13Z`
    },
    {
      id: 1130,
      title: `KEDMA`,
      logoSrc: `kedma.svg`,
      synonyms: [
        'KEDMA',
        'Кедма',
        'кедма',
        'женская одежда',
        'одежда',
        'rtlvf'
      ],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,433H251V406h39v27Z`
    },
    {
      id: 1131,
      title: `Te amo`,
      logoSrc: `te-amo.svg`,
      synonyms: [
        'Te amo',
        'Тэ амо',
        'Тэ ама',
        'Тэ альмо',
        'N" fvj',
        'Женская одежда',
        'Одежда',
        'Молодежная одежда',
        'Брюки',
        'Платья',
        'Юбки'
      ],
      description: `Женская молодежная одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter['Женская одежда']]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,433v50H265l-14-25V433Z`
    },
    {
      id: 1132,
      title: `De oro plata`,
      logoSrc: `de-oro-plata.svg`,
      synonyms: [
        'de oro plata',
        'ювелирка',
        'деороплата',
        'де оро плата',
        'дейоро плата',
        'дейороплата',
        'де ора плата'
      ],
      description: `Ювелирный салон`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,384H265V360h25Z`
    },
    {
      id: 1133,
      title: `Crocs`,
      logoSrc: `crocs.svg`,
      synonyms: [
        'Crocs',
        'крокс',
        'кроксы',
        'женская обувь',
        'мужская обувь',
        'детская обувь',
        'резиновая обувь',
        'обувь для пляжа'
      ],
      description: `Удобная обувь для взрослых и детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,406H265V384h25Z`
    },
    {
      id: 1134,
      title: `SELA`,
      logoSrc: `sela.svg`,
      synonyms: [
        'SELA',
        'Cela',
        'СЭЛА',
        'Села ',
        'одежда',
        'женская одежда',
        'мужская одежда',
        'брюки',
        'платья',
        'кофты',
        'футболки',
        'юбки',
        'рубашки',
        'джемперы',
        'детская одежда'
      ],
      description: `Одежда для всей семьи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M352,432v51H290V412h62Z`
    },
    {
      id: 1135,
      title: `HOUSE`,
      logoSrc: `house.svg`,
      synonyms: [
        'хаус',
        'хауз',
        '[fec',
        '[fep',
        'House',
        'Одежда',
        'молодежная одежда',
        'женская одежда',
        'мужская одежда',
        'украшения',
        'аксессуары',
        'ремни',
        'шапки',
        'толстовки',
        'куртки',
        'джинсы',
        'брюки',
        'юбки',
        'футболки',
        'casual'
      ],
      description: `Молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M352,412V331h47V432H352Z`
    },
    {
      id: 1136,
      title: `CROPP`,
      logoSrc: `cropp.svg`,
      synonyms: [
        'кроп',
        'кропп',
        'кроб',
        'rhjgg',
        'Cropp',
        'Casual',
        'Молодежная одежда',
        'Джинсы',
        'Платья',
        'Мужская одежда',
        'Женская одежда',
        'Повседневная одежда',
        'Одежда',
        'Обувь',
        'Аксессуары',
        'Стильная одежда'
      ],
      description: `Молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M399,432V331h78V432H399Z`
    },
    {
      id: 1137,
      title: `Sinsay`,
      logoSrc: `sinsay.svg`,
      synonyms: [
        'синсай',
        'сансей',
        'сенсей',
        'синсэй',
        'сенсэй',
        'cbyctq',
        'ctyctq',
        'cbycq',
        'cfyctq',
        'сансей',
        'синсей',
        'sinsay',
        'Одежда',
        'Женская одежда',
        'Платья',
        'Юбки',
        'Брюки',
        'Молодежная одежда'
      ],
      description: `Одежда для стильных девушек`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,360V331h62v81H290V360Z`
    },
    {
      id: 1138,
      title: `MIXIT`,
      logoSrc: `mixit.svg`,
      synonyms: ['mixit', 'миксит', 'mix', 'ьшчше'],
      description: `Лаборатория натуральной косметики`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,360H265V331h25Z`
    },
    {
      id: 1139,
      title: `COLIN'S`,
      logoSrc: `colins.svg`,
      synonyms: [
        'колинз',
        'colin\'s',
        'colins',
        'джинсы',
        'женская одежда',
        'мужская одежда',
        'одежда',
        'куртки',
        'аксессуары',
        'обувь'
      ],
      description: `Модные коллекции одежды и джинсов на каждый день`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M534,331l13,13v61H506V379H477V331Z`
    },
    {
      id: 1140,
      title: `Nelva`,
      logoSrc: `nelva.svg`,
      synonyms: [
        'нелва',
        'nelva',
        'женская одежда',
        'одежда из беларуси',
        'классический стиль',
        'деловой костюм',
        'повседневная одежда'
      ],
      description: `Женская одежда из Белоруссии`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M506,455h41v15l-13,13H477V455Z`
    },
    {
      id: 1141,
      title: `SOHO`,
      logoSrc: `soho.svg`,
      synonyms: ['Сохо', 'Soho', 'Обувь', 'аксессуары'],
      description: `Салон обуви и аксессуаров`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M426,432v51H399V432Z`
    },
    {
      id: 1142,
      title: `Mario Muzi`,
      logoSrc: `mario-muzi.svg`,
      synonyms: [
        'марио музи',
        'мьюзи',
        'MARIO MUZI',
        'Времена Года',
        'мужская обувь',
        'женская обувь',
        'туфли',
        'ботинки',
        'сапоги'
      ],
      description: `Обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M477,455v28H426V432h51Z`
    },
    {
      id: 1143,
      title: `KEDDO`,
      logoSrc: `keddo.svg`,
      synonyms: [
        'KEDDO',
        'KEDO',
        'Кеды',
        'кедо',
        'Обувь',
        'мужская обувь',
        'женская обувь',
        'детская обувь'
      ],
      description: `Обувь для мужчин, женщин и детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M399,432v51H352V432Z`
    },
    {
      id: 1144,
      title: `Аптека «Ритм»`, // Рядом со входом №3
      logoSrc: `aptekaritm.svg`,
      synonyms: ['Аптека', 'Ритм', 'Лекарства'],
      description: `Аптека`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аптека`],
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M506,431h41v24H506Z`
    },
    {
      id: 1145,
      title: `Аптека «Ритм»`, // Рядом с лентой
      logoSrc: `aptekaritm.svg`,
      synonyms: ['Аптека', 'Ритм', 'Лекарства'],
      description: `Аптека`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аптека`],
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1262,205v43h-59V205Z`
    },
    {
      id: 1146,
      title: `Ювелирное ателье`,
      logoSrc: `yuvelirnoe-atele.svg`,
      synonyms: ['ювелирное ателье'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M448,542V514h31v28Z`
    },
    {
      id: 1147,
      title: `Royal Spirit`,
      logoSrc: `royal-spirit.svg`,
      synonyms: [
        'Royal Spirit',
        'Роял Спирит',
        'Мужская одежда',
        'Классическая одежда',
        'Верхняя одежда',
        'Пальто',
        'Куртки',
        'Костюмы',
        'Брюки',
        'Casual'
      ],
      description: `Мужская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Мужская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M399,514v54H364V514Z`
    },
    {
      id: 1148,
      title: `Самоваръ`,
      logoSrc: `samovar.svg`,
      synonyms: ['Самоваръ', 'самовар', 'чай', 'элитные сорта чая'],
      description: `Сеть чайных бутиков`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M326,514v54H290V514Z`
    },
    {
      id: 1149,
      title: `MIO`,
      logoSrc: `mio.svg`,
      synonyms: [
        'мио',
        'mio',
        'обувь',
        'женская обувь',
        'мужская обувь',
        'туфли',
        'ботинки'
      ],
      description: `Обувь`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M290,514v54H251V528l14-14Z`
    },
    {
      id: 1150,
      title: `Шаг за шагом`,
      logoSrc: `shag-za-shagom.svg`,
      synonyms: [
        'Шаг за шагом',
        'обувь',
        'мужская обувь',
        'женская обувь',
        'туфли',
        'сапоги',
        'ботинки'
      ],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M364,514v54H326V514Z`
    },
    {
      id: 1151,
      title: `Milan`,
      logoSrc: `milan.svg`,
      synonyms: ['vbkfy', 'милан', 'мелан'],
      description: `Бутик итальянской одежды`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M547,528v40H510V514h23Z`
    },
    {
      id: 1152,
      title: `Monro`,
      logoSrc: `monro.svg`,
      synonyms: [
        'MONPO',
        'MONRO',
        'Монро',
        'Обувь',
        'Женская обувь',
        'Детская обувь',
        'Мужская обувь',
        'кошельки',
        'сумки',
        'ботинки',
        'туфли'
      ],
      description: `Женская, мужская обувь, детская обувь и аксессуары`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M448,542v26H399V514h49Z`
    },
    {
      id: 1153,
      title: `De Marse`,
      logoSrc: `de-marse.svg`,
      synonyms: [
        'Де Марсе',
        'Де Марсэ',
        'De Marse',
        'L Vfhct',
        'Марсэ',
        'Марсе',
        'пальто',
        'женская одежда',
        'верхняя одежда',
        'пальто премиум-класса'
      ],
      description: `Пальто премиум-класса`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M510,514v54H479V514Z`
    },
    {
      id: 1154,
      title: `Помещение свободно`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1,408V568H62.51c41.78,41.36,104.29,51.71,156.48,0h0V408Z`
    },
    {
      id: 1155,
      title: `Kari`,
      logoSrc: `kari.svg`,
      synonyms: [
        'кари',
        'rfhb',
        'обувь',
        'женская обувь',
        'мужская обувь',
        'детская обувь',
        'шапки',
        'шарфы',
        'перчатки'
      ],
      description: `Обувной магазин`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Детские товары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M95,105h73V209H92v26H1V105Z`
    },
    {
      id: 1156,
      title: `H&M`,
      logoSrc: `h&m.svg`,
      synonyms: ['h&m', 'hm', 'ейч', 'эйч'],
      description: `Модная одежда для женщин, мужчин, подростков и детей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Детские товары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`],
        audienceFilter[`Товары для детей`]
      ]),
      path: `M92,209h76V408H1V235H92Z`
    },
    {
      id: 1157,
      title: `ТРК Клиник`,
      logoSrc: `trk-clinic.svg`,
      synonyms: ['трк клиник', 'клиника'],
      description: `Медицинская клиника`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M168,89v16H95V89Z`
    },
    {
      id: 1158,
      title: `Terrasa`,
      logoSrc: `terrasa.svg`,
      synonyms: [
        'терраса',
        'тераса',
        'тераcса',
        'terasa',
        'terrasa',
        'terassa',
        'nthfccf',
        'nthhfcf'
      ],
      description: `Кафе`,
      discount: new Set(),
      category: new Set([categoryFilter[`Кофейня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M248,236H196V171h52Z`
    },
    {
      id: 1159,
      title: `Дело вкуса`,
      logoSrc: ``,
      synonyms: ['дело вкуса', 'колбасы', 'копчености'],
      description: `Колбасы и копчености`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1194.5,506.5h-16v-16h16Z`
    },
    {
      id: 1160,
      title: `Раниталь`,
      logoSrc: ``,
      synonyms: ['раниталь'],
      description: `Частная сыроварня`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1178.5,506.5h-16v-16h16Z`
    },
    {
      id: 1161,
      title: `Gelateria PLOMBIR`,
      logoSrc: ``,
      synonyms: [
        'gelateria plombir',
        'гелатериа',
        'пломбир',
        'пламбир',
        'plombir'
      ],
      description: `Мороженое`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M951,506.5H935v-16h16Z`
    },
    {
      id: 1162,
      title: `IQOS`,
      logoSrc: ``,
      synonyms: ['iqos', 'айкос'],
      description: `Электронные устройства`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1109.5,506.5h-16v-16h16Z`
    },
    {
      id: 1163,
      title: `О'Эскимо`,
      logoSrc: ``,
      synonyms: [
        'эскимо ',
        'оэскимо',
        'мороженое',
        'морожко',
        'эскимо',
        'о\'эскимо',
        '\'crbvj '
      ],
      description: `Мороженое`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M533.5,499h-16V483h16Z`
    },
    {
      id: 1164,
      title: `NailBar`,
      logoSrc: ``,
      synonyms: ['nail bar'],
      description: `Маникюр`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M487,323H471V307h16Z`
    },
    {
      id: 1165,
      title: `OMEGA`,
      logoSrc: `omega.svg`,
      synonyms: [
        'omega',
        'омега',
        'амега',
        'amega',
        'часовой салон',
        'салон часов',
        'часы'
      ],
      description: `Салон часов`,
      discount: new Set(),
      category: new Set([categoryFilter[`Часы`], categoryFilter[`Аксессуары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1243,248v51h-20V248Z`
    }
  ],
  helpMarkers: [
    {
      symbolId: `parking`,
      points: [
        {
          title: `Парковка`,
          position: [267.96, 0]
        },
        {
          title: `Парковка`,
          position: [279.5, 588]
        },
        {
          title: `Парковка`,
          position: [629.23, 588]
        },
        {
          title: `Парковка`,
          position: [930.87, 588]
        },
        {
          title: `Парковка`,
          position: [1197.27, 588]
        },
        {
          title: `Парковка`,
          position: [1197.27, 588]
        },
        {
          title: `Парковка`,
          position: [638.57, 0]
        },
        {
          title: `Парковка`,
          position: [1113.02, 0]
        }
      ]
    },
    {
      symbolId: `elevator`,
      points: [
        {
          title: `Лифт`,
          position: [245, 259.5]
        },
        {
          title: `Лифт`,
          position: [566.34, 365.41]
        },
        {
          title: `Лифт`,
          position: [1043.04, 266.55]
        }
      ]
    },
    {
      symbolId: `escalator`,
      points: [
        {
          title: `Эскалатор`,
          position: [204.5, 155.5]
        },
        {
          title: `Эскалатор`,
          position: [204.5, 344.5]
        },
        {
          title: `Эскалатор`,
          position: [1007.35, 489]
        },
        {
          title: `Эскалатор`,
          position: [991.75, 307]
        },
        {
          title: `Эскалатор`,
          position: [831.23, 276.17]
        },
        {
          title: `Эскалатор`,
          position: [669.9, 489]
        }
      ]
    },
    {
      symbolId: `wardrobe`,
      points: [
        {
          title: `Гардероб`,
          position: [506.32, 410]
        }
      ]
    },
    {
      symbolId: `wc`,
      points: [
        {
          title: `Туалет`,
          position: [23.5, 84.5]
        },
        {
          title: `Туалет`,
          position: [1223.14, 50.36]
        },
        {
          title: `Туалет`,
          position: [484.5, 410]
        }
      ]
    },
    {
      symbolId: `entrance-vertical`,
      points: [
        {
          title: `Вход №6`,
          position: [191.5, 40]
        },
        {
          title: `Вход №5`,
          position: [846, 40]
        },
        {
          title: `Вход №4`,
          position: [227, 547.15]
        },
        {
          title: `Вход №3`,
          position: [557.5, 547.15]
        },
        {
          title: `Вход №2`,
          position: [846, 547.15]
        },
        {
          title: `Вход №1`,
          position: [1133, 547.15]
        }
      ]
    },
    {
      symbolId: `cafe`,
      points: [
        {
          title: `Кафе`,
          position: [565.5, 300]
        }
      ]
    },
    {
      symbolId: `atm`,
      points: [
        {
          title: `Банкомат`,
          position: [528.13, 410]
        },
        {
          title: `Банкомат`,
          position: [1263.5, 424.5]
        },
        {
          title: `Банкомат`,
          position: [1263.5, 348.5]
        }
      ]
    },
    {
      symbolId: `fountain`,
      points: [
        {
          title: `Фонтан`,
          position: [846, 489]
        }
      ]
    },
    {
      symbolId: `info`,
      points: [
        {
          title: `Инфостойка`,
          position: [846, 454.69]
        }
      ]
    },
    {
      symbolId: `disabled`,
      points: [
        {
          title: `Туалет для ММГ`,
          position: [49.5, 84.5]
        },
        {
          title: `Туалет для ММГ`,
          position: [484.5, 433.84]
        }
      ]
    },
    {
      symbolId: `baby-care`,
      points: [
        {
          title: `Комната матери и ребенка`,
          position: [508, 398]
        }
      ]
    }
  ]
};
