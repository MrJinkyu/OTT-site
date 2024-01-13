# OverTheTop

<div align="center">
<img width="329" alt="image" src="https://github.com/MrJinkyu/OTT-site/assets/87935496/be5093d4-f50b-4c24-8d24-09e157a49411">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMrJinkyu%2FOTT-site&count_bg=%23F82F62&title_bg=%23626262&icon=&icon_color=%23E7E7E7&title=Today+%2F+Total&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

# OTT Web Site
> **개인 프로젝트** <br/> **개발기간: 2024.01.06 ~ 2024.01.13**

## 배포 주소

https://transcendent-cendol-7bbbaa.netlify.app

## 프로젝트 소개
저는 바쁜 일상 속에서 잠시 지하철을 타고 이동하거나, 하루 일과를 마친 후 취침 전에 잠깐 제가 좋아하는 영화를 찾아보곤 합니다
하지만 ott 사이트에서 1시간이 넘어가는 분량의 영상을 전부 보는 것은 지루하기도 하고 시간이 많이 소요되어 대신에 유튜브 영화 요약 및 리뷰 영상으로 충족했습니다
사용자들은 제 사이트를 통해 항상 최신 영화나 스포츠, 애니메이션 요약 영상을 몇 번의 클릭으로 시청할 수 있게 만들었습니다.

In my busy daily life, I take the subway for a while, or I look up my favorite movie before I go to bed after finishing my day's work.
But watching the entire hour-long video on the ott site was both boring and time consuming, so I watched YouTube movie summaries and review videos instead,
Users have always made it possible for them to watch the latest movie, sports, and animation summaries with just a few clicks through my site.

### Installation
``` bash
$ git clone https://github.com/MrJinkyu/OTT-site.git
$ cd OTT-site
```

#### Frontend
```
$ npm install 
$ npm start
```

## 📚 STACKS

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)    

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---
## 주요 기능 ✅

### ⭐️ 영화, 애니메이션, 스포츠, 뉴스 카테고리 별 영상목록 보여주기
- 카테고리당 25개의 영상 제공
- react-slick 라이브러리를 사용하여 이전 또는 다음 영상 버튼을 클릭하면 5개씩 부드럽게 순환하며 보여주는 UI를 제공합니다. 

### ⭐️ 선택한 영상 프리뷰 기능
- 선택한 영상을 넷플릭스 사이트처럼 음소거 상태 프리뷰로 보여주고 있습니다.

### ⭐️ 비디오 시청 기능
- 재생하기 버튼을 누르면 실제로 비디오 상세 페이지에서 시청할 수 있습니다.

---

## 아키텍쳐

### 디렉토리 구조
```bash
📦src
 ┣ 📂apis
 ┃ ┣ 📜fakeYoutubeClient.js
 ┃ ┣ 📜youtube.js
 ┃ ┗ 📜youtubeClient.js
 ┣ 📂components
 ┃ ┣ 📂FilterButton
 ┃ ┃ ┣ 📜FilterButton.jsx
 ┃ ┃ ┗ 📜FilterButton.module.css
 ┃ ┣ 📂NavHeader
 ┃ ┃ ┣ 📜NavHeader.jsx
 ┃ ┃ ┗ 📜NavHeader.module.css
 ┃ ┣ 📂PlayBanner
 ┃ ┃ ┣ 📜PlayBanner.jsx
 ┃ ┃ ┗ 📜PlayBanner.module.css
 ┃ ┣ 📂VideoCard
 ┃ ┃ ┣ 📜VideoCard.jsx
 ┃ ┃ ┗ 📜VideoCard.module.css
 ┃ ┗ 📂VideoSlider
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜slick.eot
 ┃ ┃ ┃ ┣ 📜slick.svg
 ┃ ┃ ┃ ┣ 📜slick.ttf
 ┃ ┃ ┃ ┗ 📜slick.woff
 ┃ ┃ ┣ 📜VIdeoSlider.jsx
 ┃ ┃ ┣ 📜VIdeoSlider.module.css
 ┃ ┃ ┣ 📜slick-theme.css
 ┃ ┃ ┗ 📜slick.css
 ┣ 📂context
 ┃ ┣ 📜FilterContext.jsx
 ┃ ┗ 📜YoutubeApiContext.jsx
 ┣ 📂pages
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.jsx
 ┃ ┣ 📂VIdeoDetail
 ┃ ┃ ┣ 📜VideoDetail.jsx
 ┃ ┃ ┗ 📜VideoDetail.module.css
 ┃ ┗ 📂Videos
 ┃ ┃ ┗ 📜Videos.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
