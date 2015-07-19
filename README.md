POST Tester
------------

Accepts POST requests to the url `localhost`, and sends a simple response `{message: "Message received!"}`

### Setting Up the Server

Make sure you have [Node.js](https://nodejs.org/) installed on your computer. Then in this folder run `npm install`. After that is finished, run `node app.js`.

### Test the Server

Install the Postman chrome app from [here](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Open it, and send a new POST request to the url "localhost". Make sure the body is `x-www-form-urlencoded` to match the format of the Android client.
After sending it, the Postman app should show the response `{message: "Message received!"}`, and the console in which the server is running should show something like

	Got POST! Request data:
	{ param1: 'paramvalue1', param2: 'paramvalue2' }
	POST / 200 45.142 ms - 31

### Android Client

Credit to [Sandy D](http://stackoverflow.com/a/31065964/1852456) and [Pankaj](http://www.journaldev.com/7148/java-httpurlconnection-example-to-send-http-getpost-requests)

```java
String POST_PARAMS = "param1=" + params[0] + "&param2=" + params[1];
URL obj = null;
HttpURLConnection conn = null;
try {
	obj = new URL(YOUR_SERVER_URL);
	conn = (HttpURLConnection) obj.openConnection();
	conn.setRequestMethod("POST");

	// For POST only - BEGIN
	conn.setDoOutput(true);
	OutputStream os = conn.getOutputStream();
	os.write(POST_PARAMS.getBytes()); 
	os.flush();
	os.close();
	// For POST only - END

	int responseCode = conn.getResponseCode();
	Log.i(TAG, "POST Response Code :: " + responseCode);

	if (responseCode == HttpURLConnection.HTTP_OK) { //success
		BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		// print result
		Log.i(TAG, response.toString());
	} else {
		Log.i(TAG, "POST request did not work.");
	}
} catch (IOException e) {
	e.printStackTrace();
}
```
