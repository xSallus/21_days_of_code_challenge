export function formatWeatherName(name: string) {
    return name
        .split(' ')
        .map((partial: string) => {
            const firstLetter = partial[0]

            const rest = partial.split('').filter((letter) => letter !== firstLetter)

            return [firstLetter.toUpperCase(), ...rest].join('')
        })
        .join(' ')
}
