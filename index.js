const { randomInt } = require("crypto");
var fs = require("fs")
var numChat = 0
fs.readFile('result.json',

    function(err,data){
        var jsonParsed = JSON.parse(data);
        for(var i = 0; i < Object.keys(jsonParsed.chats.list[numChat].messages).length; i++){
            if(!Array.isArray(jsonParsed.chats.list[numChat].messages[i].text)){
                console.log(jsonParsed.chats.list[numChat].messages[i].text)
                fs.appendFileSync('messages.txt',jsonParsed.chats.list[numChat].messages[i].text + " \n", function(err){
                    if(err){
                        console.log(err.toString());
                    }else {
                        return 0;
                    }
                });
                }else if (jsonParsed.chats.list[numChat].messages[i].sticker_emoji == !null){
                    fs.appendFileSync('messages.txt',jsonParsed.chats.list[numChat].messages[i].sticker_emoji, function(err){
                        if(err){
                            console.log(err.toString());
                        }else {
                            return 0;
                        }
                    });
                }
            }
        }
)