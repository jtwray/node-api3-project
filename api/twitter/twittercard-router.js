const router=require('express').Router()
const x = require('x-ray')()

router.get('/:url', (req, res)=>{
let {url}= req.params;

if (req.headers['user-agent'].indexOf('Twitterbot') > -1) {
  x(url, {
    title: 'title',
    text: ['p'],
    image: 'img@src'
    })(function(err,obj){
    let{title,text,image}=obj;
    let description= text.join(' ').substring(0,300);
    
    res.send('\n    <html>\n    <head>\n    <meta name="twitter:card" content="summary" />\n    <meta name="twitter:title" content="' + title + '" />\n   <meta name="twitter:description" content="' + description + '" />\n   <meta name="twitter:image" content="' + image + '" />\n   </head>\n   </html>\n   ');
    });
    }else{
    res.redirect(url);
    }
  });
  
  
  
  module.exports={router}
