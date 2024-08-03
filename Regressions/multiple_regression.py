#sbbto pehlaan libraries import kitiaan numpy,matplotlib te pandas
import numpy as np 
import matplotlib.pyplot as plt 
import pandas as pd 
# hun apaan dataset import kita te ohnu testing vaste data splitting kiti using sklearn
dataset= pd.read_csv('/Users/navkiratsingh/Documents/coding/Regressions/position_salaries.csv')
x= dataset.iloc[:,1:2].values
y=dataset.iloc[:,2].values
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2, random_state=0)
#hun apaan dataset te linear regression fit kraange
from sklearn.linear_model import LinearRegression
lin_reg = LinearRegression()
lin_reg.fit(x,y)
# hun appan result nu display krna ae
def viz_linear():
    plt.scatter(x,y, color='blue')
    plt.plot(x, lin_reg.predict(x), color='yellow')
    plt.title('ek average bande di zindagi')
    plt.xlabel('kinne saal bund ghasayi aa bande ne') 
    plt.ylabel('enne saal bund ghasaun di kinni k tankhaah milugi')
    plt.show()
    return
viz_linear()
