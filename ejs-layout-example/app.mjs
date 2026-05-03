import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

const app = express();

const PORT= 3000;

//Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Archivo de base de laoyouts

//Servir archivos estáticos
app.use(express.static(path.resolve('./public')));

//Ruta principal
app.get('/', (req, res) => {
    res.render('index', 
        { title: 'Página Principal',
            navbarLinks: [
                { text: 'Inicio', href: '/', icon:'/icons/home.svg' },
                { text: 'Acerca de', href: '/about', icon:'/icons/info.svg' },
                { text: 'Contacto', href: '/contact', icon:'/icons/contact.svg' }
            ]
        });
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`); 
});