# # #syntax of python--->

# print("Hello World")

# if 5<6:
#     print("five is less than six")




# # #comments--->

# # #print("hello")
# # #(# is used for comments)

# # #if 5<6:
# #   #  print("five is less than six")
# # """ 
# # if 9 > 6:
# # print("nine is grater than six")
# # """
# # """this multi string is used for commenting on multiple lines."""



# # #variables(var)----->

# a = "payal"
# b = "&"
# c = 5
# print(a)
# print(b)
# print(c)

# a = str(8)
# c = int(3)
# d = float(9)

# print(type(a))
# print(type(c))
# print(type(d))

# print('abc')

# A,B,C = "Red", "Blue", "Green"
# print (A)
# print (B)

# A=B=C = "Red"
# print (A)

# #types of Variables in Python--->
# """
# 1. Multi Words Variable Names-->
# 1.1- Camel Case
# myVariableName = "Abc"

# 1.2- Snake Case
# my_variable_name = "Abc"

# 1.3- Pascal Case
# MyVariableName = "Abc"

# 2. Multiple Valu Variables-->
# 2.1- One value to Multiple variable
# x=y=z= "Orange"

# 2.2- Many Value to Multiple Variables
# x,y,z = "Orange", "Red", "Green"

# 2.3- unpack Collection
# colour = ["Orange", "Red", "Green"]
# x,y,z = colour

# 3. Output Variables-->
# 3.1- x = "Abc is red"
#         print(x)

# 3.2- x= "Abc"
#      y= "is"
#      z="red"
#         print(x, y, z)

# 3.3- x= "Abc"
#      y= "is"
#      z="red"
#         print(x + y + z)
# *Note- but this sign we can use only if all variable type is string type only or integers only... mismatch type of variable dont give results.
# *Note - when mismatch type of variables are there use "," instead of "+" sign.

# 4. Global Variables
# (Global variables can be used by everyone, both inside of functions and outside.)

# """
x = "awesome"
def myfunc():
  x = "good"
  print("Red is " + x)
myfunc()
print("Red is " + x)


x = "awesome"
def myfunc():
  print("Python is " + x)
myfunc()