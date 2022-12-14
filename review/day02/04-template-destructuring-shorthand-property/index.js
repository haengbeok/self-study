function getTemplate({ name, age, school, createdAt }) {
  return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
        `;
}

const name = "철수";
const age = 13;
const school = "다람쥐초등학교";
const createdAt = "2022-10-03";

const result = getTemplate({ name, age, school, createdAt });

console.log(result);
