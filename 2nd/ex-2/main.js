/*********** dodać 25,2 + 13,8
var add = "25,2 + 13,8";

add.replace(/,/g, '.' );
add.replace(/[^0-9\.]/g,''); // usuwa znaki typu ...
**************************************
/*********** telefon z zerem lub bez (może byćz numerem kierunkowym)

/^(((00)|\+)[0-9]{1,3})?0?[0-9]{9}$ //wersja szeroka
/^0?\d{9}$/; //telefon z zerem lub bez, $-od końca, ?-moze wystapić
**************************************
/***********kod pocztowy

\d{2}[-]?\d{3}
**************************************
/***********nazwa domeny

(https::\/\/)?(w{3}\.)?[a-z]+|.p/ //?????????????
[a-z]+\.[a-z]+@[a-z]+\.pl$
**************************************
/*********** poprawność adresu email

[a-z]+\.[a-z]+@domena\.pl
**************************************
/***********  z dowolnego tekstu wyswietlic wyrazy które 
// mają co najmniej 5 liter i nie zawierają znaków interpunkcyjnych

var str = "Cras id wisi a urna. Nulla gravida at, quam. Nam purus. Proin non felis. Mauris a urna. Pellentesque mollis eros ut nulla. Curabitur elit. Curabitur fringilla sed, aliquet ipsum. Donec at libero. Aliquam at lacus ultrices sit amet sapien magna sit amet, consectetuer adipiscing vitae, velit. Cras lorem velit suscipit dui imperdiet lectus blandit suscipit, risus vel lorem tempus enim porttitor egestas. Aenean massa quis lacus. Aenean ac quam ut ante. Vestibulum tempus. Quisque in dictum sapien et luctus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec tristique id, mattis ac, fringilla orci. Donec fermentum wisi, aliquam euismod.";
//???????????????var wzor = /[^ .,:;]{5,}$/;
var wzor = /^[a-Z]{5,}$/;
var znalezione = str.match(wzor);
//console.log(znalezione.length);
console.log(znalezione);
for (var i in znalezione)
	console.log(znalezione[i]);
// ********************************
/*********** wywalić wszystkie cyfry z ciągu
var str =  "dfd8787dsds89s8ds8s9ds7sd"

var x = str.replace(/[0-9]/g,'');
console.log(x); */

// ********************************
/***********pobrac daty i wyswietlic od najnowszej oraz wyswietlic daty z xx wieku
var str = " Wysoka Izbo, jest potrzeba uregulowania tzw. postępowania immunitetowego, 1000 ponieważ od 1987 r., czyli od kiedy weszła w życie ustawa o Rzeczniku Praw Obywatelskich, takich przepisów praktycznie nie było. Również ustawy wcześniejsze, ustawa o Najwyższej Izbie Kontroli czy nawet ustawa o wykonywaniu 2009 mandatu posła i senatora, nie określają szczególnego alembiku postępowania. W tym zakresie w przedłożeniu poselskim uzupełniamy to, chociaż uzupełniamy w najmniejszym stopniu, bo w ustawie poselsko-senatorskiej te przepisy były jak najbardziej 2001 rozbudowane. Chcę wyraźnie podkreślić, " 

var wzor = /(19[0-9]{2}|2[0-9]{3})/g;
var znalezione = str.match(wzor);
for (var i in znalezione)
	console.log(znalezione[i]);
//??var re = /(19[0-9]{2})|(2[0-9]{3})/g;
//??var results = str.match(re);
//??console.log(results.sort());
// ** lub
var xxwiek = /19[0-9]{2}/g; 
var results = str.match(xxwiek);
console.log(results.sort());

//*****************************
//************* poprawnosc iban, znak kraju jest opcjonalny

var iban = "PL61 1090 1014 0000 0712 1891 2874";
var wzór = /[A-Z]{2}?[0-9]{2}(\s[0-9]{4}){6}/; 

//*****************************
//************* zamienia kolejność - imie i nazwisko na nazwisko i imie

var str = "John Smith";
var re = /(\w+)\s(\w+)/;
var newstr = str.replace(re, "$2, $1");
console.log(newstr);  */

/** lub

console.log(str);
console.log( str.replace(/([A-z]+)\s([A-z]+)/, "$2 $1"));


//*****************************
//************ w tekscie zmaskowac nr telefonu zastepujac 4 ostatnie gwiazdkami

var str = "lorem ipsum 555555555 lorem ipsum 555555555lorem ipsum 555555555"

wzor = /([0-9]{5})[0-9]{4}/g;
str.replace(wzor, $1****);

//lub

console.log(str);
console.log( str.replace(/([0-9]{5})[0-9]{4}/, "$1****"));



// praca domowa - prosty tester haseł ( i jego siły)
// a. by zawierał przynajmniej x znaków np 8
// b. by zaiwrał przynajmniej jedną mała i dużą litere
// c. by zaiwerał co najmniej 2 cyfry lub znaki specjalne

var haslo = "superPassword12%";

var wzor = ("^((?=.*[a-z])(?=.*[A-Z])((?=.*[!@#$%])|(?=.[0-9]){2})(?=.{8,})");

//(?=.*[a-z]) przynajmniej jedna mała litera
//(?=.*[A-Z]) przynajmniej jedna duża litera
//(?=.{8,}) co najmniej 8 znaków
//((?=.*[!@#$%])|(?=.[0-9]){2}) przynajmniej 2 znaki specjalne lub 2 cyfry
















