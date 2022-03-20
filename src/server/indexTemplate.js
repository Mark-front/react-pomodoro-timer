export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://i.ibb.co/0qd7L3r/tomato-1.png" type="image/x-icon">
  <title>pomodoro_box</title>
  <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
  <div id="react__root">${content}</div>
</body>
</html>
`;