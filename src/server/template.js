export default (html) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>MAS Architecture</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <link href='/css/bootstrap.min.css' rel='stylesheet'>
        <link href='/css/stylesheet.css' rel='stylesheet'>
        <link href='/bundle/styles.css' rel='stylesheet'>
        <link rel="icon" type="image/png" href="/images/favicon.png">
        <meta charset="utf-8">
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="/bundle/bundle.js"></script>
    </body>
    </html>
`;
