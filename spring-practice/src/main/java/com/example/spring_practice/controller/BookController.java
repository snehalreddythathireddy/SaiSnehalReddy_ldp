package com.example.spring_practice.controller;

import com.example.spring_practice.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private List<Book> books = new ArrayList<>();

    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        books.add(book);
        return book;
    }
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) {
        for (Book book : books) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        for (Book book : books) {
            if (book.getId() == id) {
                book.setTitle(updatedBook.getTitle());
                return book;
            }
        }
        return null;
    }
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable int id) {
        books.removeIf(book -> book.getId() == id);
        return "Book with id " + id + " deleted";
    }
}