#include <iostream>
#include <string>
using namespace std;

class Vehicle {
private:
    string make;
    string model;
    string engineNumber;
    double salePrice;

public:
    void set_vehicle(string m, string mo, string eNo, double price) {
        make = m;
        model = mo;
        engineNumber = eNo;
        salePrice = price;
    }

    double get_profit() {
        return 0.15 * salePrice;
    }

    void display() {
        cout << "Make: " << make << endl;
        cout << "Model: " << model << endl;
        cout << "Engine Number: " << engineNumber << endl;
        cout << "Sale Price: " << salePrice << endl;
        cout << "Profit (15%): " << get_profit() << endl;
    }
};

int main() {
    Vehicle v1;
    v1.set_vehicle("Nissan", "Sunny", "ENG12345", 2500000);
    v1.display();
    return 0;
}
