#include <iostream>
using namespace std;

int main() {
    string s;
    cin >> s;

    int pos = s.find('.');

    string first = s.substr(pos + 1); // after .
    string second = s.substr(0, pos); // before .

    // Remove leading zeros
    int i = 0;
    while (i < first.size() - 1 && first[i] == '0') {
        i++;
    }

    cout << first.substr(i) << "." << second << endl;

    return 0;
}