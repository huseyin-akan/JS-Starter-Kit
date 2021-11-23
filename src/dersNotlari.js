//1. Aynı isimden 2 tane let tanımlaması yapamıyoruz. Ama var ile yapılabiliyor.
//2. Const ile bir ifade tanımladığında değer vermen lazım. Sonra veremezsin. Ayrıca değiştiremezsin.

//3.
function husola(puan =10, student){
    console.log(student + " :" + puan);
}
husola(undefined, 'Husoka');        //Husoka : 10 yazar.
//Burda ilk parametre olarak undefined gönderdik.

//#REST
//C#'taki params ifadesidir.
//Parametre içinde gönderilen ifadeler bir diziye eklenir.
function husofy(...products){
    console.log(products);
}

//!! husofy() diye çalıştırırsak. Console'a products olarak boş array döner. --> []

function toplaHepsini(...sayilar, sayi){    //Bu yazım hata verir. Sayi parametresini birinci parametre olarak yaz.
    console.log(sayilar);
    console.log(sayi);
}

//#SPREAD
//Mesela Math.max() metoduna elindeki bir dizi sayıyı göndermek istiyorsun.
let points = [123,42,52,6356,74,19]
Math.max(points) // NaN döner.
Math.max(...points) //yazarsan diziyi ayırmış olur. sonuç olarak 6356 döner.
console.log(..."ABC","D",..."EFG", "H")  //--> A B C D E F G H yazar.

//#DESTRUCTING
let populations = [10000,20000,30000]
let [small, medium, high] = populations;       //small değişkenine 10000, medium'a 20000 ve high'a 30000 verdik.
console.log(high)   //30000 yazar.

let [smallx, mediumm, highl, [veryHigh, maximum]] = [10000,20000,30000, [40000, 50000]];

function husolation([firstThing], number){//1. parametre array olmalı. Arrayin ilk elemanını da firstThinge verir
    console.log(firstThing + number);            
}
husolation([1,2,3,4,5,6,7,8,9], 10)     //Ekrana 11 yazar.
husolation(3,5)                         //hata verir. 3 destruct edilemez.

//Aşağıdaki gibi de objenin elemanlarına ulaşabilirsin.
let student = {name: "Husoka", surname:"Akanus", age:29, city:"Istanbul"}
console.log(student["name"]);  

//Objede destructing:
//Objenin istediğin proplarını değişkenlere atama yöntemidir.
let {name, city} = student; //Student name ve city proplarını bu 2 değişkene atadık.
console.log(`Öğrencinin adı:${name} ve şehri:${city}`);

//Aşağıda ise obje proplarını istediğimiz değişkenlere atadık.
let ad, soyad, yas, sehir;
( { name: ad, city:sehir} = {name: "Husoka", surname:"Akanus", age:29, city:"Istanbul"})    //burda parantez içine almayınca
//JS bu obje parantez notasyonunu kod scope u zannediyor. Öyle olunca da let ile tanımladığımız değişkenler ile eşleştiremiyor.
//Normalde bu yapıyı fonksiyon içinde kullanıcaksın. O yüzden sorun yok.
console.log(`Öğrencinin adı:${ad} ve şehri:${sehir}`);  


export class Customer{
    constructor(id, customerNo){
        this.id = id;   //aslında burada da prototyping yapılıyor.
        this.customerNo = customerNo;
    }
}

let customer = new Customer();
//prototyping   - Normalde Customer'ın bu propu yok.    
customer.name = "Husokanus" //Instance'a yapılan prototyping
Customer.surname = "Akanus" //Class'a yapılan prototyping


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNo){
        super(id, customerNo)   //Customer class'ının constructor'ı
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNo){
        super(id, customerNo)   //Customer class'ının constructor'ı
        this.companyName = companyName;
    }
}

let products = [
    {id:1, name:"Samsung", price:3200},
    {id:2, name:"Vestel", price:1850},
    {id:3, name:"Xiomi", price:4300},
    {id:4, name:"Apple", price:3600},
    {id:5, name:"Husonia", price:4200},
]

products.map( product => console.log(product.name));    //Bir nevi for döngüsü gibi dizinin elemanlarını döndük.
let newArray = products.map(x => x.name + "husolandi"); //Her bir ismin sonuna husolandi ekledik ve tüm elemanlari diziye
// atadık
console.log(newArray);

let filteredProducts = products.filter(x=>x.price>3200);  //3200'den büyük olan elemanları yeni dizide topladı.
console.log(filteredProducts);

let cartTotal = products.reduce((acc, product) => acc + product.price, 0)   //cartTotal içerisine ürünlerin fiyat toplamını yazar.
console.log(cartTotal);

//arrayle objeler referans tiptir. 

//AŞAĞIDA KİM NE DÖNER DİKKAT ET: 
console.log(neDoner1);      //undefined döner.

let neDoner1 = "tavuk döner"; 

console.log(neDoner1);      //"tavuk döner" döner.

function funcNeDoner1 (doner){
    console.log(neDoner2);
}

funcNeDoner1("et döner");       //undefined döner
funcNeDoner2("et döner");       //undefined döner

let neDoner2 = "kaz döner";

funcNeDoner1("et döner");       //"kaz döner" döner.
funcNeDoner2("et döner");       //"kaz döner" döner.

function funcNeDoner2 (doner){
    console.log(neDoner2);
}

//console.log(neDoner3);          //neDoner3 not defined hatası verir.
//funcNeDoner1(neDoner3);         //neDoner3 not defined hatası verir.

//3. DERS SONRASI
