console.log('background script')

let count = 0

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(sender)
    console.log(message)
    if (message.content == 'ping') {
        count += 1
        sendResponse({'content': count})
    }
})

export {}
