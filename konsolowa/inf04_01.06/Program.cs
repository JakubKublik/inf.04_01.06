using System;
using System.Linq;

string[] small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
string[] capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
string[] diacritics = ["ą", "ę", "ł", "ń", "ó", "ś", "ż", "ź", "Ą", "Ę", "Ł", "Ń", "Ó", "Ś", "Ż", "Ź"];
string[] digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
string[] special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

string[] result = GetRandomCharacters(small, capital, diacritics, digits, special);

Console.WriteLine("Wylosowane elementy: " + string.Join(" ", result));
Console.WriteLine("Ciąg znaków: " + string.Join("", result));

/*
nazwa funkcji: GetRandomCharacters
opis funkcji:  Losuje określoną liczbę znaków z pięciu podanych tablic (małe litery, wielkie litery, diakrytyczne, cyfry, znaki specjalne) i miesza je w losowej kolejności.
parametry:     params string[][] arrays
zwracany typ i opis: string[] - tablica zawierająca 12 wymieszanych losowo znaków
autor:         00000000000
*/
string[] GetRandomCharacters(params string[][] arrays)
{
    Random rand = new Random();
    int[] counts = [3, 3, 2, 2, 2];

    return arrays
        .SelectMany((arr, index) => arr.OrderBy(_ => rand.Next()).Take(counts[index]))
        .OrderBy(_ => rand.Next())
        .ToArray();
}