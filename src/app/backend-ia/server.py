
import pickle

import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn import *

app = Flask(__name__) # Initialize Flask
CORS(app) 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)

loaded_model = pickle.load(open("src/app/backend-ia/ML_modelo.pkl", "rb")) # Load the trained model

@app.route('/') #Rotas principais
def index():
    return 'Server on!'


@app.route('/analiseia', methods=['POST']) #Rota que vai chamar a precição ((((NÃO TO CONSEGINDO FAZER ESSE BICHO PEGAR O JSON))))
def call_predict():
    print("POST recebido")
    content = request.get_json() # extrai o json da requisição
    data = content['data'] # extrai os dados do json
    to_predict = np.array(data).reshape(1, -1) # converte os dados para o formato aceito pelo modelo
    result = loaded_model.predict(to_predict) # faz a predição
    return jsonify({'prediction': result[0]}) # Retorna a predição
