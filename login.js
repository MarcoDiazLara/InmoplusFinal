const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'appmovil'
});

const app = express();

app.use(cors());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/src/app/login/login.component.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM usuario WHERE Correo_electronico = ? AND Password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
               
				//response.redirect('/home');
			} else {
				response.send('Usuario y/o Contraseña Incorrecta');
			}			
			response.end();
		});
	} else {
		response.send('Por favor ingresa Usuario y Contraseña!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Te has logueado satisfactoriamente:, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('¡Inicia sesión para ver esta página!');
	}
	response.end();
});

app.post('/usuarios/agregar', function(request, response) {
    const usuario = {
        Correo_electronico: request.body.Correo_electronico,
        Password: request.body.Password
    }

    const query = `INSERT INTO usuario SET ?`
    connection.query(query, usuario, (error) => {
        if(error) return console.error(error.message)

        response.json(`Se insertó correctamente el usuario`)
    })
})
// http://localhost:3000/usuarios/alldata
app.post('/usuarios/alldata', function(request, response) {
    const usuario = {
		Nombres: request.body.Nombres,
    	Apellido_Paterno: request.body.Apellido_Paterno,
    	Apellido_Materno: request.body.Apellido_Materno,
    	CURP: request.body.CURP,
    	RFC: request.body.RFC,
    	Nombre_Usuario: request.body.Nombre_Usuario,
    	Tel_Casa: request.body.Tel_Casa,
    	Tel_Cel: request.body.Tel_Cel
    }

    const query = "INSERT INTO usuario WHERE Correo_electronico = "+request.body.Correo_electronico +" SET ?"
    connection.query(query,usuario, (error) => {
        if(error) return console.error(error.message)

        response.json(`Se insertó correctamente el usuario`)
    })
})


app.listen(3000);