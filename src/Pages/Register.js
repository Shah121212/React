import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const Nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const FormHandler = async (e) => {
    e.preventDefault()
    try {
      const Fetch = await fetch('http://localhost:9000/register',{
        method:"POST",
        body:JSON.stringify({name,email,password}),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await Fetch.json()
      alert(data.Message)
      if(Fetch.ok){
        toast.success(data.Message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <div style={{ marginLeft: "300px", marginTop: "100px" }} className="container bootstrap snippets bootdey">
        <div className="jumbotron text-center" style={{ minHeight: 400, height: 'auto' }}>
          <div className="col-md-10 col-md-offset-2">
            <form onSubmit={FormHandler} className="form-horizontal" role="form">
              <div className="form-group text-center">
                <div className="col-sm-10 reg-icon">
                  <span className="fa fa-user fa-3x">Sign up</span>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="name" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                </div>
              </div>
              <div className="form-group mt-5 ">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-info">
                    <span className="glyphicon glyphicon-share-alt" />
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
