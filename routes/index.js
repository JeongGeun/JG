module.exports = function(app,codes)
{
    // GET ALL BOOKS
    app.get('/R/code', function(req,res){
      Code.find(function(err, books){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(books);
  });
    });

    // GET SINGLE BOOK
    app.get('/R/code/:codes_id', function(req, res){
        res.end();
    });

    // CREATE BOOK
    app.post('/R/code', function(req, res){
          var code = new Code();
          code.title = req.body.title;
          code.date = new Date(req.body.date);

          code.save(function(err){
              if(err){
                  console.error(err);
                  res.json({result: 0});
                  return;
              }

              res.json({result: 1});

          });
        //res.end();
    });

    // UPDATE THE BOOK
    app.put('/R/code/:codes_id', function(req, res){
        res.end();
    });

    // DELETE BOOK
    app.delete('/R/code/:codes_id', function(req, res){
        res.end();
    });

}
