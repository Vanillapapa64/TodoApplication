from sklearn.linear_model import LinearRegression
import joblib
lr=joblib.load('lotfrontage vs price')
lr.predict([[1000]])