import React, {ChangeEvent, useState} from 'react';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
// @ts-ignore
import './Login.css'
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdbreact/dist/css/mdb.css'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);
    const [ email, setEmail] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithFacebook = async () => {
        setAuthing(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithGithub = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GithubAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithEmail = async () => {
        setAuthing(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user.email);
                navigate("/home");
            })
            .catch(error => {
                setAuthing(false);
                alert(error.message);
            })
    }

    return (
        <MDBRow className='d-flex justify-content-center mt-5 mx-auto'  id="mainContainer">
            <MDBCol md='6' className='mx-5 p-5'  id="container">
                <h4>Sign in to your account</h4>
                <form className="mt-4" >
                    <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>

                    <MDBBtn className='mt-2 mb-4' block onClick={() => signInWithEmail()} disabled={authing}>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>or sign in with:</p>

                        <MDBBtn className='mx-1' onClick={() => signInWithFacebook()} disabled={authing}>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn className='mx-1' onClick={() => signInWithGoogle()} disabled={authing}>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn className='mx-1' onClick={() => signInWithGithub()} disabled={authing}>
                            <MDBIcon fab className="" icon="github"/>
                        </MDBBtn>
                    </div>
                </form>
            </MDBCol>
        </MDBRow>
    );
};

export default LoginPage;
