#without python loops and deep syntax
#import pandas as pd

#def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
#   sorted_scores = scores.sort_values(by="score", ascending=False).reset_index(drop=True)
#  sorted_scores["rank"] = sorted_scores["score"].rank(method="dense", ascending=False).astype(int)
# return sorted_scores

# with python loops and deep syntax
import pandas as pd

def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    sorted_scores = scores["score"].sort_values(ascending=False)
    copy = sorted_scores.copy()
    rank = []
    rank_id = 1
    
    while len(copy) > 0:
        current_value = copy.iloc[0]  
        same_values = copy[copy == current_value] 
        count = len(same_values)
        rank.extend([rank_id] * count)
        copy = copy.iloc[count:]
        rank_id += 1
    result = pd.DataFrame({
        "score": sorted_scores.values,
        "rank": rank
    })
    return result

