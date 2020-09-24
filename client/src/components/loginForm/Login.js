import React from 'react';
import '../loginForm/loginstyle.css';
export const Login = () => {
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first"></div>

          <form>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              class="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};
