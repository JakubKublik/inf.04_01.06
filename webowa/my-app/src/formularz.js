import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
 const [url, setUrl] = useState('');
 const [login, setLogin] = useState('');
 const [generate, setGenerate] = useState(true); 
 const [password, setPassword] = useState('');
 const [submittedData, setSubmittedData] = useState(null);

 

 const handleSubmit = (e) => {
   e.preventDefault();
   
   const finalPassword = generate ? "wygenerowane automatycznie" : password;

   setSubmittedData({
     url,
     login,
     generate,
     password: finalPassword
   });
 };

 return (
   <div className="container mt-4" style={{ maxWidth: '500px' }}>
     
     <h1>Menedżer haseł - wykonał 00000000000</h1>

     <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 mt-3 text-start">
       
         <label className="col-4 col-form-label text-start">Adres WWW:</label>
         <div className="col-8">
           <input 
             type="text" 
             className="form-control" 
             placeholder="Adres strony WWW"
             value={url}
             onChange={(e) => setUrl(e.target.value)}
           />
       </div>

         <label className="col-4 col-form-label text-start">Login:</label>
         <div className="col-8">
           <input 
             type="text" 
             className="form-control" 
             placeholder="Twój login"
             value={login}
             onChange={(e) => setLogin(e.target.value)}
           />
       </div>

           <div className="form-check">
             <input 
               type="checkbox" 
               className="form-check-input" 
               id="generateCheckbox"
               checked={generate}
               onChange={(e) => setGenerate(e.target.checked)}
             />
             <label className="form-check-label text-start" htmlFor="generateCheckbox">
               Wygeneruj hasło
             </label>
       </div>

         <label className="col-4 col-form-label text-start">Hasło:</label>
         <div className="col-8">
           <input 
             type="password" 
             className="form-control" 
             placeholder="Hasło"
             value={generate ? '' : password}
             onChange={(e) => setPassword(e.target.value)}
           />
       </div>

       <div className="row">
         <div className="col-8 offset-4 ">
           <button type="submit" className="btn btn-primary">
             Zapisz
           </button>
         </div>
       </div>
     </form>

     {submittedData && (
       <div className="mt-4 p-3 bg-light border">
         <p className="text-primary fs-5 mb-1">
           Adres: {submittedData.url}
         </p>
         <p className="mb-1">
           Login: {submittedData.login}
         </p>
         <p className="mb-0">
           {submittedData.generate 
             ? `Hasło: ${submittedData.password}`
             : `Hasło: ${submittedData.password}`}
         </p>
       </div>
     )}

   </div>
 );
}