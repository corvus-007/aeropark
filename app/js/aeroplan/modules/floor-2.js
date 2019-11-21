import { categoryFilter, audienceFilter, discountFilter } from './filter-options';

export default {
  settings: {
    dimensions: {
      width: 2600,
      height: 856
    },
    boundaryShape: `M2599 196H1566V1H1v591h510v61h94v22h120v-22h94v-61h188v31.2a125 125 0 0 0 65 231.8c35.2 0 121.5-37.5 121.5-37.5l752.3-.3a249.9 249.9 0 0 0 254.6-.1H2599z`
  },
  areas: [
    {
      id: 21,
      title: `Мама Чолли`,
      logoSrc: `mama-cholli.svg`,
      synonyms: ['чоли', 'vfvf xjkkb', 'vfvvf xjkkb'],
      description: `Итальянская пиццерия и кухня`,
      discount: new Set(),
      category: new Set([categoryFilter[`Итальянская кухня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2543 750.5h56v33h-56z`
    },
    {
      id: 22,
      title: `Макдоналдс`,
      logoSrc: `mcdonalds.svg`,
      synonyms: ['mcdonalds', 'макдональдс', 'макдоналдс'],
      description: `Ресторан быстрого питания`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`], categoryFilter[`Десерты`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2599 561h-56v106.5h56V561z`
    },
    {
      id: 23,
      title: `Asia Market`,
      logoSrc: `asia.svg`,
      synonyms: [
        'азия маркет',
        'азиа маркет',
        'асия',
        'азиямаркет',
        'fpbzvfhrtn',
        'fpbz vfhrtn'
      ],
      description: ``,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Японская кухня`],
        categoryFilter[`Восточная кухня`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2543 783.5h56V817h-56z`
    },
    {
      id: 24,
      title: `Хуторок`,
      logoSrc: `hutorok.svg`,
      synonyms: ['хуторок'],
      description: `Русская и украинская кухня`,
      discount: new Set(),
      category: new Set([categoryFilter[`Русская кухня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2543 703.5h56v47h-56z`
    },
    {
      id: 25,
      title: `Восточный дворик`,
      logoSrc: `vostochnyj-dvorik.svg`,
      synonyms: ['восточный дворик', 'восточная еда', 'восточная кухня'],
      description: `Восточная кухня`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2543 667.5h56v36h-56z`
    },
    {
      id: 26,
      title: `Burger King`,
      logoSrc: `burgerking.svg`,
      synonyms: ['бургенкинг', 'burgerking', 'burger king'],
      description: `Фирменные бургеры и фастфуд`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2395 561h44v60h-44z`
    },
    {
      id: 27,
      title: `Subway`,
      logoSrc: `subway.svg`,
      synonyms: ['subway', 'субвей', 'сабвей'],
      description: `Сэндвичи и салаты`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2439 561h30v60h-30z`
    },
    {
      id: 28,
      title: `Крошка-Картошка`,
      logoSrc: `kartoshka.svg`,
      synonyms: ['крошка-картошка'],
      description: `Российская сеть кафе быстрого питания`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Русская кухня`],
        categoryFilter[`Фастфуд`],
        categoryFilter[`Десерты`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2507 561h36v60h-36z`
    },
    {
      id: 29,
      title: `Дон Пиццерон`,
      logoSrc: `don.svg`,
      synonyms: ['пицца', 'дон пиццерон', 'пица', 'дон пицерон'],
      description: `Ресторан быстрого питания`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2469 561h38v60h-38z`
    },
    {
      id: 210,
      title: `Silver Spoon`,
      logoSrc: `silverspoon.svg`,
      synonyms: [
        'сильвер спун',
        'споон',
        'silver spoon',
        'детская одежда',
        'школьная одежда',
        'школьная форма'
      ],
      description: `Детская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1949.9 751.1h50.2v33.68h-50.2z`
    },
    {
      id: 211,
      title: `Eмае`,
      logoSrc: `emae.svg`,
      synonyms: [
        'ёмаё',
        'емае',
        'детская одежда',
        'дизайнерская одежда для детей',
        'одежда для детей'
      ],
      description: `Детская одежда для мальчиков и девочек`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1898.6 751.1h51.3v33.68h-51.3z`
    },
    {
      id: 212,
      title: `ЗВУК МАСТЕР`,
      logoSrc: `zvuk-master.svg`,
      synonyms: [
        'звук мастер',
        'звукмастер',
        'мастер звука',
        'микрофоны',
        'наушники',
        'батарейки',
        'аккумуляторы',
        'фонари',
        'карты памяти',
        'компьютерные принадлежности',
        'кабельная продукция',
        'зарядные устройства',
        'автомагнитолы',
        'видеорегистраторы',
        'радар-детекторы',
        'усилители',
        'аккустические системы',
        'охранные сигнализации',
        'парковочные системы'
      ],
      description: `Аудио - видео продукция`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2149 750.5l-34.3 34.3h34.3v-34.3z`
    },
    {
      id: 213,
      title: `Antilopa`,
      logoSrc: `antilopa.svg`,
      synonyms: ['antilopa', 'антилопа', 'детская обувь', 'обувь для детей'],
      description: `Детская обувь`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1849.1 751.1h49.5v33.68h-49.5z`
    },
    {
      id: 214,
      title: `АксТел`,
      logoSrc: `akstel.svg`,
      synonyms: [
        'акстел',
        'акс тел',
        'ремонт техники',
        'аксессуары для телефонов',
        'брелок',
        'брелоки брелки',
        'чехлы',
        'защитные пленки'
      ],
      description: `Ремонт техники, аксессуары для техники`,
      discount: new Set(),
      category: new Set([categoryFilter[`Аксессуары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2033.8 784.8l-33.7-33.7v33.7h33.7z`
    },
    {
      id: 215,
      title: `IDIZA`,
      logoSrc: `kriza.svg`,
      synonyms: ['криза', 'кризо', 'idiza', 'идиза'],
      description: `Изящные женские платья`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2149 750.5h51.4v34.32H2149z`
    },
    {
      id: 216,
      title: `di Marko`,
      logoSrc: `dimarko.svg`,
      synonyms: ['ди марко', 'димарко', 'димакро', 'di marko'],
      description: `Итальянский ресторан`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Итальянская кухня`],
        categoryFilter[`Японская кухня`],
        categoryFilter[`Американская кухня`],
        categoryFilter[`Десерты`],
        categoryFilter[`Русская кухня`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1799.9 784.8v32.5h145.9a249.9 249.9 0 0 0 254.6-.1v-32.3z`
    },
    {
      id: 217,
      title: `Lo`,
      logoSrc: `lo.svg`,
      synonyms: [
        'ло',
        'одежда',
        'блузки',
        'платья',
        'lo',
        'янанедзвецкая',
        'jananedzvetskaya',
        'shopmisslocom',
        'russiandesigner',
        'купитьодежду',
        'женскаяодежда',
        'fashion',
        'dress',
        'купитьженскуюодежду',
        'платье',
        'clothing',
        'женская одежда'
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
      path: `M2200.4 792.3h40.2v-41.8h-40.2v41.8z`
    },
    {
      id: 218,
      title: `1000 и 1 сумка`,
      logoSrc: `1000i1sumka.svg`,
      synonyms: [
        'сумки',
        '1001 сумка',
        'тысяча сумок',
        '1000 b 1 cevrf',
        'сумки',
        'портфели',
        'барсетки',
        'кейсы',
        'папки',
        'кожгалантерея'
      ],
      description: `Сумки и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2240.6 750.5v41.8h-40.2v24.8h84.1v-66.6h-43.9z`
    },
    {
      id: 219,
      title: `KFC`,
      logoSrc: `kfc.svg`,
      synonyms: ['кфс', 'kfc', 'киэфси', 'чикен', 'нагетсы'],
      description: `Ресторан быстрого питания`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2284.5 750.5v66.6h78.9v-66.6h-78.9z`
    },
    {
      id: 220,
      title: `Империя декора`,
      logoSrc: `imperiya-dekora.svg`,
      synonyms: ['империя декора'],
      description: `Декоративные материалы`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1193.5 670.7h32.6v85.77h-32.6z`
    },
    {
      id: 221,
      title: `Askona`,
      logoSrc: `askona.svg`,
      synonyms: ['аскона', 'оскона', 'fcrjyf'],
      description: `Товары для сна`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1226.1 670.7v85.7h-32.6v61.1H1300V670.7h-73.9z`
    },
    {
      id: 222,
      title: `PVS MEBEL`,
      logoSrc: `pvs-mebel.svg`,
      synonyms: ['pvs mebel'],
      description: `Фабрика мебели`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1147.2 756.4h46.3v-85.7h-12.8l-33.5 33.3v52.4z`
    },
    {
      id: 223,
      title: `Котофей`,
      logoSrc: `kotofey.svg`,
      synonyms: [
        'котофей',
        'кот',
        'обувь для детей',
        'обувь для подростков',
        'детская обувь',
        'удобная обувь'
      ],
      description: `Обувь для подростков и детей`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Детские товары`]
      ]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1618.7 751.1v66.2h64.2v-66.2h-64.2z`
    },
    {
      id: 224,
      title: `Орматек`,
      logoSrc: `ormatek.svg`,
      synonyms: ['орматек', 'ormatek'],
      description: `Товары для сна`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1444 751.1l-50.3-28.1v94.4h99.2v-66.3H1444z`
    },
    {
      id: 225,
      title: `Папа Карло`,
      logoSrc: `papa-karlo.svg`,
      synonyms: ['папа карло', 'кухня', 'papa karlo'],
      description: `Центр кухни`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1492.9 751.1v66.3h34.6v-66.3h-34.6z`
    },
    {
      id: 226,
      title: `Еврочехол`,
      logoSrc: `evrochehol.svg`,
      synonyms: ['tdhjxt[jk', 'евро чехол', 'еврочехол'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1118.6 756.4h28.6V704l-20.9 20.8c.1 1.5.2 3.1.2 4.7a49.4 49.4 0 0 1-7.9 26.9z`
    },
    {
      id: 227,
      title: `Profcosmo`,
      logoSrc: `profcosmo.svg`,
      synonyms: [
        'profcosmo',
        'профкосмо',
        'профессиональная косметика',
        'инструменты для парикмахеров',
        'инструменты для визажистов',
        'инструменты для мастеров маникюра',
        'средства для укладки',
        'косметика'
      ],
      description: `Профессиональная косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1092.6 641.9v40.3a38.8 38.8 0 0 1 5.6 2.3l22.2-23.7v-18.9h-27.8v40.3`
    },
    {
      id: 228,
      title: `ОБЪЕКТИВ`,
      logoSrc: `obektiv.svg`,
      synonyms: ['объектив', 'фотосалон'],
      description: `Фотосалон`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1527.5 751.1v66.3h31.4v-66.3h-31.4z`
    },
    {
      id: 229,
      title: `Acoola`,
      logoSrc: `acoola.svg`,
      synonyms: [
        'frekf',
        'акула',
        'акулла',
        'аколла',
        'акола',
        'acoola',
        'детская одежда',
        'одежда для детей',
        'школьная форма',
        'детские платья',
        'детские костюмы'
      ],
      description: `Модная одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1618.7 751.1h-59.8v66.3l59.8-.1v-66.2z`
    },
    {
      id: 230,
      title: `Timbers`,
      logoSrc: `timbers.svg`,
      synonyms: ['timbers', 'тимберс', 'таймберс', 'мебель из массива'],
      description: `Мебель из массива`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1300 817.5V670.7l43.4 24.2v122.5l-43.4.1z`
    },
    {
      id: 231,
      title: `Респект`,
      logoSrc: `respekt.svg`,
      synonyms: ['htcgtrn', 'респект', 'риспект'],
      description: `Мягкая мебель`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1343.42,817.45V694.93L1393.65,723v94.44ZM1300,624.57l53,29.75v-44.4h-53Zm77-14.65v57.87l54,30.32V609.92Z`
    },
    {
      id: 232,
      title: `SUNLIGHT`,
      logoSrc: `sunlight.svg`,
      synonyms: ['Санлайт', 'Sunlait', 'Sunlight', 'cfykfqn'],
      description: `Ювелирные изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Ювелирная продукция`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1076.5 679.5a48.2 48.2 0 0 1 16.1 2.7v-40.3H1007v45a80.9 80.9 0 0 0-8.3 18.2h34.2a49.7 49.7 0 0 1 43.6-25.6z`
    },
    {
      id: 233,
      title: `CHESTER RESTOBAR`,
      logoSrc: `chester-restobar.svg`,
      synonyms: ['честер', 'chester', 'chester restobar', 'честор'],
      description: `Ресторан`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1118.6 756.4a49.9 49.9 0 0 1-61.4 19.2l-11.7 11.7v17.6a81.6 81.6 0 0 0 59.1 1.1l10.3 40.6c37.2-11.1 78.6-29.1 78.6-29.1v-61.1z`
    },
    {
      id: 234,
      title: `FISSMAN`,
      logoSrc: `fissman.svg`,
      synonyms: [
        'фисмэн',
        'физмэн',
        'fissman',
        'fiszman',
        'fissmen',
        'abccv\'y'
      ],
      description: `Посуда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1026.5 729.5a49 49 0 0 1 6.4-24.4h-34.2a81.9 81.9 0 0 0-3.7 24.4 79.8 79.8 0 0 0 5.2 28.6h16.1l12.8-12.7a49.1 49.1 0 0 1-2.6-15.9z`
    },
    {
      id: 235,
      title: `TOY.RU`,
      logoSrc: `toyru.svg`,
      synonyms: [
        'toy.ru',
        'той',
        'игрушки',
        'ещн',
        'товары для детей',
        'детские товары'
      ],
      description: `Детские товары и игрушки`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1682.9 817.3h68v-66.2h-68v66.2z`
    },
    {
      id: 236,
      title: `Morojko`,
      logoSrc: `morojko.svg`,
      synonyms: [
        'морожко',
        'морозко',
        'vjhj;rj',
        'vjhjprj',
        'мороженное',
        'мороженое '
      ],
      description: `Morojko`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1140.4 641.9h-20v-26h20z`
    },
    {
      id: 237,
      title: `OBI`,
      logoSrc: `obi.svg`,
      synonyms: [
        'j,b',
        'оби',
        'строительный',
        'обби',
        'щиш',
        'obi',
        'товары для дома'
      ],
      description: `Строительный гипермаркет`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Гипермаркеты`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1 1v591h510v61h94v22h120v-22h94v-61h212V1H1z`
    },
    {
      id: 238,
      title: `Burger Club Loft`,
      logoSrc: `burgerclub.svg`,
      synonyms: ['burger club loft', 'burger', 'бургерная', 'черные бургеры'],
      description: `Сеть бургерных`,
      discount: new Set(),
      category: new Set([categoryFilter[`Фастфуд`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1031 548h90v44h-90z`
    },
    {
      id: 239,
      title: `Леонардо`,
      logoSrc: `leonardo.svg`,
      synonyms: [
        'леонардо',
        'ktjyfhlj',
        'хобби',
        'товары для рукоделия',
        'товары для дома',
        'творчество',
        'товары для творчества'
      ],
      description: `Хобби-гипермаркет`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Гипермаркеты`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1031 284h90v264h-90z`
    },
    {
      id: 240,
      title: `Детский мир`,
      logoSrc: `detmir.svg`,
      synonyms: [
        'детскиймир',
        'игрушки',
        'детская одежда',
        'одежда для детей',
        'детские товары',
        'детская обувь'
      ],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1031 1v283h90v-23h141V1h-231z`
    },
    {
      id: 241,
      title: `М.Видео`,
      logoSrc: `mvideo.svg`,
      synonyms: [
        'mvideo',
        'мвидиа',
        'м видео',
        'мвидео',
        'м_видео',
        'м-видео',
        'мвидио',
        'техника',
        'бытовая техника',
        'электроника',
        'телевизор',
        'смартфон',
        'vdbltj'
      ],
      description: `Магазин бытовой техники и электроники`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Товары для дома`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1262 1v328h130v-18h174V1h-304z`
    },
    {
      id: 242,
      title: `DMI Дятьково Кухни`,
      logoSrc: `dyatkovo-kitchen.svg`,
      synonyms: ['дятьково', 'dmi', 'кухни', 'дми'],
      description: `Кухни`,
      discount: new Set(),
      category: new Set([categoryFilter['Мебель']]),
      audience: new Set(),
      link: {
        text: `1 действующая акция`,
        url: `https://trc-aeropark.ru/furniture-shops/dmi-dyatkovo`
      },
      button: { text: ``, action: `` },
      path: `M1328 329h64v132h-64z`
    },
    {
      id: 243,
      title: `DMI Дятьково`,
      logoSrc: `dyatkovo.svg`,
      synonyms: ['lznmrjdj', 'дятьковомебель', 'мебель', 'диэмай', 'диемай'],
      description: `Мебель`,
      discount: new Set(),
      category: new Set([
        categoryFilter['Мебель'],
        categoryFilter['Товары для дома']
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1262 329h66v132h-66z`
    },
    {
      id: 244,
      title: `Мебель Черноземья`,
      logoSrc: `mche.svg`,
      synonyms: ['мебель черноземья', 'xthyjptvmt', 'vt,tkm'],
      description: `Фирменные салоны мебели`,
      discount: new Set(),
      category: new Set([
        categoryFilter['Мебель'],
        categoryFilter['Товары для дома']
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1507.5 311h58.5v150h-58.5z`
    },
    {
      id: 245,
      title: `Шатура`,
      logoSrc: `shatura.svg`,
      synonyms: ['шатура', 'ifnehf'],
      description: `Мебельная компания`,
      discount: new Set(),
      category: new Set([
        categoryFilter['Мебель'],
        categoryFilter['Товары для дома']
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1392 311v150h57.5V311H1392z`
    },
    {
      id: 246,
      title: `Ангстрем`,
      logoSrc: `angstrem.svg`,
      synonyms: ['ангстрем'],
      description: `Мебельная компания`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1449.5 311h58v150h-58z`
    },
    {
      id: 247,
      title: `Gulliver`,
      logoSrc: `gulliver.svg`,
      synonyms: [
        'gulliver',
        'гулливер',
        'гуливер',
        'одежда для детей',
        'детская одежда',
        'школьная форма',
        'игрушки'
      ],
      description: `Детская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2422 410h-72.5v51h46.5v-.5.5l26-33.3V410z`
    },
    {
      id: 248,
      title: `Mustang Jeans`,
      logoSrc: `mustang-jeans.svg`,
      synonyms: [
        'mustang jeans',
        'мустанг джинс',
        'джинсы',
        'футболки',
        'рубашки',
        'кожаные куртки',
        'юбки',
        'женская одежда',
        'мужская одежда'
      ],
      description: `Женская и мужская одежда, джинсы`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1932 461h50l18.2-51H1932v51z`
    },
    {
      id: 249,
      title: `Технопарк`,
      logoSrc: `technopark.svg`,
      synonyms: [
        'технопарк',
        'бытовая техника и электроника',
        'техно',
        'техника',
        'телевизоры'
      ],
      description: `Бытовая техника и электроника`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Бытовая техника и электроника`],
        categoryFilter[`Гипермаркеты`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1566 196v217h101v48h132V196h-233z`
    },
    {
      id: 250,
      title: `ProfilDoors`,
      logoSrc: `profildoors.svg`,
      synonyms: [
        'profildoors',
        'двери',
        'межкомнатные двери',
        'перегородки',
        'кухни',
        'шкафы',
        'мебель'
      ],
      description: `Центр интерьерных решений`,
      discount: new Set(),
      category: new Set([categoryFilter[`Мебель`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1605 413h62v48h-62z`
    },
    {
      id: 251,
      title: `Стальная линия`,
      logoSrc: `stalnaya-liniya.svg`,
      synonyms: [
        'стальная линия',
        'линия',
        'двери',
        'входные двери',
        'белорусские двери'
      ],
      description: `Входные двери`,
      discount: new Set(),
      category: new Set([categoryFilter[`Мебель`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1566 413h39v48h-39z`
    },
    {
      id: 252,
      title: `CCC Shoes&Bags`,
      logoSrc: `ccc.svg`,
      synonyms: ['ccc', 'ссс', 'обувь', 'аксессуары', 'cc'],
      description: `Обувь и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1900 351V196h-101v265h101V351z`
    },
    {
      id: 253,
      title: `ПАНОРАМА`,
      logoSrc: `panorama.svg`,
      synonyms: ['панорама', 'сеть кинотеатров', 'кино', 'кинозал'],
      description: `Сеть кинотеатров`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2422 410V196h-522v155h148v59h96.7l-.2-.5.2.5H2422z`
    },
    {
      id: 254,
      title: `Black Star Burger`,
      logoSrc: `blackstarburger.svg`,
      synonyms: ['Black Star Burger', 'блэк стар бургер'],
      description: `Бургеры от профессиональных поваров`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1900 351v59h148v-59h-148z`
    },
    {
      id: 255,
      title: `LN Code`,
      logoSrc: `ln-code.svg`,
      synonyms: [
        'ln code',
        'ln',
        'лия назарова',
        'лия',
        'лн код',
        'эл эн',
        'код',
        'code'
      ],
      description: `Дизайнерская одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1900 410h32v51h-32z`
    },
    {
      id: 256,
      title: `Дочки-Сыночки`,
      logoSrc: `dochkisinochki.svg`,
      synonyms: [
        'дочки-сыночки',
        'дочкисыночки',
        'одежда',
        'обувь',
        'игрушки',
        'трансформеры',
        'коляски',
        'кроватки',
        'подгузники'
      ],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2422 196v231.7l-26 33.3v77h167v-61h36V196h-177z`
    },
    {
      id: 257,
      title: `Game Zone`,
      logoSrc: `game-zone.svg`,
      synonyms: [
        'game zone',
        'гейм зон',
        'гейм зона',
        'видеоигры',
        'консоли',
        'игровые',
        'роботы'
      ],
      description: `Видеоигры, консоли, аксессуары к ним`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Подарки и сувениры`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2318.5 410h31v51h-31z`
    },
    {
      id: 258,
      title: `Button Blue`,
      logoSrc: `button-blue.svg`,
      synonyms: [
        'button blue',
        'баттон блу',
        'детская одежда',
        'одежда для детей',
        'одежда для ребенка'
      ],
      description: `Детская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2198 410h47v51h-47z`
    },
    {
      id: 259,
      title: `КАРАМЕЛЬ.КI boys`,
      logoSrc: `karamelki-boys.svg`,
      synonyms: ['карамельки', 'детская одежда', 'детская обувь'],
      description: `Детская одежда`,
      category: new Set([
        categoryFilter[`Детские товары`],
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`]
      ]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2166 410h-21.3l21.3 51h32v-51h-32z`
    },
    {
      id: 260,
      title: `Весёлая расческа`,
      logoSrc: `vesyolaya-rascheska.svg`,
      synonyms: ['весёлая расческа'],
      description: `Детская студия красоты`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2245 410h45v51h-45z`
    },
    {
      id: 261,
      title: `Сувениры. Антиквариат`,
      logoSrc: `suveniry-antikvariat.svg`,
      synonyms: ['сувениры антиквариат'],
      description: `Магазин сувениров`,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2096 669v5l50 29v-34h-50z`
    },
    {
      id: 262,
      title: `Pegas`,
      logoSrc: `pegast.svg`,
      synonyms: ['pegas', 'туризм', 'турагентство'],
      description: `Туристическое агентство`,
      discount: new Set(),
      category: new Set([categoryFilter[`Туристическое агентство`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2122 541.9a75.9 75.9 0 0 1-26 13.9V573h26z`
    },
    {
      id: 263,
      title: `Missha`,
      logoSrc: `missha.svg`,
      synonyms: [
        'косметика',
        'missha',
        'корейская косметика',
        'уход за кожей',
        'средства для укладки',
        'шампуни',
        'помада',
        'парфюм',
        'духи'
      ],
      description: `Корейская косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2122 541.9V573h24v-46.5h-9.7a72.1 72.1 0 0 1-14.3 15.4z`
    },
    {
      id: 264,
      title: `Pelican Kids`,
      logoSrc: `pelican-kids.svg`,
      synonyms: ['pelican kids', 'пеликан', 'детское', 'дети', 'кидс'],
      description: `Детская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары дял детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2198 507h51v66h-51z`
    },
    {
      id: 265,
      title: `Zenden`,
      logoSrc: `zenden.svg`,
      synonyms: [
        'зенден',
        'zenden',
        'обувь',
        'женская обувь',
        'мужская обувь',
        'детская обувь',
        'сумки',
        'туфли',
        'ботинки',
        'сапоги',
        'кошельки',
        'стельки'
      ],
      description: `Практичная недорогая обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Обувь`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2198 507h-51.9v196h52V507z`
    },
    {
      id: 266,
      title: `adidas`,
      logoSrc: `adidas.svg`,
      synonyms: ['адидас', 'абибас', 'adibas', 'flblfc', 'спорт', 'жизнь'],
      description: `Спортивные товары, одежда, обувь`,
      discount: new Set(),
      category: new Set([categoryFilter[`Спортивные товары`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2249 573h-51v130h72v-65h78v-65h-99z`
    },
    {
      id: 267,
      title: `STIL.НЯШКИ`,
      logoSrc: `stilnyashka.svg`,
      synonyms: [
        'стильняшка',
        'stil.няшка',
        'стиль',
        'детская дизайнерская одежда',
        'stil',
        'няшки'
      ],
      description: `Детская одежда`,
      discount: new Set(),
      category: new Set(),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2299 507h49v66h-49z`
    },
    {
      id: 268,
      title: `КАРАМЕЛЬ.KI`,
      logoSrc: `karamelki.svg`,
      synonyms: ['карамельки', 'детская одежда', 'детская обувь'],
      description: `Детская одежда и обувь`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Детские товары`],
        categoryFilter[`Одежда`],
        categoryFilter[`Обувь`]
      ]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2249 507h50v66h-50z`
    },
    {
      id: 269,
      title: `GrossHaus`,
      logoSrc: `grosshaus.svg`,
      synonyms: ['grosshaus', 'gros', 'гросхауз', 'гросхаус'],
      description: `Товары для офиса и школы`,
      discount: new Set(),
      category: new Set([categoryFilter[`Книги и канцтовары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2270 670.5h78V638h-78v32.5z`
    },
    {
      id: 270,
      title: `Takeshy Kurosawa`,
      logoSrc: `takeshykurosawa.svg`,
      synonyms: [
        'takeshy kurosawa',
        'такеша',
        'такэша',
        'куросава',
        'курасава',
        'nfrtib',
        'такеши',
        'такеши куросава'
      ],
      description: `Женская и мужская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2270 670.5h30.5V703H2270z`
    },
    {
      id: 271,
      title: `MYBOX`,
      logoSrc: `mybox.svg`,
      synonyms: ['mybox', 'Суши', 'Японская', 'майбокс', 'май бокс'],
      description: `Японская кухня, суши`,
      discount: new Set(),
      category: new Set([categoryFilter[`Японская кухня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2300.5 670.5h47.5V703h-47.5z`
    },
    {
      id: 272,
      title: `Kovalina`,
      logoSrc: `kovalina.svg`,
      synonyms: [
        'kovalina',
        'ковалина',
        'портфели',
        'сумки',
        'чемоданы',
        'аксессуары',
        'кожгалантерея'
      ],
      description: `Портфели, сумки, чемоданы`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2146 573h-50v64.5h50V573z`
    },
    {
      id: 273,
      title: `ANTIGA`,
      logoSrc: `antiga.svg`,
      synonyms: ['антига', 'antiga', 'ант', 'женская одежда'],
      description: `Женская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2096 637.5h50V669h-50z`
    },
    {
      id: 274,
      title: `Лепрекон`,
      logoSrc: `leprekon.svg`,
      synonyms: [
        'лепрекон',
        'липрекон',
        'leprekon',
        'настольные игры',
        'игры',
        'ktghtrjy'
      ],
      description: `Настольные игры`,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2000 703l50.2-27.9V669H2000v34z`
    },
    {
      id: 275,
      title: `ШОУ РУМ №1`,
      logoSrc: `shou-rum.svg`,
      synonyms: [
        'шоу рум',
        'женская одежда',
        'одежда',
        'платья',
        'юбки',
        'брюки',
        'блузы',
        'молодежная одежда',
        'аксессуары'
      ],
      description: `Женская, молодежная одежда и аксессуары`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Аксессуары`]
      ]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2024.2 573v-32.6a71.7 71.7 0 0 1-10-10.6H2000V573z`
    },
    {
      id: 276,
      title: `LONDON STYLE`,
      logoSrc: `london-style.svg`,
      synonyms: [
        'london style',
        'london',
        'лондон',
        'londonstyle32',
        'lonsdale',
        'gifted',
        'sigma',
        'affex'
      ],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`], categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2000 637.5h50.2V669H2000z`
    },
    {
      id: 277,
      title: `Императорский фарфор`,
      logoSrc: `ipm.svg`,
      synonyms: ['императорский фарфор'],
      description: `Изделия из фарфора`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Подарки и сувениры`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2000 604.5h50.2v33H2000z`
    },
    {
      id: 278,
      title: `the SAEM`,
      logoSrc: `thesaem.svg`,
      synonyms: [
        'косметика',
        'the saem',
        'корейская косметика',
        'уход за кожей',
        'средства для укладки',
        'шампуни',
        'помада',
        'парфюм',
        'духи',
        'саем'
      ],
      description: `Корейская косметика`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2024.2 573h26v-17.8a76.1 76.1 0 0 1-26-14.8z`
    },
    {
      id: 279,
      title: `Мальцов`,
      logoSrc: `malcov.svg`,
      synonyms: ['мальцов', 'хрусталь', 'дятьковский'],
      description: `Изделия из хрусталя`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Подарки и сувениры`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2000 573v31.5h50.2V573H2000z`
    },
    {
      id: 280,
      title: `Буду мамой`,
      logoSrc: `budumamoy.svg`,
      synonyms: [
        'буду мамой',
        ',ele vfvjq',
        'для будущих мам',
        'одежда для мам',
        'одежда для беременных',
        'для кормящих мам',
        'аксессуары для беременных'
      ],
      description: `Одежда для будущих мам`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1799 506h50.1v67H1799z`
    },
    {
      id: 281,
      title: `Mavi`,
      logoSrc: `mavi.svg`,
      synonyms: [
        'mavi',
        'mavi',
        'мави',
        'джинсы',
        'свитер',
        'кофта',
        'блузка',
        'верхняя одежда',
        'толстовки',
        'нижнее белье',
        'обувь',
        'головные уборы',
        'сумки',
        'женская одежда',
        'мужская одежда'
      ],
      description: `Женская и мужская одежда, джинсы`,
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
      path: `M1849.1 587.9h50.4V506h-50.4v81.9z`
    },
    {
      id: 282,
      title: `Читай-город`,
      logoSrc: `chitai-gorod.svg`,
      synonyms: ['читай-город'],
      description: `Книги и многое другое`,
      discount: new Set(),
      category: new Set([categoryFilter[`Книги и канцтовары`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1899.5 506h51.2v81.94h-51.2z`
    },
    {
      id: 283,
      title: `Venzano`,
      logoSrc: `venzano.svg`,
      synonyms: [
        'вензано',
        'костюмы',
        'venzano',
        'деловая одежда',
        'офисная одежда',
        'одежда',
        'мужская одежда',
        'одежда для мужчин',
        'брюки',
        'сорочки',
        'рубашки',
        'пиджаки'
      ],
      description: `Мужская деловая одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Мужская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1849.1 670.3V573H1799v97.3h50.1z`
    },
    {
      id: 284,
      title: `Alena Goretskaya (Алена Горецкая)`,
      logoSrc: `alena-goretskaya.svg`,
      synonyms: [
        'алена горетская',
        'горецкая',
        'алёна',
        'fktyf ujhtncrfz',
        'ujhtwrfz'
      ],
      description: `Стильная женская одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Женская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1799 670.3h25.5v32.71H1799z`
    },
    {
      id: 285,
      title: `MEGATOP`,
      logoSrc: `megatop.svg`,
      synonyms: ['megatop', 'mega', 'мегатоп', 'megatop', 'top', 'обувь'],
      description: `Обувь большого города`,
      discount: new Set(),
      category: new Set([categoryFilter[`Обувь`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2000 669v-64.5h-49.3v-16.6h-51.2V703h66.5v-34h34z`
    },
    {
      id: 286,
      title: `ТВОЕ`,
      logoSrc: `tvoe.svg`,
      synonyms: ['твое'],
      description: `Молодежная одежда`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Одежда`],
        categoryFilter[`Детские товары`]
      ]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1849.1 587.9V703h50.4V587.9h-50.4z`
    },
    {
      id: 287,
      title: `Роскошь с пеленок`,
      logoSrc: `roskosh-s-pelenok.svg`,
      synonyms: [
        'роскошь с пеленок',
        'одежда для новорожденных',
        'детская одежда',
        'конверты на выписку'
      ],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1824.5 670.3h24.6v32.71h-24.6z`
    },
    {
      id: 288,
      title: `Другие подарки`,
      logoSrc: `drugie-podarki.svg`,
      synonyms: ['другие подарки'],
      description: `Необычные подарки, сувениры.`,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1966 669h34v34h-34z`
    },
    {
      id: 289,
      title: `Ltb`,
      logoSrc: `ltb.svg`,
      synonyms: ['ltb', 'джинсы'],
      description: `Модная джинсовая одежда для всей семьи`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([
        audienceFilter[`Мужская одежда`],
        audienceFilter[`Женская одежда`]
      ]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1950.7 604.5h49.3V506h-49.3v98.5z`
    },
    {
      id: 290,
      title: `100 столов`,
      logoSrc: `100-stolov.svg`,
      synonyms: ['сто столов', '100 столов', 'cnj cnjkjd', 'столов', 'сто'],
      description: `Мебельная компания`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1264 506v79h89v-79h-89z`
    },
    // {
    //   id: 291,
    //   title: `Респект мягкая мебель`,
    //   logoSrc: ``,
    //   synonyms: [],
    //   description: ``,
    //   discount: new Set(),
    //   category: new Set([
    //     categoryFilter[`Сотовая связь`],
    //     categoryFilter[`Бытовая техника и электроника`]
    //   ]),
    //   audience: new Set([
    //     audienceFilter[`Мужская одежда`],
    //     audienceFilter[`Женская одежда`]
    //   ]),
    //   link: {text: ``, url: ``},
    //   button: {text: ``, action: ``},
    //   path: `M1300 624.6l53 29.7v-44.4h-53v14.7z`
    // },
    // {
    //   id: 292,
    //   title: `Респект мягкая мебель-2`,
    //   logoSrc: ``,
    //   synonyms: [],
    //   description: ``,
    //   discount: new Set(),
    //   category: new Set([
    //     categoryFilter[`Сотовая связь`],
    //     categoryFilter[`Бытовая техника и электроника`]
    //   ]),
    //   audience: new Set([
    //     audienceFilter[`Мужская одежда`],
    //     audienceFilter[`Женская одежда`]
    //   ]),
    //   link: {text: ``, url: ``},
    //   button: {text: ``, action: ``},
    //   path: `M1377 609.9v57.9l54 30.3v-88.2h-54z`
    // },
    {
      id: 293,
      title: `Лидер`,
      logoSrc: `lider.svg`,
      synonyms: ['лидер', 'лидир', 'kblth'],
      description: `Мебельная фабрика`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1431 609.9h54v33.08h-54z`
    },
    {
      id: 294,
      title: `Gray Kardinal`,
      logoSrc: `gray-kardinal.svg`,
      synonyms: ['gray kardinal'],
      description: `Дизайн-студия элитной мебели`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1431 698.1l12.3 6.9h41.7v-62h-54v55.1z`
    },
    {
      id: 295,
      title: `МЕБЕЛЬ-МОСКВА`,
      logoSrc: `mebel-moskva.svg`,
      synonyms: ['мебель москва', 'мебельмосква', 'vt,tkm vjcrdf'],
      description: `Фабрика мебели`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1507.5 589.2h57.2v57.85h-57.2z`
    },
    {
      id: 296,
      title: `Кухни Катюша`,
      logoSrc: `kuhni-katyusha.svg`,
      synonyms: ['кухни катюша', 'кухни', 'катюша', 'кухонный гарнитур'],
      description: `Кухонные гарнитуры`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1564.7 559.9V544h-57.2v45.2h57.2v-29.3z`
    },
    {
      id: 297,
      title: `ECOLA`,
      logoSrc: `ecola.svg`,
      synonyms: [
        'экола',
        'есоla',
        'светоник',
        'свет',
        'лампы',
        'светодиодные',
        'энергосберегающие'
      ],
      description: `Энергосберегающие и светодиодные лампы и светильники`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Товары для дома`],
        categoryFilter[`Бытовая техника и электроника`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1564.7 559.9h39.6V506h-39.6v53.9z`
    },
    {
      id: 298,
      title: `Кухни Трио`,
      logoSrc: `kuhni-trio.svg`,
      synonyms: ['nhbj', 'кухни трио', 'трио', 'кухни'],
      description: `Кухни`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1507.5 506h57.2v37.98h-57.2z`
    },
    {
      id: 299,
      title: `MOON`,
      logoSrc: `moon.svg`,
      synonyms: ['moon'],
      description: ``,
      discount: new Set(),
      category: new Set([categoryFilter[`Мебель`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1507.5 647.1h57.2v57.95h-57.2z`
    },
    {
      id: 2100,
      title: `O'STIN`,
      logoSrc: `ostin.svg`,
      synonyms: ['одежда', 'сумки', 'аксессуары', 'остин', 'ostin', 'остин'],
      description: `Женская и мужская одежда, аксессуары`,
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
      path: `M1701.6 559.9h-136.9V705h136.9v-34.7h48.9v-66.4h-48.9v-44z`
    },
    {
      id: 2101,
      title: `Лазурит`,
      logoSrc: `lazurit.svg`,
      synonyms: [
        'лазурит',
        'lazurit',
        'мебель',
        'мягкая мебель',
        'корпусная',
        'лазур',
        'kfpehbn'
      ],
      description: `Мягкая и корпусная мебель`,
      discount: new Set(),
      category: new Set([categoryFilter[`Мебель`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1655.1 506v53.9h62.4v-20h33V506h-95.4z`
    },
    {
      id: 2102,
      title: `Svyatnyh`,
      logoSrc: `svyatnyh.svg`,
      synonyms: ['svyatnyh', 'костюм', 'рубашка', 'пальто', 'святных'],
      description: `Мужская деловая одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set([audienceFilter[`Мужская одежда`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1701.6 670.3h48.9v34.71h-48.9z`
    },
    {
      id: 2103,
      title: `BEL POL`,
      logoSrc: `belpol.svg`,
      synonyms: [
        'bel pol',
        'бель-поль',
        'домашний текстиль',
        'одеяла',
        'подушки',
        'пух'
      ],
      description: `Домашний текстиль`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1604.3 506h50.8v53.89h-50.8z`
    },
    {
      id: 2104,
      title: `NAIL32`,
      logoSrc: `nail32.svg`,
      synonyms: [
        'нэйл 32',
        'nail',
        'найл',
        'все для ногтей',
        'материалы и инструменты для ногтей'
      ],
      description: `Материалы и инструменты для профессионалов`,
      discount: new Set(),
      category: new Set([categoryFilter[`Парфюмерия и косметика`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1717.5 539.9h33v20h-33z`
    },
    {
      id: 2105,
      title: `ТРИЭС`,
      logoSrc: `tries.svg`,
      synonyms: ['dfiltym', 'dfi ltym', 'ваш-день'],
      description: `Фабрика мягкой и корпусной мебели`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1431 531.9h54v53.05h-54z`
    },
    {
      id: 2106,
      title: `AERO`,
      logoSrc: `aero.svg`,
      synonyms: [
        'аэро',
        'столбери',
        'столы и стулья',
        'cnjk ,thb',
        'f\'hj',
        'fehj',
        'аеро'
      ],
      description: `Столы и стулья`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1431 506h-54v79h54v-79z`
    },
    {
      id: 2107,
      title: `Добрый стиль`,
      logoSrc: `dobryj-stil.svg`,
      synonyms: ['добрый стиль', 'мягкая мебель', 'добрый'],
      description: `Мебель`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Мебель`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1431 506h54v25.95h-54z`
    },
    {
      id: 2108,
      title: `Вкусная помощь`,
      logoSrc: ``,
      synonyms: [
        'вкусная помощь',
        'вкусная',
        'drecyfz gjvjom',
        'кондитерская помощь',
        'кондитерская'
      ],
      description: `Кондитерские изделия`,
      discount: new Set(),
      category: new Set([categoryFilter[`Продукты питания`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1677 743h-28v-16h28z`
    },
    {
      id: 2109,
      title: `Pedant.ru`,
      logoSrc: ``,
      synonyms: ['ремонт смартфонов', 'pedant', 'ремонт', 'смартфоны'],
      description: `Ремонт смартфонов`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1606 743h-28v-16h28z`
    },
    {
      id: 2110,
      title: `Веселый паровозик`,
      logoSrc: ``,
      synonyms: ['веселый паровозик'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1242 587h-28v-16h28z`
    },
    {
      id: 2112,
      title: `Чистомир`,
      logoSrc: ``,
      synonyms: [
        'Чистомир',
        'клининг',
        'уборка квартир',
        'чистка квартир',
        'генеральная уборка',
        'чистящие средства',
        'моющие средства',
        'чистить'
      ],
      description: `Группа клининговых компаний`,
      discount: new Set(),
      category: new Set([categoryFilter[`Товары для дома`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1664 491h-28v-16h28z`
    },
    {
      id: 2113,
      title: `Street Studio`,
      logoSrc: ``,
      synonyms: ['Street', 'Studio', 'СтриитСтудио'],
      description: `Студия печати `,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1783 653v28h-16v-28z`
    },
    {
      id: 2114,
      title: `31 ВЕК`,
      logoSrc: ``,
      synonyms: ['31 dtr', '21 век', '31й век', 'сувениры', 'cedtybhs'],
      description: `Подарки из будущего, сувениры`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Подарки и сувениры`],
        categoryFilter[`Товары для дома`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2081 574.7v28h-16v-28z`
    },
    {
      id: 2115,
      title: `Фотокиоск INSTA PHOTO`,
      logoSrc: ``,
      synonyms: ['инст', 'киоск', 'фото', 'инстаграм'],
      description: `Печать фотографий из Instagram`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2014 509.8v20h-14v-20z`
    },
    {
      id: 2116,
      title: `Vinegret`,
      logoSrc: ``,
      synonyms: [
        'vinegret',
        'винегрет',
        'аксессуары',
        'кожа',
        'кожгалантерея',
        'винигрет',
        'винт',
        'vine',
        'vini',
        'сумки',
        'клатчи',
        'портмоне'
      ],
      description: `Кожгалантерея`,
      discount: new Set(),
      category: new Set([
        categoryFilter[`Аксессуары`],
        categoryFilter[`Кожгалантерея`]
      ]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1962 491h-28v-16h28z`
    },
    {
      id: 2117,
      title: `LEPIN`,
      logoSrc: ``,
      synonyms: ['лего', 'лепин', 'lego-lepin', 'lepin'],
      description: `Детские конструкторы`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2212 491h-28v-16h28z`
    },
    {
      id: 2118,
      title: `Массажные кресла`,
      logoSrc: ``,
      synonyms: ['массажные кресла', 'массаж', 'кресла'],
      description: `Остров релаксации`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2286 491h-28v-16h28z`
    },
    {
      id: 2119,
      title: `KRUTOYS`,
      logoSrc: ``,
      synonyms: [
        'крутойс',
        'krutoys',
        'krutoys',
        'круtoys',
        'радиоуправляемые игрушки',
        'игрушки',
        'квадрокоптеры',
        'роботы',
        'трансформеры',
        'игрушки на пульте управления'
      ],
      description: `Товары для детей`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2379.5 509v28h-16v-28z`
    },
    {
      id: 2120,
      title: `JUICY FRUIT`,
      logoSrc: ``,
      synonyms: ['juicy fruit', 'джуси фруйт', 'джуси фрут', 'джуси фрукт'],
      description: `Фреш-бар`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2379.5 606.5v28h-16v-28z`
    },
    {
      id: 2121,
      title: `КОФЕ ХАУЗ`,
      logoSrc: ``,
      synonyms: ['кофе хауз', 'кофе', 'кофейня'],
      description: `Кофе и десерты`,
      discount: new Set(),
      category: new Set([categoryFilter[`Кофейня`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2393 675v28h-16v-28z`
    },
    {
      id: 2122,
      title: `Море желаний`,
      logoSrc: ``,
      synonyms: ['море желаний', 'рыбки'],
      description: ``,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M2395 587v20h-12v-20z`
    },
    {
      id: 2123,
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
      path: `M2395 569v16h-12v-16z`
    },
    {
      id: 2124,
      title: `ArtHobby`,
      logoSrc: ``,
      synonyms: [
        'артхобби',
        'ahn[j,,b',
        'арт-хобби',
        'артхоби',
        'картинки по номерам',
        'рисовать',
        'картины'
      ],
      description: `Картины по номерам`,
      discount: new Set(),
      category: new Set([categoryFilter[`Подарки и сувениры`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1599 721h-28v-16h28z`
    },
    {
      id: 2125,
      title: `G-Energy`,
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
      path: `M1639 721h-28v-16h28z`
    },
    {
      id: 2126,
      title: `#ошарашим32`,
      logoSrc: ``,
      synonyms: [
        'ошарашим',
        '#ошарашим',
        'шары',
        'воздушные шары',
        'воздушные фигуры',
        'фигура из шаров'
      ],
      description: `Украшение детских праздников`,
      discount: new Set(),
      category: new Set(),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: ``
    },
    {
      id: 2127,
      title: `Виртуальный ЗАГС`,
      logoSrc: ``,
      synonyms: ['Виртуальный ЗАГС'],
      description: `Развлекательный киоск`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: ``
    },
    {
      id: 2128,
      title: `Bambinizon`,
      logoSrc: ``,
      synonyms: [
        'bambinzon',
        'bambi',
        'комбинезон',
        'детская одежда',
        'бамбинезон'
      ],
      description: `Развлекательный киоск`,
      discount: new Set(),
      category: new Set([categoryFilter[`Детские товары`]]),
      audience: new Set([audienceFilter[`Товары для детей`]]),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: ``
    },
    {
      id: 2129,
      title: `Volkswagen`,
      logoSrc: ``,
      synonyms: ['Volkswagen', 'фольксваген'],
      description: `Инсталляция`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: ``
    },
    {
      id: 2130,
      title: `Газированная вода`,
      logoSrc: ``,
      synonyms: [
        'Газированная вода',
        'вендинговый аппарат',
        'газированные напитки',
        'газвода'
      ],
      description: `Автомат по продаже газированной воды и напитков`,
      discount: new Set(),
      category: new Set(),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: ``
    },
    {
      id: 2131,
      title: `Dress Code`,
      logoSrc: `d-o.svg`,
      synonyms: ['дресс', 'dress', 'drees', 'дрэс', 'код', 'dress code', 'cod'],
      description: `Одежда`,
      discount: new Set(),
      category: new Set([categoryFilter[`Одежда`]]),
      audience: new Set(),
      link: { text: ``, url: `` },
      button: { text: ``, action: `` },
      path: `M1849.13,784.82h-49.27V751.14h49.27Z`
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
    },
    {
      symbolId: `foodcourt`,
      points: [
        {
          title: `Фудкорт`,
          position: [2226, 633]
        }
      ]
    }
  ]
};
