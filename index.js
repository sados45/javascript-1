//console.log('Hello World!')
var userName='Samia'
console.log(userName)

userName="Ebuzer"
console.log(userName)

let mail="abc@gmail.com" //bir kere let mail yazildigi icin bundan sonra eger mail adresi veya isim her neyse degistirecegimiz zaman alt satirda sadece mail= yapilmalidir.

console.log(mail)

mail="xyz@gmail.com"

console.log(mail)

/* var ve let ile yadigimiz kodlari bir sonrasindaki islemlerimizle degistirebiliyoruz.const sabit kaliyor yapamiyoruz.*/
//degitirilebilir olma durumuna MUTABLE; degistirilemez olmaya ise UNMUTABLE denir.
//var functions iken, let ve const blok elementtir dedi hoca.anlamini function özelliklerinde anlatacak.



//burada ikinci mail adresini const olmasi nedeniyle kabul etmedi.//
//const email="sabine@gmail.com" 
//console.log(email)//ikinci const yazarsam olmuyor kabul etmiyor.//

//VARIABLE DA Name= BELIRLERKEN, alti cizgi kabul edilir, name belirlerken en basina isim verirken sayi koyamazsin. araya sayi konulabilir. mesela first1Name gibi 
//mesela -name olur
// let $name olur ismin arasina bosluk birakamazsin. araya matematik isaretleri koyamazsin. +  gibi ismin icine.// 

let kkkdddmmxxx="Sedat"
console.log(kkkdddmmxxx) //verilen name isminin bir önemi yok görüldügü gibi.//
//javascriptin kendi icinde kullandigi kelimeleri name olarak kullanamazsin. mesela, const, default...cünkü veriable atamasi olarak kabul ediyor. //


let a=3;
let b=8;
let c=a;

a=b; a // a degiskenini bu sekilde sakliyoruz. digeri bu islemle sadece a gecerlilik kazaniyor. //
b=c; b // b zaten 8//
console.log(a,b)//degiskenlerimizi birbirine atayarak degistirdik.//


//----- DATA TYPES----//


/*
// 1.string: tek tirnak yada cift tirnak ile string olusturabiliriz.''*/

let name= "Sedat"

console.log(typeof name) // Burada typeof name consol.logta string olarak karsimiza cikmaktadir.//

//2.number:

console.log(typeof 29) // burada 29 sayisi nedeniyle console.logta number typeof tur.

//3. Boolean: 
console.log(typeof true) // console.logta type of ta boolean olarak gözüküyor. true ve false

//4. undefined:
let phoneNumber;
console.log(phoneNumber)//console.logta bu durum undefined olarak gözüküyor.yani tanimlanmamis olarak yazilir.

email= null;
console.log(email)

//tirnak icine alinan herseyin typeof u stringtir.//

//eger atama yapilmdiysa undefined oolur. ama simdilik atama yapilmadan sadece bekleyeceksek null gözükür.//




