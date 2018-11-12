

const nano = require('nano')('http://looty_admin:looty_password@localhost:5984');


nano.db.create('looty').then((body) => {
  console.log('Database looty created!');

  
  const looty = nano.db.use('looty');

  looty.insert({
    "views": {
      "all_items": {
        "map": function(doc) {
          if (doc.type === 'item') {
            emit(doc._id, doc);
          }
        }
      }
    }
  }, '_design/all_items', (error, response) => {
    console.log("Design document created");
  })




})

