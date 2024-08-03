a=1234
number=a
c=len(str(a))
b=0
r=0
while c!=0:
    number=a%10
    a=a//10
    
    r=r*10+number
    c-=1
print(r)