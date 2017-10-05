export default (html) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>MAS Architecture</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <meta name='description' content='MAS Architecture design  civil & industrial architectural projects such as houses, villas, restaurant, hotel, bar, coffee, office ... With the slogan "Creativity - Experiences - Enthusiasm", MAS Architecture will bring you an active and comfortable living space.'/>
        <meta name='author' content='M.SPACE Co.,ltd'/>
        <meta property="og:image" content="/images/cover.jpg">
        <link href='/css/bootstrap.min.css' rel='stylesheet'>
        <link href='/css/stylesheet.css' rel='stylesheet'>
        <link href='/bundle/styles.css' rel='stylesheet'>
        <link rel="icon" type="image/png" href="/images/logo/favicon.png">
        <meta charset="utf-8">
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="/bundle/bundle.js"></script>
    </body>
    </html>
`;
