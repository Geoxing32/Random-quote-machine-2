<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Random Quote Generator </title>
    <script src="quote.js"></script>

    <script>

 

      window.onload = init;
      function init() {
        generateQuote()
      }

      function generateQuote() {
        let quoteSize = QUOTEBANK.length;
        let randomIndex = Math.floor(Math.random() * quoteSize);
        let randomQuoteData = QUOTEBANK[randomIndex];

        let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="

        // Add The Quote
        let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
        twitterLink += quoteInApiFormat
        // Add the Author
        let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
        twitterLink += " - " + authorInApiFormat

        document.getElementById("tweet-quote").href = twitterLink;
        document.getElementById("text").innerText = randomQuoteData.quote;
        document.getElementById("author").innerText = randomQuoteData.author;
      }




    </script>
</head>


<body>
    <div class="container">
      <div class="row py-5">
        <div class="col-md-8 offset-md-2"
          <wrapper id="quote-box">
            <div class="card">
              <div class="card-header text-center">
                Random Quote Machine
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <div id="text"></div>
                </h5>
                <p class="card-text">
                  <div id="author"></div>
                </p>
                <button id="new-quote" onClick="generateQuote();" class="btn btn-block btn-danger">New Quote</button>
                <a href="#" id="tweet-quote" target="_blank" class="btn btn-block btn-primary">Tweet Quote</a>
              </div>
            </div>
          </wrapper>
           </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
  </body>
</html>
    
</body>
</html>
