const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de vistas EJS
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, './src/public')));

//variables
var pestaña = "Interfaces SIG"

// Rutas para las páginas

// pagina de inicio
app.get ('/', (req,res) => {
  res.render('index',{
      pestaña:pestaña
  })
});
app.get('/map1', (req, res) => {
  res.render('layout', { title: 'Mapa 1',body: 'Mapa Base',script: 'main1.bundle.js' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
