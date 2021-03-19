const fs = require('fs');

//Удаление директории с файлами
function deleteDir(user) {
    fs.rmdirSync('./temp_' + user, { recursive: true });
}

//Создание директории с файлами
function makeDir(user) {
    fs.mkdir('./temp_' + user, function () {})
}

//Создание файла
function createFile (user, name) {
    setFile({}, user, name)
}

//Запись файла
function setFile(obj, user, name) {
    fs.writeFile('./temp_' + user + '/' + name + '.json', JSON.stringify(obj, null, 2), function () {});
}

//Добавление объекта в файл
function appendToFile (id, parameter, user, name) {
    var old = readFile(user, name);
    setFile(Object.assign({}, {[id] : parameter}, old), user, name);
}

//Изменение конкретного объекта в файле
function setIndexToFile (parameter, user, name)
{
    const fileName = './temp_' + user + '/' + name + '.json';
    const file = require(fileName);

    file.index = parameter;
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function () {});
}

//Чтение
function readFile (user, name) {
    return require('./temp_' + user + '/' + name + '.json');
}

module.exports.deleteDir = deleteDir;
module.exports.makeDir = makeDir;
module.exports.setIndexToFile = setIndexToFile;
module.exports.setFile = setFile;
module.exports.createFile = createFile;
module.exports.appentToFile = appendToFile;