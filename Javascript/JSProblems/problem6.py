
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

str = "Racecar";
if is_palindrome(str):
    print(f" '{str}' is a palindrome!")
else:
    print(f" '{str}' is not a palindrome!")
