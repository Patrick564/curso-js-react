from flask import Flask, url_for, redirect
from flask.globals import request
from flask.templating import render_template
from werkzeug.exceptions import abort

import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='Siderial23',
    database='prueba'
)

cursor = mydb.cursor(dictionary=True)
app = Flask(__name__)


@app.route('/')
def index():
    return 'hola mundo'


# GET POST PUT/PATCH DELETE
@app.route('/post/<int:post_id>', methods=['GET', 'POST'])
def lala(post_id):
    if request.method == 'GET':
        return 'El id del post es: ' + str(post_id)
    else:
        return 'Este es otro metodo y no GET'


@app.route('/lele', methods=['GET', 'POST'])
def lele():
    cursor.execute('select * from Usuario')

    usuarios = cursor.fetchall()
    # abort(403)
    # return redirect(url_for('lala', post_id=2))
    # print(request.form)
    # print(request.form['llave1'])
    # print(request.form['llave2'])
    # return render_template('lele.html')
    
    return render_template('lele.html', usuarios=usuarios)


@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html', mensaje='Hola mundo')


@app.route('/crear', methods=['GET', 'POST'])
def crear():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        edad = request.form['edad']

        sql = 'insert into Usuario (username, email, edad) values (%s, %s, %s)'
        values = (username, email, edad)

        cursor.execute(sql, values)
        mydb.commit()

        return redirect(url_for('lele'))

    return render_template('crear.html')
