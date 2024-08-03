from sklearn import preprocessing
import pandas as pd 
dataset=pd.read_csv("/Users/navkiratsingh/Documents/coding/naive_bayes/Buy_Computer.csv")


le=preprocessing.LabelEncoder()
age_encoded=le.fit_transform(dataset.age)
print(age_encoded)
income_encoded=le.fit_transform(dataset.income)
print(income_encoded)
student_encoded=le.fit_transform(dataset.student)
print(student_encoded)
credit_encoded=le.fit_transform(dataset.credit_rating)
print(credit_encoded)
label=le.fit_transform(dataset.Buy_Computer)
print(label)
from sklearn.naive_bayes import GaussianNB
features=list(zip(age_encoded,income_encoded,student_encoded,credit_encoded))
model= GaussianNB()
model.fit(features,label)
#youth with medium income who is not a student and has a fair credit_score
prediction=model.predict([[2,2,0,1]])
print(prediction)







                    