app.component('regis-form-component', {

  template:
    /*html*/
    `
    <div class="btn-div">
      <button class="btn" v-show="submitted" @click="setFalse">Back</button>
    </div>

    <div class="form-container">

      <h1>{{ firstTitle }}&#8482;</h1>

      <!-- <p>Welcome, {{ itemUsername }} </p> -->


      <form v-show="!submitted" v-on:submit.prevent="handleSubmit ">

        <div class="form-row">
          <div class="form-group">
            <label class="label-username" for="username" >Username:</label><br>
            <input type="text" id="username" name="username" v-model="itemUsername">
          </div>


          <div class="form-group">
            <label class="label-email" for="email">Email:</label><br>
            <input type="email" id="email" name="email" v-model="itemEmail">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="label-password" for="password">Password:</label><br>
            <input type="password" id="password" name="password" v-model="itemPswd">
          </div>
        

          <div class="form-group">
            <label class="label-age" for="age">Age:</label><br>
            <input type="text" id="age" name="age" v-model="itemAge">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="label-role" for="role">Role:</label><br>
            <input type="text" id="role" name="role" v-model="itemRole">
          </div>

          <div class="form-group">
            <label class="label-firsname" for="firstname">First Name:</label><br>
            <input type="text" id="firstname" name="firstname" v-model="itemFirstName">
          </div>
        </div>

        <!-- <div class="form-row">
          <div class="form-group">
            <label class="label-lastname" for="lastname">Last Name:</label><br>
            <input type="text" id="lastname" name="lastname">
          </div> 

        </div> -->

        <div class="form-row">
          <div class="form-group">
            <button type="submit" class="btn">Submit</button>
          </div>
        </div>
      </form>

      <div class="form-row">
        <ul class="details" v-show="submitted">
          <li><strong>Name:</strong> {{ itemUsername }}</li>
          <li><strong>Email:</strong> {{ itemEmail }}</li>
          <li><strong>Password:</strong> {{ itemPswd }}</li>
          <li><strong>Role:</strong> {{ itemRole }}</li>
          <li><strong>First Name:</strong> {{ itemFirstName }}</li>
        </ul>
      </div>
    </div>`,

    data(){
      return {
        hello: "Sathesh",
        itemUsername : '',
        firstTitle: "Sign Up to BookWyrm!",
        submitted: false,
        item : {
          name : '',
          email: '',
          pswd: '',
          age: '',
          role: '',
          firstname: '',
        }
      }
    },

    methods: {
      handleSubmit() {

        item = {
          name: this.itemUsername,
          email: this.itemEmail,
          pswd: this.itemPswd,
          age: this.itemAge,
          role: this.itemRole,
          firstname: this.itemFirstName,
        }
        console.log(item)
        this.submitted = true
        this.firstTitle = `Welcome, ${item.name}`
      },
  
      setFalse(){
        location.reload()  
      }
    }
  


})