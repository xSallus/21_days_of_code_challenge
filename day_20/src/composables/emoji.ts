export const emojis = ['😀','😃','🤣','😅','😘','🤓','😒','😁','😗','🤩','😡','😭','😖','😔','🥳','🤥','🥶','🤐','😐','😵','💩','👹','🦴','👨','🦱','💋','♂️','🧑','🌾','👩','🎓','👳','♂️','🧟','🦸','♂️','🧜','♀️','🧟','🧝','♂️','🧙','🤦','♀️','🕺','🤷','♂️','👨','🐦','🐺','🐸','🐢','🦞']

export function copyEmojiToClicboard(index:number) {
	navigator.clipboard.writeText(emojis[index])
}
