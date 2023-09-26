import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let tekss = `List harga chat owner.

Fitur
Downloader
Tiktok, Instagram, Facebook, Mega, SoundCloud, Telegram Sticker, Twitter, Cocofun, Google Drive, MediaFire, Gitclone, Ytmp3, Ytmp4, Pinterest

Special Fitur
Otakudesu Latest, Detail, Download
Nekopoi Latest, Detail, Download

Chat https://wa.me/6285725766522`
await m.reply(tekss)
await apivisit
}
handler.help = ['iklan']
handler.tags = ['info']
handler.command = /^(rental|iklan|sewa|sewabot|premium)$/i
export default handler
