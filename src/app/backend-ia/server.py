
import pickle

import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__) # Inicializa o Flask
CORS(app) 

loaded_model = pickle.load(open("src/app/backend-ia/ML_modelo.pkl", "rb")) # Carrega o modelo treinado

@app.route('/') # Rota principal
def index():
    return 'Server on!'


@app.route('/call_predict', methods=['POST'])
def call_predict():
        content = request.get_json() # Extrai o json da requisição
        data = content['data'] # Extrai o dado do json
        to_predict = np.array(data).reshape(1, -1) # Converte o dado para o formato aceito pelo modelo
        result = loaded_model.predict(to_predict) # Faz a predição
        return jsonify({'prediction':result[0]}) # Retorna a predição
