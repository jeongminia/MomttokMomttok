import time
from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from urllib.request import urlopen
from selenium.webdriver.common.keys import Keys
import urllib.request
import os
import requests
import csv
import pandas as pd

#크롬 드라이버 생성
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

#데이터 각 목록 리스트로 만들기
weeklist = []
contentlist = []
imglist = []

#Google 웹사이트 접속
driver.get("https://www.maeili.com/cms/contents/contentsView.do?categoryCd1=1&categoryCd2=3&categoryCd3=0&idx=492&reCome=1&gubn=1")

babyw = driver.find_elements(By.XPATH, "//h1[@class='c-blue']")

for i in range(len(babyw)):
    week = babyw[i].text
    weeklist.append(week)

babyc = driver.find_elements(By.XPATH, "//p[@class='txt']")

for i in range(len(babyc)):
    content = babyc[i].text
    contentlist.append(content)

babyc2 = driver.find_elements(By.XPATH, "//p[@class=' txt']")

for i in range(len(babyc)):
    content = babyc2[i].text
    contentlist.append(content)

#data_element = driver.find_element(By.XPATH, "//section[@class='m_cont explanation']")
#data = data_element.text


#데이터 수집-이미지 요소 찾기
for i in range(1, 13):
    xpath = f"//img[@title='b_{i}.jpg']"
    try:
        img_element = driver.find_element(By.XPATH, xpath)
        img_url = img_element.get_attribute('src')

        #이미지 다운로드
        response = requests.get(img_url)
        new_img_name = f'임신 {i}주차 태아의 변화.jpg'
        with open(new_img_name, 'wb') as f:
            f.write(response.content)

        #이미지 리스트에 저장
        imglist.append(new_img_name)
    except NoSuchElementException:
        imglist.append("이미지 없음")

driver.implicitly_wait(3)  # 최대 10초간 대기

#크롤링한 정보 프린트해보기
#print(data)

#브라우저 닫기
driver.quit()

print(weeklist)
print(contentlist)
print(imglist)

#dataframe으로 변환
data = {"week": weeklist, "content": contentlist, "image": imglist}
df = pd.DataFrame(data)

#csv 파일로 저장
df.to_csv("BabyData.csv", index=False)

print("데이터가 성공적으로 저장됨")