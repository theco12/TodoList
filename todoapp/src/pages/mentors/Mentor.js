import React from "react";
import { useState } from "react";

export default function Mentor() {
  const [person, setPerson] = useState({
    name: "deokho",
    age: 24,
    work: "developer",
    mentor: {
      name: "elle",
      title: "시니어개발자",
    },
  });

  return (
    <div>
      <h1>
        {person.name}의 멘토는 {person.mentor.name}이다.
      </h1>
      <h1>
        {person.mentor.name}멘토의 타이틀은 {person.mentor.title}이다.
      </h1>
      <button
        onClick={() => {
          const name = prompt("멘토 이름을 입력하세요");
          setPerson({ ...person, mentor: { ...person.mentor, name: name } });
        }}>
        멘토이름바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt("멘토 타이틀을 입력하세요");
          setPerson({ ...person, mentor: { ...person.mentor, title: title } });
        }}>
        멘토타이틀바꾸기
      </button>
    </div>
  );
}
