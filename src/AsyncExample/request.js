const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // Пример HTTP запроса для извлечения
    // данных пользователя из API.
    // Для данного модуля используется мок из __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => data += _data);
      response.on('end', () => resolve(data));
    });
  });
}