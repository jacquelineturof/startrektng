import React from 'react'

import classes from './QuoteBox.module.css'

const quoteBox = ( props ) => {
    const signatureClasses = [ classes.signature ]

    switch(props.randomQuote.author) {
        case('Captain Jean-Luc Picard'):
            signatureClasses.push(classes.Picard)
            break
        case('Q'):
            signatureClasses.push(classes.Q)
            break
        case('Data'):
            signatureClasses.push(classes.Data)
            break
        case('Worf'):
            signatureClasses.push(classes.Worf)
            break
        case('William T. Riker'):
            signatureClasses.push(classes.Riker)
            break
        default: return 'Error' // Error if we reach this code
    }

    return (
        <div id = "quote-box">
        <div id = "text" className = { classes.text }>
          { props.randomQuote.quote }
        </div>
    
        <div id = "quote-box-bottom">
        <div id = "author" className = { signatureClasses.join(' ') }>
            { props.randomQuote.author }
          </div>
          
          <div id = "quote-box-controls">
            <button id = "new-quote" onClick = { props.clicked } className = { classes.animated__button }>
                <span className = { classes.btn__visible }>Go where no one...</span>
                <span className = { classes.btn__invisible }>... has gone before</span>
            </button>

            <a href = "twitter.com/intent/tweet" target = "_blank" id = "tweet-quote">
              Tweet Quote
            </a>
          </div>
        </div>
    
      </div>
    )

}

export default quoteBox