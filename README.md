# SeamusGPT

A conversational AI chatbot built with a fine-tuned GPT-2 model and modern web technologies.

## 🚀 Features

- **Fine-tuned GPT-2 Model**: Custom-trained language model for specialized conversations
- **Real-time Chat Interface**: Modern React-based chat UI with typing indicators
- **FastAPI Backend**: High-performance REST API with CORS support
- **Responsive Design**: Clean, professional chat interface

## 🏗️ Architecture

```
SeamusGPT/
├── backend/                 # FastAPI backend server
│   ├── app.py              # Main FastAPI application
│   ├── models/             # ML model components
│   ├── requirements.txt    # Python dependencies
│   └── models/             # Trained model files
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   └── App.js          # Main application
│   ├── package.json        # Node.js dependencies
│   └── public/             # Static assets
└── docs/                   # Documentation
```

## 🛠️ Tech Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Transformers**: Hugging Face library for NLP models
- **PyTorch**: Deep learning framework
- **Uvicorn**: ASGI server

### Frontend
- **React**: JavaScript library for building user interfaces
- **CSS3**: Modern styling with responsive design
- **Fetch API**: HTTP client for API communication

## 📋 Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SeamusGPT.git
cd SeamusGPT
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend application will start on `http://localhost:3000`

### 4. Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Start chatting with SeamusGPT!
3. The AI will respond based on the fine-tuned model

## 🔧 Configuration

### Backend Configuration

The backend can be configured through environment variables:

- `PORT`: Server port (default: 5000)
- `HOST`: Server host (default: 0.0.0.0)
- `MODEL_PATH`: Path to the trained model (default: ./models)

### Frontend Configuration

The frontend connects to the backend API. Update the API endpoint in `src/components/ChatInterface.jsx` if needed.

## 📁 Project Structure

### Backend Files

- `app.py`: Main FastAPI application with chat endpoint
- `models/seamus_gpt.py`: GPT-2 model wrapper and text generation
- `requirements.txt`: Python dependencies
- `models/`: Directory containing trained model files

### Frontend Files

- `src/components/ChatInterface.jsx`: Main chat component
- `src/components/ChatInterface.css`: Chat interface styling
- `src/App.js`: Main React application
- `package.json`: Node.js dependencies and scripts

## 🤖 Model Information

The project uses a fine-tuned GPT-2 model trained on custom data. The model is loaded from the `models/` directory and generates responses based on user prompts.

### Model Features

- **Base Model**: GPT-2
- **Fine-tuning**: Custom dataset training
- **Generation Parameters**: 
  - Top-k: 50
  - Top-p: 0.95
  - Max length: Configurable

## 🧪 Development

### Running Tests

```bash
# Backend tests
cd backend
python -m pytest

# Frontend tests
cd frontend
npm test
```

### Building for Production

```bash
# Frontend build
cd frontend
npm run build

# Backend (no build step required)
cd backend
python app.py
```

## 📝 API Documentation

### Chat Endpoint

**POST** `/api/chat`

Request body:
```json
{
  "prompt": "Your message here"
}
```

Response:
```json
{
  "response": "AI generated response"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Hugging Face for the Transformers library
- OpenAI for the GPT-2 base model
- FastAPI for the excellent web framework
- React team for the frontend framework

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the maintainers.

---

**Note**: This project requires the trained model files to be present in the `backend/models/` directory. Make sure to include the model files when deploying or sharing the project. 