from pydantic import BaseModel
from datetime import datetime

class TemplateBase(BaseModel):
    template_name: str
    template_uid: str
    content: str

class TemplateCreate(TemplateBase):
    pass

class Template(TemplateBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
