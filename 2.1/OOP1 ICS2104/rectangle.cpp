#include <iostream>
using namespace std;

class Rectangle {
 public:
    // initialize length and width
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }
    // area
    void computeArea() {
        int area = length * width;
        cout << "Area of rectangle: " << area << endl;
    }
    // perimeter
    void computePerimeter() {
        int perimeter = 2 * (length + width);
        cout << "Perimeter of rectangle: " << perimeter << endl;
    }
};

int main() {
    // Create a Rectangle object with length 10 and width 5
    Rectangle rect(10, 5);

    // Call member functions
    rect.computeArea();
    rect.computePerimeter();

    return 0;
}
