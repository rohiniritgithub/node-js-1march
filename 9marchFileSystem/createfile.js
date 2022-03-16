const fs = require("fs");
const content="Hi create your text file";
fs.appendFile("tes.txt",content,(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
})