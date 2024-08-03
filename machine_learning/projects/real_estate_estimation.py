
import pandas as pd 
import math 
import seaborn as sns

import matplotlib.pyplot as plt 

import numpy as np 
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
df =  pd.read_csv('/Users/navkiratsingh/Documents/coding/projects/Real estate.csv')
df.describe()
df.head()
df.info()
x=df[['X1 transaction date','X2 house age','X3 distance to the nearest MRT station',
      'X4 number of convenience stores','X5 latitude','X6 longitude']]
y=df['Y house price of unit area']
x

