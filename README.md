<h1>REST API skapat för moment 4 i kursen DT207G</h1>
Detta repository innehåller ett enklare REST API för att sköta lagring, registrering och inlogg av användare. Lagring av användare sker i en MongoDB-databas på Atlas. Alla lösenord hashas 10 gånger med hjälp av bcrypt-biblioteket.

<h2>Användning</h2>
Nedan finns beskriver hur man kan använda sig av APIet:
<br>
<br>
<table>
  <tr>
    <th>Metod</th>
    <th>Ändpunkt</th>
    <th>Beskrivning</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/register</td>
    <td>Registrering av ny användare.</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/login</td>
    <td>Inlogg av användare.</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/admin</td>
    <td>Lösenordsskyddad undersida.</td>
  </tr>
</table>

För att registrera eller logga in en användare, skicka med JSON-data i bodyn med följande format:
```json
{
  "username": "username",
  "password": "password"
}
```
