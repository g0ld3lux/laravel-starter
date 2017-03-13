<template>
    <form id="loginForm">
        <div >
            <input type="email" class="form-control form-control-danger" placeholder="Enter email" name="email"
                  >
        </div>
        <div >
            <input type="password" class="form-control form-control-danger" placeholder="Enter Password" name="password"
                   >
        </div>
        <div class="other-actions row">
            <div class="col-sm-6">
                <div class="checkbox">
                    <label class="c-input c-checkbox">
                        <input type="checkbox" name="remember">
                        <span class="c-indicator"></span>
                        Remember Me
                    </label>
                </div>
            </div>
 
        </div>
        <button class="btn btn-theme btn-full">Login</button>
    </form>
</template>

