"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(books) {
        try {
            this.checkBooks(books);
            this.#books = books;
        } catch (error) {
            console.error(error);
        }
    }

    get allBooks() {
        return this.#books;
    }

    checkBooks(books) {
        for (let indexOuter = 0; indexOuter < books.length; indexOuter++) {
            for (let indexInner = 0; indexInner < books.length; indexInner++) {
                if(!(indexOuter==indexInner)){
                    if(books[indexOuter]===books[indexInner]){
                        throw new Error("Одиннаковые элементы в массиве");
                    }
                }
            }   
        };
        return true;
    }

    printBooks() {
        this.#books.forEach(element => {
            console.log(element)
        });
    }

    addBook(title) {
        this.#books.forEach(element => {
            if(element===title) {
                throw new Error("Такая книга уже есть");
            }
        });
        this.#books.push(title);
    }

    removeBook(title) {
        let flag = false
        for (let index = 0; index < this.#books.length; index++) {
            if(this.#books[index]===title) {
                delete this.#books[index];
                flag = true;
            }
        }
        if(!flag){
            throw new Error("Такой книги нет. Ее нельзя удалить"); 
        }
        return flag
    }

    hasBook(title) {
        let flag = false
        for (let index = 0; index < this.#books.length; index++) {
            if(this.#books[index]===title) {
                flag = true;
            }
        }
        return flag
    }
}


const myLibrary = new Library(["Война и мир", "Идиот", "Хочу и буду"]);
myLibrary.printBooks();
console.log("----------")
myLibrary.addBook("Звезды падают в небо")
myLibrary.printBooks();
console.log("----------")
myLibrary.removeBook("Идиот")
myLibrary.printBooks();
console.log("----------")
console.log(myLibrary.hasBook("Война"))
