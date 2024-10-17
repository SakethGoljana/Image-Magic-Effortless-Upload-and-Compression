from flask import Flask, request, send_file, render_template, jsonify
from PIL import Image
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save the original image
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)

        # Compress the image
        img = Image.open(filepath)
        compressed_filepath = os.path.join(app.config['UPLOAD_FOLDER'], 'compressed_' + file.filename)
        img.save(compressed_filepath, optimize=True,quality=45)  

        original_size_kb = round(os.path.getsize(filepath) / 1024, 2)
        compressed_size_kb = round(os.path.getsize(compressed_filepath) / 1024, 2)

        return jsonify({
            'original_size': original_size_kb,
            'compressed_size': compressed_size_kb,
            'original_image': f'/uploads/{file.filename}',
            'compressed_image': f'/uploads/compressed_{file.filename}'
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], filename))

if __name__ == '__main__':
    app.run(debug=True)
