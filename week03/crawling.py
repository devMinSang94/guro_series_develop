import requests
from bs4 import BeautifulSoup

# 크롤링 패키지 - beautifulsoup4

headers = headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
response = requests.get(
    'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200716',
    headers=headers

)
# print(response.text)

# HTML 데이터 가공
soup = BeautifulSoup(response.text, 'html.parser')
selector = '#old_content > table > tbody > tr'
title_selector = 'td.title > div > a'
titles = soup.select(selector)

rank_selector = 'td.point'
rank = soup.select(selector)
rank = 0
for title in titles:
    title_tag = title.select_one(title_selector)
    rank_tag = title.select_one(rank_selector)
    if title_tag:
        print(f'순위:{rank} | 제목: {title_tag.text} | 평점: {rank_tag.text}')

    rank = rank + 1
