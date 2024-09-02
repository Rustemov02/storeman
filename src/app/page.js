"use client";

import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, List, ListItem, ListItemText } from '@mui/material';

import Textarea from '@mui/joy/Textarea';
import dynamic from 'next/dynamic';

const quruMal = [
  "Yumurta (ədəd)",
  "Xama (ədəd)",
  "Fındıq (kq)",
  "Kakos (kq)",
  "Alma (ədəd)",
  "Kəsmik (kq)",
  "Un(Mehriban) (kq)",
  "Un(Karmen) (kq)",
  "Əncir qurusu (kq)",
  "Damla şokolad (kq)",
  "Pesok (kq)",
  "Kalinka (ədəd)",
  "Qoz (kq)",
  "Bişmiş Moloko (kq)",
  "Sadə moloko (kq)",
  "Kraxmal (kq)",
  "Limon (ədəd)",
  "Limon-yaşıl (ədəd)",
  "Badam filesi (ədəd)",
  "Yulaf (ədəd)",
  "Kakao (kq)",
  "Badam (kq)"
];
const mayali = [
  "Kolbasa (kq)",
  "Yumurta (ədəd)",
  "Xama (ədəd)",
  "Küncüt (ədəd)",
  "File (kq)",
  "Duz (ədəd)",
  "Duru yağ (kq)",
  "Kəsmik (ədəd)",
  "Un(Mehriban) (kq)",
  "Un(Karmen) (kq)",
  "Maya (ədəd)",
  "Mayonez (kq)",
  "Pomidor (kq)",
  "Xiyar (kq)",
  "Sultan qat-qat (kq)",
  "Sosiska (kq)",
  "Kök (kq)",
  "Bibər (kq)",
  "Bud(mal əti) (kq)",
  "Ekapan (ədəd)",
  "Damla şokolad (kq)",
  "Soda (ədəd)"
];
const metbex = [
  "Qab maçalka (ədəd)",
  "Zibil paketi (ədəd)",
  "Tualet kağızı (ədəd)",
  "Qanad (kq)",
  "Toyuq file (kq)",
  "Bud (kq)",
  "Toyuq bütöv (kq)",
  "Salfetka (ədəd)",
  "Xlor (kq)",
  "Şampun (kq)",
  "Su 19Lt (ədəd)",
  "Ketçap (ədəd)",
  "Kartof (kq)",
  "Badımcan (kq)",
  "Pomidor (kq)",
  "Bibər (kq)",
  "Soğan (kq)",
  "Xiyar (kq)",
  "Limon (ədəd)",
  "Tomat (ədəd)",
  "Qreçka (kq)"
];
const kassa = [
  "Süd (ədəd)",
  "Blanc-Blue(qazlı) (ədəd)",
  "Blanc-Blue(qazsız) (ədəd)",
  "Limon (ədəd)",
  "Limon-lime (ədəd)",
  "Sirab (ədəd)",
  "Red-bull (ədəd)",
  "Sarıkız(sadə) (ədəd)",
  "Sarıkız(limon) (ədəd)",
  "Südlü paxlava (ədəd)",
  "Şəffaf qab (ədəd)",
  "Sweji takeaway qab(M) (ədəd)",
  "takeaway(S)(ədəd)",
  "Beta Tea (ədəd)",
  "Cola Zero (ədəd)",
  "Cola Classic (ədəd)",
  "Salfetka (ədəd)",
  "Pipet (ədəd)",
  "Zibil salafanı (ədəd)",
  "Kofe(İtalian) (ədəd)",
  "Rezin əlcək (ədəd)",
  "Oreo şokolad (ədəd)",
  "İsti şokolad (ədəd)",
  "Şampun (kq)",
  "Çöplü sok (ədəd)",
  "Sprey qabı (ədəd)",
  "Soda (ədəd)",
  "Dispenser salfetkası (ədəd)",
  "Kofe qabı(kardon) (ədəd)",
  "Limera plastik qab (ədəd)",
  "Tort qabı (ədəd)",
  "Sweji kağız paket (ədəd)",
  "Bone (ədəd)"
];
const tort = [
  "Yumurta (ədəd)",
  "Xama (ədəd)",
  "Qaymaq(Ambiante) (ədəd)",
  "Qaymaq(Whipak) (ədəd)",
  "Willie Cream Cheese (ədəd)",
  "Labne (ədəd)",
  "Fındıq (kq)",
  "Kakos (kq)",
  "Kakao (kq)",
  "Kəsmik (kq)",
  "Süd (ədəd)",
  "Əncir qurusu (kq)",
  "Damla şokolad (kq)",
  "Pesok (kq)",
  "Kalinka (ədəd)",
  "Duru yağ (kq)",
  "Qoz (kq)",
  "Badam (kq)",
  "Bişmiş moloko (kq)",
  "Sadə moloko (kq)",
  "Mayonez (kq)",
  "Soda (ədəd)",
  "Pomidor (kq)",
  "Xiyar (kq)",
  "Limon (kq)",
  "Limon-lime (kq)",
  "Bal (kq)"
];


function App() {
  const [selectedOption, setSelectedOption] = useState('Mayalı Mallar');
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState('')

  const [localDate, setLocalDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setLocalDate(new Date), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  const optionsData = {
    "Mayalı Mallar": mayali,
    "Quru Mallar": quruMal,
    "Mətbəx": metbex,
    "Kassa/Barista": kassa,
    "Tort": tort,
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectedProducts([]);
    setQuantities({});
  };

  const handleQuantityChange = (product, event) => {
    const { value } = event.target;

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedProducts.length === 0) {
      alert('Ən azı bir məhsul seçin !')
      return;
    }

    for (let product of selectedProducts) {
      if (!quantities[product]) {
        alert(`Zəhmət olmasa məhsulların miqdarını daxil edin !`);
        return;
      }
    }

    const orderData = {
      option: selectedOption,
      quantities: quantities,
      message: message,
      // date: localDate.toLocaleString()
    };

    // It's for save data in LocalStorage
    const uniqueKey = selectedOption;
    localStorage.setItem(uniqueKey, JSON.stringify(orderData));



    //-----------Send DATA to NextJs APİ ----------- \\

    try {
      const response = await fetch('/api/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      } else {
        console.log('alright !')
      }

    } catch (error) {
      console.log("Error " + error.message);
      console.error('Form submission error:', error);
    }


    // -------------Sending data area --------------- \\


    alert("Sifariş verildi...Təşəkkürlər :) ");
    setSelectedProducts([]);
    setQuantities({});
    setMessage('')

  };

  useEffect(() => {
    setProducts(optionsData[selectedOption]);
  }, [selectedOption, selectedProducts]);

  const optionsStyle = 'text-2xl m-2 p-2'

  const deleteItemFromList = (productToDelete) => {
    console.log(productToDelete)
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.filter(product => product !== productToDelete)
    )
  }


  // --------------------------------
  // DİALOG component //
  const [open, setOpen] = useState(false)

  const handleCheckboxChange = product => {
    setSelectedProducts(prev =>
      prev.includes(product) ? prev.filter(item => item !== product) : [...prev, product]
    )
  }

  function handleOn(e) {
    e.preventDefault()
    setOpen(true)
  }
  function handleOff(e) {
    e.preventDefault()
    setOpen(false)
  }



  return (
    <div className="App">
      <div>
        <p>Deployed !</p> <p>Deployed 2!</p>  <p>Deployed 3!</p> 
        <h2 className='text-white text-4xl font-chilanka text-center py-10 bg-littleBlack'>Məhsullar</h2>


        <form style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: '10px 0' }}>


          <select value={selectedOption} onChange={handleOptionChange} className='border-2 rounded-md w-1/4 min-w-60 p-3 text-xl font-chilanka bg-aColor text-white' >
            <option className={optionsStyle}>Mayalı Mallar</option>
            <option className={optionsStyle}>Quru Mallar</option>
            <option className={optionsStyle}>Tort</option>
            <option className={optionsStyle}>Mətbəx</option>
            <option className={optionsStyle}>Kassa/Barista</option>
          </select>


          <button className='border-2 rounded-md text-2xl p-3 w-1/4 min-w-60 my-3 align-start bg-aColor text-white font-chilanka' onClick={handleOn}>Məhsulları seçin</button>

          <Dialog open={open} fullWidth maxWidth="sm">
            <DialogTitle>Məhsulları seçin</DialogTitle>


            <DialogContent>
              <List>
                {products.map((name, index) => (
                  <ListItem key={index} onClick={() => handleCheckboxChange(name)}>
                    <Checkbox checked={selectedProducts.includes(name)} />
                    <ListItemText primary={name} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>


            <DialogActions>
              <Button onClick={handleOff} variant='outlined' color="primary">Çıxış</Button>
              <Button variant='contained' onClick={handleOff} color="primary">Təsdiq Et</Button>
            </DialogActions>
          </Dialog>

          {selectedProducts.map((product) => (
            <div key={product} className=' flex flex-row justify-evenly items-center gap-3 w-full py-2 px-1 my-2 bg-littleBlue'>

              <h3 className='w-1/2 flex flex-col justify-center font-chilanka text-2xl text-white '>{product}</h3>

              <TextField
                sx={{
                  width: '100px',
                  color: "white",
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'solid white 1px',
                      fontStyle: "red",
                    },
                    '&:hover fieldset': {
                      borderColor: 'green',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
                placeholder='Say'
                type="number"
                value={quantities[product] || ''}
                onChange={(e) => handleQuantityChange(product, e)}
                required
                inputProps={{ min: 1, max: 100 }}
              />

              <button className='w-32 text-white text-2xl' onClick={() => deleteItemFromList(product)}> <FontAwesomeIcon icon={faTrash} /></button>
            </div>
          ))}

          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            color="neutral"
            disabled={false}
            sx={{ width: '25%', minWidth: "240px", fontSize: '20px' }}
            minRows={3}
            placeholder="Əlavə qeydlər..."
            variant="soft"
          />
          <button type="submit" className='border-2 rounded-md text-2xl p-3 w-1/4 min-w-52 my-3 align-start font-chilanka font-medium bg-littleBlack text-white' onClick={handleSubmit}>
            Sifariş et
          </button>



        </form>

      </div>



    </div>
  );
}

export default App;
