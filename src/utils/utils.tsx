export function getSaudacao() {
    const agora = new Date()

    const horaAtual = agora.getHours()

    let saudacao: string

    if (horaAtual < 5) {
        saudacao = ''
    } else if (horaAtual < 12) {
        saudacao = 'Bom dia'
    } else if (horaAtual < 18) {
        saudacao = 'Boa tarde'
    } else {
        saudacao = 'Boa noite'
    }
    return saudacao
}