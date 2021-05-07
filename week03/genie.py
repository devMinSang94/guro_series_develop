import requests
from bs4 import BeautifulSoup

def geniecrawling():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    response = requests.get(
        'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd=20200713',
        headers=headers

    )

    soup = BeautifulSoup(response.text, 'html.parser')
    selector = '#body-content > div.newest-list > div > table > tbody > tr'
    title_selector = 'td.info > a.title.ellipsis'
    rank_selector = 'td.number'
    artist_selector = 'td.info > a.artist.ellipsis'
    titles = soup.select(selector)

    for title in titles:
        title_tag = title.select_one(title_selector).text.strip()
        rank_tag = title.select_one(rank_selector).text[0:2].strip()
        artist_tag = title.select_one(artist_selector).text.strip()
        print(f'{rank_tag} | {title_tag} | {artist_tag}')

    date = input('년도를 입력하세요 :')
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    response = requests.get(
        f'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd={date}',
        headers=headers

    )

    soup = BeautifulSoup(response.text, 'html.parser')
    selector = '#body-content > div.newest-list > div > table > tbody > tr'
    title_selector = 'td.info > a.title.ellipsis'
    rank_selector = 'td.number'
    artist_selector = 'td.info > a.artist.ellipsis'
    titles = soup.select(selector)

    for title in titles:
        title_tag = title.select_one(title_selector).text.strip()
        rank_tag = title.select_one(rank_selector).text[0:2].strip()
        artist_tag = title.select_one(artist_selector).text.strip()
        print(f'{rank_tag} | {title_tag} | {artist_tag}')


geniecrawling()