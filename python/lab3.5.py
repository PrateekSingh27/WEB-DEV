
num = int(input("Enter a number: "))
factorial = 1
n = num

while n > 1:
    factorial *= n
    n -= 1
print(f"The factorial of {num} is {factorial}")
