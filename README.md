# aeropark

Структура:

```
app/
  | --blocks (HTML-инклюды)
  | --fonts/
  | --images/
    | --favicons/
    | --svg-symbols/ (для объединения в один файл symbols.svg)
  | --js/
    | --plugins/
    | --modules/
    | --jQuery (Подключать отдельно)
    | --script.js
  | --scss/
    | --aeroplan-blocks/
    | --global/
    | --blocks/
    | --aeroplan-style.scss
    | --functions.scss
    | --mixins.scss
    | --variables.scss
    | --style.scss
build/
  | --style.css
  | --fonts/
  | --images/
  | --symbols.svg
  | --js
other/
   |--psd
```

## Установка

1. Перейти в родительскую папку проектов
2. Запустить консоль Git Bash
3. Ввести команду `git clone https://github.com/corvus-007/start-project имя_проекта`, где `имя_проекта` — название вашего проекта
4. Перейти в каталог проекта `cd имя_проекта`
5. Установить модули из package.json — `npm install`

## Запуск проекта

`npm start`

## Сборка проекта

`npm run build`

## Удаление папки build

`gulp clean`

Из папки js/plugins/ объединяются js-файлы и помещаются в js/plugins.js
Из папки js/modules/ объединяются js-файлы и помещаются в js/modules.js
Из папки images/svg-symbols/ объединяются svg-файлы и помещаются в images/symbols.svg

## Проект

### Изображения

Слайдер событий на главной: `1080×400`.

Размер логотипа магазина: `400×400`.

Соотношение сторон галереи в контенте: `16/10`.

### Фильтрация

Обязательные атрибуты:

- `data-filter-cards` - у списка карточек;
- `data-filter` - у кнопок.

Необязательные атрибуты:

- `data-set-default-filter` - у блока `.common-page-filter`. Определяет, какая опция будет установлена по умолчанию, а не первая в списке.

```html
<div
  class="events__filter common-page-filter"
  data-set-default-filter=".filter-events"
>
  <button class="common-page-filter__current input" type="button">
    <span class="visually-hidden">Фильтрация по:</span>
    <span class="common-page-filter__label"></span>
  </button>
  <ul class="common-page-filter__options">
    <li class="common-page-filter__options-item common-filter-option">
      <button
        class="common-filter-option__button"
        type="button"
        data-filter="*"
      >
        Все
      </button>
    </li>
    <li class="common-page-filter__options-item common-filter-option">
      <button
        class="common-filter-option__button"
        type="button"
        data-filter=".filter-actions"
      >
        Акции
      </button>
    </li>
    <li class="common-page-filter__options-item common-filter-option">
      <button
        class="common-filter-option__button"
        type="button"
        data-filter=".filter-events"
      >
        События
      </button>
    </li>
    <li class="common-page-filter__options-item common-filter-option">
      <button
        class="common-filter-option__button"
        type="button"
        data-filter=".filter-news"
      >
        Новости
      </button>
    </li>
  </ul>
</div>
<!-- .common-page-filter -->

<ul class="events__list events-cards" data-filter-cards>
  <li class="events-cards__item event-card filter-events">…</li>
  <li class="events-cards__item event-card filter-news">…</li>
  <li class="events-cards__item event-card filter-actions">…</li>
  …
</ul>
```

В примере выше, у элемента li установлен класс `filter-events`, он необходим для фильтрации.
`filter` – префикс, остается постоянным, `events` – к какой категории относится карточка.

## Aeroplan

### get-параметры
- `placeId=167` - выделяет помещение на плане по его id
- `showFreePlaces` - переход в режим показа свободных помещений

### Логотипы для плана этажей

Если логотипа нет, то можно создать текстовый логотип в Adobe Illustrator:

- font-weight - `Medium`;
- font-size - `12px`;
- line-height - `14.4px` (авто);
- font-family - `TT Norms`;

### Маркеры

Файл:

- `assets/markers-symbols.ai`.

Маркеры - это svg-символы

### Этажи

Файлы:

- `assets/floor1.ai`
- `assets/floor2.ai`
- `assets/floor3.ai`

Слои:

- `markers` - символы-маркеры (эскалатор, лифты, банкоматы)
- `inner-boundary` - внутренние границы на плане этажа
- `areas` - шейпы арендаторов
- `border` - граница плана этажа

Все фигуры должны быть в svg файле элементом `path` (в AI эта фигура называется Compound Path). Для этого выбираем фигуру `Object -> Compound Path -> Make`, сочетание клавиш - `Ctrl+8`, затем переименовать слой на название арендатора, например `Zara`.

Экспорт этажа:

1. `File -> Export -> Export As…`
2. Поставить галочку на поле `🗹 Use Artboards`
3. Опции при сохранении SVG:
   - Styling: `Presentation Attributes`
   - Font: `SVG`
   - Images: `Link`
   - Object IDs: `Layer Names`
   - Decimal: `2`
   - `🗷 Minify` | `🗹 Responsive`

### Описание занимаемой площади (магазин / островок)

```js
{
  id: 167,
  status: 1,
  title: `Zara`,
  logoSrc: `zara.svg`,
  synonyms: ['zara', 'зара'],
  description: `Одежда для современных людей`,
  discount: new Set(),
  category: new Set([categoryFilter[`Одежда`]]),
  audience: new Set([
    audienceFilter[`Для мужчин`],
    audienceFilter[`Для женщин`]
  ]),
  free: true,
  shopURL: `/shop/100`,
  link: {
    text: ``,
    url: ``
  },
  button: {
    text: ``,
    action: ``
  },
  path: `M800 82V1H604v263h196V82z`
},
```

| Ключ            | Значение                                                                    | Описание                                                                                                                                                                                                                                                                                                        |
| --------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | `167`                                                                       | id площади. Первая цифра - этаж, остальные цифры - id площади. `167` - `1` этаж, `67` - id.                                                                                                                                                                                                                     |
| `status`        | `1`                                                                         | Отображать помещение на карте. Если логическое да (числа кроме `0`, `true`, не пустая строка) – отображать, нет (`0`, `false`, `''`, `null`, `undefined`) – скрывать. Если ключ не задан, то **по умолчанию помещение будет отображаться**.                                                                     |
| `title`         | `Zara`                                                                      | Название площади.                                                                                                                                                                                                                                                                                               |
| `logoSrс`       | `zara.svg`                                                                  | Имя файла с логотипом. Слова в файле разделять через дефис `-`.                                                                                                                                                                                                                                                 |
| `synonyms`      | `['zara', 'зара']`                                                          | Слова, которые могут ввести пользователи в поиске, чтобы найти этот магазин. Можно добавить значения, для тех слов, которые вводят на противоположной раскладке клавиатуры, напр. `zara`->`яфкф`.                                                                                                               |
| `description`   | `Одежда для современных людей`                                              | Описание площади.                                                                                                                                                                                                                                                                                               |
| `discount`      | `` new Set([discountFilter[`До 30%`]]) ``                                   | Набор текущих скидок для данного магазина. Скидки находятся в файле `filter-options.js`.                                                                                                                                                                                                                        |
| `category`      | `` new Set([categoryFilter[`Одежда`]]) ``                                   | Набор категорий к которым относится магазин. Категории находятся в файле `filter-options.js`.                                                                                                                                                                                                                   |
| `audience`      | `` new Set([audienceFilter[`Для мужчин`], audienceFilter[`Для женщин`]]) `` | Целевая аудитория магазина. Целевая аудитория находится в файле `filter-options.js`.                                                                                                                                                                                                                            |
| `free`          | `true`                                                                      | Свободно помещение для аренды? `true` - помещение свободно, `false` - занято. **Добавить функциональность, в которой при отсутствии этого ключа, делать помещение занятым, т.е. по умолчанию помещение занято.**                                                                                                |
| `shopURL`       | `/shop/100`                                                                 | Ссылка на страницу помещения в ТРЦ                                                                                                                                                                                                                                                                              |
| `link`          | ` { text: ``, url: `` } `                                                   | Ссылка во всплывашке на плане этажа.                                                                                                                                                                                                                                                                            |
| `link.text`     | `1 действующая акция`                                                       | Текст ссылки.                                                                                                                                                                                                                                                                                                   |
| `link.url`      | `/url_to_place`                                                             | Адрес ссылки.                                                                                                                                                                                                                                                                                                   |
| `button`        | ` { text: ``, url: `` } `                                                   | Кнопка во всплывашке на плане этажа.                                                                                                                                                                                                                                                                            |
| `button.text`   | `Помещение свободно`                                                        | Текст кнопки.                                                                                                                                                                                                                                                                                                   |
| `button.action` | `show-popup-rent-store`                                                     | Действие кнопки. Действие будет записано в data-атрибут `data-map-place-action="{action}"`. Далее нужно будет написать функцию-обработчик в объект `placePopupActions` в файле `aeroplan-app.js` при клике на кнопку с `data-map-place-action` и в зависимости от значения атрибута выполнить заданную функцию. |
| `path`          | `M800 82V1H604v263h196V82z`                                                 | Описывает svg фигуру на плане этажа.                                                                                                                                                                                                                                                                            |
