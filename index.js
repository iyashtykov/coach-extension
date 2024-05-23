window.codioIDE.coachBot.register('level1button', 'level1 button', () => {
    window.codioIDE.coachBot.showButton('level2 input', async () => {
        const input = await window.codioIDE.coachBot.input('enter hook name')
        window.codioIDE.coachBot.write('Please wait. I will provide info shortly...')
        window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'show react hook documentation for user provided hook'})
    })
    window.codioIDE.coachBot.showButton('level2 button', async () => {
        window.codioIDE.coachBot.ask({userPrompt: 'level2 button', systemPrompt: 'level2 button'})
    })
})
window.codioIDE.coachBot.register('level1input', 'level1 input', async () => {
    const input = await window.codioIDE.coachBot.input('enter input value')
    window.codioIDE.coachBot.write('Please wait...')
    window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'show input'})
})