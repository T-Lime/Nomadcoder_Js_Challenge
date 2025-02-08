const age = parseInt(prompt('당신의 나이를 알려주세요'));

if(isNaN(age) || age < 0){
    console.log('양의 정수를 입력해주세요.');
} else if(age < 18){
    console.log('당신은 어립니다.')
} else if(age >= 18 && age <= 50){
    console.log('당신은 음주가 가능합니다.');
} else if(age > 50 && age <= 80){
    console.log('건강을 위해서 금주를 추천드립니다.')
} else if( age > 80){
    console.log('원하는 것은 무엇이든 할 수 있습니다.')
}
