// voice command 
exports.vnCmd = (v) => {
  return 'Usar comandos con notas de voz, activar con el comando ' + v + 'voicecommand on/off';
};

// -- enviar mensaje 
exports.wait = `[⌛] 𝙿𝚛𝚘𝚌𝚎𝚜𝚊𝚗𝚍𝚘 ▬▬▬▭`;
exports.bye = `[💤]⸺ 𝘐𝘳𝘦 𝘢 𝘥𝘰𝘳𝘮𝘪𝘳. . .`;
exports.done = `[✔️ 𝙃𝙚𝙘𝙝𝙤 ✔️]`;
exports.next = (value) => {
  return `Haga click en siguiente para *${value}* `;
};
exports.packon = '[🌸] Nombre del paquete ya registrado';
exports.packoff = '[❌] Nombre del paquete en medios no esta regristrado';
exports.liston = '[✔️] Lista de medios almacenados en la base de datos';
exports.getlist = '[🌸] Use el comando getimg/getvid/getav/getstik para enviar un paquete de un medio\n\nEjemplo : /getimg auron';
exports.nolink = (value) => {
  return '[🌸] Repita agregando un enlace ' + value;
};
//--new
exports.lvl = `Nivel`;
exports.nme = `Nombre`;
exports.hi = `Hola`;
exports.gp = `Grupo`;
exports.restart = `[🌹]⸺ 𝘌𝘯𝘵𝘦𝘯𝘥𝘪𝘥𝘰.`;
exports.pinsp = `Velocidad`;
exports.pinse = `Segundos`;
exports.num = `Numero`;
exports.click = `Click aquí`;
exports.next2 = `Siguiente`;
exports.stima = `[🌸] Envia una imagen con el comando\n o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos* `;
exports.resulf = `[🌸] Resultado`; 
exports.bugr = `Gracias\nSu reporte ha sido almacenada en la base de datos. `;
exports.linkgp = `Link del Grupo `;
exports.linkrevo = `Enlace del grupo anulado`;
exports.newlink = `Nuevo enlace`;
exports.gpbt = `[🌹]⸺ Configuración del grupo\nAbrir y cerrar el grupo`;
exports.gpbtt = `A continuación elija uno`;
exports.gpopenb = `🌸> Abrir`;
exports.gpcloseb = `💢> Cerrar`;
exports.idiom = `Idioma`;
exports.wrn = `Advertencia`;
exports.pfile = `PERFIL`;
exports.crtio = `Se creó el`;
exports.mbr = `Miembros`;
exports.wlme = `Bienvenida`;
exports.vtc = `VOTACION`;
exports.rzon = `Razon`;
exports.vyes = `Si estas de acuerdo`;
exports.vno = `Si no estas de acuerdo`;
exports.vrvt = `Ver Votaciones`;
exports.rtvt = `RESULTADOS DE VOTACION`;
exports.dlte = `Eliminar`;
exports.setpmulti = `✅ Se cambio el prefijo a : *multiprefijo*`;
exports.setpnopre = `✅ Se cambió de prefijo a : *nopref*`;
exports.setponepre = `✅ Se cambio el prefijo a :`;
exports.setpall = `Prefijos Disponibles`;
exports.setpnp = `Sin prefijo`;
exports.setpop = `Un prefijo`;
exports.setpmt = `Multi prefijo`;
exports.updatef = `*Actualizado*\n\nInforme`;
exports.simn = `quieres charlar un rato?\n\nResponde con`;
exports.simmsg = `(Tu mensaje)\n\n📌 Ejemplo : `;
exports.chatboton = `✅ Activaste *ChatBot* \n Lo que significa que podemos charlar ilimitadamente 😊`;
exports.chatbotoff = `✅ *ChatBot* desactivado`; 
exports.pptt = `Seleccione`;
exports.exple = `Ejemplo`;
exports.emt = `Empate`;
exports.gst = `Ganaste`;
exports.pdt = `Perdiste`;
exports.pptuser = `Tú`;
exports.papel = `papel`;
exports.tijera = `tijera`;
exports.piedra = `piedra`;
exports.foll = `Sígueme en Instagram \nhttps://www.instagram.com/fg98._`;
exports.plays = `Ingresa el título de una canción`;
exports.playm = `El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de`;
exports.listgp = `LISTA de Grupos`;
exports.calidad = `Calidad`;
exports.tamaño = `Tamaño`;
exports.pfo = `Elija un formato\n\nSi tiene problemas  con el comando use`;
exports.pafo = `Seleccione la música que desea descargar`;
exports.pvfo = `Seleccione el video que desea descargar`;
exports.titlp = `Título`;
exports.timp = `Duración`;
exports.viep = `Vistas`;
exports.vcnrst = 'No detectado';
exports.vclect = 'Lectura de voz';
exports.listwb = 'Lista de eventos';
exports.pregt = 'Ella me ama?';
exports.donate = `≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://tinyurl.com/PayPal-fg

_Al donar consigues_  *Premium* `;
exports.cretb = 'Crea tu propio bot usando Termux';

// -- Decir tiempo
exports.night = 'Buenas noches'
exports.evening = 'Buenas tardes'
exports.day = 'Buen día'
exports.morning = 'Buenos dias'


// -- mensaje solo 
exports.admin = '|⚠️| Este comando solo lo pueden usar los *Admins* del grupo.';
exports.group = '|⛔️| ¡Este comando solo se puede usar en grupos!.';
exports.premium = '|⛔️| Este comando es solo para miembros *Premium*.';
exports.premdl = '|⛔️| Lo siento, no eres un usuario premium, descárgualoo usando el enlace.\n**🔗 Link* : ';
exports.botadmin = '|⚠️| ¡Para usar este comando debo ser *Administradora!.*';
exports.owner = '|🌸| Esta función es solo la puede usar *Mi Maestro.*';
exports.isprem = '|🌸| El usuario es el usuario premium anterior.';
exports.noprem = '|🌸| El usuario aún no es un usuario premium.';
exports.ban = '|⛔️| El estado de usuario ha sido prohibido antes.';
exports.noban = '|🌸| El usuario no tiene estado prohibido.';
exports.isadmin = '|⛔️| El bot no puede iniciar sesión como administrador.';
exports.oversize = '⚠️ El tamaño del archivo excede el tamaño especificado, descárguelo usted mismo a través del siguiente enlace.\n*🔗 Link* : ';

// -- texto
exports.notag = '|🌸| Etiqueta a un miembro del grupo';
exports.nonum = '|🌸| Repita agregando el número de destino';
exports.notext = '|🌸| Repita agregando texto';
exports.reply = '|🌸| Responde a un mensaje...';
exports.replyStic = '|🌸| Responde a un sticker...';
exports.replyVid = '|🌸| Responde a un vide...';
exports.replyVn = '|🌸| Responde a un audio...';
exports.replyImg = '|🌸| Responde a una imagen...';
exports.noreply = '|🌸| El mensaje al que respondió no contenía una respuesta.';
exports.nolink = (value) => {
  return `|🌸| Repita agregando un enlace de *${value}*.`;
};
exports.addwarn = `|⚠️| *ADVERTENCIA*\nObtienes 1 advertencia`;
exports.delwarn = `|🌸| *SIGUE ASI!*\nSe redujo tu advertencia`;
exports.cekwarn = (warn) => {
  return `|⚠️| ADVERTENCIAS \n\n⮞ Total  : *${warn}*`;
};
exports.nowarn = `|🌸| El usuario no tiene ninguna advertencia, bien hecho.`;

exports.Pbahasa = `|🌸| Seleccione el idioma que desea utilizar.

*Idiomas disponibles:*

- es (Spanish) 
- en (English)

Ejemplo : */language en*`;
exports.nobahasa = `|💢| Idioma no disponible.

*Idiomas disponibles*
- es (Spanish) 
- en (English)`;

exports.online = '┃🌸┃ Orden recibida, me he activado en este grupo.'
exports.offline = '┃🌸┃ Orden recibida, me he desactivado en este grupo.'

// -- grupo
exports.onwa = '┃🌸┃ El Usser ya se encuentra en el grupo.';
exports.sendlink = '✅ Envía una invitación a';
exports.open = '[🌸] Grupo abierto\n\nAhora *todos los Ussers* pueden escribir.';
exports.close = '[🌸] Grupo cerrado\n\nAhora *solo los Administradores* pueden escribir.';
exports.name = (value) => {
  return `┃🌸┃ Se ha cambiado el nombre del grupo a: \n\n${value}.`;
};
exports.desk = (value) => {
  return `┃🌸┃ Se ha cambiado la desc a: \n\n${value}.`;
};
exports.promote = (value) => {
  return `┃🌸┃  *${value}* Fue promovido como Administrador.`;
};
exports.demote = (value) => {
  return '┃🌸┃ Orden recibida.' + value;
};

exports.kick = (value) => {
  return '┃🌸┃ Orden recibida.'+value;
};
exports.On = (value) => {
 return `┃🌸┃ Orden recibida, *${value}* en este grupo.`;
};
exports.Off = (value) => {
  return `┃🌸┃ Orden recibida, *${value}* desactivado para este grupo.`;
};
exports.Thison = (value) => {
  return `┃🌸┃ *${value}* ya esta activo.`;
};
exports.Thisoff = (value) => {
return `┃🌸┃ *${value}* ya se ha desactivado.`;
};
exports.OnorOff = '┃🌸┃ Repita agregando on/off.';
exports.antilink = '[⚠️] Se te ha detectado un enlace de un grupo de WhatsApp.';

exports.setwel = (value) => { 
  return `┃🌸┃ Ingrese el mensaje de *Bienvenida:*

*Ejemplo:*
/setwelcome Bienvenido @user a @group.

Tag Usser : @user 
Nombre : @name
Bio : @bio
Fecha : @date
Nombre de Grupo : @group
Descripción : @desc

*Ejemplos para cada función*\n` + value;
};

exports.setbye = (value) => {
  return `┃🌸┃ Ingrese el mensaje de *Despedida:*
  
* Ejemplo:*
/setbye Adios  @user

*Ejemplos para cada función*\n` + value;
};

exports.setweldone = (value, fungsi) => {
  return `┃🌸┃ Se estableció como  *Bienvenida*.`;
};

exports.setbyedone = (value, fungsi) => {
  return `┃🌸┃ Se estableció como  *Despedida*.`;
};
//--
exports.default = (value) => {
  return value + '┃🌸┃ Se ha devuelto a la configuracion inicial.';
};

exports.main = (value) => {
  return '┃🌸┃ Todavía hay un ' + value + ' en curso.';
};
exports.nomain = (value) => {
  return `┃🌸┃ No hay *${value}* en curso.`;
};
exports.inmain = (value) => {
  return `┃🍃┃ Ya has Votado *${value}*.`
};
exports.hapus = (value) =>{
  return `┃🌸┃ Se eliminó *${value}* en este grupo.`;
};

// juegos
exports.onGame = '┃⚠️┃ Todavía hay preguntas sin respuesta en este chat.';
exports.soal = (text1, text2, text3) => {
  return `${text1}
╭══• ೋ•✧๑♡๑✧•ೋ •══╮

*Tiempo:*
${text2}

*Recompensa:*
${text3} Coins.

Responde este mensaje para responder,
La pista de respuesta aparece en los últimos 10 segundos.

🌹🙢𝔇𝔢𝔰𝔱𝔦𝔫𝔶 𝔞𝔫𝔡 𝔇𝔯𝔢𝔞𝔪𝔦𝔫𝔤🙠🍃
╰══• ೋ•✧๑♡๑✧•ೋ •══╯`;
};

exports.timeout = '|⌛| Se acabó el tiempo, la respuesta es ';
exports.salah = '|❌| *¡Incorrecto!*\nIntenta otra vez';
exports.hampir = '|🌸| Casi lo logras* \nSigue intentando!';
exports.benar = (value, value2) => {
  return `|✅| Respuesta correcta!\n\n‣ Ganaste : *${value2}* Coins.`;
};

// afk
exports.with = '‣ Razón : ';
exports.onAfk = (value) => {
  return `┃🌸┃*AFK* \nEstas afk hasta que envies un mensaje\n${value}`
};
exports.offAfk = '|🌸| Regresaste del *AFK*'
exports.inAfk = (value, time) => {
  return `┃🌸┃ El usuario al que mencionas está AFK.  \n${value}\n‣ Desde : ${time} `
}
