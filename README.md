# INFLUENZA OUTBREAK CALCULATOR

<!-- ABOUT THE PROJECT -->

## About The Project

In mid-2020, many countries assessed and reported the risk level of COVID-19 infection to educate their citizens. 
It was done in an effort to increase awareness and encourage preventive measures to mitigate the spread of the virus.
In this project, I created a simple influenza calculator to predict the risk of level of Corona Virus. 
There are three stage for the level of risk - safe, alert and warning.
<img src="/calculator.gif">

In the early stage in pandemic, there were not much information regarding key metrics.
Hence, I used this equation ([Influenza outbreak equation from CDC report](https://www.cdc.gov/quarantine/cruise/reporting-deaths-illness/how-calculate-influenza-influenza-like-illness-case-outbreak-threshold-cumulative-reports.html))
to determine the threshold for each level.
```
  methods: {
    threshold(day) {
      return Math.floor(1.38*(this.comm.population*day)/1000);
    }
  }
```

By entering total population, total active cases and activeness, you can predict the level of influenza outbreak risk by its color - safe, alert and warning.



### Built With

This calculator is built with Javascript, Vuejs.


## License

Distributed under the MIT License. See `LICENSE` for more information.
