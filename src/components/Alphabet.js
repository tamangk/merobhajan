import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Geet } from '../songs/Geet';
// import { Link } from "react-router-dom"

const Alphabet = () => {
    const cardInfo = [
      { title: "अ", id: "0" },  { title: "आ", id: "1" }, { title: "इ", id: "2"  },  { title: "ई", id: "3"  },
      { title: "उ", id: "4"  },  { title: "ऊ", id: "5"  },  { title: "ए", id: "6"  },  { title: "ऐ", id: "7"  },
      { title: "ओ", id: "8"  },  { title: "औ", id: "9"  }, { title: "अं", id: "10"  },  { title: "अः", id: "11"  },
      { title: "ऋ", id: "12"  },  { title: "ॠ", id: "13" }, { title: "क", id: "14"  }, { title: "ख", id: "15"  },  
      { title: "ग", id: "16"  }, { title: "घ", id: "17"  },  { title: "ङ", id: "18"  }, { title: "च", id: "19"  },  
      { title: "छ", id: "20"  }, { title: "ज", id: "21"  },  { title: "झ", id: "22"  }, { title: "ञ", id: "23"  },  
      { title: "ट", id: "24"  }, { title: "ठ", id: "25"  },  { title: "ड", id: "26"  }, { title: "ढ", id: "27"  },  
      { title: "ण", id: "28"  }, { title: "त", id: "29"  },  { title: "थ", id: "30"  }, { title: "द", id: "31"  },  
      { title: "ध", id: "32"  }, { title: "न", id: "33"  },  { title: "प", id: "34"  }, { title: "फ", id: "35"  },  
      { title: "ब", id: "36"  }, { title: "भ", id: "37"  },  { title: "म", id: "38"  }, { title: "य", id: "39"  },  
      { title: "र", id: "40"  }, { title: "ल", id: "41"  },  { title: "व", id: "42"  }, { title: "श", id: "43"  },  
      { title: "ष", id: "44"  }, { title: "स", id: "45"  },  { title: "ह", id: "46"  }, { title: "क्ष", id: "47"  },  
      { title: "त्र", id: "48"  }, { title: "ज्ञ", id: "49"  }
    ];

    const songs = [
      { 
        letter: [
          { title: "A", paragraph: "About"},
          { title: "B", paragraph: "AboutB"}
        ]
      }
    ];

    const renderCard = (card, index) => {
      return (
        <Card key={index} className="box">
          <Card.Body >
            <Card.Title>{card.title}</Card.Title>
          </Card.Body>
        </Card>
      );
    };

    const renderSong = (song, index) => {
      return (
        // <div>{song.title}</div>
        <ListGroup key={index}>
          <ListGroupItem>{song[index].paragraph}</ListGroupItem>
        </ListGroup>
      )
    }
    // onClick={() => console.log(songs.map(renderSong))}
    
    return(
      <div>
        <div className="grid" >
          {cardInfo.map(renderCard)}
        </div>
        {/* <div>
          {songs.map(renderSong)}
        </div> */}
      </div>
    )
    
    
}

export default Alphabet;

// onClick={() => console.log(cardInfo[index].title, index)}>


// letter0 ,
      // [
        // {
        //   title: "अगप्य प्रेम मैले चाखीसके (हजारौ लाखौ धन्यवाद)",
        //   paragraph: "अगप्य प्रेम मैले चाखीसके \nअंगालोमा डुबीसके\nहो ओ\nअगप्य प्रेम मैले चाखीसके\nअंगालोमा डुबीसके\nत्यो प्रेम चट्टानको मह भन्दा मिठो मिठो मिठो\nत्यो अंगालो आमाको काख भन्दा न्यानो न्यानो-न्यानो \nएस्तौ प्रेमको लागि म भन्छु\nहजारौ लाखौ धन्यवाद (३)\nहल्लेलूयाह हल्लेलूयाह \nहात उचाल्छु उच्च अत्ति उच्च\nशंसार चडाउछु उच्च अत्ति उच्च\nउचाल्छु तपाईलाई म भन्छु\nहजारौ लाखौ धन्यवाद (४)"
        // },
        // {
        //   title: "अघि बढ़ ख्रीष्टीय जवान हो समयलाई नपर्ख",
        //   paragraph: "को. अघि बढ़, ख्रीष्टीय जवान हो\nसमयलाई नपर्ख भाइ हो, (हाम्रा दुलहा आउँदैछन्‌) (२)\n१.  अन्तिम चिह्न देखिँदैछ, भविष्यवाणी पूरा हुँदैछ (२)\nसांसारिक जीवनलाई त्यागी आऊ प्रभुमा नयाँ भई (२)\n२.  जीवन प्रभुमा अर्पण गरी सम्पूर्ण वचन पालना गरी (२)\nप्रभुको यो क्रूस उठाई अघि बढ़ उनमा भई (२)\n३.  जयवन्त जीवन बिताउँदै जाऊ प्रभुको काममा व्यस्त भई (२)\nउनमा सदा आशा राख्दै बढ़ अझ थकित नभई (२) "
        // }
      // ],
      // letter1 
      // [
        // {
        //   title: "आ मसीहा मन में",
        //   paragraph: "को. आ मसीहा मन में, (२) प्यार तेरा मिले, दिन मेरा खिल \nइस दुःखी जीवन में... आ मसीहा... ।\n१.  इस संसार के बातों मैं, चैन नहीं पाया मैने\nपाया है दु:ख दर्द यहाँ, और खोई शान्ति मैने (२)\nआज पता चला, तु अगर मिला, प्यार के जीवन में ।\n२.  आज नहीं तो कल जरूर, जग ये छोड़ के जाना है\nफिर क्यों इस दुनियाँ में मै, अपने दिल को लगा लुँगा (२)\nदिलके द्वार पर, क्यों खड़ा है आजा मन में ।"
      
        // }
      // ]