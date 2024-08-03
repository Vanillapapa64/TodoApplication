import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt 
from sklearn.metrics import confusion_matrix,classification_report
from sklearn.ensemble import RandomForestClassifier
import seaborn as sn 
colnames=['sepal-length','sepal-width','petal-length','petal-width','class']
df=pd.read_csv("/Users/navkiratsingh/Documents/coding/lazy_learning/iris.csv",names=colnames,header=0)
x=df.drop('class',axis=1)
y=df['class']
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3,random_state=1)
clf=RandomForestClassifier(n_estimators=45)
clf=clf.fit(x_train,y_train)
y_pred=clf.predict(x_test)
print(y_pred)
print("Accuracy is:", accuracy_score(y_pred,y_test)*100)
print(classification_report(y_test,y_pred))
confusion_matrix=pd.crosstab(y_test,y_pred,rownames=['actual'], colnames=['predicted'])
ax=sn.heatmap(confusion_matrix,annot=True)
plt.show()