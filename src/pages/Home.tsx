import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import {MDBCol} from "mdb-react-ui-kit";
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdbreact/dist/css/mdb.css'

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div className='d-flex align-items-center justify-content-center mt-5 mx-auto container my-4'>
            <MDBCol md='6' className='text-center mt-5'>
                <h2>You are connected!</h2>
                <button type="button" className="btn btn-primary mt-3" onClick={() => signOut(auth)}>Sign out</button>
            </MDBCol>
        </div>
    );
};
export default HomePage;