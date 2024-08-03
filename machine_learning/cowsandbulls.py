import random
print("welcome to cows and bull game")
y=[]
while len(y)<4:
    c=random.randint(0,9)
    y.append(c)
y=str(y)

if __name__=="__main__":
    user=input("guess any 4 number" +"\n"+">>>")
if len(user)!=4:
    raise ValueError
user=list(user)
#print(user)
#
p=0
l=0
for i in user:
    if i in y:
        p+=1
    if i not in y:
        l+=1
#print(y)
#print(p)
#print(l)
print("you have {} cows and {} bulls".format(p,l))
#print(y)