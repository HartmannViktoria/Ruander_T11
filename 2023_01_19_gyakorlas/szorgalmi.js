//1. Random szám 0 és 1 között
document.write("1.feladat: Random szám 0 és 1 között:<br>");
function RandomSzam_0_1() {
	let generaltSzam=Math.random();
    return generaltSzam;
}
document.write(RandomSzam_0_1());
document.write("<hr>");

//2. Random szám 0 és 100 között
document.write("2.feladat: Random szám 0 és 100 között:<br>");
function RandomSzam_0_100() {
	let generaltSzam=Math.random()*100;
    return generaltSzam;
}
document.write(RandomSzam_0_100());
document.write("<hr>");

//3. Random egész szám 0 és 100 között
document.write("3.feladat: Random egész szám 0 és 100 között:<br>");
function RandomEgeszSzam_0_100() {
	let generaltSzam=Math.round(Math.random()*100);
    return generaltSzam;
}
document.write(RandomEgeszSzam_0_100());
document.write("<hr>");

//4. Intervallumban lévő random szám -10 és 20 között
document.write("4.feladat: Intervallumban lévő random szám -10 és 20 között:<br>");
function RandomSzam_neg10_20() {
	let generaltSzam=(Math.random()*30)-10;
    return generaltSzam;
}
document.write(RandomSzam_neg10_20());
document.write("<hr>");

//5. Intervallumban lévő egész random szám -10 és 20 között
document.write("5.feladat: Intervallumban lévő egész random szám -10 és 20 között:<br>");
function RandomEgeszSzam_neg10_20() {
	let generaltSzam=Math.round((Math.random()*30)-10);
    return generaltSzam;
}
document.write(RandomEgeszSzam_neg10_20());
document.write("<hr>");

//6. Kör kerülete és területe
document.write("6.feladat: Kör kerülete és területe:<br>");
function KorKerulet(radius){
	let kerulet=2*radius*Math.PI;
    	return kerulet;
		}
function KorTerulet(radius){
	let terulet=radius*radius*Math.PI;
		return terulet;
}
document.write(KorKerulet(1)+"<br>");
document.write(KorKerulet(5)+"<br>");
document.write(KorKerulet(13)+"<br>");
document.write(KorKerulet(21)+"<br>");
document.write(KorKerulet(111)+"<br>");
document.write(KorTerulet(1)+"<br>");
document.write(KorTerulet(5)+"<br>");
document.write(KorTerulet(13)+"<br>");
document.write(KorTerulet(21)+"<br>");
document.write(KorTerulet(111));
document.write("<hr>");

//7. Négyzet kerülete és területe
document.write("7.feladat: Négyzet kerülete és területe:<br>");
function NegyzetKeruletTerulet(aOldal){
	let kerulet=aOldal*4;
    let terulet=aOldal*aOldal;
	document.write (`A(z) ${aOldal} egységnyi oldalú négyzet kerülete: ${kerulet}<br>`);
	document.write (`A(z) ${aOldal} egységnyi oldalú négyzet területe: ${terulet}<br>`);
}
NegyzetKeruletTerulet(1);
NegyzetKeruletTerulet(5);
NegyzetKeruletTerulet(13);
NegyzetKeruletTerulet(21);
NegyzetKeruletTerulet(111);
document.write("<hr>");

//8. Négyzet kerülete és területe - Paraméteres függvény
document.write("8.feladat: Négyzet kerülete és területe - Paraméteres függvény:<br>");
function NegyzetKerulet(aOldal){
	let kerulet=(aOldal*4)
    return kerulet;
}
function NegyzetTerulet(aOldal){
	let terulet=(aOldal*aOldal)
    return terulet;
}
function Kiirato(szoveg, szam){
	document.write(szoveg+":"+szam+"<br>");
}
Kiirato("A 5 oldalú négyzet kerülete",NegyzetKerulet(5));
Kiirato("A 5 oldalú négyzet területe",NegyzetTerulet(5));
document.write("<hr>");

//9. Páros páratlan random egész szám 0 és 100 között
document.write("9.feladat: Páros páratlan random egész szám 0 és 100 között:<br>");
function ParosParatlan_0_100(){
	let generaltSzam=Math.round(Math.random()*100);   
    if(generaltSzam%2==0){
    	document.write(`A(z) ${generaltSzam} szám páros`);
     }     
     else{
     	document.write(`A(z) ${generaltSzam} szám páratlan`);
     }
}
ParosParatlan_0_100();  
document.write("<hr>");

//10. Pozitív Negatív Nulla -10 és +10 között
document.write("10.feladat: Pozitív Negatív Nulla -10 és +10 között:<br>");
function PozNegNull_neg10_10(){
	let generaltSzam=Math.round((Math.random()*20)-10);  	
  	if(generaltSzam>0){
	document.write(`A(z) ${generaltSzam} pozitív`);
	}
	else if(generaltSzam<0){
	document.write(`A(z) ${generaltSzam} negatív`);
	}
	else{
	document.write(`A(z) ${generaltSzam} szám nulla`);
	}	
}
PozNegNull_neg10_10();
document.write("<hr>");

//11. Kisebb Nagyobb Egyenlő random egész szám 0-10 között
document.write("11.feladat: Kisebb Nagyobb Egyenlő random egész szám 0-10 között:<br>");
function KisNagyEgy_0_10 (){
	let generaltSzamEgy=Math.round(Math.random()*10);
    let generaltSzamKetto=Math.round(Math.random()*10);
    
    if(generaltSzamEgy>generaltSzamKetto){
	document.write("A(z) "+generaltSzamEgy+" a nagyobb<br>");
	document.write("A(z) "+generaltSzamKetto+" a kisebb");
	}
	else if(generaltSzamEgy<generaltSzamKetto){
	document.write("A(z) "+generaltSzamEgy+" a kisebb<br>");
	document.write("A(z) "+generaltSzamKetto+" a nagyobb");
	}
	else{
	document.write(`A két szám: ${generaltSzamEgy} és ${generaltSzamKetto} egyenlő!`);
	}
}
KisNagyEgy_0_10 ();
document.write("<hr>");

//12. Szerkeszthető-e a háromszög?
document.write("12.feladat: Szerkeszthető-e a háromszög?:<br>");
function SzerkeszthetoHaromszog(aOldal, bOldal, cOldal){
	if(aOldal+bOldal>cOldal && bOldal+cOldal>aOldal && aOldal+cOldal>bOldal){
		document.write(`A(z) ${aOldal},${bOldal},${cOldal} oldalú háromszög megszerkeszthető<br>`);
	}
	else{
		document.write(`A(z) ${aOldal},${bOldal},${cOldal} oldalú háromszög NEM szerkeszthető meg<br>`);
	}
}
SzerkeszthetoHaromszog(1,2,5);
SzerkeszthetoHaromszog(7,12,25);
SzerkeszthetoHaromszog(11,27,53);
SzerkeszthetoHaromszog(71,22,58);
SzerkeszthetoHaromszog(19,82,25);
document.write("<hr>");

//13. Szorgalmi jegy szöveges értékelése
document.write("13.feladat: Szorgalmi jegy szöveges értékelése:<br>");
function SzorgalmiJegy(jegy){
	if(jegy==5){
	document.write(`A(z) ${jegy} érdemjegy alapján a tanuló szorgalma :Példás<br>`);
	}
	else if(jegy==4){
	document.write(`A(z) ${jegy} érdemjegy alapján a tanuló szorgalma :Jó<br>`);
	}
	else if(jegy==3){
	document.write(`A(z) ${jegy} érdemjegy alapján a tanuló szorgalma :Változó<br>`);
	}
	else if(jegy==2){
	document.write(`A(z) ${jegy} érdemjegy alapján a tanuló szorgalma :Hanyag<br>`);
	}
	else{
	document.write(`A(z) ${jegy} érdemjegy alapján a tanuló szorgalma :Hibás adat!<br>`);
	}
}
SzorgalmiJegy(1);
SzorgalmiJegy(2);
SzorgalmiJegy(3);
SzorgalmiJegy(4);
SzorgalmiJegy(5);
SzorgalmiJegy(6);
document.write("<hr>");

//14. Testtömegindex
document.write("14.feladat: Testtömegindex:<br>");
function BMI(kilogramm, meter){
	let TTI=kilogramm/(meter*meter);
    if(TTI<16){
	document.write(`${TTI} esetén, súlyos soványság<br>`);
	}
   else if(TTI<17){
	document.write(`${TTI} esetén, mérsékelt soványság<br>`);
	}
	else if(TTI<18.5){
	document.write(`${TTI} esetén, enyhe soványság<br>`);
	}
	else if(TTI<25){
	document.write(`${TTI} esetén, normális testsúly<br>`);
	}
	else if(TTI<30){
	document.write(`${TTI} esetén, túlsúlyos<br>`);
	}
	else if(TTI<35){
	document.write(`${TTI} esetén, I. fokú elhízás<br>`);
	}
	else if(TTI<40){
	document.write(`${TTI} esetén, II. fokú elhízás<br>`);
	}
	else{
	document.write(`${TTI} esetén, III. fokú (súlyos) elhízás<br>`);
	} 
}
BMI(58, 1.6);
BMI(80, 1.79);
BMI(19, 1,16);
document.write("<hr>");

//15. Érdemjegy szöveges értékelés
document.write("15.feladat: Érdemjegy szöveges értékelés:<br>");
function ErdemJegy(jegy){
	if(jegy==5){
	document.write(`${jegy} érdemjegy esetén: Jeles<br>`);
	}
	else if(jegy==4){
	document.write(`${jegy} érdemjegy esetén: Jó<br>`);
	}
	else if(jegy==3){
	document.write(`${jegy} érdemjegy esetén: Közepes<br>`);
	}
	else if(jegy==2){
	document.write(`${jegy} érdemjegy esetén: Elégséges<br>`);
	}
	else if(jegy==1){
	document.write(`${jegy} érdemjegy esetén: Elégtelen<br>`);
	}
	else{
	document.write(`${jegy} érdemjegy esetén: Hibás adat!<br>`);
	}
}
ErdemJegy(0);
ErdemJegy(1);
ErdemJegy(2);
ErdemJegy(3);
ErdemJegy(4);
ErdemJegy(5);
ErdemJegy(6);
document.write("<hr>");

//16. Koordináta rendszer
document.write("16.feladat: Koordináta rendszer:<br>");
function KoordinataRendszer(xKoordinata,yKoordinata){
	if(xKoordinata>0 && yKoordinata>0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta az első síknegyedben van.<br>`);
	}
	else if(xKoordinata<0 && yKoordinata>0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta a második síknegyedben van.<br>`);
	}
	else if(xKoordinata<0 && yKoordinata<0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta a harmadik síknegyedben van.<br>`);
	}
	else if(xKoordinata>0 && yKoordinata<0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta a negyedik síknegyedben van.<br>`);
	}
	else if(xKoordinata==0 && yKoordinata==0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta az origóban van.<br>`);
	}
	else if(yKoordinata==0){
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta az x tengelyen van.<br>`);
	}
	else{
	document.write(`A ${xKoordinata}, ${yKoordinata} koordináta az y tengelyen van.<br>`);
	}
}
KoordinataRendszer(5,3);
KoordinataRendszer(-5,3);
KoordinataRendszer(-5,-3);
KoordinataRendszer(5,-3);
KoordinataRendszer(0,0);
KoordinataRendszer(5,0);
KoordinataRendszer(0,3);
document.write("<hr>");

//17. Másodfokú egyenlet megoldóképlet
document.write("17.feladat: Másodfokú egyenlet megoldóképlet:<br>");
function MasodfokuEgyenletMegoldokeplet(a,b,c){
	document.write(`A vizsgált másodfokú egyenlet: ${a}x<sup>2</sup>+(${b})+(${c})`);
	if(a==0){
	document.write("Az egyenlet nem másodfokú");
	}
    else{
	let d=(b*b)-(4*a*c);
	if(d<0){
    	document.write("Nincs megoldás<br>");
    }
    else if(d==0){
    	document.write("Egy megoldása van:<br>");
        let x1=-b/(2*a);
        document.write("x1= "+x1+"<br>");
    }
    else{
    	document.write("Két megoldás van:<br>");
        let x1=(-b+Math.sqrt(d))/(2*a);
        let x2=(-b-Math.sqrt(d))/(2*a);
        document.write("x1= "+x1+"<br>");
        document.write("x1= "+x2+"<br>");
    }
	}
}
MasodfokuEgyenletMegoldokeplet(2,3,4);
MasodfokuEgyenletMegoldokeplet(2,5,3);
MasodfokuEgyenletMegoldokeplet(3,6,3);
document.write("<hr>");

//18. Számtani vagy mértani sorozat?
document.write("18.feladat: Számtani vagy mértani sorozat?<br>");
function SzamtaniVagyMertani(szam1,szam2,szam3){
	if(((szam2-szam1)==(szam3-szam2)) &&((szam2/szam1)==(szam3/szam2))){
	document.write(`A ${szam1}, ${szam2}, ${szam3} sorozat számtani és mértani<br>`);
	}
	else if((szam2-szam1)==(szam3-szam2)){
	document.write(`A ${szam1}, ${szam2}, ${szam3} sorozat számtani<br>`);
	}
	else if((szam2/szam1)==(szam3/szam2)){
	document.write(`A ${szam1}, ${szam2}, ${szam3} sorozat mértani<br>`);
	}
	else{
	document.write(`A ${szam1}, ${szam2}, ${szam3} sorozat NEM számtani és NEM mértani!<br>`);
	}
}
SzamtaniVagyMertani(5,5,5);
SzamtaniVagyMertani(0,1,2);
SzamtaniVagyMertani(2,4,8);
SzamtaniVagyMertani(1,15,27);
document.write("<hr>");

//19. Számok 1-10ig
document.write("19.feladat: Számok 1-10ig<br>");
function SzamokEgytolTizig(){
	for(let i=1;i<=10;i++){
	document.write(`${i},`);
	}
}
SzamokEgytolTizig();
document.write("<hr>");

//20. Páros számok 1-100ig
document.write("20.feladat: Páros számok 1-100ig<br>");
function ParosSzamok_1_100(){
	for(let i=2;i<=100;i+=2){
	document.write(`${i},`);
	}
}
ParosSzamok_1_100();
document.write("<hr>");

//21. Számok visszafelé 50-től 0-ig
document.write("21.feladat: Számok visszafelé 50-től 0-ig<br>");
function SzamokVisszafele_50_0(){
	for(let i=50;i>=0;i--){
	document.write(`${i},`);
	}
}
SzamokVisszafele_50_0();
document.write("<hr>");

//22. Ötször fusson le for ciklussal: szeretem a programozást
document.write("22.feladat: Ötször fusson le for ciklussal: szeretem a programozást<br>");
function OtszorForCiklussal(){
	for(let i=0; i<5;i=i+1){
	document.write("Szeretem a programozást (i értéke: "+i+")<br>");
	}
}
OtszorForCiklussal();
document.write("<hr>");

//23. Hatszor fusson le for ciklussal: szeretem a programozást
document.write("23.feladat: Hatszor fusson le for ciklussal: szeretem a programozást<br>");
function HatszorForCiklussal(){
	for(let i=0; i<=5;i=i+1){
	document.write("Szeretem a programozást (i értéke: "+i+")<br>");
	}
}
HatszorForCiklussal();
document.write("<hr>");

//24. LNKO - legnagyobb közös osztó
document.write("24.feladat: LNKO - legnagyobb közös osztó<br>");
function LNKO(szamEgy,szamKetto){
	for(let i=2;i<=szamEgy;i++){
    document.write("teszt ciklus változó értéke:"+i+"<br>");
		if(szamEgy%i==0 && szamKetto%i==0){
    	lnko=i;
   		}
	}
	document.write(`A ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}`);
}
LNKO(12,24);
document.write("<hr>");

//25. Relatív prím
document.write("25.feladat: Relatív prím<br>");
function RelativPrim(szamEgy,szamKetto){
	for(let i=2;i<=szamEgy;i++){
		document.write("teszt ciklus változó értéke:"+i+"<br>");
    	if(szamEgy%i==0 && szamKetto%i==0){
    	lnko=i;
    	}
	}
    let lnko=1;
	if(lnko==1){
	document.write(`A ${szamEgy} és ${szamKetto} Relatív prím`);
	}
	else {
	document.write(`A ${szamEgy} és ${szamKetto} NEM relatív prím, legnagyobb közös osztója: ${lnko}`);
	}
}
RelativPrim(8,9)
document.write("<hr>");

//26. Szintfelmérő 1.feladat: Készíts egy olyan kódot, amely kiírja az adott fájl készítőjének a
// - nevét
// - csoportjának azonosítóját
//- HTML, CSS és jelenlegi JS tananyagot mennyire érti 1-100-ig
document.write("26.feladat: Szintfelmérő 1.feladat: Készíts egy olyan kódot,...<br>");
function ElsoFeladat(){
	document.write("Hartmann Viktoria<br>");
	document.write("#11Team<br>");
	document.write("html:90<br>");
	document.write("css:900<br>");
	document.write("javascript:60<br>");
}
ElsoFeladat();
document.write("<hr>");

//27. Szintfelmérő 2.feladat: Szám és annak kitevője, hatványra emelés
document.write("27.feladat: Szám és annak kitevője, hatványra emelés<br>");
function Hatvany(szam, kitevo){
	let eredmeny=szam**kitevo
    document.write(`${szam}<sup>${kitevo}</sup> = ${eredmeny}`);
}
Hatvany(2,2);
document.write("<hr>");

//28. Szintfelmérő 3.feladat: Adott intervallumban páros szám generálása
document.write("28.feladat: Szintfelmérő 3.feladat: Adott intervallumban páros szám generálása<br>"); 
function generaltParos(also,felso){
	let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
	if(generaltParosSzam%2==0){
	document.write("A generált random szám:"+generaltParosSzam);
	}
	else if(generaltParosSzam!=felso){
	document.write(`A generált random szám: ${generaltParosSzam+1}`);
	}
	else{
	document.write(`A generált random szám: ${generaltParosSzam-1}`);
	}
}    
generaltParos(1,200);
document.write("<hr>");

//29. Szintfelmérő 4.feladat: Életkori besorolás
document.write("29.feladat: Szintfelmérő 4.feladat: Életkori besorolás<br>");
function Besorolas(kor){
	if(kor>=0 && kor<6){
 	document.write(`${kor} évesen kisgyermek korban vagy.<br>`);
	}
	else if(kor>=6 && kor<12){
 	document.write(`${kor} évesen gyermekkorban vagy.<br>`);
	}
	else if(kor>=12 && kor<16){
 	document.write(`${kor} évesen serdülő korban vagy.<br>`);
	}
	else if(kor>=16 && kor<20){
 	document.write(`${kor} évesen ifjúkorban vagy.<br>`);
	}
	else if(kor>=20 && kor<30){
 	document.write(`${kor} évesen fiatal felnőttkorban vagy.<br>`);
	}
	else if(kor>=30 && kor<60){
 	document.write(`${kor} évesen felnőtt korban vagy.<br>`);
	}
	else if(kor>=60 && kor<=120){
 	document.write(`${kor} évesen aggkorban vagy.<br>`);
	}
	else{
 	document.write(`${kor} érték hibás adat!<br>`);
	}
}
Besorolas(-1);
Besorolas(2);
Besorolas(11);
Besorolas(15);
Besorolas(18);
Besorolas(25);
Besorolas(42);
Besorolas(65);
Besorolas(121);
document.write("<hr>");

//30. Szintfelmérő 5.feladat: Adott osztó osztja-e a számot maradék nélkül?
document.write("30.feladat: Szintfelmérő 5.feladat: Adott osztó osztja-e a számot maradék nélkül?<br>");
function OsztoVizsgalat(vizsgalandoSzam,oszto){
	if(vizsgalandoSzam%oszto==0){
	document.write(`A(z) ${oszto} osztója a ${vizsgalandoSzam} értéknek.<br>`);
	}
	else{
	document.write(`A(z) ${oszto} NEM osztója a ${vizsgalandoSzam} értéknek.`);
	}
}
OsztoVizsgalat(10,5);
OsztoVizsgalat(10,3);
document.write("<hr>");

//31. Szintfelmérő 6.feladat: Az első 10 négyzetszám kiíratása
document.write("31.feladat: Szintfelmérő 6.feladat: Az első 10 négyzetszám kiíratása<br>");
function NegyzetSzam(){
	for(let i=1;i<=10;i++){
	document.write(`${i*i},`);
	}
}
NegyzetSzam();
document.write("<hr>");

//32. Progtételek: Átlagszámítás tétele
document.write("32.feladat: Progtételek: Átlagszámítás tétele<br>");
function AtlagszamitasTetele(){
	let tomb=[1,2,3,4,5];
    let osszeg= 0;
    
    for (let i=0; i<tomb.length; i++){
    	osszeg=osszeg+tomb[i]
	}
    document.write("A tömb eleminek összege:"+osszeg);
	document.write("<br>A tömb eleminek átlaga:"+osszeg/tomb.length);
}
AtlagszamitasTetele();
document.write("<hr>");

//33. Progtételek: Kiválogatás tétele
document.write("33.feladat: Progtételek: Kiválogatás tétele<br>");
function KivalogatasTetele(){
	let tomb= [1,2,5,7,9,12,15,19,31,34];
    document.write("")
	document.write("A tömbben lévő páros elemek listája:");
	for(let i=0;i<tomb.length;i++){
	 	if(tomb[i]%2==0)   {
    	document.write(tomb[i]+",");
    	}
	}
}
KivalogatasTetele();
document.write("<hr>");

//34. Progtételek: Maximum kiválasztás tétele
document.write("34.feladat: Progtételek: Maximum kiválasztás tétele<br>");
function MaxKivalasztas(){
	let tomb= [1,5,4,16,2,18];
	let maxErtek=tomb[0];
	for(let i=1;i<tomb.length;i++){
		if(tomb[i]>maxErtek){
    	maxErtek=tomb[i];
    	}
	}
document.write("A tömb legnagyobb elemének értéke: "+maxErtek);
	let maxIndex=0;
	for(let i=1;i<tomb.length;i++){
		if(tomb[i]>tomb[maxIndex])
    	{
    		maxIndex=i;
    	}
	}
document.write("<br>A tömb legnagyobb elemének indexe: "+maxIndex);
}
MaxKivalasztas();
document.write("<hr>");

//35. Progtételek: Megszámlálás tétele
document.write("35.feladat: Progtételek: Megszámlálás tétele<br>");
function Megszamlalas(){
	tomb=[1,2,3,4,5,6];
    let n=tomb.length;
    let db=0
	for(let i=0;i<tomb.length;i++){
		if(tomb[i]%2==0){
    		db++;
    	}
	}
document.write("A tömb páros eleminek mennyisége: "+db);
}
Megszamlalas();
document.write("<hr>");

//36. Progtételek: Minimum kiválasztás tétele
document.write("36.feladat: Progtételek: Minimum kiválasztás tétele<br>");
function MinKivalasztas(){
	tomb=[1,2,3,4,5];
    let minErtek=tomb[0];
    for(let i=1;i<tomb.length;i++){
		if(tomb[i]<minErtek){
    	minErtek=tomb[i];
    	}
	}
document.write("A tömb legkisebb elemének értéke: "+minErtek);
	let minIndex=0;
	for(let i=1;i<tomb.length;i++){
		if(tomb[i]<tomb[minIndex]){
    	minIndex=i;
    	}
	}
document.write("<br>A tömb legkisebb elemének indexe: "+minIndex);
} 
MinKivalasztas();
document.write("<hr>");

//37. Progtételek: Összegzés tétele
document.write("37.feladat: Progtételek: Összegzés tétele<br>");
function Osszegzes(){
	tomb=[1,2,3,4,5]
	let osszeg=0;
	for(let i=0;i<tomb.length;i++){
		osszeg=osszeg+tomb[i]; 
	}
document.write("A tömb eleminek összege:"+osszeg);
}
Osszegzes();
document.write("<hr>");

//38. LKKT - Legkisebb közös többszörös
document.write("38.feladat: Legkisebb közös többszörös:");
function LKKT(szamEgy,szamKetto){
	let lnko=1;
		for(let i=2;i<=szamEgy;i++){
			if(szamEgy%i==0 && szamKetto%i==0){
			lnko=i;
			}
		}
	document.write(`A(z) ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}<br>`);
	
	
	let lkkt=(szamEgy*szamKetto)/(lnko);
	document.write(`A(z) ${szamEgy} és ${szamKetto} legkisebb közös többszöröse: ${lkkt}<br>`);
	}
LKKT(1,5);
LKKT(5,20);
document.write("<hr>");

//39. Progtételek: Eldöntés tétele
document.write("39.feladat: Eldöntés tétele:");
function Eldontes(){
	tomb=[1,2,3,4,5];
    let eldontendo=2;
    let n=tomb.length;
    for(let i=0;tomb[i]!=eldontendo;i++){
    	document.write(`${tomb} tömb elemei tartalmazzák a következő számot? ${eldontendo}<br>`)
    	if(i<n){
        document.write("Van ilyen szám a tömbben.")
        }
        else{
        document.write("Nincs ilyen szám a tömbben.")
        }
    }
 }
Eldontes();
document.write("<hr>");

//40. Progtételek: Keresés tétele
document.write("40.feladat: Progtétel: Keresés tétele<br>")
function Kereses(){
	tomb=[1,2,3,4,5];
    let n=tomb.length;
    let keresettSzam=2;
    for(let i=0;tomb[i]!=keresettSzam;i++){
    document.write(`Hol található a ${keresettSzam} a következő tömbben? ${tomb}<br>`);
    	if(i<n){
        document.write("Van ilyen elem a tömbben, helye:"+(i+1));
        }
        else{
        document.write("Nincs ilyen elem.");
        }
    }
}
Kereses();
document.write("<hr>");

//41. Metszet

let tomb1=[];
let tomb2=[];


for(let i=0;i<5;i++){
	tomb1.push(Math.round(Math.random()*10));
}
for(let i=0;i<5;i++){
	tomb2.push(Math.round(Math.random()*10));
}
document.write("A generált tömbök elemei:");
document.write("<br>Tömb1: ");
for(let i=0;i<tomb1.length;i++){
	document.write(tomb1[i]+",");		
}
document.write("<br>Tömb2: ");
for(let i=0;i<tomb2.length;i++){
	document.write(tomb2[i]+",");
}

//metszet
let metszet=[];


for(let i=0;i<tomb1.length;i++){
	for(let j=0;j<tomb2.length;j++){
		if(tomb1[i]==tomb2[j]){
			let szerepelE=false;
	   		for(let k=0;k<metszet.length;k++){
				if(tomb1[i]==metszet[k]){
					szerepelE=true;
				}
        	}   		
		if(szerepelE==false){
			metszet.push(tomb1[i]);
          }                
	}            
    }      
  }      

document.write("<br>Metszet:");
for(let i=0;i<metszet.length;i++){
	document.write(metszet[i]+",");
}