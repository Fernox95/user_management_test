from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from pydantic import BaseModel
from usuarios import users

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir sólo estos orígenes
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

class User(BaseModel):
    id: int
    first_name: Annotated[str, Query(max_length=20)]
    last_name: Annotated[str, Query(max_length=20)]
    midle_name: str | None = None
    email: Annotated[str, Query(max_length=30)]
    phone_number: Annotated[str, Query(max_length=10)]
    role: Annotated[str, Query(max_length=10)]
    addres: Annotated[str, Query(max_length=50)]
    status: bool

class UserUpdate(BaseModel):
    first_name: Annotated[str, Query(max_length=20)]
    last_name: Annotated[str, Query(max_length=20)]
    midle_name: str | None = None
    email: Annotated[str, Query(max_length=30)]
    phone_number: Annotated[str, Query(max_length=10)]
    role: Annotated[str, Query(max_length=10)]
    addres: Annotated[str, Query(max_length=50)]
    status: bool

@app.get("/users/")
async def get_all_users():
    return users


@app.get("/users/{user_id}")
async def get_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user
    return f"user {user_id} not found"



@app.post("/users/")
async def post_user(user_data: User):
    users.append(user_data)
    return f"user created succesfully"


@app.put("/users/{user_id}")
async def put_user(user_id: int, user_data: UserUpdate):
    for user in users:
        if user["id"] == user_id:
            user.update(user_data.model_dump(exclude_unset=True))
            return f"user updated succesfully"
    return f"user {user_id} not found"


@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            users.remove(user)
            return "user deleted successfully"
    return f"user {user_id} not found"
