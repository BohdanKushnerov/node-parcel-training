# js-22

- Терминал
  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `control + ~`
    - `view > teminal`
    - через палитру `command + shift + p`
  - Основные полезные команды
    - путь (pwd)
    - лист (ls)
    - навигация (cd)
    - очистка `clear` или `control + l`
    - создание файлов (touch)
    - создание папок (mkdir)
    - переименование/перемещение (mv)
    - удаление (rm)
- Node.js и npm
  - установка
  - инициализация и package.json
  - [npmjs.com](https://www.npmjs.com/)
  - работа с пакетами
    - установка
    - удаление
  - CommonJS модули
  - npm-скрипты
    - pre и post
- Транспиляция кода
  - [Babel](https://babeljs.io/)
  - CLI и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist)
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) експорт и импорт
  - Именованный (named) експорт и импорт
  - Импорт пространства имён (namespace)

<!-------Команди термінал--------->

pwd - де ми находимся;

ls - шо тут є(без скритого);
ls -la - шо тут є(з скритим);
ls js-22 - показать шо в папкі "js-22";

cd .. - вийти на 1 рівень вверх;
cd ../../ - вийти на 2 рівня вверх;
cd js-22 - зайти в папку "js-22";
cd groups/js-22 - зайти в "js-22";

C: - зайти на диск С;
D: = зайти на диск D;
cd C: - вроді так тоже можна;

touch index.html - создать файл;
touch index.html styles.css- создать файлы;
touch css/global/global.css - создать файл в папкі;

mv styles.cs styles.css - удалить і создасть(перемістить) 
rm styles.css - удалить файлік;
rm css/styles.css - удалить файл по путі;

mkdir css - создасть папку;
mkdir css/global - создасть папку в папкі;
rm -rf css - удалить папку;

1. npm init ->enter...'y' enter;
Або npm init --yes або npm init -y;

2. npm i joi;
npm i uuid.v4;
Добавляються dependencies - завісімості;

3. npm remove joi; - удалить joi;

4. const Joi = require('joi');
const shortid = require('shortid');
console.log(shortid.generate());

І можна написать node app.js/
або npm start - 
якшо в JSON помінять скріпт "scripts": {
    "start": "node app.js"
  },

5. Pre і post скріпти:
"scripts": {
    "start": "node app.js",
    "prestart": "echo \"это prestart\"",
    "poststart": "echo \"это poststart\""
  },

6. "scripts": {
    "script-1": "echo \"это script-1\"",
    "script-2": "echo \"это script-2\"",
    "all": "npm run script-1 && npm run script-2"
  },

  npm run all

7. 


