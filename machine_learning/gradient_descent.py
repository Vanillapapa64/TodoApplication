import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
from sklearn.linear_model import LinearRegression
import math
df=pd.read_csv("/Users/navkiratsingh/Documents/coding/test_scores.csv")
x=np.array(df['math'])
y=np.array(df['cs'])
clf=LinearRegression()
clf.fit(df[['math']],df['cs'])
m_sk=clf.coef_
b_sk=clf.intercept_
def gradient_descent(x,y):
    m_curr = b_curr= 0 
    n=len(x)
    steps=0.000211
    iterations=10000000
    prev_cost=0
    for i in range(iterations):
        y_predicted=m_curr*x + b_curr
        cost=(1/n)*sum([value**2 for value in (y-y_predicted)])
        db=-(2/n)*sum(y-y_predicted)
        dm=-(2/n)*sum(x*(y-y_predicted))
        m_curr=m_curr-steps*dm
        b_curr=b_curr-steps*db
        if math.isclose(cost,prev_cost,rel_tol=1e-30):
            break
        prev_cost=cost
        print("m{}, b{}, cost{},iteration{}".format(m_curr,b_curr,cost,i))
    return m_curr,b_curr
m,b=gradient_descent(x,y)
print("Using gradient descent function: Coef {} Intercept {}".format(m, b))
print("Using sklearn: Coef {} Intercept {}".format(m_sk,b_sk))
