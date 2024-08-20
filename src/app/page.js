"use client";

import { useEffect, useState } from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
// import Header from './Header';
import TextField from '@mui/material/TextField';


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

  const handleProductChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedProducts(
      typeof value === "string" ? value.split(",") : value
    );
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
      quantities: quantities
    };


    const uniqueKey = `${selectedOption}`;
    localStorage.setItem(uniqueKey, JSON.stringify(orderData));

    // Send DATA to NextJs APİ 

    const response = await fetch('/api/submit-data', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(orderData)
    })

    const result = await response.json()

    console.log(result)

    alert("Sifariş verildi...Təşəkkürlər :) ");
    setSelectedProducts([]);
    setQuantities({});
  };


  useEffect(() => {
    setProducts(optionsData[selectedOption]);
  }, [selectedOption]);

  return (
    <div className="App">
      <div>
        <h1 style={{ fontFamily: 'monospace' }}>Sifarişlər</h1>

        <form style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: '10px 0' }}>

          <select value={selectedOption} onChange={handleOptionChange} style={{ width: "80%", fontSize: "20px", padding: '12px', fontFamily: 'monospace' }}>
            <option>Mayalı Mallar</option>
            <option>Quru Mallar</option>
            <option>Tort</option>
            <option>Mətbəx</option>
            <option>Kassa/Barista</option>
          </select>

          <FormControl sx={{ my: 2, width: 300, display: "flex" }}>
            <InputLabel>Məhsullar</InputLabel>
            <Select
              multiple
              value={selectedProducts}
              onChange={handleProductChange}
              input={<OutlinedInput label="Products" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {products.map((name, index) => (
                <MenuItem key={index} value={name}>
                  <Checkbox checked={selectedProducts.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedProducts.map((product) => (
            <div key={product} style={{ marginBottom: '10px', display: "flex", flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>

              <h3>{product}</h3>

              <TextField
                sx={{ width: '60px', }}
                placeholder='...'
                type="number"
                value={quantities[product] || ''}
                onChange={(e) => handleQuantityChange(product, e)}
                required
                inputProps={{ min: 1, max: 100 }}
              />
            </div>
          ))}

          <button type="submit" style={{ width: '150px', height: "40px", margin: 'auto', fontSize: "20px" }} onClick={handleSubmit}>
            Sifariş et
          </button>

        </form>

        <h3 style={{ color: "red", margin: "auto" }}>Sifarişlər saat 11:00-a qədər qəbul edilir!</h3>
      </div>
    </div>
  );
}

export default App;
