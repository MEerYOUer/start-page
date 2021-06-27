# start-page

A single webpage that displays useful links. Meant to be hosted and used on a local machine as a web browser homepage. The page sets the background to a random image from the *public/images/bg* directory on each page load.

## How to Use It

The links are designed to be hardcoded into the HTML. They will need filled in by you--the user--depending on your needs.

This app requires Node.js and NPM to run. Guides to install them here:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

[https://docs.npmjs.com/getting-started](https://docs.npmjs.com/getting-started)

This guide will also use the PM2 process manager which can be installed here:

[https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)

---

Notes:

1. The default port is 8081. This can be changed in the *server.js* file.

2. This webpage was designed for my own devices, it was not designed to fit every screen-size or device. Modify it as needed.

---

### On Windows 10

*In this tutorial, we're going to create a Scheduled Task that runs on login which will run PM2 and tell it to host our startpage.*

1. After assuring that the above are installed, download (and extract/unzip) the files from this repo and place them into a directory of your choosing.

2. Open *Task Scheduler*
    1. Select **Task Scheduler Library**
    2. On the right (under *Actions*), select **Create Basic Task**
    3. Enter a name and description, click **Next**.
    4. Select **When I log on**, click **Next**.
    5. Select **Start a program**, click **Next**.
    6. Now we're going to tell our scheduled task to run PM2, and tell PM2 to run our start page.
        1. In the **Program/script** field, insert the full path to **pm2.cmd**. It will likely look something like this:

                C:\Users\MEerYOUer\AppData\Roaming\npm\pm2.cmd

        2. In the **Add arguments** field, insert the **start** command **followed by the path** to the directory of the files from this repo. It should look something like this:

                start C:\Users\MEerYOUer\Documents\node_apps\startpage

        3. Click **Next**.

    7. Review the details and hit **Finish**.
    8. Now let's test it out. Right-click your new task and select **Run**. Under *Last Run Result*, you should see *"The operation completed successfully. (0x0)"*
        1. Optionally, you can view the status of all PM2 processes by opening up a Windows Terminal, CMD, or other console of your choice and run:

                pm2 monit

    9. Now let's check out the start page. Open up your web browser and navigate to:

            http://localhost:8081/

### On Linux

*Tutorial coming soon.*
