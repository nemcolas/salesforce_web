import os
import pickle
import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_cors import cross_origin

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Construindo o caminho absoluto para o arquivo
caminho_modelo = os.path.join(os.path.dirname(__file__), 'ML_modelo.pkl')

# Verificando se o arquivo existe
if not os.path.exists(caminho_modelo):
    raise FileNotFoundError(f"O arquivo {caminho_modelo} não foi encontrado.")

# Carregando o modelo
loaded_model = pickle.load(open(caminho_modelo, "rb"))

@app.route('/')
def index():
    return 'Server on!'

def convert_int64_to_int(data):
    if isinstance(data, np.int64):
        return int(data)
    if isinstance(data, list):
        return [convert_int64_to_int(x) for x in data]
    if isinstance(data, dict):
        return {k: convert_int64_to_int(v) for k, v in data.items()}
    return data

@app.route('/call_predict', methods=['POST'])
@cross_origin() 
def call_predict():
    content = request.get_json()
    if 'data' not in content:
        return jsonify({"error": "Missing 'data' field in JSON request"}), 400

    data = content['data']
    # Converting int64 to int
    data = convert_int64_to_int(data)
    to_predict = np.array(data).reshape(1, -1)
    result = loaded_model.predict(to_predict)
    return jsonify({'prediction': int(result[0])})  # Ensuring the result is JSON serializable

if __name__ == '__main__':
    app.run(debug=True)
