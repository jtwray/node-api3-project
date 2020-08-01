const router=require('express').Router()
const x = require('x-ray')()
const router = require("express").Router();
const xrayScrapingLibrary = require("x-ray");
const XRAY = xrayScrapingLibrary();
let fs = require("fs");

// router.get('/:url', (req, res)=>{
// let {url}= req.params;

// if (req.headers['user-agent'].indexOf('Twitterbot') > -1) {
//   x(url, {
//     title: 'title',
//     text: ['p'],
//     image: 'img@src'
//     })(function(err,obj){
//     let{title,text,image}=obj;
//     let description= text.join(' ').substring(0,300);
    
//     res.send('\n    <html>\n    <head>\n    <meta name="twitter:card" content="summary" />\n    <meta name="twitter:title" content="' + title + '" />\n   <meta name="twitter:description" content="' + description + '" />\n   <meta name="twitter:image" content="' + image + '" />\n   </head>\n   </html>\n   ');
//     });
//     }else{
//     res.redirect(url);
//     }
//   });
  
  
  
  module.exports={router}

/**check for req.params.url
    if true--
        -run xray scraper library at the url address
            if scrape successful
                -store results in an object
            if fail
                -send status 500 failed to scrape data from provided url internal library malfunction or timeout try again
                -create a new table entry for the results object
                    if successful
                        -send json response with resultsOBJ keys plugged into values of html elements
                    if fail
                        -send status 500 failed database table create
        -respond status 201 card created successfully
    if req.params.url false
        -respond 400 status= required values not present 
*/

router.get("/:id", async (req, res) => {
  const siteURL = req.params.id.toString();
  console.log({ siteURL });
  console.log(siteURL.toString());
  if (siteURL) {
    try {
      let count,
      scraped =XRAY(`${siteURL}`, "a", [
        {
          a: "",
          href: "@href",
          css: "@class"
        },
      ])(function (err, scraped) {
        // results.filter(function (image) {
        //   return image.width > 100;
        // });
        fs.appendFile(
          "./results.json",
          JSON.stringify(`||scraped=${scraped},||count=${count} ||here goes the neighborhood`),
          function (err) {
            if (err){ throw err;}else{
            console.log(`Replaced! content with ${scraped.length}`)};
          }
        );
      });

      res.status(201).json({
        siteURL: `URL received : ${siteURL}`,
        results: `${scraped || scraped[0]}`,
      });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving data from the page-- error scraping from provided URL- timeout? valid URL? sleeping URL? " });
    }
  } else {
    res.status(400).json({
      message: "Please provide a valid URL and valid html element parameters to scrape from the target site ",
    });
  }
});
