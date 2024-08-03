#important libraries
import pandas as pd 
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.metrics import accuracy_score
from sklearn import tree 
import matplotlib.pyplot as plt 
#csv file ton data read krna
df = pd.read_csv("/Users/navkiratsingh/Documents/coding/decision_tree/diabetes.csv", header=None)
#hun data split kraange into feature and target
x = df.values[1:,0:8]
y= df.values[1:,8]
#hun data nu training set and test set ch split kraange
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.25,random_state=1)
#hun decision tree construct kraange
decisiontree=DecisionTreeClassifier(class_weight=None, criterion='entropy', max_depth=3,max_features=None,
                                    max_leaf_nodes=None,min_samples_leaf=5,min_samples_split=2,
                                    min_weight_fraction_leaf=0.0,
                                    random_state=100,splitter='best')
decisiontree=decisiontree.fit(x_train,y_train)
y_prediction=decisiontree.predict(x_test)
print(y_prediction)
print(accuracy_score(y_test,y_prediction)*100)
tree.plot_tree(decisiontree)
plt.show()

