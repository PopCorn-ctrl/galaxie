/* Version 1.1 */
/* Bot dev par PøpCørn#4162 */

const Discord = require("discord.js")
const client = new Discord.Client()
let prefix = "?g"

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log("Le bot vient de s'allumer !")
    client.user.setStatus("dnd")
    client.user.setActivity("?ghelp pour voir toutes les commandes | Bots créer par PopCorn", {type: 1})
    console.log("Activité mise en place")
})

/* A rejoint */
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setTitle('Bienvenue :sunglasses:')
        .setDescription(':tada: **' + member.user.username + '** à rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('612661535520587777').send(embed)
    member.addRole('636636787480985600')
});


/*anniv*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'anniv') {
       if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       message.channel.send(':tada: **Joyeux anniversaire 🎃🍁DrAkuLå 🔥🍄  -**' + '  __Tout__ **le staff te souhaite un très beaux anniversaire !** :white_check_mark:')        

    }
})

/*halloween*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'halloween') {
       if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       message.channel.send("```Fix Joyeux Halloween 🎃🎉!' + ' ```Css Tout le staff de souhaite un très beux Halloween !```")        

    }
})

/*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglasses:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})
 
/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglasse:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
})
/* Theme Halloween */
    client.on("message", message => {
        if(message.content.includes("?gtheme")){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🎃")
        .setColor("#A95309")
        .setDescription("Touts les thèmes de se magnifique bot :")
        .addField("**Thème :**", "Halloween :white_check_mark: , Noël :x: , Toussain :x: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://media.discordapp.net/attachments/637316339547242522/637316595366232064/halloween-pumpkin-on-wooden-table-in-front-of-spooky-dark-background-jack-o-lant_16x9_WEB.jpg?width=994&height=559")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if(message.content.includes("?ghelp")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#A95309")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, ?clear [nombres], On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Halloween**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637621914067664916/halloween-pumpkin-on-wooden-table-in-front-of-spooky-dark-background-jack-o-lant_16x9_WEB.jpg")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🎃 **Le serveur est ON** 🎃")
        message.channel.send("```🎃 Désoler de cet maintenance 🎃```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🎃**Le serveur est OFF** 🎃")
        message.channel.send("```🎃 Cacher, Cacher ! 🎃```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🎃 **Une maintenance est en cours !** 🎃")
        message.channel.send("``` 🎃 Vous ne pouvez pas acceder au discord ! Raison : [Maintenance] 🎃 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🎃 Staff | **Besoin d'un coup de pouce** ;) 🎃 ")
        message.channel.send("``` 🎃 J'ai un problème venez m'aider dès que possible ! 🎃 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🎃 Staff | **Réunion dans quelque instants !** 🎃")
        message.channel.send("``` 🎃 Merci d'aller dans le channel : Réunion 🎃 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Réunion en cour")
    }
});

/* Theme Noël */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🎄")
        .setColor("#FFFFFF")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :**", "Halloween :x: , Noël :white_check_mark: , Toussain :x: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637327070233624584/index.jpg")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if (message.content.includes("?help")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#FFFFFF")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Noël**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637327070233624584/index.jpg")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🎄 **Le serveur est ON** 🎄")
        message.channel.send("```🎄 Désolé de cet maintenance 🎄```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🎄**Le serveur est OFF** 🎄")
        message.channel.send("```🎄 Cacher, Cacher ! 🎄```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🎄 **Une maintenance est en cours !** 🎄")
        message.channel.send("``` 🎄 Vous ne pouvez pas acceder à ce discord ! Raison : [Maintenance] 🎄 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🎄 Staff | **Besoin d'un coup de pouce** ;) 🎄 ")
        message.channel.send("``` 🎄 J'ai un problème venez m'aider dès que possible ! 🎄 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🎄 Staff | **Réunion dans quelque instants !** 🎄")
        message.channel.send("``` 🎄 Merci d'aller dans le channel : Réunion 🎄 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Réunion en cour")
    }
});*/

/* Theme Toussain */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 👤")
        .setColor("#000000")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :** Halloween**", "Halloween :x: , Noël :x: , Toussain :white_check_mark: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637336198305677312/toussain.jpg")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if (message.content.includes("?ghelp")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#000000")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Toussaint**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637336198305677312/toussain.jpg")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("👤 **Le serveur est ON** 👤")
        message.channel.send("```👤 Désolé de cet maintenance 👤```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("👤**Le serveur est OFF** 👤")
        message.channel.send("```👤 Cacher, Cacher 👤```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("👤 **Une maintenance est en cours !** 👤")
        message.channel.send("```👤 Vous ne pouvez pas acceder à ce discord ! Raison : [Maintenance] 👤```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("👤 Staff | **Besoin d'un coup de pouce** ;) 👤")
        message.channel.send("```👤 J'ai un problème venez m'aider dès que possible ! 👤```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("👤 Staff | **Réunion dans quelque instants !** 👤")
        message.channel.send("```👤 Merci d'aller dans le channel : Réunion 👤```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Réunion en cour")
    }
});*/

/* Theme Nouvel an 🎉 */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🎉")
        .setColor("##D980FA")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :**Nouvel an**", "Halloween :x: , Noël :x: , Toussain :x: , Nouvel an :white_check_mark: , Pâque :x:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637383814120865796/istockphoto-873765450-612x612.jpg")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if (message.content.includes("?ghelp")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("##D980FA")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Nouvel an**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637383814120865796/istockphoto-873765450-612x612.jpg")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🎉 **Le serveur est ON** 🎉")
        message.channel.send("```🎉 Désolé de cet maintenance 🎉```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🎉**Le serveur est OFF** 🎉")
        message.channel.send("```🎉 Cacher, Cacher 🎉```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🎉 **Une maintenance est en cours !** 🎉")
        message.channel.send("``` 🎉 Vous ne pouvez pas acceder à ce discord ! Raison : [Maintenance] 🎉 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🎉 Staff | **Besoin d'un coup de pouce** ;) 🎉 ")
        message.channel.send("``` 🎉 J'ai un problème venez m'aider dès que possible ! 🎉 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🎉 Staff | **Réunion dans quelque instants !** 🎉")
        message.channel.send("``` 🎉 Merci d'aller dans le channel : Réunion 🎉 ```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Réunion en cour")
    }
});*/

/* Theme Pâque */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🥚")
        .setColor("#6F1E51")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :**Pâque**", "Halloween :x: , Noël :x: , Toussain :x: , Nouvel an :x: , Pâque :white_check_mark:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637384953780371476/paques000019316380_double.jpg")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if (message.content.includes("?ghelp")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#6F1E51")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Pâque**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637384953780371476/paques000019316380_double.jpg")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🥚 **Le serveur est ON** 🥚")
        message.channel.send("```🥚 Désolé de cet maintenance 🥚```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🥚**Le serveur est OFF** 🥚")
        message.channel.send("```🥚 Cacher, Cacher 🥚```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🥚 **Une maintenance est en cours !** 🥚")
        message.channel.send("```🥚 Vous ne pouvez pas acceder à ce discord ! Raison : [Maintenance] 🥚```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🥚 Staff | **Besoin d'un coup de pouce** ;) 🥚")
        message.channel.send("```🥚 J'ai un problème venez m'aider dès que possible ! 🥚```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🥚 Staff | **Réunion dans quelque instants !** 🥚")
        message.channel.send("```🥚 Merci d'aller dans le channel : Réunion 🥚```")
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        console.log("Réunion en cour")
    }
});*/

/* Mute  */

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
})

/* Bot dev par : PøpCørn#4162 */
/* V1.1 */ 
