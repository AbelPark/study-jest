# jest 기초

## 참조

[코딩앙마 유튜브](https://www.youtube.com/watch?v=g4MdUjxA-S4&ab_channel=%EC%BD%94%EB%94%A9%EC%95%99%EB%A7%88)

## 실행

```sh
npm t
npm test
npm t 파일명 // 특정파일만 테스트 실행
```

## 구성

```sh
├── README.md
├── async.test.js // 비동기 함수 테스트
├── fn.js // 함수 설정
├── fn.test.js // 기본 함수 테스트
├── package-lock.json
└── package.json
```

## package 설정

```json
  "scripts": {
    "test": "jest --detectOpenHandles --forceExit"
  },

```

### --detectOpenHandles --forceExit 옵션

`--detectOpenHandles`: 열려있는 리소스 닫음
`--forceExit`: 테스트 강제 종료

> 에러메시지  
> This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.  
>  비동기 함수 실행시 멈추지 않을 수 있음
