import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn import metrics
from sklearn.metrics import accuracy_score
import seaborn as sn
from sklearn.metrics import classification_report,confusion_matrix
colnames=['sepal.length',"sepal.width","petal.length","petal.width",'class']
dataset=pd.read_csv("/Users/navkiratsingh/Documents/coding/naive_bayes/iris.csv",names=colnames,header=0)
x=dataset.drop('class',axis=1)
y=dataset['class']
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3,random_state=1)
classifier=SVC(kernel='linear')
classifier=classifier.fit(x_train,y_train)
prediction=classifier.predict(x_test)
print(prediction)
print(accuracy_score(y_test,prediction)*100)
print(classification_report(y_test,prediction))
confusion_matrix=pd.crosstab(y_test,prediction,rownames=['actual'],colnames=['predicted'])
ax=sn.heatmap(confusion_matrix,annot=True)
plt.show()