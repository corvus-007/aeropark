import {
  categoryFilter,
  audienceFilter,
  discountFilter,
} from './filter-options';

export default {
  settings: {
    dimensions: {
      width: 831.5,
      height: 612.5,
    },
    boundaryShape: `M81,1.5V373.74C36.85,395.45,1.5,436,1.5,488.5A122.62,122.62,0,0,0,151.65,607.87h0A122.38,122.38,0,0,0,170.11,602L238,580.5H530v-96H830V1.5Z`,
    innerBoundaryShape: `M395,309.5H81V0H395Z`,
  },
  areas: [
    {
      id: 31,
      title: `Экстрим-парк «АТМОСФЕРА»`,
      logoSrc: `atmosfera.svg`,
      synonyms: [
        'атмосфера',
        'экстрим-парк',
        'экстрим-парк атмосфера',
        'веревочный городок',
        'батуты',
        'скалодром',
        'fnvjcathf',
        '\'rcnhbv-gfhr',
      ],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Развлечения`]]),
      audience: new Set(),
      shopURL: `/dynamic/entertainment/6`,
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,462.5v118h-8L170.11,602a122.38,122.38,0,0,1-18.46,5.85h0A122.62,122.62,0,0,1,1.5,488.5C1.5,436,36.85,395.45,81,373.74v-.24H246Z`,
    },
    {
      id: 32,
      title: `Чикен Пицца`,
      logoSrc: `chiken-pizza.svg`,
      synonyms: ['чикен пицца', 'пиццерия', 'xbrty', 'gbwwf', 'пицца', 'чикен'],
      description: `Сеть ресторанов быстрого питания`,
      discount: new Set(),
      category: new Set([categoryFilter[`Кафе и рестораны`]]),
      audience: new Set(),
      shopURL: `/dynamic/eat/71`,
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,373.5H81v-64H423v64H246Z`,
    },
    {
      id: 33,
      title: `Laserland`,
      logoSrc: `laser-land.svg`,
      synonyms: ['laserland', 'лазерленд', 'лазер', 'лазертаг'],
      description: `Центр развлечений`,
      discount: new Set(),
      category: new Set([categoryFilter[`Развлечения`]]),
      audience: new Set(),
      shopURL: `/dynamic/entertainment/5`,
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M423,484.5H530v96H246v-118H377v-89h46Z`,
    },
    {
      id: 34,
      title: `Бумеранг, детский развлекательный центр`,
      logoSrc: `bumerang.svg`,
      synonyms: [
        'дрц ',
        'бумеранг',
        'детский развлекательный центр',
        'развлечения',
        'дети',
        'аттракционы',
        'лабиринт',
        ',evthfyu',
        'lhw',
        'hfpdktrfntkmysq wtynh',
      ],
      description: `Аттракционы, сухой аквапарк, детское кафе`,
      discount: new Set(),
      category: new Set([categoryFilter[`Развлечения`]]),
      audience: new Set(),
      shopURL: `/dynamic/entertainment/9`,
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M830,1.5v483H423v-337H395V1.5H830Z`,
    },
    {
      id: 35,
      title: `N1 ARENA`,
      logoSrc: `n1-arena.svg`,
      synonyms: ['кибер спорт', 'n1 arena', 'н1 арена', 'арена', 'спорт'],
      description: `Киберспортивная арена`,
      discount: new Set(),
      category: new Set([categoryFilter[`Развлечения`]]),
      audience: new Set(),
      shopURL: `/dynamic/entertainment/3`,
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,373.5H377v89H246Z`,
    },
  ],
  helpMarkers: [
    {
      symbolId: `elevator`,
      points: [
        {
          title: `Лифт`,
          position: [387, 163.27],
        },
      ],
    },
    {
      symbolId: `escalator`,
      points: [
        {
          title: `Эскалатор`,
          position: [387, 225.37],
        },
      ],
    },
  ],
};
