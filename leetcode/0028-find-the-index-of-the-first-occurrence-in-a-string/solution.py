class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        self.needle=needle
        self.haystack=haystack
        if self.needle in self.haystack:
            return self.haystack.find(self.needle)
        return -1
