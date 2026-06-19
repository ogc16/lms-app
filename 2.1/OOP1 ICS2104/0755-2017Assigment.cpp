#include <iostream>
#include <string>
#include <vector>
using namespace std;

/* ================================
   Question 1: Library Inventory
   ================================ */
class Book {
private:
    string author, title;
    int book_number, price, copies;
public:
    Book(string a, string t, int bn, int p, int c) {
        author = a; title = t; book_number = bn; price = p; copies = c;
    }
    void display() {
        cout << "Book Number: " << book_number << endl;
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "Price: " << price << endl;
        cout << "Copies: " << copies << endl;
        cout << "-----------------------------" << endl;
    }
};
void q1() {
    vector<Book> db;
    int n;
    cout << "\n--- Question 1: Add Books ---\n";
    cout << "Enter number of books: ";
    cin >> n;
    for(int i=0;i<n;i++){
        string a,t; int bn,p,c;
        cout << "\nEnter Author: "; cin >> a;
        cout << "Enter Title: "; cin >> t;
        cout << "Enter Book Number: "; cin >> bn;
        cout << "Enter Price: "; cin >> p;
        cout << "Enter Copies: "; cin >> c;
        db.push_back(Book(a,t,bn,p,c));
    }
    cout << "\n--- Library Inventory ---\n";
    for(auto &b: db) b.display();
}

/* ================================
   Question 2: Vehicle Sales
   ================================ */
class Vehicle {
private:
    string make, model, engineNo;
    double salePrice;
public:
    void set_vehicle(string m,string mo,string e,double p) {
        make=m; model=mo; engineNo=e; salePrice=p;
    }
    double get_profit() { return 0.15*salePrice; }
    void display() {
        cout << "Make: " << make << endl;
        cout << "Model: " << model << endl;
        cout << "Engine No: " << engineNo << endl;
        cout << "Sale Price: " << salePrice << endl;
        cout << "Profit: " << get_profit() << endl;
    }
};
void q2() {
    Vehicle v;
    string m,mo,e; double p;
    cout << "\n--- Question 2: Vehicle Sale ---\n";
    cout << "Enter Make: "; cin >> m;
    cout << "Enter Model: "; cin >> mo;
    cout << "Enter Engine Number: "; cin >> e;
    cout << "Enter Sale Price: "; cin >> p;
    v.set_vehicle(m,mo,e,p);
    v.display();
}

/* ================================
   Question 3: Voter Registration
   ================================ */
class Voter {
private:
    string voterID,nationalID,fName,mName,sName,station,dob,gender;
public:
    void set_voter(string v,string n,string f,string m,string s,string st,string d,string g) {
        voterID=v; nationalID=n; fName=f; mName=m; sName=s; station=st; dob=d; gender=g;
    }
    void display() {
        cout << "Voter Card ID: " << voterID << endl;
        cout << "National ID: " << nationalID << endl;
        cout << "Name: " << fName << " " << mName << " " << sName << endl;
        cout << "Polling Station: " << station << endl;
        cout << "Date of Birth: " << dob << endl;
        cout << "Gender: " << gender << endl;
    }
};
void q3() {
    Voter v;
    string vID,nID,f,m,s,st,d,g;
    cout << "\n--- Question 3: Voter Registration ---\n";
    cout << "Enter Voter Card ID: "; cin >> vID;
    cout << "Enter National ID: "; cin >> nID;
    cout << "Enter First Name: "; cin >> f;
    cout << "Enter Middle Name: "; cin >> m;
    cout << "Enter Surname: "; cin >> s;
    cout << "Enter Polling Station: "; cin >> st;
    cout << "Enter Date of Birth (DD-MM-YYYY): "; cin >> d;
    cout << "Enter Gender: "; cin >> g;
    v.set_voter(vID,nID,f,m,s,st,d,g);
    v.display();
}

/* ================================
   Question 4: Safaricom Bonga Points
   ================================ */
class Subscriber {
private:
    string name,phone;
    double airtime;
public:
    Subscriber(string n,string p,double a){ name=n; phone=p; airtime=a; }
    int compute_bonuspoints() {
        if(airtime>=2000) return 500;
        else if(airtime>=1000) return 300;
        else if(airtime>=500) return 100;
        else if(airtime>=100) return 50;
        else return 0;
    }
    void display() {
        cout << name << " :(PHONE NO:" << phone << "): AWARDED "
             << compute_bonuspoints() << " BONGA POINTS. STAY WITH SAFARICOM. THE BETTER OPTION!" << endl;
    }
};
void q4() {
    string n,p; double a;
    cout << "\n--- Question 4: Safaricom Reward ---\n";
    cout << "Enter Subscriber Name: "; cin.ignore(); getline(cin,n);
    cout << "Enter Phone Number: "; cin >> p;
    cout << "Enter Airtime Amount: "; cin >> a;
    Subscriber s(n,p,a);
    s.display();
}

/* ================================
   Question 5: Employee & Pension
   ================================ */
struct Date { int day,month,year; };

class Employee {
private:
    string empID,fName,sName,sur;
    bool gender; // true=M, false=F
    Date dob;
    double salary;
public:
    Employee(string id,string f,string s,string su,bool g,Date d,double sal) {
        empID=id; fName=f; sName=s; sur=su; gender=g; dob=d; salary=sal;
    }
    void show_employee() {
        cout << "\n--- EMPLOYEE DETAILS ---" << endl;
        cout << "ID NUMBER: " << empID << endl;
        cout << "FIRST NAME: " << fName << endl;
        cout << "SECOND NAME: " << sName << endl;
        cout << "SURNAME: " << sur << endl;
        cout << "GENDER: " << (gender?"M":"F") << endl;
        cout << "DATE OF BIRTH: " << dob.day << "-" << dob.month << "-" << dob.year << endl;
        cout << "BASIC SALARY (Ksh): " << salary << endl;
    }
    friend double compute_pension(Employee e);
};
double compute_pension(Employee e){ return 0.05*e.salary; }

void q5() {
    string id,f,s,sur; char gChar; Date d; double sal;
    cout << "\n--- Question 5: Employee Details ---\n";
    cout << "Enter ID Number: "; cin >> id;
    cout << "Enter First Name: "; cin >> f;
    cout << "Enter Second Name: "; cin >> s;
    cout << "Enter Surname: "; cin >> sur;
    cout << "Enter Gender (M or F): "; cin >> gChar;
    cout << "Enter Date of Birth (DD-MM-YYYY): "; cin >> d.day >> d.month >> d.year;
    cout << "Enter Basic Salary in Ksh: "; cin >> sal;
    bool gBool=(gChar=='M'||gChar=='m');
    Employee emp(id,f,s,sur,gBool,d,sal);
    emp.show_employee();
    cout << "PENSION CONTRIBUTION (5%): " << compute_pension(emp) << " Ksh" << endl;
}

/* ================================
   Main Driver
   ================================ */
int main() {
    cout << "\n=== JKUAT OOP Assignment I & II ===\n";
    q1();
    q2();
    q3();
    q4();
    q5();
    return 0;
}
