import React, { useEffect, useState } from 'react';

export default function StockPage({ darkMode }) {
  const [quote, setQuote] = useState(null);
  const API_KEY = 'demo';         // kendi anahtarınız
  const SYMBOL  = 'GARAN.IS';     // istediğiniz BIST kodu

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setQuote(data['Global Quote']))
      .catch(console.error);
  }, []);

  const bg = darkMode ? '#222' : '#fafafa';
  const txt = darkMode ? 'text-light' : 'text-dark';

  return (
    <div className="container-fluid p-4 min-vh-100" style={{ background: bg }}>
      <h2 className={txt}>Borsa Verileri: {SYMBOL}</h2>
      {!quote ? (
        <p className={txt}>Yükleniyor…</p>
      ) : (
        <ul className={txt}>
          <li><strong>Fiyat:</strong> {quote['05. price']} TRY</li>
          <li><strong>Değişim (%):</strong> {quote['10. change percent']}</li>
          <li><strong>Gün Açılış:</strong> {quote['02. open']}</li>
          <li><strong>En Yüksek:</strong> {quote['03. high']}</li>
          <li><strong>En Düşük:</strong> {quote['04. low']}</li>
          <li><strong>Son İşlem:</strong> {quote['07. latest trading day']}</li>
        </ul>
      )}
    </div>
  );
}
