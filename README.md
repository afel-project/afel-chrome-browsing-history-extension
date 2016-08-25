=== AFEL Chrome Browsing History Extension ===
Contributor: Mathieu d'Aquin (@mdaquin)

This chrome extension will first connect to the AFEL data catalogue to create the relevant stream, and then update this stream with activity data corresponding to the user's visit to website/webpages through the browser.

To install: 
Download or got clone - got to settings -> extensions 
Click on "Developper mode" if not already enabled. 
Use "Load unpacked extension" to select the directory where the extension is.

The first thing that should happen is that it will show a loging page for the AFEL data platform. Please register (http://data.afel-project.eu/catalogue/wp-login.php?action=register) if you don't already have an account.

Once logged in, the extension will have obtained all the details needed to updload data about browsing activity on the AFEL data platform.

You will be able to track this activity through the AFEL User Dashboard (http://data.afel-project.eu/catalogue/index.php/user-dashboard/).

It will also update three API endpoint from which data can be obtained. To use them, apply for example:

curl -u <your-api-key> http://data.afel-platform.eu/api/entity/day/today 

to get activities for the current day. 

You can also use:
   - http://data.afel-platform.eu/api/entity/day/25-08-206 (for example) for the a specific day
   - http://data.afel-platform.eu/api/entity/month/current for the current month
   - http://data.afel-platform.eu/api/entity/month/08-2016 (for example) for a specific month
   - http://data.afel-platform.eu/api/entity/year/current for the current year
   - http://data.afel-platform.eu/api/entity/year/2016 (for example) for a specific year


Note that these endpoints might also include data obtained from other extractors.

Please make sure to read and accept the Terms and Conditions (http://data.afel-project.eu/catalogue/index.php/terms-browsing/) before downloading and activating this browser extension.

