const { randomInt } = require("crypto");
var fs = require("fs")
var numChat = 0
fs.readFile('result.json',

    function(err,data){
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);
        for(var i = 0; i < Object.keys(jsonParsed.chats.list[numChat].messages).length; i++){
            if(jsonParsed.chats.list[numChat].messages[i].text == "" && jsonParsed.chats.list[numChat].messages[i].sticker_emoji != null && !Array.isArray(jsonParsed.chats.list[numChat].messages[i].text) ){
                console.log(jsonParsed.chats.list[numChat].messages[i].sticker_emoji)
                fs.appendFileSync('messages.txt',jsonParsed.chats.list[numChat].messages[i].sticker_emoji, function (err){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("cemf");
                    }
                })
            }else if(jsonParsed.chats.list[numChat].messages[i].text != null){
                if(jsonParsed.chats.list[numChat].messages[i].text.text != null){
                    return 0;
                }else {
                    console.log(jsonParsed.chats.list[numChat].messages[i].text)
                    fs.appendFileSync('messages.txt',toString(jsonParsed.chats.list[numChat].messages[i].text), function (err){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("cemf");
                        }
                    
                })
        }
        }else if(jsonParsed.chats.list[numChat].messages[i].text == 'https://youtu.be/8QWrDxXFIc8'){
            console.log("dd")
        }
    }
}

)