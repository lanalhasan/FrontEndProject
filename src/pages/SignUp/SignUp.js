import './SignUp.css'
const SignUp = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="signup my-5 p-5">
                    
                    <img src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg" alt=""/>
                    <h1>Create Account</h1>

                        <label htmlFor='name' className='mb-2'>Name</label>
                        <input type='text' id='name' className='form-control mb-3' />

                        <label htmlFor='email' className='mb-2'>Email Address</label>
                        <input  type='email' id='email' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2'>Password</label>
                        <input  type='password' id='password' className='form-control mb-3' />

                        <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                        <input  type='password' id='password_confirmation' className='form-control mb-3' />

                        <input type='button' value='Register' className='btn btn-dark' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;