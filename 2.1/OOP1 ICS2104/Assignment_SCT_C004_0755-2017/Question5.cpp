#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    string empID;
    string firstName;
    string secondName;
    string surname;
    bool gender;        // true = Male, false = Female
    string dob;
    double salary;

public:
    Employee(string id, string fName, string sName, string sur, bool g, string d, double sal) {
        empID = id;
        firstName = fName;
        secondName = sName;
        surname = sur;
        gender = g;
        dob = d;
        salary = sal;
    }

    void show_employee() {
        cout << "\n--- EMPLOYEE DETAILS ---" << endl;
        cout << "ID NUMBER: " << empID << endl;
        cout << "FIRST NAME: " << firstName << endl;
        cout << "SECOND NAME: " << secondName << endl;
        cout << "SURNAME: " << surname << endl;
        cout << "GENDER: " << (gender ? "M" : "F") << endl;
        cout << "DATE OF BIRTH: " << dob << endl;
        cout << "BASIC SALARY (Ksh): " << salary << endl;
    }

    friend double compute_pension(Employee e);
};

double compute_pension(Employee e) {
    return 0.05 * e.salary;
}

int main() {
    string id, fName, sName, sur, dob;
    char gChar;
    double sal;

    cout << "\n ADD EMPLOYEE DETAILS " << endl;
    cout << "ENTER ID NUMBER: ";
    cin >> id;
    cout << "ENTER FIRST NAME: ";
    cin >> fName;
    cout << "ENTER SECOND NAME: ";
    cin >> sName;
    cout << "ENTER SURNAME: ";
    cin >> sur;
    cout << "ENTER GENDER (M or F): ";
    cin >> gChar;
    cout << "ENTER DATE OF BIRTH (DD-MM-YYYY): ";
    cin >> dob;
    cout << "ENTER BASIC SALARY IN KSH: ";
    cin >> sal;

    bool gBool = (gChar == 'M' || gChar == 'm');

    Employee emp_obj(id, fName, sName, sur, gBool, dob, sal);

    emp_obj.show_employee();
    cout << "PENSION CONTRIBUTION (5%): " << compute_pension(emp_obj) << " KSH" << endl;

    return 0;
}
