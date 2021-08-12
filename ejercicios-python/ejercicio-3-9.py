# Escribir una función que reciba nombre y apellido y los vaya
# agregando a un archivo


def agregar_nombre_archivo(nombre, apellido):
    c = open('nombre-completo.txt', 'a')
    c.write(nombre + ' ' + apellido + '\n')
    c.close()


agregar_nombre_archivo('Cosme', 'Fulanito')
