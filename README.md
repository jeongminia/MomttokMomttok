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

#### 디렉토리 구조
```
📦 
├─ .idea
│  ├─ .gitignore
│  ├─ inspectionProfiles
│  │  ├─ Project_Default.xml
│  │  └─ profiles_settings.xml
│  ├─ misc.xml
│  ├─ modules.xml
│  ├─ momttokback.iml
│  └─ vcs.xml
├─ Modeling
│  ├─ data
│  │  ├─ momttok_mosholic.csv
│  │  ├─ mons_holic.csv
│  │  └─ rd.md
│  ├─ fin
│  │  ├─ [0_데이터_수집]_네이버카페_0619.ipynb
│  │  ├─ [0_데이터_수집]모두의_말뭉치set.ipynb
│  │  ├─ [2_모델링]_KoBERT_0513.ipynb
│  │  ├─ [2_모델링]_KoBERT_0517.ipynb
│  │  ├─ [2_모델링]_KoBERT_0527.ipynb
│  │  ├─ [2_모델링]_KoELECTRA_0522.ipynb
│  │  ├─ [2_모델링]_KoELECTRA_0527.ipynb
│  │  ├─ [2_모델링]_LSTM_0511.ipynb
│  │  ├─ [3_모델링]_KoGPT2_0615.ipynb
│  │  ├─ [3_모델링]_KoGPT2_0616 (1).ipynb
│  │  ├─ [3_모델링]_KoGPT2_0616.ipynb
│  │  ├─ [4_감정fin]_KoELECTRA_0527.ipynb
│  │  ├─ [5_fin]GPT_3_5_0619.ipynb
│  │  ├─ _[4_fin]_분석_및_생성_0616.ipynb
│  │  ├─ rd.md
│  │  └─ 맘똑맘똑_모델_fin.ipynb
│  └─ try
│     ├─ [0_데이터 수집]AI_모두_데이터set.ipynb
│     ├─ [0_데이터 수집]모두의말뭉치_일기set.ipynb
│     ├─ [2_모델링] KoBERT_0430.ipynb
│     ├─ [2_모델링] ML count vectorizer_0429.ipynb
│     ├─ [2_모델링]_KoBERT2_0501.ipynb
│     ├─ [2_모델링]_LSTM2_0505.ipynb
│     ├─ [2_모델링]_LSTM2_0506.ipynb
│     ├─ [2_모델링]_LSTM2_0510.ipynb
│     ├─ [2_모델링]_LSTM_0505.ipynb
│     ├─ [2_모델링]_LSTM_0513.ipynb
│     ├─ _[0_데이터_수집]_네이버카페_0601.ipynb
│     └─ rd.md
├─ README.md
├─ backend
│  ├─ .gitattributes
│  ├─ .gitignore
│  ├─ config
│  │  ├─ __init__.py
│  │  ├─ __pycache__
│  │  │  ├─ __init__.cpython-312.pyc
│  │  │  ├─ settings.cpython-312.pyc
│  │  │  ├─ urls.cpython-312.pyc
│  │  │  ├─ views.cpython-312.pyc
│  │  │  └─ wsgi.cpython-312.pyc
│  │  ├─ asgi.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ wsgi.py
│  ├─ manage.py
│  ├─ momttokback
│  │  ├─ __init__.py
│  │  ├─ __pycache__
│  │  │  ├─ __init__.cpython-312.pyc
│  │  │  ├─ admin.cpython-312.pyc
│  │  │  ├─ apps.cpython-312.pyc
│  │  │  ├─ models.cpython-312.pyc
│  │  │  ├─ serializer.cpython-312.pyc
│  │  │  ├─ urls.cpython-312.pyc
│  │  │  └─ views.cpython-312.pyc
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_alter_babydata_options_alter_calendar_options_and_more.py
│  │  │  ├─ 0003_alter_babydata_options_alter_calendar_options_and_more.py
│  │  │  ├─ __init__.py
│  │  │  └─ __pycache__
│  │  │     ├─ 0001_initial.cpython-312.pyc
│  │  │     ├─ 0002_alter_babydata_options_alter_calendar_options_and_more.cpython-312.pyc
│  │  │     ├─ 0003_alter_babydata_options_alter_calendar_options_and_more.cpython-312.pyc
│  │  │     └─ __init__.cpython-312.pyc
│  │  ├─ models.py
│  │  ├─ models
│  │  │  └─ model_KoElectra_0527.pt
│  │  ├─ serializer.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ requirements.txt
│  └─ templates
│     └─ index.html
├─ front
│  ├─ App.js
│  ├─ GlobalStyles.js
│  ├─ app.json
│  ├─ assets
│  │  ├─ -20240523--1100-1@3x.png
│  │  ├─ adaptive-icon.png
│  │  ├─ calb.png
│  │  ├─ calp.png
│  │  ├─ card@3x.png
│  │  ├─ dashb.png
│  │  ├─ dashp.png
│  │  ├─ diaryb.png
│  │  ├─ diaryp.png
│  │  ├─ ellipse-10@3x.png
│  │  ├─ ellipse-11@3x.png
│  │  ├─ ellipse-12@3x.png
│  │  ├─ ellipse-13@3x.png
│  │  ├─ ellipse-14@3x.png
│  │  ├─ ellipse-15@3x.png
│  │  ├─ ellipse-16@3x.png
│  │  ├─ ellipse-17@3x.png
│  │  ├─ ellipse-18@3x.png
│  │  ├─ ellipse-19@3x.png
│  │  ├─ ellipse-20@3x.png
│  │  ├─ ellipse-6@3x.png
│  │  ├─ ellipse-7@3x.png
│  │  ├─ ellipse-8@3x.png
│  │  ├─ ellipse-9@3x.png
│  │  ├─ favicon.png
│  │  ├─ frame1@3x.png
│  │  ├─ frame@3x.png
│  │  ├─ group1@3x.png
│  │  ├─ group@3x.png
│  │  ├─ homeb.png
│  │  ├─ homep.png
│  │  ├─ icon.png
│  │  ├─ image-88@3x.png
│  │  ├─ image-89@3x.png
│  │  ├─ image-90@3x.png
│  │  ├─ image-91@3x.png
│  │  ├─ image-92@3x.png
│  │  ├─ image-93@3x.png
│  │  ├─ image-94@3x.png
│  │  ├─ line-10@3x.png
│  │  ├─ line-11@3x.png
│  │  ├─ line-12@3x.png
│  │  ├─ line-13@3x.png
│  │  ├─ line-8@3x.png
│  │  ├─ line-9@3x.png
│  │  ├─ lock-icon.png
│  │  ├─ lock-icon1.png
│  │  ├─ mail-icon.png
│  │  ├─ mail-icon1.png
│  │  ├─ splash.png
│  │  └─ vector@3x.png
│  ├─ babel.config.js
│  ├─ component
│  │  ├─ Component.js
│  │  ├─ DarkModeFalse.js
│  │  ├─ Frame.js
│  │  ├─ FrameComponent.js
│  │  ├─ StatusBar1.js
│  │  └─ a
│  ├─ front_end
│  ├─ package.json
│  └─ screens
│     ├─ Caln.js
│     ├─ Dashn.js
│     ├─ Diaryn.js
│     ├─ LogInn.js
│     ├─ MainPagen.js
│     ├─ Openn.js
│     ├─ Reportn.js
│     └─ Waitn.js
└─ graduation_project
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

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
#### 감정분석 모델링
- LSTM, KoBERT, KoElectra 모델 파라미터 튜닝 후, 성능 비교를 통해 선택
#### 공감형 반응 생성
- KoGPT 적합했으나 성능이 높지 않아 LLM 파인튜닝 선택
- LLM 중, GPT 3.5 turbo을 카페 <맘스홀릭> 데이터를 활용해 파인튜닝
