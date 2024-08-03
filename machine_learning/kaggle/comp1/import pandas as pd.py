import pandas as pd
df=pd.read_csv('/Users/navkiratsingh/Downloads/Submission.csv')
df.drop('Unnamed: 0',axis='columns',inplace=True)
df['PassengerId']=df['Passenger Id']
df.drop('Passenger Id',axis='columns',inplace=True)
df.iloc[:,[1,0]]
df.to_csv('final_submission.csv',index=False)