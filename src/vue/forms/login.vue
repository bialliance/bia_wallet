<template>
  <svg>
 <path class="fil0 str0" d="M58 90l272 0c11,0 20,9 20,20l0 412c0,11 -9,20 -20,20l-267 0c-11,0 -20,-9 -20,-20l-9 -405c0,-21 16,-26 24,-27z"/>
  <rect class="fil1 str0" x="34" y="99" width="307" height="452" rx="20" ry="23"/>
  <text x="77" y="212"  class="fil2 fnt0">LOGIN</text>
  <text x="76" y="290"  class="fil2 fnt0">PASSWORD</text>
  <rect class="fil3 str0" x="64" y="217" width="231.777" height="40.8886" rx="20" ry="20"/>
  <rect class="fil3 str0" x="64" y="294" width="231.777" height="40.8886" rx="20" ry="20"/>
  <rect class="fil4 str0" x="63" y="409" width="231.777" height="40.8886" rx="20" ry="20" @click="doLogin"/>
  <text x="149" y="438"  class="fil5 fnt1" @click="doLogin">Login</text>
  <text x="70" y="146"  class="fil6 fnt2">BiaWallet</text>
  <path class="fil1 str1" d="M350 324l0 61 -9 7 -34 0c-5,0 -10,-4 -10,-10l0 -43c0,-5 4,-10 10,-10l34 0 9 -5z"/>


    <foreignObject
      x="80"
      y="225"
      width="200"
      height="16"
      style="overflow:visible;"
      transform="translate(0,0) scale(1,1)"
    >
      <input
        v-model="login"
        type="text"
        value="50"
        style="width: 100%; height:16px;"
        class="tableinput1"/>
    </foreignObject>

    <foreignObject
      x="80"
      y="300"
      width="200"
      height="16"
      style="overflow:visible;"
      transform="translate(0,0) scale(1,1)"
    >
      <input v-model="pass" type="text" value="50" style="width: 100%; height:16px;" class="tableinput1"/>
    </foreignObject>
  </svg>
</template>

<style>
.str0 {stroke:#373435;stroke-width:2.3622}
    .str1 {stroke:#373435;stroke-width:2.3622}
    .fil5 {fill:#373435}
    .fil6 {fill:#373435}
    .fil2 {fill:#96989A}
    .fil4 {fill:#EDE82B}
    .fil1 {fill:#F2DC6C}
    .fil0 {fill:#FBF4D3}
    .fil3 {fill:#FEFEFE}
    .fnt0 {font-weight:normal;font-size:16.6665px;font-family:'Arial'}
    .fnt1 {font-weight:normal;font-size:24px;font-family:'Arial'}
    .fnt2 {font-weight:normal;font-size:33.3331px;font-family:'Arial'}

input[type="text"]{
    border: none;
}

input[type="text"]:focus {
    outline: none !important;
    border:none;
    box-shadow: none;
}

</style>

<script>
module.exports = {
  data: function() {
    return {
      login: "somename",
      pass: "pass"
    };
  },
  methods: {
    func: function() {
      alert(this.login + " / " + this.pass);
    },

    doLogin: function(){
        alert(fetch);
        fetch('http://iot.tyuiu.ru/api/v1/users/5c19e977f3d9cd081c9fe097/tarifs').then(r => r.text()).then(alert);
    }
  }
};
</script>
