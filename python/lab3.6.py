n=int(input("enter any number"))
temp,s = n,0
while temp>0:
    s+=(temp%10)**len(str(n))
    temp //= 10
print(f"Amstrong number" if s==n else "not Armrstong") 
