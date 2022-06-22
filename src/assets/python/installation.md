- [Differences from TS](#differences-from-ts)
    - [Data types](#data-types)
    - [Arithmetic is similar to js but with some differences:](#arithmetic-is-similar-to-js-but-with-some-differences)
    - [Logical operators](#logical-operators)
  - [Control flow](#control-flow)
  - [Functions](#functions)
  - [Classes](#classes)
  - [Ints and floats](#ints-and-floats)
    - [Floats are approximations](#floats-are-approximations)
  - [Booleans](#booleans)
  - [Strings](#strings)
  - [Slice](#slice)
    - [String interpolation](#string-interpolation)
    - [Multiline strings](#multiline-strings)
- [Lists (arrays)](#lists-arrays)
  - [slice](#slice-1)
  - [range() type](#range-type)
  - [Modifying lists](#modifying-lists)
- [Sets](#sets)
- [Tuples](#tuples)
- [dictionaries (object)](#dictionaries-object)
  - [default dictionaries](#default-dictionaries)
- [spread operator](#spread-operator)
- [List comprehensions](#list-comprehensions)
  - [Nested list comprehensions](#nested-list-comprehensions)
- [Dictionary Comprehensions](#dictionary-comprehensions)
- [If elif else ( if elseif else)](#if-elif-else--if-elseif-else)
  - [Inline if statement (Ternary)](#inline-if-statement-ternary)
- [While loops](#while-loops)
  - [pass](#pass)
- [For loop (ForEach and for..in)](#for-loop-foreach-and-forin)
  - [For else](#for-else)
  - [forEach](#foreach)
  - [For...in](#forin)
- [Function](#function)
  - [*args](#args)
  - [**kwargs](#kwargs)

## Download instructions
- download python (includes pip)
  - [python](https://www.python.org/downloads/)
  - While macs come with python 2, we need to download python 3.
  - To differentiate between python 2 and python 3, we use `python3` and `pip3`
- download jupyter notebook `pip install jupyter`
- download tutorial files and open them with vscode
- Go to the file of the current class

## to run .py files

`python <file name>.py`

## use pip 

`pip3 install <package name>`

> pip command is not recognize 

## Having python tutorial 

[How to](https://stackoverflow.com/questions/45384616/how-to-embed-an-interactive-jupyter-notebook-into-html)

# Differences from TS

> If I don't mention the exception than assume its the same as in TS

- `console.log` -> `print()`
- `{}` -> `:` and tab
- `;` -> `{enter}` new lines 

### Data types
All data types exist plus sets, and tuples.
- boolean is `True` and `False`. Capitalized first letter.
- sets are object keys
  - order doesn't matter
  - repeating keys auto deleted
- tuples are arrays with `()`
  - order matters
  - cannot add or remote items after initialization
- name change (syntax is the same)
  - arrays -> list
  - object -> dictionary
  - array.push() -> list.append()
- `null || undefined -> None`

### Arithmetic is similar to js but with some differences:
- You can multiply a string
  - `'- string 1 - ' * 4` -> `- string 1 - string 1 - string 1 - string 1`
  - js gives NaN
  
### Logical operators

are replace from symbols to key words:
- `&&` -> `and`
- `||` -> `or`
- `!` -> `not`

## Control flow

- `()` is not use. we just write the statement without it
- `array.forEach()` -> `for element in array:`
- while loop is more commonly used
```ts
a = 0
while a < 5:
    print(a)
    a = a + 1
```

> note that using `in` counts has a for loop to find the element

## Functions

- `function name(){}` -> `def name():`

## Classes

- `constructor` -> `__init__ `
- `this` -> `self` 
- all variables are define in the `__init__ constructor`


```python
class Dog:
  # __init__ -> constructor
  # self => this
    def __init__(self, name):
        self.name = name
        self.legs = 4
    
    def speak(self):
        # use self to access the attributes of the class
        print(self.name + ' says: Bark!')

# initialize class
my_dog = Dog('Rover')

# run a class function
another_dog.speak()
```


## Ints and floats

- `parseToInt()` -> `int()`
  - int() is a class
  - same for floats, list, str
- `Math.round()`, `number.toFixed(<allow decimal places>)` -> `round(<number>, optional <decimal places>)`
  - Repeats to 10 repeating numbers

### Floats are approximations

- this make cause some approximation errors 
- `1.2 - 1.0 -> 0.19999999999999996`
- expect 98% of currentness
- careful when dealing with very small numbers, or very big numbers
- best pratice is to round all your floats before delivering to the user
- we avoid approximation errors we could also use Decimal class
  - `from decimal import Decimal, getcontext`
  - [Docs](https://docs.python.org/3/library/decimal.html)

> Always round appropriately before showing values to end users

## Booleans

you can cast a type to boolean `bool(<variable>)`. When you do the results are the same as TS beside:
- `bool({})` -> `False`
> Note that if statements or for loops will cast the value into a bool() automatically

## Strings

Unlike TS, you will have to handle the casting.
- `console.log("hello " + 5)` -> `hello 5`
- `print("hello " + str(5))` -> `hello 5`

or use `string.format()` to insert value where the `{}` are located

`'Pi is: {}'.format(math.pi)` -> `'Pi is: 3.141592653589793'`

## Slice

- `string.slice(<start>, <end>)` -> `string[start:end]`


### String interpolation

- ` (backtick) -> f''
- `${}` -> `{}`

`f'My number is: {5} and twice that is {2*5}'`

### Multiline strings

`backtick` -> `""" """`

> you can use a syntax character by expecting it with the `\`

# Lists (arrays)

## slice
- `array.slice(<start>, <end>)` -> `array[start:end:steps]`
  - step default is 1
> a negative step reverses the array

## [range() type](https://www.w3schools.com/python/ref_func_range.asp)

> unique to python

`range(start, stop, step)`

returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.


Great for for-loops:

```python
for i in range(100):
    print(i)
# 0, 1, 2, ... 99
```

## Modifying lists

- `array.push(<value>)` -> `array.append(<value>)`
- `array.splice()` -> `array.insert(index, value)` and `array.remove(value)`
  - 🔴 if the item is not in the list and remove is called it will throw an error
- deep copy: `array.slice()` -> `array.copy()`

# Sets

object with only keys

- `{}` or `set()`. 
- Order doesn't matter for boolean check
- Deletes repeating keys

Like arrays you can 
  - `array.push()`to the tail -> `set.add()` to the pile
  - `array.pop()` -> `set.pop()`

but you cannot `[]` or dot notation to access items. You have to loop through the set.

- using `in` to check if the value exist inside
- clear duplicate and cast to another data type
```python
myList = ['a', 'b', 'b', 'c', 'c']
list(set(myList))
['c', 'b', 'a']
```

# Tuples

arrays that cannot be modified

- `()` or `tuple()`. 
- Order matter for boolean check
- allows duplicates
- multiples values to a single variable sets it as a tuple

```python
def returnsMultipleValues():
    return 1,2,3

value = returnsMultipleValues()
type(value) # tuple

a, b, c = returnsMultipleValues()
type(a) # int
type(b) # int
type(c) # int
```

# dictionaries (object)

same as TS besides:
- adds value using a method
  -  `Object.defineProperty()` -> `dict.append()` 
-  getting a non-existent value will throw an error
-  `dict.get(key)` behaves like TS

Useful methods:
-  `dict.keys()` -> `[list of keys]`
-  `dict.values()` -> `[list of values]`
-  `dict.items()` -> `[list of tuples]` : `[(key, value)]`
-  return something similar to a dictionary but with a connection to the dictionary
   -  to change the array you have to change the dictionary

## default dictionaries

Behaves almost exactly like a regular Python dictionary, but **if you try to access or modify a missing key, then defaultdict will automatically create the key and generate a default value for it**. This makes defaultdict a valuable option for handling missing keys in dictionaries.

```python
from collections import defaultdict

# init  defaultdict with the object type
# need to pass the type of object that it should return by default
# common mistake: passing an instance of the object instead of the type
animals = defaultdict(list)

# then you append the values to the dictionary
animals['e'].append('elephant') # defaultdict(list, {'e': ['elephant', 'emu']})
```

# spread operator

[Link](https://how.wtf/spread-operator-in-python.html#:~:text=The%20JavaScript%20spread%20operator%20(..,that%20allows%20for%20iterable%20unpacking.)

# List comprehensions

`[<value to be inserted (optional wrap with logic)> for element of array if condition]`

Programmatically listing things out

- `array.filter()` -> `[for element of array if condition]`
- `array.map()` -> `[ element(can add logic to it) for element of array]`

`string.split()` only differ on default value and returning the split value
- default
  - python -> `" "`
  - JS -> `""`
- returns split value
  - python -> yes
  - JS -> no

## Nested list comprehensions

Adding a list comprehension on the insert logic side

```python
[[cleanWord(word) for word in sentence.split()] for sentence in myString.split('.')]
```
`[['my', 'name', 'is', 'ryan', 'mitchell'], ['i', 'live', 'in', 'boston']]`

# Dictionary Comprehensions

Programmatically creating a dictionary like list comprehensions

- `{element[0]: element[1] for element of array if condition}`
- `{<key>: <value> for key, value of array if condition}`

> Python allows you to unpack values into multiple variables, as long as the number of variables you're assigning the values to matches the elements in this data structure

Can add the dict comprehension to populate a dictionary with the values of a list.
`[{'letter': key, 'name': value} for key, value in animals.items()]`

```python
[{'letter': 'a', 'name': 'aardvark'},
 {'letter': 'b', 'name': 'bear'},
 {'letter': 'c', 'name': 'cat'},
 {'letter': 'd', 'name': 'dog'}]
```

# If elif else ( if elseif else)

```python
for n in range(1, 101):
    if n % 15 == 0:
        print('FizzBuzz')
    elif n % 3 == 0:
        print('Fizz')
    elif n % 5 == 0:
        print('Buzz')
    else:
        print(n)
```

## Inline if statement (Ternary)

```python
n = 5 #or 0
print('Fizz' if n % 3 == 0 else n) # 5
```

# While loops
- break
- continue

Same has TS

## pass

> only in python

Perserve the indentation of the loop when you don't want to calculate anything on the loop. 

```python
from datetime import datetime
wait_until = datetime.now().second + 2

while datetime.now().second != wait_until:
    pass

print(f"We are at {wait_until} seconds!")
```

# For loop (ForEach and for..in)

`for (variable(s)) in array:`

## For else

Runs if the break is activated

```python
for number in range(2, 100):
  for factor in range(2, int(number**0.5)):
    if number % factor == 0:
      break
  else:
      print(f'{number} is prime!')
```
## forEach

```python
myList = [1,2,3,4,5]
for item in myList:
    print(item)
```

## For...in
[JS for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```python
animalLookup = {
    'a': ['aardvark', 'antelope'],
    'b': ['bear'],
    'c': ['cat'],
    'd': ['dog'],
}

print(animalLookup.items())
for letter, animals in animalLookup.items():
    print(letter)
    print(animals)
```

```python
dict_items([('a', ['aardvark', 'antelope']), ('b', ['bear']), ('c', ['cat']), ('d', ['dog'])])
a
['aardvark', 'antelope']
b
['bear']
c
['cat']
d
['dog']
```

To get access to the id use enumerate:

```python
for i, (key, val) in enumerate(contractData.items()):
  if i == len(contractData.items()) - 1:
      queryParams += f"@{contractSummaryMap.get(key)} = {repr(val)}  "
  else:
      queryParams += f"@{contractSummaryMap.get(key)} = {repr(val)},  "
```

# Function

- `def name(input):`
- `name(input)`

```python
def performOperation(num1, num2, operation = 'sum'):
    if operation == 'sum':
        return num1 + num2
    if operation == 'multiply':
        return num1 * num2

performOperation(2,3, operation = "multiply") #We can specify the name of the input and to know how to worry about the input order.
# the order of the primitive input does matter
```

## *args

Capture all primitive inputs

>Like TS passing an array

```python
def performOperation(*args):
    print(args)
    
performOperation(1,2,3)
```

## **kwargs

Capture all keyword inputs. 

>Like TS passing an object

```python
def performOperation(*args):
    print(args)
    
performOperation(1,2,3)
```
