import { useSelector } from 'react-redux';
import './_top-nav.scss';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './_login.scss';
import './_signup.scss';
import { useState } from 'react';


Modal.setAppElement("#root");



const TopNav =()=>{

  const cartItemCount = useSelector(state=>state.cr.totalItems);

  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

    return(
      <div>
        <div className='header bg-dark'>
        <div className='row top-nav-row'>
          <div className='brand my-1'>
            <h1>eStore</h1>
          </div>

          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0'>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>

            </div>
            <input className='form-control' placeholder='Search...' />
            <button> <i className='fa fa-search'/> </button>
          </div>

          <div className='login-container p-0'>
            <i className='fa fa-user-circle user-icon'/>
              <div>
                <button onClick={()=>{setVisible(true); setIsLogin(true); }}> Log In</button>
                <Modal isOpen={visible} onRequestClose={()=>setVisible(false)} style={{
                  content: {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    width: '40%',
                    height: '75%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                  },
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  },
                  }}>
                    {isLogin ? <h5>

                              <div className='login-content'>
                                <h2>Welcome Back</h2>
                                <p>Login to your account</p>

                                <form className='login-form'>
                                  <input type='text' placeholder='Username or Email' />
                                  <input type='password' placeholder='Password' />
                                  <button type='submit' className='login-btn'>Log In</button>
                                </form>

                                <div className='remember-forgot'>
                                  <label>
                                    <input type='checkbox'/>
                                      Remember Me
                                  </label>
                                  <a href='psw'>Forgot Password</a>
                                </div>

                                <div className='divider'><p>or</p></div>

                                <button className='google-login-btn'>
                                  <img src='../../assets/images/google-icon.jpg' alt='Google logo' width={"135"} height={"30"} style={{float:"left"}}></img>
                                  Continue with Google
                                </button>

                                <div className='para'>
                                    <p> Don't have an account? </p>
                                    <button type='button' onClick={()=>{setVisible(true); setIsLogin(false)}}>Sign Up</button>
                                </div>

                              </div>

                    </h5>
                    :
                    <h5>
                              <div className='addUser'>
                                <h2>Sign Up</h2>
                                <p>Signup to your account</p>

                                <form className='addUserForm'> 
                                  <div className='inputGroup'>
                                    <input type='text' id= "username" autoComplete='off' placeholder='Username' />
                                    <input type='email' id= "email" autoComplete='off' placeholder='Email' />
                                    <input type='password' id='password' autoComplete='off' placeholder='Password' />
                                    <button type='submit' className='btn btn-success'>Sign Up</button>
                                  </div>
                                </form>

                                <div className='divider'><p>or</p></div>

                                <button className='google-login-btn'>
                                  <img src='../../assets/images/google-icon.jpg' alt='Google logo' width={"135"} height={"30"} style={{float:"left"}}></img>
                                  Continue with Google
                                </button>

                                <div className='login'>
                                    <p> Already have an account? </p>
                                    <button type='button' onClick={()=>{setVisible(true); setIsLogin(true)}}>Login</button>
                                </div>

                              </div>

                    </h5>
                    
                    }
                </Modal>
              </div>&nbsp;
              <button type="button" onClick={()=>{setVisible(true); setIsLogin(false); }}> Sign Up </button>
            {/* <h5><a href="#"> Login </a></h5> /  <h5><a href="#"> Sign Up </a></h5> */}
          </div>
          <div className='cart-wishlist'>
            <ul className='p-0'>
              <li className='list-icon'> <i className='fa fa-heart'/></li>
              <Link to="/cart">
                <li className='list-icon'>
                  <i className='fa fa-shopping-cart'/>
                    {
                      cartItemCount!==0?
                      <div id='cart-item-count'>
                        <p>{cartItemCount}</p>
                      </div>
                      :<></>
                    }
                  </li>
                </Link>
            </ul>
          </div>
        </div>

      </div>
      </div>
    )
}

export default TopNav;
