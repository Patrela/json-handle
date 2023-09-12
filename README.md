# json-handle
API back-end for r/w in files in default Path in Javascript. Front end uses the API, and feeds the content and Filename in JSON format. POST = http://localhost:3001/write-json/file-name-xx.json GET = http://localhost:3001/read-json/file-name-xx.json

## json-api
Goal: read/write files text  
Tools and languajes: Node.js - javascript. npm modules:  express - cors - path - fs  
path for files in the API: Application API path
### API USE
=======
* GET: http://localhost:3001/read-json/ + filename.json
  For reading the filename.json you just create
* POST: http://localhost:3001/write-json/+ filename.json
  For create or update the json filneame.json
  **Body** (Json format): the json file content

## json-update
Goal: create/update json files  
Tools and languajes: Node.js - javascript. npm modules:  react react-dom axios  
path for files in the API: Application API path  
  
  _Recuperar el Archivo JSON_ Write the filename to create / read / update __Always add the extension .json__  
  _Escribir en el Archivo JSON_ Write the new json content in the text area
