#include <iostream>
using namespace std;
//class
class Car {
 private: // Encapsulation 
    string ownerID;   
    void showOwnerInfo() {// Private method
        cout << "Owner ID (protected): " << ownerID << endl;
    }
 public:
    string type; 
    Car(string t, string id) : type(t), ownerID(id) {} // Constructor
    void displayInfo() {// Public method
        cout << "Car Type: " << type << endl;
        showOwnerInfo(); 
    }
//object
int main() {
    Car myCar("electric", "sedan");
    myCar.displayInfo(); 
    return 0;
}