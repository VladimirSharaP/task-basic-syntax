export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let i = 0;
    while(str[i]) {
          if(converter(str[i]) < converter(str[i+1])) {
              result = result - converter(str[i]) + converter(str[i+1]);
              i += 2; 
          }
          else {
              result += converter(str[i]);
              i++;
          }
    }
    return result;
}


function converter(roman) {
    let result = 0;
    switch (roman) {
        case 'I': 
            result += 1; 
            break;
        case 'V': 
            result += 5; 
            break;
        case 'X': 
            result += 10; 
            break;
        case 'L': 
            result += 50; 
            break;
        case 'C': 
            result += 100; 
            break;
        case 'D': 
            result += 500; 
            break;
        case 'M': 
            result += 1000; 
            break;
    }
    return result;
}