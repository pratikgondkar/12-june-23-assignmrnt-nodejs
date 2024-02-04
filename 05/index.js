const fs = require('fs');

fs.unlink("architecture.txt" , () => {
    console.log("file deleted successfully")
});


