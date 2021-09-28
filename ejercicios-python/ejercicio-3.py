# Multiplicar dos números sin utilizar el símbolo de multiplicación

a = 4
b = 8
resultado = 0

for x in range(a):
    resultado += b

print(resultado)


# Ingresar un nombre y apellido e imprimirlo al reves

nombre = 'Patrick'
apellido = 'Feliz'

concatencacion = nombre + ' ' + apellido

print(concatencacion[::-1])


# Escribi una función que encuentre el elemento menor de una lista

lista = [1, 2, 5, 3, 55, -24, -13]

menor = 'init'

for x in lista:
    if menor == 'init':
        menor = x
    else:
        menor = x if x < menor else menor

print(menor)


# Escribir una función que devuelva el volumen de una esfera por su radio
# (4/3 * pi ** 3)

def calcula_volumen(r):
    return 4 / 3 * 3.14 * r ** 3


resultado = calcula_volumen(6)

print(resultado)


# Escribir una función que indique si el usuario es mayor de edad

def es_mayor(usuario):
    return usuario.edad > 17


class Usuario:
    def __init__(self, edad):
        self.edad = edad


usuario1 = Usuario(15)
usuario2 = Usuario(21)

resultado1 = es_mayor(usuario1)
resultado2 = es_mayor(usuario2)

print(resultado1, resultado2)


# Escribir una función que indique si un número es par o impar

def es_par(n):
    return n % 2 == 0


resultado = es_par(11)

print(resultado)


# Escribir una función que indique cuantas vocales tiene una palabra

palabra = 'ChAnchitoFeliz'
vocales = 0

for x in palabra:
    y = x.lower()
    vocales += 1 if y in ['a', 'e', 'i', 'o', 'u'] else 0

print(vocales)


# Escribir una aplicación que reciba una cantidad infinita de números
# hasta decir basta, luego que devuelva la suma de los números ingresados

lista = []

print('Ingrese números y para salir escriba "basta"')

while True:
    valor = input('Ingrese valor: ')

    if valor == 'basta':
        break
    else:
        try:
            valor = int(valor)
            lista.append(valor)
        except:
            print('Dato inválido')
            exit()

resultado = 0

for x in lista:
    resultado += x

print(resultado)
