package com.example.dashboard_covid;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Status {
    private String country;
	private String last_update;
    private int cases;
	private int deaths;
    private int recovered;

    //"country" : "US",
    // "last_update" : "2021-03-03T23:25:01",
    //"cases" : 28779425,
    //"deaths" : 519039,
    //"recovered" : 0
    public Status(String country, String last_update, int cases, int deaths, int recovered) {
		this.country = country;
		this.last_update = last_update;
        this.cases = cases;
        this.deaths = deaths;
        this.recovered = recovered;
	}

    public String getCountry() {
        return country;
    }

    public void setCountry(String Country) {
        this.country=Country;
    }

    public String getLast_update() {
        return last_update;
    }

    public void setLast_update(String Last_update) {
        this.last_update=Last_update;
    }

    public int getCases() {
        return cases;
    }

    public void setCases(int Cases) {
        this.cases=Cases;
    }

    public int getDeaths() {
        return deaths;
    }

    public void setDeaths(int Deaths) {
        this.deaths=Deaths;
    }

    public int getRecovered() {
        return recovered;
    }

    public void setRecovered(int Recovered) {
        this.recovered=Recovered;
    }

    @Override
    public String toString() {
      return "Status{" + "País='" + country + ", Última atualização=" + last_update +  ", Número de casos=" + cases +  ", Mortes=" + deaths +  ", Recuperados=" + recovered +'}';
    }

}