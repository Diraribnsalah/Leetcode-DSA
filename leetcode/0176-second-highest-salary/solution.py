import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    salary=employee["salary"].drop_duplicates().sort_values(ascending=False)
    if len(salary)==0 or len(salary)==1:
        return pd.DataFrame({"SecondHighestSalary":[None]})
    second_heighest_salary=salary.iloc[1]    
    return pd.DataFrame({"SecondHighestSalary":[second_heighest_salary]}) 

    
    
