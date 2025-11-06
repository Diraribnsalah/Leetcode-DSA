import pandas as pd

def consecutive_numbers(logs: pd.DataFrame) -> pd.DataFrame:
    nums=logs["num"].tolist()
    result=[]

    for i in range(2,len(nums)):
        if nums[i] == nums[i-1] == nums[i-2]:
            if nums[i] not in result:
                result.append(nums[i])
    
     
    
    return pd.DataFrame({"ConsecutiveNums":result})
    
