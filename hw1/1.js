"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = [
  {
    title: "Альбом первый",
    artist: "Исполнитель первый",
    year: "2001"
  },
  {
    title: "Альбом второй",
    artist: "Исполнитель второй",
    year: "2002"
  },
  {
    title: "Альбом третий",
    artist: "Исполнитель третий",
    year: "2003"
  },
]

function printAboutAlbum (album) {
  console.log(`${album.title} - ${album.artist} (${album.year})`)
}


const musicLibrary = {
  musicCollection,
  // Вариант 1
  [Symbol.iterator]() {
    let i = 0;
    const array = this.musicCollection;
    return {       
      next() {
        return i < array.length ? {done: false, value: array[i++]} : {done: true};
      }
    }
  }
  // Вариант 2
  // *[Symbol.iterator]() {
  //   for (const music of this.musicCollection) {
  //     yield music;
  //   }
  //  }
};

for (const music of musicLibrary) {
  printAboutAlbum (music);
}