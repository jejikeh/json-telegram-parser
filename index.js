const { randomInt } = require("crypto");
var fs = require("fs")
var numChat = 1
fs.readFile('result.json',

    function(err,data){
        var jsonData = data;
        var jsnoParsed = JSON.parse(jsonData);
        for(var i = 0; i < 18201; i++){
            if(jsnoParsed.chats.list[numChat].messages[i].type == "message"){
                if(jsnoParsed.chats.list[numChat].messages[i].text == "" && jsnoParsed.chats.list[numChat].messages[i].sticker_emoji != null ){
                    console.log(jsnoParsed.chats.list[numChat].messages[i].sticker_emoji)
                }else if(jsnoParsed.chats.list[numChat].messages[i].text != null){
                    console.log(jsnoParsed.chats.list[numChat].messages[i].text)
                }
            }else {
                return 0;
            }
        }
    }

)