import './SignIn.css'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate ()
    return (
        <div className="container" >
<form>
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="signIn my-5 p-5">
                    
                    <img src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg" alt=""/>
                    <h1 className= 'acc mb-3'>Sign In</h1>

                        <label htmlFor='email' className='mb-2'>Email Address</label>
                        <input  type='email' id='email' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2'>Password</label>
                        <input  type='password' id='password' className='form-control mb-3' />

                    <div className='d-flex justify-content-between mt-5 align-items-center'>
                        <button type="button" className="btn btn-link" onClick={()=> navigate('/signup')}>Sign Up</button>
                        <input type='button' value='Sign In' className='btn btn-primary w-50 ' />
                    </div>
                    </div>
                </div>
            </div>
</form>
        </div>
    )
}

export default SignIn;