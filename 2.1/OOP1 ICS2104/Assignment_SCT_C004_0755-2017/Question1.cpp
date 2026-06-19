/*
NGENO KIBET CALEB
SCT221-C004-0755/2017
Question 1 assignment - Object Oriented Programming I- ICS2104
*/
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Book {
private:
    string author;
    string title;
    int book_number;
    int price;
    int copies;

public:
    Book(string a, string t, int bn, int p, int c) {
        author = a;
        title = t;
        book_number = bn;
        price = p;
        copies = c;
    }
    void display() const {
        cout << "Book Number: " << book_number << endl;
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "Price: " << price << endl;
        cout << "Copies: " << copies << endl;
        cout << "-----------------------------" << endl;
    }
};

void insertBook(vector<Book> &database, string author, string title, int book_number, int price, int copies) {
    Book newBook(author, title, book_number, price, copies);
    database.push_back(newBook);
}

void displayBooks(const vector<Book> &database) {
    cout << "\n--- Library Inventory ---\n";
    for (size_t i = 0; i < database.size(); i++) {
        database[i].display();
    }
}

int main() {
    vector<Book> database;
    insertBook(database, "Chinua Achebe", "Things Fall Apart", 101, 50000, 10);
    insertBook(database, "Ngugi wa Thiong'o", "Petals of Blood", 102, 45000, 5);
    insertBook(database, "Okot p'Bitek", "Song of Lawino", 103, 30000, 7);
    displayBooks(database);
    return 0;
}
