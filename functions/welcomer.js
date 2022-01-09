const fs = require("fs");
const Welr = JSON.parse(fs.readFileSync('./database/welcomer.json'));

const welrAwal = `Hola @user 
Bienvenido(a)  al grupo *@group*

▢ No olvide leer las reglas del grupo :v`;

const byerAwal = `Adiós *@user*`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcomer = (chatId) => {
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
    fs.writeFileSync('./database/welcomer.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcomer = (chatId) => {
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
const getCustomByer = (chatId) => {
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
const setCustomWelcomer = (chatId, value) => {
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
const setCustomByer = (chatId, value) => {
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
const delCustomWelcomer = (chatId) => {
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
const delCustomByer = (chatId) => {
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
