# 네이버 한국 야구 순위 가져오기
import requests
from bs4 import BeautifulSoup

headers = headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
response = requests.get(
    'https://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo',
    headers=headers

)

soup = BeautifulSoup(response.text, 'html.parser')
selector = '#regularTeamRecordList_table > tr'

team_name_selector = 'td.tm span '
team_winRate_selector = 'td:nth-child(7)'

teams = soup.select(selector)
rank = 0
for team in teams:
    name = team.select_one(team_name_selector).text
    winRate = team.select_one(team_winRate_selector).text
    print(f'{rank} | {name} | {winRate}')
    rank += 1