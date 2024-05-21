window.codioIDE.coachBot.register('customButtonId', 'try new api', () => {
    window.codioIDE.coachBot.showButton('empty callback', () => {
        console.log('empty callback button was clicked')
    })
    window.codioIDE.coachBot.showButton('try with input', async () => {
        console.log('with input button was clicked')
        const input = await window.codioIDE.coachBot.input('enter some error please')
        console.log('input', input)
        const result = await window.codioIDE.coachBot.ask({userPrompt: 'use effect', systemPrompt: 'provide react hook documentation for user defined hook'}, {stream: false})
        console.log('hidden ask result', result)

        window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'explain user defined error'})
    })
