const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `‿︵‿︵ʚ˚̣̣̣͙ɞ・💢・ ʚ˚̣̣̣͙ɞ‿︵‿︵ 

Bienvenido @user a 
@group. . .

No olvides leer las reglas para no tener problemas.

.reglas
.reglasbt
.reglasrol

Para ver mis distintas funciones.

.menu

Esperamos que tu estancia en este grupo sea sana y divertida.

ATT: 𝐿𝑎 𝐴𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑐𝑖𝑜𝑛.

‿︵‿︵ʚ˚̣̣̣͙ɞ・🌴・ ʚ˚̣̣̣͙ɞ‿︵‿︵`;

const byeAwal = `‿︵‿︵ʚ˚̣̣̣͙ɞ・💢・ ʚ˚̣̣̣͙ɞ‿︵‿︵

*@user* ha salido de @group, esperemos le vaya bien, de todas formas nos olvidaremos de que existe en 3 horas o 1 dia.

Como sea, en que andabamos?.

‿︵‿︵ʚ˚̣̣̣͙ɞ・🌴・ ʚ˚̣̣̣͙ɞ‿︵‿︵`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      from: chatId, 
      textwelcome: welAwal,
      textbye: byeAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./database/welcome.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textwelcome;
  }
};
/**
 * Get Custom bye Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textbye;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomWelcome = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = value;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomBye = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = value;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = welAwal;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = byeAwal;
  }
};

module.exports = {
  Wel,
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  delCustomWelcome,
  getCustomBye,
  setCustomBye,
  delCustomBye
};
