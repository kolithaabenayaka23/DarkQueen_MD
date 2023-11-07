const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",94767533889")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kolithaabenayaka23:T3xMK2GL5CXM4UHj@cluster0.gcyuvba.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94767533889'
global.devs = '94715491788';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐃𝐚𝐫𝐤 𝐐𝐮𝐞𝐞𝐧 𝐌𝐃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'X_FLAZY' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true : process.env.SESSION_ID,'DARK-QUEEN-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZHdHY4by9Eb0d6UkNzUGd3VXJHbVhZbUUrU2V3YUFPamhOVlhtNXJIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZC9qcVRHU0c0blJSMVdtaEc4SGRUcUdjUFRpK0xLalBRQW5BVUJIMk9uWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSUtGOE1uc29KTG5vUFJ0WkxmSEYxcWU3dFJLTTAxeW9wWVN6UFRiQlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVDVSSStSV1lxM01QZERRNkl1cjdLU1N1NW0zRjVzN0tvc3BZNzJrcWtBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQNWpYSUJoeXZVbkt6M3FqZnFLMXkyRlMydHhNRnVsbG1XQVJ6RnBsVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF0VVNkM3dLVENDSnBwdnBtTWREVXUwUEJIR3VNQ1ptSk5pWUlOOUJmM0U9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTXQvYzhWb0VoQ1NJL0pXWnNxWC9IMndNMExSSDJDNTlJdU5oalBZY0YvRzJEWlp4K3V2OWM5aDdRSTVoNUVpWG5CKzZsUEFBSDR2b0hMRHVmMXVnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0NCwiYWR2U2VjcmV0S2V5IjoicmlySXlmZFBZTTQxaWFiejZQZUJGVm9PNkVzMGVuT1JxWTZvOWpQWXN0bz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRmZONlJRaDVTSHVtOHNzNFdZSUViZyIsInBob25lSWQiOiJjYTNlMjNlZS04MDQ0LTRiNGUtYmNhOC00Y2UyMzQxZTk5NWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2tTNEZBcVJTOWh2d1ZmOThBMUtLVjdTMWw0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R1U1TE0xT3EvV1BKL1dmK2ZkU25VenpVeWM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV1d1dGNIRUtHdHFxb0dHQkk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNySUJxa05xQVhWZGkwRG5PcGJsL1lqMWRFdW52ZnNLaE0xVnJodDFyR0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImcwS1VncUgxbmJsalpMdVlNNmw1YTUyck5LYmFZTVI0RThNemZudzlnOGVvZEx3b2hqY3YwVHpwTzFkVzQzSDh3V05EQ05tN0pSaEd6TkprNm9ET0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQWTZ2VXM0UzYvL0l4V3BDWGcxUkl1bHBMTkRrSUFzY0JGR1czYWpFKzNIU09ESEt6cHE3ZEZXQ2pYRmkwd0tHMXBrVVFDWnM0Q2VoZXl2aElHTjhpQT09In0sIm1lIjp7ImlkIjoiOTQ3Njc1MzM4ODk6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XmfCdl5/wnZeU8J2XrfCdl6wg8J2XnvCdl5zwnZeh8J2XmiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NzUzMzg4OTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNnlBYXBEYWdGMVhZdEE1enFXNWYySTlYUkxwNzM3Q29UTlZhNGJkYXhoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk5Mzg3MDQ0fQ=='
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'X-Notiya' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'DarkQueen-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '91' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? [''] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '🔥FLAZY IN ONLINE🔥' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'd1ec15df-b80a-446d-9673-6ab4a734a638' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'ndarkqueenmd' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARK-QUEEN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
