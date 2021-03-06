// console.log('test')
//
// let temp = 10
// console.log(temp)


// // 자료구조 : 리스트 , 딕셔너리
// let list = [10, 20, 30]
// console.log(list[0])
//
//
// //딕셔너리
// let dict = {'age': 10, 'name':'john'}
// console.log(dict)
//
// console.log(dict['age'])
//
//
// //hoisting
// console.log(a) // 버그인가?
// //var a = 100
// let a = 100

// var 안 쓰는 이유는 initialize 되지 않아도 실행이 되기 때문에 코드 안정성 떄문에 사용하지않는다.
// let 사용!


const b = 100
const CONST_VALUE = 200 // 절대 바꾸지 않아야 할 값은 대문자로 표현한다.
console.log('b의 값', b)

function sum(num1, num2) {
    let result = num1 + num2
    console.log('result : ', result)
    return result
}
exports.sum = sum // 외부에서도 사용하게 해주는 문법

sum(3, 5)
console.log(sum(10, 50))


// true, false 리턴하는 표현식
if (sum(10, 20) > 50) {
    // True 표현식
    console.log('True')
} else {
    // false 표현식
    console.log('False')
}
//
// for (let i = 0; i < 100; i++)
// {
//     if (i % 2 ==0)
//     console.log(i)
// }

let list4 = [10, 20, 30, 40]
for (let i = 0; i < list4.length; i++)
    console.log(i)

for (let i of list4) {
    console.log(i)
}

let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]
for (let i = 0; i < scores.length; i++) {
    if (scores[i]['score'] > 50)
    console.log(scores[i]['name'])
}
// main.js 의 exports -> main 변수


function testFunction(email) {
    if (typeof  email != 'string')
    {
        return false
    }
    if (email.includes('@'))
        return true
    else
        return false

}

function calculateSum(n) {
    let sum = 0
    for (let i = 0; i<n ; i++)
    {
            sum += i
    }

    return sum


}
console.log(calculateSum(5))
exports.calculateSum = calculateSum

function countBerry(basket) {
    // basket 변수는 리스트
    let count = 0
    for (let i = 0; i < basket.length; i++)
    {
        if (basket[i] == '딸기')
        {
            count += 1
        }

    }
     return count
}
exports.countBerry = countBerry


let cityAir = [
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "중구",
    PM10: 22,
    PM25: 14,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "종로구",
    PM10: 24,
    PM25: 18,
    O3: 0.013,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "용산구",
    PM10: 0,
    PM25: 15,
    O3: 0.012,
    NO2: 0.027,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "은평구",
    PM10: 36,
    PM25: 14,
    O3: 0.019,
    NO2: 0.018,
    CO: 0.5,
    SO2: 0.005,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "서대문구",
    PM10: 28,
    PM25: 9,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.6,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "마포구",
    PM10: 26,
    PM25: 8,
    O3: 0.012,
    NO2: 0.021,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "광진구",
    PM10: 17,
    PM25: 9,
    O3: 0.018,
    NO2: 0.016,
    CO: 0.6,
    SO2: 0.001,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성동구",
    PM10: 21,
    PM25: 12,
    O3: 0.018,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 33,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "중랑구",
    PM10: 27,
    PM25: 10,
    O3: 0.015,
    NO2: 0.019,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "동대문구",
    PM10: 26,
    PM25: 9,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성북구",
    PM10: 27,
    PM25: 8,
    O3: 0.022,
    NO2: 0.014,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "도봉구",
    PM10: 25,
    PM25: 12,
    O3: 0.024,
    NO2: 0.011,
    CO: 0.3,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "강북구",
    PM10: 30,
    PM25: 15,
    O3: 0.022,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "노원구",
    PM10: 21,
    PM25: 14,
    O3: 0.017,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "강서구",
    PM10: 36,
    PM25: 16,
    O3: 0.021,
    NO2: 0.013,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "구로구",
    PM10: 23,
    PM25: 10,
    O3: 0.022,
    NO2: 0.016,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "영등포구",
    PM10: 29,
    PM25: 15,
    O3: 0.01,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "동작구",
    PM10: 29,
    PM25: 15,
    O3: 0.012,
    NO2: 0.023,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "관악구",
    PM10: 27,
    PM25: 12,
    O3: 0.012,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "금천구",
    PM10: 25,
    PM25: 15,
    O3: 0.015,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 43,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "양천구",
    PM10: 0,
    PM25: 14,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강남구",
    PM10: 31,
    PM25: 16,
    O3: 0.018,
    NO2: 0.018,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "서초구",
    PM10: 34,
    PM25: 13,
    O3: 0.024,
    NO2: 0.019,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "송파구",
    PM10: 25,
    PM25: 6,
    O3: 0.014,
    NO2: 0.025,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강동구",
    PM10: 24,
    PM25: 14,
    O3: 0.016,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
];

function countAir(cityAir) {
  let result = []
    for (let i =0;i<cityAir.length;i++)
    {
        // 가독성을 높이자
      let isCleanAir = (cityAir[i]['PM10'] < 25)
        if (isCleanAir)
        {
          //list 따로 만들기 -> 테스트를 위해 필터링 / 출력 분리하기
          // console.log(cityAir[i]['MSRSTE_NM'])
          // result += 1
          result.push(cityAir[i]['MSRSTE_NM'])
        }
    }
    return result
}
exports.countAir = countAir
console.log(countAir(cityAir))
function printAir(cityAir) {
  let result = countAir(cityAir) // 구 리스트 받아옴
  console.log(result)
}
printAir(cityAir)
