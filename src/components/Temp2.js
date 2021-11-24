import React, { Component } from "react";
// import { Card } from 'react-bootstrap';
// import { Geet } from '../songs/Geet';
// import Geet from '../songs/Geet';

class App extends Component {
    state = { searchInput: '', alphabet: '' };
    onSearchInputChange = (e) => {
      this.setState({searchInput: e.target.value})
    }

    onAlphabetClick = (e) => {
      this.setState({alphabet: e.target.value})
    }

    cardInfo = [
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

    prepareAlphabets = () => {
      let result = [];
      for(let i=0; i<50; i++) {
        result.push(
            <button type="button" key={i} onClick={this.onAlphabetClick} value={this.cardInfo[i].title} >{this.cardInfo[i].title}</button>
        )
      }
      return <div className="grid">{result}</div>;;
    }
    
    filterItems = (itemList) => {
        let result = [];
        const { searchInput, alphabet } = this.state;
        if (itemList && (searchInput || alphabet)) {
            result = itemList.filter((element) => (element.letter.charAt(0).toLowerCase() === alphabet.toLowerCase()));
        } else {
            result = itemList || [];
        }
        result = result.map((item) => (
            <ul onClick={console.log()}>{item.title}</ul>
            
            )
        )
        return result;
    }

    displayContent = (item, id) => {
        let result = [];
        result = result.map((item) => (<ul>{item[id].paragraph}</ul>))
        return console.log("checking", result);
    }

    render() {
        const itemList = [
            { 
                letter: "अ", 
                title: "अगप्य प्रेम मैले चाखीसके (हजारौ लाखौ धन्यवाद)", 
                paragraph: "अगप्य प्रेम मैले चाखीसके \nअंगालोमा डुबीसके\nहो ओ\nअगप्य प्रेम मैले चाखीसके\nअंगालोमा डुबीसके\nत्यो प्रेम चट्टानको मह भन्दा मिठो मिठो मिठो\nत्यो अंगालो आमाको काख भन्दा न्यानो न्यानो-न्यानो \nएस्तौ प्रेमको लागि म भन्छु\nहजारौ लाखौ धन्यवाद (३)\nहल्लेलूयाह हल्लेलूयाह \nहात उचाल्छु उच्च अत्ति उच्च\nशंसार चडाउछु उच्च अत्ति उच्च\nउचाल्छु तपाईलाई म भन्छु\nहजारौ लाखौ धन्यवाद (४)" 
            }, 
            { 
                letter: "अ", 
                title: "अघि बढ़ ख्रीष्टीय जवान हो समयलाई नपर्ख", 
                paragraph: "को. अघि बढ़, ख्रीष्टीय जवान हो\nसमयलाई नपर्ख भाइ हो, (हाम्रा दुलहा आउँदैछन्‌) (२)\n१.  अन्तिम चिह्न देखिँदैछ, भविष्यवाणी पूरा हुँदैछ (२)\nसांसारिक जीवनलाई त्यागी आऊ प्रभुमा नयाँ भई (२)\n२.  जीवन प्रभुमा अर्पण गरी सम्पूर्ण वचन पालना गरी (२)\nप्रभुको यो क्रूस उठाई अघि बढ़ उनमा भई (२)\n३.  जयवन्त जीवन बिताउँदै जाऊ प्रभुको काममा व्यस्त भई (२)\nउनमा सदा आशा राख्दै बढ़ अझ थकित नभई (२)" 
            },
            { 
                letter: "आ", 
                title: "आ मसीहा मन में", 
                paragraph: "को. आ मसीहा मन में, (२) प्यार तेरा मिले, दिन मेरा खिल \nइस दुःखी जीवन में... आ मसीहा... ।\n१.  इस संसार के बातों मैं, चैन नहीं पाया मैने\nपाया है दु:ख दर्द यहाँ, और खोई शान्ति मैने (२)\nआज पता चला, तु अगर मिला, प्यार के जीवन में ।\n२.  आज नहीं तो कल जरूर, जग ये छोड़ के जाना है\nफिर क्यों इस दुनियाँ में मै, अपने दिल को लगा लुँगा (२)\nदिलके द्वार पर, क्यों खड़ा है आजा मन में ।" 
            },
            {
                letter: "इ", 
                title: "इस मण्डली में भाइयों हम सब एक है हम एक हैं", 
                paragraph: "को. इस मण्डली में भाइयों, हम सब एक है हम एक हैं (२)\n १.  न कोई ऊँचा न कोई जीचा न गोरा न काला (२)\n हम सब... ।\n२.  उसकी नजर में दोनों बराबर महल हो छप्पड़ वाला (२)\n हम सब... ।\n ३.  उसके पास जो आना चाहे पीले प्रेम का प्याला (२)\n हम सब... ।\n ४.  न कोई मलयालि न कोई बंगाली, न रे पक्का नेपाली (२)\n हम सब... ।\n"
            }
        ]  

        // const itemLists = Geet.itemList
        const filteredList = this.filterItems(itemList);
        const { alphabet } = this.state;

        return (
            <div className="display">
                {this.prepareAlphabets()}
                <div className="song-list">
                    <h2 style={{textAlign: 'center'}}>{alphabet}</h2>
                    {/* <a href="" onClick={() => this.displayContent(filteredList, filteredList.itemList)}>{filteredList}</a> */}
                    {/* <ul>console.log({this.filteredList.item})</ul> */}
                    {filteredList}
                </div>
            </div>
        );
    }
}

  export default App;          
  
/* <div>
    {
        Users.map(user => <h1 key={user.letter}> {user.title} </h1>)
    }
</div> */