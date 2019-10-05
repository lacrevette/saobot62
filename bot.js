const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NjI3NTIxMzc1NzMyNjI5NTc0.XZd0iA.-lLtNrSBcP1ECJhjGF_33qOU4qE';

const PREFIX = '>';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log("Je suis en ligne ! :D");
})
    
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === 'Salut !');
    if(!channel) return;

    channel.send('Bienvenue dans notre serveur , $(member) !')
});
    
bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'send':
            const attachment = new Attachment('https://www.mmorpg.fr/mmorpg/content/nouveauJeux/sao.jpg')
            message.channel.send(attachment);
        break;
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "sao":
            image1 = "./images/image1.png"; image2 = "./images/image2.png"; image3 = "./images/image3.png"; 
            number = 3;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch(random) {
                case 1: message.channel.send({ files: [image1] }); break;
                case 2: message.channel.send({ files: [image2] }); break;
                case 3: message.channel.send({ files: [image3] }); break;
            }
        break;
    }
})

bot.login(token);