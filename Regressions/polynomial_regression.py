import numpy as np 
import matplotlib.pyplot as plt 
import pandas as pd 
#dataset pesh kro
dataset= pd.read_csv('/Users/navkiratsingh/Documents/coding/Regressions/position_salaries.csv')
x= dataset.iloc[:,1:2].values
y=dataset.iloc[:,2].values
#hun dataset nu test data te training data ch split kraange
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test= train_test_split(x,y, test_size=0.9, random_state=0)
#hun data nu model ch fit krna
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
poly_reg= PolynomialFeatures(degree=4)
x_poly=poly_reg.fit_transform(x)
pol_reg= LinearRegression()
pol_reg.fit(x_poly,y)
#hun results visualise krne aa
def viz_polynomial():
    plt.scatter(x,y, color='blue')
    plt.plot(x,pol_reg.predict(poly_reg.fit_transform(x)),color='red')
    plt.title('GNDU')
    plt.xlabel('PROFESSOR EXP')
    plt.ylabel('prof tankha')
    plt.show()
    return
viz_polynomial()
#hun apaan 5.5 saal de exp wale professor di tankhaa kddange
print(pol_reg.predict(poly_reg.fit_transform([[5.5]])))