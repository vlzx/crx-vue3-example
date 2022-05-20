console.log('background script')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(sender)
    console.log(message)
    if (message.content == 'ping') {
        sendResponse({'content': 'pong'})
    }
})

export {}
