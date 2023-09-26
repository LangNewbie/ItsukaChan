import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
await m.reply(`skrep sekrip mending polow ig @l4lang`)
await apivisit
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
export default handler