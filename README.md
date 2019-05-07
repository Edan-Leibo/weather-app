# weather-app
A website which provides a weather for a given location.

:construction: This project under construction :construction:

The basic functionality exists - 
The user can look for a weather forecast and can send http request to the node server, which then takes the location and converts it into geocode using an external API.
Once the server has the geocode, he sends a second http GET request to Darksky API to get the current weather.

Then after having the entire weather in a json format the server sends it back to the client.
