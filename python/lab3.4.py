import math

a = float(input("Enter coefficient a: "))
b = float(input("Enter coefficient b: "))
c = float(input("Enter coefficient c: "))

d = b**2 - 4*a*c
print(d)
if d > 0:
    root1 = (-b + math.sqrt(d)) / (2*a)
    root2 = (-b - math.sqrt(d)) / (2*a)
    print(f"The roots are real and distinct: {root1} and {root2}")
elif d == 0:
    root = -b / (2*a)
    print(f"The roots are real and equal: {root}")
else:
    real_part = -b / (2*a)
    imaginary_part = math.sqrt(abs(d)) / (2*a)
    print(f"The roots are complex: {real_part} + {imaginary_part}i and {real_part} - {imaginary_part}i")
