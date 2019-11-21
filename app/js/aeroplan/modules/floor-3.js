import { categoryFilter, forWhoFilter, discountFilter } from './filter-options';

export default {
  settings: {
    dimensions: {
      width: 831.5,
      height: 612.5
    },
    boundaryShape: `M81,1.5V373.7C36.9,395.4,1.5,435.9,1.5,488.5A122.4,122.4,0,0,0,124,611a124.8,124.8,0,0,0,27.6-3.1h0a124.7,124.7,0,0,0,18.5-5.9L238,580.5H530v-96H830V1.5Z`
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
        '\'rcnhbv-gfhr'
      ],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,373.5H81v.2C36.9,395.4,1.5,435.9,1.5,488.5A122.4,122.4,0,0,0,124,611a124.8,124.8,0,0,0,27.6-3.1h0a124.7,124.7,0,0,0,18.5-5.9L238,580.5h8v-207Z`
    },
    {
      id: 32,
      title: `Чикен Пицца`,
      logoSrc: `chiken-pizza.svg`,
      synonyms: ['чикен пицца', 'пиццерия', 'xbrty', 'gbwwf', 'пицца', 'чикен'],
      description: `Сеть ресторанов быстрого питания`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,373.5H81v-64H423v64H246Z`
    },
    {
      id: 33,
      title: `Контактный зоопарк &quot;Джунгли зовут&quot;`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      rent: true,
      link: {
        text: ``,
        url: ``
      },
      button: {
        text: `Отправить заявку`,
        action: ``
      },
      path: `M423,484.5H530v96H246v-118H377v-89h46Z`
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
        'hfpdktrfntkmysq wtynh'
      ],
      description: `Аттракционы, сухой аквапарк, детское кафе`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M830,1.5v483H423v-337H395V1.5H830Z`
    },
    {
      id: 35,
      title: `Детские ясли Атмосфера`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M246,373.5H377v89H246Z`
    }
  ],
  helpMarkers: [
    {
      symbolId: `elevator`,
      points: [
        {
          title: `Лифт`,
          position: [746.5, 75.5]
        },
        {
          title: `Лифт`,
          position: [446.5, 75.5]
        }
      ]
    }
  ]
};
