#include <iostream>
#include <string>
using namespace std;

class Subscriber {
private:
    string name;
    string phone;
    double airtime;

public:
    Subscriber(string n, string p, double a) {
        name = n;
        phone = p;
        airtime = a;
    }

    int compute_bonuspoints() {
        if (airtime >= 2000.00) return 500;
        else if (airtime >= 1000.00 && airtime <= 1999.00) return 300;
        else if (airtime >= 500.000 && airtime <= 999.00) return 100;
        else if (airtime >= 100.000 && airtime <= 499.00) return 50;
        else return 0;
    }

    void display() {
        cout << name << " :(PHONE NO:" << phone << "): AWARDED "
             << compute_bonuspoints() << " BONGA POINTS. STAY WITH SAFARICOM. THE BETTER OPTION!" << endl;
    }
};

int main() {
    string name, phone;
    double airtime;

    cout << "Enter Subscriber Name: ";
    getline(cin, name);
    cout << "Enter Phone Number: ";
    cin >> phone;
    cout << "Enter Airtime Amount: ";
    cin >> airtime;

    Subscriber s(name, phone, airtime);
    s.display();

    return 0;
}
