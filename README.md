# graduation_project
#### 임신 및 육아 중인 부모를 위한 자연어처리 기반 감정분석 다이어리 어플리케이션입니다.

![Project (4)](https://github.com/user-attachments/assets/b7dc4c5c-0373-471d-8ce0-b1c328ff0dc5)


- 일기분석을 통한 감정분석 및 LLM 공감형 반응 제공
- data : [감성대화말뭉치](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=86), 모두의 말뭉치-일기, 네이버 카페 <맘스홀릭> 크롤링
-------------------------
## 💜 팀원

|  **AI Modeling** | **Back-end**   | **Front-end**   | 
| :-----------: | :------------: | :------------: |
| 안정민        |    유재원        |      이가윤     |
| ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/05ac0e9e-0ff7-417c-9488-5a2569d4ee43) |   ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/5cbfe072-eaea-4bdc-99f4-210644ef32fa)      | ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/a8947a6f-1ce4-49df-920a-ba5bd2c474d5)      |



## 💜 프로젝트 소개
### 배경
- 부모를 위한 심리적 지원의 부재가 부각

- 실제 임신, 육아 중인 부부를 대상으로 한 설문에 따르면 정신적인 스트레스를 해소할 수 있는 방안으로 **공동 양육자와의 대화**를 가장 중요한 요소로 꼽음


⏩ 임신 및 육아중인 부모들에게 부담없이 본인의 마음 상태를 돌보고 부부끼리 서로 공유할 수 있는 어플리케이션이 필요하다고 판단

### 목적

- 접근성은 높고 부담감은 낮은 마음 돌봄 어플리케이션을 제공해 부모의 정서적 안정에 기여.      

- 엄마의 일기를 아빠와 공유함으로써 서로의 상태를 인지하게 해 함께 하는 임신 및 육아의 장을 마련할 계획        
     
- 아이 발달 과정에 관한 간략한 정보 전달을 통해 무지함으로부터 비롯될 스트레스를 경감시키고 내 아이의 성장과정을 기록할 수 있게 함

### 소프트웨어 설계
![Project (1)](https://github.com/jeongmin1016/MomttokMomttok/assets/109460178/a5d181a9-e46d-4a14-b1e4-54501d620093)

## 💜 기술
#### 기술 스택
- AI : `KoElectra`, `OpenAI`
- Back-end : `Django`, ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54), ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
- Front-end : `React`, ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white), ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

### 💜 UI/UX
![Project (5)](https://github.com/user-attachments/assets/fa2569b0-74bb-4990-9c33-d748f138290f)


![Project (2)](https://github.com/jeongmin1016/MomttokMomttok/assets/109460178/94633c46-8a10-46b5-aad3-84c165635cd4)

### 💜 Back-end
#### 1. 데이터베이스 설계 및 구축
작성한 ERD를 바탕으로 MySQL에 테이블을 생성하고 Django와 연동하여 DB 생성
#### 2. API 설계
Django Rest Framework를 사용하여 Restful API 구축
#### 3. 카카오톡 소셜 로그인
카카오톡 API를 사용한 소셜 로그인   

### 💜 AI modeling
