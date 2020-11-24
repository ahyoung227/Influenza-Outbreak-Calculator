Vue.component("simul", {
  props:["comm"],
  computed: {
    per() {
      if (this.comm.population < 0.001) {
        return 0;
      } else {
        return ((this.comm.cases/this.comm.population)*100).toFixed(6); }
    }
  },
  
  methods: {
 //  INFLUENZA OUTBREAK CALCULATE EQUATION
 //   https://www.cdc.gov/quarantine/cruise/reporting-deaths-illness/how-calculate-influenza-influenza-like-illness-case-outbreak-threshold-cumulative-reports.html
    threshold(day) {
      return Math.floor(1.38*(this.comm.population*day)/1000);
    },
    //intercon: how people are active 
     activecase(day, intercons) {
      return this.comm.cases* Math.pow(intercons, day)
     },
    sign(day, intercons) {
      if (this.comm.cases === 0 ) {
      return "signal1"
      } else if (this.activecase(day, intercons) < this.threshold(day)) {
      return "signal2"; 
      } else {
      return "signal3";
      }
   }
   },
  
  template: `<tr>
    <td>{{ comm.Name }}</td>
    <td>
     <label><input type="number" min="0" v-model= "comm.population"></label>
     </td>
     <td>
  <label><input type="number" min="0" v-model= "comm.cases" ></label>
     </td>
     <td>
  <label><input type="number" min="0" v-model= "comm.intercons" ></label>
     </td>
    <td>
      {{ per }} %
    </td>
    <td v-for="(day, idx) in 30">
    <p>OT <span :class='sign(day, comm.intercons)'></span></p>
    {{ threshold(day) }}
    </td>`
});

var app = new Vue({
  el: "#app",
  data: {
    communities: [{Name: 'TC',
                  population: 10000,
                  cases: 0,
                  intercons: 1},
                 {Name: 'NYC subway',
                 population: 10000000,
                 cases: 0,
                 intercons: 1}]
  }
});