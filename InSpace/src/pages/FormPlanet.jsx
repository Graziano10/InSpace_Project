// import bg_img from '../assets/formBg.png'

const FormPlanet = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-form-bg bg-cover bg-center">
        <h1 className="text-white w-3/4 text-center text-5xl mb-10" >The space is waiting for you</h1>
        <div className="w-2/4 h-4/6 border border-zinc-500 bg-zinc-500/50 rounded-2xl">


        <label htmlFor="fullname">firstname</label>
        <input type="text" id='name' placeholder=" name"/>

        <label htmlFor="lastname">lastname</label>
        <input type="text" id='lastname' placeholder=" lastname"/>

        <label htmlFor="age">age</label>
        <input type="number" id='age' placeholder=" age"/>

        <label htmlFor="gender">gender</label>
        <select name="" id="gender">
            <option value="" selected disabled hidden>Choose here</option>
            <option value="male">male</option>
            <option value="male">female</option>
        </select>

        <label htmlFor="email">email address</label>
        <input type="text" placeholder=" email"/>

        <label htmlFor="phone_number">Phone Number</label>
        <input type="tel" placeholder=" +39"/>

        <label htmlFor="city">city</label>
        <input type="text" />

        <label htmlFor="state">state</label>
        <input type="text" />

        <label htmlFor="state">zip code</label>
        <input type="text" />

        <button className="bg-white rounded p-5  ">SUBMIT</button>
        </div>

        
    </div> 
  );
};

export default FormPlanet;
