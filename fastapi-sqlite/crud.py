from sqlalchemy.orm import Session
import models
import schemas
import base64
import uuid
from fastapi import HTTPException

def get_template(db: Session, template_id: int):
    return db.query(models.Template).filter(models.Template.id == template_id).first()

def get_templates(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Template).offset(skip).limit(limit).all()

def create_template(db: Session, template: schemas.TemplateCreate):
    # Check for duplicate template name
    db_template = db.query(models.Template).filter(models.Template.template_name == template.template_name).first()
    if db_template:
        raise HTTPException(status_code=400, detail="Template name already exists")

    # Decode the base64 content
    decoded_content = base64.b64decode(template.content).decode('utf-8')

    # Generate a unique UID
    template_uid = str(uuid.uuid4())

    db_template = models.Template(
        template_name=template.template_name,
        template_uid=template_uid,
        content=decoded_content,
    )
    db.add(db_template)
    db.commit()
    db.refresh(db_template)
    return db_template
