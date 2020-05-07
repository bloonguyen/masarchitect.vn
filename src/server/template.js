export default (html) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>MAS Architecture</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <meta name='description' content='MAS Architecture design civil & industrial architectural projects such as houses, villas, restaurant, hotel, bar, coffee, office ... With the slogan "Creativity - Experiences - Enthusiasm", MAS Architecture will bring you an active and comfortable living space.'/>
        <meta name='author' content='M.SPACE Co.,ltd'/>
        <meta property="og:image" content="/images/cover.jpg">
        <link href='/css/bootstrap.min.css' rel='stylesheet'>
        <link href='/css/stylesheet.css' rel='stylesheet'>
        <link href='/bundle/styles.css' rel='stylesheet'>
        <link rel="icon" type="image/png" href="/images/logo/favicon.png">
        <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="e81030e5-5193-4e3f-b8fd-7f8ccf06e101";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117265550-1"></script>
        <script
            type="text/javascript"
            async defer
			src="https://assets.pinterest.com/js/pinit.js"
			data-pin-build="doBuild"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-117265550-1');
        </script>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="/bundle/bundle.js"></script>

    </body>
    </html>
`;
