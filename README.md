# REST test

## Model-View-Controller (MVC)
* En arkitekturmodell som bygger på att separera delar i en app
* Målet är att återanvända kod och möjliggöra parallell programmering
* Kravet inom MVC är att isolera uppgifterna
* Användare ser _Views_ och använder _Controllers_
* En _Controller_ manipulerar _Models_
* _Models_ uppdaterar _Views_

### MODEL
* Hanterar data och logik
* En del av _Model_ är _Schema_ som hanterar db

### VIEW
* _View_ är presentation och/eller användargränssnitt
* Visa (lista data) och manipulera (knappar)
* I detta fall, webbsida som genererar HTTP anrop

### CONTROLLER
* Hanterar användarbegäran
* Exempelvs HTTP GET/POST/PUT/DELETE requests vid klick på GUI

## REST
* Representational State Transfer
* En HTTP arkitektur för CRUD
* Twitter REST API, Facebook REST API, Dropbox REST API är några exempel
* Ingen klientdata sparas vid överföringar

### REST exempel
* <url>/api/accounts        //skapa konto (POST - C)
* <url>/api/accounts        //listar konton (GET - R)
* <url>/api/accounts/:id    //uppdatera konto (PUT - U)
* <url>/api/accounts/:id    //radera konto (DELETE - D)


### REST exempel
* Kontohanteringssystem
1. Skapa konto (email, pwd) - form-text, form-password, button
2. Visa konto (epost, skapat-datum, api-key) - text
3. Redigera konto (redigera pwd) - form-pwd, button
4. Radera konto - button

#### B9
* url:port/api/b9/floors/rooms/temps
