import React, { useEffect, useState } from 'react';

function Quotes() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        getQuote();
    }, [])

    function getQuote() {
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        fetch(url)
            .then(response => response.json())

            .then(data => {
                
                let dataQuotes = data.quotes;

                
                let randomNumber = Math.floor(Math.random() * dataQuotes.length);

                
                let randomQuotes = dataQuotes[randomNumber]

                
                setQuote(randomQuotes.quote);
                
                setAuthor(randomQuotes.author);
            })
            .catch(error => document.write("Invalid Link..."));
    }

    function nextQuote() {
        getQuote();
    }

    return (
    
        <div id="quote-box">
            <div id="wrapper">
                <div id="text">
                    {/* <h3>Random Quote Machine</h3> */}
                    <p>"{quote}"</p>
                </div>
                <div id="author"><b>- {author}</b></div>
            </div>
            <button id="new_quote" onClick={nextQuote}>Get a Quote</button>
        </div>

    );
}

export default Quotes;