const Projects = {
    "projects": [
        { "id": "1", "title": "가위바위보 게임", "imageURL": "https://i.ibb.co/5chX5pT/2024-03-26-17-20-23.png", "skills" : "react, bootstrap", "problem":"처음 리액트를 접하면서 만든 프로젝트로 리액트 문법에 미숙헀던 문제" ,"solution" : "지속적인 공부와 스스로 코딩을 하며 익숙해지기" ,"link" :"https://classcomponentrins.netlify.app/" },
        { "id": "2", "title": "간단 날씨 페이지", "imageURL": "https://i.ibb.co/mBkBQFG/2024-03-26-17-12-32.png", "skills" : "react, bootstrap, 무료 날씨 API", 
        "problem":"위치 기반 lat과 lon기반으로 API를 호출해야하는데, API 딜레이로 에러" ,"solution" : "useEffect를 통해 페이지가 새로고침될때마다 사용자의 lat과 lon을 가져오도록 수정" ,"link" :"https://hyether.vercel.app/" },
        { "id": "3", "title": "H&M 쇼핑몰", "imageURL": "https://i.ibb.co/Bq8TXCZ/2024-03-19-00-26-40.png","skills" : "react, redux, react-router-dom, redux-thunk ,json-server", 
        "problem":"API 문제가 있는지, useParams값으로 검색 부분을 구현했지만 동작하지 않음" ,"solution" : "해결하지 못함" ,"link" :"https://rinshnm-hyerinkims-projects.vercel.app/" },
        { "id": "4", "title": "팀 쇼핑몰 페이지", "imageURL": "https://i.ibb.co/RB2xndT/2024-03-19-00-18-18.png", "skills" : "Vue, typescript, redux ,react-router-dom ,styled-components, 무료 product API", "problem":"팀프로젝트로 진행하다 보니 소통문제" ,"solution" : "매주 화,목,금 어려웠던 부분과 진행상태 해결법 소통" ,"link" :"https://front-end-ten-rho.vercel.app/" },
        { "id": "5", "title": "마켓컬리 클론코딩", "imageURL": "https://i.ibb.co/LpyxPH0/2024-03-19-01-01-33.png", "skills" : "Vite, typescript, redux, react-router-dom, bootstrap ", 
        "problem":"타입스크립트를 처음 접하여 많이 미숙했던 상태" ,"solution" : "팀에게 솔직하게 얘기 + 팀의 배려로 일부 기능을 구현하며 타입스크립트에 대해 공부 및 기능 구현" ,"link" :"https://maketkurly-project.vercel.app/" },
        { "id": "6", "title": "넷플릭스 클론코딩", "imageURL": "https://i.ibb.co/CVVDqkZ/2024-03-18-23-23-17.png", "skills" : "react, react-query, bootstrap, 무료 영화 API", 
        "problem":"인기순, 최신순, 장르별 필터과정에서 각각의 버튼 클릭 이후에 재클릭 했을 경우 동작하지 않은 문제" ,"solution" : "각 버튼을 클릭 이후 상태값 초기화, 페이지네이션 초기화 진행" ,"link" :"https://hyeflix-hyerinkims-projects.vercel.app/"},
        { "id": "7", "title": "스터디 채팅", "imageURL": "https://i.ibb.co/s1RQ2B5/2024-03-18-23-26-25.png","skills" : "Vue, react-hook-form, react-router-dom, md5,firebase, bootstrap", 
        "problem":"firebase 초기 세팅 및 각각의 채팅창으로 마운트될 때, 아이콘이 바로 보이지 않는 문제" ,"solution" : " firebase docs 정독 후 초기 세팅 진행, useEffect를 통해 채팅룸 id가 변경될때 마운트 진행 + 마운트 될 때 메세지 배열 초기화" ,"link" :"https://rins-study-chat.vercel.app/" },
        { "id": "8", "title": "포트폴리오 페이지", "imageURL": "https://i.ibb.co/Y8SDVdP/2024-03-22-14-49-55.png", "skills" : "react, redux, firebase, bootstrap, typewriter-effect, react-awesome-reveal", "problem":"타이핑 주는 효과를 내고 싶었는데, setInterval로 일일히 다 구현하는데 어려운 문제" ,"solution" : "react-awesome-reveal과 typewriter-effect로 손쉽게 구현" ,"link" :"https://tiny-chaja-c1975f.netlify.app/" }
    ]
}


export default Projects;