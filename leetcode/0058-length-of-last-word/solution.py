class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1 
        while s[i] == " " :
            i  = i - 1 

        lengthOfLastWordWithoutSpace = 0

        while i >= 0 and s[i] != " " :
            lengthOfLastWordWithoutSpace += 1 
            i -= 1

        return lengthOfLastWordWithoutSpace    

      
