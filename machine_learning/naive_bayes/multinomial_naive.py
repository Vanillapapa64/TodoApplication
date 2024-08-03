import sklearn
import pandas as pd 
from sklearn import datasets
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn import metrics
#dataset=pd.read_csv("/Users/navkiratsingh/Documents/coding/naive_bayes/wine.csv", header=0)
wine=datasets.load_wine() 
print("features: " ,wine.feature_names)
print("Labels:", wine.target_names)
wine.data.shape
print(wine.data[0:5])
print(wine.target)
x_train,x_test,y_train,y_test=train_test_split(wine.data, wine.target, test_size=0.3, random_state=109)
NB=GaussianNB()
NB.fit(x_train,y_train)
y_pred=NB.predict(x_test)
print(y_pred)
acc=metrics.accuracy_score(y_test,y_pred)*100
print(acc)




