function openImage(imageSrc, title) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
    <html>
        <head>
            <title>${title}</title>
            <style>
                body
                {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: rgb(237, 229, 229);
                }

                img
                {
                    max - width: 100%;
                    max-height: 100%;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <img src="${imageSrc}" alt="${title}">
        </body>
    </html>
    `);
}
