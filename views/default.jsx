const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
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
  