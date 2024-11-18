window.codioIDE.coachBot.register('level1button', 'level1 button', () => {
    window.codioIDE.coachBot.showButton('level2 input', async () => {
        const input = await window.codioIDE.coachBot.input('enter hook name')
        window.codioIDE.coachBot.write('Please wait in level2...')
        window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'show react hook documentation for user provided hook'})
    })
    window.codioIDE.coachBot.showButton('level2 button promt', async () => {
        window.codioIDE.coachBot.ask({userPrompt: 'level2 button promt', systemPrompt: 'level2 button promt'})
    })
    window.codioIDE.coachBot.showButton('level2 button', async () => {
        window.codioIDE.coachBot.showButton('level3 button', async() => {
            window.codioIDE.coachBot.ask({userPrompt: 'level3 button promt', systemPrompt: 'level3 button promt'})
        })
        window.codioIDE.coachBot.showButton('level3 input', async () => {
            const input = await window.codioIDE.coachBot.input('enter name in level3')
            window.codioIDE.coachBot.write('Please wait in level3...')
            window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'level3 input'})
        })        
        
    })    
})
window.codioIDE.coachBot.register('level1input', 'level1 input', async () => {
    const input = await window.codioIDE.coachBot.input('enter input value')
    window.codioIDE.coachBot.write('Please wait in level1...')
    window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'show input'})
})
window.codioIDE.coachBot.register('analyseBtnId', 'Analyse history and what next', async () => {
  const messages = await window.codioIDE.coachBot.getHistory()
  console.log(messages)
  let currentMessageRole = window.codioIDE.coachBot.MESSAGE_ROLES.ASSISTANT // initial value to get next message with role "USER"
  const messagesToSend = messages.reduce((acc, message) => {
    if (message.role !== currentMessageRole) {
      acc.push(message)
      currentMessageRole = message.role
    }
    return acc
  }, [])
  try {
    await window.codioIDE.coachBot.ask({systemPrompt: 'analyse history and provide a hint what should user do next', messages: messagesToSend})
  } catch (e) {
    console.log('coach bot error on ask', e.message)
  }
})
window.codioIDE.coachBot.register('preventmenuandshowment', 'prevent menu and show menu', async () => {
  window.codioIDE.coachBot.showButton('click to ask', async () => {
    const input = await window.codioIDE.coachBot.input('please type hook name')
    const resultStream = await window.codioIDE.coachBot.ask(
      {userPrompt: input, systemPrompt: 'get react hook docs for user provided hook'},
      {stream: true, preventMenu: true} // don't show menu buttons after bot answer
    )
    console.log('resultStream', resultStream)

    setTimeout(() => {
      window.codioIDE.coachBot.showMenu() // show menu buttons after 5 sec later 
    }, 5000)
  })
})

window.codioIDE.coachBot.register('showllmproxydetails', 'show llm proxy details', async () => {
    const llm = await window.codioIDE.coachBot.getLlmProxyDetails()
    console.log('llm', {llm})
    for (let i = 0; i < llm.length; i++) {
        window.codioIDE.coachBot.write('provider: ' + llm[i].provider)
        window.codioIDE.coachBot.write('url: ' + llm[i].endpoint)
        window.codioIDE.coachBot.write('key: ' + llm[i].key)
    }
    setTimeout(() => {
      window.codioIDE.coachBot.showMenu()
    }, 3000)
})

window.codioIDE.coachBot.register('askopenaillmproxy', 'ask Openai llm proxy', async () => {
    const input = await window.codioIDE.coachBot.input('please type hook name')
    const llmProxyAnswer = await window.codioIDE.coachBot.ask(
        {userPrompt: input, systemPrompt: 'get react hook docs for user provided hook'},
        {stream: true, preventMenu: true,
            proxy: {
                model: 'gpt-4o',
                provider: 'openai'
            }
        } 
    )
    console.log('llmProxyAnswer', {llmProxyAnswer})

    setTimeout(() => {
      window.codioIDE.coachBot.showMenu()
    }, 3000)
})

window.codioIDE.coachBot.register('askanthropicllmproxy', 'ask Anthropic llm proxy', async () => {
    const input = await window.codioIDE.coachBot.input('please type hook name')
    const llmProxyAnswer = await window.codioIDE.coachBot.ask(
        {userPrompt: input, systemPrompt: 'get react hook docs for user provided hook'},
        {stream: true, preventMenu: true, 
            proxy: {
                model: 'claude-3-5-sonnet-20240620',
                provider: 'anthropic' 
            }
        } 
    )
    console.log('llmProxyAnswer', {llmProxyAnswer})

    setTimeout(() => {
      window.codioIDE.coachBot.showMenu()
    }, 3000)
})