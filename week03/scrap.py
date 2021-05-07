import requests
import pprint
import secret
import os
import sys
import urllib.request

# HTTP GET request
response = requests.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')

result = response.json()
# print(result)
# pprint.pprint(result['RealtimeCityAir']['row'])

# data = result['RealtimeCityAir']['row']
#
# for datum in data:
#     state = datum['MSRSTE_NM']
#     pm10 = datum['PM10']
#
#     if pm10 > 25.0:
#         # f-string
#         print(f'{state} - {pm10}')

book_name = '프리워커스'
naver_url = f'https://openapi.naver.com/v1/search/book.json?query={book_name}'

headers = {'X-Naver-Client-Id': secret.client_id, 'X-Naver-Client-Secret': secret.client_Secret}

response = requests.get(
    naver_url,
    headers=headers,
)

pprint.pprint(response.json())

# 파파고 번역 api 활용

# 번역할 문자

# text = input('번역할 문자를 입력하세요 : ')
# encText = urllib.parse.quote(text)
# papago_data = 'source=ko&target=en&text=' + encText
data = {'source': 'ko', 'target': 'en', 'text': '안녕하세요 바보 멍텅구리 '}
papago_url = 'https://openapi.naver.com/v1/papago/n2mt'
papago_response = requests.post(
    papago_url,
    headers=headers,
    data=data,
)
# print(papago_response.json())
papago_result = papago_response.json()
print(papago_result['message']['result']['translatedText'])
