//  AW3D.db.js

(function(){

    const VERSION = 1;
    const DB_NAME = "AW3D";

    db = new zango.Db( DB_NAME, VERSION, {

        male:       true,
        female:     true,
        skeleton:   true,
        materials:  true,
        textures:   true,
        animations: true,

    });

    db.open(function(err, database){
        if (err) console.error(err);
    }).then( function(){
        debugMode && console.log( 
        `Database ${db.name} (v${db.version}) ready for use.`);
    }).catch(function(err){
        console.error(err);
    });

})();

//  USER.db.js

(function(){

    const VERSION = 1;
    const DB_NAME = "USER";

    UserDB = new zango.Db( DB_NAME, VERSION, {

        materials:  true,
        textures:   true,
        animations: true,

    });

    UserDB.open(function(err, database){
        if (err) console.error(err);
    }).then( function(){
        debugMode && console.log( 
        `Database ${UserDB.name} (v${UserDB.version}) ready for use.`);
    }).catch(function(err){
        console.error(err);
    });

})();
