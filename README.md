
# Image Magic: Effortless Image Upload and Compression

This project is a web application that allows users to upload images and compress them effortlessly. It is built using Python (Flask) for the backend, JavaScript for interactivity, and HTML/CSS for the frontend design. The app compresses images using the Python Imaging Library (PIL) and displays both the original and compressed images, along with their file sizes.

### Features

- **Upload an image:** Users can select an image file from their device and upload it.
- **Compress the image:** The uploaded image is compressed using the `Pillow` library with optimized quality.
- **View file sizes:** The app shows the original and compressed image sizes for comparison.
- **Download the compressed image:** Users can download the compressed image directly.

### Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Deployment](#deployment)
  - [Render Deployment](#render-deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)


## Getting Started

Follow these instructions to set up and run this project on your local machine.

### Prerequisites

- Python 3.x
- Flask
- Pillow (PIL)
- A GitHub account (for version control and deployment)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SakethGoljana/Image-Magic-Effortless-Upload-and-Compression.git
   cd Image-Magic-Effortless-Upload-and-Compression
   ```

2. **Set up a virtual environment (recommended)**:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Create the necessary directories**:
   The application saves uploads and compressed files in an `uploads/` folder, which will be automatically created during the first run of the app.

### Usage

1. **Run the application locally**:
   ```bash
   python app.py
   ```

2. **Open your browser** and visit:
   ```
   http://127.0.0.1:5000/
   ```

3. **Upload an image**: Use the upload form to select an image, and it will be compressed upon submission.

## Deployment

The application is deployed using **Render**, a platform for easily hosting web applications.

### Render Deployment

1. **Fork and Clone the Repository**: 
   If you haven't already forked the repository, fork it, and then clone the forked version:
   ```bash
   git clone https://github.com/your-username/Image-Magic-Effortless-Upload-and-Compression.git
   ```

2. **Create a `render.yaml` file** (Optional but recommended):
   If not already present, create a `render.yaml` file to define the services. Here’s an example configuration:
   ```yaml
   services:
     - type: web
       name: ImageMagic
       env: python
       buildCommand: "pip install -r requirements.txt"
       startCommand: "gunicorn app:app"
       plan: free
   ```

3. **Deploy via Render**:
   - Log in to [Render](https://render.com/) and click **New** > **Web Service**.
   - Connect your GitHub repository.
   - Set the build and start commands as follows:
     - **Build Command:** `pip install -r requirements.txt`
     - **Start Command:** `gunicorn app:app`
   - Wait for the deployment to finish. Once completed, Render will provide a URL where your Flask app is hosted.

4. **Check Live App**: Once deployed, your app should be live at the Render-provided URL.

### Environment Variables (If any)

If your app requires any environment variables (like `SECRET_KEY` or database URLs), you can add them directly in Render’s dashboard under your service settings.

## Folder Structure

```bash
├── app.py                # Main Flask application
├── templates
│   └── index.html        # Frontend HTML for the app
├── static
│   ├── style.css         # Custom styles
│   ├── script.js         # JavaScript for interactivity
├── uploads               # Stores uploaded and compressed images
├── requirements.txt      # Project dependencies
├── render.yaml           # Render deployment configuration (optional)
└── README.md             # Project documentation (this file)
```

## Contributing

1. Fork the project repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push the branch to GitHub:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Submit a Pull Request.


**Image Magic** - Effortless upload and compression made simple!
