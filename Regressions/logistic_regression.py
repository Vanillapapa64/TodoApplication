#appan necessary libraries import krnia aa
import seaborn as sn 
import pandas as pd 
import matplotlib.pylab as plt 
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.linear_model import LogisticRegression
#hun aapa data pesh kraange
data={'gmat':[780,750,690,710,680,730,690,720,740,690,610,690,710,680,770,610,580,650,540,590,620,600,550,550,570,670,660,580,650,660,640,620,660,660,680,650,670,580,590,690],
      'gpa':[4,3.9,3.3,3.7,3.9,3.7,2.3,3.3,3.3,1.7,2.7,3.7,3.7,3.3,3.3,3,2.7,3.7,2.7,2.3,3.3,2,2.3,2.7,3,3.3,3.7,2.3,3.7,3.3,3,2.7,4,3.3,3.3,2.3,2.7,3.3,1.7,3.7],
      'work_experience':[3,4,3,5,4,6,1,4,5,1,3,5,6,4,3,1,4,6,2,3,2,1,4,1,2,6,4,2,6,5,1,2,4,6,5,1,2,1,4,5],
      'admitted':[1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1]
      }
# hun data assign kraange
df=pd.DataFrame(data,columns=['gmat','gpa','work_experience','admitted'])
#x is independent variable and y is independent variable. x de naal double square brackt lggugi
x= df[['gmat','gpa','work_experience']]
y=df['admitted']
#hun testing data di vaari  pehlaan data split krna pena  training data te test data ch
x_train, x_test, y_train, y_test= train_test_split(x,y,test_size=0.25,random_state=0)
#hun logistic regression apply kraange
log_reg= LogisticRegression()
log_reg.fit(x_train,y_train)
prediciton=log_reg.predict(x_test)
#hun matrix create kraange
matrix=pd.crosstab(y_test,prediciton,rownames=['asli hai boss'],colnames=["tukka lgaaya"],margins=True)
ax=sn.heatmap(matrix,annot=True)
plt.show()
print(matrix)
print('accuracy:  ', metrics.accuracy_score(y_test,prediciton))