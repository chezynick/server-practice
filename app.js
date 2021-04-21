const express = require('express');
//create express app
const app = express();
//register veiw engine
app.set('view engine', 'ejs');

app.listen(4000);

app.get('/', (req, res)=>{
    const blogs = [
      {  title: 'poached eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero corrupti, dicta placeat illum ipsam.'
      },
      {  title: 'scrambled eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero corrupti, dicta placeat illum ipsam.'
      },
      {  title: 'fried eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero corrupti, dicta placeat illum ipsam.'
      }
    ]
    // res.send('<p>homey page</p>');
    res.render('index', { title: 'Home', blogs});
})
app.get('/about', (req, res)=>{
    // res.send('<p>about page</p>');
    res.render('about', { title: 'About'})
})
app.get('/blogs/create', (req, res)=>{
    
    res.render('create', { title: 'Create a new blog'})
})
app.use((req,res) => {
    res.status(404).render('404', { title: 'Error 404'})
})