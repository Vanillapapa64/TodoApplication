import requests
from bs4 import BeautifulSoup

url = "https://www.vanityfair.com/style/society/2014/06/monica-lewinsky-humiliation-culture"
r = requests.get(url)

#print(r_html)

bs = BeautifulSoup(r.text,features="html.parser")

# Use a more generic class or find a better way to locate the article content
element= bs.select("div.parbase.cn_text > div.body > p")[7:]
for elem in element[7:]:
    print(elem.text)
"""
x=article.text.replace("<span>","")

f=open("article.text","w")
f.write(article.text.replace("<span>",""))
f.close
"""