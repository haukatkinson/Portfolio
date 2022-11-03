"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Register
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def eventRegister():
    body = request.json# get the request body content
    name = request.json.get('name')
    email = request.json.get('email')
    subject = request.json.get('subject')
    details = request.json.get('details')
    eventInfo = Register(name= name,email= email,subject= subject,details= details)
    db.session.add(eventInfo)
    db.session.commit()
    return jsonify(body), 201

@api.route('/registrations', methods=['GET'])
def getRegistrations():
    registrations=Register.query.all()
    registrations_array=[register.serialize() for register in registrations]
    return jsonify(registrations_array), 200