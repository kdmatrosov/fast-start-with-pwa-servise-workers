# Fast start with PWA

## Возможности
* ```Push``` уведомления
* Фоновая синхронизация
* Доступность ```offline```
* Возможность установки на рабочий экран телефона   
* Доступ к камере устройства
* Доступ к геопозиции 
...

---

## Что такое Progressive Web Apps
Веб-проекты, которые выглядят и ведут себя, как мобильные приложения:
* Работают в режиме ```offline```
* Имеют иконку на рабочес столе
* Синхронизируют данные в фоновом режиме

---

## PWA и SPA

SPA можно преобразовать в PWA, так же как и любую другую веб-страницу

---

## Основные "слоны" PWA

* Server Workers
* Фоновая синхронизация
* ```Push``` уведомления
* Манифест, разрешающий добавление на рабочий экран

---
## Lighthouse

Расширение диагностики сайта под Chrome. Проверяет:
* Как быстро грузится сайт
* Форматы картинок и их сжатие
* Неиспользуемый css
* SEO
* Best practice
* Соответствие требованиям PWA
    * Скорость загрузки в 3G
    * Доступность ```offline```
    * Возможность установить 

---

## manifest.json

Обычный json файл, содержащий информацию для браузера, как ваше веб-приложение должно себя вести, когда "установлено" на мобильное устройство. 

Наличие этого файла обязательно в Chrome для показа предложения ```Add to Home Screen``` 

---

## Web App Manifest Generator

Сервис генерации манифеста для проекта (open source)

https://app-manifest.firebaseapp.com/
 
---

## Service Workers

```Service Workers``` представляют собой процессы в фоновом режиме, которые обеспечивают взаимодействие между приложением и сетью. Данные процессы способны перехватывать http-запросы и кэшировать информацию, что может быть использовано для подгрузки данных при отсутствии сети.
В плане реализации ```Service Workers``` - это javascript скрипты, которые слушают события и выполняют задачи.

**Browser support**

![Service Workers Browser support](readme-images/serviceworkersbrowsersupport.png)

## Service Worker lifecycle

1. register
1. installation
1. activation
1. idle
1. terminations

## HTML
Добавьте в тэг ```head```
```html
<link rel="manifest" href="/manifest.json">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#2196f3">
```


## Полезные ссылки

* [Are Service Workers Ready?](https://jakearchibald.github.io/isserviceworkerready/)
* [Getting Started with Service Workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
* [The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [Progressive Web Apps 101: the What, Why and How](https://medium.freecodecamp.org/progressive-web-apps-101-the-what-why-and-how-4aa5e9065ac2)
* [Progressive Web Apps 102: Building a Progressive Web App from scratch](https://medium.freecodecamp.org/progressive-web-apps-102-building-a-progressive-web-app-from-scratch-397b72168040)