from typing import Union

from fastapi import FastAPI # type: ignore

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World 12345"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = '5'):
    return {"item_id": item_id, "q": q}