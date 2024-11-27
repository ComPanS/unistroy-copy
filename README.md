# unistroy-copy
 
Этот проект заточен, чтобы закрепить знания и полчить новые навыки. В конечном счете будет проект, который будет схож с сайтом [Унистроя](https://unistroyrf.ru/). 

В проекте реализовано:
- создание постов
- редактирование постов
- удаление постов
- регистрация/авторизация
- вывод постов в зависимости от города
- динамический хедер, состоящий из 2 разных частей (левого и верхнего)
- выбор города в хедере
- доступ только админам взаимодействовать с постами
- пост привязан к определенному админу
- динамический вывод постов в хедере ховером в зависимости от выбранного города
- города в хедере динамически добавляются, если появляется новый город в посте

#### Backend
1. **Node.js + Express**: Фреймворк для серверной части приложения, используемый для обработки HTTP-запросов и маршрутизации.
2. **MongoDB (через Mongoose)**: NoSQL база данных для хранения данных приложения в формате документов.
3. **Bcrypt**: Шифрование паролей для обеспечения безопасного хранения пользовательских данных.
4. **JWT (JSON Web Tokens)**: Аутентификация и авторизация пользователей через безопасные взаимодействия на основе токенов.
5. **Multer**: Middleware для обработки multipart/form-data, в основном используется для загрузки файлов.
6. **Express Validator**: Middleware для валидации и очистки пользовательского ввода.
7. **Cors**: Middleware для включения обмена ресурсами между различными источниками (CORS).

#### Frontend
1. **React**: Библиотека для создания пользовательских интерфейсов с использованием компонентной архитектуры.
2. **Redux Toolkit**: Упрощенное управление состоянием для React-приложений.
3. **Material-UI (MUI)**: Библиотека UI-компонентов для реализации Material Design.
4. **React Router DOM**: Декларативная маршрутизация для React-приложений.
5. **Axios**: HTTP-клиент на основе промисов для выполнения запросов к серверной части.
6. **Sass**: Препроцессор CSS для написания более поддерживаемых и масштабируемых стилей.
7. **React Hook Form**: Библиотека для управления формами в React-приложениях.
