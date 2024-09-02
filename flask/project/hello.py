from flask import Flask, jsonify,request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from pymongo import MongoClient


from flask_cors import CORS   #pip install flask_cors

app = Flask(__name__)   #instance

cors=CORS(app,resources={r"/*":{"origins":"*"}})

client=MongoClient('mongodb://localhost:27017/')

mdb=client['gla']



# app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!  // this key is the encryption and decraption key
# jwt = JWTManager(app)





# @app.route("/")
# def hello_world():
#     return "<p>Hello, World! </p>"


# @app.route("/home")
# def home():
#     # return "<p>Hello, World! this is a home page</p>"
#     return{
#         "status":1,
#         "message":"success",
#         "payload":{
#             'title':"this is home page from the flask test genertaot",
#         }
#     }


# @app.route("/if-elif-else")
# def conditional():
#     value=1
#     if value==2:
#         return "the value is eqaul 2"
#     elif value<2:
#         return "the value is less the 2"

#     else:
#         return "this is a home page"


# @app.route("/inline-if")
# def inlineif():
#     value=2

#     # if value==1:
#     msg="the value is equal to 1 " if value==1 else "the value is not eqaul to 1"
#     # else:
#         # msg="the value is not equal to 1"
#     return msg





# @app.route("/for-loop")
# def forloop():
#     # return "<p>Hello, World! this is a home page</p>"
#     marks=[1,2,3,4,5,6,7]
#     total=0

#     for mark in marks:
#         total=total+mark

#     return {
#         'status':0,
#         'status':2,
#         'message':'success',
#         'payload':{
#             'total':total,
#             'values':[1,2,3,5,6,8]

#         }
        
        
#      }

# @app.route("/while-loop")
# def whileloop():
#     value=1
#     count=[]
#     while value<10:

#         value+=1
#         count.append(value)
#     return{
#         "status":1,
#         "message":"succes",
#         "payload":{

#             'counts':count,
#             'value':value


#         }
#     }


# @app.route("/function")
# def function():
#     value=add(10,12)

#     return{
#         "value":value
#     }
  

# def add(arg1,arg2):
#     value=arg1+arg2
#     return value




# @app.route("/multiplication")
# def functione():
#     value=add(10,12)

#     return{
#         "value":value
#     }
  

# def add(arg1,arg2):
#     value=arg1*arg2
#     return value



# @app.route("/db/insert")
# def insert():
#     users=[
#         {
#             "_id":4,
#             "name":"rahul",
#             "dept":"cse",
#         },

#         {
#             "_id":5,
#             "name":"manoj",
#             "dept":"cse",

#         },
#         {
#             "_id":6,
#             "name":"raju",
#             "dept":"cse",

#         },

#         {
#             "_id":7,
#             "name":"kumar",
#             "dept":"cse",

#         },
#         {
#             "_id":8,
#             "name":"ragine",
#             "dept":"cse",

#         },
#         {
#             "_id":9,
#             "name":"rajmata",
#             "dept":"cse",

#         }

#     ]

#     # mdb.users.insert_many(users)

#     # return users


# # @app.route("/db/read")
# # def read():
# #     # user=mdb.users.find_one({'_id':5})
# #     # return user

# #     users =mdb.users.find({"name":"ragine"},{'name':0})

# #     foundlist=[]
# #     for users in users:
# #         foundlist.append(users)



#     # secoundlist=[]
#     # for users in users:
#     #     secoundlist.append(users)

#     # # print('user',users)

#     # return {'foundlist':foundlist,"secoundlist":secoundlist}



# # @app.route("/db/update")

# # # def update():
# # #     user=mdb.users.find_one({'_id':4})
# # #     print('user',user)

# # #     # mdb.users.update_one({'_id':4}, {'$set': {'name': 'New Name','status':'active','address':{
# # #     #     'state':"up",
# # #     #     'dist':"mathura",
# # #     #     "location":"gla",
# # #     #     "pincode":12345
# # #     # }}})

# # #     mdb.user.update_many({},{'$set':{'address.location':"gla noida"}})



# # #     # updatuser=mdb.users.update_one({'_id':4},{'$set':{'address.location':"gla grater noida"}})


# # #     updatedata=[]

# # #     for user in mdb.users.find({}):
# # #         updatedata.append(user)



# # #     return {"upadet data is":updatedata}




# # @app.route("/db/remove")

# # def remove():
# #     user=mdb.users.delete_one({'_id':9})

# #     return{
# #         'status':1,
# #         'msg':"user removed",
# #         'class':"success"
# #     }





# # @app.route("/db/update")

# # def update():
# #    updatuser= mdb.users.update_one(
# #         {'_id':7},{'$set':{'email':"rkx1234567@gmail.com","password":1234567}} )
    

        


#------------------------------------------------------


# @app.route("/current/user", methods=["GET"])
# @jwt_required()
# def protected()
#     userId = get_jwt_identity()
#     user
   
#     return jsonify(logged_in_as=userId), 200

# @app.route("/login", methods=['POST'])
# def login():
#     input = request.json
#     email = input.get('email')
#     password = input.get('password')

#     user = mdb.users.find_one({'email': email, 'password': password})

#     if user and '_id' in user:
#         token = create_access_token(identity=user['id'])

#         return {
#             'status': 1,
#             'msg': "user exits correct detail",
#             'class': "success",
#             'payload': {
#                 "user": user,
#                 "token":token
#             }
#         }
#     else:
#         return {
#             'status': 0,
#             'msg': "invalid credentials",
#             'class': "error"
#         }
#-------------------------------------------------Registation form------------------------------------------------

@app.route("/register", methods=['POST'])
def register():
    input_data = request.get_json()
    name = input_data.get('username')
    email = input_data.get('email')
    password = input_data.get('password')
    user = mdb.useres.find_one({'email':email})
    print(user)
    if user and '_id' in user:
        return {
            'status': 0,
            'msg':"user exit",
            'class':"success"
        }
    count = mdb.users.count_documents({})
    useres={
        "_id":count+1,
        "name":name,
        "email":email,
        "password":password,
    }
    mdb.users.insert_one(useres)
    return "inserted successfully"

#-----------------------------------------


#Day14-----------------------------------------

# @app.route("/get/users")
# def getUsers():
#     users = []
#     for user in mdb.users.find({}):
#         users.append(user)
#     return users


# from flask import Flask, jsonify, request
# from pymongo import MongoClient

# app = Flask(__name__)

# # create a connection to your MongoDB database
# client = MongoClient('mongodb://localhost:27017/')
# db = client['your_database_name']
# Collection = db['your_collection_name']

# @app.route("/users", methods=["GET"])
# def get_users():
#     users = Collection.find()
#     return jsonify(list(users))

# @app.route("/users", methods=["POST"])
# def create_user():
#     data = request.get_json()
#     Collection.insert_one(data)
#     return jsonify({"message": "User created successfully"})

# @app.route("/users/<user_id>", methods=["PUT"])
# def update_user(user_id):
#     data = request.get_json()
#     Collection.update_one({"_id": user_id}, {"$set": data})
#     return jsonify({"message": "User updated successfully"})

# if __name__ == "__main__":
#     app.run(debug=True)