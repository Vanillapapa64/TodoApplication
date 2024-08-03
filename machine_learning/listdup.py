import random
username=input("choose your username:")
userin=int(input("how long you want your password be"))
difficulty=int(input("Choose difficulty level"+"\n"+"1:easy   2:medium  3:hard"+"\n"+">>>>"))

while True:
    y=[]
    if difficulty==1:
        for i in range(userin):
            x=random.choice('1234567890QWERTYUIOPASDFGHJKLZXCVBNM')

            y.append(x)
            if len(y)>15:
                break
    elif difficulty==2:
        for i in range(userin):
            x=random.choice('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890')

            y.append(x)
            if len(y)>15:
                break
    elif difficulty==3:
        for i in range(userin):
            x=random.choice('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*1234567890')

            y.append(x)
            if len(y)>15:
                break
    result=''.join(y)
    print(result)
    regenerate=input("press enter to regenerate:")
    if regenerate=="":
        continue
    else:
        break
f=open("/Users/navkiratsingh/Documents/coding/password.txt","w")
f.write(username)
f.write(result)
f.close()
