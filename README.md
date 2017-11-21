# REST test

## Model-View-Controller (MVC)
* En arkitekturmodell som bygger på att separera delar i en app
* Målet är att återanvända kod och möjliggöra parallell programmering
* Kravet inom MVC är att isolera problemen
* Användare ser _Views_ och använder _Controllers_
* En _Controller_ manipulerar _Models_
* _Models_ uppdaterar _Views_

### MODEL
* Model hanterar data och logik
* Schema, hantering av db

### VIEW
* Presentation eller användargränssnitt
* Både visa (lista data) och manipulera (knappar)
* I detta fall, webbsida som genererar HTTP anrop

### CONTROLLER
* Hanterar användarbegäran
* Exempelvs HTTP GET eller POST requests vid klick på GUI

## REST
* Representational State Transfer

### REST exempel
* Kontohanteringssystem
1. Skapa konto (email, pwd) - form-text, form-password, button
2. Visa konto (epost, skapat-datum, api-key) - text
3. Redigera konto (redigera pwd) - form-pwd, button
4. Radera konto - button
