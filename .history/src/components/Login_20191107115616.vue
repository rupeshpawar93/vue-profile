<template>
    <div>
        <form @submit.prevent="login">
            <div class="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>
            <p v-if="err" class="error">{{err}}</p>
            <div class="container">
                <label for="email"><b>Username</b></label>
                <input type="email" placeholder="Enter Username" name="email" v-model="field.email" required>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" v-model="field.password" >

                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>

    </div>
</template>
<style  scoped>
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password],input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

.error {
    color: red;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

</style>
<script>
export default {
    name:'Login',
    data() {
        return {
            field:{},
            err:''
        }
    },
    methods: {
        login() {
            if(this.field.password=='') {
              this.err="Password is required"
            } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.field.email)) {
              this.err="Email is not Valid"
            } else {
              this.err=''
              this.$store.dispatch('addLogin',this.field).then(result=>{
                console.log(result)
              })
            }

        }
    }
}
</script>