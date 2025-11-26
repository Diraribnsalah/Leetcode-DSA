class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        symboles = {")" : "(","]" : "[" ,"}" : "{"}
        for symbole in s:
            if symbole in "([{":
                stack.append(symbole)
            elif symbole in ")]}":
                if len(stack)==0 or stack.pop() != symboles[symbole]:
                    return False            
        return len(stack)==0              
        
