<template>
  <div class="character-sheet">
    <div class="progress">
      <div class="bar" v-bind:style="{ width: progress +'%' }">
        {{progress}}%
      </div>
    </div>

    <div class="basic-info">
      <div class="name">Name: <input type="text" v-model="name"></div>
      <div class="age">Age: <input type="text" v-model="age"></div>
      <div class="height">Height: <input type="text" v-model="height"> ΟFt / Οm</div>
      <div class="birthday">Birthdate: <input type="text" v-model="birthday.day">/<input type="text" v-model="birthday.month"> (DD/MM)</div>
    </div>
    
    <div id="new">
      <div class="aspect" v-for="(aspect, key) in aspects">
        <h2>{{ aspect.name }}:</h2>
        <div v-if="aspect.type == 'radio'" >
          <div class="choice" v-for="(value, index) in aspect.values">
            <input v-bind:name="key" v-bind:id="key + index" type="radio" v-on:click="check(key)">
            <label v-bind:for="key + index">
              <input v-if="value == ''" type="text">
              <span v-else>{{ value }}</span>
            </label>
          </div>
        </div>
        <div v-else>
          <div class="choice" v-for="(value, index) in aspect.values">
            <input v-bind:class="key" type="checkbox" v-bind:id="key + index" v-on:click="boxCheck(key)">
            <label v-bind:for="key + index">
              <input v-if="value == ''" type="text">
              <span v-else>{{ value }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="aspect">
        <h2>Alignment:</h2>
        <div>
          <h3>Ethically</h3>
          <div class="choice">
            <input name="ethical" id="eLawful" type="radio" value="eLawful" v-model="aligment.ethically" v-on:click="check('ethical')">
            <label for="eLawful">
              <span>Lawful</span>
            </label>
          </div>
          <div class="choice">
            <input name="ethical" id="eNeutral" type="radio" value="eNeutral" v-model="aligment.ethically" v-on:click="check('ethical')">
            <label for="eNeutral">
              <span>Neutral</span>
            </label>
          </div>
          <div class="choice">
            <input name="ethical" id="eChaotic" type="radio" value="eChaotic" v-model="aligment.ethically" v-on:click="check('ethical')">
            <label for="eChaotic">
              <span>Chaotic</span>
            </label>
          </div>
          <hr>
          <h3>Morally</h3>
          <div class="choice">
            <input name="moral" id="mGood" type="radio" value="mGood" v-model="aligment.morally" v-on:click="check('morally')">
            <label for="mGood">
              <span>Good</span>
            </label>
          </div>
          <div class="choice">
            <input name="moral" id="mNeutral" type="radio" value="mNeutral" v-model="aligment.morally" v-on:click="check('morally')">
            <label for="mNeutral">
              <span>Neutral</span>
            </label>
          </div>
          <div class="choice">
            <input name="moral" id="mEvil" type="radio" value="mEvil" v-model="aligment.morally" v-on:click="check('morally')">
            <label for="mEvil">
              <span>Evil</span>
            </label>
          </div>
        </div>
      </div>
      <div class="aspect">
        <h2>MBTI type:</h2>
        <div>
          <div class="choice">
            <input name="ExtraIntro" id="Extro" type="radio" value="extro" v-model="mbti.energy" v-on:click="check('mbtienergy')">
            <label for="Extro">
              <span>Extraversion</span>
            </label>
          </div>
          <div class="choice">
            <input name="ExtraIntro" id="Intro" type="radio" value="intro" v-model="mbti.energy" v-on:click="check('mbtienergy')">
            <label for="Intro">
              <span>Introversion</span>
            </label>
          </div>
          <hr>
          <div class="choice">
            <input name="SensIntu" id="sens" type="radio" value="sens" v-model="mbti.information" v-on:click="check('mbtiinformation')">
            <label for="sens">
              <span>Sensing</span>
            </label>
          </div>
          <div class="choice">
            <input name="SensIntu" id="intu" type="radio" value="intu" v-model="mbti.information" v-on:click="check('mbtiinformation')">
            <label for="intu">
              <span>iNtuition</span>
            </label>
          </div>
          <hr>
          <div class="choice">
            <input name="ThinFeel" id="thin" type="radio" value="thin" v-model="mbti.decision" v-on:click="check('mbtidecision')">
            <label for="thin">
              <span>Thinking</span>
            </label>
          </div>
          <div class="choice">
            <input name="ThinFeel" id="feel" type="radio" value="feel" v-model="mbti.decision" v-on:click="check('mbtidecision')">
            <label for="feel">
              <span>Feeling</span>
            </label>
          </div>
          <hr>
          <div class="choice">
            <input name="JudgPerc" id="judg" type="radio" value="judg" v-model="mbti.lifestyle" v-on:click="check('mbtilifestyle')">
            <label for="judg">
              <span>Judging</span>
            </label>
          </div>
          <div class="choice">
            <input name="JudgPerc" id="perc" type="radio" value="oerc" v-model="mbti.lifestyle" v-on:click="check('mbtilifestyle')">
            <label for="perc">
              <span>Perception</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aspects from '../assets/character-aspects'

export default {
  name: 'CharacterAspects',
  data () {
    return {
      checked: {},
      aspects: aspects,
      name: "",
      age: "",
      height: "",
      birthday: {
        day: "",
        month: ""
      },
      aligment: {
        ethically: "",
        morally: "",
      },
      mbti: {
        energy: "",
        information: "",
        decision: "",
        lifestyle: ""
      }
    }
  },
  computed: {
    numberOfChecked: function () {
      var number = 0;
      for (var property in this.checked) { 
        if(this.checked[property]) number++;
      }
      if(this.name) ++number;
      if(this.age) ++number;
      if(this.height) ++number;
      if(this.birthday.day && this.birthday.month) ++number;
      
      return number;
    },
    numberOfAspects: function () {
      return Object.keys(this.aspects).length + Object.keys(this.aligment).length + Object.keys(this.mbti).length;
    },
    progress: function () {
      return Math.round( this.numberOfChecked / this.numberOfAspects * 100);
    }
  },
  methods: {
    check: function(aspect) {
      if(!this.checked[aspect])
        this.$set(this.checked, aspect, true);
    },
    boxCheck: function(aspect) {
      var checkboxes = document.querySelectorAll('input[type="checkbox"].' + aspect);
      var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
      this.$set(this.checked, aspect, checkedOne);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.character-sheet {
  font-family: Sans-Serif;
  font-size: 13px;
  
  progress {
    width: 100%;
  }
  
  .progress {
    width: 100%;
    background-color: #EEEEEE;
    
    .bar {
      width: 10%;
      height: 30px;
      background-color: #4CAF50;
      text-align: center;
      line-height: 30px; 
      color: white; 
      transition: width 1s;
    }
  }
  
  .basic-info {
    display: flex;
    padding: 5px 0 5px 0;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    
    div {
      background-color: #eee;
      padding: 10px;
      flex: 1 1 auto;
      &:not(:last-child) { margin-right: 5px; }
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    
    .name {
      flex-grow: 5;
      input {
        width: 450px;
      }
    }
    .age {
      flex-grow: 1;
      input {
        width: 50px;
      }
    }
    .height {
      flex-grow: 1;
      input {
        width: 50px;
      }
    }
    .birthday {
      flex-grow: 2;
      input {
        width: 50px;
      }
    }
  }
  
  input[type=text]{
    border-left: 1px;
    border-right: 1px;
    border-top: 1px;
    border-bottom: 1px solid #666;
    background-color: transparent;
  }
}

#new {
  //width: 100vw;
  column-count: 8;
  column-gap: 10px;
  
  @media (min-width: 400px) {
        column-count: 5;
  }
  @media (min-width: 700px) {
    column-count: 7;
  }
  @media (min-width: 900px) {
    column-count: 8;
  }
  
  input[type=text]{
    max-width: 140px;
  }
  
  .aspect {
    background-color: #eee;
    margin: 0 0 5px 0;
    padding: 10px;
    padding-right: 0;
    width: 100%;
    display: inline-block;
    z-index: -2;
    
    h2 {
      margin: 0 0 5px 0;
      text-transform: uppercase;
      font-size: 16px;
    }
    
    h3 {
      margin: 0 0 5px 0;
      font-weight: normal;
    }
    
    input[type=checkbox] {
      vertical-align: sub;
    }
    
    input[type=radio] {
      vertical-align: bottom;
    }
    
    .choice {
      min-height: 19px;
    }
    
    label{
      span{
        vertical-align: sub;
      }
    }
    
    input[type=checkbox] + label, input[type=checkbox] + input[type=text] {
      color: #666;
      font-style: normal;
    } 
    input[type=checkbox]:checked + label, input[type=checkbox]:checked + input[type=text] {
      color: #333;
      font-weight: bold;
      border-color: #333;
    }
    
    input[type=radio] + label, input[type=radio] + input[type=text] {
      color: #666;
      font-style: normal;
    } 
    input[type=radio]:checked + label, input[type=radio]:checked + input[type=text] {
      color: #333;
      font-weight: bold;
      border-color: #333;
    }
  }
}

input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  opacity: 0;
  //z-index: -1;
}
label {
  position: relative;
  display: inline-block;
  //margin-right: 10px;
  margin-bottom: 7px;
  //padding-top: 3px;
  padding-left: 30px;
  padding-right: 10px;
  line-height: 15px; //36
  cursor: pointer;
  z-index: 1;
}
label::before {
  content: " ";
  position: absolute;
  //top: 6px;
  left: 0;
  display: block;
  width: 15px;
  height: 15px;
  border: 2px solid #ccc;
  border-radius: 4px;
  z-index: -1;
}
input[type="radio"] + label::before {
  border-radius: 18px;
}
// Checked 
input[type="checkbox"]:checked + label,
input[type="radio"]:checked + label {
  padding-left: 10px;
  color: #fff;
}
input[type="checkbox"]:checked + label::before,
input[type="radio"]:checked + label::before {
  top: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
}
// Transition 
label,
label::before {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}

</style>
