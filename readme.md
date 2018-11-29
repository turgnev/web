# Лабораторная работа 1

## Запрос OPTIONS

Используется для определения возможностей веб-сервера или параметров соединения для конкретного ресурса.


| Ресурс  |     Ответ     |
| ------------- |:-------------:|
| http://mail.ru | 400 Bad Request |
| http://ya.ru | 403 Forbidden |
| https://www.rambler.ru | 403 Forbidden |
| https://www.google.ru | 405 Method Not Allowed |
| https://github.com | 404 Not Found |
| https://www.apple.com | 200 OK |

Из вышеперечисленных сайтов, лишь сайт apple верно обработал запрос.

```
Server →Apache
Content-Length →0
Content-Type →text/html; charset=UTF-8
X-Frame-Options →SAMEORIGIN
X-Content-Type-Options →nosniff
Allow →GET,HEAD,POST,OPTIONS
X-Xss-Protection →1; mode=block
Cache-Control →max-age=300
Expires →Thu, 29 Nov 2018 01:25:44 GMT
Date →Thu, 29 Nov 2018 01:20:44 GMT
Connection →keep-alive

```

## Запрос HEAD
Аналогичен методу GET, за исключением того, что в ответе сервера отсутствует тело. Запрос HEAD обычно применяется для извлечения метаданных.

| Ресурс  |     Ответ     |
| ------------- |:-------------:|
| https://vk.com | 418 I'm a teapot (RFC 2324) |
| https://www.apple.com | 200 OK |
| https://www.msn.com | 200 OK |

Верно сработали сайты apple и msn.

## Запросы GET и POST 
В случае GET, все сайты сработали верно и вернули в теле html сраницы.

В случае POST:

| Ресурс  |     Ответ     |
| ------------- |:-------------:|
| yandex.ru | 403 Forbidden |
| google.com | 405 Method Not Allowed |
| apple.com | 200 OK |

yandex и google в теле вернули html страницы с сообщением об ошибке, а apple просто главную страницу.

## Работа с API


Получение id университета
```
https://api.vk.com/method/database.getUniversities?country_id=1&city_id=1&count=500&access_token=7372aeab08323c36e6c33356b76a7aaa6b74078c8be463807149c1b5c7d10a7671245a6d0ddc7a16fe4f6&v=5.92
```

Получение факультетов
```
https://api.vk.com/method/database.getFaculties?university_id=250&access_token=7372aeab08323c36e6c33356b76a7aaa6b74078c8be463807149c1b5c7d10a7671245a6d0ddc7a16fe4f6&v=5.92
```

Для получения информации о пользователе был использован запрос:
```
https://api.vk.com/method/users.get?user_ids=38615688&fields=photo_200_orig&access_token=7372aeab08323c36e6c33356b76a7aaa6b74078c8be463807149c1b5c7d10a7671245a6d0ddc7a16fe4f6&v=5.92
```

Код ответа, присанный API - 200, в теле присылаются запрашиваемые данные в json в кодировке utf-8.
Server - Internet Information Services

Для отправки сообщения на стену был использован запрос:

```
https://api.vk.com/method/wall.post?owner_id=watchphonerussia&message=test&access_token==7372aeab08323c36e6c33356b76a7aaa6b74078c8be463807149c1b5c7d10a7671245a6d0ddc7a16fe4f6&v=5.92
```
Данные от пользователя к серверу передаются как параметры запроса.