import os
import shutil
import subprocess

# Change this to your preferred directory
PROJECT_NAME = "project-3"
BASE_DIR = os.path.expanduser(f"C:/Desktop/Code/html/react-bootstrap/{PROJECT_NAME}")

FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")
BACKEND_DIR = os.path.join(BASE_DIR, "backend")


def run_command(command, cwd=None):
    """Runs a shell command and exits on failure."""
    result = subprocess.run(command, shell=True, cwd=cwd, text=True)
    if result.returncode != 0:
        print(f"❌ Error: {command} failed.")
        exit(1)


def setup_directories():
    """Creates base project directories."""
    os.makedirs(BASE_DIR, exist_ok=True)
    print(f"📂 Created project directory: {BASE_DIR}")


def setup_frontend():
    """Sets up a Vite + React (JavaScript + SWC) frontend with Bootstrap."""
    print("\n⚡ Setting up frontend (React + SWC)...")

    # Ensure frontend directory is clean
    if os.path.exists(FRONTEND_DIR):
        shutil.rmtree(FRONTEND_DIR)

    run_command("npm create vite@latest frontend -- --template react-swc", cwd=BASE_DIR)

    # Install dependencies
    run_command("npm install", cwd=FRONTEND_DIR)
    run_command("npm install bootstrap react-bootstrap", cwd=FRONTEND_DIR)

    # Import Bootstrap in main.jsx
    main_jsx = os.path.join(FRONTEND_DIR, "src", "main.jsx")
    with open(main_jsx, "r+") as f:
        content = f.read()
        f.seek(0, 0)
        f.write("import 'bootstrap/dist/css/bootstrap.min.css';\n" + content)

    print("✅ Frontend setup complete!")


def setup_backend():
    """Sets up a Flask backend with a virtual environment."""
    print("\n🔥 Setting up backend (Flask)...")
    
    if not os.path.exists(BACKEND_DIR):
        os.makedirs(BACKEND_DIR)

    # Create a virtual environment
    run_command("python -m venv venv", cwd=BACKEND_DIR)

    # Determine correct virtual environment activation for Windows/Linux
    if os.name == "nt":
        venv_python = os.path.join(BACKEND_DIR, "venv", "Scripts", "python")
    else:
        venv_python = os.path.join(BACKEND_DIR, "venv", "bin", "python")

    # Install Flask & CORS
    run_command(f"{venv_python} -m pip install flask flask-cors", cwd=BACKEND_DIR)

    # Create a simple Flask server
    app_py = os.path.join(BACKEND_DIR, "app.py")
    with open(app_py, "w") as f:
        f.write("""from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {'message': 'Hello from Flask!'}

if __name__ == '__main__':
    app.run(debug=True)
""")

    print("✅ Backend setup complete!")


if __name__ == "__main__":
    setup_directories()
    setup_frontend()
    setup_backend()

    print("\n🚀 Project setup complete! Navigate to your project folder:")
    print(f"Frontend:  cd {FRONTEND_DIR} && npm run dev")
    print(f"Backend:   cd {BACKEND_DIR} && {'venv\\Scripts\\activate && python app.py' if os.name == 'nt' else 'source venv/bin/activate && python app.py'}")
