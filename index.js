
// ! 1.მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filteredLanguages = languages.filter(item => item.length > 3
)
console.log("🚀 ~ file: index.js:10 ~ filteredLanguages ~ filteredLanguages:", filteredLanguages)



// ! 2. შეამოწმეთ მოცელუმ მასივში არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.

let arr = [-1, -2, -3, 4].some(item => item > 0);
console.log("🚀 ~ file: index.js:14 ~ arr:", arr)


// ! 3. Მოცემულია მასივი:
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let filteredWords = words.filter(item => item.includes('M') || item.includes('m'))
console.log("🚀 ~ file: index.js:25 ~ filteredWords:", filteredWords)



// ! 4. შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”> 
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>

let newDivElement = document.createElement('div')
newDivElement.classList.add('wrapper')

let newImageElement = document.createElement('img')
newImageElement.setAttribute('src', 'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg')
newImageElement.setAttribute('alt', 'image')

let newH2Element = document.createElement('h2')
newH2Element.classList.add('title')
newH2Element.innerText = 'image title'

newDivElement.appendChild(newImageElement)
newDivElement.appendChild(newH2Element)
document.body.appendChild(newDivElement)



// ! 5. მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)

let string = '12345'
let array = string.split('').map(Number).reduce((x,y) => x + y, 0)
console.log("🚀 ~ file: index.js:41 ~ array:", array)


// ! 6. მოცემულია მასივი, შემდეგი მნიშვნელობებით -// გამოიტანეთ მარტო ციფრები;

let array1 = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11].filter(Number);
console.log("🚀 ~ file: index.js:47 ~ array1:", array1)



//! 7. მოცემულია მასიცი: შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: 
// თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, 
// მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად. 

let array2 = [14, 150, 'css', null, 'javascript', 25]
console.log("🚀 ~ file: index.js:56 ~ array2:", array2)
let mapedArray = array2.map(x => {
    if(typeof x === 'number') {
        return x * x
    } else if(typeof x === 'string') {
        return x.toUpperCase()
    } else {
        return x
    }
})
console.log("🚀 ~ file: index.js:65 ~ mapedArray ~ mapedArray:", mapedArray)


// ! 8. მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)

let string2 = 'javasctipt'

let reverceString = string2.split('')
for(let i = reverceString.length - 1; i >= 0; i--) {
    console.log(reverceString[i]);
}



// ! 9. მოცემულია სტრინგი:, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით. 
let info= 'Good day'
let nweInfo = info.slice(5,8)
console.log("🚀 ~ file: index.js:83 ~ nweInfo:", nweInfo)


// ! 10. დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let strionfunc = (string) => {
    return string.length
}

let resultSttin = strionfunc('helo')
console.log("🚀 ~ file: index.js:93 ~ resultSttin:", resultSttin)




// ! 11. Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და 
//  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
//  თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let userAnswer = prompt('საქათველოს დედაქალაქი')
let correctAnswer = 'tbilisi'

if(userAnswer.toLowerCase() === correctAnswer) {
    alert("სწორია");
} else {
    alert("არასწორია");
}

// ! 12. მოცემულია: დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა 
// ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.


let link = "https://google.com";

let newLink = function(link){
    if (link.indexOf("https://") !== -1) {
        return console.log("კი მოიცავს");
    }else {
        return console.log("არ მოიცავს ");
    }
}
newLink(link);


// ! 13. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, 
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ 
// ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”. 

let fruits = ['apple', 'mango', 'avocado','kiwi']
fruits.splice(-1 -1, 1, 'strawberry')
console.log("🚀 ~ file: index.js:147 ~ fruits:", fruits)


