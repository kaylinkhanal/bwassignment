const page = () => {
  //jsx- > javascript xml format
  return (
    <div>
      <p style={{margin:'30px', backgroundColor:'pink' }}><b>LOGIN:</b></p>
      <input placeholder="enter username"/><br/>
      <input placeholder="enter password"/><br/>
      <button>Click me</button>
    </div>
  )
}

export default page

//1. using external css className=""
//2. using inline css using style=
//3. using tailwind