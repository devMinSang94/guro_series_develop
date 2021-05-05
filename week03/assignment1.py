import requests
import secret
from bs4 import BeautifulSoup

# 공공데이터 api 코로나 정보


key = secret.covid_key
service_key = requests.utils.unquote(key)

# 한 페이지 결과 수
numOfRows = 10
# 페이지 번호
pageNo = 1
# 데이터 생성일 시작번호
startCreateDt = 20210501
# 데이터 생성일 종료범위
endCreateDt = 20210503
params = {'serviceKey': service_key, 'pageNo': pageNo, 'numOfRows': numOfRows, 'startCreateDt': startCreateDt,
          'endCreateDt': endCreateDt}
url = f'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'

response = requests.get(
    url=url,
    params=params)

soup = BeautifulSoup(response.content, 'html.parser')

data = soup.find_all('item')
print(data)

for item in data:
    state_dt = item.find('createdt').get_text()
    print('기준일: ' + state_dt)
    death_cnt = item.find('deathcnt').get_text()
    print('사망자수: '+death_cnt)
    decide_cnt = item.find('decidecnt').get_text()
    print('확진자수: '+decide_cnt)
    death_cnt = item.find('deathcnt').get_text()
    print('사망자수: '+death_cnt)
    print('===========================================')
