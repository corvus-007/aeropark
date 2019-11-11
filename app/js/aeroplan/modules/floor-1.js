import { categoryFilter, forWhoFilter, discountFilter } from './filter-options';

export default {
  settings: {
    dimensions: {
      width: 1619,
      height: 569
    },
    boundaryShape: `M1618 1H1v532h61.5c41.8 41.4 104.3 51.7 156.5 0h1399z`
  },
  areas: [
    {
      id: 11,
      title: `Лента`,
      logoSrc: `lenta.svg`,
      synonyms: ['лента', 'лента'],
      description: `Гипермаркет`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Гипермаркеты`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1618 533h-321V1h321z`
    },
    {
      id: 12,
      title: `Секунда. Мини-дом быта`,
      logoSrc: `sekunda.svg`,
      synonyms: ['Секунда'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1248 479h18v54h-18z`
    },
    {
      id: 13,
      title: `Церковная лавка`,
      logoSrc: ``,
      synonyms: ['церковная лавка'],
      description: `Церковные товары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Церковные товары`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1229 479h19v54h-19z`
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
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1194 479h35v54h-35z`
    },
    {
      id: 15,
      title: `ELIS`,
      logoSrc: `elis.svg`,
      synonyms: ['элис', 'tkbc', 'elis', 'одежда', 'женская одежда', 'брюки', 'платья', 'юбки', 'трикотаж'],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1194 533h-36v-38l16-16h20z`
    },
    {
      id: 16,
      title: `Планета сухофруктов`,
      logoSrc: ``,
      synonyms: ['планета сухофруктов', 'сухофруткты', 'орехи'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1266.3 471.5h-28v-16h28z`
    },
    {
      id: 17,
      title: `BryanskGiro`,
      logoSrc: ``,
      synonyms: ['Гироскутеры', 'Брянскгиро', 'гиро', 'героскутеры', 'электротранспорт', 'спорт'],
      description: `Гироскутеры`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Спортивные товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1227.5 471.5h-28v-16h28z`
    },
    {
      id: 18,
      title: `Аксессуары для мобильных телефонов`,
      logoSrc: ``,
      synonyms: ['Аксессуары для мобильных телефонов'],
      description: `Аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1155.5 471.5h-28v-16h28z`
    },
    {
      id: 19,
      title: `Прокат машинок`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1057 471.5h-28v-16h28z`
    },
    {
      id: 110,
      title: `София`,
      logoSrc: ``,
      synonyms: ['София', 'Софья', 'Мастерская', 'Православная мастерская', 'Православные подарки'],
      description: `Православные подарки`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Православные товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M978 471.5h-28v-16h28z`
    },
    {
      id: 111,
      title: `Arabic Perfumer`,
      logoSrc: ``,
      synonyms: ['Арабик Перфюме', 'Парфюмерия', 'Духи', 'арабские духи', 'масляные духи', 'Perfume', 'Arab'],
      description: `Парфюмерия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M930 471.5h-28v-16h28z`
    },
    {
      id: 112,
      title: `YOTA`,
      logoSrc: ``,
      synonyms: ['Йота', 'Ёта', 'ета', 'yota'],
      description: `Салон сотовой связи`,
      discount: new Set([]),
      category: new Set([
        categoryFilter[`Сотовая связь`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 113,
      title: `СЛЕТАТЬ.РУ`,
      logoSrc: ``,
      synonyms: [],
      description: `Сервис по подбору туров`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M668.5 471.5h-28v-16h28z`
    },
    {
      id: 114,
      title: `Drive`,
      logoSrc: ``,
      synonyms: ['Драйв', 'гироскутеры', 'гироскутэр', 'скутэр', 'Ubhjcrenth'],
      description: `Гироскутеры`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Спортивные товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M622.5 471.5h-28v-16h28z`
    },
    {
      id: 115,
      title: `IPOCHINO`,
      logoSrc: ``,
      synonyms: ['ipochino', 'айпочино'],
      description: `Крупнейшая сеть сервисных центров в России`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M516 471.5h-28v-16h28z`
    },
    {
      id: 116,
      title: `M Store`,
      logoSrc: ``,
      synonyms: ['M store', 'store', 'mstore', 'мобильные телефоны', 'аксессуары'],
      description: `Мобильные телефоны и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M469.8 471.5h-28v-16h28z`
    },
    {
      id: 117,
      title: `S-PARFUM`,
      logoSrc: ``,
      synonyms: ['sparfum', 'sparfumbryansk', 'подаркиБрянск', 'хочудухи', 'аналогидухов', 'духибрянск', 'спарфюмбрянск', 'парфюмериябрянск', 'ароматыдлядомабрянск', 'montale'],
      description: `Парфюмерный бутик`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M336 471.5h-28v-16h28z`
    },
    {
      id: 118,
      title: `Все для ногтей`,
      logoSrc: ``,
      synonyms: ['все для ногтей', 'косметика', 'ногти', 'маникюр'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 119,
      title: `Fashion Optic`,
      logoSrc: ``,
      synonyms: ['fashion optic'],
      description: `Fashion Optic`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Оптика`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M543 288h-28v-16h28z`
    },
    {
      id: 120,
      title: `BOUTIQUE DE L'AROME`,
      logoSrc: ``,
      synonyms: ['BOUTIQUI DE LʹAROME', 'boutique', 'butiq', 'de larome', 'LʹAROME', 'Larome', 'Ляроме', 'бутик', 'Бутик дэ ля ромэ', 'ароматы для дома', 'ароматические свечи', 'ароматическое масло'],
      description: `Ароматы для дома из Франции`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
        categoryFilter[`Товары для дома`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M573.5 298.5v28h-16v-28z`
    },
    {
      id: 121,
      title: `Boft - фото из Instagram`,
      logoSrc: `boft.svg`,
      synonyms: ['boft', 'бофт', 'инст', 'инстаграм', 'Instagram'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Подарки и сувениры`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M599 338v18h-16v-18z`
    },
    {
      id: 122,
      title: `Carraji`,
      logoSrc: ``,
      synonyms: ['carraji', 'караджи', 'карраджи', 'саккфош', 'украшения', 'мужские украшения', 'цепи', 'кулоны', 'кольца', 'браслеты'],
      description: `Мужские украшения`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M573.5 406.5v28h-16v-28z`
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
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M752.5 288h-28v-16h28z`
    },
    {
      id: 124,
      title: `Askent`,
      logoSrc: ``,
      synonyms: ['Askent', 'Аскент', 'сумки', 'портмоне', 'обложки для документов', 'аксессуары для мобильных телефонов', 'подарки', 'кожгалантерея'],
      description: `Кожгалантерея`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Подарки и сувениры`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M954 288h-28v-16h28z`
    },
    {
      id: 125,
      title: `Джелато Шоколато`,
      logoSrc: ``,
      synonyms: ['Мороженое', 'Шоколад', 'Наполнители', 'Десерт', 'джелатто', 'шоколатто', 'шокколатто', 'джэлатто', 'джэлато', 'джелата'],
      description: `Итальянское мороженое`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M862 162v28h-16v-28z`
    },
    {
      id: 126,
      title: `Bubble Bar`,
      logoSrc: ``,
      synonyms: ['bubble bar', 'баббл бар'],
      description: `Bubble tea`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M862 78v28h-16V78z`
    },
    {
      id: 127,
      title: `РИРЦ`,
      logoSrc: ``,
      synonyms: ['РИРЦ'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1041 288h-28v-16h28z`
    },
    {
      id: 128,
      title: `WT-Парикмахер`,
      logoSrc: ``,
      synonyms: ['профессиональная косметика для волос', 'парикмахер', 'WT-парикмахер', 'товары для парикмахеров', 'шампуни', 'гели', 'лак'],
      description: `Профессиональная косметика, товары для парикмахеров`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1102 288h-28v-16h28z`
    },
    {
      id: 129,
      title: `Baskin Robbins`,
      logoSrc: ``,
      synonyms: ['baskin robbins', 'баскин', 'робинс', 'роббинс'],
      description: `Самый большой выбор мороженого`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1183 288h-28v-16h28z`
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
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1147.5 305.5v28h-16v-28z`
    },
    {
      id: 131,
      title: `БИЛЕТ32.РФ`,
      logoSrc: ``,
      synonyms: ['Билет32', 'Билет на концерт', 'касса', 'продажа билетов', 'концерт'],
      description: `Касса по продаже билетов`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1279.5 279.5v28h-16v-28z`
    },
    {
      id: 132,
      title: `Спортлото`,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 133,
      title: `Горячая кукуруза`,
      logoSrc: ``,
      synonyms: ['Горячая кукуруза', 'кукуруза'],
      description: `Вкуснейшая вареная кукуруза`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1279.5 331.5v28h-16v-28z`
    },
    {
      id: 134,
      title: `Крутецкие игрушки`,
      logoSrc: ``,
      synonyms: ['крутецкие игрушки', 'игрушки', 'автоматы игрушек', 'автомат по продаже игрушек', 'детские игрушки', 'тачки', 'лизун', 'фиксики', 'вспыш', 'барбоскины', 'крутецкие', 'игрушки', 'rhentwrfz', 'свинка пеппи', 'щенячий патруль', 'миньоны', 'робокоп', 'поли'],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Детские товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1279.5 365.5v28h-16v-28z`
    },
    {
      id: 135,
      title: `CASIO`,
      logoSrc: ``,
      synonyms: ['casio', 'касио'],
      description: `Часы`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Часы`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1147.5 354.5v28h-16v-28z`
    },
    {
      id: 136,
      title: `Sweet Point`,
      logoSrc: ``,
      synonyms: [],
      description: `Кофейня для тебя и твоих друзей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1223 288h-28v-16h28z`
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
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M493 288h-28v-16h28z`
    },
    {
      id: 138,
      title: `Vape Hill`,
      logoSrc: ``,
      synonyms: ['Электронные сигареты', 'Электронные испарители', 'Vape Hill', 'Вэйп Хилл'],
      description: `Электронные испарители`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M227 414v-28h16v28z`
    },
    {
      id: 139,
      title: `Батарейка 32`,
      logoSrc: ``,
      synonyms: ['Батарейка 32', 'Батарейка', '<fnfhtqrf', 'зарядное устройство', 'элементы питания', 'электроника'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Товары для дома`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M184 1v28h-16V1z`
    },
    {
      id: 140,
      title: `Постомат`,
      logoSrc: ``,
      synonyms: ['Постомат', 'Получения посылок', 'Посылки'],
      description: `Терминал получения посылок`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M133.5 45h-28V29h28z`
    },
    {
      id: 141,
      title: `Легкий шаг`,
      logoSrc: `easystep.svg`,
      synonyms: ['Легкий шаг', 'обувь', 'мужская обувь', 'женская обувь', 'туфли', 'сапоги', 'полусапожки', 'ботинки'],
      description: `Магазин женской и мужской обуви`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 370v-23h-63v35h63v-12z`
    },
    {
      id: 142,
      title: `Respect`,
      logoSrc: `respect.svg`,
      synonyms: ['respect', 'респект', 'женская обувь', 'мужская обувь', 'обувь', 'ботильоны', 'ботинки', 'туфли', 'сапоги', 'босоножки'],
      description: `Стильная обувь по демократичным ценам`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1210.7 418h7.3v-36h-63v36h55.7z`
    },
    {
      id: 143,
      title: `Мегафон`,
      logoSrc: `megafon.svg`,
      synonyms: ['мегафон', 'megafon'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1155 418v8.4l17.4 18.6h16.6v-27h-34z`
    },
    {
      id: 144,
      title: `Paolo Conte`,
      logoSrc: `paolo-conte.svg`,
      synonyms: ['paolo conte', 'паоло конте', 'обувь', 'мужская обувь', 'женская обувь', 'дизайнерская обувь', 'кожаная обувь', 'кожгалантерея', 'туфли', 'сапоги', 'ботинки'],
      description: `Модная обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 322h-63v25h63v-25z`
    },
    {
      id: 145,
      title: `Rieker`,
      logoSrc: `rieker.svg`,
      synonyms: ['Rieker', 'Рикер', 'ортопедическая обувь', 'обувь', 'женская обувь', 'мужская обувь', 'туфли', 'ботинки', 'сапоги'],
      description: `Удобная обувь антистресс`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1193 296h-20l-18 18v8h38v-26z`
    },
    {
      id: 146,
      title: `TELE2`,
      logoSrc: `tele2.svg`,
      synonyms: ['tele2', 'теле2'],
      description: `Оператор сотовой связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1189 418h22v27h-22z`
    },
    {
      id: 147,
      title: `Классика вкуса`,
      logoSrc: `klassika-vkusa.svg`,
      synonyms: ['Классика вкуса', 'чай', 'кофе'],
      description: `Чай, кофе`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 296v26h24v-14l-12.1-12H1218z`
    },
    {
      id: 148,
      title: `mybox`,
      logoSrc: `mybox.svg`,
      synonyms: ['mybox', 'Суши', 'Японская', 'майбокс', 'май бокс'],
      description: `Японская кухня, суши`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 322h24v25h-24z`
    },
    {
      id: 149,
      title: `Мур-Мур`,
      logoSrc: `mur-mur.svg`,
      synonyms: ['мурмур', 'мур', 'мр'],
      description: `Товары для животных`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Зоотовары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 347h24v23h-24z`
    },
    {
      id: 150,
      title: `Табак`,
      logoSrc: `tabak.svg`,
      synonyms: ['сигареты', 'сигары', 'курить', 'табак'],
      description: `Специализированный магазин табачной продукции`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Подарки и сувениры`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 390h24v14h-24z`
    },
    {
      id: 151,
      title: `Ottimo`,
      logoSrc: `ottimo.svg`,
      synonyms: ['Ottimo', 'отимо', 'оттимо', 'Сумки', 'очки', 'часы', 'аксессуары', 'кожгалантерея'],
      description: `Сумки, очки, часы, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Часы`],
        categoryFilter[`Кожгалантерея`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1229 445h1.4l11.6-11.9V418h-13v27z`
    },
    {
      id: 152,
      title: `Пекарня «Альпен»`,
      logoSrc: `alpen.svg`,
      synonyms: ['альпэн', 'алпен', 'алпэн', 'альпен', 'пекарня', 'торты', 'свежая выпечка', 'пирожки', 'хлеб'],
      description: `Огромный выбор свежей выпечки`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 382v8h24v-20h-24v12z`
    },
    {
      id: 153,
      title: `Ортопед и Я`,
      logoSrc: `ortoped.svg`,
      synonyms: ['ортопед и я', 'ортопедия', 'ортопедические изделия'],
      description: `Ортопедический салон`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Товары для дома`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218 418h24v-14h-24v14z`
    },
    {
      id: 154,
      title: `Креатив`,
      logoSrc: `kreativ.svg`,
      synonyms: ['креатив', 'профессиональная косметика', 'товары для парикмахеров', 'уход за волосами', 'уход за ногтями', 'маникюрные наборы', 'лак', 'парфюм', 'шампуни', 'косметика для волос'],
      description: `Профессиональная косметика, товары для парикмахеров`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1218.4 418h-7.4v27h18v-27h-10.6z`
    },
    {
      id: 155,
      title: `Weekend MaxMara`,
      logoSrc: `maxmara.svg`,
      synonyms: ['максмара', 'vfrc vfhf', 'макс мара', 'викенд', 'векенд', 'weekend maxmara', 'пальто', 'трикотаж', 'рубашки', 'джинсы', 'одежда для женщин', 'сумки', 'обувь', 'очки', 'платки'],
      description: `Женская одежда в стиле casual`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M943 479h36v54h-36z`
    },
    {
      id: 156,
      title: `Кристалл`,
      logoSrc: `kristall.svg`,
      synonyms: ['кристалл'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 490.2V533h38v-54l-38 11.2z`
    },
    {
      id: 157,
      title: `The iStore`,
      logoSrc: `the-istore.svg`,
      synonyms: ['The iStore', 'iStore', 'айстор', 'истор', 'айсторе', 'телефоны', 'Apple', 'планшеты'],
      description: `Официальный представитель Аpple в России`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M909.1 479h-.1v54h34v-54h-33.9z`
    },
    {
      id: 158,
      title: `Tezenis`,
      logoSrc: `tezenis.svg`,
      synonyms: ['tezenis', 'тезенис', 'еуяутшы', 'белье', 'женское белье', 'мужское белье', 'детское белье', 'купальники', 'колготки', 'платки', 'домашние костюмы'],
      description: `Женское и мужское белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 479v25h-35v29h71v-36.8l-16.8-17.2H1088z`
    },
    {
      id: 159,
      title: `Marella`,
      logoSrc: `marella.svg`,
      synonyms: ['марелла', 'марела', 'марэлла', 'марэла', 'женская одежда', 'одежда', 'классическая одежда', 'сумки', 'женская обувь', 'головные уборы'],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`],
        categoryFilter[`Головные уборы`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M979 479h38v54h-38z`
    },
    {
      id: 160,
      title: `CHESTER`,
      logoSrc: `chester.svg`,
      synonyms: ['chester', 'честер', 'обувь', 'сруыеук', 'мужская обувь', 'женская обувь', 'ботинки', 'туфли', 'сапоги', 'кожгалантерея'],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1053 479h-36v54h36v-54z`
    },
    {
      id: 161,
      title: `BRIOCHE`,
      logoSrc: `brioche.svg`,
      synonyms: ['brioche','бриош', 'брошь', 'бриохе'],
      description: `Кондитерская, винотека`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1053 479h35v25h-35z`
    },
    {
      id: 162,
      title: `Intimissimi`,
      logoSrc: `intimissimi.svg`,
      synonyms: ['intimissimi', 'интимисими', 'интимиссими', 'белье', 'женское белье', 'мужское белье', 'купальники', 'бикини'],
      description: `Нижнее белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M837 231v-52h-37v85h3.4a54.9 54.9 0 0 1 33.6-33z`
    },
    {
      id: 163,
      title: `Модная Цирюльня`,
      logoSrc: `modnaya-ciryulnya.svg`,
      synonyms: ['модная цирюльня'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M800 1h37v81h-37z`
    },
    {
      id: 164,
      title: `Джинсомания`,
      logoSrc: `dzhinsomaniya.svg`,
      synonyms: ['джинсомания', 'джинсы', 'куртки', 'плащи', 'ремни', 'перчатки', 'шарфики', 'шарфы', 'свитер', 'брюки', 'свитера', 'джемперы', 'жакет', 'джемпер', 'верхняя одежда', 'сумки'],
      description: `Джинсовая и повседневная одежда для всей семьи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M800 82h37v97h-37z`
    },
    {
      id: 165,
      title: `Снежная Королева`,
      logoSrc: `snowqueen.svg`,
      synonyms: ['снежка', 'cyt;yfz rjhjktdf', 'снежная королева', 'верхняя одежда', 'мужская одежда', 'женская одежда', 'одежда из кожи', 'одежда из меха', 'головные уборы', 'шапки', 'шубы и меха', 'пальто', 'джинсы', 'куртки', 'шубы'],
      description: `Верхняя одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M476 1v211h59v52h69V1H476z`
    },
    {
      id: 166,
      title: `Кораблик`,
      logoSrc: `korablik.svg`,
      synonyms: ['Кораблик', 'караблик', 'кораблик', 'детские товары', 'игрушки', 'детское питание', 'детская одежда', 'rjhf,kbr'],
      description: `Детские товары и игрушки`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Детские товары`]
      ]),
      'for-who': new Set([forWhoFilter[`Товары для детей`]]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M312 75h49V1H215v115h97V75z`
    },
    {
      id: 167,
      title: `Zara`,
      logoSrc: `zara.svg`,
      synonyms: ['зара', 'яфкф', 'zara', 'одежда', 'женская одежда', 'мужская одежда', 'детская одежда', 'куртки', 'сумки', 'платья', 'костюмы', 'обувь', 'парфюм', 'верхняя одежда'],
      description: `Одежда для современных людей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Головные уборы`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M800 82V1H604v263h196V82z`
    },
    {
      id: 168,
      title: `Reserved`,
      logoSrc: `reserved.svg`,
      synonyms: ['резервд', 'ресервд', 'резервед', 'ресерд', 'резевт', 'Reserved', 'Женская одежда', 'Мужская одежда', 'Детская одежда', 'Одежда', 'Брюки', 'Юбки', 'Платья', 'Блузы', 'Рубашки', 'Аксессуары', 'Украшения', 'Обувь'],
      description: `Женская, мужская и детская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Одежда`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M417 160h59V1H361v74h-49v41h-47v148h100V160h52z`
    },
    {
      id: 169,
      title: `Incanto`,
      logoSrc: `incanto.svg`,
      synonyms: ['incanto', 'инканто'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M906 157h-35v73.4l35-27.4v-46z`
    },
    {
      id: 170,
      title: `Grand Gudini`,
      logoSrc: `grand-gudini.svg`,
      synonyms: ['grand gudini', 'гранд гудини', 'обувь', 'мужская обувь', 'женская обувь', 'кожаная обувь', 'туфли', 'ботинки', 'сапоги'],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 87h35v70h-35z`
    },
    {
      id: 171,
      title: `Хранение меха`,
      logoSrc: `hranenie-mekha.svg`,
      synonyms: ['Хранение меха'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 47h59v35h-59z`
    },
    {
      id: 172,
      title: `TOM TAILOR`,
      logoSrc: `tom-tailor.svg`,
      synonyms: ['том тейлор', 'том', 'tom tailor', 'tailor'],
      description: `Женская и мужская одежда, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 1h35v86h-35z`
    },
    {
      id: 173,
      title: `Bershka`,
      logoSrc: `bershka.svg`,
      synonyms: ['бершка', 'bershka', 'трендовая одежда', 'одежда', 'одежда для женщин', 'одежда для мужчин', 'молодежная одежда', 'обувь', 'женская обувь', 'мужская обувь', 'аксессуары', 'сумки', 'кошельки', 'клатчи', 'верхняя одежда'],
      description: `Трендовая одежда, обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M980 1h-74v202l-35 27.4a54.9 54.9 0 0 1 35.6 33.6H980V1z`
    },
    {
      id: 174,
      title: `Ателье «MODnое»`,
      logoSrc: `atele-modnoe.svg`,
      synonyms: ['Ателье «MODnое»', 'ателье модное'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 126h59v44h-59z`
    },
    {
      id: 175,
      title: `Terranova`,
      logoSrc: `terranova.svg`,
      synonyms: ['terranova', 'терранова', 'теранова', 'одежда', 'детская одежда', 'джинсы', 'молодежная одежда', 'обувь', 'носки', 'шапки', 'куртки', 'сумки', 'верхняя одежда'],
      description: `Итальянская стильная и доступная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 213V1h-104v263h75v-51h29z`
    },
    {
      id: 176,
      title: `Химчистка «Экочистка»`,
      logoSrc: `himchistka-ehkochistka.svg`,
      synonyms: ['Химчистка Экочистка'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 82h59v44h-59z`
    },
    {
      id: 177,
      title: `FiNN FLARE`,
      logoSrc: `finn-flare.svg`,
      synonyms: ['фин флер', 'финн флэр', 'фин флэр', 'финфлер', 'финфлэр', 'finn flare', 'женская одежда', 'мужская одежда', 'детская одежда', 'верхняя одежда', 'куртки', 'джинсы', 'джемперы', 'белье', 'шапки', 'перчатки', 'шарфы'],
      description: `Женская и мужская одежда, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {
        text: ``,
        url: ``
      },
      button: {text: ``, action: ``},
      path: `M980 380h71v-84h-71v84z`
    },
    {
      id: 178,
      title: `Betty Barclay`,
      logoSrc: `betty-barclay.svg`,
      synonyms: ['betty barclay', 'бетти барклай', 'барклау', 'бети', 'борклай', 'бэтти', 'бэти', 'бэтси', 'одежда', 'женская одежда', 'одежда из германии', 'сумки', 'ремни', 'очки', 'верхняя одежда', 'шапки'],
      description: `Элегантная женская одежда из Германии`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Головные уборы`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M980 411h37v34h-37z`
    },
    {
      id: 179,
      title: `Грация`,
      logoSrc: `graciya.svg`,
      synonyms: ['грация', 'чулки', 'носки', 'колготки', 'белье', 'пижамы'],
      description: `Чулочно-носочная продукция, белье, одежда для сна`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 348h36v32h-36z`
    },
    {
      id: 180,
      title: `ARMANI EXCHANGE`,
      logoSrc: `armaniexchange.svg`,
      synonyms: ['armani', 'armani exchange', 'армани', 'арма', 'fhvfyb', 'молодежная', 'дизайнерская одежда'],
      description: `Молодежная дизайнерская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 380h-37v65h37v-65z`
    },
    {
      id: 181,
      title: `Best Of Brands`,
      logoSrc: `bestofbrands.svg`,
      synonyms: ['best of brands', 'best', 'brand'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M980 380v31h37v34h34v-65h-71z`
    },
    {
      id: 182,
      title: `LADY COLLECTION`,
      logoSrc: `ladycollection.svg`,
      synonyms: ['lady collection', 'леди коллекшн', 'леди колекшн', 'дфвн сщддусешщт', 'lady', 'бижутерия', 'кольца', 'серьги', 'аксессуары', 'украшения'],
      description: `Модная бижутерия и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Подарки и сувениры`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 296h20v31h-20z`
    },
    {
      id: 183,
      title: `BAON`,
      logoSrc: `baon.svg`,
      synonyms: ['баон', 'baon', 'женская одежда', 'мужская одежда', 'куртки', 'пуховики', 'шапки', 'шарфы', 'носки', 'детская одежда', 'горнолыжные костюмы', 'обувь', 'купальники', 'белье'],
      description: `Одежда и аксессуары в стиле Casual`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Спортивные товары`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 380v-84h-37v84h37z`
    },
    {
      id: 184,
      title: `Брянские кабельные сети`,
      logoSrc: `domru-bks.svg`,
      synonyms: ['дом.ru','dom.ru', 'bks', 'бкс'],
      description: `Салон услуг связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Провайдер интернета`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1124 327v-18.8l-11.8-12.2h-4.2v31h16z`
    },
    {
      id: 185,
      title: `Atlantic`,
      logoSrc: `atlantic.svg`,
      synonyms: ['atlantic', 'атлантик', 'atlantik', 'нижнее белье', 'мужское белье', 'женское белье', 'купальники'],
      description: `Нижнее бельё`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 327v21h36v-21h-36z`
    },
    {
      id: 186,
      title: `Milan man`,
      logoSrc: `milan-man.svg`,
      synonyms: ['milan man', 'милан мен'],
      description: `Бутик мужской одежды`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 380h36v30h-36z`
    },
    {
      id: 187,
      title: `Московский ювелирный завод De Luxe`,
      logoSrc: `miuz.svg`,
      synonyms: ['московский ювелирный завод de luxe', 'мюз', 'делюкс', 'ювелирка', 'ювелир'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set([]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 348h27v23h-27z`
    },
    {
      id: 188,
      title: `PANDORA`,
      logoSrc: `pandora.svg`,
      synonyms: ['pandora', 'пандора', 'украшения', 'серьги', 'кольца', 'шармы', 'аксессуары', 'браслеты'],
      description: `Ювелирные украшения`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирные украшения`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M898 317.7a55.3 55.3 0 0 1-27 18.4V348h27z`
    },
    {
      id: 189,
      title: `Yves Rocher`,
      logoSrc: `yves-rocher.svg`,
      synonyms: ['ивроше', 'ив роше', 'yves rocher', 'косметика', 'парфюмерия', 'парфюм', 'духи', 'помада', 'тушь', 'тени', 'мужская косметика'],
      description: `Французская растительная косметика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 371h27v21h-27z`
    },
    {
      id: 190,
      title: `Ювелир`,
      logoSrc: `yuvelir.svg`,
      synonyms: ['ювелир'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M935 411h45v34h-45z`
    },
    {
      id: 191,
      title: `Оптика Eye Fresh`,
      logoSrc: `eye-fresh.svg`,
      synonyms: ['оптика eye fresh', 'оптика', 'айфреш'],
      description: `Оптика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Оптика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M905 411h30v34h-30z`
    },
    {
      id: 192,
      title: `L'Occitane`,
      logoSrc: `loccitane.svg`,
      synonyms: ['l occitane', 'локситэн', 'локситен', 'локситан', 'лоситан', 'лосситен', 'лоситэн', 'лосси', 'локси', 'французская косметика', 'натуральная косметика', 'loccitan', 'locci', 'парфюмерия', 'духи', 'гели', 'пена для ванны', 'тушь', 'помада', 'лак'],
      description: `Французская косметика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M898 411h-27v17l34 17v-34h-7z`
    },
    {
      id: 193,
      title: `Librederm`,
      logoSrc: `librederm.svg`,
      synonyms: ['librederm', 'либредерм', 'либрадерм', 'либридэри', 'дерм', 'либр', 'либри', 'либро', 'kb,hblthv', 'косметика', 'либдерем'],
      description: `Косметика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M871 392h27v19h-27z`
    },
    {
      id: 194,
      title: `Mango`,
      logoSrc: `mango.svg`,
      synonyms: ['mango', 'манго', 'одежда', 'женская одежда', 'мужская одежда', 'детская одежда', 'белье', 'обувь', 'ремни', 'сумки', 'очки', 'шарфы', 'куртки', 'пальто', 'спортивная одежда'],
      description: `Женская одежда для жительниц города`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M898 347.1V411h82v-69h-27v-46h-44.5a54.4 54.4 0 0 1-10.5 21.1z`
    },
    {
      id: 195,
      title: `Organic Shop`,
      logoSrc: `organic-shop.svg`,
      synonyms: ['organic shop', 'органик', 'organic', 'натуральная косметика', 'органическая косметика'],
      description: `Органическая и натуральная косметика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M953 296h27v46h-27z`
    },
    {
      id: 196,
      title: `CALZEDONIA`,
      logoSrc: `calzedonia.svg`,
      synonyms: ['calzedonia', 'карлзедония', 'карлзедония', 'калзедония', 'кальцедония', 'калзедона', 'белье', 'одежда для пляжа', 'купальники', 'бикини', 'белье для мужчин', 'чулки', 'колготки'],
      description: `Колготки, чулки, купальники`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бельё`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1088 410v35h24l12-12v-23h-36z`
    },
    {
      id: 197,
      title: `Gloria Jeans`,
      logoSrc: `gloria-jeans.svg`,
      synonyms: ['глория джинс', 'глория', 'модная одежда', 'детская одежда', 'одежда', 'обувь', 'аксессуары', 'шапки', 'белье', 'перчатки', 'носки', 'женская одежда', 'мужская одежда', 'верхняя одежда'],
      description: `Модная одежда, обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Детские товары`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {
        text: `1 действующая акция`,
        url: ``
      },
      button: {text: ``, action: ``},
      path: `M980 1v218h87v45h32V1H980z`
    },
    {
      id: 198,
      title: `REVOLUTION`,
      logoSrc: `revolution.svg`,
      synonyms: ['make up', 'make', 'revolution ', 'макияж ', 'мейк', 'революшион', 'революшн', 'революшен'],
      description: `Магазин профессиональной косметики Revolution`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M980 219h22v45h-22z`
    },
    {
      id: 199,
      title: `Турагентство «Sunmar»`,
      logoSrc: `sunmar.svg`,
      synonyms: ['Турагентство «Sunmar»'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Туристическое агентство`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 213h20v51h-20z`
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
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1223 213h20v51h-20z`
    },
    {
      id: 1101,
      title: `Milavitsa`,
      logoSrc: `milavitsa.svg`,
      synonyms: ['милавица', 'миловица', 'vbkfdbwf', 'milavitsa', 'milavitsa', 'белье', 'купальники', 'корректирующее белье', 'белье для сна', 'пижамы'],
      description: `Женское белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1174 213h29v51h-29z`
    },
    {
      id: 1102,
      title: `Линии Любви`,
      logoSrc: `linii-lyubvi.svg`,
      synonyms: ['линии любви'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1002 219h32v45h-32z`
    },
    {
      id: 1103,
      title: `Рив Гош`,
      logoSrc: `riv-gosh.svg`,
      synonyms: ['риф гош', 'riv gosh', 'косметика', 'парфюм', 'hbd uji', 'духи', 'тушь', 'помада', 'крем'],
      description: `Косметика и парфюмерия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M476 160h-59v104h59V160z`
    },
    {
      id: 1104,
      title: `Mohito`,
      logoSrc: `mohito.svg`,
      synonyms: ['vk[bnj', 'мохито', 'махито', 'Mohito', 'Одежда', 'женская одежда', 'молодежная одежда', 'офисная одежда', 'casual', 'платья', 'юбки', 'брюки'],
      description: `Женская одежда`,
      discount: new Set([]),
      category: new Set([categoryFilter[`Одежда`]]),
      'for-who': new Set([forWhoFilter[`Женская одежда`]]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M365 160h52v104h-52z`
    },
    {
      id: 1105,
      title: `s.Oliver`,
      logoSrc: `soliver.svg`,
      synonyms: ['оливер', 'jkbdth', 'oliwer', 'соливер', 'oliver', 's.oliver', 'одежда', 'повседневная одежда', 'мужская одежда', 'женская одежда', 'одежда для детей', 'сумки', 'ремни', 'шапки'],
      description: `Одежда для женщин и мужчин`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M476 212h59v52h-59z`
    },
    {
      id: 1106,
      title: `Шоколадница`,
      logoSrc: `shokoladnica.svg`,
      synonyms: ['шоколадница'],
      description: `Изысканное и уютное кафе`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M882.5 283a27.5 27.5 0 1 1-27.5-27.5 27.5 27.5 0 0 1 27.5 27.5z`
    },
    {
      id: 1107,
      title: `Van Cliff`,
      logoSrc: `vancliff.svg`,
      synonyms: ['ванклиф', 'ванклив', 'ванклифф', 'vancliff', 'мужская одежда', 'пальто', 'костюмы', 'пиджаки', 'брюки', 'классические костюмы', 'одежда для мальчика', 'верхняя одежда', 'одежда для детей'],
      description: `Мужская деловая одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M623 479v28h-39v26h73v-54h-34z`
    },
    {
      id: 1108,
      title: `Mascotte`,
      logoSrc: `mascotte.svg`,
      synonyms: ['обувь', 'аксессуары', 'mascotte', 'кожгалантерея', 'мужская обувь', 'женская обувь', 'туфли', 'ботинки', 'сапоги'],
      description: `Модная мужская и женская обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M692 479h38v54h-38z`
    },
    {
      id: 1109,
      title: `Хронограф`,
      logoSrc: `hronograf.svg`,
      synonyms: ['хронограф', 'hronograf'],
      description: `Салон часов`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Часы`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M623 479h-21l-18 17v11h39v-28z`
    },
    {
      id: 1110,
      title: `Carlo Pazolini`,
      logoSrc: `pazolini.svg`,
      synonyms: ['carlo pazolini', 'карло пазолини', 'обувь', 'сумки', 'кошельки', 'ремни'],
      description: `Женская и мужская обувь, аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M800 479h-33v54h33v-54z`
    },
    {
      id: 1111,
      title: `ECCO`,
      logoSrc: `ecco.svg`,
      synonyms: ['\'rrj', 'экко', 'екко', 'эко', 'ecco', 'фирменная обувь', 'обувь', 'мужская обувь', 'женская обувь', 'детская обувь', 'удобная обувь', 'сумки', 'аксессуары'],
      description: `Фирменная обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M657 479h35v54h-35z`
    },
    {
      id: 1112,
      title: `DOMANI`,
      logoSrc: `domani.svg`,
      synonyms: ['domani', 'домани', 'сумки', 'ремни', 'чемоданы', 'зонты', 'кошельки'],
      description: `Сеть салонов итальянских сумок и аксессуаров`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M730 479h37v54h-37z`
    },
    {
      id: 1113,
      title: `Билайн`, // Возле входа №2
      logoSrc: `beeline-alt.svg`,
      synonyms: ['билайн', 'beeline.ru', 'мобильная связь', 'мобильный интернет', 'мобильный оператор', 'оператор сотовой связи'],
      description: `Салон мобильной связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M819 507h-19v26h37v-41l-18-5.8V507z`
    },
    {
      id: 1114,
      title: `Билайн`, // Возле Ленты
      logoSrc: `beeline.svg`,
      synonyms: ['билайн', 'beeline.ru', 'мобильная связь', 'мобильный интернет', 'мобильный оператор', 'оператор сотовой связи'],
      description: `Салон мобильной связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1193 296h25v26h-25z`
    },
    {
      id: 1115,
      title: `МТС`, // Возле входа №2
      logoSrc: `mts.svg`,
      synonyms: ['МТС', 'mts'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M800 507h19v-20.8l-19-7.2v28z`
    },
    {
      id: 1116,
      title: `МТС`,
      logoSrc: `mts.svg`,
      synonyms: ['МТС', 'mts'],
      description: `Салон сотовой связи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Сотовая связь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1243 213h19v51h-19z`
    },
    {
      id: 1117,
      title: `Каприз Авеню`,
      logoSrc: `kapriz-avenyu.svg`,
      synonyms: ['Каприз Авеню', 'каприз', 'авеню', 'белье', 'женское белье', 'мужское белье', 'купальники', 'трусы'],
      description: `Женское белье`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Белье`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M692 396h36v49h-36z`
    },
    {
      id: 1118,
      title: `Л'Этуаль (L’Etoile)`,
      logoSrc: `letu.svg`,
      synonyms: ['летуаль', 'лэтуаль', 'косметика', 'парфюмерия', 'средства ухода', 'letoile', 'make up', 'cosmetics', 'skin care', 'perfume', 'духи', 'тушь'],
      description: `Супермаркет парфюмерно-косметической продукции`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M728 396v49h76l33-16v-33H728z`
    },
    {
      id: 1119,
      title: `ЭКОНИКА`,
      logoSrc: `ehkonika.svg`,
      synonyms: ['эконика', 'иконика', 'эконека', 'женская обувь', 'обувь', 'туфли', 'сапоги', 'босоножки', 'кожгалантерея'],
      description: `Модная обувная сеть`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M621 396v49h35v-49h-35z`
    },
    {
      id: 1120,
      title: `Samsung`,
      logoSrc: `samsung.svg`,
      synonyms: ['samsung', 'самсунг', 'бытовая техника', 'цифровая техника', 'телефон', 'смартфон'],
      description: `Техника`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M804 372h33v24h-33z`
    },
    {
      id: 1121,
      title: `Шапэль`,
      logoSrc: `shapehl.svg`,
      synonyms: ['шапки', 'шапэль', 'шапель', 'головные уборы'],
      description: `Головные уборы`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Головные уборы`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M603 413h18v32h-18z`
    },
    {
      id: 1122,
      title: `Оликон`,
      logoSrc: `olikon.svg`,
      synonyms: ['Оликон', 'Аликон', 'Олекон', 'Алекон', 'Jkbrjy', 'Золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M804 303.6V372h33v-37a55 55 0 0 1-33-31.4z`
    },
    {
      id: 1123,
      title: `Оликон`, // Островок
      logoSrc: ``,
      synonyms: ['Оликон', 'Аликон', 'Олекон', 'Алекон', 'Jkbrjy', 'Золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1131.5 404.5h16v28h-16z`
    },
    {
      id: 1124,
      title: ` 2scoop`,
      logoSrc: `2scoop.svg`,
      synonyms: ['2scoop', 'спорт', 'спортпит'],
      description: `Спортивное питание`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Спортивные товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M584 413v21l11 11h8v-32h-19z`
    },
    {
      id: 1125,
      title: `Pull & Bear`,
      logoSrc: `pullandbear.svg`,
      synonyms: ['пул', 'пул энд бир', 'пул енд бир', 'pull', 'pul', 'пул енд бер', 'pull&bear', 'одежда', 'мужская одежда', 'женская одежда', 'обувь', 'верхняя одежда', 'куртки', 'плащи', 'пальто', 'джинсы', 'платья', 'сумки', 'шапки', 'шарфы'],
      description: `Одежда для энергичных, творческих и амбициозных молодых людей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M621 396h107V296H621v100z`
    },
    {
      id: 1126,
      title: `Stradivarius`,
      logoSrc: `stradivarius.svg`,
      synonyms: ['страдивариус', 'страдевариус', 'страдивар', 'страдевар', 'strad', 'stradivarius', 'женская одежда', 'куртки', 'платья', 'джинсы', 'джемперы', 'обувь', 'сумки', 'шапки'],
      description: `Женская молодежная одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Головные уборы`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M804 396v-92.4a51.5 51.5 0 0 1-2.4-7.6H728v100z`
    },
    {
      id: 1127,
      title: `Русское золото`,
      logoSrc: `ruszol.svg`,
      synonyms: ['русское золото'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M656 396h36v49h-36z`
    },
    {
      id: 1128,
      title: `Lexmer`,
      logoSrc: `lexmer.svg`,
      synonyms: ['костюмы', 'сорочки', 'брюки', 'пальто', 'пиджаки', 'верхняя одежда ', 'одежда для мужчин', 'школьная форма'],
      description: `Мужская классическая одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M621 413v-40h-37v40h37z`
    },
    {
      id: 1129,
      title: `LIME`,
      logoSrc: `lime.svg`,
      synonyms: ['Lime', 'LIME', 'лайм', 'lime', 'лиме', 'laime', 'ла', 'модная одежда', 'аксессуары'],
      description: `Женская одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M597 296l-13 13v29h15v35h22v-77h-24z`
    },
    {
      id: 1130,
      title: `KEDMA`,
      logoSrc: `kedma.svg`,
      synonyms: ['KEDMA', 'Кедма', 'кедма', 'женская одежда', 'одежда', 'rtlvf'],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M290 377v-6h-39v27h39v-21z`
    },
    {
      id: 1131,
      title: `Te amo`,
      logoSrc: `te-amo.svg`,
      synonyms: ['Te amo', 'Тэ амо', 'Тэ ама', 'Тэ альмо', 'N" fvj', 'Женская одежда', 'Одежда', 'Молодежная одежда', 'Брюки', 'Платья', 'Юбки'],
      description: `Женская молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([forWhoFilter['Женская одежда']]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M251 398v25l14 25h25v-50h-39z`
    },
    {
      id: 1132,
      title: `De oro plata`,
      logoSrc: `de-oro-plata.svg`,
      synonyms: ['de oro plata','ювелирка', 'деороплата', 'де оро плата', 'дейоро плата', 'дейороплата', 'де ора плата'],
      description: `Ювелирный салон`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M265 325h25v24h-25z`
    },
    {
      id: 1133,
      title: `Crocs`,
      logoSrc: `crocs.svg`,
      synonyms: ['Crocs', 'крокс', 'кроксы', 'женская обувь', 'мужская обувь', 'детская обувь', 'резиновая обувь', 'обувь для пляжа'],
      description: `Удобная обувь для взрослых и детей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([forWhoFilter[`Товары для детей`]]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M265 349h25v22h-25z`
    },
    {
      id: 1134,
      title: `SELA`,
      logoSrc: `sela.svg`,
      synonyms: ['SELA', 'Cela', 'СЭЛА', 'Села ', 'одежда', 'женская одежда', 'мужская одежда', 'брюки', 'платья', 'кофты', 'футболки', 'юбки', 'рубашки', 'джемперы', 'детская одежда'],
      description: `Одежда для всей семьи`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M352 377h-62v71h62v-71z`
    },
    {
      id: 1135,
      title: `HOUSE`,
      logoSrc: `house.svg`,
      synonyms: ['хаус', 'хауз', '[fec', '[fep', 'House', 'Одежда', 'молодежная одежда', 'женская одежда', 'мужская одежда', 'украшения', 'аксессуары', 'ремни', 'шапки', 'толстовки', 'куртки', 'джинсы', 'брюки', 'юбки', 'футболки', 'casual'],
      description: `Молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M352 397h47V296h-47v101z`
    },
    {
      id: 1136,
      title: `CROPP`,
      logoSrc: `cropp.svg`,
      synonyms: ['кроп', 'кропп', 'кроб', 'rhjgg', 'Cropp', 'Casual', 'Молодежная одежда', 'Джинсы', 'Платья', 'Мужская одежда', 'Женская одежда', 'Повседневная одежда', 'Одежда', 'Обувь', 'Аксессуары', 'Стильная одежда'],
      description: `Молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M426 397h51V296h-78v101h27z`
    },
    {
      id: 1137,
      title: `Sinsay`,
      logoSrc: `sinsay.svg`,
      synonyms: ['синсай', 'сансей', 'сенсей', 'синсэй', 'сенсэй', 'cbyctq', 'ctyctq', 'cbycq', 'cfyctq', 'сансей', 'синсей', 'sinsay', 'Одежда', 'Женская одежда', 'Платья', 'Юбки', 'Брюки', 'Молодежная одежда'],
      description: `Одежда для стильных девушек`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M290 349v28h62v-81h-62v53z`
    },
    {
      id: 1138,
      title: `MIXIT`,
      logoSrc: `mixit.svg`,
      synonyms: ['mixit', 'миксит', 'mix', 'ьшчше'],
      description: `Лаборатория натуральной косметики`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M265 296h25v29h-25z`
    },
    {
      id: 1139,
      title: `COLIN'S`,
      logoSrc: `colins.svg`,
      synonyms: ['колинз', 'colin\'s', 'colins', 'джинсы', 'женская одежда', 'мужская одежда', 'одежда', 'куртки', 'аксессуары', 'обувь'],
      description: `Модные коллекции одежды и джинсов на каждый день`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M477 296v48h29v26h41v-61l-13-13h-57z`
    },
    {
      id: 1140,
      title: `Nelva`,
      logoSrc: `nelva.svg`,
      synonyms: ['нелва', 'nelva', 'женская одежда', 'одежда из беларуси', 'классический стиль', 'деловой костюм', 'повседневная одежда'],
      description: `Женская одежда из Белоруссии`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M477 420v28h57l13-13v-15h-70z`
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
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M399 397h27v51h-27z`
    },
    {
      id: 1142,
      title: `Mario Muzi`,
      logoSrc: `mario-muzi.svg`,
      synonyms: ['марио музи', 'мьюзи', 'MARIO MUZI', 'Времена Года', 'мужская обувь', 'женская обувь', 'туфли', 'ботинки', 'сапоги'],
      description: `Обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M477 397h-51v51h51v-51z`
    },
    {
      id: 1143,
      title: `KEDDO`,
      logoSrc: `keddo.svg`,
      synonyms: ['KEDDO', 'KEDO', 'Кеды', 'кедо', 'Обувь', 'мужская обувь', 'женская обувь', 'детская обувь'],
      description: `Обувь для мужчин, женщин и детей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M352 397h47v51h-47z`
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
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M506 396h41v24h-41z`
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
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1203 170v43h59v-43h-59z`
    },
    {
      id: 1146,
      title: `Ювелирное ателье`,
      logoSrc: `yuvelirnoe-atele.svg`,
      synonyms: ['ювелирное ателье'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Ювелирная продукция`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M448 479h31v28h-31z`
    },
    {
      id: 1147,
      title: `Royal Spirit`,
      logoSrc: `royal-spirit.svg`,
      synonyms: ['Royal Spirit', 'Роял Спирит', 'Мужская одежда', 'Классическая одежда', 'Верхняя одежда', 'Пальто', 'Куртки', 'Костюмы', 'Брюки', 'Casual'],
      description: `Мужская одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M364 479h35v54h-35z`
    },
    {
      id: 1148,
      title: `Самоваръ`,
      logoSrc: `samovar.svg`,
      synonyms: ['Самоваръ', 'самовар', 'чай', 'элитные сорта чая'],
      description: `Сеть чайных бутиков`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M290 479h36v54h-36z`
    },
    {
      id: 1149,
      title: `MIO`,
      logoSrc: `mio.svg`,
      synonyms: ['мио', 'mio', 'обувь', 'женская обувь', 'мужская обувь', 'туфли', 'ботинки'],
      description: `Обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M265 479l-14 14v40h39v-54h-25z`
    },
    {
      id: 1150,
      title: `Шаг за шагом`,
      logoSrc: `shag-za-shagom.svg`,
      synonyms: ['Шаг за шагом', 'обувь', 'мужская обувь', 'женская обувь', 'туфли', 'сапоги', 'ботинки'],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M326 479h38v54h-38z`
    },
    {
      id: 1151,
      title: `Milan`,
      logoSrc: `milan.svg`,
      synonyms: ['vbkfy', 'милан', 'мелан'],
      description: `Бутик итальянской одежды`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M533 479h-23v54h37v-40l-14-14z`
    },
    {
      id: 1152,
      title: `Monro`,
      logoSrc: `monro.svg`,
      synonyms: ['MONPO', 'MONRO', 'Монро', 'Обувь', 'Женская обувь', 'Детская обувь', 'Мужская обувь', 'кошельки', 'сумки', 'ботинки', 'туфли'],
      description: `Женская, мужская обувь, детская обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`]
      ]),
      'for-who': new Set([
        forWhoFilter[`Товары для детей`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M448 479h-49v54h49v-54z`
    },
    {
      id: 1153,
      title: `De Marse`,
      logoSrc: `de-marse.svg`,
      synonyms: ['Де Марсе', 'Де Марсэ', 'De Marse', 'L Vfhct', 'Марсэ', 'Марсе', 'пальто', 'женская одежда', 'верхняя одежда', 'пальто премиум-класса'],
      description: `Пальто премиум-класса`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
      ]),
      'for-who': new Set([
        forWhoFilter[`Женская одежда`]
      ]),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M479 479v54h31v-54h-31z`
    },
    {
      id: 1154,
      title: ``,
      logoSrc: ``,
      synonyms: [],
      description: ``,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1 373v160h61.5c41.8 41.4 104.3 51.7 156.5 0V373z`
    },
    {
      id: 1155,
      title: `Kari`,
      logoSrc: `kari.svg`,
      synonyms: ['кари', 'rfhb', 'обувь', 'женская обувь', 'мужская обувь', 'детская обувь', 'шапки', 'шарфы', 'перчатки'],
      description: `Обувной магазин`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`],
        categoryFilter[`Детские товары`]
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1 70v130h91v-26h76V70H1z`
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
      'for-who': new Set([
        forWhoFilter[`Мужская одежда`],
        forWhoFilter[`Женская одежда`],
        forWhoFilter[`Товары для детей`]
      ]),
      path: `M92 200H1v173h167V174H92v26z`
    },
    {
      id: 1157,
      title: `ТРК Клиник`,
      logoSrc: `trk-clinic.svg`,
      synonyms: ['трк клиник', 'клиника'],
      description: `Медицинская клиника`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M95 54h73v16H95z`
    },
    {
      id: 1158,
      title: `Terrasa`,
      logoSrc: `terrasa.svg`,
      synonyms: ['terrasa', 'тераса', 'терраса'],
      description: `кафе`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M248 201h-52v-65h52z`
    },
    {
      id: 1159,
      title: `Дело вкуса`,
      logoSrc: ``,
      synonyms: ['дело вкуса', 'колбасы', 'копчености'],
      description: `Колбасы и копчености`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1160,
      title: `Раниталь`,
      logoSrc: ``,
      synonyms: ['раниталь'],
      description: `Частная сыроварня`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1161,
      title: `Gelateria PLOMBIR`,
      logoSrc: ``,
      synonyms: ['gelateria plombir', 'гелатериа', 'пломбир', 'пламбир', 'plombir'],
      description: `Мороженое`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1162,
      title: `IQOS`,
      logoSrc: ``,
      synonyms: ['iqos', 'айкос'],
      description: `Электронные устройства`,
      discount: new Set(),
      category: new Set(),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1163,
      title: `О'Эскимо`,
      logoSrc: ``,
      synonyms: ['оэскимо', 'о эскимо', 'эскимо'],
      description: `Мороженое`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Продукты питания`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1164,
      title: `NailBar`,
      logoSrc: ``,
      synonyms: ['nail bar'],
      description: `Маникюр`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Парфюмерия и косметика`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: ``
    },
    {
      id: 1165,
      title: `OMEGA`,
      logoSrc: `omega.svg`,
      synonyms: ['omega', 'омега', 'амега', 'amega', 'часовой салон', 'салон часов', 'часы'],
      description: `Салон часов`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Часы`],
        categoryFilter[`Аксессуары`],
      ]),
      'for-who': new Set(),
      link: {text: ``, url: ``},
      button: {text: ``, action: ``},
      path: `M1223 213h20v51h-20z`
    },
  ],
  helpMarkers: [
    {
      symbolId: `foodcourt`,
      points: [
        {
          title: `Фудкорт`,
          position: [145.5, 300]
        }
      ]
    },
    {
      symbolId: `parking`,
      points: [
        {
          title: `Парковка`,
          position: [187.5, 300]
        }
      ]
    },
    {
      symbolId: `elevator`,
      points: [
        {
          title: `Лифт`,
          position: [229.5, 300]
        }
      ]
    },
    {
      symbolId: `escalator`,
      points: [
        {
          title: `Эскалатор`,
          position: [271.5, 300]
        }
      ]
    },
    {
      symbolId: `wardrobe`,
      points: [
        {
          title: `Гардероб`,
          position: [313.5, 300]
        }
      ]
    },
    {
      symbolId: `wc`,
      points: [
        {
          title: `Туалет`,
          position: [355.5, 300]
        }
      ]
    },
    {
      symbolId: `entrance-vertical`,
      points: [
        {
          title: `Вход`,
          position: [397.5, 300]
        }
      ]
    },
    {
      symbolId: `entrance-horizontal`,
      points: [
        {
          title: `Вход`,
          position: [439.5, 300]
        }
      ]
    },
    {
      symbolId: `entrance-diagonal`,
      points: [
        {
          title: `Вход`,
          position: [481.5, 300]
        }
      ]
    },
    {
      symbolId: `entrance-diagonal-back`,
      points: [
        {
          title: `Вход`,
          position: [523.5, 300]
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
          position: [607.5, 300]
        }
      ]
    },
    {
      symbolId: `fountain`,
      points: [
        {
          title: `Фонтан`,
          position: [831, 452]
        }
      ]
    },
    {
      symbolId: `info`,
      points: [
        {
          title: `Инфостойка`,
          position: [831, 402]
        }
      ]
    },
    {
      symbolId: `disabled`,
      points: [
        {
          title: `Туалет для ММГ`,
          position: [480, 398]
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
