import random
for num1 in range(1, 11):
    for num2 in range(1, 11):
        print(num1 * num2, end=' ')
    print('\n')

my_rand = random.randint(1, 11)
try:
    num = int(input('Guess a number from 1-10 '))
except ValueError as e:
    print(e)
while num != my_rand:
    if num < my_rand:
        print('too low')
    else:
        print('too high')
    num = int(input('Guess a number from 1-10 '))
print("you are a winner")
