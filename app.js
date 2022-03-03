const http = require('http')
const fs = require('fs')
const port = 3000

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404)
            res.write('Error, Page Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http
.createServer((req, res) => {
    res.writeHead(200, {        
        'Content-Type' : 'text/html'
    })
    const url = req.url


    switch(url) {
        case '/about':
            renderHTML('./about.html', res)
            break
        case '/contact':
            renderHTML('./contact.html', res)
            break
        case '/blog':
            renderHTML('./blog.html', res)
            break
        case '/course':
            renderHTML('./course.html', res)
            break
        default:
            renderHTML('./home.html', res)
            break
    }

})
.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})