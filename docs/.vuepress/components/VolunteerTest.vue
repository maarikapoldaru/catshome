<template>
  <section class="flex-column">
    <h2>{{ testHeading[this.$lang] }}</h2>

    <section v-if="testRunning">
      <form @submit="handleSubmit">
        <div class="error-msg" v-if="displayErrorMsg">
          {{ selectAllErrorMsg[this.$lang] }}
        </div>
        <p>1. {{ questions[0][this.$lang] }}</p>
        <div>
          <label>
            <input type="radio" name="catSelect" value="1" v-model="answers[0]" />
            <img src="/catshome/assets/img/cat_picture.svg" />
          </label>

          <label>
            <input type="radio" name="catSelect" value="0" v-model="answers[0]" />
            <img src="/catshome/assets/img/dog_picture.svg" />
          </label>
        </div>

        <p>2. {{ questions[1][this.$lang] }}</p>
        <div>
          <label>
            <input type="radio" name="likeSelect" value="1" v-model="answers[1]" />
            <img src="/catshome/assets/img/wool_picture.svg" />
          </label>

          <label>
            <input type="radio" name="likeSelect" value="0" v-model="answers[1]" />
            <img src="/catshome/assets/img/dog_picture.svg" />
          </label>
        </div>

        <input class="btn" type="submit" :value="submitButtonText[this.$lang]" />
      </form>
    </section>

    <section class="flex-column" v-if="!testRunning && testResult >= 0">
      <p>{{ resultMessages[testResult][this.$lang] }}</p>

      <button class="btn" @click="beginTest">
        {{ startTestButton[this.$lang] }}
      </button>
    </section>

    <section class="flex-column" v-if="!testRunning && testResult === -1">
      <p>{{ testIntroduction[this.$lang] }}</p>

      <button class="btn" @click="beginTest">
        {{ startTestButton[this.$lang] }}
      </button>
    </section>
  </section>
</template>

<script>
export default {
  name: "volunteerTest",
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (!this.answers[0] || !this.answers[1]) {
        this.displayErrorMsg = true;
        return;
      }
      this.testResult = parseInt(this.answers[0]) + parseInt(this.answers[1]);
      this.testRunning = false;
      this.displayErrorMsg = false;
    },
    beginTest() {
      this.testRunning = true;
      this.displayErrorMsg = false;
      this.resetAnswers();
    },
    resetAnswers() {
      this.answers = this.answers.map((answer) => null);
    },
  },
  data() {
    return {
      testRunning: false,
      testResult: -1,
      displayErrorMsg: false,
      questions: [
        {
          "et-EE": "Palun valige kass.",
          "en-US": "Please select cat.",
        },
        {
          "et-EE": "Palun valige kassidele meeldiv ese.",
          "en-US": "Please select item that cats like.",
        },
      ],
      answers: ["", ""],
      resultMessages: [
        {
          "et-EE": "Kahjuks ei sobi te vabatahtlikuks.",
          "en-US": "We're sorry to say that you're not qualified to be an volunteer.",
        },
        {
          "et-EE": "Sobite vabatahtlikuks.",
          "en-US": "You're qualified to be an volunteer.",
        },
        {
          "et-EE": "Oleksite suurepärane vabatahtlik, palun võtke meiega ühendust!",
          "en-US": "You would be an excellent volunteer, please contact us!",
        },
      ],
      testHeading: {
        "et-EE": "Vabatahtliku test",
        "en-US": "Volunteer test",
      },
      testIntroduction: {
        "et-EE": "Tänan, et teete testi.",
        "en-US": "Thank you for taking the test.",
      },
      submitButtonText: {
        "et-EE": "Testi mind",
        "en-US": "Test me",
      },
      startTestButton: {
        "et-EE": "Alusta testi",
        "en-US": "Begin test",
      },
      selectAllErrorMsg: {
        "et-EE": "Palun vastake kõigile küsimustele!",
        "en-US": "Please answer all questions!",
      },
    };
  },
};
</script>

<style scoped>
.flex-column {
  flex-direction: column;
}
h2 {
  display: flex;
}
section {
  display: flex;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
}
div {
  display: flex;
}
.btn {
  color: #3eaf7c;
  border: 1px solid #3eaf7c;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  padding: 4px 8px;
  margin-top: 30px;
  max-width: 100px;
}
.btn:hover {
  color: white;
  background-color: #3eaf7c;
}
.error-msg {
  color: red;
  border: 2px solid red;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 4px 8px;
}
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
[type="radio"] + img {
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin: 0px 20px;
}
[type="radio"]:checked + img {
  outline: 2px solid #3eaf7c;
  border-radius: 5px;
}
</style>
