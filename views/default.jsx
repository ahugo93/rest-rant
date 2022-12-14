const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Rest-RANT</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                         <a href="/">Home</a>
                    </li>
                     <li>
                        <a href="/places">Places</a>
                     </li>
                     <li>
                        <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
            </body>
            <footer>Website built by Hugo</footer>
        </html>
    )
  }

  module.exports = Def
  