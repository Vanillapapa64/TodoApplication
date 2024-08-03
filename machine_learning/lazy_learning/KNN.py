import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report,confusion_matrix 
import numpy as np 
df=pd.read_csv("/Users/navkiratsingh/Documents/coding/naive_bayes/iris.csv")
x=df.values[1:,0:4]
y=df.values[1:,4]
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.4,random_state=None)
clf=KNeighborsClassifier(n_neighbors=5)
clf=clf.fit(x_train,y_train)
y_pred=clf.predict(x_test)
print(y_pred)
print("accuracy score:", accuracy_score(y_pred,y_test)*100)
print(confusion_matrix(y_pred,y_test))
print(classification_report(y_pred,y_test))
error=[]
for i in range(1,50):
    knn=KNeighborsClassifier(n_neighbors=i)
    knn.fit(x_train,y_train)
    error.append(np.mean(y_pred!=y_test))
plt.figure(figsize=(12,6))
plt.plot(range(1,50),error,color='green',linestyle='dashed',marker='o',markerfacecolor='red',markersize=14)
plt.title('error rate k value')
plt.xlabel('k value')
plt.ylabel('mean error')
plt.show()