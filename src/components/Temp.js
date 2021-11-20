import React, { Component } from "react";
import { Card } from 'react-bootstrap';

class App extends Component {
    state = { alphabet: '' };

    // onSearchInputChange = (e) => {
    //     this.setState({ searchInput: e.target.value })
    // }

    onAlphabetClick = (e) => {
        this.setState({ alphabet: e.target.value })
    }

    cardInfo = [
        { title: "A", id: "0" },  { title: "B", id: "1" }, { title: "C", id: "2"  },  { title: "D", id: "3"  },
        // { title: "अ", id: "0" },  { title: "आ", id: "1" }, { title: "इ", id: "2"  },  { title: "ई", id: "3"  },
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

    prepareAlphabets = () => {
        let result = [];
        for (let i = 0; i < 50; i++) {
            result.push(
                <Card className="box">
                    <Card.Body >
                        <Card.Title onClick={this.onAlphabetClick} onClick={() => console.log(this.cardInfo[i])}>
                            {this.cardInfo[i].title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        }
        return <div className="grid">{result}</div>;
    }
    
    filterItems = (itemList) => {
        let result = [];
        const { alphabet } = this.state;
        if (itemList && alphabet) {
            result = itemList.filter((element) => (element.paragraph.charAt(0).toLowerCase() === alphabet.toLowerCase()));
        } else {
            result = itemList || [];
        }
        result = result.map((item) => (<li>{item.title}</li>))
        return result;
    }

    render() {
        const itemList = [
            { title: "A", paragraph: "AboutA" }, { title: "B", paragraph: "ghjfgj" },
            { title: "C", paragraph: "ADFSF" }, { title: "D", paragraph: "sdfgdg" }
        ]
        const filteredList = this.filterItems(itemList);
        return (
            <div>
                {this.prepareAlphabets()}
                <ul>
                    {filteredList}
                </ul>
            </div>
        );
    }
}

export default App;