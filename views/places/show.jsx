const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src= {data.place.pic} alt="Image of place" />
            <h2>Rating</h2>
            <p>Currently not rated!</p>
            <h2>Comments</h2>
            <p>No comments yet!</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit 
            </a>   
            <br /> 
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger"><i class="fa fa-trash"> Delete </i>
                
              </button>
            </form> 
          </main>
        </Def>
    )
}

module.exports = show
