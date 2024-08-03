'''a=int(input("enter number"))
product=1
while a>0:
    product=product*a
    a-=1
print(product)'''
b=int(input("enter the number"))
z=b
c=0
sum=0
l=0
while b>0:
    digit=b%10
    b=b//10
    c+=1
    l=l+(digit**c)
    
if l==z:
    print("it is amstrong number")
else:
    print('its not')
