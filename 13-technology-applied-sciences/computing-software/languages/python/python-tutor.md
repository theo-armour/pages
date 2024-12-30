# Python Tutor

## Links

* https://www.python.org/
* https://docs.python.org/3/
* https://docs.python.org/3/tutorial/index.html
* https://docs.python.org/3/using/cmdline.html#
* https://docs.python.org/3.11/using/windows.html

## Tutorial

* https://code.visualstudio.com/docs/python/python-tutorial
* https://www.w3schools.com/python/
* https://www.geeksforgeeks.org/python3-tutorial/?ref=ghm


## Update to latest

Go to https://python.org and download


## Starting Python

terminal > command prompt > py


## install

py -m pip install numpy

## Commands

* Exit > control + z
* Exit > exit()
* Help >help()
* Clear screen: >control + l / L
* Run script: >py filename.py
* Versions: >py --list
* version: >py --version
* Comments start with a #

``` python
 """
 This is a comment
 written in
 more than just one line
 """
 print("Hello, World!")
```

## Casting

``` python
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

## Type

``` python
x = 5
y = "John"
print(type(x))
print(type(y))
```

## Tips

* Variable names are case-sensitive.
* A variable name must start with a letter or the underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
* Variable names are case-sensitive (age, Age and AGE are three different variables)
* A variable name cannot be any of the Python keywords.

* String variables can be declared either by using single or double quotes:
* You can assign a multiline string to a variable by using three quotes - single or double:
* put an f in front of the string literal, and add curly brackets {} as placeholders for variables and other operations.
* `txt = f"My name is John, I am {age}"`


## Data Types

* Text Type: str
* Numeric Types: int, float, complex
* Sequence Types: list, tuple, range
* Mapping Type: dict
* Set Types: set, frozenset
* Boolean Type: bool
* Binary Types: bytes, bytearray, memoryview
* None Type: NoneType

## Standard Library

* https://docs.python.org/3/library/index.html


## Pip

* https://pypi.org/
* https://pypi.org/project/pip/
* https://pip.pypa.io/en/stable/getting-started/
* https://www.w3schools.com/python/python_pip.asp

### Version

* C:\Users\tarmo\AppData\Local\Programs\Python\Python313\Scripts\pip.exe --version
* >python -m pip --version

```
py -m pip install <sampleproject>
```


### py List Packages

* >py -m pip list

### py Install Requests

>Requests is a simple, yet elegant, HTTP library.

* https://pypi.org/project/requests/
* >py -m pip install requests

### Install Beautiful Soup

>Beautiful Soup is a library that makes it easy to scrape information from web pages. It sits atop an HTML or XML parser, providing Pythonic idioms for iterating, searching, and modifying the parse tree.

* https://pypi.org/project/beautifulsoup4/
* py -m pip install bs4


## Python Packages

* https://packaging.python.org/en/latest/tutorials/installing-packages/

## Python Virtual Environments

Venv

* https://docs.python.org/3/library/venv.html
* https://realpython.com/python-virtual-environments-a-primer/
* https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/