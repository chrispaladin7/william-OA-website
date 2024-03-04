import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <>
      <main class='d-flex align-items-center justify-content-center vh-100'>
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-md-6 mb-2">
              <LoginForm setUser={setUser} />
            </div>
            <div class="col-md-6 mb-2">
              <SignUpForm setUser={setUser} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}