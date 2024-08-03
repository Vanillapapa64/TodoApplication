import requests
url="https://www.ndtv.com"
r=requests.get(url)
r_html=r.text
f=open("/Users/navkiratsingh/Documents/coding/nytimes.txt","w")
f.write(r_html)
f.close()
from bs4 import BeautifulSoup
bs=BeautifulSoup(r_html,features="lxml")
for titles in bs.find_all(class_="item-title"):
    if titles.a:
        print(titles.a.text.replace("\n"," ").strip())
    else:
        print(titles.contents[0].strip())