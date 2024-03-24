# Image_Processing_Web_App
**Image Editor Web Application**

Welcome to the Image Editor web application! This application allows users to upload images, apply filters, and perform various image editing operations such as cropping. Below are detailed instructions on how to set up, run, and test the web application locally.

**Setup:**

1. **Download the Source Code:**
   - Click on the "Code" button on the GitHub repository page.
   - Select "Download ZIP" to download the source code as a ZIP file.
   - Extract the contents of the ZIP file to a directory on your local machine.

2. **Navigate to the Project Directory:**
   - Open a terminal or command prompt.
   - Use the `cd` command to navigate to the directory where you extracted the source code.

**Running the Application:**

1. **Start a Local Server:**
   - Depending on your preference, you can use a local server to run the application. Here are a few options:
     - If you have Python installed, you can use Python's built-in HTTP server:
       ```
       python -m http.server
       ```
     - Alternatively, you can use a development server provided by a web development framework like Flask or Django.

2. **Open the Application in a Web Browser:**
   - Once the server is running, open a web browser.
   - Enter the URL provided by your local server in the address bar.
   - Press Enter to navigate to the URL.

3. **Explore the Application:**
   - You should now see the Image Editor web application interface.
   - Feel free to upload an image using the "Choose Image" button in the Upload Image section.
   - Once the image is displayed in the Original Image section, you can apply various filters by clicking on the corresponding buttons in the Apply Filter section.
   - To crop the image, enter the desired values for X, Y, Width, and Height in the Crop Image section, and click the "Crop" button.

**Testing:**

1. **Upload an Image:**
   - Start by uploading an image using the "Choose Image" button.
   - Ensure that the uploaded image appears in the Original Image section.

2. **Apply Filters:**
   - Test the functionality of each filter button in the Apply Filter section.
   - Verify that the image appearance changes accordingly when applying different filters.

3. **Crop Image:**
   - Enter different values for X, Y, Width, and Height in the Crop Image section.
   - Click the "Crop" button to crop the image.
   - Confirm that the cropped portion of the image is displayed correctly.

4. **Responsive Design:**
   - Test the responsiveness of the application by resizing the browser window.
   - Ensure that the layout adjusts appropriately to different screen sizes.

**Additional Notes:**

- For the best experience, use modern web browsers such as Google Chrome, Mozilla Firefox, or Safari.
