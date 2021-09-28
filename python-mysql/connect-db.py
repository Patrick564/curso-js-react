import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='Siderial23',
    database='prueba'
)

cursor = mydb.cursor()

# cursor.execute('show create table Usuario;')

# sql = 'insert into Usuario (email, username, edad) values (%s, %s, %s);'
# values = ('homero@correo.com', 'homero', 45)
# cursor.execute(sql, values)
# mydb.commit()

# sql = 'update Usuario set email = %s where id = %s'
# values = ('homero@gmail.com', 4)
# cursor.execute(sql, values)

# mydb.commit()

sql = 'delete from Usuario where id = %s'
values = (4, )

cursor.execute(sql, values)
mydb.commit()

# cursor.execute('select * from Usuario;')  Se puede usar 'select * from Usuario limit #' para indicar la cantidad
# resultado = cursor.fetchall()

print(cursor.rowcount)
