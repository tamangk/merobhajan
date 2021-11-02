import React from 'react';
import { Card } from 'react-bootstrap';

const Alphabet = () => {
    const cardInfo = [
        { title: "अ" },  { title: "आ" }, { title: "इ" },  { title: "ई" },
        { title: "उ" },  { title: "ऊ" },  { title: "ए" },  { title: "ऐ" },
        { title: "ओ" },  { title: "औ" }, { title: "अं" },  { title: "अः" },
        { title: "ऋ" },  { title: "ॠ" }, { title: "|" },  { title: "क" },
        { title: "ख" },  { title: "ग" }, { title: "घ" },  { title: "ङ" },
        { title: "च" },  { title: "छ" }, { title: "ज" },  { title: "झ" },
        { title: "ञ" },  { title: "ट" }, { title: "ठ" },  { title: "ड" },
        { title: "ढ" },  { title: "ण" }, { title: "त" },  { title: "थ" },
        { title: "द" },  { title: "ध" }, { title: "न" },  { title: "प" },
        { title: "फ" },  { title: "ब" }, { title: "भ" },  { title: "म" },
        { title: "य" },  { title: "र" }, { title: "ल" },  { title: "व" },
        { title: "श" },  { title: "ष" }, { title: "स" },  { title: "ह" },
        { title: "क्ष" },  { title: "त्र" }, { title: "ज्ञ" }
      ];
    
      const renderCard = (card, index) => {
        return (
          <Card style={{ width: "2rem" }} key={index} className="box">
            <Card.Body>
              <a href="" ><Card.Title>{card.title}</Card.Title></a>
            </Card.Body>
          </Card>
        );
      };
    
      return <div className="grid">{cardInfo.map(renderCard)}</div>;
    
}

export default Alphabet;