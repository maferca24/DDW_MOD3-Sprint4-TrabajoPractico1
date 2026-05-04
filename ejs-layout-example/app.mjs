import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

const app = express();

const PORT= 3000;

//Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Configurar express-ejs-layouts
app.use(expressLayouts);//Activar el middleware de express-ejs-layouts
app.set('layout', 'layout'); // Archivo de base de layouts.ejs

//Servir archivos estáticos
app.use(express.static(path.resolve('./public')));

//Ruta principal
app.get('/', (req, res) => {
    res.render('index', 
        { title: 'Página Principal'});
});

//Ruta para la pagina Acerca de
app.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de Nosotros'});
});

//Ruta para la pagina Contacto
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contáctanos'});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`); 
});