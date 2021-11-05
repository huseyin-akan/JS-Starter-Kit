let numbersToCheck = [];

//Sınırsız sayıda parametre alan Asal Sayı kontrol fonksiyonu
function calNumArrayIfPrime(...numbers){
    let result = "";

    for(let i = 0; i<numbers.length; i++){
        if(isPrime(numbers[i])){
            result = result + "<li>" + numbers[i] + " bir asal sayıdır </li>";
        }else{
            result = result + "<li>" + numbers[i] + " bir asal sayı değildir </li>";
        }
    }
    return result;
}

//Asal Sayı kontrol fonksiyonu
function isPrime(number) {
    for(let i = 2; i < number; i++)
      if(number % i == 0) return false;
    return number > 1;
}

//Asal Sayıları Listele
function listPrimeNumbers(count){
    let result = '';
    for(let i = 2; i<=count; i++){
        if(isPrime(i)){
            result= result + "<li>" + i + "</li>";
        }        
    }
    return result;
}

//Arkadaş Sayı Kontrolü
function isFriendlyNumber(number1, number2){
    if(getSumOfDividers(number1) == getSumOfDividers(number2)){
        return `${number1} ve ${number2} arkadaş sayılardır`
    }else{
        return `${number1} ve ${number2} arkadaş sayı değillerdir`
    }
}

//Bölenleri Toplamını Bul
function getSumOfDividers(number){
    let result = 0;
    for(let i = 1; i<=number; i++){
        if(number%i == 0){
            result += i;
        }
    }
    return result;
}

//Mükemmel Sayıları Listele
function listPerfectNumbers(count){
    let result = '';
    for(let i = 1; i<=count; i++){
        if(isPerfectNumber(i)){
            result= result + "<li>" + i + "</li>";
        }        
    }
    return result;
}

//Mükemmel Sayı mı kontrolü:
function isPerfectNumber(number){
    if(number == getSumOfDividers(number) - number){
        return true;
    }else return false;
}

//Butona tıklanınca hesaplamaları yapar ve asal sayı sonuçlarını ekrana yazar.
$('#btn_calculate').click( (e)=>{
    e.preventDefault();    
    let result = calNumArrayIfPrime(...numbersToCheck);
    $('#alert_result_prime').append(result);
    
    //hesaplama yapıldı, diziyi ve hesaplanacak sayılar ekranını temizle
    numbersToCheck = [];
    $('#alert_numbers_list').text('');
})

//Butona tıklanınca sayıyı diziye ekler.
$( "#btnAddNumberToList" ).click((e) => {
    e.preventDefault();

    var numberToAdd = parseInt( $("#numberToCheckForPrime").val() );  
    numbersToCheck.push(numberToAdd);
    $("#numberToCheckForPrime").val('');

    //Eklenen sayıları ekranda göster.
    $('#alert_numbers_list').append(`
        <li> ${numberToAdd} </li>
    `);

    //Daha önce yapılmış hesaplamayı kaldır.
    $('#alert_result_prime').text('');
});

//Butona tıklayınca arkadaş sayı hesaplamalarını yapar ve ekranda gösterir
$('#btn_calc_friendly_nums').click( (e) => {
    e.preventDefault();

    var number1 = parseInt( $("#friendly_number_first").val() );
    var number2 = parseInt( $("#friendly_number_second").val() );

    let result = isFriendlyNumber(number1, number2);
    $('#result_friendly_nums').text(result);
});

//Butona tıklayınca 1'den 1000'e kadar olan mükemmel sayıları göster:
$('#btn_show_perfect_nums').click( (e) => {
    e.preventDefault();

    $('#mukemmel_sayilar_list').text('');
    let result = listPerfectNumbers(1000);
    $('#mukemmel_sayilar_list').append(result);
    
});

//Butona tıklayınca 1'den 1000'e kadar olan mükemmel sayıları göster:
$('#btn_show_prime_nums').click( (e) => {
    e.preventDefault();

    $('#asal_sayilar_list').text('');
    let result = listPrimeNumbers(1000);
    $('#asal_sayilar_list').append(result);
    
});