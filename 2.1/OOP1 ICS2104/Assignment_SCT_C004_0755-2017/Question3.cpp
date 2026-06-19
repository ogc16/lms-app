#include <iostream>
#include <string>
using namespace std;

class Voter {
private:
    string voterCardID;
    string nationalID;
    string firstName;
    string middleName;
    string surname;
    string pollingStation;
    string dateOfBirth;
    string gender;

public:
    void set_voter(string vID, string nID, string fName, string mName, string sName,
                   string station, string dob, string g) {
        voterCardID = vID;
        nationalID = nID;
        firstName = fName;
        middleName = mName;
        surname = sName;
        pollingStation = station;
        dateOfBirth = dob;
        gender = g;
    }

    void display() {
        cout << "Voter Card ID: " << voterCardID << endl;
        cout << "National ID: " << nationalID << endl;
        cout << "Name: " << firstName << " " << middleName << " " << surname << endl;
        cout << "Polling Station: " << pollingStation << endl;
        cout << "Date of Birth: " << dateOfBirth << endl;
        cout << "Gender: " << gender << endl;
    }
};

int main() {
    Voter v1;
    string vID, nID, fName, mName, sName, station, dob, g;

    cout << "Enter Voter Card ID: ";
    cin >> vID;
    cout << "Enter National ID: ";
    cin >> nID;
    cout << "Enter First Name: ";
    cin >> fName;
    cout << "Enter Middle Name: ";
    cin >> mName;
    cout << "Enter Surname: ";
    cin >> sName;
    cout << "Enter Polling Station: ";
    cin >> station;
    cout << "Enter Date of Birth (dd-mm-yyyy): ";
    cin >> dob;
    cout << "Enter Gender: ";
    cin >> g;

    v1.set_voter(vID, nID, fName, mName, sName, station, dob, g);

    cout << "\n--- Voter Details ---\n";
    v1.display();

    return 0;
}
